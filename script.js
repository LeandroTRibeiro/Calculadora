const display = document.querySelector('#display');

display.focus()

var goodKey = '0123456789+*/)(-.';

var checkInputTel = function(e) {
  var key = (typeof e.which == "number") ? e.which : e.keyCode;
  var start = this.selectionStart,
    end = this.selectionEnd;

  var filtered = this.value.split('').filter(filterInput);
  this.value = filtered.join("");

  /* Prevents moving the pointer for a bad character */
  var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
  this.setSelectionRange(start - move, end - move);
}

var filterInput = function(val) {
  return (goodKey.indexOf(val) > -1);
}

display.addEventListener('input', checkInputTel);

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('btnum')) digit(el.innerText);
    if(el.classList.contains('btnClear')) clear();
    if(el.classList.contains('btnAp')) correct();
    if(el.classList.contains('btnIg')) contar();
    
});

document.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        contar();
    }
});

function digit(num) {
    display.value += num;
}

function clear() {
    display.value = ' ';
}

function correct() {
    display.value = display.value.slice(0, -1);
}

function contar() {
    let conta = display.value;
    try {
        conta = eval(conta);
        if(!conta) {
            alert('Conta Invalida!');
            return;
        } 
        display.value = conta;  
    } catch(e) {
        alert('Conta Invalida!');
        return;
    }
}