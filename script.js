const input_ele = document.querySelector("#input");
const output_ele = document.querySelector("#output");
const button_ele = document.querySelector("#convert");
const regex = /^[0-9a-f]{6}$/i;

button_ele.addEventListener("click", () => {
    const input_values = input_ele.value.split("\n");
    const converted = toDecimal(input_values);
    output_ele.value = converted;
});

function toDecimal(input_values) {
    let results = "";

    for (let hex of input_values) {
        let stripped = hex.replace("#", "").trim();

        const isValid = regex.test(stripped);

        if (isValid) {
            let result = parseInt(stripped.slice(0, 2), 16) + " ";
            result += parseInt(stripped.slice(2, 4), 16) + " ";
            result += parseInt(stripped.slice(4, 6), 16) + "\n";
            results += result;
        }
    }

    return results;
}
