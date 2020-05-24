const awan = document.querySelectorAll('.awan');
const corona = document.querySelectorAll('.corona');

let awanSebelumnya;

function randomAwan(awan){
    const a = Math.floor(Math.random() * awan.length);
    const aRandom = awan[a];
    if (aRandom == awanSebelumnya){
        randomAwan(awan);
    }
    awanSebelumnya = aRandom;
    return aRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanCorona(){
    const aRandom = randomAwan(awan);
    const wRandom = randomWaktu(300, 1000);
    aRandom.classList.add('muncul');
    setTimeout(() => {
        aRandom.classList.remove('muncul');
        munculkanCorona();
    }, wRandom);
}

