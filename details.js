import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements";
import { getCharacters } from "./utils/api";
import { createCharacterDetails } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

getCharacters(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
});

document.querySelector("#app").append(mainElement);
