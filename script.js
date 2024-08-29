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
});

rainbowBtn.addEventListener('click', ()=>{
    setColor = 'rainbow';
});

removeBtn.addEventListener('click', ()=>{
    setColor = '#7cfc2c08';
});

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
    rainbowBtn.style.display = 'block';
};

function customGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let numberOfSquares = prompt('Enter a number between 1 and 100');
    if(numberOfSquares > 100 || numberOfSquares < 2) {
        numberOfSquares = prompt('Error! Enter a number between 1 and 100')
    };
    return createGridOfDivs(numberOfSquares);
};

function getColor(){
    if(setColor === 'violet') return 'violet';
    if(setColor === '#7cfc2c08') return '#7cfc2c08';
    if(setColor === 'rainbow') return getRandomColor();
};

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyColor(){
    this.style.backgroundColor = getColor();
}
