// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
// const result = crypto.subtle.generateKey(algorithm, extractable, keyUsages);
// Parameters:
// 1. Asymmetric Encryption algorithm name and its requirements
// 2. Boolean indicating extractable. which indicates whether or not the raw keying
//    material may be exported by the application (http://www.w3.org/TR/WebCryptoAPI/#dfn-CryptoKey-slot-extractable)
// 3. Usage of the keys. (http://www.w3.org/TR/WebCryptoAPI/#cryptokey-interface-types)

var key_pair = null;

const generateKey = async (keyType = "RSA") => {
  if(crypto_subtle_support() == false) {
    return false;
  }
  if(key_pair !== null) {
    alert("🔑 You already have Keys! No need to generate them.");
    return false;
  }

  if(keyType == "RSA"){
    console.log("keyType RSA");

    crypto.subtle.generateKey( algorithm, extractable, usages )
    .then(function(key){
      key_pair = key;
      console.log("key.privateKey:", key.privateKey);
      console.log("key.publicKey:", key.publicKey);
      exportKey();
    })
    .catch = function(e){
      console.log(e.message);
    };
  } else {
    console.log("unsupported generator keyType 🙅");
  }
}
