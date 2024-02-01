document.addEventListener('DOMContentLoaded', () => {
    fetch('json/sentences.json')
        .then(response => response.json())
        .then(data => {
            const sentences = data.sentences;
            const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
            document.getElementById('random-sentence').textContent = randomSentence;
        })
        .catch(error => console.error('Error loading sentences:', error));
});
