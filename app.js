const btn = document.querySelector("#submit");
const arrayPrint = document.querySelector(".array-print");
const kadaneMax = document.querySelector(".kadane-max");
let eventCount = 0;

btn.addEventListener("click", () => {
    if (eventCount === 0) {
        const limit = Number(document.querySelector("#limit").value);
        const array = convertToNumberArray(document.querySelector("#array").value.split(","));
        const KaadneMaxValue = kadane(array, limit);
        attachToDocument(array, arrayPrint, "Array is ");
        attachToDocument(KaadneMaxValue, kadaneMax, "Max subarray sum is ");
        eventCount++;
    }
})

function convertToNumberArray(array) {
    array.forEach((val, i) => {
        array[i] = Number(val);
    })
    return array
}

function kadane(array, limit) {
    let maxFar = array[0],
        maxEnd = array[0];
    for (let i = 1; i < limit; i++) {
        maxFar = Math.max(array[i], maxFar + array[i]);
        maxEnd = Math.max(maxEnd, maxFar);
    }
    return maxFar;
}

function attachToDocument(text, node, extraText) {
    return node.appendChild(document.createTextNode(extraText + text));
}