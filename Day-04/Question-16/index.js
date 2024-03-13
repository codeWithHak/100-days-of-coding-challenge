"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Babar Azam", "Shadab Khan", "Saim Ayub"];
guestList.pop();
guestList.push("Naseem Shah");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", I would love to have you for dinner tonight."));
}
