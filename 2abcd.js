const price = [
    { "monthly": 200, "oneTime": 300, "total": 5000},
    { "monthly": 400, "oneTime": 300, "total": 700},
    { "monthly": 700, "oneTime": 1000, "total": 300},
    { "monthly": 630, "oneTime": 1100, "total": 600},
    { "monthly": 100, "oneTime": 400, "total": 300},
    { "monthly": 2000, "oneTime": 900, "total": 3000},
    { "monthly": 200, "oneTime": 900, "total": 300}
  ];
  
  // a.Find a monthly price of 200 and a total of 300.
  const foundPrice = price.find((price) => {
    return price.monthly === 200 && price.total === 300;
  });
  console.log(foundPrice);
  
  // b.Filter total price greater than 700.
  const filteredPrices = price.filter((price) => {
    return price.total > 700;
  });
  console.log(filteredPrices);
  
  // c.Find a monthly price of 630 and a total of 600 and print a oneTime price.
  const foundOneTimePrice = price.find((price) => {
    return price.monthly === 630 && price.total === 600;
  });
  console.log(foundOneTimePrice.oneTime);
  
  // d.Add all monthly prices and print the total.
  const totalMonthlyPrice = price.reduce((acc, price) => {
    return acc + price.monthly;
  }, 0);
  console.log(totalMonthlyPrice);
  