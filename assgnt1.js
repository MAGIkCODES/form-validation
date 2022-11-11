const _email = document.querySelector('#email');
const _password = document.querySelector('#psswd');
const _register = document.querySelector('#register');
const _error = document.querySelector('.error');
const _peepbutton = document.querySelector('.peepbutton');

_register .addEventListener('click', () => {
 if (_email.value != '' && _password.value != '') {
  if (_password.value.length <6) {
    _error.innerHTML = 'password should be 6 charcters or more'
  } else{
     _error.innerHTML =''
     _register.innerHTML ='loading'
     _register.innerHTML ='registered'
  }
 } else {
    _error.innerHTML = 'please complete the form, then try again'
 }
});

// peepbutton
_peepbutton.addEventListener('click', () => {
    if(_peepbutton.innerText == 'Peep') {
        _password.setAttribute('type', 'text');
        _peepbutton.innerText = 'Hide';
    } else {
        _password.setAttribute('type', 'password');
        _peepbutton.innerText = 'Peep';
    }
})

 //reduce code to two line quote
 // _password.setAttribute('type', _peepButton.innertext == 'peep' ? 'text' : 'password')
 // _peepButton.innerText = _peepButton.innertext == 'peep' ? 'Hide' : 'peep'

    