"use strict";

import * as projects from "./projects.js";
import * as contactForm from "./contactForm.js";

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const mainTitle = document.querySelector(".main-title");
const sections = document.querySelectorAll(".section");

const skillsIcons = document.querySelector(".skills__icons");

const animationBox = document.querySelector(".about-me__animations");

const footerYear = document.querySelector(".footer__year");

// ----NAV----

const navActive = () => {
	nav.classList.toggle("nav--active");
	navBtn.classList.toggle("is-active");
};

const navUnactive = () => {
	nav.classList.remove("nav--active");
	navBtn.classList.remove("is-active");
};

const navObserver = () => {
	const navScroll = window.scrollY;
	const navHeight = nav.offsetHeight;
	const titleTop = mainTitle.offsetTop;

	navScroll > titleTop - navHeight
		? nav.classList.add("nav--dark")
		: nav.classList.remove("nav--dark");
};

window.addEventListener("scroll", navObserver);
navBtn.addEventListener("click", navActive);
navLinks.forEach((link) => link.addEventListener("click", navUnactive));

const currentSection = function () {
	sections.forEach((section) => {
		const windowScroll = window.scrollY;
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionBottom = sectionTop + sectionHeight - 1;
		const space = 100;

		windowScroll >= sectionTop - space && windowScroll < sectionBottom - space
			? section.classList.add("current-section")
			: section.classList.remove("current-section");
	});
};

const activeNavLink = function () {
	currentSection();

	const currentSec = document.querySelector(".current-section");

	if (!currentSec) return;

	const currentSecId = currentSec.id;

	navLinks.forEach((link) => {
		link.getAttribute("href").slice(1) === currentSecId
			? link.classList.add("nav__link--active")
			: link.classList.remove("nav__link--active");
	});
};

window.addEventListener("scroll", activeNavLink);

// ----- SKILLS -----

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

// ----- ABOUT ME -----

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

// ----- FOOTER -----

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
