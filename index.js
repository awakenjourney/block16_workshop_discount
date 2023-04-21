// Block 16 Workshop: Discount Chain

/**pseudocode:
 * create the checkout calculator for each patient
 * if a patient has a subscription, he/she get 25% discount
 * if a patient has a coupon, he/she get extra $10 discount
 * calculate total price before discount
 * apply 25% and $10 discount to patient with subscription and coupon
 * apply 25% discount to patient with subscription
 * apply $10 discount to patient with coupon
 * return grand total after discount of a patient
 */

// 3 patients
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

const refillCheckout = (patient) => {
  let beforeDiscount = patient.pricePerRefill * patient.refills;
  let subScriptionDiscount = 0;
  let couponDiscount = 0;

  if (patient.subscription === true && patient.coupon === true) {
    subScriptionDiscount = (25 / 100) * beforeDiscount;
    couponDiscount = 10;
  } else if (patient.subscription === true) {
    subScriptionDiscount = (25 / 100) * beforeDiscount;
  } else if (patient.coupon === true) {
    couponDiscount = 10;
  }

  // return the grand total
  return `Your grand total is ${
    beforeDiscount - subScriptionDiscount - couponDiscount
  }`;
};

//
console.log(refillCheckout(rocky));
