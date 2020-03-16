const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.reset').addEventListener('click', reset);

function reset() {
    display.value = " ";          
}

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    display.value = display.value.slice(0, display.value.length -1);
}

document.querySelector('.eq').addEventListener('click', calculat);

function calculat() {
    display.value = eval(display.value);
    }  
    
    


