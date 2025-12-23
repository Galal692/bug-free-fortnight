let input = document.getElementById("input");
let ul = document.getElementById("ul");
let p = document.getElementById("p");
let bto = document.getElementById("bto");
let grid_buttons = document.getElementById("grid-buttons");
let title = document.getElementById("title");
let toggle = document.getElementById("toggle");
let equal = document.getElementById("equal");
let body = document.querySelector("body");
let mode = true;


// get the value from the buttons
function getValue(value){
  input.value += value.value;
}

equal.onclick = ()=>{
  input.value = eval(input.value);
}

function del (){
  let a = input.value.split('');
  a.pop()
  input.value = a.join("");
}
function aa(){
  input.value = "";
}
// change the mode
bto.onclick = ()=>{
  if (mode === true){
    bto.setAttribute("class","bto button-first-theme home-2")
    mode = false;
    ul.style.color = "white";
    p.style.color = "white";
    equal.style.background = "#D13F30";
    title.style.color = 'white';
    grid_buttons.setAttribute("class","buttons container padding-20 grid-buttons-home-two")
    body.style.background = "#3B4664";
    input.setAttribute("class","input-home-two mar-b-30")
  }else{
    bto.setAttribute("class","bto button-first-theme")
    mode = true
    title.style.color = 'black'
    input.setAttribute("class","mar-b-30")
    body.style.background = "#E6E6E6";
    grid_buttons.setAttribute("class","buttons container padding-20")
    equal.style.background = "#C85401";
    ul.style.color = "black";
    p.style.color = "black";
  }
}