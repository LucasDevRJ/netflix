const botaoAlterarTema = document.getElementById('botaoAlterarTema');

botaoAlterarTema.addEventListener('click', () => {
    if (botaoAlterarTema.src.includes('tema-claro.png')) {
        document.body.classList.toggle('tema-claro');
        botaoAlterarTema.src = 'assets/images/tema-escuro.png';
    } else {
        document.body.classList.remove('tema-claro');
        botaoAlterarTema.src = 'assets/images/tema-claro.png';
    }
});