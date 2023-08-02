<h1 align="center">About me page</h1>

## Project Overview 🎉

https://justyna-bronisz.netlify.app/

Portfolio website (full responsive) created to render best projects.<br>

###### Page includes :

- information about the author
- current skills
- list of best projects
- contact form

-------------

### Projects

Adding new project based on class Project with constructor : (title, description, img, gitHub, www, prepair);
Each project has a link to gitHub. It also can have link to www. If some project is in the process you can add comment by set prepair at true. 

To add a new project, you need to create a new variable based on the Project class using the following template:

const newProject = new Project(
  `title`,
  `description`,
  `used technologies`,
  image(imported from the src/images folder),
  `GitHub link`,
  `URL`, 
);

App to render projects does it automatically. There are three projects on the front page. You can watch more project if you want or click link to gitHub if you want to watch all.

-------------

### Other sections

<b>nav</b> detects active section while scrolling and highlights the appropriate nav link.<br>
hamburger nav base on CSS-animated hamburgers <i> @author Jonathan Suh @jonsuh (https://github.com/jonsuh/hamburgers)</i>

<b> skills </b> animation based on event delegation.

<b> contact form </b> based on firebase.


## Tech used 🔧

|                                                   | 
| ------------------------------------------------------- |
| HTML                         
| SCSS (BEM)
| JS                       

## Instalation

1. Clone the repository with the source code or download it to your computer.
2. In the terminal, navigate to the folder where the package.json file is located.
3. Install the dependencies by <i>npm install</i>
4. Start the development server by typing the command <i>npm start</i> in the terminal. The website should now open in your browser at http://localhost:1234/.
5. If you want to build a production-ready version of the website, type the command <i>npm run build</i>in the terminal. Parcel will generate the output files and place them in the dist/ folder.

