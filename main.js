document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.box');
    const img = document.querySelector('.box img');
    const imgH = img.height;
    const imgW = img.width;
    const glass = document.querySelector('.glass');
    const urlImg = './1.jpg';

    glass.style.backgroundImage = `url(${urlImg})`;
    glass.style.backgroundSize = `${imgW * 2}px ${imgH * 2}px`;
    
    document.addEventListener('mousemove', function(e) {
        let x = e.x;
        let y = e.y;
        let glassW = glass.offsetWidth / 2;
        let glassH = glass.offsetHeight / 2;
        
        let percX = x * 100 / imgW;
        let percY = y * 100 / imgH;
        
        glass.style.left = `${x - glassW}px`;
        glass.style.top = `${y - glassH}px`;
        
        glass.style.backgroundPosition = `${percX}% ${percY}%`;            
        console.log(glass.style.backgroundPosition);
        
    })
    
})