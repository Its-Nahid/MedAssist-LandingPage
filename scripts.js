document.addEventListener('DOMContentLoaded', () => {
    const logosCol = document.querySelector('.logos-col');
    if (!logosCol) return;

    const originalWidth = logosCol.scrollWidth;
    const computedStyle = window.getComputedStyle(logosCol);
    const gap = parseFloat(computedStyle.gap) || 40;
    const oneSetWidth = originalWidth + gap;

    const originalLogos = logosCol.innerHTML;
    logosCol.innerHTML = originalLogos + originalLogos + originalLogos + originalLogos;

    let scrollSpeed = 0.25;
    let scrollPos = 0;

    function animateScroll() {
        scrollPos += scrollSpeed;

        if (scrollPos >= oneSetWidth) {
            scrollPos -= oneSetWidth;
        }

        logosCol.style.transform = `translateX(-${scrollPos}px)`;
        requestAnimationFrame(animateScroll);
    }

    const scrollContainer = document.querySelector('.techstack-right');
    if (scrollContainer) {
        scrollContainer.addEventListener('mouseenter', () => {
            scrollSpeed = 0;
        });
        scrollContainer.addEventListener('mouseleave', () => {
            scrollSpeed = 0.25;
        });
    }

    animateScroll();
});
