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
const scepterDamage = 14;
const entangleDamage = 9;
const dragonDamage = 47;
const starDamage = 25;
function scepterAttackBtn() {
    console.log('in scepterAttackBtn')
   
    if((mushroomHP - scepterDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= scepterDamage
    
    }
    
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')
   

}
function entangleAttackBtn() {

    if((mushroomHP - entangleDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= entangleDamage
    
    }
    
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')

}
function dragonAttackBtn() {

    if((mushroomHP - dragonDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= dragonDamage
    
    }
    
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')

}
function starAttackBtn() {

    if((mushroomHP - starDamage) <= 0) {
        mushroomHP = 0;
    }
    else {
        mushroomHP -= starDamage
    
    }
    $('#hp-meter').val(mushroomHP)
    $('.hp-text').text(mushroomHP + ' HP')

}