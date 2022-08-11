"use strict";

import * as projects from "./projects.js";

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

// PROJECTS

const projectsContainer = document.querySelector(".project__container");
const projectsArray = [];

const addNewProject = function (project) {
	const boxSide = projectsArray.length % 2 === 0 ? `left` : `right`;
	const markUp = `
    <div class="project__box project__box--${boxSide}">
		<div class="project__picture"></div>
		<div class="project__content">
			<a class="git-link" href="https://github.com/jstasz/${project.title}" target="_blank"><i class="fa-brands fa-github-square"></i></a>
			<div class="project__text">
				<h3 class="project__title section-title">${project.title}</h3>
				<p class="project__description">
					${project.description}
				</p>
			</div>
		</div>
	</div>`;

	projectsContainer.insertAdjacentHTML("afterbegin", markUp);
	// projectsArray.push(project);

	const pictureDiv = document.querySelector(".project__picture");
	pictureDiv.style.backgroundImage = `url(${project.img})`;
};
addNewProject(projects.project1);
addNewProject(projects.project2);
addNewProject(projects.project3);
