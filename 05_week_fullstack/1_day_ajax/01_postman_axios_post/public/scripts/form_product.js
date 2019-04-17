const name = document.getElementById("prod_name");
const price = document.getElementById("prod_price");
const btn = document.getElementById("post_product");
const url = "http://localhost:4444/api";

// console.log("axios", axios)

function postProduct(e) {
  e.preventDefault(); // the form submit is prevented (no default page reload)
  axios
    .post(url + "/product", {
      name: name.value,
      price: price.value
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

btn.onclick = postProduct;
