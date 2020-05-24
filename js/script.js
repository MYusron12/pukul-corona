const awan = document.querySelectorAll('.awan');
const corona = document.querySelectorAll('.corona');
const papanSkor = document.querySelector('.papan-skor');
const audio = document.querySelector('#audio');

let awanSebelumnya;
let selesai;
let skor;


function randomAwan(awan) {
    const a = Math.floor(Math.random() * awan.length);
    const aRandom = awan[a];
    if (aRandom == awanSebelumnya) {
        randomAwan(awan);
    }
    awanSebelumnya = aRandom;
    return aRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanCorona() {
    const aRandom = randomAwan(awan);
    const wRandom = randomWaktu(300, 1000);
    aRandom.classList.add('muncul');
    setTimeout(() => {
        aRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanCorona();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanCorona();
    setTimeout(() => {
        selesai = true;
    }, 50000);
}

function semprot(){
    skor++;
    this.parentNode.classList.remove('muncul');
    audio.play();
    papanSkor.textContent = skor;
}

corona.forEach(c => {
    c.addEventListener('click', semprot);
});