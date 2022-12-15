// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// create variable to grab element from html (queryselector)
// loop through to choose each color
// create event listener
// what do you want the listener to do


const allColor = document.querySelectorAll("#palette div.color");
allColor.forEach((colorElement) =>  {
 colorElement.addEventListener('click', () => {
  const currentColor = document.querySelector('#current-color');
  currentColor.style.background = colorElement.style.background;
 });
});

// create variable to grab node list cells (cells not in css)
// loop through list with forEach
// create event listener for 'click' on each cell
// change cell background to be currentColor


const allCells = document.querySelectorAll('#canvas div.cell');
allCells.forEach((cell) => { 
  cell.addEventListener('mouseover', (event) => {
    const currentColor = document.querySelector('#current-color');
event.target.style.background = currentColor.style.background
  });
});

// add an event listener so when i double click
// background will change back to white
// so that if i make a mistake on my wonderful art creation
// i can undo !


// function erase(event){
//   event.target.style.background = 'white';
// }
// cell.addEventListener('dblclick',erase);

// this was a really fun lab to see practical application of dom manipulation & events