function dragstart_handler(ev) {
  // Adiciona o id do elemento alvo para o objeto de transferência de dados
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
 }
 function dragover_handler(ev) {
  ev.preventDefault();
  // Define o dropEffect para ser do tipo move
  ev.dataTransfer.dropEffect = "move"
 }
 function drop_handler(ev) {
  ev.preventDefault();
  // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
 }