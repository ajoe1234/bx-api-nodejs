const yargs = require('yargs');
const request = require('request');
const argv = yargs
    .option({
        c : {
            demand: true,
            alias: 'coin',
            describe: 'coin need to see price',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

const pairing = require('./pairing');
pairing.getPairing(argv.c,(error,resultPairing) => {
    if(error){
        console.log(error);
    } else {
        console.log('====================');
        console.log(`${resultPairing.primary_currency} - ${resultPairing.secondary_currency} :  ${resultPairing.last_price} `);
        console.log('====================');
    }
});
