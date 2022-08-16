import aboutMePage from "../images/about-me-page.png";
import guessMyNumber from "../images/gues-my-number.png";
import sweetWebsitePage from "../images/sweetWebsitePage.jpg";
import diceGame from "../images/diceGame.png";
import bankistApp from "../images/bankistApp.png";
import restaurantsApp from "../images/restaurantsApp.jpg";

const projectsContainer = document.querySelector(".project__container");
const projectsArray = [];

class Project {
	constructor(title, description, img, prepair = false) {
		this.title = title;
		this.description = description;
		this.img = img;
		this.prepair = prepair;
		this._addTotable();
		this._addProject();
	}

	_addTotable() {
		projectsArray.push(this);
	}

	_addProject() {
		const boxSide = projectsArray.length % 2 === 0 ? `left` : `right`;
		const markUp = `
    		<div class="project__box project__box--${boxSide}">
				<img class="project__picture" src="${this.img}" alt="zdjęcie projektu ${
			this.title
		}"/>
				<div class="project__content">
					<a class="git-link" href="https://github.com/jstasz/${this.title.replaceAll(
						" ",
						"-"
					)}" target="_blank"><i class="fa-brands fa-github-square"></i></a>
					<div class="project__text">
						<h3 class="project__title section-title">${
							this.prepair === true ? this.title + " (w trakcie)" : this.title
						}</h3>
						<p class="project__description">${this.description}</p>
					</div>
				</div>
			</div>`;

		projectsContainer.insertAdjacentHTML("beforeend", markUp);
	}
}

const projectAboutmePage = new Project(
	"about me page",
	`Responsywna strona z projektami. Zawiera podstawowe informacje na temat autora,  portfolio oraz formularz kontaktowy. Projekt zakłada łatwe dodawanie kolejnych projektów poprzez dołączenie ich nazwy i opisu do specjalnego pliku js. Ikona GitHub zajadująca się przy każdym projekcie działa jako odsyłacz do kodu dostępnego na gitHubie.`,
	aboutMePage
);

const projectGuessMyNumber = new Project(
	`guess my number`,
	`Gra dla jednej osoby polegająca na odnalezieniu prawidłowego numeru od 0 do 20. Prawidłowa liczba jest przypisywana losowo. Użytkownik na start dosteje 20 pkt. Przy każdej nieudanej próbie wskazania numeru, dostaje informację czy liczba jest za mała czy za duża oraz otrzymuje -1 punkt. Najwyższy zdobyty wynik jest przechowywany dla użytkownika.`,
	guessMyNumber
);

const projectDiceGame = new Project(
	`dice game`,
	`Gra dla 2 użytkowników polegająca na rzucaniu kostką. Użytkownik rzuca kostką i zdobywa punkty dopóki nie wyrzuci 1 oczka lub nie odda kolejki drugiej osobie. W momecie wyrzucenia 1 oczka, użytkownik traci swoją kolejkę oraz zerują mu się zdobyte w danej rundzie punkty. Wygrywa osoba, która szybciej osiągnie wynik 100 punktów.`,
	diceGame
);

const projectBankistApp = new Project(
	`bankist app`,
	`Aplikacja banku umożliwiająca (po zalogowaniu danego użytkownika) przesyłanie pieniędzy, wnioskowanie o kredyt, zamykanie konta. Użytkownik widzi aktualny stan konta, historię operacji(z możliwością sortowania) oraz sumę wpłat i wypłat. Automatyczne wylogowanie wyloguje użytkownika po 5 minutach bezczynności.`,
	bankistApp
);

const projectRestaurantsApp = new Project(
	`restaurants app`,
	`Aplikacja umożliwiająca użytkownikowi dodawanie na mapie restauracji i innych miejsc które odwiedził lub chce odwiedzić. Aplikacja tworzy listę restauracji z oceną użytkownika i umożliwia sortowanie wyników od najwyższej oceny.`,
	restaurantsApp,
	true
);

const projectSweetWebsiteShop = new Project(
	`sweet website shop`,
	`Sklep internetowy, służący do składania zamówienia na troty artystyczne. Użytkownik może wybrać smak, wygląd i wielkość tortu. Zamówienie może złożyć on-line lub wysyłając wiadomość poprzez formularz kontaktowy.`,
	sweetWebsitePage,
	true
);
