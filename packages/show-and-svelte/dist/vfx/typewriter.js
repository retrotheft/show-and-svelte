import { stageState } from '../components/Stage.svelte';
export function typewriter(text, interval = 75, multipliers = { ' ': 2 }) {
    return (element) => {
        let animationFrameId = null;
        let currentIndex = 0;
        let lastTimestamp = 0;
        let nextInterval = 0;
        const lastUpdate = stageState.updates.at(-1);
        // Initialize
        currentIndex = 0;
        element.textContent = '';
        nextInterval = getInterval(text?.[0] || '');
        animationFrameId = requestAnimationFrame(animate);
        function getInterval(char) {
            return interval * (multipliers[char] || 1);
        }
        function animate(timestamp) {
            if (!text)
                return;
            if (currentIndex >= text.length)
                return;
            if (lastTimestamp + nextInterval <= timestamp) {
                lastTimestamp = timestamp;
                const char = text[currentIndex];
                element.textContent += char;
                currentIndex++;
                if (currentIndex < text.length) {
                    nextInterval = getInterval(text[currentIndex]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }
            else {
                // Not time for next character yet, keep checking
                animationFrameId = requestAnimationFrame(animate);
            }
        }
        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    };
}
