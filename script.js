$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    $('#scepter').on('click',scepterAttackBtn);
    $('#entangle').on('click',entangleAttackBtn);
    $('#dragon').on('click',dragonAttackBtn);
    $('#star').on('click',starAttackBtn);



    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
let mushroomHP = 100;
let playerAP = 100;
const scepterDamage = 14;
const entangleDamage = 9;
const dragonDamage = 47;
const starDamage = 25;

const scepterCost = 12;
const entangleCost = 23;
const dragonCost = 38;
const starCost = 33;

//our buttons make sure mushroom hp goes down with each attack and player AP goes down too
function scepterAttackBtn() {
    console.log('in scepterAttackBtn')
    if(mushroomHP === 0 || playerAP === 0) {
        return;
       }
   
    if((mushroomHP - scepterDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= scepterDamage
    
    }
    
    if((playerAP - scepterCost) <= 0) { //playerAP-scepterCost
        playerAP = 0;
   }
   else {
    playerAP -= scepterCost //playerAP= playerAP -scepterCost
   }
  
    
   $('#ap-meter').val(playerAP)
   $('.ap-text').text(playerAP + ' AP')
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')
    Animation()

}
function entangleAttackBtn() {
    if(mushroomHP === 0 || playerAP === 0) {
        return;
       }

    if((mushroomHP - entangleDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= entangleDamage
    
    }
    if((playerAP - entangleCost) <= 0) { 
        playerAP = 0;
   }
   else {
    playerAP -= entangleCost 
   }
  
    $('#ap-meter').val(playerAP)
    $('.ap-text').text(playerAP + ' AP')
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')
     Animation()
}
function dragonAttackBtn() {
    if(mushroomHP === 0 || playerAP === 0) {
        return;
       }

    if((mushroomHP - dragonDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= dragonDamage
    
    }
    if((playerAP - dragonCost) <= 0) { 
        playerAP = 0;
   }
   else {
    playerAP -= dragonCost 
   }
  
    $('#ap-meter').val(playerAP)
    $('.ap-text').text(playerAP + ' AP')
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')
    Animation()
}
function starAttackBtn() {
    if(mushroomHP === 0 || playerAP === 0) {
        return;
       }

    if((mushroomHP - starDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= starDamage
    
    }
    if((playerAP - starCost) <= 0) { 
        playerAP = 0;
   }
   else {
    playerAP -= starCost 
   }
   

    $('#ap-meter').val(playerAP)
    $('.ap-text').text(playerAP + ' AP')
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')
    Animation()

}

function Animation() {
    //player lost
    
    if(playerAP === 0) {
        $('.freaky-fungus').removeClass('walk').addClass('jump');

    }
    //player won
    if(mushroomHP === 0) {
        $('.freaky-fungus').removeClass('walk').addClass('dead');
        
    }
    //making sure our buttons are disabled 
    if(playerAP === 0)  {
        $('#dragon').addClass('disabled');
        $('#star').addClass('disabled');
        $('#scepter').addClass('disabled');
        $('#entangle').addClass('disabled');
    }

    $('.ap-text').text(playerAP + ' AP')
    $('.hp-text').text(mushroomHP + ' HP')

}
