
var MAX_CARDS = 24;
var cards = [];
var cardSelected = false;
var openButtonId = 0;
var openPairCount = 0;

function initCards(){
    cards = [];
    openButtonId = 0;
    cardSelected = false;
    document.getElementById("message").innerHTML = "";
    
    for( var i = 0; i < MAX_CARDS; i++ ){
	document.getElementById("b" + i).value = "?";
	
	var flag = true;
	while( flag ){
	    var cardNumber = Math.floor(Math.random() * MAX_CARDS);
	    if( cards[cardNumber] == undefined ){
		cards[cardNumber] = Math.floor(i / 2);
		flag = false;
	    }
	}
	
    }

    document.getElementById("start").disabled = true;
}

function flip(num){
    if( document.getElementById("b" + num).value != "?" ){
	return;
    }
    
    document.getElementById("b" + num).value = cards[num];

    if( cardSelected ){
	if( cards[openButtonId] == cards[num] ){
	    // 正解
	    openPairCount++;
	    console.log(openPairCount);
	    if( openPairCount >= (MAX_CARDS/2) ){
		// Game Clear
		document.getElementById("start").disabled = false;
		document.getElementById("message").innerHTML = "clear";
	    }
	    
	} else {
	    // 不正解
	    setTimeout(function() {
		document.getElementById("b" + openButtonId).value = "?";
		document.getElementById("b" + num).value = "?";
	    }, 500);
	}

	cardSelected = false;
	
    } else {
	openButtonId = num;
	cardSelected = true;
    }
}