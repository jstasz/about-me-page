"use strict";

const skillsIcons = document.querySelector(".about-me__skills-icons");

// SKILLS ANIMATION

const handleHover = function (e) {
	const touchedIcon = e.target.closest(".skills-icon");
	const siblings = touchedIcon
		.closest(".about-me__skills-icons")
		.querySelectorAll(".skills-icon");

	siblings.forEach((icon) => {
		if (icon !== touchedIcon) icon.style.opacity = this;
	});
};

skillsIcons.addEventListener("mouseover", handleHover.bind(0.3));
skillsIcons.addEventListener("mouseout", handleHover.bind(1));

// ANIMATION SLIDER FOR PERSONAL

const track = document.querySelector(".about-me__personal-animation");
const slides = Array.from(track.children);
const btn = document.querySelector(".fa-chevron-down");

const personalAnimation = function () {
	const currentSlide = track.querySelector(".personal-animation--active");
	let nextSlide = currentSlide.nextElementSibling;

	if (!currentSlide.nextElementSibling) nextSlide = slides[0];

	currentSlide.classList.remove("personal-animation--active");
	nextSlide.classList.add("personal-animation--active");
	nextSlide = currentSlide;
};

setInterval(personalAnimation, 1500);
