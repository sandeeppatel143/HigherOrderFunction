const string = "I AM SANDEEP";
console.log(string);

function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

const reversedString = reverseString(string);

setTimeout(() => {
  console.log(reversedString);
}, 2000);