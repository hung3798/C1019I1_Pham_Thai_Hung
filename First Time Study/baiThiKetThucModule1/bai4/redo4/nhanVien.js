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
    this.getDay =function () {
        return this.day;
    };
    this.setSalaryDay = function (salaryDay) {
        this.salaryDay = salaryDay;
    };
    this.getSalaryDay = function () {
        return this.salaryDay;
    };
    this.getSalary = function () {
        return this.getDay()*this.getSalaryDay();
    }
};

let HocSinh = function () {
    this.setDiem = function (diem) {
        this.diem = diem;
    };
    this.getDiem = function () {
        return this.diem;
    };
    this.getDayStudy = function () {
        return nhanVien.getDay()
    }
};