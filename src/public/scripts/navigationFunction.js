
addEventListener("load", function() {
    const path = window.location.pathname;
    
    if (path === "/") {
        document.getElementById("navLinkInicio").classList.add("active");
    } else if (path === "/contact") {
        document.getElementById("navLinkContacto").classList.add("active");
    }

});