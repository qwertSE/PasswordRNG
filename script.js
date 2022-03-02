
function rng(qty) {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const especiais = "!@#$%&*";
  let pw = "";
  let sorteio = 0;

  //Checando a escolha dos caracteres da senha.
  let checkboxLetras = document.getElementById("letras");
  let checkboxNumeros = document.getElementById("numeros");
  let checkboxEspeciais = document.getElementById("especiais");

  //Gerador de senha.
  if (
    checkboxLetras.checked ||
    checkboxNumeros.checked ||
    checkboxEspeciais.checked
  ) {
    if (qty >= 4 && qty <= 32) {
      for (var i = 0; i <= qty - 1; ) {
        sorteio = Math.floor(Math.random() * 3) + 1;

        if (checkboxLetras.checked & (sorteio == 1)) {
          pw += new String(letras[Math.floor(Math.random() * letras.length)]);
          i++;
        } else if (checkboxNumeros.checked & (sorteio == 2)) {
          pw += new String(Math.floor(Math.random() * 10));
          i++;
        } else if (checkboxEspeciais.checked & (sorteio == 3)) {
          pw += new String(
            especiais[Math.floor(Math.random() * especiais.length)]
          );
          i++;
        }
      }
      document.querySelector(".content__pw-rng").innerHTML = pw;
      
    }
    else{
      document.querySelector(".content__pw-rng").innerHTML =
      "A senha precisa ter no mínimo 4 e no máximo 32 caracteres";
    }
  } else {
    document.querySelector(".content__pw-rng").innerHTML =
      "Você deve escolher pelo menos uma opção!";
  }
}
