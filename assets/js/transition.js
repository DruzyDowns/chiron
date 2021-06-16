const swup = new Swup();

function init() {
  let path = window.location.pathname.split("/")[2];
  let navList = document.querySelectorAll(".nav-list");

  navList.forEach((listItem, index) => {
    let dataPath = listItem.dataset.path.split("/")[2];
    if (path == dataPath) {
      listItem.classList.add("glow");
    } else {
      listItem.classList.remove("glow");
    }
  });
}
init();

// this event runs for every page view after initial load
swup.on("contentReplaced", init);
