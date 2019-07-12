import add from './add.js'
// reference elements
const xImput = document.getElementById('x');
const yImput = document.getElementById('y');
const sum = document.getElementById('sum');

//wire up events
xImput.oninput = showSum;
yImput.oninput = showSum;

function showSum() {
    const x = Number(xImput.value);
    const y = Number(yImput.value);

    sum.textContent = add(x, y);

}