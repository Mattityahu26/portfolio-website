export function techStack(selector, delay = 0.05) {
    document.querySelectorAll(selector).forEach(target => {
        const chars = target.textContent.split("")
        target.textContent = '';

        chars.forEach((char, i) => {
            if( char === ' ') 
            { 
                target.appendChild(document.createTextNode(' '));
                return;
            }

            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * delay}s`;
            target.appendChild(span)
        }); 
    });
}