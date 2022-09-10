const skillsIcons = document.querySelector(".skills__icons");

const animationBox = document.querySelector(".about-me__animations");

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
