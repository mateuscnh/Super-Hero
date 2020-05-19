const api_KEY = "2593677404284878";

function searchHero(nameHero) {
    axios.get(`https://superheroapi.com/api/${api_KEY}/search/${nameHero}`)
        .then(response => {
            if (response.data.error) throw new Error(response.data.error);
            for (const key in response.data.results) {
                heroes.push(response.data.results[key]);
                createSingleHero(response.data.results[key].id, response.data.results[key].name, response.data.results[key].image.url);
            }
        })
        .catch(err => {
            alert(err);
        })
}
