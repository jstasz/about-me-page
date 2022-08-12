import aboutMePage from "../images/about-me-page.png";
import guesMyNumber from "../images/gues-my-number.png";
import sweetWebsitePage from "../images/sweetWebsitePage.jpg";

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
	img: sweetWebsitePage,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const creaTeNewProject = function (project) {
	const boxSide = projectsArray.length % 2 === 0 ? `left` : `right`;
	const markUp = `
    <div class="project__box project__box--${boxSide}">
		<img class="project__picture" src="${project.img}" alt="zdjęcie projektu ${project.title}"/>
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

	projectsContainer.insertAdjacentHTML("beforeend", markUp);
	projectsArray.push(project);
};

creaTeNewProject(project1);
creaTeNewProject(project2);
creaTeNewProject(project3);
