import aboutMePage from "../images/about-me-page.png";
import guesMyNumber from "../images/gues-my-number.png";
import sweetWebsiteShop from "../images/sweetWebsiteShop.png";

const projectsContainer = document.querySelector(".project__container");
const projectsArray = [];

const project1 = {
	title: `About Me Page`,
	img: aboutMePage,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const project2 = {
	title: `Gues My Number`,
	img: guesMyNumber,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const project3 = {
	title: `Sweet Website Shop`,
	img: sweetWebsiteShop,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const creaTeNewProject = function (project) {
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
	projectsArray.push(project);

	const pictureDiv = document.querySelector(".project__picture");
	pictureDiv.style.backgroundImage = `url(${project.img})`;
};

creaTeNewProject(project1);
creaTeNewProject(project2);
creaTeNewProject(project3);
