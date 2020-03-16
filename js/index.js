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

document.querySelector('.eq').addEventListener('click', calculat);

    function calculat() {
         display.value = eval(display.value);
    }          


