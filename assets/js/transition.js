const swup = new Swup({
  containers: ["#swup", "#controls"],
  plugins: [new SwupSlideTheme({ reversed: true })],
});

let path,
  currentPath,
  currentPathValue,
  lastSlide,
  navlist,
  listLength,
  nextPath,
  prevPath,
  start,
  previous,
  next,
  end;

function init() {
  currentPath = window.location.pathname.split("/")[2];
  currentPathValue = parseInt(currentPath);
  navList = document.querySelectorAll(".nav-list");
  first = navList.length - 1;
  lastSlide = navList.length - 1;
  start = document.getElementById("start");
  previous = document.getElementById("previous");
  next = document.getElementById("next");
  end = document.getElementById("end");
  if (typeof currentPath != "undefined" && currentPathValue != lastSlide) {
    next.href = `/slides/${currentPathValue + 1}/html`;
  } else if (currentPathValue == lastSlide) {
    next.href = `/`;
  } else {
    next.href = "/slides/1/html";
  }

  if (currentPathValue == 1 || typeof currentPath == "undefined") {
    previous.href = `/`;
  } else {
    previous.href = `/slides/${currentPath - 1}/html`;
  }

  end.href = `/slides/${lastSlide}/html`;

  navList.forEach((listItem, index) => {
    let dataPath = listItem.dataset.path.split("/")[2];
    if (currentPath == dataPath) {
      listItem.classList.add("glow");
    } else {
      listItem.classList.remove("glow");
    }
  });

  document.addEventListener("keyup", checkKeyPressed, false);

  function checkKeyPressed(evt) {
    if (evt.keyCode == 37) {
      previous.click();
    } else if (evt.keyCode == 39) {
      next.click();
    } else {
    }
  }
}

init();

// this event runs for every page view after initial load
swup.on("contentReplaced", init);
