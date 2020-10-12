// https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto

var crypto = window.crypto || window.msCrypto;

crypto_subtle_support = function(){
  if(crypto.subtle) {
    console.log("Cryptography API Supported");
    return true;
  } else {
    alert("🚨 Cryptography API not Supported");
    return false;
  }
}
