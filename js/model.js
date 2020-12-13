class Visitor
{
    constructor(id, firstName, lastName, address, city, state, zip, phone, email, internet, friends, newsPaper, comment) {
        this.id = id, 
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.internet = internet;
        this.friends = friends;
        this.newsPaper = newsPaper;
        this.comment = comment;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get fullAddress() {
        return `${this.address}, ${this.city}, ${this.state}, ${this.zip}`
    }
}

var visitors = [
    new Visitor("0", "Elliott", "Rich", "1111 Street Drive", "Home Town", "UT", "84848", "775-775-7755", "elliottt@gmail.com"),
    new Visitor("1", "Remi", "Rich", "5544 Dog Road", "Dog Town", "UT", "01234", "123-123-1234", "remi@gmail.com"),
];

// adds new visitor object to your array}
function modelAddVisitor(visitor) {
    visitor.id = visitors.length;
    visitors.push(visitor);
}

// removes visitor object with given 'id' from array
function modelDeleteVisitor(id) {
    idx = findVisitorIndex(id);
    visitors.splice(idx, 1);
    for (i = 0; i < visitors.length; i++) {
        visitors[i].id = i;
    }
}

// returns visitor object with given 'id' from array
function findVisitor(id) {
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return visitors[i];
        }
    }
}

// returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object}
function findVisitorIndex(id) {
    for (i = 0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            return i;
        }
    }
    return(-1);
}

//returns vistors array
function getVisitors() {
    return visitors;
}