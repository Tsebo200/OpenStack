
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/wiaandev/OpenStack?color=lightblue)
![GitHub watchers](https://img.shields.io/github/watchers/wiaandev/OpenStack?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/wiaandev/OpenStack?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wiaandev/OpenStack?color=lightblue)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]

<h5 align="center" style="padding:0;margin:0;">Caidyn Ginger | Carlo Kuyper | Tsebo Ramonyalioa | Wiaan Duvenhage</h5>
<h5 align="center" style="padding:0;margin:0;">21100204 | 180145 | 200200 | 200307</h5>
<h6 align="center">DV200 | Term 4</h6>
</br>
<p align="center">

  <a href="https://github.com/wiaandev/OpenStack">
    <img src="client/src/assests/OpenStackLogo-white.svg" width="100px">
  </a>

<h3 align="center">OpenStack</h3>

  <p align="center">
    A Developer's Q&A platform for The Open Window, similar to that of StackOverflow.<br>

   <br />
   <br />
   <a href="https://youtu.be/8iZ_rSmcN0E">View Demo</a>
    ·
    <a href="https://github.com/wiaandev/OpenStack/issues">Report Bug</a>
    ·
    <a href="https://github.com/wiaandev/OpenStack/issues">Request Feature</a>
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

This is OpenStack! A guitar e-commerce store where the user can interact with it via adding guitars to the cart and then checking out, in which they will push an order to the database that can be retrieved by the admin and then can later be dispatched. The only brand sold on this site is Gibson. NOTE: THIS IS A MOCK E-COMMERCE WEBSITE.

### Built With
[<img src="https://www.svgrepo.com/show/331488/mongodb.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=gs_emea_south_africa_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783)
[<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://expressjs.com/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="6%" height="6%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://reactjs.org/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355" width="7%" height="7%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://nodejs.org/en/)





<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, the latest version of Android Studio is required. The latest version can be downloaded from [Android Studio](https://developer.android.com/studio?gclid=CjwKCAjwuYWSBhByEiwAKd_n_q4WXi5vcCji08peoWOEsv-KHFT7QWNZNmozB_CIiiSNl_HOUL-1JBoCGx8QAvD_BwE&gclsrc=aw.ds)

### Installation

Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/wiaandev/OpenStack.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/wiaandev/OpenStack.git
    ```

        Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm install
    ```

## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

### For the User

#### Logging In

![image2][image2]
The user can log into their profile using their email and passwords.

#### Viewing Products Individually

![image3][image3]
The user can view the product they are looking for individually and they can look for more in-depth information about it, like the neck length, the handedness and much more!

#### Adding products to a cart

![image4][image4]
After the user has decided what guitar they want to order, they can add it to the cart (Note: this can only be done if the user is logged in!).

#### Placing orders via checkout
If the user wants to place an order for their guitar, they can do so by proceeding to the checkout page and typing in their card details (this is a mock payment card section)

### For the Admin
#### Adding Guitars To The Store
![image6][image5]
The admin has access the to the inventory management page, which means he can add guitars to the store by clicking on "New Guitar+", wherein a modal will popup and the admin can enter all the necessary information to add a guitar to OpenStack.

#### Updating Guitar Information
![image7][image6] If the user feels like there is some information on a guitar that is not accurate or that needs updating, the  admin can do so by clicking on the update button, where again, a modal will pop-up and the admin can update a guitar's information accordingly.

#### Deleting Guitars From the Database
![image7][image7]Sometimes you feel that you just want to delete a guitar that may be not of interest to some people. The admin can delete a guitar from the store by simply clicking on delete, and then confirming yes by clicking on the modal that will appear next.

#### Dispatching Orders
![image14][image14]From the order processing page, the admin can view any incoming orders and their information, by clicking on the dispatch button, the user will remove the order from the database and so delivery will take place.

<!-- CONCEPT PROCESS -->
<!-- Briefly eOpenStacklain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

The color blue just gives a website just that sleek premium feel combined with a color like white, I wanted to use a sans-seriff typeface for this project, cause I just feel like something like cursive or Serif typefaces just won't cut it.

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
- Seeing everything come together in the end was also a big highlight for me
- Even though working with the MERN stack was a challenge, it was also extremely fun and interesting

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Implementing the cart was definitely a challenge, I didn't know how I would go about doing it, but luckily with the help of my peers, I was able to get it to work like intended.
- In the beginning I did not know how I was going to map my objects in MongoDB and translate it to my front-end.
- Showing only certain data was definitely challenging, as I did not get to it, so eventually I just dropped it.

### Future Implementation

<!-- TODO Change this! -->

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- I would like to implement chart.js for data visualisation
- I want to show the total amount in the cart
- I want to add a wishlist page
- I want to add an about us page
- I want to add video section of each guitar when viewing the guitar individually

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

See the [open issues](https://github.com/wiaandev/OpenStack/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->

## Authors

- **Wiaan Duvenhage** - [Github](https://github.com/wiaandev)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Wiaan Duvenhage** - [wiaanduvenhage.dev@gmail.com](mailto:wiaanduvenhage.dev@gmail.com) - [@wiaan.dev](https://www.instagram.com/wiaan.dev/)
- **Project Link** - https://github.com/wiaandev/OpenStack

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->
<!-- TODO Change this -->

- [Stack Overflow](https://stackoverflow.com/)
- [Figma](https://www.figma.com/)
- [Lecturer](https://github.com/MikeMaynard14)
- [Freepik](https://www.freepik.com)
- [unDraw](https://undraw.co/)
- [Gibson](http://gibson.com/)
- [Leander van Aarde](https://github.com/leandervanAarde)
- [Vian Du Plessis](https://github.com/Vian-du-Plessis)
- [Reinhardt de Beer](https://github.com/EpicBlue1)

[image1]: client/src/Assets/mockups/mockup1.jpg
[image2]: client/src/Assets/mockups/mockup2.jpg
[image3]: client/src/Assets/mockups/mockup3.jpg
[image4]: client/src/Assets/mockups/mockup4.jpg
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