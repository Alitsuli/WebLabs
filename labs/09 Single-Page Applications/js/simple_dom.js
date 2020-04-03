//console.log('page loaded');

console.log(document);
/* for click
document.getElementById('save').onclick = function(){
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	var password = document.querySelectorAll('#userForm input[type="password"]');
	paragraphs[1].innerHTML = password.values;
}*/

document.querySelector('#userForm input[type="text"]').onkeypress = name;
document.querySelector('#userForm input[type="email"]').onkeypress = email;
document.querySelector('#userForm input[type="password"]').onkeypress = password;

function name() {
	console.log('updating name');
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
}

function email() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
}

function password() {
	console.log('updating password');
	var password = document.querySelector('#userForm input[type="password"]').value;
	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = password;
}

function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}