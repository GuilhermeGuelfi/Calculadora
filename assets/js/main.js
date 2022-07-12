function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const element = event.target;
      if (element.classList.contains('btn-num')) this.addNumDisplay(element);
      
      if (element.classList.contains('btn-clear')) this.clearNum();

      if (element.classList.contains('btn-del')) this.delNum();

      if (element.classList.contains('btn-eq')) this.realizaConta();
    })

    this.addNumDisplay = element => {
      this.display.value += element.innerText;
      this.display.focus()
    }

    this.clearNum = () => this.display.value = ''

    this.delNum = () => this.display.value = this.display.value.slice(0,-1);

    this.realizaConta = () => {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        
        if(!conta) {
          return;
        }

        this.display.value = conta;
      } catch(error) {
          alert('Conta inválida');
      }
    }

    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
          this.realizaConta()
        }
      })
    }
  }
}


const calculadora = new Calculadora()
calculadora.inicia()