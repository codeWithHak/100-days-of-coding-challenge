"use strict";
// Syncronhus operation
Object.defineProperty(exports, "__esModule", { value: true });
var one = function () {
    console.log("I am one");
};
var two = function () {
    console.log("I am two");
};
var three = function () {
    console.log("I am three");
};
one();
two();
three();
// Asynchronus operation
var four = function () {
    setTimeout(function () {
        console.log("I am four");
    }, 0);
};
var five = function () {
    console.log("I am five");
};
var six = function () {
    console.log("I am six");
};
four();
five();
six();
