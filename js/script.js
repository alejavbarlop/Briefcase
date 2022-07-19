const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const nameNotify = document.getElementById('notify-Name');
const emailNotify = document.getElementById('notify-Email');
const affairNotify = document.getElementById('notify-Affair');
const msgNotify = document.getElementById('notify-Msg');
const submit = document.getElementById('notify-Valid');
const expressions = {
	name: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	affair: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
	message: /^[a-zA-Z0-9Á-ÿ\s]{20,500}$/
}

const validForm = (e) => {
	switch (e.target.name) {
		case "name":
			if(expressions.name.test(e.target.value)){
				document.getElementById('input-Name').classList.remove('invalid-input');
				document.getElementById('notify-Name').style.display = 'none';				
			} else {
				document.getElementById('input-Name').classList.add('invalid-input');
				document.getElementById('notify-Name').style.display = 'block';
			}
		break;

		case "email":
			if(expressions.email.test(e.target.value)){
				document.getElementById('input-Email').classList.remove('invalid-input');
				document.getElementById('notify-Email').style.display = 'none';				
			} else {
				document.getElementById('input-Email').classList.add('invalid-input');
				document.getElementById('notify-Email').style.display = 'block';				
			}
		break;

		case "affair":
			if(expressions.affair.test(e.target.value)){
				document.getElementById('input-Affair').classList.remove('invalid-input');
				document.getElementById('notify-Affair').style.display = 'none';
			} else {
				document.getElementById('input-Affair').classList.add('invalid-input');
				document.getElementById('notify-Affair').style.display = 'block';
			}
		break;

		case "message":
			if(expressions.message.test(e.target.value)){
				document.getElementById('input-Msg').classList.remove('invalid-input');
				document.getElementById('notify-Msg').style.display = 'none';
			} else {
				document.getElementById('input-Msg').classList.add('invalid-input');
				document.getElementById('notify-Msg').style.display = 'block';
			}
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validForm);
	input.addEventListener('blur', validForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(expressions.name && expressions.email && expressions.affair && expressions.message){
		form.reset();
		document.getElementById('notify-Valid').style.display = 'block';
	}
});