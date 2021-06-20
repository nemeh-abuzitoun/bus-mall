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

let counter = 0 ;
function images ( name, src){
    this.name=name;
    this.src=`./img/${src}`;
    this.shownTimes = 0 ;
    /*there is 2 more property remember ya n3meh */
    // this.shownTimes
    // this.shownTimes
    images.all.push(this);
    
}
images.all =[];
 
for ( let i = 0; i < imageArray.length; i++ ){
    new images ( imageArray[i].split('.')[0],imageArray[i]);
}

function render (){
    let leftIndex = randomNumber (0,imageArray.length-1);
    let middleIndex=randomNumber(0, imageArray.length - 1);
let rightIndex=randomNumber(0, imageArray.length - 1);



while (middleIndex === rightIndex || middleIndex === leftIndex || rightIndex===leftIndex)
{
     leftIndex = randomNumber (0,imageArray.length-1);
     middleIndex=randomNumber(0, imageArray.length - 1);
     rightIndex=randomNumber(0, imageArray.length - 1); 
}


leftImage.src = images.all[leftIndex].src;
middleImage.src = images.all[middleIndex].src;
rightImage.src = images.all[rightIndex].src;

images.all[leftIndex].shownTimes++;
images.all[middleIndex].shownTimes++;
images.all[rightIndex].shownTimes++;


console.log(images.all);

}
function eventHandler(n) {
    if((n.target.id === 'rightImage' || n.target.id === 'leftImage'|| n.target.id === 'middleImage') && counter < 25){
        render();
        console.log(counter);
        counter++;
    }
}
imagePartition.addEventListener('view Result',eventHandler);
render();



console.log(images.all);
leftImage.setAttribute('src', images.all[0].src)
let index = randomNumber(0, imageArray.length - 1);
// middleImage.src = images.all[index].src;
rightImage.src = images.all[index].src;

console.log( leftImage, middleImage , rightImage );






function randomNumber( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) + min ); 
  }