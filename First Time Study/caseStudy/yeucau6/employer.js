let employer = function () {
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setIdcard = function (idCard) {
        this.idCard = idCard;
    };
    this.getName = function () {
        return this.idCard
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    this.getbirthday = function () {
        return this.birthday;
    };
    this.setNumberPhone = function (numberPhone) {
        this.numberPhone = numberPhone;
    };
    this.getNumberPhone = function () {
        return this.numberPhone;
    };
    this.setEducation = function (education) {
        this.education = education
    };
    this.getEducation = function () {
        return this.education;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.getPosition = function () {
        return this.position;
    };
    this.setSalary = function (salary) {
        this.salary = salary;
    };
    this.getSalary = function () {
        if (this.position === "Manager") {
            return parseInt(this.salary) + 500;
        }
           else if (this.position === "sale") {
                return parseInt(this.salary) + 300;
            }
        else if (this.position === "Maketing") {
            return parseInt(this.salary) + 200;
        }
        else {
            return this.salary;
        }
        return this.salary;
    }
}