let dogColumn0 = document.querySelector('#dog-table-count-0')
let dogColumn1 = document.querySelector('#dog-table-count-1')
let dogColumn2 = document.querySelector('#dog-table-count-2')

if (dogVoteCount0 === null) {
    dogVoteCount0 = 0; //pip
} 

console.log(dogVoteCount0)
dogColumn0.textContent = dogVoteCount0;

let dogVoteCount0 = 0; //pip
let dogVoteCount1 = 0; // tess
let dogVoteCount2 = 0; //rizzop


// // selectors
let header = document.querySelector('#page-header');
let dogDescriptions = document.querySelectorAll('.dog-description');
let dogNames = document.querySelectorAll('.dog-name');
let dogImages = document.querySelectorAll('.dog-image');
let columns = document.querySelectorAll('.column')



header.style.textAlign = "left";


for(let x = 0; x < dogNames.length; x++){

    if(x % 2 === 0){
        // console.log(x, 'is even')
        dogNames[x].style.color = 'red';
    } else {
        // console.log(x, 'is odd')
        dogNames[x].style.color = 'blue';
    }

    dogNames[x].style.textAlign = "left";
}

for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = "50px";
    dogImages[i].style.height = "50px";
}

for(let i = 0; i < dogDescriptions.length; i++){
    // console.log(dogDescriptions[i])
    dogDescriptions[i].remove();
}

for(let i = 0; i < columns.length; i++) {
    let button = document.createElement('button');

    button.textContent = 'Vote';
    let idName = 'dog-name-' +  i;
    button.setAttribute('id', idName);

    columns[i].append(button)
}


// button IDs: 
// dog-name-0 pip
// dog-name-1 tess
// dog-name-2 rizzo



let dogButton0 = document.querySelector('#dog-name-0');
let dogButton1 = document.querySelector('#dog-name-1');
let dogButton2 = document.querySelector('#dog-name-2');

dogButton0.addEventListener('click', function(){
    dogVoteCount0 = parseInt(dogVoteCount0) + 1
    // console.log(dogVoteCount0);
    dogColumn0.textContent = dogVoteCount0;
    // store counter in localstorage
    localStorage.setItem('dogVoteCount0', dogVoteCount0);
});

dogButton1.addEventListener('click', function(){
    dogVoteCount0 = parseInt(dogVoteCount1) + 1
    // console.log(dogVoteCount1);
    dogColumn1.textContent = dogVoteCount1;
    // store counter in localstorage
    localStorage.setItem('dogVoteCount1', dogVoteCount1);
});

dogButton2.addEventListener('click', function(){
    dogVoteCount2 = parseInt(dogVoteCount2) + 1
    // console.log(dogVoteCount1);
    dogColumn2.textContent = dogVoteCount2;
    // store counter in localstorage
    localStorage.setItem('dogVoteCount2', dogVoteCount2);
});


