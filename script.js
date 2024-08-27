const bodyElement = document.querySelector('body');
const mainContainer = document.querySelector('.main-container');
const divContainer = document.createElement('div');
divContainer.classList.add('div-container');
mainContainer.append(divContainer);
let num;

const btnStart = document.createElement('button');
btnStart.classList.add('btn-start');
btnStart.textContent = 'Start';
mainContainer.append(btnStart);
btnStart.addEventListener('click', ()=>{
    let numberOfSquares = prompt('Enter a number from 1 o 100');
    if(numberOfSquares > 100) {
        numberOfSquares = prompt('Error! Enter a number from 1 o 100')
    };
    num = numberOfSquares;
    // deleteDivs();
    createGridOfDivs(num);
});

function createGridOfDivs(num){
    for(let i = 0; i < (num * num); i++){
        const div = document.createElement('div');
        div.classList.add('div');
        div.addEventListener('mouseenter', ()=> {
            div.classList.toggle('div-hover')
        });
        // div.style.height = '8px';
        // div.style.width = '8px';
        let height = div.height() + num + 'px';
        let width = div.innerWidth() + num + 'px';
        div.style.width = width;
        div.style.height = height;
        divContainer.append(div);
        if(num > 1){}
    }
};

// function deleteDivs(){
//     const divSquares = createGridOfDivs();
//     divSquares.remove();
// }