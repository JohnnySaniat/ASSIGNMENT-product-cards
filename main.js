const items = [
  {
    id: 1,
    name: "AMETHYST Base 65 Keyboard",
    availability: "Available",
    description: "Our signature 65% keyboard (dedicated arrow keys) with ABS keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam. ",
    size: "65% COMPACT FORM FACTOR (includes arrow keys)",
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
    <h2 class="border" id="cardName">${item.name}</h2>
    </header>

    <section class="sections">
      <div class="card-body">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}>"
        <p class="description"> ${item.description}</p>
        <br>
        <p class="available"> ${item.availability}</p>
      </div>
    </section>

  <section class="card-body">
    <section class="sections">
      <header>
      <h5>Specifications</h5>
      </header>
      <p class ="size"> Size: ${item.size} </p>
      <p class ="weight"> Weight: ${item.weight} </p>
      <footer>
        <p class="valid"> Specifications are valid until until 7/30/2023</p>
      </footer>
      </section>

      <section class="sections">
      <header>
      <h5>Pricing</h5>
      </header>
      <p class="whiteFlame">${item.whiteFlame}</p>
      <p class="titanHeart">${item.titanHeart}</p>
      <p class="geoLinear">${item.geoLinear}</p>
      </section>
    </section>
    <button type="button" id="delete-btn-card--${item.id}">Delete</button>
   </div>
   </div>`
  }

  renderToDom("#app", domString);

};

cardsOnDom(items);

const keyboardForm = () => {
  let domString = "";

  domString +=`
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="id">ID</label>
      <input type="text" class="form-control mb-2" id="id" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="name">Name</label>
      <input type="text" class="form-control mb-2" id="name" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="availability">Availability</label>
      <input type="text" class="form-control mb-2" id="availability" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="description">Description</label>
      <input type="text" class="form-control mb-2" id="description" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="weight">Weight</label>
      <input type="text" class="form-control mb-2" id="weight" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="size">Size</label>
      <input type="text" class="form-control mb-2" id="size" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="whiteFlame">Price with White Flame Switches</label>
      <input type="text" class="form-control mb-2" id="whiteFlame" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="titanHeart">Price with Titan Heart Flame Switches</label>
      <input type="text" class="form-control mb-2" id="titanHeart" placeholder="Jane Doe">
    <div class="col-auto">
      <label class="sr-only" for="geoLinear">Price with Geo Linear Switches</label>
      <input type="text" class="form-control mb-2" id="geoLinear" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="imageUrl">Image Url</label>
      <input type="text" class="form-control mb-2" id="imageUrl" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>`

renderToDom("#card-container", domString)
};

const formButton = document.querySelector("#show-form-button");

formButton.addEventListener("click", (e) => {
  keyboardForm();
})

const form = document.querySelector("form");

const createItem = (e) => {
  e.preventDefault();

  const itemObj = {
    id: items.length + 1,
    name: document.querySelector("#name").value, 
    availability: document.querySelector("#availability").value, 
    description: document.querySelector("#description").value, 
    size: document.querySelector("#size").value, 
    weight: document.querySelector("#weight").value, 
    whiteFlame: document.querySelector("#whiteFlame").value,
    titanHeart: document.querySelector("#titanHeart").value,
    geoLinear: document.querySelector("#geoLinear").value,
    imageUrl: document.querySelector("#imageUrl").value,
}

console.log(itemObj);
items.push(itemObj);
cardsOnDom(items);
form.reset();
};

form.addEventListener("submit", createItem);

const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
 if (e.target.id.includes("delete-btn-pet")) {
   const [, id] = e.target.id.split("--");
   const index = items.findIndex((item) => pet.id === Number (id));
   items.splice(index, 1);
   cardsOnDom(items);
 }

 cardsOnDom(items);
});

const eventListeners = () => {

  formButton.addEventListener("click", (e) => {
    keyboardForm();
  })

  form.addEventListener("submit", createItem);

  app.addEventListener("click", (e) => {
    if (e.target.id.includes("delete-btn-card")) {
      const [, id] = e.target.id.split("--");
      const index = items.findIndex((item) => item.id === Number (id));
      items.splice(index, 1);
      cardsOnDom(items);
    }
   
    cardsOnDom(items);
   });
}

  const startApp = () => {
    cardsOnDom(items);
    eventListeners();
  }

  startApp();
