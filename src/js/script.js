"use strict";

import * as nav from "./nav.js";
import * as mainSection from "./mainSection.js";
import * as projects from "./projects.js";
import * as contactForm from "./contactForm.js";

// ----- FOOTER -----

const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
