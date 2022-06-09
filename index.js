const magicNumber = 5;

while (true) {
  const userNumber = Number(prompt("Enter number in 1 for 10"));
  if (userNumber === magicNumber) {
    console.log(" Yes! You plassed!");
    break;
  }
  if ( userNumber === "" || 
       isNaN(userNumber) || 
       userNumber === 0) {
    console.log("Is not number");
  } else if (userNumber < magicNumber) {
    console.log("The number is greater");
  } else if (userNumber > magicNumber) {
    console.log("The number is less");
  }
  console.log("try again");
}
