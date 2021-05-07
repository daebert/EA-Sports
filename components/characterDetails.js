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
      createElement("h2", { innertext: lastName }),
      createElement("p", { innertext: position }),
      createElement("p", { innertext: height }),
      createElement("p", { innertext: weight }),
      createElement("p", { innertext: age }),
    ],
  });
}
