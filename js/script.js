window.addEventListener("load", init);

function init() {
  const ARTICLE = document.querySelector("article");
  kepek_hozzaadas(ARTICLE);
}

function kepek_hozzaadas(article) {
  const KEP_LISTA = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg"];
  const KEP_ALT_LISTA = ["Manó a pitypangok között a játékával", "Manóval a Művészetek Völgyében", "Manó az ágy tetejéről figyel", "Manó a hátsó ülésen", "Vezet a Manó :)"]
  const KEP_TAROLO = elem_letrehozo(article, "div", "kep-tarolo");

  for (let i = 0; i < KEP_LISTA.length; i++) {
    let kep_cella = elem_letrehozo(KEP_TAROLO, "div", "kep-cella");
    let img = elem_letrehozo(kep_cella, "img", "kep");
    let kep_szoveg = elem_letrehozo(kep_cella, "span", "kep-szoveg");
    kep_szoveg.innerText = KEP_ALT_LISTA[i]
    img.src = `${KEP_LISTA[i]}`
    img.alt = KEP_ALT_LISTA[i];
    img.addEventListener("mouseover", eger_esemeny);
    img.addEventListener("mouseout", eger_esemeny);    
  }
}

function eger_esemeny(event) {
  console.log(event.target);
  event.target.classList.toggle("szegely");
}

function elem_letrehozo(szuloelem, elem, osztaly = "") {
  const GYEREK = document.createElement(elem);
  szuloelem.appendChild(GYEREK);
  if (osztaly) GYEREK.classList.add(osztaly);
  return GYEREK;
}


