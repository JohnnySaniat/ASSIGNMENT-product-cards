const items = [
  {
    id: 1,
    name: "AMETHYST Base 65 Keyboard",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with ABS keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam. ",
    size: "65% COMPACT FORM FACTOR (includes arrow keys",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HiGround_Crystal_redone_019-min.jpg?v=1679955627",
  },
  {
    id: 2,
    name: "OPAL Base 65 Keyboard",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HiGround_Crystal_redone_037-min.jpg?v=1679957856",
  },
  {
    id: 3,
    name: "Gundam Base 65 Keyboard - Admiral (White)",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HiGROUND_GUNDAM_batch1_048.jpg?v=1670530360"
  },
  {
    id: 4,
    name: "SF x HG Base 65 - Akuma (Monochrome)",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HiGROUND_STREETFIGHTER_RESHOT_001.jpg?v=1681507381"
  },
  {
    id: 5,
    name: "100T x HG Base 65 Keyboard - Onyx",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HIGROUNDx100THEIVES_028_57d71d8c-fd7d-4299-9bb0-ff944fcc63c2.jpg?v=1668731923"
  },
  {
    id: 6,
    name: "100T x HG Base 65 Keyboard - Cartograph",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
    weight: "1000g",
    whiteFlame: "White Flame Switches: $120.00",
    titanHeart: "Titan Heart Switches: $135.00",
    geoLinear: "Geo Linear Switches: $150.00",
    imageUrl: "https://higround.co/cdn/shop/products/HIGROUNDx100THEIVES_044_f4ebf1cd-f51d-482c-b203-5ba25b086169.jpg?v=1668731740"
  }
];

const targetingApp = document.querySelector("#app");

const renderToDom = (divId, html) => {
  const targetedDiv = document.querySelector(divId)
  targetedDiv.innerHTML = html 
}

const cardsOnDom = (array) => {
  let domString = "";

  for (const item of array ) {
    domString += `
    <div class="container">
    <div class="card" style="width: 18rem;">
    <header id ="title">
    <h2>${item.name}</h2>
    </header>

    <section class="sections">
      <div class="card-body">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}>"
        <p class="description"> ${item.description}</p>
        <br>
        <p class="available"> ${item.availability}</p>
      </div>
    </section>

    <section class="sections">
      <header>
      <h5>Specifications</h5>
      </header>
      <p class ="specifications">  ${item.size} </p>
      <p class ="specifications"> Weight: ${item.weight} </p>
      <footer>
        <p class="valid"> Specifications are valid until until 7/30/2023</p>
      </footer>
      </section>

      <section class="sections">
      <header>
      <h5>Pricing</h5>
      </header>
      <p class="price">${item.whiteFlame}</p>
      <p class="price">${item.titanHeart}</p>
      <p class="price">${item.geoLinear}</p>
      </section>
   </div>
   </div>`
  }

  renderToDom("#app", domString);

};

cardsOnDom(items);
