let currentScene = 1;
const totalScenes = 5;
let autoTimer = null;

function showEnvelope() {
    document.getElementById('startStage').classList.add('hidden');
    document.getElementById('envelopeStage').classList.remove('hidden');
}

function openEnvelope() {
    const env = document.getElementById('envelope');
    if (env.classList.contains('open')) return;
    env.classList.add('open');

    setTimeout(() => {
        document.getElementById('envelopeStage').classList.add('hidden');
        document.getElementById('storyStage').classList.remove('hidden');
        startAutoPlay();
    }, 1050);
}

function startAutoPlay() {
    clearTimeout(autoTimer);
    if (currentScene < totalScenes) {
        autoTimer = setTimeout(() => {
            nextScene();
        }, 5500);
    }
}

function nextScene() {
    if (currentScene >= totalScenes) return;

    document.getElementById('scene' + currentScene).classList.add('hidden');
    currentScene++;
    document.getElementById('scene' + currentScene).classList.remove('hidden');

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentScene - 1);
    });

    if (currentScene === totalScenes) {
        document.getElementById('nextBtn').style.display = 'none';
    } else {
        startAutoPlay();
    }
}
