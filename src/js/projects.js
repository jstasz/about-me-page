import aboutMePage from "../images/about-me-page.png";
import guessMyNumber from "../images/gues-my-number.png";
import sweetWebsitePage from "../images/sweetWebsitePage.jpg";
import diceGame from "../images/diceGame.png";
import bankistApp from "../images/bankistApp.png";
import restaurantsApp from "../images/restaurantsApp.jpg";

const projectsContainer = document.querySelector(".project__container");
const projectsArray = [];

const project1 = {
	title: `about me page`,
	img: aboutMePage,
	description: `Responsywna strona z projektami. Zawiera podstawowe informacje na temat autora,  portfolio oraz formularz kontaktowy. Projekt zakłada łatwe dodawanie kolejnych projektów poprzez dołączenie ich nazwy i opisu do specjalnego pliku js. Ikona GitHub zajadująca się przy każdym projekcie działa jako odsyłacz do kodu projektu dostępnego na gitHubie.`,
};

const project2 = {
	title: `guess my number`,
	img: guessMyNumber,
	description: `Gra dla jednej osoby polegająca na odnalezieniu prawidłowego numeru od 0 do 20. Prawidłowa liczba jest przypisywana losowo i ukrywana. Użytkownik na start dosteje 20 pkt. Przy każdej nieudanej próbie wskazania numeru, dostaje on informację czy wpisana przez niego liczba jest za mała czy za duża oraz otrzymuje -1 punkt. Najwyższy zdobyty wynik jest przechowywany dla użytkownika do momentu odświeżenia strony`,
};

const project3 = {
	title: `dice game`,
	img: diceGame,
	description: `Gra dla 2 użytkowników polegająca na rzucaniu kostką. Użytkownik rzuca kostką i zdobywa punkty dopóki nie wyrzuci 1 oczka lub nie odda kolejki drugiej osobie. W momecie wyrzucenia 1 oczka, użytkownik traci swoją kolejkę oraz zerują mu się zdobyte w danej rundzie punkty. Wygrywa osoba, która szybciej osiągnie wynik 100 punktów.`,
};

const project4 = {
	title: `bankist app`,
	img: bankistApp,
	description: `Aplikacja banku umożliwiająca (po zalogowaniu danego użytkownika) przesyłanie pieniędzy, wnioskowanie o kredyt, zamykanie konta. Użytkownik widzi aktualny stan konta, historię operacji(z możliwością sortowania) oraz sumę wpłat i wypłat. Automatyczne wylogowanie wyloguje użytkownika po 5 minutach bezczynności`,
};

const project5 = {
	title: `restaurants app`,
	img: restaurantsApp,
	prepair: true,
	description: `Aplikacja umożliwiająca użytkownikowi dodawanie na mapie restauracji i innych miejsc które odwiedził lub chce odwiedzić. Aplikacja tworzy listę restauracji z oceną użytkownika i umożliwia sortowanie wyników od najwyższej oceny`,
};

const project6 = {
	title: `sweet website shop`,
	img: sweetWebsitePage,
	prepair: true,
	description: `Sklep internetowy, służący do składania zamówienia na troty artystyczne. Użytkownik może wybrać smak, wygląd i wielkość tortu. Zamówienie może złożyć on-line lub wysyłając wiadomość poprzez formularz kontaktowy. `,
};

const creaTeNewProject = function (project) {
	const boxSide = projectsArray.length % 2 === 0 ? `left` : `right`;
	const markUp = `
    <div class="project__box project__box--${boxSide}">
		<img class="project__picture" src="${project.img}" alt="zdjęcie projektu ${
		project.title
	}"/>
		<div class="project__content">
			<a class="git-link" href="https://github.com/jstasz/${project.title.replaceAll(
				" ",
				"-"
			)}" target="_blank"><i class="fa-brands fa-github-square"></i></a>
			<div class="project__text">
				<h3 class="project__title section-title">${
					project.prepair ? project.title + " (prepair)" : project.title
				}</h3>
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
creaTeNewProject(project4);
creaTeNewProject(project5);
creaTeNewProject(project6);
