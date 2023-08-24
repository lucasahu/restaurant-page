const footer = document.createElement('div');

footer.classList.add('footer-component');

footer.style.width = '100vw';
footer.style.height = '5vh';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';

footer.innerHTML = `
<p class="footer-text">lucasahu 2023</p>
<a class="github-link" href="https://github.com/lucasahu"></a>
<a class="twitter-link" href="https://twitter.com/lucasahudev"></a>
`

export { footer };