firebase
  .database()
  .ref("Cart")
  .on("child_added", function (data) {
    console.log(data.val().heading);
    console.log(data.val().img);
    console.log(data.val().key);
    console.log(data.val().price);
    let tr = document.createElement("tr");
    // First td
    let td = document.createElement("td");
    let div = document.createElement("div");
    let firstInnerdiv = document.createElement("div");
    let img = document.createElement("img");
    
    let secondInnerdiv = document.createElement("div");
    let title = document.createElement("h4");
    // First td
    // Second td
    let pricetd = document.createElement("td");
    let quantitytd = document.createElement("td");
    let subTotal = document.createElement("td");
    let deleteBtn = document.createElement("td");

    let btn = document.createElement("button");
    let icon = document.createElement("i");
    
    // Second td
    // Second td
    pricetd.setAttribute("class", "data-tbl");
    quantitytd.setAttribute("class", "data-tbl dt-t");
    subTotal.setAttribute("class", "data-tbl text-center");
    deleteBtn.setAttribute("class", "actions");


    btn.setAttribute("class", "btn btn-danger btn-sm");
    icon.setAttribute("class", "fa fa-trash-o");


    // Second td
    // First td
    title.setAttribute("class", "nomargin");
    secondInnerdiv.setAttribute("class", "col-sm-10");
    img.setAttribute("src", data.val().img);
    title.innerHTML = data.val().heading;
    pricetd.innerHTML = data.val().price;
    quantitytd.innerHTML = data.val().quantity;
    img.setAttribute("class", "img-responsive");
    firstInnerdiv.setAttribute("class", "col-sm-2 hidden-xs");
    div.setAttribute("class", "row");
    // First td


    div.appendChild(firstInnerdiv);
    div.appendChild(secondInnerdiv);
    deleteBtn.appendChild(btn);
    btn.appendChild(icon);
    firstInnerdiv.appendChild(img);
    secondInnerdiv.appendChild(title);
    td.appendChild(div);
    tr.appendChild(td);
    tr.appendChild(pricetd);
    tr.appendChild(quantitytd);
    tr.appendChild(subTotal);
    tr.appendChild(deleteBtn);
    // var editbtn = document.createElement("button");
    // editbtn.setAttribute("id", data.val().key);
    // editbtn.setAttribute("onclick", "editval(this)");
    // editbtn.setAttribute("class", "btns");
    // var edittext = document.createTextNode("Edit");
    // editbtn.appendChild(edittext);
    // li.appendChild(editbtn);
    // var dellbtn = document.createElement("button");
    // dellbtn.setAttribute("id", data.val().key);
    // dellbtn.setAttribute("onclick", "dellval(this)");
    // dellbtn.setAttribute("class", "btns");
    // var delltext = document.createTextNode("Delete");
    // dellbtn.appendChild(delltext);
    // li.appendChild(dellbtn);

    var setCart = document.getElementById("setCart");
    setCart.appendChild(tr);
    // console.log(data.val().value);
  });

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
