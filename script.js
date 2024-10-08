const container = document.querySelector(`#container`);

const makeGrids = num => {
    for (let i = 0; i < num; i++) {
        const line = document.createElement(`div`);
        line.classList.add(`line`);
    
        for (let i = 0; i < num; i++) {
            let opacity = 100;
            let random1 = Math.floor(Math.random() * 256);
            let random2 = Math.floor(Math.random() * 256);
            let random3 = Math.floor(Math.random() * 256);
            const div = document.createElement(`div`);
            div.classList.add(`grid`);
            div.addEventListener(`mouseenter`, e => {
                div.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
                div.style.opacity = `${opacity}%`; 
                opacity -= 10;
            });
            line.append(div);
        };
        container.append(line);
    };
};

makeGrids(16);

const clearBtn = document.querySelector(`button`);
clearBtn.addEventListener(`click`, e => {
    let num = prompt(`How many of squares per side for the new grid?`);

    if (num === null) {
        return;
    } else if (num > 100 || num < 16) {
        alert(`Please enter a number less than 100 and larger than 15`);
        return;
    };

    container.innerHTML = ``;
    makeGrids(num);
});
