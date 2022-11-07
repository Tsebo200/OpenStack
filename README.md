
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/CaidynGinger/OpenStack?color=lightblue)
![GitHub watchers](https://img.shields.io/github/watchers/CaidynGinger/OpenStack?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/CaidynGinger/OpenStack?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CaidynGinger/OpenStack?color=lightblue)

<h5 align="center" style="padding:0;margin:0;">Caidyn Ginger | Carlo Kuyper | Tsebo Ramonyalioa | Wiaan Duvenhage</h5>
<h5 align="center" style="padding:0;margin:0;">21100204 | 180145 | 200200 | 200307</h5>
<h6 align="center">DV200 | Term 4</h6>
</br>
<p align="center">

  <a href="https://github.com/CaidynGinger/OpenStack">
    <img src="client/src/assets/OpenStackLogo-white.svg" width="200px">
  </a>

<h3 align="center">OpenStack</h3>

  <p align="center">
    This is a developer's questions & answers platform, similar to that of Stack Overflow.<br>

   <br />
   <br />
   <a href="https://youtu.be/8iZ_rSmcN0E">View Demo</a>
    ·
    <a href="https://github.com/CaidynGinger/OpenStack/issues">Report Bug</a>
    ·
    <a href="https://github.com/CaidynGinger/OpenStack/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
    - [Project Description](#project-description)
    - [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
    - [Ideation](#ideation)
    - [Wireframes](#wireframes)
- [Development Process](#development-process)
    - [Implementation Process](#implementation-process)
        - [Highlights](#highlights)
        - [Challenges](#challenges)
    - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
    - [Mockups](#mockups)
    - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

![image1][image1]

### Project Description

Welcome to OpenStack! This is a developer's Q&A platform, something you probably have seen on sites like Stack Overflow. This is exactly the same thing, except we took on our own spin on it! Users can ask and answer questions, receive achievements based on user score and much, much more. This application was built with the MERN Stack and hosted on Heroku.

### Built With
[<img src="https://www.svgrepo.com/show/331488/mongodb.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=gs_emea_south_africa_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783)
[<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://expressjs.com/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="6%" height="6%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://reactjs.org/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://nodejs.org/en/)
[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://ionicframework.com/)
[<img src="https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://nodemailer.com/about/)


### Hosted With
[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" width="5%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://www.heroku.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, the latest version of Node.js is required. The latest version can be downloaded from [Node.js](https://nodejs.org/en/download/)

### Installation

Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/CaidynGinger/OpenStack.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/CaidynGinger/OpenStack.git
    ```

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm install
    ```

## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

### For the User

#### Register their account

![image2][image2]
The user can create a new account but it requires that the user has a valid virtualwindow email. They can also choose a number of preset profile pictures to be added to their account, which will serve as their avatar.

#### Verify Their Email

![image3][image3]
After registering, the user is required that have to verify their email before they can use OpenStack and all its features.

#### Asking a question

![image4][image4]
When the user has verified their account, they can now ask a question (the user needs to stay logged in). The user can enter all the necessary information ,like the title, the code and even something like a screenshot or even related tags for better clarity.

#### Answering a question
After another user has already asked a question. Another user can anwer that question, both the user that asked the question and the user that answered the question gets a reliability score.

#### Question Interaction

The user can upvote, downvote or even report a question, should it be something inappropriate or something that has vulgar language or potential nudity, racist or pornographic content linked to it. This will also influence the user's reliability score. They can also click on the checkmark of a question, should that question be correct, and it will update visually.

#### Update their username

If the user feels like they want to update their username. That is something that they would be able to do. They can head to the user settings page and do it there with the upmost ease.

#### Password Resetting

If the user has forgotten their password. This is not something that should worry the user, as they can reset their password by clicking on the indicated button on the sign-in page.

#### Earn Achievements

As mentioned previously by the reliability score. The user can earn achievements based on this reliability score, with the highest achievement being the admin achievement, granting them access to the admin privileges of OpenStack.

### For the Admin
#### Monitoring User Interaction
![image6][image5]
The user can monitor any incoming questions and answers from the users interacting with OpenStack.

#### Manage User Roles
![image7][image6] The admin can manage any role for any user on the entirety of OpenStack. The user can also "ban" people from interacting with OpenStack by removing all their roles

#### Removing Questions
![image7][image7]If there are any questions that the admin feel that they want to remove, they can do so on the admin tab and clicking on the delete button

#### Tag Management
![image14][image14]The admins can remove and add any tags they feel like would be necessary. The admins can also [Tombstone](https://en.wikipedia.org/wiki/Tombstone_(programming)#:~:text=Tombstones%20are%20a%20mechanism%20to,C%2B%2B%20and%20assembly%20languages.) the tags, which would disable the tag, but it would still be on the database.

<!-- CONCEPT PROCESS -->
<!-- Briefly eOpenStacklain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

We really went with a simple and a minimalistic UI design. OpenStack is there to be functional and helpful to any newcomer or veteran of OpenStack. Where they can simply ask, answer and view questions in a quick, concise and effective way. We stick to a simple orange with accents of a baby blue palette, with a light-themed website. A UI trend that really started to rise among web apps, was rounded corners, so we also incorporated that into our design, just to round it off even further.

### Wireframes

![image8](client/src/Assets/mockups/wireframes.jpg)

### Moodboard
![image9][image9]

## Development Process

The `Development Process` is the technical implementations and functionality done for the app.

### Implementation Process

- I used `npx create-react app` to create this React project. I implemented component-based development instead of classes. By doing this, I will be able to easily inject and eject components and sub-components into my project, making it refactorable and reusable instead of writing up classes I have to do everytime making it tedious and redundant

- I implemented to `scss` for the styling of my project and used `module.scss` to style each individual component. An id get given to each classname, making the styling super easy

- I incorporated MongoDB Atlas as my database where I will get and send my data to.

- `axios` was implemented so that I can make HTTP requests to the database server so that I can retrieve, edit, delete and send (CRUD) data to it

- ExpressJS & NodeJS was used so that I can write JavaScript in both my front-end and back-end

- ExpressJS was also used to communicate to my database

- I utilised the `cors` middleware to bypass any errors I will encounter when utilising MongoDB

#### Highlights

<!-- stipulated the highlight you eOpenStackerienced with the project -->

- A very big high point was seeing the data from my backend being populated dynamically in my front-end.
- It was also really amazing to see our site being hosted on Heroku, for the entire digital world to see and interact with
- Fixing all the annoying bugs will always be a plus point
- Handing in the project on time
- Working with deployment software like Heroku

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Something we unfortunately could not implement because of time restrictions was Amazon's S3 Bucket's, in the end we had to drop it revert back to Multer for image uploading
- A big challenge was the tag handling in the question's portal, with the help of the team, we were able to get it working
- Getting the emailer to work was also a big pain point, but eventually after a lot of trial-and-error we got it working

### Future Implementation

<!-- TODO Change this! -->

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- We would like to make this a fully responsive website
- We would like to implement dark mode
- Implement Pagination on Questions Page

<!-- MOCKUPS -->

## Final Outcome

### Mockups

<!-- TODO Change this -->

![image2][image2]
![image3][image3]
![image4][image4]
<br>


<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

<!-- TODO Change this -->

To see a run through of OpenStack, click below:

[View Demonstration](https://youtu.be/8iZ_rSmcN0E)

See the [open issues](https://github.com/CaidynGinger/OpenStack/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->

## Authors

- **Caidyn Ginger** - [Github](https://github.com/CaidynGinger)
- **Wiaan Duvenhage** - [Github](https://github.com/wiaandev)
- **Tsebo Ramonyalioa** - [Github](https://github.com/Tsebo200)
- **Carlo Kuyper** - [Github](https://github.com/carlokuyper)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Wiaan Duvenhage** - [wiaanduvenhage.dev@gmail.com](mailto:wiaanduvenhage.dev@gmail.com) - [@wiaan.dev](https://www.instagram.com/wiaan.dev/)
- **Caidyn Ginger** - [21100204@virtualwindow.co.za](mailto:21100204@virtualwindow.co.za) - [@caidynginger](https://www.instagram.com/caidynginger/)
- **Project Link** - https://github.com/CaidynGinger/OpenStack

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->
<!-- TODO Change this -->

- [Stack Overflow](https://stackoverflow.com/)
- [Figma](https://www.figma.com/)
- [Lecturer](https://github.com/MikeMaynard14)
- [Freepik](https://www.freepik.com)
- [unDraw](https://undraw.co/)
- [Leander van Aarde](https://github.com/leandervanAarde)
- [Vian Du Plessis](https://github.com/Vian-du-Plessis)
- [Reinhardt de Beer](https://github.com/EpicBlue1)

[image1]: client/readme-assets/about-project.png
[image2]: client/readme-assets/register.jpg
[image3]: client/readme-assets/verify.jpg
[image4]: client/readme-assets/question.jpg
[image5]: client/src/Assets/mockups/mockup5.jpg
[image6]: client/src/Assets/mockups/mockup6.jpg
[image7]: client/src/Assets/mockups/mockup7.jpg
[image8]: client/src/Assets/mockups/wireframes.jpg
[image9]: client/src/Assets/mockups/moodboard.jpg
[image10]: Images/mockup10.jpg
[image11]: Images/mockup2.jpg
[image12]: Images/mockup3.jpg
[image13]: Images/mockup4.jpg
[image14]: client/src/Assets/mockups/mockup8.jpg

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wiaan-duvenhage-95118823a/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/wiaan.dev/
