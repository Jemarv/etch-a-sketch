// will take a colour as the parameter in the future..
const grid = document.getElementById('container')
const clearBtn = document.getElementById('clear')
const eightBtn = document.getElementById('eight')
const sixteenBtn = document.getElementById('sixteen')
const thirtyTwoBtn = document.getElementById('thirtytwo')

function sketch(e) {
    e.target.style.backgroundColor = 'black';
}

let size = 16;
let currentSize;

function setUp(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size*size); i++) {
        const gridSpace = document.createElement('div');
        gridSpace.addEventListener('mouseover', sketch);
        grid.appendChild(gridSpace);
    }
}

eightBtn.addEventListener('click', (size) => {
    size = 8;
    setUp(size);
    currentSize = size;
    return currentSize;
});

sixteenBtn.addEventListener('click', (size) => {
    size = 16;
    setUp(size);
    currentSize = size;
    return currentSize;
});

thirtyTwoBtn.addEventListener('click', (size) => {
    size = 32;
    setUp(size);
    currentSize = size;
    return currentSize;
});

clearBtn.addEventListener('click', () => {
    grid.innerHTML = '';
    setUp(currentSize);
});

setUp(size);