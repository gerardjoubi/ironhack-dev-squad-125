console.log("DOM Round 2");


const btnAttributes = document.getElementById("btn_try_1");
const btnArrayConversion = document.getElementById("btn_try_2");

function getUsefullDOMAttributes() {
  console.clear();
  console.log("----usefullDOMAttributes on #title_main ----");
  const titleMain = document.getElementById("title_main");
  console.log(titleMain);
  console.log("titleMain id: ", titleMain.id);
  console.log("titleMain className: ", titleMain.className);
  console.log("titleMain tagName: ", titleMain.tagName);
  console.log("titleMain textContent: ", titleMain.textContent);
  console.log("titleMain innerHTML: ", titleMain.innerHTML);
  console.log("titleMain parentElement: ", titleMain.parentElement);
  console.log("titleMain children: ", titleMain.children);
  console.log("titleMain nextElementSibling: ", titleMain.nextElementSibling);
  console.log(
    "titleMain previousElementSibling: ",
    titleMain.previousElementSibling
  );
  console.log("----------func / end -------------");
  console.log("--------------------------------");
}

function convertToArray() {
  console.clear();
  const links = document.querySelectorAll(".link");
  const h2s = document.getElementsByTagName("h2");
  console.log(Array.from(links));
  console.log([...h2s]);
}

btnAttributes.onclick = getUsefullDOMAttributes;
btnArrayConversion.onclick = convertToArray;

