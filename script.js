/* Fet per marta rodrigo */
let series = [];
let actors = [];
let indxActl = 0;
let encesa = false;
let paramActual = 'series'; 

async function fetchSeries() {
    if (!encesa) return;

    try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        series = data.slice(0, 20);
        mostraSeries(0);
    } catch (error) {
        console.error("Error al agafar les series:", error);
    }
}

async function fetchActors() {
    if (!encesa) return;

    try {
        const response = await fetch('https://api.tvmaze.com/people');
        const data = await response.json();
        actors = data.slice(0, 20);
        mostraActors(0);
    } catch (error) {
        console.error("Error al agafar els actors:", error);
    }
}

function mostraSeries(index) {
    if (!series.length || !encesa) return;

    const serie = series[index];
    if (!serie) return;

    document.getElementById('screen').innerHTML = `
        <h2>${serie.name}</h2>
        <img src="${serie.image?.medium || 'https://via.placeholder.com/200'}" alt="${serie.name}">
        <p>${serie.summary ? serie.summary.replace(/<\/?[^>]+(>|$)/g, "") : "No hi ha desc."}</p>
        <div class="show-info">
            ⭐ ${serie.rating?.average || 'N/A'} 
            | 📅 ${serie.premiered || 'Desconeguda'} 
            | 🎭 ${serie.genres?.join(", ") || 'Sense genere'}
            | ⏳ ${serie.runtime ? serie.runtime + ' min' : 'Desconegut'}
            | 🗣️ ${serie.language || 'Desconegut'}
        </div>
    `;
}

function mostraActors(index) {
    if (!actors.length || !encesa) return;

    const actor = actors[index];
    if (!actor) return;

    document.getElementById('screen').innerHTML = `
        <h2>${actor.name}</h2>
        <img src="${actor.image?.medium || 'https://via.placeholder.com/200'}" alt="${actor.name}">
        <p>${actor.country?.name || 'No hi ha país'}</p>
        <div class="show-info">
            🎂 ${actor.birthday || 'Desconegut'} 
            | 🌍 ${actor.country?.name || 'Desconegut'}
        </div>
    `;
}

function canviarCanal(dir) {
    if (paramActual === 'series') {
        if (!series.length || !encesa) return;
        if (dir === 'next') {
            indxActl = (indxActl + 1) % series.length;
        } else if (dir === 'prev') {
            indxActl = (indxActl - 1 + series.length) % series.length;
        }
        mostraSeries(indxActl);
    } else if (paramActual === 'actors') {
        if (!actors.length || !encesa) return;
        if (dir === 'next') {
            indxActl = (indxActl + 1) % actors.length;
        } else if (dir === 'prev') {
            indxActl = (indxActl - 1 + actors.length) % actors.length;
        }
        mostraActors(indxActl);
    }
}

function teleOn() {
    encesa = true;
    document.getElementById('screen').classList.remove('off-screen');
    if (paramActual === 'series') {
        fetchSeries();
    } else if (paramActual === 'actors') {
        fetchActors();
    }
}

function apagarTele() {
    encesa = false;
    document.getElementById('screen').classList.add('off-screen');
    document.getElementById('screen').innerHTML = '';
}

function refrescarDades() {
    if (encesa) {
        if (paramActual === 'series') {
            fetchSeries();
        } else if (paramActual === 'actors') {
            fetchActors();
        }
    }
}

function canviaSeries() {
    paramActual = 'series';
    if (encesa) {
        fetchSeries();
    }
}

function canviaActors() {
    paramActual = 'actors';
    if (encesa) {
        fetchActors();
    }
}

document.getElementById('chPlus').addEventListener('click', () => canviarCanal('next'));
document.getElementById('chMinus').addEventListener('click', () => canviarCanal('prev'));
document.querySelector('.powerOn').addEventListener('click', teleOn);
document.querySelector('.powerOff').addEventListener('click', apagarTele);
document.querySelector('.refresh').addEventListener('click', refrescarDades);
document.getElementById('seriesBtn').addEventListener('click', canviaSeries);
document.getElementById('actorsBtn').addEventListener('click', canviaActors);

document.querySelectorAll('.numberBtn li').forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (encesa) {
            indxActl = i;
            if (paramActual === 'series') {
                mostraSeries(indxActl);
            } else if (paramActual === 'actors') {
                mostraActors(indxActl);
            }
        }
    });
});

apagarTele();