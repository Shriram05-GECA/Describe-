const words = ["Courage", "Growth", "Believe", "Dream", "Achieve", "Inspire"];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#FF9A33"];

document.getElementById('fixed-word').addEventListener('click', () => {
    words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.innerText = word;
        wordElement.className = 'word';
        wordElement.style.color = colors[Math.floor(Math.random() * colors.length)];

        const randomX = Math.random() * window.innerWidth;
        const randomY = window.innerHeight + 50;

        wordElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
        document.getElementById('content').appendChild(wordElement);

        setTimeout(() => {
            wordElement.style.transform = `translate(${randomX}px, ${randomY - 200}px)`;
            wordElement.style.opacity = '1';
        }, 10);

        wordElement.addEventListener('transitionend', () => {
            wordElement.remove();
        });
    });
});
