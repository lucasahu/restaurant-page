import { navbar } from "./components/navbar";
import { menu } from "./components/menu";
import Banner from "./img/banner.jpg"
import "./styles.css"
import Espresso from "./img/espresso.jpg";
import Latte from "./img/latte.jpg";
import Capuccino from "./img/capuccino.jpg";
import Mocha from "./img/mocha.jpg";
import Frappe from "./img/frappe.jpg";
import Matcha from "./img/matcha.jpg";

const content = document.querySelector('#content');

const bannerContainer = document.createElement('div');
bannerContainer.classList.add('banner-container');

const bannerText = document.createElement('p');
bannerText.innerHTML = 'The Coffee Spot'
bannerText.classList.add('banner-text');

const leftPictures = document.createElement('div');
leftPictures.classList.add('left-pictures');

const rightPictures = document.createElement('div');
rightPictures.classList.add('right-pictures');

const espressoContainer = document.createElement('div');
espressoContainer.classList.add('img-container');

const latteContainer = document.createElement('div');
latteContainer.classList.add('img-container');

const capuccinoContainer = document.createElement('div');
capuccinoContainer.classList.add('img-container');


const mochaContainer = document.createElement('div');
mochaContainer.classList.add('img-container');

const frappeContainer = document.createElement('div');
frappeContainer.classList.add('img-container');

const matchaContainer = document.createElement('div');
matchaContainer.classList.add('img-container');

const myBanner = new Image();
myBanner.src = Banner;
myBanner.classList.add('banner');

const myEspresso = new Image();
myEspresso.src = Espresso;
myEspresso.classList.add('espresso');

const myLatte = new Image();
myLatte.src = Latte;
myLatte.classList.add('latte');

const myCapuccino = new Image();
myCapuccino.src = Capuccino;
myCapuccino.classList.add('capuccino');

const myMocha = new Image();
myMocha.src = Mocha;
myMocha.classList.add('mocha');

const myFrappe = new Image();
myFrappe.src = Frappe;
myFrappe.classList.add('frappe');

const myMatcha = new Image();
myMatcha.src = Matcha;
myMatcha.classList.add('matcha');

content.appendChild(navbar);
content.appendChild(bannerContainer);
bannerContainer.appendChild(myBanner);
bannerContainer.appendChild(bannerText);

menu.appendChild(leftPictures);

leftPictures.appendChild(espressoContainer);
espressoContainer.appendChild(myEspresso);

leftPictures.appendChild(latteContainer);
latteContainer.appendChild(myLatte);

leftPictures.appendChild(capuccinoContainer);
capuccinoContainer.appendChild(myCapuccino);

content.appendChild(menu);

menu.appendChild(rightPictures);

rightPictures.appendChild(mochaContainer);
mochaContainer.appendChild(myMocha);

rightPictures.appendChild(frappeContainer);
frappeContainer.appendChild(myFrappe);

rightPictures.appendChild(matchaContainer);
matchaContainer.appendChild(myMatcha);