var notes = {
    c: document.querySelector("#cAudio"),
    d: document.querySelector("#dAudio"),
    e: document.querySelector("#eAudio"),
    f: document.querySelector("#fAudio"),
    g: document.querySelector("#gAudio"),
    a: document.querySelector("#aAudio"),
    b: document.querySelector("#bAudio")
}
function playNote(letter){
    // console.log(letter)
    notes[letter].currentTime = 0;
    notes[letter].play()

}

document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', function(){
        playNote(this.id)
    })
})

// document.querySelector('#c').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#d').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#e').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#f').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#g').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#a').addEventListener('click', function(){
//         playNote(this.id)
// })
// document.querySelector('#b').addEventListener('click', function(){
//         playNote(this.id)
// })

document.addEventListener("keydown", function(event){
    console.log(event)
    if(event.keyCode === 65) {
        // console.log("You clicked the D key")
        playNote("c")
    }
    if(event.keyCode === 83) {
        // console.log("You clicked the D key")
        playNote("d")
    }
    if(event.keyCode === 68) {
        // console.log("You clicked the D key")
        playNote("e")
    }
    if(event.keyCode === 70) {
        // console.log("You clicked the D key")
        playNote("f")
    }
    if(event.keyCode === 71) {
        // console.log("You clicked the D key")
        playNote("g")
    }
    if(event.keyCode === 72) {
        // console.log("You clicked the D key")
        playNote("a")
    }
    if(event.keyCode === 74) {
        // console.log("You clicked the D key")
        playNote("b")
    }
})