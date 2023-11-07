// Selecionar elementos HTML
const videoElement = document.querySelectorAll(".video-element");
const startRecordingButton = document.getElementById("start-recording");
const stopRecordingButton = document.getElementById("stop-recording");
const placeholder = document.getElementById("placeholder");

// Variáveis para controle da gravação
let mediaStream;
let mediaRecorder;
let recording = false; // Variável para controlar o estado da gravação

// Função para iniciar a gravação da câmera
startRecordingButton.addEventListener("click", async () => {
    if (!recording) {
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

            videoElement.forEach(video => {
                video.srcObject = mediaStream;
                video.style.display = "block";
            });

            mediaRecorder = new MediaRecorder(mediaStream);

            mediaRecorder.ondataavailable = function (event) {
                // Manipular os dados da gravação (por exemplo, salvar em um arquivo)
            };

            mediaRecorder.start();
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;
            stopRecordingButton.classList.remove("hidden"); // Mostra o botão de parar a gravação

            recording = true; // Atualiza o estado da gravação
        } catch (error) {
            alert("Erro ao acessar a webcam: " + error.message);
        }
    }
});

// Função para parar a gravação
stopRecordingButton.addEventListener("click", () => {
    if (recording) {
        mediaRecorder.stop();
        mediaStream.getTracks().forEach(track => track.stop());

        videoElement.forEach(video => {
            video.style.display = "none";
        });

        placeholder.style.display = "block";
        startRecordingButton.disabled = false;
        stopRecordingButton.disabled = true;
        stopRecordingButton.classList.add("hidden"); // Esconde o botão de parar a gravação

        recording = false; // Atualiza o estado da gravação
    }
});
