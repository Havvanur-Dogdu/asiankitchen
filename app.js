const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let buttonContainerDOM = document.querySelector("#btn-container")
let itemDOM = document.getElementsByClassName("menu-items")
let sectionDOM = document.querySelector("#section-center")
let itemBtnDOM = document.querySelectorAll(".menu-items")

function buttonMaker(categoryName) {
    let buttonDOM = document.createElement("button")
    buttonDOM.innerHTML = categoryName
    buttonDOM.className = "menu-items"
    buttonDOM.setAttribute('id','btn-item');
    buttonContainerDOM.append(buttonDOM);
}

menu.map(item => {
  for(i=0; i < itemDOM.length; i++){
    if(item.category == itemDOM[i].innerHTML){
      break
    } else if(i == itemDOM.length - 1){
      buttonMaker(item.category)
    }
  }
})

menu.map(item => {
  let cardDOM = document.createElement("div")
  cardDOM.className = "card"
  cardDOM.style.width = "18rem"
  cardDOM.style.margin = "10px"
  cardDOM.style.paddingTop = "10px"

  let imgDOM = document.createElement("img")
  imgDOM.className = "card-img-top"
  imgDOM.src = item.img
  imgDOM.setAttribute('id','photo');

  cardDOM.appendChild(imgDOM)

  let cardBodyDOM = document.createElement("div")
  let h5DOM = document.createElement("h5")
  let pDOM = document.createElement("p")
  let aDOM = document.createElement("a")

  cardBodyDOM.className = "card-body"
  h5DOM.className = "card-title"
  pDOM.className = "card-text"
  aDOM.className = "btn btn-primary"

  h5DOM.innerHTML = item.title
  pDOM.innerHTML = item.desc
  aDOM.innerHTML = item.price

  cardBodyDOM.appendChild(h5DOM)
  cardBodyDOM.appendChild(pDOM)
  cardBodyDOM.appendChild(aDOM)
  cardDOM.appendChild(cardBodyDOM)

  sectionDOM.appendChild(cardDOM)
})

function cardMaker(menu) {
  menu.map(item => {
    let cardDOM = document.createElement("div")
    cardDOM.className = "card"
    cardDOM.style.width = "18rem"
    cardDOM.style.margin = "10px"
    cardDOM.style.paddingTop = "10px"
  
    let imgDOM = document.createElement("img")
    imgDOM.className = "card-img-top"
    imgDOM.src = item.img
    imgDOM.setAttribute('id','photo');
  
    cardDOM.appendChild(imgDOM)
  
    let cardBodyDOM = document.createElement("div")
    let h5DOM = document.createElement("h5")
    let pDOM = document.createElement("p")
    let aDOM = document.createElement("a")
  
    cardBodyDOM.className = "card-body"
    h5DOM.className = "card-title"
    pDOM.className = "card-text"
    aDOM.className = "btn btn-primary"
  
    h5DOM.innerHTML = item.title
    pDOM.innerHTML = item.desc
    aDOM.innerHTML = item.price
  
    cardBodyDOM.appendChild(h5DOM)
    cardBodyDOM.appendChild(pDOM)
    cardBodyDOM.appendChild(aDOM)
    cardDOM.appendChild(cardBodyDOM)
  
    sectionDOM.appendChild(cardDOM)
  })
}


[...document.querySelectorAll('.menu-items')].forEach(function(item) {
  item.addEventListener('click', function() {
    console.log(item.innerHTML);
    if(item.innerHTML === 'All' ){
      sectionDOM.innerHTML = ""
      cardMaker(menu)
    } else {
      sectionDOM.innerHTML = ""
      let newMenu = menu.filter(i => i.category === item.innerHTML)
      cardMaker(newMenu)
      console.log(newMenu)
    }
  });
   });


