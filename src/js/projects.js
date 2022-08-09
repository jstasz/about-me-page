"use strict";

const projectsContainer = document.querySelector(".project__container");
const projects = [];

const project1 = {
	image: `https://raw.githubusercontent.com/jstasz/find-and-add-recipe-web/master/src/img/logo.png?token=GHSAT0AAAAAABWQTWKJ6P2F5EGYUZH46IYIYXSEEJQ`,
	title: `find-and-add`,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const project2 = {
	image: `https://raw.githubusercontent.com/jstasz/find-and-add-recipe-web/master/src/img/logo.png?token=GHSAT0AAAAAABWQTWKJ6P2F5EGYUZH46IYIYXSEEJQ`,
	title: `find-and-add`,
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
    praesentium quos illo, amet voluptates quam qui ut quidem itaque
    odio, tempore expedita eveniet saepe minima debitis mollitia
    placeat, nesciunt obcaecati.`,
};

const addNewProject = function (project) {
	const side = projects.length % 2 === 0 ? `left` : `right`;
	const markUp = `
    <div class="project__box project__box--${side}">
    <img src="/my-photo.dd70123f.png" alt="" class="project__picture" />
    <div class="project__content">
        <a
            class="git-link"
            href="https://github.com/jstasz/just-sweet-website"
            target="_blank"
            ><i class="fa-brands fa-github-square"></i
        ></a>
        <h3 class="project__title section-title">${project.title}</h3>
        <p class="project__description">
            ${project.description}
        </p>
    </div>
</div>`;

	projectsContainer.insertAdjacentHTML("beforeend", markUp);
	projects.push(project);
};

addNewProject(project1);
addNewProject(project2);
