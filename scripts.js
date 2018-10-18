
let btn = document.createElement("button");
let btnText = document.createTextNode("Add Square");
btn.append(btnText);
document.body.appendChild(btn);

let counter = 0;
btn.addEventListener('click', function () {
    let square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
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
    square.addEventListener('dblclick', function() {
        if (square.getAttribute('id') % 2 == 0) {
            square.remove(square.id++);
            if (square.id++ == null) {
                alert("Can't do that, bud");
            }
        // } else {
        //     square.remove(square.getAttribute('id')--);

        }
    })
});

