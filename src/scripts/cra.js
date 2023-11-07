
// // Selecionar elementos HTML
// const videoElement = document.querySelectorAll(".video-element");
// // const placeholder = document.getElementById("placeholder");
// const startRecordingButton = document.getElementById("start-recording");
// const stopRecordingButton = document.getElementById("stop-recording");

// // Variáveis para controle da gravação
// let mediaStream;
// let mediaRecorder;

// // Função para iniciar a gravação da câmera
// startRecordingButton.addEventListener("click", async () => {
//     try {
//         mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

//         videoElement.forEach(e =>{
//             videoElement.srcObject = mediaStream;
//             videoElement.style.display = "block";
//             // placeholder.style.display = "none";
    
//             mediaRecorder = new MediaRecorder(mediaStream);
    
//             mediaRecorder.ondataavailable = function (event) {
//                 // Manipular os dados da gravação (por exemplo, salvar em um arquivo)
//             };
    
//             mediaRecorder.start();
//             startRecordingButton.disabled = true;
//             stopRecordingButton.disabled = false;

//         })

//     } catch (error) {
//         alert("Erro ao acessar a webcam: " + error.message);
//     }
// });

// // Função para parar a gravação
// stopRecordingButton.addEventListener("click", () => {
//     mediaRecorder.stop();
//     mediaStream.getTracks().forEach(track => track.stop());
//     videoElement.style.display = "none";
//     placeholder.style.display = "block";
//     startRecordingButton.disabled = false;
//     stopRecordingButton.disabled = true;
// });
 
// Selecionar elementos HTML
const videoElement = document.querySelectorAll(".video-element");
const startRecordingButton = document.getElementById("start-recording");
const stopRecordingButton = document.getElementById("stop-recording");
const placeholder = document.getElementById("placeholder"); // Adicione esta linha para selecionar o elemento com id "placeholder"

// Variáveis para controle da gravação
let mediaStream;
let mediaRecorder;

// Função para iniciar a gravação da câmera
startRecordingButton.addEventListener("click", async () => {
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

    } catch (error) {
        alert("Erro ao acessar a webcam: " + error.message);
    }
});

// Função para parar a gravação
stopRecordingButton.addEventListener("click", () => {
    mediaRecorder.stop();
    mediaStream.getTracks().forEach(track => track.stop());

    videoElement.forEach(video => {
        video.style.display = "none";
    });

    placeholder.style.display = "block"; // Certifique-se de que 'placeholder' esteja definido
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
});
