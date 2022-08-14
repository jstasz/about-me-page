"use strict";

// import * as projects from "./projects.js";

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

const aboutMePhoto = document.querySelector(".about-me__photo--img");
const animationBox = document.querySelector(".about-me__animations");

const skillsIcons = document.querySelector(".skills__icons");

// SKILLS ANIMATION

const skillsHandleHover = function (e) {
	const touchedIcon = e.target.closest(".skills__icon");

	if (!touchedIcon) return;

	const siblings = touchedIcon
		.closest(".skills__icons")
		.querySelectorAll(".skills__icon");

	siblings.forEach((icon) => {
		if (icon !== touchedIcon) icon.style.opacity = this;
	});
};

skillsIcons.addEventListener("mouseover", skillsHandleHover.bind(0.3));
skillsIcons.addEventListener("mouseout", skillsHandleHover.bind(1));

// ANIMATION SLIDER FOR PERSONAL

const personalAnimation = function () {
	const slides = Array.from(animationBox.children);
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

const navObserver = () => {
	const navScroll = window.scrollY;
	const navHeight = nav.offsetHeight;
	const photoTop = aboutMePhoto.offsetTop;

	navScroll > photoTop - navHeight
		? nav.classList.add("nav--dark")
		: nav.classList.remove("nav--dark");
};

window.addEventListener("scroll", navObserver);

// ACTIVE LINK

const sections = document.querySelectorAll(".section");

const currentSection = function () {
	const windowScroll = window.scrollY;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionBottom = sectionTop + sectionHeight - 1;
		const space = 30;

		windowScroll >= sectionTop - space && windowScroll < sectionBottom - space
			? section.classList.add("current-section")
			: section.classList.remove("current-section");
	});
};

window.addEventListener("scroll", currentSection);

// FOOTER - YEAR

const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
