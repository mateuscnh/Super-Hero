let heroes = [];
let wrap = document.getElementById("wrap");

window.onload = () => {
    addEvents();
}

function createSingleHero(id, nameHero, urlImage) {
    let singleHero = document.createElement('div');
    singleHero.setAttribute('class', 'singleHero');
    singleHero.setAttribute('id', id);

    let imgHero = document.createElement('div');
    imgHero.setAttribute('id', 'imgHero');
    imgHero.style.backgroundImage = 'url(' + urlImage + ')';
    singleHero.appendChild(imgHero);

    let name = document.createElement('h1');
    name.setAttribute('id', 'nameHero');
    name.innerHTML = nameHero;
    singleHero.appendChild(name);

    wrap.appendChild(singleHero);
}

function setHero(hero) {
    console.log(hero)
    document.getElementById('img').style.backgroundImage = 'url(' + hero.image.url + ')';
    document.getElementById('name').innerHTML = hero.name;
    // POWERSTATS
    document.getElementById('intelligence').innerHTML = hero.powerstats.intelligence;
    document.getElementById('strength').innerHTML = hero.powerstats.strength;
    document.getElementById('speed').innerHTML = hero.powerstats.speed;
    document.getElementById('durability').innerHTML = hero.powerstats.durability;
    document.getElementById('power').innerHTML = hero.powerstats.power;
    document.getElementById('combat').innerHTML = hero.powerstats.combat;
    // BIOGRAPHY
    //document.getElementById('full-name').innerHTML = hero.biography.full - name;
    //document.getElementById('first-appearance').innerHTML = hero.biography.first - appearance;
    document.getElementById('publisher').innerHTML = hero.biography.publisher;
    // APPEARANCE
    document.getElementById('gender').innerHTML = hero.appearance.gender;
    document.getElementById('race').innerHTML = hero.appearance.race;
    document.getElementById('height').innerHTML = hero.appearance.height;
    document.getElementById('weight').innerHTML = hero.appearance.weight;
    //document.getElementById('eye-color').innerHTML = hero.appearance.eye - color;
    //document.getElementById('hair-color').innerHTML = hero.appearance.hair - color;
    // CONNECTIONS
    //document.getElementById('group-affiliation').innerHTML = hero.connections.group - affiliation;
    document.getElementById('relatives').innerHTML = hero.connections.relatives;

    document.getElementById('dark').style.display = "block";
    document.getElementById('hero').style.display = "flex";
}

function addEvents() {
    let searchInput = document.getElementById("search-input");
    searchInput.addEventListener('keypress', (e) => {
        if (e.which == 13) {
            searchBtn.click();
        }
    });

    let searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", () => {
        let heroName = document.getElementById('search-input').value;

        if (heroName != "") {
            while (wrap.firstChild) {
                wrap.removeChild(wrap.firstChild);
            }
            searchHero(heroName);
            searchInput.value = "";
        } else {
            alert('enter the name of the character!');
        }

    });

    let wrap = document.getElementById("wrap");
    wrap.addEventListener('click', () => {
        let idHeroClicked = event.path[1].attributes[1].value;
        for (const key in heroes) {
            if (heroes[key].id == idHeroClicked) {
                setHero(heroes[key]);
                return;
            }
        }
    });


    document.getElementById('exit').addEventListener('click', () => {
        document.getElementById('hero').style.display = "none";
        document.getElementById('dark').style.display = "none";
    });
}
