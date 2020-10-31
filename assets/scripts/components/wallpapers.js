const wallpaper = ['imgs/fisher.png', 'imgs/dots.png', 'imgs/blocks.png', 
'imgs/boxes-dashed.png', 'imgs/ball.png', 'imgs/stairs.png', 'imgs/green-stone.png', 'imgs/stairs.png'],
    sideImage = document.getElementById('screen__picture');

const randomNumber = mx => Math.floor(Math.random() * mx);
    
window.onload = (() => {
    sideImage.style.backgroundImage = `url(${wallpaper[randomNumber(7)]})`;
});