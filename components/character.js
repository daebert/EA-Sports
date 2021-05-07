import "./character.css";
import { createElement } from "../utils/elements.js";

export function createCharacterElement({
  lastName,
  position,
  height,
  weight,
  age,
}) {
  return createElement("div", {
    className: "character-card",
    children: [
      createElement("h2", { innerText: lastName }),
      createElement("p", { innerText: position }),
      createElement("p", { innerText: height }),
      createElement("p", { innerText: weight }),
      createElement("p", { innerText: age }),
    ],
  });
}
