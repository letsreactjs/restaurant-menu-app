const sidebar = document.getElementById("sidebar");
const sidebarNav = document.getElementById("sidebar-nav");
const main = document.getElementById("main-content");
let currentMenu;
let currentMenuTitle;
let drinksMenuLinks;
let currentDrinksMenu;
generateSidebarLinks();

function generateSidebarLinks(){
  Object.keys(menu).forEach(function(itemKey){
    const item = menu[itemKey];
    sidebarNav.innerHTML += `<a href="#" onclick="menuItemOnClick('${itemKey}')">${itemKey}</a>`;
  });
}

function menuItemOnClick(item){
  currentMenu = menu[item];
  currentMenuTitle = item;
  generateMenu();
}

function generateMenu(){
  let itemsDisplay = "";
  if(currentMenuTitle !== "drinks"){
    currentMenu.forEach(function(item){
      itemsDisplay += `
        <article class="menu-item">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><b>R${item.price}</b></p>
        </article>
      `;
    });
  }else{
    itemsDisplay = generateDrinksMenuLinks();
  }
  main.innerHTML = `
    <section id="menu-display">
      <h1>${currentMenuTitle}</h1>
      <div class="menu-items">
        ${itemsDisplay}
      </div>
    </section>
  `;
}

function generateDrinksMenuLinks(){
  let itemsDisplay = "<nav id='drinks-menu'>";
   Object.keys(currentMenu).forEach(function(item){
     itemsDisplay += `<a href="#" onclick="drinksMenuItemOnClick('${item}')"><span>${item}</span></a>`;
    });
  itemsDisplay += "</nav>"
  return itemsDisplay;
}

function drinksMenuItemOnClick(item){
  let itemsDisplay = "";
  currentMenu = currentMenu[item];
  currentMenu.forEach(function(item){
    itemsDisplay += `
      <article class="menu-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><b>R${item.price}</b></p>
      </article>
    `;
  });
  main.innerHTML = `
    <section id="menu-display">
      <h1>${currentMenuTitle}</h1>
      <div class="menu-items">
        ${itemsDisplay}
      </div>
    </section>
  `;
}
