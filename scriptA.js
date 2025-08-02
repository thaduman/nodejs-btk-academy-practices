// Private members


console.log(__filename); // scriptA dosyasının tam yolunu yazdırır.
console.log(__dirname); // dosyanın içinde bulunduğu klasörü verir.

// Public members
var firstName = "Taha";
var log = function(name){
    console.log(name);
}

//module.exports.name = firstName;
//module.exports.log = log;

exports = {
    name: firstName,
    log: log
}
