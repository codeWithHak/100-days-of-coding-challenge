/*

Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

*/

let programmer = {

 languages:["JavaScript","TypeScript","Python"],
 tools:["VS Code","Slime","Vim"],
 frameworks:{
    frontend:["REACT","Angular","Vue"],
    backend:["Laravel","Express","Django"]
 }

}

let {languages,tools,frameworks:{frontend,backend}} = programmer;

console.log(`Languages: ${languages[0]}\nTools: ${tools[0]}\nFrontend:${frontend[0]}\nBackend: ${backend[0]}`);
