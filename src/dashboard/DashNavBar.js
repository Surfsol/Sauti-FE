import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { NavLink, Route, withRouter } from "react-router-dom";
import { HistoryListen, PageView } from "./GoogleAnalytics/index";
import UsersQuery from "./Admin/UsersQuery";
import AccountHandler from "../dashboard/DashboardAccount/AccountHandler";
import NoAccount from "../dashboard/DashboardAccount/NoAccount";
import CreateAccount from "./CreateAccount";
import LandingPage from "./LandingPage";
import QueryGraphLabels from "./QueryGraphLabels";
import DashData from "./DashData";
import DashLogout from "./DashLogout";
import Login from "./Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import CodeRoute from "./DashboardAccount/PasswordReset/auth/CodeRoute";
import { getToken, decodeToken } from "./auth/Auth";
import UserSVG from "./Images/UserSVG";
import ForgotPassword from "./DashboardAccount/PasswordReset/ForgotPassword";
import ResetPasswordContainer from "./DashboardAccount/PasswordReset/ResetPasswordContainer";
import LandingParent from "../Components/themeLanding/LandingParent";
import Pricing from "../Components/themePricing/Pricing";
import Contact from "../Components/themeContact/Contact";
import About from "../Components/themeAbout/About";
import Faqs from "../Components/themeFAQs/Faqs";
import { useSelector } from "react-redux";

import {
  TopBar,
  SautiLogo,
  SautiLogoText,
  SautiDot,
  Navigation,
  Links,
  Container
} from "./styledComponents/Index";

function DashNav() {
  HistoryListen();

  useEffect(() => {
    PageView();
  });

  const SignedIn = getToken();
  const token = getToken();
  let email;
  let tier;
  if (token) {
    let tokenDecoded = decodeToken(token);
    email = tokenDecoded.email;
    tier = tokenDecoded.tier;
  }

  const labels = useSelector(state => state.catLabelReducer.labels);
  let labelsRedux = false;
  if (labels) {
    labelsRedux = labels.getGraphLabels;
  }

  // const isLandingPage = window.location.href ? "http://localhost:3000/" : null;

  return (
    <>
      <Container>
        <TopBar LandingPage={LandingPage.props}>
          <SautiLogo>
            <ReactGA.OutboundLink
              style={{ textDecoration: "none" }}
              eventLabel="Outbound Link to http://sautiafrica.org/"
              to="http://sautiafrica.org/"
            >
              <SautiLogoText href="http://sautiafrica.org/">
                <p>
                  Sauti<SautiDot>.</SautiDot>
                </p>
              </SautiLogoText>
            </ReactGA.OutboundLink>
          </SautiLogo>
          <Navigation>
            <Links to="/">HOME</Links>
            <Links to="/data">DATA</Links>
            <Links to="/about">ABOUT</Links>
            <Links to="/faqs">FAQs</Links>
            {SignedIn && <Links to="/myaccount">ACCOUNT</Links>}
            {!SignedIn && <Links to="/pricing">PRICING</Links>}
            <Links to="/contact">CONTACT</Links>
            {!SignedIn && <Links to="/login">LOGIN</Links>}
            {tier === "ADMIN" && <Links to="/admin">ADMIN</Links>}
            {SignedIn && <Links to="/logout">LOGOUT</Links>}
            {SignedIn && (
              <div className="loggedInAs">
                <UserSVG />
                <span className="email">{email}</span>
              </div>
            )}
          </Navigation>
        </TopBar>
      </Container>
      <Route exact path="/" component={LandingParent} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faqs" component={Faqs} />
      <Route
        exact
        path="/data"
        component={labelsRedux ? DashData : QueryGraphLabels}
      />
      <Route exact path="/admin" component={UsersQuery} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={CreateAccount} />
      <Route exact path="/passwordreset" component={ForgotPassword} />
      <Route exact path="/noaccount" component={NoAccount} />
      <ProtectedRoute exact path="/myaccount" component={AccountHandler} />
      <ProtectedRoute exact path="/logout" component={DashLogout} />
      <CodeRoute
        exact
        path="/password-verification"
        component={ResetPasswordContainer}
      />
    </>
  );
}

export default withRouter(DashNav);
