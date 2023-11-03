const title = document.querySelector("#title");

const superEventHandler = {
  handleMouseEnter: () => {
    title.innerText = "The mouse is here!";
    title.style.color = "powderblue";
  },
  handleMouseLeave: () => {
    title.innerText = "The mouse is gone!";
    title.style.color = "dodgerblue";
  },
  handleWindowResize: () => {
    title.innerText = "You just resized!";
    title.style.color = "orange";
  },
  handleContextMenu: () => {
    title.innerText = "That was a right click!";
    title.style.color = "tomato";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
