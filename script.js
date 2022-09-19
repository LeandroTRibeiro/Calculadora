// Travamentos de demais teclas

const goodKey = '0123456789+*/)(-.';

var checkInputTel = function(e) {
  var key = (typeof e.which == "number") ? e.which : e.keyCode;
  var start = this.selectionStart,
    end = this.selectionEnd;

  var filtered = this.value.split('').filter(filterInput);
  this.value = filtered.join("");

  var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
  this.setSelectionRange(start - move, end - move);
}

var filterInput = function(val) {
  return (goodKey.indexOf(val) > -1);
}

display.addEventListener('input', checkInputTel);
//
checkDevice();
// identificação de aparelho 
function checkDevice() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        function Calculadora() {
            this.display = document.querySelector('#display');
            
            this.startClick = () => {
                document.addEventListener('click', e => {
                    const element = e.target;
                    if (element.classList.contains('btnum')) this.writeIn(element);
                    if (element.classList.contains('btnClear')) this.ClearDis();
                    if (element.classList.contains('btnDel')) this.delDis();
                    if (element.classList.contains('btnIg')) this.calcu();
                });
            };
        
            this.startKey = () => {
                document.addEventListener('keyup', e => {
                    if (e.keyCode === 13) this.calcu();
                });
            };
        
            this.writeIn = element => {
                this.display.value += element.innerText;
                
            };
            this.start = () => { 
                this.startClick();
                this.startKey();
            };
        
            this.ClearDis = () => this.display.value = ' ';
        
            this.delDis = () => this.display.value = this.display.value.slice(0, -1);
        
            this.calcu = () => { 
                try {
                    const conta = eval(this.display.value);
                    if (!conta && conta !== 0) {
                        alert('Calculo Invalido!');
                        return;
                    }
        
                    this.display.value = conta;
        
                } catch(e) {
                    alert('Calculo Invalido!');
                    return;
                }
            } ;   
        }
        const calculadora = new Calculadora();
        calculadora.start();

     } else {
        function Calculadora() {
            this.display = document.querySelector('#display');
            this.display.focus();
            
            this.startClick = () => {
                document.addEventListener('click', e => {
                    const element = e.target;
                    if (element.classList.contains('btnum')) this.writeIn(element);
                    if (element.classList.contains('btnClear')) this.ClearDis();
                    if (element.classList.contains('btnDel')) this.delDis();
                    if (element.classList.contains('btnIg')) this.calcu();
                });
            };
        
            this.startKey = () => {
                document.addEventListener('keyup', e => {
                    if (e.keyCode === 13) this.calcu();
                });
            };
        
            this.writeIn = element => {
                this.display.value += element.innerText;
                this.display.focus();
            };
            this.start = () => { 
                this.startClick();
                this.startKey();
            };
        
            this.ClearDis = () => this.display.value = ' ';
        
            this.delDis = () => this.display.value = this.display.value.slice(0, -1);
        
            this.calcu = () => { 
                try {
                    const conta = eval(this.display.value);
                    if (!conta && conta !== 0) {
                        alert('Calculo Invalido!');
                        return;
                    }
        
                    this.display.value = conta;
        
                } catch(e) {
                    alert('Calculo Invalido!');
                    return;
                }
            } ;   
        }
        
        const calculadora = new Calculadora();
        calculadora.start();
     }
   }
