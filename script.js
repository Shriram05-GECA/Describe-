const words = ["Courage", "Growth", "Believe", "Dream", "Achieve", "Inspire"]; // Your custom words
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#FF9A33"]; // Possible colors

document.getElementById('fixed-word').addEventListener('click', () => {
    words.forEach(word => {
        const wordElement = document.createElement('span');
        wordElement.innerText = word;
        wordElement.className = 'word';
        wordElement.style.color = colors[Math.floor(Math.random() * colors.length)]; // Random color

        // Calculate a random angle and distance for the popping effect
        const angle = Math.random() * 2 * Math.PI; // Random angle
        const distance = Math.random() * 100 + 50; // Random distance from the center

        // Calculate the starting position based on the angle and distance
        const startX = (window.innerWidth / 2) + Math.cos(angle) * distance;
        const startY = (window.innerHeight / 2) + Math.sin(angle) * distance;

        // Set the initial position of the word
        wordElement.style.transform = `translate(${startX}px, ${startY}px)`; 
        document.getElementById('content').appendChild(wordElement);

        // Trigger the animation after a brief delay
        setTimeout(() => {
            wordElement.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2 - 200}px)`; // Pop towards the center
            wordElement.style.opacity = '1'; // Fade in
        }, 10);

        // Remove the word element after the animation completes
        wordElement.addEventListener('transitionend', () => {
            wordElement.remove();
        });
    });
});
