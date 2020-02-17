function editInformationCustomer() {
    let resoul = "";
    for (let i = 0; i < arrayListCustomer.length; i++) {
        resoul += "Customer " + (i + 1) + ": " + arrayListCustomer[i].getNameCustomer() + "\n";
    }
    let choose = prompt("Chosse Customer you want to edit:\n" +
        resoul + (arrayListCustomer.length + 1) + ": Back\n");
        choose--;
    switch (choose) {
        case arrayListCustomer.length:
            displayMainMenu();
            break;
        default:
            editCustomer(choose);
            displayMainMenu();
    }

}

function editCustomer(i) {
    arrayListCustomer[i] = addNewCustomer();
}