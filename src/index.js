import dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./dashboard/App";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Components/reducers/rootReducer";

//Theme stuff
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./theme";
import typography from "./theme";
import theme from "./theme";

dotenv.config();

const store = createStore(rootReducer, applyMiddleware(thunk));
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}`,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkErrors", networkError);
  }
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store} theme={theme}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
