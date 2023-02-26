let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider) {
    slider.addEventListener("input", createBlob);
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(input) {
    input.addEventListener("change", createBlob);
});

function createBlob() {
    let radius1 = sliders[0].value;
    let radius2 = sliders[1].value;
    let radius3 = sliders[2].value;
    let radius4 = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radius1}% ${100 - radius1}% ${100 - radius3}% ${radius3}% / ${radius4}% ${radius2}% ${100 - radius2}% ${100 - radius4}%`;

    document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`;
    outputCode.value = `border-radius: ${borderRadius};`;
}

document.getElementById("copy").addEventListener("click", function() {
    outputCode.select();
    document.execCommand('copy');
    alert("Code Copied");
})

createBlob();