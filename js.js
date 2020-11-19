const konteineris = document.querySelector("#konteineris")

// https://restcountries.eu/rest/v2/all

//1. Su async ir await ir forEach metodu
visosSalys()
    .then(response =>{
        console.log("Valioooo!!!");
    })
    .catch(error =>{
        console.log("Ups!!")
        console.log(error);
    });

async function visosSalys() {
    const gaunuInfo = await fetch("https://restcountries.eu/rest/v2/all");
    const duomenys = await gaunuInfo.json();
    console.log(duomenys);

    duomenys.forEach(salis =>{
    const card = document.createElement("div");
    const nuotrauka = document.createElement("img");
    const pavadinimas = document.createElement("h5");
    nuotrauka.src = salis.flag;
    konteineris.appendChild(card);
    card.appendChild(nuotrauka);
    card.appendChild(pavadinimas);
    pavadinimas.innerHTML = salis.name;
    console.log("forEach metodas labas")
});
   // console.log(gaunuInfo)
}
//console.log(visosSalys())

//2. try catch ir async await

/*const visosSalys = async () => {
    try {
        const gaunuInfo = await fetch("https://restcountries.eu/rest/v2/all");
        const duomenys = await gaunuInfo.json();
        console.log(duomenys);

        duomenys.forEach(salis => {
            const card = document.createElement("div");
            const nuotrauka = document.createElement("img");
            const pavadinimas = document.createElement("h5");
            nuotrauka.src = salis.flag;
            konteineris.appendChild(card);
            card.appendChild(nuotrauka);
            card.appendChild(pavadinimas);
            pavadinimas.innerHTML = salis.name;
            console.log("forEach metodas labas")
        })
    }
    catch(error) {
        console.log(error)}
}
visosSalys();*/

//3. su then ir map
/*const visosSalys = fetch("https://restcountries.eu/rest/v2/all")
.then(duomenys => duomenys.json())
    .then(manoSalys => {
        console.log(manoSalys);
        manoSalys.map(salis =>{
            const card = document.createElement("div");
            const nuotrauka = document.createElement("img");
            const pavadinimas = document.createElement("h5");
            nuotrauka.src = salis.flag;
            konteineris.appendChild(card);
            card.appendChild(nuotrauka);
            card.appendChild(pavadinimas);
            pavadinimas.innerHTML = salis.name;
            console.log("forEach metodas labas")

        })
    });
console.log(visosSalys)*/