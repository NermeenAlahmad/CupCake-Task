$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];

var tbody1 = document.getElementById("cupcake-table")
function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    for (i=0;i<=4;i++){
        var trElement = document.createElement("tr")
        tbody1.appendChild(trElement)
        var tdElement1 = document.createElement("td")
        trElement.appendChild(tdElement1)
        tdElement1.innerText=cup_cakes[i].name
        var tdElement2 = document.createElement("td")
        trElement.appendChild(tdElement2)
        tdElement2.innerText=cup_cakes[i].calories
        var tdElement3 = document.createElement("td")
        trElement.appendChild(tdElement3)
        tdElement3.innerText=cup_cakes[i].weight
        if (cup_cakes[i].calories=="high"){tdElement2.style.backgroundColor="red"}
        if (cup_cakes[i].calories=="medium"){tdElement2.style.backgroundColor="orange"}
        if (cup_cakes[i].calories=="low"){tdElement2.style.backgroundColor="green"}
      }
}

    let nameFormat = /^[a-zA-Z0-9_$\.]{5,16}$/;
    // btn
    let submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', validate);
    function validate() {
    //write code that validates the form

    // Customer Name
    let customerNameInput = document.querySelector('.customername-input');
    let customerNameLabel = document.querySelector('.customername-label-2');
    // Count
    let countInput = document.querySelector('.count-input');
    let countLabel = document.querySelector('.count-label-2');
    // select
     let select1 = document.querySelector('.select-1');
     let select2 = document.querySelector('.select-2');
     let select3 = document.querySelector('.select-3');

     let selectLabel1 = document.querySelector('.select-label1');
     let selectLabel2 = document.querySelector('.select-label2');
     let selectLabel3 = document.querySelector('.select-label3');

    // Customer Name Validation
    if(customerNameInput.value.match(nameFormat)){
        customerNameLabel.innerHTML = "Okay"
        customerNameLabel.style.color = "green"
        customerNameLabel.style.borderColor = "green"
    } else {
        customerNameLabel.innerHTML = "The name is required and must be at least five characters long and at most 16 characters long"
        customerNameLabel.style.color = "red"
    }
    
    // Count Validation
    if (countInput.value >= 1 && countInput.value <= 15) {
        countLabel.innerHTML = "Okay"
        countLabel.style.color = "green"
        countLabel.style.borderColor = "pink"
    } else {
        countLabel.innerHTML = "The count is required and must be at least 1 and at most 15"
        countLabel.style.color = "red"
    }
    // Select Type Validation
    if (select1.value !== "none") {
        selectLabel1.innerHTML = "Okay"
        selectLabel1.style.color = "green"
        selectLabel1.style.borderColor = "green"
    } else {
        selectLabel1.innerHTML = "Pleas fill out the cupcake type"
        selectLabel1.style.color = "red"
    }

    // Select Delivery Validation
    if (select2.value !== "none") {
        selectLabel2.innerHTML = "Okay"
        selectLabel2.style.color = "green"
        selectLabel2.style.borderColor = "green"
    } else {
        selectLabel2.innerHTML = "Pleas fill out the cupcake type"
        selectLabel2.style.color = "red"
    }

    // Select Allegies Validation
    if (select3.value !== "none") {
        selectLabel3.innerHTML = "Okay"
        selectLabel3.style.color = "green"
        selectLabel3.style.borderColor = "green"
    } else {
        selectLabel3.innerHTML = "Pleas fill out the cupcake type"
        selectLabel3.style.color = "red"
    }

    // ALL Select Validation
    

    if (select1.value == "Chocolate" && select2.value == "4:00 PM") {
        selectLabel2.innerHTML = "Unnfortunately This type of cake cannot be delivered at 4 PM"
        selectLabel2.style.color = "red"
        selectLabel2.style.borderColor = "red"
    }

    if (select1.value == "Chocolate" && select3.value == "Dairy Free") {
        selectLabel3.innerHTML = "The type of cake is not dairy free"
        selectLabel3.style.color = "red"
        selectLabel3.style.borderColor = "red"
    }

    if (select1.value == "Pecan" && select3.value == "Nut Free") {
        selectLabel3.innerHTML = "The pecan cake is not nut free"
        selectLabel3.style.color = "red"
        selectLabel3.style.borderColor = "red"
    }


    localStorage.setItem("user",customerNameInput.value)

    }
    

function show_storage(){
    //write code that shows the name from local storage
    var userName=localStorage.getItem("user")
  document.getElementById("welcome").innerHTML=`Welcome ${userName}`
}