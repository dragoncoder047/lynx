const elToRender = document.querySelector(".markdown");


// preprocess to remove indentation
const unindented = elToRender.textContent;

const lines = unindented.split("\n");
const indentsByLine = lines.map(x => /^\s*$/.test(x) ? Infinity : (/^\s*/.exec(x))[0].length);
const minIndent = Math.min(...indentsByLine);
console.log(indentsByLine, minIndent);
const theMarkdown = lines.map(line => line.slice(minIndent)).join("\n");
console.log(theMarkdown);

// render it
elToRender.innerHTML = marked.parse(theMarkdown);
