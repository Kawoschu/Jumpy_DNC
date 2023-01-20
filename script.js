
// Mascara de Telefone
const tel = document.getElementById('tel')
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))
const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor
}

// Mascara de CPF
const cpf = document.getElementById('cpf')
cpf.addEventListener('keypress', (e) => mascaraCPF(e.target.value))
cpf.addEventListener('change', (e) => mascaraCPF(e.target.value))
const mascaraCPF = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/(\d{3})(\d{3})/, '$1.$2.')
    valor = valor.replace(/(\d{3})(\d{2})/, '$1-$2')
    cpf.value = valor
}



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('tel');
const cpf2 = document.getElementById('cpf');
const password = document.getElementById('password');
const required = document.getElementById('required');



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const cpf2Value = cpf2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, '*Campo nome obrigatório*');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, '*Campo e-mail obrigatório*');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, '*Campo senha obrigatório*');
	} else {
		setSuccessFor(password);
	}
	
	if(phoneValue === '') {
		setErrorFor(phone, '*Campo telefone obrigatório*');
	} else {
		setSuccessFor(phone);
	}

	if(cpf2Value === '') {
		setErrorFor(cpf2, '*Campo CPF obrigatório*');
	} else {
		setSuccessFor(cpf2);
	}


	if(cpf2Value === '' || phoneValue === ''||passwordValue === '' || emailValue === '' || usernameValue === '') {
		setErrorFor(required, 'Campos obrigatórios não registrados.');
	} else {
		setSuccessFor(required);
	}


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

