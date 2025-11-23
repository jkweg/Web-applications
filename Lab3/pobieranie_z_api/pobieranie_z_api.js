let data = [];
async function wez_dane() {

    try{
        const response  = await fetch('https://dummyjson.com/products?limit=30&select=title,price,images');
        if(!response.ok){
            throw new Error("Jakis Blad");
        }
        
        const responseData = await response.json();
        data = responseData.products.map(product => ({
            title: product.title,
            price: product.price,
            image: product.images[0]
        }));

        wyswietl_dane(data);
    }
    catch (error){
        console.error("jakis blad",error);
    }
}

wez_dane();

function wyswietl_dane(products){

    const container = document.querySelector(".produkty");
    container.innerHTML = "";
    products.forEach(p => {
            const produkt = document.createElement("div")
            produkt.classList.add('produkt')
            
            produkt.innerHTML = `
            <h4>${p.title}</h4>
            <p>Cena: $${p.price}</p>
            <img src="${p.image}" width="150">
            `;

            container.appendChild(produkt);
        });
}

function szukaj(){
  const szukane = document.getElementById("szukaj").value.toLowerCase();
  const filtrowane = data.filter(p => p.title.toLowerCase().includes(szukane));
  wyswietl_dane(filtrowane);
}

function filtruj(){

    let wynik = [...data];

    let opcja = document.getElementById("filtr").value;

    if(opcja == "normalnie"){
        wynik = [...data];
    }

    if(opcja=="rosnaco"){
        wynik = [...data].sort((a,b) => a.price - b.price);
    }

    if(opcja=="malejaco"){
        wynik = [...data].sort((a,b) => b.price - a.price);
    }

    if(opcja=="alfabetycznie"){
        wynik = [...data].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
    }

    wyswietl_dane(wynik);

}
