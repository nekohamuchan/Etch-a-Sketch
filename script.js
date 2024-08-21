const container = document.querySelector(`#container`);

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement(`div`);
    div.style.border = `1px solid black`;
    div.style.width = `10px`;
    div.style.height = `10px`;
    container.append(div);
};