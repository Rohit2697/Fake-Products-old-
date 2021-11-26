function showCartItem(localItem, localImage, localCount) {
  let testShoppingCart = document.querySelector("#test_ShoppingCart");
  if (testShoppingCart && localItem && localItem[0] != "") {
    for (let i = 0; i < localItem.length; i++) {
      testShoppingCart.insertAdjacentHTML(
        "afterbegin",

        `<div class="cart-item">
          <img  src="${localImage[i]}" class="cart-image"></img>
  
          <div class="cart-name">${localItem[i]}</div>
          <span class="cart-itemcount">${localCount[i]}</span>
          <span>
      
  
          <svg stroke="currentColor" class="remove" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"></path>
          </svg>
      
          </span>
  
          </div>`
      );
    }

    remove();
  } else {
    testShoppingCart.insertAdjacentHTML(
      "afterbegin",
      `<div class="cart-item">
    <div class="cart-name">No Item</div>
    </div>`
    );

    document.querySelector(".cart-item").classList.add("red-bg");
    document.querySelector(".cart-name").classList.add("no-item");

    localStorage.clear();
  }
}

var localItem =
  localStorage.getItem("item") && localStorage.getItem("item").split(",");
var localImage =
  localStorage.getItem("image_url") &&
  localStorage.getItem("image_url").split(",");
var localCount =
  localStorage.getItem("count") && localStorage.getItem("count").split(",");

const remove = () => {
  let removeBtn = document.querySelectorAll(".remove");
  removeBtn.forEach((e) => {
    e.addEventListener("click", () => {
      let parent = e.parentElement.parentElement.children[1];
      let index = localItem.indexOf(parent.innerHTML);
      

      if(parseInt(localCount[index])==1){
      localItem.splice(index, 1);
      localImage.splice(index, 1);
      localCount.splice(index, 1);
      //showCartItem(localItem,localImage);
      localStorage.setItem("item", localItem);
      localStorage.setItem("image_url", localImage);
      localStorage.setItem("count", localCount);
      }
      else{
        localCount[index]=(parseInt(localCount[index])-1).toString();
        localStorage.setItem("count", localCount);
      }
      location.reload();
    });
  });
};

showCartItem(localItem, localImage, localCount);

setInterval(() => {
  if (localStorage.getItem("item")) {
    let itemcount = 0;
    let storagecount = 0;

    try {
      localCount.forEach((e) => (itemcount += parseInt(e)));
      localStorage
        .getItem("count")
        .split(",")
        .forEach((e) => (storagecount += parseInt(e)));
    } catch (e) {
      if (!localItem) location.reload();
    }

    if (storagecount != itemcount) {
      //showCartItem(localItem, localImage);}
      location.reload();
    }
  } else {
    if (localItem) location.reload();
  }
}, 100);
