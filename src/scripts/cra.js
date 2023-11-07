// const leftSide = document.querySelector('.left-side')
// const rightSide = document.querySelector('.right-side')

// // Seletor de botão de iniciar chamada
// const iniciarChamadaButton = document.getElementById("iniciar-chamada");

// // Seletor de botão de encerrar chamada
// const encerrarChamadaButton = document.getElementById("encerrar-chamada");

// // Adicionar um ouvinte de evento ao botão de iniciar chamada
// iniciarChamadaButton.addEventListener("click", function () {
//     // Exibir o botão de encerrar chamada
//     encerrarChamadaButton.style.display = "block";
//     // Esconder o botão de iniciar chamada
//     iniciarChamadaButton.style.display = "none";
// });

// // Adicionar um ouvinte de evento ao botão de encerrar chamada
// encerrarChamadaButton.addEventListener("click", function () {
//     // Ocultar o botão de encerrar chamada
//     encerrarChamadaButton.style.display = "none";
//     // Exibir o botão de iniciar chamada
//     iniciarChamadaButton.style.display = "block";
// });

// document.querySelectorAll('button').forEach(e=>{
//     e.addEventListener("click", e =>{
//         if(e.target.id == 'iniciar-chamada'){
//             leftSide.classList.add('none')
//             rightSide.classList.add('large')
//             return
//         }  
//             leftSide.classList.remove('none')
//             rightSide.classList.remove('large')
        
//     })
// })

// Selecionar elementos HTML
const videoElement = document.querySelectorAll(".video-element");
// const placeholder = document.getElementById("placeholder");
const startRecordingButton = document.getElementById("start-recording");
const stopRecordingButton = document.getElementById("stop-recording");

// Variáveis para controle da gravação
let mediaStream;
let mediaRecorder;

// Função para iniciar a gravação da câmera
startRecordingButton.addEventListener("click", async () => {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

        videoElement.forEach(e =>{
            videoElement.srcObject = mediaStream;
            videoElement.style.display = "block";
            // placeholder.style.display = "none";
    
            mediaRecorder = new MediaRecorder(mediaStream);
    
            mediaRecorder.ondataavailable = function (event) {
                // Manipular os dados da gravação (por exemplo, salvar em um arquivo)
            };
    
            mediaRecorder.start();
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;

        })

    } catch (error) {
        alert("Erro ao acessar a webcam: " + error.message);
    }
});

// Função para parar a gravação
stopRecordingButton.addEventListener("click", () => {
    mediaRecorder.stop();
    mediaStream.getTracks().forEach(track => track.stop());
    videoElement.style.display = "none";
    placeholder.style.display = "block";
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
});

// Evento para marcar a consulta (implemente a lógica necessária)
// document.getElementById("marcar-consulta").addEventListener("click", () => {
//     // Implemente a lógica para marcar a consulta aqui
// });
