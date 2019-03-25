console.log("-----------------------\n@module.js\n-----------------------");
console.log("a globalVarIsEvil =>", window.globalVarIsEvil);
console.log("b globalVarToo =>", window.globalVarToo);
console.log("b wontBeCheck =>", window.wontBeCheck);
console.log("c wontBeCheckedNeither =>", window.wontBeCheckedNeither);
console.log("d =>", this);
// previous statement: module scripts use 'strict mode' as default, so this will throw a type Error
