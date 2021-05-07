import "./character.css";
import { createElement } from "../utils/elements.js";

export function createCharacterElement() {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("h2", { innerText: "Christian" }),
      createElement("p", { innerText: "Tor" }),
      createElement("p", { innerText: "1,98" }),
      createElement("p", { innerText: "85" }),
      createElement("p", { innerText: "36" }),
    ],
  });
}
