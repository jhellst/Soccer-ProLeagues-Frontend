<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

# Soccer ProLeagues

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jhellst/Soccer-Proleagues-Frontend">
    <img src="src/images/logo.svg" alt="Logo" width="250" height="250">
  </a>

  <!-- <h1 align="center">Soccer ProLeagues</h1> -->

  <p align="center">
    <a href="https://soccer-proleagues.onrender.com/">Demo Website*</a>
    <br>
    <a href="https://drive.google.com/file/d/1f4TY-bUpUCd3NxmW6aM77AFWh1wnQlIA/view?usp=sharing">Demo Video</a>
  </p>
</div>

<sup><sub>\* Note: Demo Website is hosted on a free Render instance, and may ~45 seconds to start up the project frontend + backend instances.</sub></sup>
<!-- <small>\* Note: Demo Website is hosted on a free Render instance, and may ~45 seconds to start up the project frontend + backend instances.</small> -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<details>
  <summary>Project Screenshots</summary>
<ul>
    <li>
      <div>Homepage</div>
      <img src="src/images/readme/1 - homepage.png" alt="Soccer ProLeagues Homepage" width="800" height="500">
    </li>
    <li>
      <div>League Pages</div>
      <img src="src/images/readme/2 - allLeagues.png" alt="All Leagues" width="800" height="500">
      <img src="src/images/readme/3 - followedLeagues.png" alt="Followed Leagues" width="800" height="500">
      <img src="src/images/readme/5 - leagueTable.png" alt="League Table" width="800" height="500">
    </li>
    <li>
      <div>Team Pages</div>
      <img src="src/images/readme/6 - allTeams.png" alt="All Teams" width="800" height="500">
      <img src="src/images/readme/7 - followedTeams.png" alt="Followed Teams" width="800" height="500">
      <img src="src/images/readme/4 - singleTeamPage.png" alt="Single Team Page" width="800" height="500">
    </li>

  </ul>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Soccer ProLeagues is web application that allows a user to select pro soccer leagues to track statistics and performance for each team in the league. League data is stored in a PostgreSQL database and updated via an automated web-scraping process. The frontend webpage accesses the data via an API route and retrieves/renders it for viewing.

Users can select leagues and teams to follow and unfollow, and a user can visit customized pages that include the leagues/teams that they are following. Visualization of league data is available, for simple exploration of league and team statistics.

A demo version of this project can be found here: https://soccer-proleagues.onrender.com/

Please note that this project runs on a free Render instance. For this reason, the project's frontend and backend services may take up to 1 minute to spin up the server instances.


## Project Details

The GitHub repository for this project's backend can be found here:
- [Soccer ProLeagues Backend](https://github.com/jhellst/Soccer-ProLeaugues-Backend)

<!-- Frontend Located Here: -->

<!-- Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template! -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->

* [![Flask][Flask]][Flask-url]
* [![Flask-SQLAlchemy][Flask-SQLAlchemy]][Flask-SQLAlchemy-url]
* [![React][React.js]][React-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Docker][Docker]][Docker-url]
<!-- * [![Chart.js][Chart.js]][Chart.js-url] -->
* [![JWT][JWT]][JWT-url]
* [![bs4][bs4]][bs4-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Flask]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[Flask-SQLAlchemy]: https://img.shields.io/badge/Flask%20SQLAlchemy-%23D71F00?style=flat&logo=sqlalchemy
[Flask-SQLAlchemy-url]: https://flask-sqlalchemy.palletsprojects.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Docker]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff
[Docker-url]: https://www.docker.com/
<!-- [Chart.js]: https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white
[Chart.js-url]: https://www.chartjs.org/ -->
<!-- [bs4]: -->
[bs4-url]: https://beautiful-soup-4.readthedocs.io/en/latest/
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://www.npmjs.com/package/jsonwebtoken

<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

### Prerequisites

* Docker
    - [Download Docker Desktop](https://docs.docker.com/get-started/get-docker/)
* PostgreSQL
    - [Download PostgreSQL](https://www.postgresql.org/download/)

### Installation Instructions
1. Before running the project frontend, first visit the backend repository and follow the initial setup instructions.
    - [Soccer Proleagues Backend](https://github.com/jhellst/Soccer-ProLeaugues-Backend)
2. After the backend is up and running, follow the setup instructions below to launch the frontend.

#### Frontend:
1. Clone the frontend repository
```sh
   git clone https://github.com/jhellst/Soccer-Proleagues-Frontend.git
   ```
2. cd into frontend folder
```sh
   cd soccer-proleagues-frontend
   ```
3. Create .env file with the following environmental variables:
   ```sh
   REACT_APP_BACKEND_SERVICE_URL=<YOUR_BACKEND_SERVICE_URL>
   PORT=<PORT_NUMBER>
   ```
4. Run Docker command to build
   ```sh
   docker compose up
   ```
5. To login, either signup a new user or login with one of the test users:
   ```sh
   (username: TestUser, password: test)
   (username: a, password: a)
   (username: b, password: b)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage -->

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap -->

<!-- - [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->

<!-- See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues). -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
<!-- ## License -->

<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Joshua Hellstrom - [LinkedIn](https://www.linkedin.com/in/joshua-hellstrom/) - [Portfolio Website](https://joshhellstrom.site/) - jhellst@gmail.com

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments -->

<!-- Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/jhellst/Soccer-ProLeagues/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/jhellst/Soccer-ProLeagues/forks
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/jhellst/Soccer-ProLeagues/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jhellst/Soccer-ProLeagues/issues -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/joshua-hellstrom/

[Flask]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[Flask-SQLAlchemy]: https://img.shields.io/badge/Flask%20SQLAlchemy-%23D71F00?style=flat&logo=sqlalchemy
[Flask-SQLAlchemy-url]: https://flask-sqlalchemy.palletsprojects.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Chart.js]: https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white
[Chart.js-url]: https://www.chartjs.org/
[bs4]: https://img.shields.io/badge/Beautiful%20Soup%204-3b3b3b
[bs4-url]: https://beautiful-soup-4.readthedocs.io/en/latest/
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://www.npmjs.com/package/jsonwebtoken