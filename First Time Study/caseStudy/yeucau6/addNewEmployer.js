let arrListEmpeloyer = [];
function addNewEmployer() {
    let employer = new Employer();
    employer.setName(prompt("Enter name employer:"));
    employer.setIdcard(prompt("Enter name employer:"));
    employer.setBirthday(checkBirthday(prompt("Enter name employer:")));
    employer.setNumberPhone(prompt("Enter name employer:"));
    employer.setEmail(checkEmail(prompt("Enter name employer:")));
    employer.setEducation(prompt("Enter name employer:"));
    employer.setPosition(prompt("Enter name employer:"));
    employer.setSalary(prompt("Enter name employer:"));
    arrListEmpeloyer.push(employer);
    displayMainMenu();

    function checkBirthday(birthday) {
        let regx = /^((0[1-9])|([1-2][0-9])|(3[0-1]))\/((0[1-9])|(1[1-2]))\/((199[0-9])|(20[0-1][0-9]))$/;
        if (regx.test(birthday)) {
        } else {
            alert("birthday is valid, please try again (dd/mm/yyy): ");
            checkBirthday();
        }
        return birthday;
    }

    function checkEmail(email) {
        let regx2 = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        if (regx2.test(email)) {

        } else {
            alert("nhap lai email:");
            checkEmail();
        }
        return email;
    }
}