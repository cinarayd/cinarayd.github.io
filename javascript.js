window.onload = function() {
    document.getElementById("postTitle").innerText = "How to Create a Dynamic Website with GitHub Pages";
    document.getElementById("postDate").innerText = "Posted on December 11, 2024";
    document.getElementById("postContent").innerText = "This is a simple blog post to demonstrate how to create a dynamic website using GitHub Pages.";

    document.getElementById("changeContentButton").addEventListener("click", function() {
        document.getElementById("postTitle").innerText = "New Content After Button Click!";
        document.getElementById("postDate").innerText = "Updated on " + new Date().toLocaleDateString();
        document.getElementById("postContent").innerText = "The content has been dynamically updated after clicking the button.";
    });
};
