const items = [
  {
    id: 1,
    name: AMETHYST Base 65 Keyboard,
    availability: "Available",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "https://higround.co/cdn/shop/products/HiGround_Crystal_redone_019-min.jpg?v=1679955627",
  },
  {
      id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://higround.co/cdn/shop/products/HiGround_Crystal_redone_037-min.jpg?v=1679957856",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://higround.co/cdn/shop/products/HiGROUND_GUNDAM_batch1_048.jpg?v=1670530360"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "https://higround.co/cdn/shop/products/HiGROUND_STREETFIGHTER_RESHOT_001.jpg?v=1681507381"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "https://higround.co/cdn/shop/products/HIGROUNDx100THEIVES_028_57d71d8c-fd7d-4299-9bb0-ff944fcc63c2.jpg?v=1668731923"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
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
    <div class="card" style="width: 18rem;">
    <header id ="title">
    <h2>${item.name}</h2>
    </header>
    <div class="card-body">
    <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}>"
    <p class="description"> ${product.availability}</p>
    
    
    </div>
    <p class ="specs"
    <img src="${item.imageUrl}" class="card-img-top" alt=${item.name}>
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.color}</p>
      <p class="card-text">${item.specialSkill}</p>
      <p class="card-text">${item.type}</p>
      <p class="card-text">${item.id} </p>
    </div>
  </div>`
  }

  renderToDom("#app", domString);

};

cardsOnDom(items);
