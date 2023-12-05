class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

function confronto (user1, user2) {
    if (user1.age < user2.age) {
        console.log(user1.firstName + " è piu piccolo di " + user2.firstName)
    } else if (user1.age > user2.age) {
        console.log(user1.firstName + " è piu grande di " + user2.firstName)
    } else {
        console.log(user1.firstName + " ha la stessa età di " + user2.firstName)
}};

const user1 = new User("Mario", "Rossi", 18, "Roma");

const user2 = new User("Anna", "Versi", 30, "Roma");

confronto(user1, user2)