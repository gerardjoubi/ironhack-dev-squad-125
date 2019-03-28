// ex use : domSelect("*") or domSelect(".circle"), domSelect("#header")
function domSelect(cSS) {
  const tmp = document.querySelectorAll(cSS);
  return !tmp.length ? null : tmp.length === 1 ? tmp[0] : tmp;
}

export default domSelect;