const container = document.querySelector(`#container`);

for (let i = 0; i < 16; i++) {
    const line = document.createElement(`div`);
    line.classList.add(`line`);

    for (let i = 0; i < 16; i++) {
        const div = document.createElement(`div`);
        div.classList.add(`grid`);
        div.addEventListener(`mouseenter`, e => div.classList.add(`colored`));
        line.append(div);
    };
    container.append(line);
};

const clearBtn = document.querySelector(`button`);
clearBtn.addEventListener(`click`, e => {
    let num = prompt(`How many of squares per side for the new grid?`);

    if (num === null) {
        return;
    } else if (num > 100 || num < 16) {
        alert(`Please enter a number less than 100 and larger than 16`);
        return;
    };

    container.innerHTML = ``;

    console.log(num);
});
