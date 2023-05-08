// copy URL in Markdown format
javascript: (function() {
  let inputElement = document.createElement('input');
  inputElement.id = 'markdown-copy';
  inputElement.value = `[${document.title}](${document.location.href})`;
  inputElement.type = 'text';
  inputElement.style.height = '0px';
  document.getElementsByTagName('body')[0].appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.remove();
})();