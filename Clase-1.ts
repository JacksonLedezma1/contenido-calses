let palabra: string = "hello";

// pasar palabra a arreglo de códigos ASCII
let codigos: number[] = [];
for (let i: number = 0; i < palabra.length; i++) {
  codigos[i] = palabra.charCodeAt(i);
}

// normalizar mayúsculas a minúsculas (A–Z -> a–z)
for (let i: number = 0; i < codigos.length; i++) {
  if (codigos[i] >= 65 && codigos[i] <= 90) {
    codigos[i] = codigos[i] + 32;
  }
}

// contar ocurrencias por código
let conteo: { [key: number]: number } = {};
for (let i: number = 0; i < codigos.length; i++) {
  let c: number = codigos[i];
  if (conteo[c] === undefined) {
    conteo[c] = 1;
  } else {
    conteo[c] = conteo[c] + 1;
  }
}

// construir repetidas en orden alfabético por letra
let repetidas: string = "";
for (let codigo = 97; codigo <= 122; codigo++) {
  if (conteo[codigo] > 1) {
    for (let i: number = 0; i < codigos.length; i++) {
      if (codigos[i] === codigo) {
        repetidas = repetidas + palabra[i];
      }
    }
  }
}

// construir ordenadas (solo las que aparecen 1 vez) en orden alfabético
let ordenadas: string = "";
for (let codigo = 97; codigo <= 122; codigo++) {
  if (conteo[codigo] === 1) {
    for (let i: number = 0; i < codigos.length; i++) {
      if (codigos[i] === codigo) {
        ordenadas = ordenadas + palabra[i];
      }
    }
  }
}

let resultado: string = repetidas + ordenadas;
console.log(resultado);
