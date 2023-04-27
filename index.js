// function to apply subscription discount
const applySubscriptionDiscount = (total) => {
    return total * 0.75;
  }
// function to apply coupon discount  
  const applyCouponDiscount = (total) => {
    return total - 10;
  }
// function to calculate grand total  
  const calculateGrandTotal = (customer) => {
    let refillTotal = customer.pricePerRefill * customer.refills;
    
    if (customer.subscription) {
      refillTotal = applySubscriptionDiscount(refillTotal);
    }
    
    if (customer.coupon) {
      refillTotal = applyCouponDiscount(refillTotal);
    }
// return final total as formatted 
    return `Your grand total is $${refillTotal}.`;
  }
  
  // test with customer objects
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
  
  console.log(calculateGrandTotal(timmy)); // "Your grand total is $65."
  console.log(calculateGrandTotal(sarah)); // "Your grand total is $37.5."
  console.log(calculateGrandTotal(rocky)); // "Your grand total is $102.5."