const btn = document.getElementById("get_products");
const url = "http://localhost:4444/api";

function listProducts() {
  axios
    .get(url + "/products")
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

btn.onclick = listProducts;
