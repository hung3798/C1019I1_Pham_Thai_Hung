function displayInfomationCustomer() {
    let resoul = "";
    for (let i = 0; i < arrayListCustomer.length; i++) {
        resoul += "Customer " + (i + 1) + ": " + arrayListCustomer[i].getNameCustomer() + "\n";
    }
    let chosse = prompt("Choose Customer you want to show:\n" +
        resoul + "\n" + (arrayListCustomer.length + 1) + ". Exit");
    chosse--;
    switch (chosse) {
        case arrayListCustomer.length + "":
            displayMainMenu();
        default:
            showInfomationCustomer(chosse);
            displayMainMenu();

    }
}
function showInfomationCustomer(i) {
    alert("Name Customer: " + arrayListCustomer[i].getNameCustomer() + "\n" +
        "Id card: " + arrayListCustomer[i].getIdcard() + "\n" +
        "Birthday Customer: " + arrayListCustomer[i].getBirthday() + "\n" +
        "Email Customer: " + arrayListCustomer[i].getEmailCustomer() + "\n" +
        "Adress Customer: " + arrayListCustomer[i].getAddress() + "\n" +
        "Type Customer: " + arrayListCustomer[i].getTypeCustomer() + "\n" +
        "Discount: " + arrayListCustomer[i].getDiscount() + "\n" +
        "Number Of Accompanying: " + arrayListCustomer[i].getNumberOfAccompanying() + "\n" +
        "Type Room: " + arrayListCustomer[i].getTypeRoom() + "\n" +
        "Rent Day: " + arrayListCustomer[i].getRentDay() + "\n" +
        "Type Sevice: " + arrayListCustomer[i].getTypeService()
    );
}