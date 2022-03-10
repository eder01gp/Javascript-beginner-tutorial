function sing(){
    var song;
    song = letit(4)+", whisper words of wisdow, "+letit(5)+", there will be an answer, "+letit(1);

    return song
}

function letit(number){
    let string = "let it be";
    
    for (i=1;i<number;i++){
        string = string.concat(', ', "let it be")
    }

    return string
}
//Your code above ^^^

console.log(sing());