import { get } from "vanilla";
import { markdownToHTML } from "./src/markedShim";

const elToRender = get(".markdown")!;
elToRender.innerHTML = markdownToHTML(elToRender.textContent!);
elToRender.classList.remove("markdown");

