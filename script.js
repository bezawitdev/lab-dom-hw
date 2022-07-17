let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const mainTitle = function(){
    document.querySelector('#main-title').textContent = "Welcome to my Cool Page"
  }
  mainTitle()

 // Part 2
  const wholeBody = function(){
    document.body.style.backgroundColor = "yellow";

  }
  wholeBody()
  
  // Part 3
const removeList = function(){
  const listDom = document.querySelector('#favorite-things');

  const removeLi = listDom.querySelector("li:last-child");

  listDom.removeChild(removeLi)

}

removeList()

  // Part 4
const fontChange = function (){


  // const selectAll = document.querySelectorAll(".special-title")
  
  // selectAll.style.fontSize = "2rem"
}

fontChange()
  // Part 5

const removeChicago = function (){

    const selectLi = document.getElementById("past-races");
    thirdElement = selectLi.getElementsByTagName("li")[3];
    selectLi.removeChild(thirdElement)
console.log(thirdElement)
  }
  removeChicago()



  // Part 6


const appendLi = function(){
  const newLi = document.createElement("li");
  const selectUl = document.getElementById("past-races");
  selectUl.appendChild(newLi)
  newLi.innerText = "Paris"
  console.log(selectUl)
}
appendLi()


  // Part 7


const createAll = function(){
  let createH1 = document.createElement("h1")
  let createDiv = document.createElement("div");
  let createP = document.createElement("p");
  createH1.textContent = "Paris"
  createP.textContent = "I RACED in Pasris and it is adventurous!"
  
  createDiv.appendChild(createH1)
  createDiv.appendChild(createP)

let containerDiv = document.querySelector(".main");
containerDiv.appendChild(createDiv)
createDiv.classList.add("blog-post")
createDiv.classList.add("purple")

}

createAll()

}