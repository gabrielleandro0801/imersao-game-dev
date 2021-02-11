function preload() {
  imagemCeu = loadImage('./imagens/cenario/ceu.jpg');
  imagemCenario = loadImage('./imagens/cenario/frente.png');
  imagemTelaInicial = loadImage('./imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('./imagens/assets/fonteTelaInicial.otf');
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png');
  imagemInimigo = loadImage('./imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('./imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('./imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('./imagens/assets/game-over.png');
  imagemVida = loadImage('./imagens/assets/coracVerde.png');
  somDoJogo = loadSound('./sons/fundo.mp3');
  somDoPulo = loadSound('./sons/somPulo.mp3');
  fita = loadJSON('./fita/fita.json');
  somPerdeu = loadSound('./sons/perdeu.mp3');
}