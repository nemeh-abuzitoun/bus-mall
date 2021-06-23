
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



// }

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
