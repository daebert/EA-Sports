import "./character.css";
import { createElement } from "../utils/elements.js";

export function createCharacterElement({
  id,
  lastName,
  positionFull,
  height,
  weight,
  age,
}) {
  return createElement("a", {
    href: `/details.html?id=${id}`,
    children: [
      createElement("div", {
        className: "character-card",
        children: [
          createElement("h2", { innerText: lastName }),
          createElement("p", { innerText: positionFull }),
          createElement("p", { innerText: height }),
          createElement("p", { innerText: weight }),
          createElement("p", { innerText: age }),
        ],
      }),
    ],
  });
}
