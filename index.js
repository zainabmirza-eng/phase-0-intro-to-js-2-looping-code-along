const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, eventName){
    const cards = [];
    for (let i=0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards;
}
const names = ['Alice', 'Bob',  'Charlie'];
const  eventName = 'Birthday';
console.log(writeCards(names, eventName));


function countDown(){
    let countdown = 10;
    while (countdown >= 0){
        console.log(countdown--);
    }
}



countDown();

