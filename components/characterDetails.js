// import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createCharacterDetails({
  id,
  lastName,
  position,
  height,
  weight,
  age,
}) {
  return createElement("article", {
    className: "character-details",
    children: [
      createElement("p", { innerText: id }),
      createElement("h2", { innerText: lastName }),
      createElement("p", { innerText: position }),
      createElement("p", { innerText: height }),
      createElement("p", { innerText: weight }),
      createElement("p", { innerText: age }),
    ],
  });
}
