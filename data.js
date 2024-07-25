function loadScript(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.onload = function () {
        console.log(`${file} loaded successfully.`);
    };
    script.onerror = function () {
        console.log(`Error loading ${file}.`);
    };
    document.body.appendChild(script);
}

// Add event listeners to the buttons
document.getElementById('right').addEventListener('click', function () {
    loadScript('mydata.js');
});

document.getElementById('left').addEventListener('click', function () {
    loadScript('copdata.js');
});