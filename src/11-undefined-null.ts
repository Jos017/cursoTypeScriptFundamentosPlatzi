(() => {
  // let myNumber: number = undefined; // undefined is not number
  // let myString: string = null;      // null is not a string
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aas';

  function hi(name: string | null) {
    let hello = 'hola';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('Nicolas');
  hi(null);

  function hiV2(name: string | null) {
    let hello = 'hola';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }
  hiV2('Nicolas');
  hiV2(null);
})();
