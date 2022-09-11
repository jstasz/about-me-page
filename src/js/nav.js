const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const mainTitle = document.querySelector(".main-title");
const sections = document.querySelectorAll(".section");

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
		const contactsection = document.getElementById("contact");

		const endOfPage = (document.body.scrollTop =
			document.documentElement.scrollHeight - window.innerHeight);

		windowScroll >= sectionTop - space &&
		windowScroll < sectionBottom - space &&
		Math.trunc(windowScroll) < endOfPage
			? section.classList.add("current-section")
			: section.classList.remove("current-section");

		Math.trunc(windowScroll) === endOfPage
			? contactsection.classList.add("current-section")
			: "";
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
