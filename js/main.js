const container = document.querySelector(".container");
let i;
for (let i = 0; i <= 120; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("blocks");
    container.appendChild(blocks)
    
}
function generate(){
    anime({
        targets : ".blocks" , 
        translateX : function(){
            return anime.random(-700, 700)

        },
        translateY : function(){
            return anime.random(-700, 700)

        },
        scale: function(){
            return anime.random(1,5)
        }
    })
}
generate()