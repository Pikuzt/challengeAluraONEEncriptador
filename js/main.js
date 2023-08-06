// alert('funciona')

const validacion = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function text_encriptado() {
  let text = document.getElementById("text-in").value;
  text = text.toLowerCase();
  for (i = 0; i < validacion.length; i++) {
    text = text.replaceAll(validacion[i][0], validacion[i][1]);
  }
  document.getElementById("traduccion").innerHTML = text;
  limpiar();
}

function text_des_encriptado() {
  let text = document.getElementById("text-in").value;
  text = text.toLowerCase();
  for (i = 0; i < validacion.length; i++) {    
    text = text.replaceAll(validacion[i][1], validacion[i][0]);
  }
  document.getElementById("traduccion").innerHTML = text;
  limpiar();
}

function limpiar() {
  document.getElementById("text-in").value = "";
}
