var ElectricLamp = function () {
    this.setStatus = function (status) {
        this.status = status;
    };
    this.getStatus = function () {
        if (this.status) {
            return "Đèn đang bật";
        } else {
            return "Đèn đang tắt";
        }
    };
    this.turnOff = function () {
        this.setStatus(false);
    };
    this.turnOn = function () {
        this.setStatus(true);
    };

};