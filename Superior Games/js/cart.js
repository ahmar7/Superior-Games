
let addtoCart = () => {
  let setHead = document.getElementById("setHead");
  let setPrice = document.getElementById("setPrice");
  let setImg = document.getElementById("setImg");
  let cartAddBtn = document.getElementById("cartAddBtn");
  let quantityProduct = document.getElementById("quantity-product");
var key = firebase.database().ref("Cart").push().key;
  var cardData = {
    heading: setHead.innerHTML,
    price: setPrice.innerHTML,
    img: setImg.src,
    quantity: quantityProduct.value,
    key: key,
  };

  firebase.database().ref("Cart").child(key).set(cardData);
  
  cartAddBtn.setAttribute("disabled", true)
};



// function dellval(o) {
//   firebase.database().ref("Users").child(o.id).remove();
//   o.parentNode.remove();
// }
