let NhanVien = function () {
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.getDay = function () {
        return this.day
    };
    this.setSalaryDay = function(salaryDay) {
        this.setSalaryDay = salaryDay;
    };
    this.getSalaryDay = function () {
        return this.setSalaryDay
    };
    this.getSalary = function () {
        return this.getDay()*this.getSalaryDay();
    }
};
