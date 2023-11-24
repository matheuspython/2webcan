document.addEventListener("DOMContentLoaded", function () {
    // Selecionar elementos HTML
    const videoElement = document.querySelectorAll(".video-element");
    const startRecordingButton = document.getElementById("start-recording");
  
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
          
        });

        // Adicionar o código para exibir os dados do formulário na tela após o envio
      
   
;
