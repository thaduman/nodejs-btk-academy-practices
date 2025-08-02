const fs = require('fs');

/*
const files = fs.readdir('./', function(error, data) {
    if(error) {
        console.log(error);
    }else{
        console.log(data);
    }
});
*/

/*
const data = fs.readFile('index.html', 'utf8', function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
*/

/*
fs.writeFile('deneme.txt', 'HelloWorld', function(error){
    if(error){
        console.log(error);
    }else{
        console.log('dosya olusturuldu');
    }
});     // Önceki dosyayı siler ve yenisini oluşturur.
*/

/*
fs.appendFile('denem1.txt', 'hello world ', function(error){
    if(error){
        console.log(error);
    }else{
        console.log('dosya olusturuldu.');
    }
})      // Önceki dosyayı silmez üzerine yazar. */


/*
fs.unlink('denem1.txt', function(error){
    console.log('dosya silindi.');
})
*/

fs.rename('denem1.txt', 'deneme1.txt', function(error){
    console.log('dosya ismi degistirildi.');
})