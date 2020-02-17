function displayTotalpayOfCustomer() {
    let resoul = "";
    for (let i = 0; i < arrayListCustomer.length; i++) {
        resoul += "Customer " + (i + 1) + ": " + arrayListCustomer[i].getNameCustomer() + "\n";
    }
    let chosse = prompt("Select Customer you want to show totalpay:\n" +
        resoul + (arrayListCustomer.length + 1) + ". Back");
    chosse--;
    switch (chosse) {
        case arrayListCustomer.length + "":
            displayMainMenu();
            break;
        default:
            totalPayCustomer(chosse);
            displayMainMenu();
    }
}
function totalPayCustomer(i) {
    alert("Total pay: " + arrayListCustomer[i].getTotalPay() + "$");
}