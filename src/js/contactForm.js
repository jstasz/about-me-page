const contactForm = document.getElementById("contactForm");

const firebaseConfig = {
  apiKey: "AIzaSyBmceSdg54pFrLJVzhWFEi-w1hKQmHgS5k",
  authDomain: "contact-messages-72b87.firebaseapp.com",
  projectId: "contact-messages-72b87",
  storageBucket: "contact-messages-72b87.appspot.com",
  messagingSenderId: "5609323308",
  appId: "1:5609323308:web:ed2c610824295844070a89"
};

const getInputValue = function (id) {
	return document.getElementById(id).value;
};

const contactAlert = function () {
	document.querySelector(".contact__alert").style.display = "block";
};

const resetContactForm = function () {
	document.querySelector(".contact__alert").style.display = "none";
	document.getElementById("contactForm").reset();
};

async function sendContactMessage(name, email, message) {
	await fetch(`https://contact-messages-72b87-default-rtdb.firebaseio.com/messagess.json`, {
	  method: 'POST',
	  body: JSON.stringify({name: name, email: email, message: message}),
	  headers: {
		'Content-Type' : 'aplication/json'
	  }
	})
};

const submitForm = function (e) {
	e.preventDefault();

	const name = getInputValue("name");
	const email = getInputValue("email");
	const message = getInputValue("message");

	try {
		sendContactMessage(name, email, message)
	} catch(error) {
		document.querySelector(".contact__alert").style.display = "block";
		document.querySelector(".contact__alert").textContent = error.message;
	}

	contactAlert();

	setTimeout(resetContactForm, 3000);
};

contactForm.addEventListener("submit", submitForm);
