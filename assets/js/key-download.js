function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename + ".txt");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadKey() {
  exportKey().then(function(key){
    download("private_key_export", private_key_export);
    download("public_key_export", public_key_export);
  })
  .catch = function(e){
    console.log(e.message);
  }
}
