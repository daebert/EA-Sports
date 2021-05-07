import "./style.css";
import { createElement } from "./utils/elements";

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h1", {
      className: "headline",
      innerText: "Player overview!",
    }),
    createElement("section", {
      className: "searchbar",
      innerText: "Search Bar",
    }),
    createElement("section", {
      innerText: "Here are the players!",
      className: "char-section",
      children: [
        createElement("section", {
          innerText: "Character Section, character level",
          className: "char-card",
        }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
