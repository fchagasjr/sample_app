// Menu manipulation

// Add toggle listeners to listen for clicks.
let turboEvents = ["turbo:load", "turbo:render"]

turboEvents.forEach((turbo) => {
  document.addEventListener(turbo, function() {
    toggleListener("hamburger", "navbar-menu", "collapse");
    toggleListener("account", "dropdown-menu", "active");
  });
})

function toggleListener(selectedId, menuId, toggleClass) {
  let selectedElement = document.querySelector(`#${selectedId}`);
  selectedElement.addEventListener("click", function(event) {
      event.preventDefault();
      menuToggler(menuId, toggleClass);
  });
}

function menuToggler(menuId, toggleClass) {
  let menu = document.querySelector(`#${menuId}`);
  menu.classList.toggle(toggleClass);
}
