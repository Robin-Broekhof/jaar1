var aantalSmall = prompt('hoeveel small pizza wilt u bestellen');//amount of small pizza
var aantalMedium = prompt('hoeveel medium pizza wilt u bestellen');//amount of medium pizza
var aantalLarge = prompt('hoeveel large pizza wilt u bestellen');//amount of large pizza

const small = 6;//price of small pizza
const medium = 8;//price of medium pizza
const large = 10;//price of large pizza

document.write('small pizza price €6' + '<br>')//text of price of one small pizza
document.write('medium pizza price €8' + '<br>')//text of price of one medium pizza
document.write('large pizza price €10' + '<br>' + '<br>')//text of price of one large pizza


document.write(aantalSmall + ' small pizza ' + '<br>')//text of amount of small pizza
document.write(aantalMedium + ' medium pizza ' + '<br>')//text of amount of medium pizza
document.write(aantalLarge + ' large pizza ' + '<br>' + '<br>')//text of amount of large pizza

var priceSmall = parseInt (aantalSmall * small)//total price of small pizza
var priceMedium = parseInt (aantalMedium * medium)//total price of medium pizza
var priceLarge = parseInt (aantalLarge * large)//total price of large pizza


document.write(aantalSmall + '*' + small + '=' + priceSmall + '<br>')//text of price and calculation of small pizza
document.write(aantalMedium + '*' + medium + '=' + priceMedium + '<br>')//text of price and calculation of medium pizza
document.write(aantalLarge + '*' + large + '=' + priceLarge + '<br>')//text of price and calculation of large pizza

var totalPrice = (priceSmall + priceMedium + priceLarge)//total price of all three pizza sizes combined

document.write(priceSmall + '+' + priceMedium + '+' + priceLarge + '=' + totalPrice)//text of all prices combined













