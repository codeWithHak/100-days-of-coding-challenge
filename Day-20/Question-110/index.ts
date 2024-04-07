function gradeAssigner (marks:number) {
    return marks
}

let showMarks = gradeAssigner(90)

if (showMarks >= 90) {
    console.log("A1 Grade");
    
}

else if (showMarks >= 80) {
    console.log("A Grade");
    
}

else if (showMarks >= 70) {
    console.log("B Grade");
    
}

else if (showMarks >= 60) {
    console.log("C Grade");
    
}

else if (showMarks >= 50) {
    console.log("D Grade");
    
}

else if (showMarks >= 33) {
    console.log("E Grade");
    
}

else if (showMarks > 100) {
    console.log("Incorrect Marks! Check Result Again.");
    
}

else {
    console.log("Failed");
    
}


