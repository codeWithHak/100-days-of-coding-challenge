function ageGroup(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age >= 13 && age < 20) {
        return "Teenager";
    }
    else if (age >= 20) {
        return "Adult";
    }
}
console.log(ageGroup(51));
