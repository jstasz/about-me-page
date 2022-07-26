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
