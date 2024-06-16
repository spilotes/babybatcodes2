function recarregarPagina() {
  location.reload();
}

// Define um intervalo de 30 minutos (30 minutos * 60 segundos * 1000 milissegundos)
const intervaloRecarregar = 30 * 60 * 1000;

// Chama a função para recarregar a página após o intervalo definido
setTimeout(recarregarPagina, intervaloRecarregar);
