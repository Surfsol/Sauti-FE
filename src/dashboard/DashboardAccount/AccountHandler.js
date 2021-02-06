import React from "react";
import { getToken, decodeToken, getSubscription } from "../auth/Auth";
import { useNewSubName } from "./useNewSubNameHook";
import NewSubscriberHandler from "./NewSubscriberHandler";
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
  }

  let newPaypalSubscriber = useNewSubName(newSub);

  if (newSub && newPaypalSubscriber) {
    return <NewSubscriberHandler newPaypalSubscriber={newPaypalSubscriber} />;
  }

  return <Accounts tier={decoded.tier} decoded={decoded} />;
};

export default AccountHandler;
