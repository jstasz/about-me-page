"use strict";

const skillsIcons = document.querySelector(".skills__icons");

// SKILLS ANIMATION

const handleHover = function (e) {
	const touchedIcon = e.target.closest(".skills__icon");

	if (!touchedIcon) return;

	const siblings = touchedIcon
		.closest(".skills__icons")
		.querySelectorAll(".skills__icon");

	siblings.forEach((icon) => {
		if (icon !== touchedIcon) icon.style.opacity = this;
	});
};

skillsIcons.addEventListener("mouseover", handleHover.bind(0.3));
skillsIcons.addEventListener("mouseout", handleHover.bind(1));

// ANIMATION SLIDER FOR PERSONAL

const animationBox = document.querySelector(".about-me__animations");
const slides = Array.from(animationBox.children);

const personalAnimation = function () {
	const currentSlide = animationBox.querySelector(
		".about-me__animation--active"
	);

	let nextSlide = currentSlide.nextElementSibling;

	if (!currentSlide.nextElementSibling) nextSlide = slides[0];

	currentSlide.classList.remove("about-me__animation--active");
	nextSlide.classList.add("about-me__animation--active");
	nextSlide = currentSlide;
};

setInterval(personalAnimation, 1500);

// NAV HAMBURGER

const navBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

const navActive = () => {
	navBtn.classList.toggle("is-active");
	nav.classList.toggle("nav--active");

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("nav--active");
			navBtn.classList.remove("is-active");
		});
	});
};

navBtn.addEventListener("click", navActive);

// NAV CHANGE COLOR

const nav = document.querySelector(".nav");
const navHeight = nav.offsetHeight;

const handleObserver = () => {
	const navScroll = window.scrollY;

	navScroll > navHeight
		? nav.classList.add("nav--dark")
		: nav.classList.remove("nav--dark");
};

window.addEventListener("scroll", handleObserver);
