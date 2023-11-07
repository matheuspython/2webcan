document.addEventListener("DOMContentLoaded", function () {
    // Selecionar elementos HTML
    const videoElement = document.querySelectorAll(".video-element");
    const startRecordingButton = document.getElementById("start-recording");
    const placeholder = document.getElementById("placeholder");
    const consultaForm = document.getElementById("consulta-form");
    const finalizarConsultaButton = document.getElementById("finalizar-consulta");
    const consultaDados = document.getElementById("consulta-dados");
    const cpfDados = document.getElementById("cpf-dados");
    const hospitalDados = document.getElementById("hospital-dados");
    const situacaoDados = document.getElementById("situacao-dados");
    const dataDados = document.getElementById("data-dados");

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

                recording = true; // Atualiza o estado da gravação
            } catch (error) {
                alert("Erro ao acessar a webcam: " + error.message);
            }
        }
    });

    // Função para parar a gravação
    // Para parar a gravação, você pode adicionar um evento em um elemento específico, se necessário.
    // Se você desejar que a gravação seja interrompida quando o formulário é enviado, isso pode ser feito lá.

    // Evento para mostrar o formulário da consulta
    finalizarConsultaButton.addEventListener("click", () => {
        consultaForm.style.display = "none";
        consultaDados.style.display = "block";

        // Parar a gravação de vídeo (se necessário) pode ser feito aqui.
    });

    // Adicionar o código para exibir os dados do formulário na tela após o envio
    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Recupere os valores dos campos do formulário
        const cpfValue = document.getElementById("cpf").value;
        const hospitalValue = document.getElementById("hospital").value;
        const situacaoValue = document.getElementById("situacao").value;
        const dataValue = document.getElementById("data").value;
        const leftSide = document.querySelector('.left-side')
        const RightSide = document.querySelector('.right-side')
        leftSide.classList.add("hidden")
        RightSide.classList.add('large')

        // Exiba os valores na tela
        cpfDados.textContent = `CPF do Paciente: ${cpfValue}`;
        hospitalDados.textContent = `Hospital: ${hospitalValue}`;
        situacaoDados.textContent = `Situação do Paciente: ${situacaoValue}`;
        dataDados.textContent = `Data da Consulta: ${dataValue}`;

        consultaForm.style.display = "none";
        consultaDados.style.display = "block";
    });
});
