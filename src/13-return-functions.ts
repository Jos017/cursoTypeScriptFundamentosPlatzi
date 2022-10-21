(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  const rta = calcTotal([1, 2, 1, 1, 1]);
  console.log(rta);

  console.log(printTotal([1, 2, 3]));
})();
