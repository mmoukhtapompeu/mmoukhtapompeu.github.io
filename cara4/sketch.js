// Farem moviments repetitius gràcies al sinus i cosinus que produiran canvis de color repetitius o moviments repetitius de la boca o els ulls o tota la cara o les pupil·les, etc.
// Crearem unes variables: canvipetit que canviarà de -8 a +8, canvimitja que canviarà de -15 a +15, canvigran que canviarà de -50 a +50, canvimoltgran que canviarà de -127 a +127.

function setup() {
  createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
}

function draw() {
  
  let x = 20 * noise(0.005 * frameCount);
  //Genera números aleatoris però seguint un soroll Perlin,
 // ésa
  let y = 100 * noise(0.005 * frameCount + 10000);
  let z = 400 * noise(0.005* frameCount)
let coloraleatori=random (0,255); 
  print(x);

let canvipetit=sin(frameCount*0.05)*8;
let canvimitja=sin(frameCount*0.05)*25;
let canvigran=sin(frameCount*0.05)*50;
let canvimoltgran=sin(frameCount*0.05)*127;
//print(canvimoltgran);
  frameRate (5);
  background (74+y*10,10,250); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).
 
  fill (74-coloraleatori, coloraleatori, 154); // Color Cara.
  ellipse (300,300,200,250); // Cara. El primer número estre paréntesis és la posició x del centre del el·lipse, el segon número és la posició i alçada del centre de l'el·lipse, el tercer número és l'amplada de l'el·lipse i el quart número és l'alçada de l'el·lipse.
 
  fill (255,255,255); // Color Ull Esquerra. Funciona com el background.
  ellipse (260,270,60,30-canvipetit); // Ull Esquerra.
  fill (18, 18, 199); // Color Iris Esquerra.
  circle (260,270,25+canvipetit/16) // Iris Esquerra.
  fill (0, 0, 0); // Color Pupila Esquerra.
  circle (260,270,10); // Pupila Esquerra.
  noFill (); // Treure Color Cella Esquerra.
  arc (260,240-canvipetit,50,10,PI,0); // Cella Esquerra.
  fill (255, 255, 255); // Color Ull Dret.
  ellipse (340,270,60,30-canvipetit); // Ull Dret.
  //fill (99, 64, 18); // Color Iris Dret.
  fill (260,270,10)
  circle (340,270,25); // Iris Dret.
  fill (0,0,0); // Color Pupila Dreta.
  circle (340,270,10); // Pupila Dreta.
  noFill (); // Treure Color Cella Dreta.
  arc (340,240-canvipetit,50,10,PI,0); // Cella Dreta.
  
 
  fill(252,124,106); // Color Boca.
  arc (300,360,100,40-canvimitja,0,PI); line(250,360,350,360)// Boca. Funciona com el el·lipse els primers quatre números i els dos últims són 0 PI o PI,0.
  
  fill (191, 144, 105); // Color Nas Ombra +.
  triangle (320,340,300,350,280,340); // Nas Ombra +.
  fill (230,173,125); // Color Nas Ombra -.
  triangle (320,340,300,300,280,340); // Nas Ombra -.
  fill (242, 204,174); // Color Nas Llum.
  triangle (300,340,300,300,280,340); // Nas Llum.



}
