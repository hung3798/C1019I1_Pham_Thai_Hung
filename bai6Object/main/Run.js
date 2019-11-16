var inputName = document.getElementById("inputName");
var inputAge = document.getElementById("inputAge");

var arr = [];
function save() {
    var person = new Person();
    person.setName(inputName.value);
    person.setAge(inputAge.value);
    arr.push(person);
}
function show() {
    let drawHTML="";
    for(var i = 0 ; i < arr.length ; i++){
        drawHTML += "<div>Name: "+ arr[i].getName() +"</div>" +
            "<div>Age: "+ arr[i].getAge() +"</div>";
    }
    document.getElementById("show").innerHTML = drawHTML;
}