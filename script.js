  // Função para controlar o redimensionamento da tela e fechar o menu quando a tela for grande
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // Se a tela for maior que 768px, desmarque o checkbox
        document.getElementById('menu-toggle').checked = false;
    }
});

