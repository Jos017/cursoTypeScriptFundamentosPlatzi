(() => {
  let prices = [1, 2, 2, 1, 1, 212]; // Array of Numbers defined
  // prices.push('string');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);

  let multipleValuesArray = ['string', true];
  // multipleValuesArray.push(1)

  // Define explicit types of values for the array
  let mixed: (number | string | boolean)[] = ['string', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);

  let numbers = [1, 2, 3, 4, 5];
  numbers.map((item) => item * 2);
})();
