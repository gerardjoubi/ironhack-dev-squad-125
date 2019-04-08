// import axios from "./node_modules/axios/dist/axios.js";

const btn = document.getElementById("get_coffees");
const list = document.getElementById("coffees");
const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=1000&facet=arrondissement";
  
//  navigate to your your folder in a shell/terminal
//  npm init -y ... then ... npm install --save axios

function getCoffees() {  // axios uses promises !!!
  axios
    .get(url)
    .then(res => {
    //   console.log(res);
      displayCoffees(res.data.records);
    })
    .catch(err => {
      console.error(err);
    });
}

function displayCoffees(coffeList) {
    coffeList.forEach(coffee => {
        // console.log(coffee); 
        const li = document.createElement("li");
        li.textContent = coffee.fields.nom_du_cafe + " " + coffee.fields.arrondissement; 
        list.appendChild(li); 
    });
}



btn.onclick = getCoffees