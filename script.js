window.onload = iniciar
function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton)
}

async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}

async function clickBoton() {

    let personaje = document.getElementById('selectPersonaje').value
    
    let url = `http://ddragon.leagueoflegends.com/cdn/13.19.1/data/es_ES/champion/${personaje}.json`
    let json = await cargarUrl(url)
    console.log(json)
    let estadisticas = json.data[personaje].stats
    console.log(estadisticas)

    document.getElementById('hp').innerHTML = estadisticas.hp
    document.getElementById('hpperlevel').innerHTML = estadisticas.hpperlevel
    document.getElementById('mp').innerHTML = estadisticas.mp
    document.getElementById('mpperlevel').innerHTML = estadisticas.mpperlevel
    document.getElementById('movespeed').innerHTML = estadisticas.movespeed
    document.getElementById('armor').innerHTML = estadisticas.armor
    document.getElementById('armorperlevel').innerHTML = estadisticas.armorperlevel
    document.getElementById('spellblock').innerHTML = estadisticas.spellblock
    document.getElementById('spellblockperlevel').innerHTML = estadisticas.spellblockperlevel
    document.getElementById('hpregen').innerHTML = estadisticas.hpregen
    document.getElementById('hpregenperlevel').innerHTML = estadisticas.hpregenperlevel
    document.getElementById('attackrange').innerHTML = estadisticas.attackrange
    document.getElementById('mpregen').innerHTML = estadisticas.mpregen
    document.getElementById('mpregenperlevel').innerHTML = estadisticas.mpregenperlevel
    document.getElementById('crit').innerHTML = estadisticas.crit
    document.getElementById('critperlevel').innerHTML = estadisticas.critperlevel
    document.getElementById('attackdamage').innerHTML = estadisticas.attackdamage
    document.getElementById('attackdamageperlevel').innerHTML = estadisticas.attackdamageperlevel
    document.getElementById('attackspeedperlevel').innerHTML = estadisticas.attackspeedperlevel
    document.getElementById('attackspeed').innerHTML = estadisticas.attackspeed
    
}







