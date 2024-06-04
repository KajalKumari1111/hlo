let array = [];

function updateDisplay() {
    document.getElementById('arrayDisplay').textContent = JSON.stringify(array);
}

function pushElement() {
    const input = document.getElementById('arrayInput').value;
    if (input !== '') {
        array.push(input);
        document.getElementById('arrayInput').value = '';
        updateDisplay();
    } else {
        alert('Please enter a value to push.');
    }
}

function popElement() {
    if (array.length > 0) {
        array.pop();
        updateDisplay();
    } else {
        alert('Array is empty. Nothing to pop.');
    }
}

function shiftElement() {
    if (array.length > 0) {
        array.shift();
        updateDisplay();
    } else {
        alert('Array is empty. Nothing to shift.');
    }
}

function unshiftElement() {
    const input = document.getElementById('arrayInput').value;
    if (input !== '') {
        array.unshift(input);
        document.getElementById('arrayInput').value = '';
        updateDisplay();
    } else {
        alert('Please enter a value to unshift.');
    }
}


updateDisplay();
