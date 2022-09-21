//   <tr>
//     <td data-th="Product">
//       <div class="row">
//         <div class="col-sm-2 hidden-xs">
//           <img
//             src="http://placehold.it/100x100"
//             alt="..."
//             class="img-responsive"
//           />
//         </div>
//         <div class="col-sm-10">
//           <h4 class="nomargin">Product 1</h4>
//         </div>
//       </div>
//     </td>
//     <td colspan="1" class="data-tbl" data-th="Price">
//       $1.99
//     </td>
//     <td colspan="0" class="data-tbl dt-t" data-th="Quantity">
//       1
//     </td>
//     <td colspan="0" class="data-tbl text-center" data-th="Subtotal">
//       1.99
//     </td>
//     <td class="actions" data-th="">
//       <button class="btn btn-danger btn-sm">
//         <i class="fa fa-trash-o"></i>
//       </button>
//     </td>
//   </tr>
let addtoCart = () => {
  let setHead = document.getElementById("setHead");
  let setPrice = document.getElementById("setPrice");
  let setImg = document.getElementById("setImg");
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
  
 
  //   firebase
  //     .database()
  //     .ref("Cart")
  //     .child(key, function (data) {
  //       if (data.val().heading === setHead.innerHTML) {
  //         console.log(data.val().heading, "<<<yes>>>", setHead.innerHTML);
  //       } else {
  //         console.log(data.val().heading, "<<<no>>>", setHead.innerHTML);
  //     }
  //     console.log(data.val().heading, "<<<data>>>", setHead.innerHTML);
  //     });
};

// firebase
//   .database()
//   .ref("Users")
//   .on("child_added", function (data) {
//     var li = document.createElement("li");
//     li.setAttribute("class", "list");
//     var input = document.createElement("input");
//     input.setAttribute("class", "enters");
//     input.setAttribute("id", "inpt");
//     input.setAttribute("value", data.val().value);
//     input.setAttribute("readonly", "readonly");
//     li.appendChild(input);

//     var editbtn = document.createElement("button");
//     editbtn.setAttribute("id", data.val().key);
//     editbtn.setAttribute("onclick", "editval(this)");
//     editbtn.setAttribute("class", "btns");
//     var edittext = document.createTextNode("Edit");
//     editbtn.appendChild(edittext);
//     li.appendChild(editbtn);
//     var dellbtn = document.createElement("button");
//     dellbtn.setAttribute("id", data.val().key);
//     dellbtn.setAttribute("onclick", "dellval(this)");
//     dellbtn.setAttribute("class", "btns");
//     var delltext = document.createTextNode("Delete");
//     dellbtn.appendChild(delltext);
//     li.appendChild(dellbtn);

//     var record = document.getElementById("record");
//     record.appendChild(li);
//     console.log(data.val().value);
//   });

// function dellval(o) {
//   firebase.database().ref("Users").child(o.id).remove();
//   o.parentNode.remove();
// }
