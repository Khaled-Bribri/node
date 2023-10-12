const cowsay = require("cowsay");
const userInfo = require("./information");

console.log(
  cowsay.say({
    text: `Hello I'am ${userInfo.name} from ${userInfo.campus}!`,
  })
);
