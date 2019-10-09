function getPizza() {
    var chickensize = parseInt(document.getElementById("size").value);
    var chickencrust = parseInt(document.getElementById("crust").value);
    var chickentoppings = parseInt(document.getElementById("toppings").value);
    var chickenamt = parseInt(document.getElementById("amount").value);
    var chTotal = (chickensize + chickencrust + chickentoppings) * chickenamt;

    var meatsize = parseInt(document.getElementById("sizex").value);
    var meatcrust = parseInt(document.getElementById("crustx").value);
    var meattoppings = parseInt(document.getElementById("toppingsx").value);
    var meatamt = parseInt(document.getElementById("amount").value);
    var meatTotal = (meatsize + meatcrust + meattoppings) * meatamt;

    var hawaiisize = parseInt(document.getElementById("sizea").value);
    var hawaiicrust = parseInt(document.getElementById("crusta").value);
    var hawaiitoppings = parseInt(document.getElementById("toppingsa").value);
    var hawaiitamt = parseInt(document.getElementById("amount").value);
    var hawaiiTotal = (hawaiisize + hawaiicrust + hawaiitoppings) * hawaiitamt;

    var name = parseInt(document.getElementById("name").value);
    var number = parseInt(document.getElementById("number").value);
    var city = parseInt(document.getElementById("city").value);
    var cityname = document.getElementById("city").name;
    var finalAmt = (chTotal + meatTotal + hawaiiTotal + city);
    //alert(finalAmt + " " + cityname);
    alert("Your order worth " + finalAmt + " will be delivered.");
}
