export function createElementList(elements) {
    const div = document.createElement('div');
    div.classList.add('list-group');
    elements.forEach((el) => {
        const btn = createButtonElement(el);
        div.appendChild(btn);
    });
    return div;
}
export function createButtonElement(element) {
    const btn = document.createElement('button');
    btn.classList.add('list-group-item');
    btn.classList.add('list-group-item-action');
    if ('name' in element)
        btn.innerText = element.name;
    else
        btn.innerText = element.title;
    btn.addEventListener('click', function () {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
    return btn;
}
