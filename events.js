const Logger = require('./logger');
const logger = new Logger();

// listener kayıt et
logger.on('connection', function(args){
    console.log('baglanti kuruldu.', args);
});


logger.log('Taha Duman login oldu.');