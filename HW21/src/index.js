import "./style.css";
import lorempic from "./1.jpeg";
const picture = document.createElement(`img`);
picture.setAttribute(`src`, lorempic);
document.body.appendChild(picture);
async function start() {
  return await Promise.resolve(`Async is working`);
}
start().then(console.log);
