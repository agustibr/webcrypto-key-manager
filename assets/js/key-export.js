// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
// var result = crypto.subtle.exportKey(format, key);

var private_key_export = null;
var public_key_export = null;

const exportKey = async (keyFormat = "jwk", keys = key_pair) => {
  if(crypto_subtle_support() == false) {
    return false;
  }

  if(keys == null) {
    alert("🚨First you must generate/import the Keys");
    return false;
  }

  if(keyFormat == "jwk"){
    console.log("exportKeyFormat " + keyFormat);
    crypto.subtle.exportKey(keyFormat, keys.privateKey).then(function(private_key){
      private_key_export = JSON.stringify(private_key);
      saveInLocalStorage("private", private_key_export)
    }).catch = function(e){
      console.log(e.message);
    }

    crypto.subtle.exportKey(keyFormat, keys.publicKey).then(function(public_key){
      public_key_export = JSON.stringify(public_key);
      saveInLocalStorage("public", public_key_export);
    }).catch = function(e){
      console.log(e.message);
    };
  } else {
    console.log("unsupported exportKey Format 🙅");
  }
}
