import aboutMePage from "../images/aboutMePage.png";
import sweetWebsitePage from "../images/sweetWebsitePage.png";
import restaurantsApp from "../images/restaurantsApp.jpg";
import weatherApp from "../images/weatherApp.png";
import recipesApp from '../images/recipesApp.png'

const projectsContainer = document.querySelector(".project__container");
const watchProjects = document.querySelector(".project__watch-projects");
const watchGit = document.querySelector(".project__watch-more");
const projectsArray = [];

class Project {
	constructor(title, description, technologies, img,  gitHub, www = "", prepair = false) {
		this.title = title;
		this.description = description;
		this.technologies = technologies;
		this.img = img;
		this.gitHub = gitHub;
		this.www = www;
		this.prepair = prepair;
		this._addTotable();
	}

	_addTotable() {
		projectsArray.push(this);
	}

	_projectMarkup() {
		const boxSide = projectsArray.length % 2 === 0 ? `left` : `right`;
		const markUp = `
			<div class="project__box project__box--${boxSide}">
				<img class="project__picture" src="${this.img}" alt="zdjęcie projektu ${this.title
			}"/>
				<div class="project__content">
					<div class="project__icons">
						<a class="project__icons-gitlink" href="https://github.com/jstasz/${this.gitHub}" target="_blank"><i class="fa-brands fa-github-square"></i></a>
						${this.www === ""
				? ""
				: `<a class="project__icons-livelink" href="${this.www}" target="_blank"><i class="fa-regular fa-images"></i></a>`
			}
					</div>
					<div class="project__text">
						<h3 class="project__title section-title">${this.prepair === true ? this.title + " (w trakcie)" : this.title
			}</h3>
						<p class="project__description">${this.description}</p>
						<p class="project__technologies"> ${this.technologies}</p>
					</div>
				</div>
			</div>`;

		projectsContainer.insertAdjacentHTML("beforeend", markUp);
	}
}

const projectSweetWebsiteShop = new Project(
	`sweet website shop`,
	`An online pastry shop with the additional option to order artistic cakes. Users can choose the flavor, design, and size of the cake. Orders can be placed for a specific date, online or by sending a message through the contact form. The website allows user registration, the ability to add items to favorites, and is integrated with Firebase.`,
	`Angular Typescript`,
	sweetWebsitePage,
	"sweet-website-shop",
	"https://sweet-website-shop.netlify.app/",
);

const projectRecipesApp = new Project(
	`recipes app react`,
	`An application enabling users to browse recipes (utilizing the Tasty API). For logged-in users, it includes the functionality to add their own recipes and create a shopping list. The list of recipes and shopping items is stored on the user's account using Firebase.`,
	`React Redux Typescript`,
	recipesApp,
	"recipes-app-react",
	"https://recipes-app-react-jb.netlify.app/",
);

const projectWeatherApp = new Project(
	`weather app`,
	`An application fetching weather data based on the user's location. It provides access to data for the current day (including hourly forecasts), the previous day, and the next 5 days. Information includes temperature, precipitation forecasts, and the ability to change the app's background depending on the weather.`,
	`Angular(ngRx) Typescript`,
	weatherApp,
	"weather-app",
	"https://jbronisz-weather-app.netlify.app/"
);

const projectRestaurantsApp = new Project(
	`restaurants app`,
	`An application allowing users to add restaurants they have visited to a map. The app creates a list of restaurants with user ratings for food, service, price, and overall experience. An average rating is calculated for each restaurant. The map interacts with the restaurant list. Data is saved in local storage.`,
	`HTML CSS JavaScript`,
	restaurantsApp,
	"restaurants-app",
	"https://jsta-restaurants-app.netlify.app/"
);

const projectAboutmePage = new Project(
	"about me page",
	`Responsywna strona z projektami. Zawiera podstawowe informacje na temat autora,  portfolio oraz formularz kontaktowy. Projekt zakłada łatwe dodawanie kolejnych projektów poprzez dołączenie ich nazwy i opisu do specjalnego pliku js. Ikona GitHub zajadująca się przy każdym projekcie działa jako odsyłacz do kodu dostępnego na gitHubie.`,
	`HTML CSS JavaScript`,
	aboutMePage,
	"about-me-page",
	"https://jsta18.netlify.app/"
);

class App {
	#part = 1;
	#projectsPart = 3;

	constructor() {
		this._showProjects()
		watchProjects.addEventListener("click", this._changePart.bind(this));
	}

	_divideProjects(part) {
		const start = (this.#part - 1) * this.#projectsPart;
		const end = this.#part * this.#projectsPart;
		return projectsArray.slice(start, end);
	}

	_renderProjects() {
		this._divideProjects(this.part).forEach((project) => {
			project._projectMarkup();
		});
	}

	_changePart() {
		this.#part++;
		this._renderProjects(this.#part);
		this._changeButton();
	}

	_showProjects() {
		this._renderProjects(1);
		watchProjects.style.visibility = "visible";
	}

	_changeButton() {
		const partsCount = Math.ceil(projectsArray.length / this.#projectsPart);

		if (this.#part === partsCount) {
			watchGit.classList.remove("hidden");
			watchProjects.classList.add("hidden");
		}
	}
}

const projectsApp = new App();
