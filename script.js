document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    button.innerText = "⬆ Volver arriba";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.display = "none";
    
    document.body.appendChild(button);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
