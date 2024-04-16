
let newMap = new Map()
newMap.set("Pakistan","Islamabad");
newMap.set("Japan","Tokyo");
newMap.set("Germany","Berlin");

function checkKey (newMap: Map<string, string>):void {
    if (newMap.has("Canada")) {
        console.log(newMap.get("Canada"))
    }
    else{
        console.log("Canada is not included in the map");
    }
}
checkKey(newMap)

export{}