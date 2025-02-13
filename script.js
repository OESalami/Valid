// LOADER SCRIPT
setTimeout(() => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block';
}, 7000);


// RELOCATION OF BUTTON
const noButton = document.getElementById("no");
const buttonsContainer = document.querySelector(".buttons");

noButton.addEventListener("mouseover", () => {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Get random positions within the container
    const x = Math.random() * (containerRect.width - buttonWidth);
    const y = Math.random() * (containerRect.height - buttonHeight);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});