const range = document.getElementById("range_input");
const rangeDisplay = document.getElementById("range_value");

function displayRangeValue() {
    const css = Number(range.value) > 50 ? "has-text-success" : "has-text-warning";
    rangeDisplay.textContent = range.value;
    rangeDisplay.className = css;
    // console.log(css);
}

range.oninput = displayRangeValue;
