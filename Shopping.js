//query selectors
var adding = document.querySelector(".btnadd")
var cart = document.querySelector(".cart-image")
var p = document.querySelector(".total-cart")
var sectionAdd = document.querySelector(".add")

//make the adding window appear after clicking the add button
function windowAjouter() {
    document.getElementById("mdl").style.display = "block";
}

// close adding window and reinitialise the forum
function CloseAddingWindow() {
    document.getElementById("mdl").style.display = "none";
    document.querySelector(".add-phone-model").value = "";
    document.querySelector(".add-price").value = "";
    document.querySelector(".add-src").value = ""
}


//search function
function searching() {
    let allItems = Array.from(document.querySelectorAll(".text-img"))
    var searched = document.querySelector(".searched").value.toLowerCase();
    for (let i of allItems) {
        if (i.innerHTML.toLowerCase().includes(searched)) {
            return alert(searched + ' is found')
        }
    }
    alert('item NOT found')
}



//add article after clicking add button and charging infos into the forum
function addArticle() {
    var clone = document.querySelector(".product").cloneNode(true);

    clone.querySelector(".quantity-per-article").innerHTML = Number(0);

    clone.querySelector(".text-img").innerHTML = document.querySelector(".add-phone-model").value;
    clone.querySelector(".price").setAttribute('value', Number(document.querySelector(".add-price").value));
    clone.querySelector(".price").innerHTML = document.querySelector(".add-price").value;
    clone.querySelector("#prdt").src = document.querySelector(".add-src").value;
    clone.querySelector("#prdt").alt = document.querySelector(".add-phone-model").value;

    document.querySelector(".product").parentElement.insertBefore(clone, sectionAdd);

}


//Adding/removing quantities + Adding/removing articles
document.addEventListener("click", function (event) {
    //  +1 quantity
    if (event.target.className == "plus")
        addOne(event);
    //  -1 quantity
    if (event.target.className == "minus") {
        if (Number(event.target.parentElement.querySelector(".quantity-per-article").innerHTML) > 0)
            removeOne(event)
    }
    //  remove article + remove its price from billing
    if (event.target.className == "far fa-trash-alt text-danger") {

        if (document.querySelectorAll(".product").length > 2) {
            var productClosed = event.target.parentElement
            //productClosed.style.display= "none" : autre méthode de suppression!
            var minusOne = event.target;
            let y = minusOne.parentElement.querySelector(".quantity-per-article")
            let prc = minusOne.parentElement.querySelector(".price")
            p.innerHTML = Number(p.innerHTML) - (Number(prc.getAttribute('value')) * Number(y.innerHTML));
            productClosed.remove();
        }
        else alert("You must at least have one article");
    }

    //show modal to make adding action
    if (event.target.className == "btnadd")
        windowAjouter();

})

//function to add quantity
function addOne(event) {
    var plusOne = event.target;
    let x = plusOne.parentElement.querySelector(".quantity-per-article")
    x.innerHTML = 1 + Number(x.innerHTML);
    let prc = plusOne.parentElement.parentElement.querySelector(".price")
    p.innerHTML = Number(prc.getAttribute('value')) + Number(p.innerHTML);
}

//function to remove quantity
function removeOne(event) {
    var minusOne = event.target;
    let y = minusOne.parentElement.querySelector(".quantity-per-article")
    y.innerHTML = Number(y.innerHTML) - 1;
    let prc = minusOne.parentElement.parentElement.querySelector(".price")
    p.innerHTML = Number(p.innerHTML) - Number(prc.getAttribute('value'));
}








