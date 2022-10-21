(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  // For obtaining typeScript types help we can use
  // (variable as type)
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  // Other way to force the type of a variable
  // (<type>variable)
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
