const dino = document.querySelector('.dino');

let isJumping = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {// keycode 32 é o código da tecla espaço 
        if (!isJumping) {
            jump();
        }
    }
}
function jump() {
    isJumping = true;

    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }

            }, 20);

        } else {
            //subindo
            position += 20;

            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp);