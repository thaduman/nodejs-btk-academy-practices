const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if(req.url === '/api/products') {
        res.write('product list');
        res.end();
    }
});



server.listen(3000);
console.log('Listening port on 3000...');


/* Request ve Response tanımları
    Request(istek)= Senin bir istemci olarak sunucuya(server) gönderdiğin istektir.
                    Örnek: Tarayıcıya www.google.com yazdığında
                    aslında google'a bana sayfanı göster diye bir istekte bulunuyorsun.
                    HEADER -> Sunucuya kim olduğunu, ne istediğini, hangi formatta istediğini falan söylersin.
                    BODY -> Asıl Gönderilen içeriktir. Özellikle POST isteklerinde kullanılır.
                            Mesela bir formu doldurup "Gönder" diyorsan, işte yazdığın o veriler body'de taşınır.
                    
    Response(yanıt)= Sunucunun senin isteğine verdiği cevaptır.
                    Örnek: Google sunucusu da sana cevap olarak anasayfa verilerini gönderir.
    
    Örnek (Pizza Siparişi):
        Header -> "Ben Taha, pizzayı sıcak istiyorum, zeytin istemiyorum."
        Body -> "1 orta boy sucuklu pizza, 1 kola"
        Sunucu bu bilgileri alır, pizzanı hazırlar (response verir).                */ 