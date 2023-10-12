function calculateRectangle() {
    let lengthInput = document.getElementById("length");
    let widthInput = document.getElementById("width");

    let lengthText = lengthInput.value;
    let widthText = widthInput.value;

    let lengthSeparators = (lengthText.match(/[.,]/g) || []).length;
    let widthSeparators = (widthText.match(/[.,]/g) || []).length;

    let invalidCharacters = /[^\d.,]/.test(lengthText) || /[^\d.,]/.test(widthText);
    let moreThanTwoSeparators = lengthSeparators > 1 || widthSeparators > 1;

    if (invalidCharacters || moreThanTwoSeparators) {
        let errorMessage = "Будь ласка, введіть коректні дані";
        if (moreThanTwoSeparators) {
            errorMessage += " та дотримуйтесь вимог щодо роздільника (один роздільник: кома або крапка).";
        } else {
            errorMessage += " та уникайте інших символів, окрім чисел, коми та крапки.";
        }
        alert(errorMessage);
        return;
    }

    let length = parseFloat(lengthText.replace(",", "."));
    let width = parseFloat(widthText.replace(",", "."));

    let perimeter = 2 * (length + width);
    let area = length * width;
    let diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    document.getElementById("perimeter").textContent = perimeter;
    document.getElementById("area").textContent = area;
    document.getElementById("diagonal").textContent = diagonal.toFixed(2);
}

document.getElementById("length").addEventListener("input", calculateRectangle);
document.getElementById("width").addEventListener("input", calculateRectangle);
