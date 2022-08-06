"use strict";

// const skillsIcons = document.querySelector(".about-me__skills-icons");

// // SKILLS ANIMATION

// const handleHover = function (e) {
// 	const touchedIcon = e.target.closest(".skills-icon");
// 	const siblings = touchedIcon
// 		.closest(".about-me__skills-icons")
// 		.querySelectorAll(".skills-icon");

// 	siblings.forEach((icon) => {
// 		if (icon !== touchedIcon) icon.style.opacity = this;
// 	});
// };

// skillsIcons.addEventListener("mouseover", handleHover.bind(0.3));
// skillsIcons.addEventListener("mouseout", handleHover.bind(1));

// // ANIMATION SLIDER FOR PERSONAL

// const track = document.querySelector(".about-me__personal-animation");
// const slides = Array.from(track.children);

// const personalAnimation = function () {
// 	const currentSlide = track.querySelector(".personal-animation--active");
// 	let nextSlide = currentSlide.nextElementSibling;

// 	if (!currentSlide.nextElementSibling) nextSlide = slides[0];

// 	currentSlide.classList.remove("personal-animation--active");
// 	nextSlide.classList.add("personal-animation--active");
// 	nextSlide = currentSlide;
// };

// setInterval(personalAnimation, 1500);

// NAV HAMBURGER

// const navBtn = document.querySelector(".hamburger");
// const navContainer = document.querySelector(".nav__container");
// const navLinks = document.querySelectorAll(".nav__link");

// const navActive = () => {
// 	navBtn.classList.toggle("is-active");
// 	navContainer.classList.toggle("nav__container--active");

// 	navLinks.forEach((link) => {
// 		link.addEventListener("click", () => {
// 			navContainer.classList.remove("nav__container--active");
// 			navBtn.classList.remove("is-active");
// 		});
// 	});
// };

// navBtn.addEventListener("click", navActive);

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
