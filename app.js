import add from './add.js';

//Num inputs x and y
const numIn1 = document.getElementById('x');
const numIn2 = document.getElementById('y');
//Sum of numbers
const numSum = document.getElementById('sum')

//Wire up events
numIn1.oninput = showSum;
numIn2.oninput = showSum;

function showSum() {
    const x = Number(numIn1.value);
    const y = Number(numIn2.value);
    
    numSum.textContent = add(x, y);    
}

