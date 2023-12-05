// esercizio1
class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }


confronto (user1, user2) {
    if (user1.age < user2.age) {
        console.log(user1.firstName + " è piu giovane di " + user2.firstName)
    } else if (user1.age > user2.age) {
        console.log(user1.firstName + " è piu vecchio di " + user2.firstName)
    } else {
        console.log(user1.firstName + " ha la stessa età di " + user2.firstName)
}};

};

const user1 = new User("Mario", "Rossi", 18, "Roma");
const user2 = new User("Anna", "Versi", 30, "Roma");

user1.confronto(user1, user2)


// correzione

class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

confronto (user) {
    if (this.age < user.age) {
        console.log(this.firstName + " è piu giovane di " + user.firstName)
    } else if (this.age > user.age) {
        console.log(this.firstName + " è piu vecchio di " + user.firstName)
    } else {
        console.log(this.firstName + " ha la stessa età di " + user.firstName)
}};

};

const userX = new User("Mario", "Rossi", 18, "Roma");
const userY = new User("Anna", "Versi", 30, "Roma");

userX.confronto(userY)
// controlla il mio utente con l'utente da cui lo chiamo

// esercizio2