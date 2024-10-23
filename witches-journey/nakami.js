
const spriteSheet = new Image();
spriteSheet.src = 'sheet.png';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let images = {//開始地点x,開始地点y,そこからの幅,そこからの高さ
    player:{
        front:[0,0,190,190],
        back: [180,0,190,190],
        left1:[360,0,190,190],
        left2:[690,0,190,190],
        right1:[520,0,190,190],
        right2:[860,0,190,190],
    },
};
function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
addEventListener('keydown', async(event) => {
    switch(event.key){
        case 'ArrowUp':
        case 'w':
            angle = 0;
            drawSprite(...images.player.back,0,0,300,300);
            break;
        case 'ArrowLeft':
        case 'a':
            drawSprite(...images.player.left1,0,0,300,300);
            await delay(100);
            drawSprite(...images.player.left2,0,0,300,300);
            await delay(100);
            if(angle == 0){
                drawSprite(...images.player.back,0,0,300,300);
            }else{
                drawSprite(...images.player.front,0,0,300,300);
            }
            break;
        case 'ArrowDown':
        case 's':
            angle = 1;
            drawSprite(...images.player.front,0,0,300,300);
            break;
        case 'ArrowRight':
        case 'd':
            drawSprite(...images.player.right1,0,0,300,300);
            await delay(100);
            drawSprite(...images.player.right2,0,0,300,300);
            await delay(100);
            if(angle == 0){
                drawSprite(...images.player.back,0,0,300,300);
            }else{
                drawSprite(...images.player.front,0,0,300,300);
            }
            break;
        }

});
// スプライトシートからキャラクターを描画する関数
function drawSprite(frameX, frameY, frameWidth, frameHeight, x, y ,mx ,my) {
    console.log(spriteSheet.width, spriteSheet.height); 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(spriteSheet, frameX, frameY, frameWidth, frameHeight, x, y, mx, my); 
}

// 画像がロードされたらスプライトのサイズを確認してから描画
spriteSheet.onload = function(){
    drawSprite(...images.player.front,0,0,300,300);
}
