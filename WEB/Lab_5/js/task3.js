function transliterateUkrainian() {
    const ukrainianText = document.getElementById("ukrainianText").value;
    document.getElementById("latinText").value = transliterate(ukrainianText);
}

function transliterate(text) {
    const ukrainian = [
        'а', 'б', 'в', 'г', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я',
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'
    ];

    const latin = [
        'a', 'b', 'v', 'h', 'd', 'e', 'ye', 'zh', 'z', 'y', 'i', 'yi', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '', 'yu', 'ia',
        'A', 'B', 'V', 'H', 'D', 'E', 'Ye', 'Zh', 'Z', 'Y', 'I', 'Yi', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'Kh', 'Ts', 'Ch', 'Sh', 'Shch', '', 'Yu', 'Ia'
    ];

    for (let i = 0; i < ukrainian.length; i++) {
        const regExp = new RegExp(ukrainian[i], 'g');
        text = text.replace(regExp, latin[i]);
    }

    return text;
}
