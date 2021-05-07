import "./style.css";
import { createElement } from "./utils/elements";
import { createCharacterElement } from "./components/character";
import { getCharacters } from "./utils/api";
import { removeAllChildren } from "./utils/elements";

const characterSection = createElement("section", {
  className: "characters",
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h1", {
      className: "headline",
      innerText: "Player overview!",
    }),

    createElement("input", {
      placeholder: "Type in ID",
      className: "searchbar",
      oninput: (event) => {
        removeAllChildren(characterSection);
        const search = event.target.value;
        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSection.append(...characterElements);
        });
      },
    }),

    characterSection,
  ],
});

document.querySelector("#app").append(mainElement);

// createElement("section", {
//   innerText: "Here are the players!",
//   className: "char-section",
//   createCharacterElement() {},
// }),
