import { navbar } from "./components/navbar";
import Banner from "./banner.jpg"
import "./styles.css"

const content = document.querySelector('#content');

const myBanner = new Image();
myBanner.src = Banner;
myBanner.classList.add('banner');

content.appendChild(navbar);
content.appendChild(myBanner);