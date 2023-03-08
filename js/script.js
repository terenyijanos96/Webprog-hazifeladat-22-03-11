window.addEventListener("load", init);

function init() {
  const ARTICLE = document.querySelector("article");
  lista_elkeszitese(ARTICLE);
  kepek_hozzaadas(ARTICLE);
}

function lista_elkeszitese(article) {
  const CIM = elem_letrehozo(article, "h2");
  const UL = elem_letrehozo(article, "ul");
  const LISTA = [
    "Decemberben lett 4 éves",
    "Lány kutya",
    "Féltékeny típus",
    "Nagyon szeret ugatni..",
    "A legtöbb játékát 1-2 nap alatt szétrágcsálja",
    "Nagyon ragaszkodó",
    "Szereti a finom falatokat.. csak azokat szereti...",
    "Van egy kényelmes fotelünk, amit kisajátított magának...",
    "Szereti, ha ölben dajkálják",
    "Szereti, ha ő a főnök (szomszéd kutyák csak akkor ugathatnak, ha ő megengedi)",
    "Szeret kocsikázni :)",
  ];

  CIM.innerText = "Pár infó as kutyusomról, Manóról :)";

  LISTA.forEach((l) => {
    let li = elem_letrehozo(UL, "li");
    li.innerText = l;
  });
}

function kepek_hozzaadas(article) {
  const KEP_LISTA = ["kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep5.jpg"];
  const KEP_ALT_LISTA = ["Manó a pitypangok között a játékával", "Manóval a Művészetek Völgyében", "Manó az ágy tetejéről figyel", "Manó a hátsó ülésen", "Vezet a Manó :)"]
  const KEP_TAROLO = elem_letrehozo(article, "div", "kep-tarolo");
  const KEPEK_JSON = [
    { src: "kepek/kep1.jpg", alt: "Manó a pitypangok között" },
    { src: "kepek/kep2.jpg", alt: "Manóval a Művészetek Völgyében" },
    { src: "kepek/kep3.jpg", alt: "Manó az ágy tetejéről figyel" },
    { src: "kepek/kep4.jpg", alt: "Manó a hátsó ülésen" },
    { src: "kepek/kep5.jpg", alt: "Manó a kormánynál :)" },
  ];


  KEPEK_JSON.forEach((kj) => {
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

    kep_cella.addEventListener("mouseenter", eger_esemeny);
    kep_cella.addEventListener("mouseleave", eger_esemeny);
    kep_cella.addEventListener("touchenter", eger_esemeny);
    kep_cella.addEventListener("touchleave", eger_esemeny);
    img.src = kj.src;
    kep_szoveg.innerText = img.alt = kj.alt;
  });
}

function elem_letrehozo(szuloelem, elem, osztaly = "") {
  const GYEREK = document.createElement(elem);
  szuloelem.appendChild(GYEREK);
  if (osztaly) GYEREK.classList.add(osztaly);
  return GYEREK;
}

function eger_esemeny(event) {
  event.target.classList.toggle("szegely");
}

