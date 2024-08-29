const bodyElement = document.querySelector('body');
const btnContainer = document.querySelector('.btn-container');
const container = document.querySelector('.container');
const brushBtn = document.querySelector('.brush');
const rainbowBtn = document.querySelector('.rainbow-btn');
const btnStart = document.querySelector('.btn-start');
let setColor;
const removeBtn = document.querySelector('.remove-btn');

btnStart.addEventListener('click', customGrid);

brushBtn.addEventListener('click', ()=> {
    setColor = 'violet';
})

rainbowBtn.addEventListener('click', ()=>{
    setColor = 'rainbow';
})

removeBtn.addEventListener('click', ()=>{
    setColor = 'white';
})

function createGridOfDivs(gridSize){
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);

        for(let y = 0; y < gridSize; y++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseenter', applyColor);
            row.append(column);
        }
    };
    brushBtn.style.display = 'block';
    removeBtn.style.display = 'block';
};

function customGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let numberOfSquares = prompt('Enter a number between 1 and 100');
    if(numberOfSquares > 100 || numberOfSquares <= 1) {
        numberOfSquares = prompt('Error! Enter a number between 1 and 100')
    };
    return createGridOfDivs(numberOfSquares);
};

function getColor(){
    if(setColor === 'violet') return 'violet';
    if(setColor === 'white') return 'white';
    if(setColor === 'rainbow') {
        for(let i = 0; i < 10; i++){
        let randomColor = Math.floor(Math.random() * i);
        return randomColor;
        }
    }

};

function applyColor(){
    this.style.backgroundColor = getColor();
}