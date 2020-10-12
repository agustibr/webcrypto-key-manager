// https://github.com/diafygi/webcrypto-examples/

var algorithm = {
  name: "RSA-PSS", // "RSA-OAEP"
  modulusLength: 2048,
  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
  hash: {name: "SHA-256"}
}
var extractable = true;
let usages = ["sign", "verify"];
// var all_usages = ["encrypt", "decrypt", "sign", "verify", "deriveKey", "deriveBits", "wrapKey", "unwrapKey"];

document.getElementById('button-key_gen').onclick = function(){
  console.log("clicked! generateKey")
  generateKey();
}

document.getElementById('button-key_download').onclick = function(){
  console.log("clicked! downloadKey");
  downloadKey();
}

document.getElementById('button-key_import').onclick = function(){
  console.log("clicked! importKey");
  importKey("jwk", getFromLocalStorage("public")).then(function(){
    importKey("jwk", getFromLocalStorage("private"))
    .catch = function(e){
      console.log(e.message);
    }
  })
  .catch = function(e){
    console.log(e.message);
  }
}
