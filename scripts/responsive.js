let click = false;
var x = document.getElementById("TopNav");
var sheet = window.document.styleSheets[0];

function ResponsiveScreen() {
    if(x.className === "navbar" && !click) {
        x.className += " responsive";
        sheet.insertRule('.navbar a.icon {color: rgb(128, 0, 0);}');
        click = true;
    }

    else {
        x.className = "navbar";
        sheet.deleteRule('.navbar a.icon {color: rgb(128, 0, 0);}');
        click = false;
    }
}