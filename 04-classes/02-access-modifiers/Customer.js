var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Adam", "Mus");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
