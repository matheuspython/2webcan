// document.addEventListener("DOMContentLoaded", function () {
//     // Selecionar elementos HTML
//     const videoElement = document.querySelectorAll(".video-element");
//     const startRecordingButton = document.getElementById("start-recording");
//     const consultaForm = document.getElementById("consulta-form");
//     const finalizarConsultaButton = document.getElementById("finalizar-consulta");
//     const consultaDados = document.getElementById("consulta-dados");
//     const cpfDados = document.getElementById("cpf-dados");
//     const hospitalDados = document.getElementById("hospital-dados");
//     const situacaoDados = document.getElementById("situacao-dados");
//     const dataDados = document.getElementById("data-dados");
//     const horarioDados = document.getElementById("horario-dados");
//     const mapaHospital = document.getElementById("mapa-hospital");

//     // Verificar se todos os elementos existem
//     if (videoElement && startRecordingButton &&
//         consultaForm && finalizarConsultaButton &&
//         consultaDados && cpfDados && hospitalDados && situacaoDados &&
//         dataDados && horarioDados && mapaHospital) {

//         // Variáveis para controle da gravação
//         let mediaStream;
//         let mediaRecorder;
//         let recording = false; // Variável para controlar o estado da gravação

//         // Função para iniciar a gravação da câmera
//         startRecordingButton.addEventListener("click", async () => {
//             if (!recording) {
//                 try {
//                     mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

//                     videoElement.forEach(video => {
//                         video.srcObject = mediaStream;
//                         video.style.display = "block";
//                     });

//                     mediaRecorder = new MediaRecorder(mediaStream);

//                     mediaRecorder.ondataavailable = function (event) {
//                         // Manipular os dados da gravação (por exemplo, salvar em um arquivo)
//                     };

//                     mediaRecorder.start();
//                     startRecordingButton.disabled = true;
//                     finalizarConsultaButton.disabled = false;
//                     recording = true; // Atualiza o estado da gravação
//                 } catch (error) {
//                     alert("Erro ao acessar a webcam: " + error.message);
//                 }
//             }
//         });

//         // Evento para mostrar o formulário da consulta e o mapa do hospital após o envio
//         finalizarConsultaButton.addEventListener("click", () => {
//             consultaForm.style.display = "block";
//             consultaDados.style.display = "none";

//             // Parar a gravação de vídeo
//             if (recording) {
//                 mediaRecorder.stop();
//                 mediaStream.getTracks().forEach(track => track.stop());

//                 videoElement.forEach(video => {
//                     video.style.display = "none";
//                 });

//                 startRecordingButton.disabled = false;
//                 recording = false; // Atualiza o estado da gravação
//             }

//             // Verifica se o hospital é válido e exibe o mapa correspondente
//             const hospitalValue = document.getElementById("hospital").value;
//             if (hospitalValue === "Emergency Care Alto Maracanã") {
//                 mapaHospital.style.display = "block";
//             }
//         });

//         // Adicionar o código para exibir os dados do formulário na tela após o envio
//         consultaForm.addEventListener("submit", function (event) {
//             event.preventDefault(); // Impede o envio padrão do formulário

//             // Recupere os valores dos campos do formulário
//             const cpfValue = document.getElementById("cpf").value;
//             const hospitalValue = document.getElementById("hospital").value;
//             const situacaoValue = document.getElementById("situacao").value;
//             const dataValue = document.getElementById("data").value;
//             const horarioValue = document.getElementById("horario").value;

//             // Exiba os valores na tela
//             cpfDados.textContent = `CPF do Paciente: ${cpfValue}`;
//             hospitalDados.textContent = `Hospital: ${hospitalValue}`;
//             situacaoDados.textContent = `Situação do Paciente: ${situacaoValue}`;
//             dataDados.textContent = `Data da Consulta: ${dataValue}`;
//             horarioDados.textContent = `Horário da Consulta: ${horarioValue}`;

//             consultaForm.style.display = "none";
//             consultaDados.style.display = "block";
//         });
//     } else {
//         console.error("Um ou mais elementos não foram encontrados no DOM.");
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    // Selecionar elementos HTML
    const videoElement = document.querySelectorAll(".video-element");
    const startRecordingButton = document.getElementById("start-recording");
    const consultaForm = document.getElementById("consulta-form");
    const finalizarConsultaButton = document.getElementById("finalizar-consulta");
    const consultaDados = document.getElementById("consulta-dados");
    const cpfDados = document.getElementById("cpf-dados");
    const hospitalDados = document.getElementById("hospital-dados");
    const situacaoDados = document.getElementById("situacao-dados");
    const dataDados = document.getElementById("data-dados");
    const horarioDados = document.getElementById("horario-dados");
    const mapaHospital = document.getElementById("mapa-hospital");

    // Verificar se todos os elementos existem
    if (videoElement && startRecordingButton &&
        consultaForm && finalizarConsultaButton &&
        consultaDados && cpfDados && hospitalDados && situacaoDados &&
        dataDados && horarioDados && mapaHospital) {

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
                    finalizarConsultaButton.disabled = false;
                    recording = true; // Atualiza o estado da gravação
                } catch (error) {
                    alert("Erro ao acessar a webcam: " + error.message);
                }
            }
        });

        // Evento para mostrar o formulário da consulta e o mapa do hospital após o envio
        finalizarConsultaButton.addEventListener("click", () => {
            consultaForm.style.display = "block";
            consultaDados.style.display = "none";

            // Parar a gravação de vídeo
            if (recording) {
                mediaRecorder.stop();
                mediaStream.getTracks().forEach(track => track.stop());

                videoElement.forEach(video => {
                    video.style.display = "none";
                });

                startRecordingButton.disabled = false;
                recording = false; // Atualiza o estado da gravação
            }

            // Verifica se o hospital é válido e exibe o mapa correspondente
            const hospitalValue = document.getElementById("hospital").value;
            if (hospitalValue === "Emergency Care Alto Maracanã") {
                mapaHospital.style.display = "block";
            }
        });

        // Adicionar o código para exibir os dados do formulário na tela após o envio
        consultaForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Recupere os valores dos campos do formulário
            const cpfValue = document.getElementById("cpf").value;
            const hospitalValue = document.getElementById("hospital").value;
            const situacaoValue = document.getElementById("situacao").value;
            const dataValue = document.getElementById("data").value;
            const horarioValue = document.getElementById("horario").value;
            const map = document.querySelector("#mapa-hospital")
            map.classList.remove("hidden")
            map.style.display= 'block'

            // Exiba os valores na tela
            cpfDados.textContent = `CPF do Paciente: ${cpfValue}`;
            hospitalDados.textContent = `Hospital: ${hospitalValue}`;
            situacaoDados.textContent = `Situação do Paciente: ${situacaoValue}`;
            dataDados.textContent = `Data da Consulta: ${dataValue}`;
            horarioDados.textContent = `Horário da Consulta: ${horarioValue}`;

            consultaForm.style.display = "none";
            consultaDados.style.display = "block";
        });
    } else {
        console.error("Um ou mais elementos não foram encontrados no DOM.");
    }
});
