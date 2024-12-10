document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribeBtn');

    subscribeBtn.addEventListener('mousemove', (e) => {
        const rect = subscribeBtn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        subscribeBtn.style.background = `
            radial-gradient(circle at ${x}px ${y}px, #44DCC3, #CBA135)
        `;
    });

    subscribeBtn.addEventListener('mouseleave', () => {
        subscribeBtn.style.background = 'linear-gradient(45deg, #44DCC3, #CBA135)';
    });
});

