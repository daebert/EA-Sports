// import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createCharacterDetails({
  lastName,
  position,
  height,
  weight,
  age,
}) {
  return createElement("article", {
    className: "character-details",
    children: [
      createElement("h2", { innerText: lastName }),
      createElement("p", { innerText: position }),
      createElement("p", { innerText: height }),
      createElement("p", { innerText: weight }),
      createElement("p", { innerText: age }),
    ],
  });
}
