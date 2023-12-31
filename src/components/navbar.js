const navbar = document.createElement('div');

navbar.classList.add('navbar-component');

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand">The Coffee Spot</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#menu">Menu</a>
                <a class="nav-link" href="#location">Location</a>
                <a class="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </div>
</nav>`

export { navbar };