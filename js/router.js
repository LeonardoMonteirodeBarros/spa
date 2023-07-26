export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
   
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });

    const background = document.querySelector("#background");
    if (pathname === "/universe") {
      background.classList.remove("background");
      background.classList.remove("background2");
      background.classList.add("background1");
    }

    if (pathname === "/exploration") {
      background.classList.remove("background1");
      background.classList.remove("background");
      background.classList.add("background2");
    }

    if (pathname === "/") {
      background.classList.remove("background1");
      background.classList.remove("background2");
      background.classList.add("background");
    }
  }
}
