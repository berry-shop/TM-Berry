var element = document.getElementById('messageInput');
var maskOptions = {
  mask: '+38 (000) 000-00-00',
  lazy: false
}
var mask = new IMask(element, maskOptions);