let Customer = function () {
    this.setNameCustomer = function (name) {
        this.name = name;
    };
    this.getNameCustomer = function () {
        return this.name;
    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthday = function () {
        return this.birthday;
    };
    this.setEmailCustomer = function (email) {
        this.email = email;
    };
    this.getEmailCustomer = function () {
        return this.email;
    };
    this.setAddressCustomer = function (address) {
        this.address = address;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setNumberOfAccompanying = function (numberOfAccompanying) {
        this.numberOfAccompanying = numberOfAccompanying;
    };
    this.getNumberOfAccompanying = function () {
        return this.numberOfAccompanying;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDay = function (rentDay) {
        this.rentDay = rentDay;
    };
    this.getRentDay = function () {
        return this.rentDay;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.getTotalPay = 500 * Number.parseInt(this.rentDay) * (1 - Number.parseFloat(this.discount) / 100);
};
let arrayListCustomer = [];
function addNewCustomer() {
    let customer = new Customer();
    customer.setNameCustomer(checkName(prompt("Enter Name Customer: ")));
    customer.setIdCard(checkIdCard(prompt("Enter Idcard Customer:")));
    customer.setBirthday(checkBirthday(prompt("Enter Birthday Customer: ")));
    customer.setEmailCustomer(checkEmail(prompt("Enter Email Customer: ")));
    customer.setAddressCustomer(prompt("Enter Address Customer: "));
    customer.setTypeCustomer(prompt("Enter Type Customer: "));
    customer.setDiscount(prompt("Enter Discount: "));
    customer.setNumberOfAccompanying(checkNumberOfAccompanying(prompt("Enter Number Of Accompanying: ")));
    customer.setTypeRoom(prompt("Enter Type Room: "));
    customer.setRentDay(checkRentday(prompt("Enter Rentday: ")));
    customer.setTypeService(prompt("Enter Type Service: "));
    arrayListCustomer.push(customer);
    displayMainMenu();
}
function checkIdCard(idCard) {
    let regex = /^[0-9]{8}$/;
    if (regex.test(idCard)) {
        return idCard;
    } else {
        alert("Invalid Idcard!!");
        checkIdCard(prompt("Enter Idcard: "));
    }
}
function checkName(name) {
    let regex = /^[A-Z][a-z]{1,6}(\s[A-Z][a-z]{1,6})*$/;
    if (regex.test(name)) {
        return name;
    } else {
        alert("Invalid Name Customer!!!");
        checkName(prompt("Enter Name Customer: "));
    }
}
function checkBirthday(birthday) {
    let regex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9][0-9]|200[0-9])$/;
    if (regex.test(birthday)) {
        return birthday;
    } else {
        alert("Invalid Birthday!!!");
        checkBirthday(prompt("Enter Birthday Customer: "));
    }
}
function checkEmail(email) {
    let regex = /^[a-z]+@[a-z]+(\.[a-z]+){1,3}$/;
    if (regex.test(email)) {
        return email;
    } else {
        alert("Invalid Email!!!");
        checkEmail(prompt("Enter Email: "));
    }
}

function checkNumberOfAccompanying(number) {
    let regex = /^[0-9]{1,2}$/;
    if (regex.test(number)) {
        return number;
    } else {
        alert("Invalid Number Of Accompanying!!!");
        checkNumberOfAccompanying(prompt("Enter Number Of Accompanying"));
    }
}

function checkRentday(day) {
    let regex = /^[0-9]{1,2}$/;
    if (regex.test(day)) {
        return day;
    } else {
        alert("Invalid Rentday!!!");
        checkRentday(prompt("Enter Rent Day: "));
    }

}