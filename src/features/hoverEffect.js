function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
    let img = card.querySelector('img');
    let div = card.querySelector('div')
    let imgRect = card.getBoundingClientRect();
    let width = imgRect.width;
    let height = imgRect.height;
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, 180, -25, 25);
    let rotateX = map(mouseY, 0, 250, 25, -25);
    let brightness = map(mouseY, 0, 250, 1.5, 0.4);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
    div.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    div.style.filter = `brightness(${brightness})`;
}

var cards = document.querySelectorAll('.student-merit-container');

cards.forEach((card) => {
    card.addEventListener('mousemove', (ev) => {
        Card3D(card, ev);
    });

    card.addEventListener('mouseleave', (ev) => {
        let img = card.querySelector('img');
        let div = card.querySelector('div')

        img.style.transform = 'rotateX(0deg) rotateY(0deg)';
        img.style.filter = 'brightness(1)';
        div.style.transform = 'rotateX(0deg) rotateY(0deg)';
        div.style.filter = 'brightness(1)';
        
    });
});

//Source Code:
//https: //codepen.io/nelsonr/pen/WNQaZPb