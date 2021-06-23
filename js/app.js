'user strict';
const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const midImage = document.getElementById('midImage');
const rightImage = document.getElementById('rightImage');
const viewResult = document.getElementById('viewResult');
const listOfResults = document.getElementById('listOfResults');

let round = 25;
let counter = 0;

// let globalLeftIndex;
// let globalMidIndex;
// let globalRightIndex;

let leftIndex;
let midIndex;
let rightIndex;

let imgArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function Images(name, src) {
  this.name = name;
  this.imgSrc = `./img/${src}`;
  this.view = 0;
  this.click = 0;
  Images.all.push(this);
}

Images.all = [];

for(let i = 0; i < imgArr.length; i++) {
  let imageName = imgArr[i].split('.')[0];
  new Images(imageName, imgArr[i]);
}

// console.log(Images.all);

function renderImages() {
  leftIndex = getRandom(0, imgArr.length - 1);
  
  do {
    midIndex = getRandom(0, imgArr.length - 1);
    rightIndex = getRandom(0, imgArr.length - 1);
  } while (leftIndex === midIndex || leftIndex === rightIndex || midIndex === rightIndex);

  leftImage.src = Images.all[leftIndex].imgSrc;
  midImage.src = Images.all[midIndex].imgSrc;
  rightImage.src = Images.all[rightIndex].imgSrc;

  Images.all[leftIndex].view++;
  Images.all[midIndex].view++;
  Images.all[rightIndex].view++;

}

function clickFunction(event) {
  if((event.target.id === 'leftImage' || event.target.id === 'midImage' || event.target.id === 'rightImage') && counter < round) {
    // console.log(event.target.id);
    if(event.target.id === 'leftImage') {
      Images.all[leftIndex].click++;

    }

    if(event.target.id === 'midImage') {
      Images.all[midIndex].click++;

    }

    if(event.target.id === 'rightImage') {
      Images.all[rightIndex].click++;
    }

    console.log(Images.all);

    renderImages();
    counter++;
  }
}

function printResult(e) {
  for(let i = 0; i < Images.all.length; i++) {
    let li = document.createElement('li');
    listOfResults.appendChild(li);
    li.textContent = `${Images.all[i].name} had ${Images.all[i].click} votes, and was seen ${Images.all[i].view} times.`
  }

  viewResult.removeEventListener('click', printResult);
}

imageSection.addEventListener('click', clickFunction);
viewResult.addEventListener('click', printResult);

renderImages();

console.log(Images.all)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}