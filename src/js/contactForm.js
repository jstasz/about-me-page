const contactForm = document.getElementById("contactForm");

const firebaseConfig = {
	apiKey: "AIzaSyCnG6166uck1qU-qbDxEfH7vzP_kVDib8E",
	authDomain: "just-bro-contact.firebaseapp.com",
	projectId: "just-bro-contact",
	storageBucket: "just-bro-contact.appspot.com",
	messagingSenderId: "104152681993",
	appId: "1:104152681993:web:f79495f1c504c58655f2d8"
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
	await fetch(`https://just-bro-contact-default-rtdb.firebaseio.com/messagess.json`, {
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
