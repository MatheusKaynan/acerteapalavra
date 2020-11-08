var tela = 0;
var largura = 200;
var altura = 35;
let img;
function preload() {
img = loadImage('i01.jpg');
}

function setup() {
  createCanvas(650, 400);
  
}

function draw() {
  //botão do mouse//
if((mouseIsPressed) && mouseX > 220 && mouseX < 220 + largura && mouseY > 140 && mouseY < 140 + altura ){
  tela= 1
}
  if((mouseIsPressed) && mouseX > 220 && mouseX < 220 + largura && mouseY > 185 && mouseY < 185 + altura ){
  tela= 2;
}
  if((mouseIsPressed) && mouseX > 220 && mouseX < 220 + largura && mouseY > 235 && mouseY < 235 + altura ){
  tela= 3;
}
  //tela do menu com trés opções//
  textStyle(NORMAL);
     //menu inicial//
    if ( tela == 0){
    background(40, 145, 150);
    fill(480);
    text("ACERTE A PALAVRA", 320, 70);
    textAlign (CENTER);
    textSize(25);
    
    if ( mouseX > 220 && mouseX < 220 + largura && mouseY > 140 && mouseY < 140 + altura ){
      stroke(500);
      fill(50);
      rect(220, 140, largura, altura, 50);
    }
    
      fill(280);
      noStroke();
      text("Iniciar", 315, 168);
      
          //Instrução do jogo//
    if ( mouseX > 220 && mouseX < 220 + largura && mouseY > 185 && mouseY < 185 + altura ){
      stroke(500);
      fill(50);
      rect(220, 185, largura, altura, 50);
}
      fill(280);
      noStroke();
      text("Instrução", 315, 210);
      
         //Informações do jogo//
    if ( mouseX > 220 && mouseX < 220 + largura && mouseY > 235 && mouseY < 235 + altura ){
        stroke(500);
        fill(50);
        rect(220, 225, largura, altura, 50);
    }
  
        fill(280);
        noStroke();
        text("Informações", 320, 250);
    }
        //** jogo **//
    else if ( tela == 1){
      background(40, 145, 150);
      stroke(500);
      ellipse(500, 100, 40, 40);// cabeça
      line(0, 315, 650, 315);  //linha do chão
      line(500, 120, 500,220); // corpo do boneco
      line(500, 130, 470,170); // braço Dr
      line(500, 130, 535,170); // braço Eq
      line(500, 220, 470,260); // perna Dr
      line(500, 220, 535,260); // perna Eq
      stroke(100);
      fill(280);
      textSize(26);
      text("ACERTE A PALAVRA", 310, 70);
      
      if ( mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY < 345 + 100 ){
      stroke(500);
      fill(50);
      rect(52, 345, 100, altura, 50);
        
      }
      fill(280);
      noStroke();
      text("menu", 100, 370);
      
      if((mouseIsPressed) && mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY <= 345 + altura ){
  tela= 0;
}
      if((mouseIsPressed) && mouseX > 70 && mouseX < 60 + largura && mouseY > 370 && mouseY <= 370 + altura ){
  tela= 0;
}
    }
       //instrução do jogo//
    else if ( tela == 2){
      background(40, 145, 150);
      fill(20);
      stroke(20);
      textSize(26);
      text("Instrução", 320, 50);
      
      fill(20);
      textSize(16);
      textAlign(CENTER);
      text("  O jogo precisa de dois jogadores. o jogador 1 que iniciar a partida vai escolher a palavra ou frase e criar uma dica ou pista, para ajudar o seu oponente a acertar,  feito isso, o jogo se inicia e o jogador 2 terá que acertar, caso erre 6 vezes, perde o jogo. ao final da partida digite 1 para jogar novamente ou 2 para encerrar a partida. A perte a função menu para retornar ao menu principal. Bom jogo!!!", 100, 80, 500, 500 );
 
       
      if ( mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY < 345 + 100 ){
      stroke(500);
      fill(50);
      rect(52, 345, 100, altura, 50);
        
      }
      fill(280);
      noStroke();
      textSize(26);
      text("menu", 100, 370);
      
      if((mouseIsPressed) && mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY <= 345 + altura ){
  tela= 0;
}
      if((mouseIsPressed) && mouseX > 70 && mouseX < 60 + largura && mouseY > 370 && mouseY <= 370 + altura ){
  tela= 0;
}
      
    }
       //CREDITOS DO JOGO//
    else if ( tela == 3){
      background(40, 145, 150);
      image(img, 380,100,170,200);
      fill (20);
      textSize(16);
      noStroke();
      textAlign(LEFT);
      stroke(15);
      text("Esse jogo foi criado pelo aluno Matheus kaynan B. da Silveira, da turma de logica de programação. O mesmo foi desenvolvido para as habilidades, (EF02LP07) Escrever palavras, frases, textos curtos nas formas imprensa e cursiva e (EF02LP08) Segmentar corretamente as palavras ao escrever frases e textos.", 30, 100, 280, 280);
      
      fill(20);
      stroke(20);
      textSize(26);
      text("Créditos", 260,50);
       
      
if ( mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY <         345 + 100 ){
      stroke(500);
      fill(50);
      rect(52, 345, 100, altura, 50);
        
      }
      fill(280);
      noStroke();
      text("menu", 70, 370);
      
      if((mouseIsPressed) && mouseX > 52 && mouseX < 52 + 100 && mouseY > 345 && mouseY <= 345 + altura ){
  tela= 0;
}
}
    
}






