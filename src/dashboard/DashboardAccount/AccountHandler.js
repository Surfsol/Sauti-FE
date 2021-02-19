import React from "react";
import { getToken, decodeToken, getSubscription } from "../auth/Auth";
import Accounts from "../../Components/Account/index";
// This component handles the conditionals for the users
// We can include an else statement if all else fails to throw some error or push them back to login page

const AccountHandler = () => {
  const token = getToken();
  const decoded = decodeToken(token);
  const newSub = getSubscription();

  let sub;
  if (newSub) {
    console.log(newSub, "NEW SUB?");
    sub = newSub;
    decoded.tier = "PAID";
  }

  return <Accounts tier={decoded.tier} decoded={decoded} />;
};

export default AccountHandler;
