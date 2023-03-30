let regex = /^https?:\/\/[^\s/$.?#]+\.[^\s]+([/?#]\S*)?$/gi;
let string = "https://learn.pwskills.com/lesson/Callback/64219b7eaf09d653cf56a090/course/Full-Stack-web-development/63a2ecf58899439c8d7ebdc6"
let result = regex.test(string);
console.log(result)