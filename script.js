

// First step - Red and Black 

// for (var i = 0; i < 63; i++){
//     if(i % 2 === 0){
//     createTileBlack()
//     } else {
//     createTileRed()
//     }
// }


// function createTileBlack(){
//     var tile = document.createElement('div')
//     tile.style.width = '11.1%'; 
//     tile.style.paddingBottom= '11.1%'; 
//     tile.style.backgroundColor = 'black';
//     tile.style.cssFloat = 'left';
//     document.body.appendChild(tile)
// }

// function createTileRed(){
//     var tile = document.createElement('div')
//     tile.style.width = '11.1%'; 
//     tile.style.paddingBottom= '11.1%'; 
//     tile.style.backgroundColor = 'Red';
//     tile.style.cssFloat = 'left';
//     document.body.appendChild(tile)
// }
    


// Second Step Random Colors 


// for (var i =0; i < 63 ; i++ ){
//     createTileRandom()
// }

// function createTileRandom(){
// var tile = document.createElement('div')
// var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
// tile.style.width = '11.1%'; 
// tile.style.paddingBottom= '11.1%'; 
// tile.style.backgroundColor = randomColor;
// tile.style.cssFloat = 'left';
// document.body.appendChild(tile)
// }



// Third Step Gradient 


// for (var i = 0; i < 63; i++){
//     if(i % 2 === 0){
//     createTileBlack()
//     } else {
//     createTileRed()
//     }
// }
// changeBackgroundColor()

// //document.body.style.backgroundColor ='yellow'
// function createTileBlack(){
//     var tile = document.createElement('div')
//     tile.style.width = '11.1%'; 
//     tile.style.paddingBottom= '11.1%'; 
//     tile.style.backgroundColor = 'black';
//     tile.style.cssFloat = 'left';
//     tile.style.opacity ='0.3'
//     document.body.appendChild(tile)

// }

// function createTileRed(){
//     var tile = document.createElement('div')
//     tile.style.width = '11.1%'; 
//     tile.style.paddingBottom= '11.1%'; 
//     tile.style.backgroundColor = 'red';
//     tile.style.cssFloat = 'left';
//     tile.style.opacity ='0.3'
//     document.body.appendChild(tile)

// }
    
// function changeBackgroundColor() {
//     document.body.style.backgroundImage = "linear-gradient(to bottom, blue, white)"}


// Step four Flashing

for (var i =0; i < 63 ; i++ ){
    createTileRandom()
   setTimeout(()=> location.reload(), 2000)
}

function createTileRandom(){
var tile = document.createElement('div')
setTimeout(() => {

    }, 1000);
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
tile.style.width = '11.1%'; 
tile.style.paddingBottom= '11.1%'; 
tile.style.backgroundColor = randomColor;
tile.style.cssFloat = 'left';
document.body.appendChild(tile)
}




// Step five Audio / works when you refresh the page and press tab due to restrictions from chrome browser. 

// for (var i =0; i < 63 ; i++ ){
//     createTileRandom()
// }

// function createTileRandom(){
// var tile = document.createElement('div')
// var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
// tile.style.width = '11.1%'; 
// tile.style.paddingBottom= '11.1%'; 
// tile.style.backgroundColor = randomColor;
// tile.style.cssFloat = 'left';
// document.body.appendChild(tile)
// }

// var music = new Audio('Eminem_Lose_Yourself_HD_.mp3')
// music.loop = true;   

// music.play();   






// var sound = new Howl({
//     src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
//     volume: 1.0,
//     onend: function () {
//       alert('We finished with the setup!');
//     }
//   });
//   sound.play()


// function addAudio() {
//     let audio = document.createElement('audio');
//     audio.src = 'Eminem_Lose_Yourself_HD_.mp3';
//     audio.autoplay = true;
//     document.body.appendChild(audio);
// }
// addAudio();  
