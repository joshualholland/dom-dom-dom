
let btn = document.createElement("button");
let btnText = document.createTextNode("Add Square");
btn.append(btnText);
document.body.appendChild(btn);
let div = document.createElement('div');
div.setAttribute('id', 'container');
document.body.appendChild(div);
let counter = 0;
btn.addEventListener('click', function () {
    let square = document.createElement('div');
    square.classList.add('square');
    div.appendChild(square);
    square.setAttribute('id', counter);
    counter++
    square.addEventListener("mouseover", function () {
        let id = document.createTextNode(`${square.getAttribute('id')}`);
        square.append(id);
    });
    square.addEventListener('mouseout', function () {
        square.innerHTML = ""
    });
    square.addEventListener('click', function () {
        let color = ['red', 'blue', 'orange', 'yellow', 'cyan', 'magenta', 'purple', 'pink', 'green']
        square.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    })
    square.addEventListener('dblclick', function () {
        let counter = square.getAttribute('id');
        if (counter % 2 == 0) {
            if (this.nextSibling == null) {
                alert("Can't do that, bud");
                return;
            }
            div.removeChild(this.nextSibling);
        } else {
            if (this.previousSibling == null) {
                alert("Can't do that, bud");
                return;
            }
            div.removeChild(this.previousSibling);
        }
    })
});

