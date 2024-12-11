window.onload = function() {
    document.getElementById("pageTitle").innerText = "Hello, Welcome to My GitHub Page!";
    document.getElementById("pageDescription").innerText = "This is now a dynamic content powered by JavaScript!";
    
    document.getElementById("changeContentButton").addEventListener("click", function() {
        document.getElementById("pageTitle").innerText = "Content Changed!";
        document.getElementById("pageDescription").innerText = "The content has been changed by clicking the button.";
    });
};

