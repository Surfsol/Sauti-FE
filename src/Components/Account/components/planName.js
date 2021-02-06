const namePlan = name => {
  let planName;
  switch (name) {
    case "FREE":
      planName = "Free Trial";
      break;
    case "PAID":
      planName = "Premium Access";
      break;
    case "EXPIRED":
      planName = "EXPIRED";
      break;
    case "GOV":
      planName = "Complimentary";
    case "ADMIN":
      planName = "ADMIN";
  }
  return planName;
};
export { namePlan };
