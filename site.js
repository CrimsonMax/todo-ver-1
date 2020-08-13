let addButton = document.querySelector(".todo-input__input-button");
let input = document.querySelector(".todo-input__text-area");
let itemPlace = document.querySelector(".todo-list");

class item {

    constructor(value) {
        this.createDiv(value);
    }

    createDiv(value) {
        let itemBox = document.createElement('div');
        itemBox.classList.add('todo-list__item');

        let input = document.createElement('p');
        input.innerHTML = value;
        input.classList.add('item-input');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "X";
        removeButton.classList.add('item-remove');

        itemPlace.appendChild(itemBox);
        
        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox));

    }

    remove(item) {
        itemPlace.removeChild(item);
    }
}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);