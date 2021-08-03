function bringSingara(taka){
    console.log('Singara er jonno ' + taka + ' taka dise');
    var singaraPirce = 10;
    var singaraQuantity = taka/singaraPirce;
    return singaraQuantity;
}

var money = 250;
var q = bringSingara(money);
console.log('ami total ' + q + ' ta Singara kinsi');