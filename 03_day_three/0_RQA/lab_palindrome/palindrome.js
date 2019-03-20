const sentences = [
  "hello world",
  "Always bet on JS (Brendan Eich)",
  "truthy or falsy",
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon"
];

function swap(str) {
  var tmp = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    tmp += str[i];
  }
  return tmp;
}

function swap2(str) {
  return str.split("").reverse().join("");
}

function format(input) {
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
  return input.replace(/[\s\W]/g, "").toLowerCase();
}

function isPalindrome(strA, strB) {
  return strA === strB;
}

for (let i = 0; i < sentences.length; i += 1) {
  let res = isPalindrome(format(sentences[i]), format(swap2(sentences[i])));
  console.log(`${res ? "yay" : "oh no"} !!! n°${i + 1} 
          ==> ${res ? "is" : "is not"} palindrome
  `);
}
