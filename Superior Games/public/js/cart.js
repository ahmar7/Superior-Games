let addtoCart = () => {
  let setHead = document.getElementById("setHead");
  let setPrice = document.getElementById("setPrice");
  let addedAlert = document.getElementById("added-alert");

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


  if(setHead.innerHTML != ""){
  firebase.database().ref("Cart").child(key).set(cardData);
  cartAddBtn.innerHTML="Added to Cart Successfully"
  }else{

    cartAddBtn.innerHTML="No Product Selected"
  }

  cartAddBtn.setAttribute("disabled", true);
};

