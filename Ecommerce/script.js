//////////////////////////////////////////////////////////////////////////////////////////////////

/*Ecommerce Page Logic*/

var arrItem = [];
var arrImage = [];
var arrItemCount = [];

//var cartIcon=document.querySelector('.cart-icon');
//localStorage.clear();

async function getapi() {
  const response = await fetch("https://api.github.com/users");
  var data = await response.json();
  //console.log(data);
  let test = document.getElementById("test");
  if (test) {
    for (i = 0; i < data.length; i++) {
      test.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="card">
    <img class="card-img-top" src="${data[i].avatar_url}" alt="Card image cap">
    <h5 class="login">${data[i].login}</h5><span>
    <button class='add' type='submit'>Add to Cart</button>
    </div>`
      );

      let name = document.querySelector(".login").innerHTML;
      let image_url = document
        .querySelector(".card-img-top")
        .getAttribute("src");

      addToCard(name, image_url);
    }
  }
}
//}
//function addToCart(item){
//    arr.push(item);
//}
//console.log(arr);
getapi();
////////////////////
const loadItemwithCount = (item, image_url) => {
  if (arrItem.length == 0 || !arrItem.includes(item)) {
    let count = 1;
    arrItem.push(item);
    arrImage.push(image_url);
    arrItemCount.push(count);
  } else {
    //console.log(item);
    let index = arrItem.findIndex((e) => e === item);
    //console.log(index);
    //console.log(arrItemCount[index]++);
    arrItemCount[index] = arrItemCount[index] + 1;
  }
};
//change
//////////////////////////////
const addToCard = function (name, image_url) {
  document.querySelector(".add").addEventListener("click", () => {
    // arrItem.push(name);
    // arrImage.push(image_url);
    loadItemwithCount(name, image_url);
    // returnCount(arrItem,arrImage); //change
    localStorage.setItem("item", arrItem);
    localStorage.setItem("image_url", arrImage);
    localStorage.setItem("count", arrItemCount);
    // localStorage.setItem("count", arrItemCount);// change
  });
};

setInterval(() => {
  if (localStorage.length === 0) {
    arrItem = [];
    arrImage = [];
    arrItemCount = [];
  }
}, 100);

if (document.querySelector(".cart_itemcount")) {
  setInterval(function () {
    let c = 0;
    if (
      localStorage.getItem("item") &&
      localStorage.getItem("item").split(",").length > 0
    ) {
      localStorage
        .getItem("count")
        .split(",")
        .forEach((e) => {
          c = c + parseInt(e);
        });
      document.querySelector(".cart_itemcount").innerHTML = c.toString();
    } else document.querySelector(".cart_itemcount").innerHTML = "0";
  }, 1000);
}

