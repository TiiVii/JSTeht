document.body.onload = addElement;

function addElement() {
    var div = document.getElementById("target");

        var li = document.createElement("li");
        li.appendChild(document.createTextNode("First item"));
        div.appendChild(li);

        var lo = document.createElement("li");
        lo.className = "my-item";
        lo.appendChild(document.createTextNode("Second item"));
        div.appendChild(lo);


        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Third item"));
        div.appendChild(li);
};