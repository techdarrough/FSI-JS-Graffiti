//counter cars

localStorage.getItem('dogVoteCount0');

If (dogVoteCount0 === null) {
    let dogVoteCount0 = 0 
    };

let dogVoteCount0 = 0; //pip
let dogVoteCount1 = 0; // tess
let dogVoteCount2 = 0; //rizzop
// selectors
let header = document.querySelector('#page-header');
let dogDescriptions = document.querySelectorAll('.dog-description');
let dogNames = document.querySelectorAll('.dog-name');
let dogImages = document.querySelectorAll('.dog-image');
let columns = document.querySelectorAll('.column');

header.style.textAlign = "left";

for(let i = 0; i < dogNames.length; i++){
    if(i % 2 === 0){
     
        dogNames[i].style.color = 'red';
    } else {
        dogNames[i].style.color = 'green';
    }
    dogNames[i].style.textAlign = "left";
}



for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}


 for(let i = 0; i < dogDescriptions.length; i++){
     dogDescriptions[i].remove()
 }
// add button to every column 

for(let i = 0; i < columns.length; i++){
    let buttons = document.createElement('button');

    buttons.textContent = 'vote';
    let idName = 'dogs-name-' + i
    buttons.setAttribute('id', idName)
    buttons.addEventListener('click', function (){ })
    columns[i].append(buttons)

}
// button IDs:
let dogButton0 = document.querySelector('#dogs-name-0')
let dogColumn0 = document.querySelector('#dog-table-0')
//dogs-name-0 pip

dogButton0.addEventListener('click', function(){
    
    dogVoteCount0 = dogVoteCount0 + 1
    // console.log(dogVoteCount0)
    dogColumn0.textContent = dogVoteCount0;
    // store in local storage
    localStorage.setItem('dogVoteCount0', dogVoteCount0)
});
//dogs-name-1 tess
//dogs-name-0 rizzo

