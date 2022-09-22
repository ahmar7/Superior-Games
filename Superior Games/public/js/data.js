firebase
  .database()
  .ref("Cart")
  .on("child_added", function (data) {
    let tr = document.createElement("tr");
    let br = document.createElement("br");
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
    deleteBtn.setAttribute("id", data.val().key);

    deleteBtn.setAttribute("onclick", "dellval(this)");
    img.setAttribute("src", data.val().img);
    title.innerHTML = data.val().heading;
    pricetd.innerHTML = "$" + data.val().price;
    quantitytd.innerHTML = data.val().quantity;
    subTotal.innerHTML = "$" + data.val().price * data.val().quantity;
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

    var setCart = document.getElementById("setCart");
    // setCart.appendChild(br2);
    setCart.appendChild(tr);
    // setCart.appendChild(br);
  });

function dellval(o) {
  //   console.log(o.id);
  firebase.database().ref("Cart").child(o.id).remove();
  o.parentNode.remove();
}

function deleteBtn() {
  firebase.database().ref("Cart").remove();
  setCart.innerHTML = "";
}
let carted = document.getElementById("cart");
let loading = document.getElementById("loading");

setTimeout(myGreeting, 3000);

function myGreeting() {
  carted.classList.remove("hide-it");
  loading.classList.add("hide-it");
}
