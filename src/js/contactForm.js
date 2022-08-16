import firebase from "firebase/app";
import firestore from "firebase/firestore";

const contactForm = document.getElementById("contactForm");

const firebaseConfig = {
	apiKey: "AIzaSyArQMZuPtxINzoDNsv5ZXYfTtUYYO3oIo4",
	authDomain: "contact-form-26156.firebaseapp.com",
	projectId: "contact-form-26156",
	storageBucket: "contact-form-26156.appspot.com",
	messagingSenderId: "270298901235",
	appId: "1:270298901235:web:554c4f6f5ebfec1f1fa586",
	measurementId: "G-DYKK1W7NNT",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

let contactInfo = db.collection("formData");

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

const submitForm = function (e) {
	e.preventDefault();

	const name = getInputValue("name");
	const email = getInputValue("email");
	const message = getInputValue("message");

	contactInfo.doc().set({
		name: name,
		email: email,
		message: message,
	});

	contactAlert();

	setTimeout(resetContactForm, 3000);
};

contactForm.addEventListener("submit", submitForm);
