import { navbar } from "./components/navbar";
import Banner from "./banner.jpg"
import "./styles.css"

const content = document.querySelector('#content');

const bannerContainer = document.createElement('div');
bannerContainer.classList.add('banner-container');

const bannerText = document.createElement('p');
bannerText.innerHTML = 'The Coffee Spot'
bannerText.classList.add('banner-text');

const myBanner = new Image();
myBanner.src = Banner;
myBanner.classList.add('banner');

content.appendChild(navbar);
content.appendChild(bannerContainer);
bannerContainer.appendChild(myBanner);
bannerContainer.appendChild(bannerText);