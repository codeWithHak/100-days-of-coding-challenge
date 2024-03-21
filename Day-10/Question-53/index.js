/*

Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

*/
var programmer = {
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["VS Code", "Slime", "Vim"],
    frameworks: {
        frontend: ["REACT", "Angular", "Vue"],
        backend: ["Laravel", "Express", "Django"]
    }
};
var languages = programmer.languages, tools = programmer.tools, _a = programmer.frameworks, frontend = _a.frontend, backend = _a.backend;
console.log("Languages: ".concat(languages[0], "\nTools: ").concat(tools[0], "\nFrontend:").concat(frontend[0], "\nBackend: ").concat(backend[0]));
