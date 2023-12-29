let pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let boxes = document.querySelectorAll(".box");
let re= document.querySelector(".btn");
let newGame = document.querySelector(".New-game");
let h2 = document.querySelector("h2");
let container = document.querySelector("#conta");
let value = true;

let restart = ()=>{
  h2.innerText = "";
  value =true;
  for(let box of boxes){
    box.innerText = "";
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (value) {
      box.innerText = "O";
      value = false;
    } else {
      box.innerText = "X";
      value = true;
    }
    box.disabled = true;
    won();
  });
});
const disabledbox = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const won = () => {
  for (let item of pattern) {
    let position1 = boxes[item[0]].innerText;
    let position2 = boxes[item[1]].innerText;
    let position3 = boxes[item[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        h2.innerText = `Congratulation The Winner is ${position1}`;
        disabledbox();
      }
    }
  }
};



newGame.addEventListener('click',restart);
re.addEventListener('click',restart);