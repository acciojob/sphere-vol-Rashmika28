function volume_sphere() {
    const radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");

    // Check for invalid input
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return false;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);

    return false; // Prevent form submission
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};