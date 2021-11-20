
// table vote count elements:
let dogVote0tableCell = document.querySelector('.dog-vote-0');
let dogVote1tableCell = document.querySelector('.dog-vote-1');
let dogVote2tableCell = document.querySelector('.dog-vote-2');



// count variables 

if(localStorage.getItem('dogVote0') === null){
    var dogVote0 = 0;
} else {
    var dogVote0 = parseInt(localStorage.getItem('dogVote0'));
    dogVote0tableCell.textContent = dogVote0;
}

if(localStorage.getItem('dogVote1') === null){
    var dogVote1 = 0;
} else {
    var dogVote1 = parseInt(localStorage.getItem('dogVote1'));
    dogVote1tableCell.textContent = dogVote1;
}

if(localStorage.getItem('dogVote2') === null){
    var dogVote2 = 0;
} else {
    var dogVote0 = parseInt(localStorage.getItem('dogVote2'));
    dogVote2tableCell.textContent = dogVote2;
}



// dog div:
let dogContainers = document.querySelectorAll('.column');
let dogDescriptions = document.querySelectorAll('.dog-description');

// removing description <p>
for(let i = 0; i < dogDescriptions.length; i++){
    dogDescriptions[i].remove()
}


// created a button to append to my dog divs:
for(let i = 0; i < dogContainers.length; i++){
    let button = document.createElement('button');

    //set class names for button
    let className = 'dog-button-' + String(i)
    button.setAttribute('class', className);

    // add text to button
    button.textContent = 'Vote!';

    // style my buttons:
    button.style.backgroundColor = 'red';
    button.style.color = 'yellow';
    button.style.fontSize = '20px'

    dogContainers[i].append(button);
}

// button one count code
let buttonOne = document.querySelector('.dog-button-0');
// console.log(buttonOne);

buttonOne.addEventListener('click', function(){
    // update dog counter and append value to table cell:
    dogVote0 = dogVote0 + 1
    dogVote0tableCell.textContent = dogVote0;

    // store counter value in localstorage
    localStorage.setItem('dogVote0', dogVote0);


})

// button two  count code 

let buttonTwo = document.querySelector('.dog-button-1');
console.log(buttonTwo);

buttonTwo.addEventListener('click', function(){
    // update dog counter and append value to table cell:
    dogVote1 = dogVote1 + 1
    dogVote1tableCell.textContent = dogVote1;

    // store counter value in localstorage
    localStorage.setItem('dogVote1', dogVote1);


})

// button three count code
let buttonThree = document.querySelector('.dog-button-2');
// console.log(buttonOne);

buttonThree.addEventListener('click', function(){
    // update dog counter and append value to table cell:
    dogVote2 = dogVote2 + 1
    dogVote2tableCell.textContent = dogVote2;

    // store counter value in localstorage
    localStorage.setItem('dogVote2', dogVote2);


})































