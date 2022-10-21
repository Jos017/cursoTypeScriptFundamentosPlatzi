(() => {
  // Alias
  type UserId = string | number | boolean;
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`string $ {userId.toLowerCase()}`);
    }
  }

  //Literal Types
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  // let shirtSize: string;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'a'; // Genera un error
})();
