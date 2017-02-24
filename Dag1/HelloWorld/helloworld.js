"use strict";
(function() {

    var jag = {
        namn: 'Ludvig Fjell'
        , ålder: 31
        , hårfärg: 'brun'
        , skola: {
            namn:'Medieinstitutet'
            ,klass:'FED16'
            ,kurser: [
                'HTML'
                ,'PHP'
                ,'UX'
                ,'JavaScript'
            ]
        }
        , toString: function() {
            return 'Jag heter ' + this.namn;
        }
    }

    alert( jag );
 

})();







   /*
    var minArray = [
                    'hamster'
                    ,'hund'
                    ,'katt'
                   ];
    console.log(minArray);

    minArray.pop(); // tar bort sista
    minArray.push('råtta');

    minArray.shift() // tar bort första
    minArray.unshift('häst');

    console.log(minArray);
    */


    // minArray[0] = 'hund';
    // minArray[1] = 'katt';
    // minArray[2] = 'hamster';



/*

var namn = 'Olle';
function person() {
   var namn = 'Stina';
    var prata = function() {
        alert('Hej ' + namn);
    }
    
    console.log('Personen heter ' + namn);
    prata();
}

person();
console.log('variabel namn = ' + namn);

*/





/*
console.log('start');

var varTredje = function() {
    console.log('efter 3 sekunder!');
    setTimeout( varTredje , 3000 );
}

var sekund = 0;
var timerId = setInterval( function() {
    console.log('sekund:' + ++sekund);
} , 1000 );


//clearTimeout(timerId);

console.log('slut');


*/






























/*

var minFunktion = function(a, b, callback) {
  if (!a) {
    return;
  }
  callback(a+b);
    
}



minFunktion(123,123, function(resultat) {
    console.log('jag fick värde:' + resultat);
});
*/
// alert( summera(123, 543) );




/*


for ( var i = 0 ; i < 10 ; i++ ) {
    console.log('värde: ' + i);
    i++;
}


while ( i < 10 ) {
    console.log('värde: ' + i);
    i++;
}


do {
    console.log('värde: ' + i);
    i++;
} while ( i < 10 )


console.log('färdig!');

*/
/*
 var str = prompt('hej!');

switch ( str.toUpperCase() ) {
 
    case 'HEJ' :
   
       alert('sluta härmas!'); 
       break;
    case 'MORS' :
        alert('morsning korsning!');
        break;
    default:
        alert('jag förstod inte!');
        break;
}



*/





/*
if ( str === 'hej' || str === 'Hej' ) {
    alert('sluta härmas!');
} else if ( str === 'mors' ) {
    alert('morsning-korsning!');
} else if ( str === 'mors' ) {
    alert('korsning!');
} else {
    alert('jag förstod inte!');
}
*/







/*


var fornamn = prompt('Vad är ditt förnamn?');
var efternamn = prompt('efternamn?');
var ålder = 31;

if ( !(fornamn === 'Ludvig' && efternamn === 'Fjell' && ålder === 31) ) {
      alert('hi pleb!');
}


*/

//fornamn && prompt('vad är ditt efternamn?');


// if (!fornamn) {
//     fornamn = 'Annonym';
// }




//console.log("Hej världen!");






