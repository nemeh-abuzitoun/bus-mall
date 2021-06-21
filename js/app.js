'use strict';
let imageArray = [
'bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg',
];

let imagePartition = document.getElementById('imagePartition');
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightImage');
// let viewResult = document.getElementById('viewResult');
// let listOfResult =document.getElementById('listOfResult');
// let clicks=25;
let counter = 0 ;

function images ( imageName, src){
    this.imageName=imageName;
    this.src=`./img/${src}`;
    this.shownTimes = 0 ;
    images.all.push(this);
    
}
images.all =[];
 
for ( let i = 0; i < imageArray.length; i++ ){
    new images ( imageArray[i].split('.')[0],imageArray[i]);
}

function render (){
    let leftIndex = randomNumber (0, imageArray.length - 1);
    let middleIndex=randomNumber(0, imageArray.length - 1);
let rightIndex=randomNumber(0, imageArray.length - 1);



while (middleIndex === rightIndex || middleIndex === leftIndex || rightIndex===leftIndex)
{
     leftIndex = randomNumber (0, imageArray.length - 1);
     middleIndex=randomNumber(0, imageArray.length - 1);
     rightIndex=randomNumber(0, imageArray.length - 1); 
}


leftImage.src = images.all[leftIndex].src;
middleImage.src = images.all[middleIndex].src;
rightImage.src = images.all[rightIndex].src;

images.all[leftIndex].shownTimes++;
images.all[middleIndex].shownTimes++;
images.all[rightIndex].shownTimes++;

// function clicksTimes (event){
//     if ((Event.target.id==='leftImage'||Event.target.id==='rightImage'||Event.target.id==='middleImage')&& counter <clicks)

// clicks++;

// }

// clicksTimes();
console.log(images.all);

}
function eventHandler(n) {
    if((n.target.id === 'rightImage' || n.target.id === 'leftImage'|| n.target.id === 'middleImage') && counter < 10){
        render();
        // console.log(counter);
        counter++;
    } else if (counter >= 10) {
        drawChart();

}

}



imagePartition.addEventListener('view Result',eventHandler);
render();



console.log(images.all);

// leftImage.setAttribute('src', images.all[0].src)
let index = randomNumber(0, imageArray.length - 1);
// middleImage.src = images.all[index].src;
// rightImage.src = images.all[index].src;

// console.log( leftImage, middleImage , rightImage );






function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
  }

// //   calculat  how many times an image has been showen
//  let b = document. getElementById('form');

//  function shownTimesNo()
//  for( let e =0 ; e < selctor.length ; e++){
// shownTimesNo++


//  }

function drawChart(){
   imageName  =[];
     view  =[];



for(let i = 0; i < images.all.length; i++) {
    imageName.push(images.all[i].imageName);
    view.push(images.all[i].shownTimes);
  }


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imageName,
        datasets: [{
            label: '# of Votes',
            data: view,

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    } );
  
  }