window.document.addEventListener("DOMContentLoaded", function() {
    console.log("Window Loaded");
    document.getElementById("navHome").addEventListener("click", function() {
        showRecipe(document.getElementById("mainHome"));
    });
    document.getElementById("navWings").addEventListener("click", function() {
        showRecipe(document.getElementById("mainWings"));
    });
    document.getElementById("navBreadsticks").addEventListener("click", function() {
        showRecipe(document.getElementById("mainBreadsticks"));
    });
    document.getElementById("navTruffles").addEventListener("click", function() {
        showRecipe(document.getElementById("mainTruffles"));
    });
    document.getElementById("navRice").addEventListener("click", function() {
        showRecipe(document.getElementById("mainRice"));
    });
    document.getElementById("navForm").addEventListener("click", function() {
        showRecipe(document.getElementById("mainForm"));
    });
});

function showRecipe(showElement) {
    let articleElements = [
        document.getElementById("mainHome"),
        document.getElementById("mainWings"),
        document.getElementById("mainBreadsticks"),
        document.getElementById("mainTruffles"),
        document.getElementById("mainRice"),
        document.getElementById("mainForm"),
        document.getElementById("submitMessage")
    ]
    articleElements.forEach(el => el.classList.add("hidden"));
    showElement.classList.remove("hidden");
}

