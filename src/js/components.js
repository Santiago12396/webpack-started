import '../css/components.css';

export const createTitle = () => {
    const h1 = document.createElement('h1');
    h1.textContent = ':)';

    document.body.insertBefore(h1, document.body.firstChild);
}