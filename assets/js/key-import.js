// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
// var result = crypto.subtle.importKey(format, keyData, algorithm, extractable, usages);

var private_key_import = null;
var public_key_import = null;

const importKey = async (keyFormat, key_string) => {
  if(crypto_subtle_support() == false) {
    return false;
  }
  if(key_pair !== null) {
    alert("🔑 You already have Keys! No need to import them.");
    return false;
  }
  if(key_string === null) {
    alert("🚨No data to import, try again.");
    return false;
  }

  keyData = JSON.parse(key_string);

  import_keyData = {
    kty: keyData.kty,
    e: keyData.e,
    n: keyData.n,
    alg: keyData.alg,
    ext: keyData.ext
  }

  import_algorithm = {
    name: algorithm.name,
    hash: algorithm.hash
  }

  import_usages = ["verify"]

  if(keyFormat == "jwk"){
    console.log("importKeyFormat " + keyFormat);
    crypto.subtle.importKey(keyFormat, import_keyData, import_algorithm, extractable, import_usages)
    // .then(function(private_key){
    //   console.log("private_key_import: ", private_key);
    // })
    .catch = function(e){
      console.log(e.message);
    };
  }
}
