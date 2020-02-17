function deleteInfomationCustomer() {
    let resoul = "";
    for (let i = 0; i < arrayListCustomer.length; i++) {
        resoul += "Customer " + (i + 1) + arrayListCustomer[i].getNameCustomer()+"\n";
    }
    let choose = prompt("Choose Customer you want to deleted:\n"
        + resoul + (arrayListCustomer.length + 1) + ". Back");
    choose--;
    switch (choose) {
        case arrayListCustomer.length + "":
            displayMainMenu();
            break;
        default:
            deleteCustomer(choose);
    }
}
function deleteCustomer(index) {
    let choose = prompt("Are you sure to delete Customer: " + arrayListCustomer[index].getNameCustomer() + "\n" + "1. Yes\n2. No ");
    switch (choose) {
        case "1":
            arrayListCustomer.splice(index, 1);
            displayMainMenu();
            break;
        case "2":
            displayMainMenu();
            break;
        default:
            deleteCustomer();
    }
}