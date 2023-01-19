const catalog = document.getElementsByClassName("menu")[0];
catalog.style.display = "inline-block";

const laptopCatalog = [
  {
    id: 1,
    name: "Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black",
    information:
      'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черный',
  },
  {
    id: 2,
    name: "Ноутбук ASUS TUF Gaming F15 FX506LHB-HN324 (90NR03U2-M008H0)",
    information:
      'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i5-10300H (2.5 - 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / черный',
  },
  {
    id: 3,
    name: 'Ноутбук Apple MacBook Air 13" M1 256GB 2020 (MGND3) Gold',
    information:
      'Экран 13.3" Retina (2560x1600) WQXGA, глянцевый / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / золотой',
  },
];

const smartphoneCatalog = [
  {
    id: 1,
    name: "Мобильный телефон Samsung Galaxy S21 FE 6/128GB Lavender (SM-G990BLVDSEK/SM-G990BLVFSEK)",
    information:
      'Экран (6.4", Dynamic AMOLED 2X, 2340x1080) / Qualcomm Snapdragon 888 (2.84 ГГц) / тройная основная камера: 12 Мп + 12 Мп + 8 Мп, фронтальная 32 Мп / RAM 6 ГБ / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / поддержка 2х SIM-карт (Nano-SIM) / Android 11 / 4500 мА*ч',
  },
  {
    id: 2,
    name: "Мобильный телефон Apple iPhone 13 128GB Pink (MLPH3HU/A)",
    information:
      'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15',
  },
  {
    id: 3,
    name: "Мобильный телефон Motorola G32 6/128GB Grey (PAUU0027RS) (без зарядного устройства)",
    information:
      'Экран (6.5", LCD, 2400x1080) / Qualcomm Snapdragon 680 (2.4 ГГц) / основная тройная камера: 50 Мп + 8 Мп + 2 Мп, фронтальная камера: 16 Мп / RAM 6 ГБ / 128 ГБ встроенной памяти + microSD (до 1 ТБ) / 3G / LTE / GPS / поддержка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*ч',
  },
];

const tvCatalog = [
  {
    id: 1,
    name: "Телевизор Samsung UE50AU7100UXUA",
    information:
      "Диагональ экрана: 50 / Разрешение: 3840x2160 / Операционная система: Tizen / Диапазоны цифрового тюнера: DVB-C, DVB-S2, DVB-T2",
  },
  {
    id: 2,
    name: "Телевизор Hisense 43E7HQ",
    information:
      "Диагональ экрана: 43 / Разрешение: 3840x2160 / Операционная система: VIDAA U5.0 / Диапазоны цифрового тюнера: DVB-C, DVB-S, DVB-S2,DVB-T, DVB-T2",
  },
  {
    id: 3,
    name: "Телевизор Xiaomi Mi TV P1 55 Black",
    information:
      "Диагональ экрана: 55 / Разрешение: 3840x2160 / Операционная система: Android 10.0 / Диапазоны цифрового тюнера: DVB-T, DVB-T2, DVB-T2",
  },
];

const arr = "";
function addProducts(arr) {
  const submenu = document.getElementsByClassName("submenu")[0];
  const submenuList = document.createElement("ul");
  submenuList.classList.add("catalog");

  for (let key of arr) {
    let submenuItem = document.createElement("li");
    submenuItem.classList.add("catalog-item");
    submenuItem.innerHTML = `<a href='#' class='catalog-link'>${key.name}</a>`;
    submenuList.append(submenuItem);
  }
  submenu.append(submenuList);
}
addProducts(arr);

catalog.addEventListener("click", showLaptop);
function showLaptop(event) {
  const submenu = document.getElementsByClassName("submenu")[0];
  const link = document.getElementsByClassName("menu-categories_link")[0];

  let target = event.target;
  if (target == link) {
    addProducts(laptopCatalog);
    submenu.style.display = "inline-block";
  }
}

catalog.addEventListener("click", showSmartphone);
function showSmartphone(event) {
  const submenu = document.getElementsByClassName("submenu")[0];
  const link = document.getElementsByClassName("menu-categories_link")[1];
  let target = event.target;
  if (target == link) {
    addProducts(smartphoneCatalog);
    submenu.style.display = "inline-block";
  }
}

catalog.addEventListener("click", showTV);
function showTV(event) {
  const submenu = document.getElementsByClassName("submenu")[0];
  const link = document.getElementsByClassName("menu-categories_link")[2];
  let target = event.target;
  if (target == link) {
    addProducts(tvCatalog);
    submenu.style.display = "inline-block";
  }
}
//Информация для ноутбуков
function addInfo1(arr) {
  const info = document.getElementsByClassName("information")[0];

  let infoText = document.createElement("p");
  infoText.innerHTML = `${laptopCatalog[0].information}`;
  infoText.style.width = "1000px";
  info.style.display = "inline-block";
  info.append(infoText);
}
addProducts(arr);

function addInfo2(arr) {
  const info = document.getElementsByClassName("information")[0];

  let infoText = document.createElement("p");
  infoText.innerHTML = `${laptopCatalog[1].information}`;
  infoText.style.width = "1000px";
  info.style.display = "inline-block";
  info.append(infoText);
}
addProducts(arr);

function addInfo3(arr) {
  const info = document.getElementsByClassName("information")[0];

  let infoText = document.createElement("p");
  infoText.innerHTML = `${laptopCatalog[2].information}`;
  infoText.style.width = "1000px";
  info.style.display = "inline-block";
  info.append(infoText);
}
addProducts(arr);

const submenu = document.getElementsByClassName("submenu")[0];

submenu.addEventListener("click", showInfoLaptop1);
function showInfoLaptop1(event) {
  const info = document.getElementsByClassName("information")[0];
  const catalogLink = document.getElementsByClassName("catalog-link")[0];

  let target = event.target;
  if (target == catalogLink) {
    addInfo1(laptopCatalog);
    info.style.display = "inline-block";
  } else {
    laptopCatalog.remove(catalogLink);
  }
  // let infoBtn = document.createElement("button");
  // infoBtn.innerHTML = `Купить`;
  // info.append(infoBtn);
}

submenu.addEventListener("click", showInfoLaptop2);
function showInfoLaptop2(event) {
  const info = document.getElementsByClassName("information")[0];
  const catalogLink = document.getElementsByClassName("catalog-link")[1];

  let target = event.target;
  if (target == catalogLink) {
    addInfo2(laptopCatalog);
    info.style.display = "inline-block";
  }
  // let infoBtn = document.createElement("button");
  // infoBtn.innerHTML = `Купить`;
  // info.append(infoBtn);
}

submenu.addEventListener("click", showInfoLaptop3);
function showInfoLaptop3(event) {
  const info = document.getElementsByClassName("information")[0];
  const catalogLink = document.getElementsByClassName("catalog-link")[2];

  let target = event.target;
  if (target == catalogLink) {
    addInfo3(laptopCatalog);
    info.style.display = "inline-block";
  }
  // let infoBtn = document.createElement("button");
  // infoBtn.innerHTML = `Купить`;
  // info.append(infoBtn);
}

// const info = document.getElementsByClassName("information")[0];
// info.addEventListener("click", buyButton);
// function buyButton() {
//   let infoBtn = document.createElement("button");
//   infoBtn.innerHTML = `Купить`;
//   info.append(infoBtn);
// }
