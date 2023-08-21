// Menu manipulation

// Add toggle listeners to listen for clicks.

document.addEventListener("turbo:load", function() {
  toggleListener("hamburger", "navbar-menu", "collapse");
  toggleListener("account", "dropdown-menu", "active");
});

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
