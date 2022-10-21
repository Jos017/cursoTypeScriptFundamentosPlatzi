(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asasa';

  function greetings(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toUpperCase()}`);
    } else {
      console.log(`string ${myText.toFixed(1)}`);
    }
  }
  greetings('Jose');
  greetings(12.212121212);
})();
