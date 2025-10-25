document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o botão de RSVP e o elemento da nota
    const btnRsvp = document.getElementById('btn-rsvp');
    const notaRsvp = document.getElementById('nota-rsvp');

    // 2. Adiciona um "ouvinte de evento" (event listener) de clique no botão
    btnRsvp.addEventListener('click', function() {
        
        // Simulação de confirmação de presença (pode ser substituído por um link real do WhatsApp ou Google Forms)
        
        const nomeConvidado = prompt("Por favor, digite seu nome para confirmar:");
        
        if (nomeConvidado) {
            // Se o usuário digitou um nome, mostra a mensagem de confirmação
            notaRsvp.textContent = `Obrigado(a), ${nomeConvidado}! Sua presença foi registrada. Te esperamos lá! 🎉`;
            notaRsvp.style.color = '#28a745'; // Altera a cor para verde
            
            // Opcional: Desabilita o botão para evitar cliques múltiplos
            btnRsvp.disabled = true;
            btnRsvp.textContent = 'Presença Confirmada!';
            btnRsvp.style.backgroundColor = '#90ee90'; // Mudar a cor para indicar desabilitação
            
        } else if (nomeConvidado === "") {
            // Se o usuário clicou e deixou em branco
             alert("Por favor, digite um nome para confirmar.");
        } else {
            // Se o usuário cancelou o prompt
            notaRsvp.textContent = 'Confirmação cancelada. Esperamos que você possa ir! 😊';
            notaRsvp.style.color = '#ff4141'; // Altera a cor para vermelho
        }
    });

    // *DICA: Para uma funcionalidade real de RSVP, você trocaria a lógica acima por:
    // 1. Abrir um link do Google Forms.
    // 2. Redirecionar para um chat do WhatsApp com uma mensagem pré-pronta.
});