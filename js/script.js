let input = document.querySelector("#input");
let sampleBox = document.querySelector(".right > span > span");
let timer = document.querySelector("#timer");
let btnRe = document.querySelector("#btnRe");
let btnNew = document.querySelector("#btnNew");

let time = [0, 0, 0, 0];
let flag = false;
let stop;

const starterTimer = () => {
  let datatime = `${zero(time[0])}:${zero(time[1])}:${zero(time[2])}`;
  time[3]++;
  time[0] = Math.floor(time[3] / 6000);
  time[1] = Math.floor(time[3] / 100 - time[0] * 60);
  time[2] = Math.floor(time[3] - (time[1] * 100 + time[0] * 6000));
  timer.innerHTML = datatime;
};

const checkText = () => {
  let text = document.querySelector("#sample").innerHTML;
  let textInput = input.value;
  let textMatch = text.substr(0, textInput.length);
  console.log(textMatch);
  if (textInput == text) {
    input.style.border = "2px solid green";
    console.log("green");
    clearInterval(stop);
  } else if (textInput == textMatch) {
    input.style.border = "2px solid yellow";
    console.log("yellow");
  } else {
    input.style.border = "2px solid red";
    console.log("red");
  }
};
//true
const zero = (data) => {
  if (data <= 9) {
    return "0" + data;
  } else {
    return data;
  }
};
const msTimer = () => {
  if (!flag) {
    stop = setInterval(starterTimer, 10);
    flag = true;
  }
};
const resetTimer = () => {
  clearInterval(stop);
  input.style.border = "1px solid gray";
  time = [0, 0, 0, 0];
  input.value = "";
  flag = false;
  timer.innerHTML = "00:00:00";
};

const newText = () => {
  let sampleListWords =
    `Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores veniam natus quidem enim nostrum mollitia iusto praesentium fugiat fugit quasi vero Labore possimus sint corrupti ullam iste soluta quasi et Tempora nulla aliquid rerum rem mollitia aliquam error nemo nisi repellat sit suscipit Incidunt laudantium provident voluptatum Provident praesentium eum magni sit maxime omnis delectus quam eaque eius id dolorem nostrum officia corporis officiis Quod consectetur at libero Expedita praesentium voluptatem nobis Magnam Nisi nobis dolorem velit perferendis minima dicta voluptatem distinctio consectetur corrupti odit sunt reiciendis laborum repellendus Maiores debitis consequuntur illo optio Soluta a nam ex dolores swq`.split(
      " "
    );
  let newStr = "";
  for (let index = 0; index < Math.ceil(Math.random() * 10); index++) {
    newStr += sampleListWords[Math.ceil(Math.random() * 100)] + " ";
  }
  newStr = newStr.slice(0, newStr.length - 2) + ".";
  sampleBox.innerHTML = newStr;
};
input.addEventListener("keypress", msTimer);
input.addEventListener("keyup", checkText);
btnRe.addEventListener("click", resetTimer);
btnNew.addEventListener("click", newText);
