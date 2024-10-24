
const playersheet = new Image();playersheet.src = 'assets/player.png';
const firesheet = new Image();firesheet.src = 'assets/fire.png';

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
let sheets = {
    player: playersheet,
    fire: firesheet,
}
let rx = 0;
let ry = 0;
let angle = 1;//プレイヤーの向き(あっち=0,こっち=1}

//帰ったら8x8にして動くようにしといて 1000でいいかも いや全体なんだしもうちょいでもあり
function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
addEventListener('keydown', async(event) => {
    switch(event.key){
        case 'ArrowUp':
        case 'w':
            angle = 0;
            drawSprite(...images.player.back,rx*100,ry*100,100,100,0);
            await delay(100);
            if(ry >= 1){
                var kariy = Math.floor(ry-1);
                for(ry = ry;ry > kariy;ry -= 0.1){
                    drawSprite(...images.player.back,rx*100,ry*100,100,100,0);
                    await delay(20);
                }
                ry = kariy;
            }
            drawSprite(...images.player.back,rx*100,ry*100,100,100,0);
            await delay(100);
            break;
        case 'ArrowLeft':
        case 'a':
            drawSprite(...images.player.left1,rx*100,ry*100,100,100,0);
            await delay(100);
            if(rx >= 1){
                var karix = Math.floor(rx-1);
                for(rx = rx;rx > karix;rx -= 0.1){
                    drawSprite(...images.player.left2,rx*100,ry*100,100,100,0);
                    await delay(20);
                }
                rx = karix;
            }
            drawSprite(...images.player.left2,rx*100,ry*100,100,100,0);
            await delay(100);
            if(angle == 0){
                drawSprite(...images.player.back,rx*100,ry*100,100,100,0);
            }else{
                drawSprite(...images.player.front,rx*100,ry*100,100,100,0);
            }
            break;
        case 'ArrowDown':
        case 's':
            angle = 1;
            drawSprite(...images.player.front,rx*100,ry*100,100,100,0);
            await delay(100);
            if(ry <= 6){
                var kariy = Math.floor(ry+1);
                for(ry = ry;ry < kariy;ry += 0.1){
                    drawSprite(...images.player.front,rx*100,ry*100,100,100,0);
                    await delay(20);
                }
                ry = kariy;
            }
            drawSprite(...images.player.front,rx*100,ry*100,100,100,0);
            await delay(100);
            break;
        case 'ArrowRight':
        case 'd':
            drawSprite(...images.player.right1,rx*100,ry*100,100,100,0);
            await delay(100);
            if(rx <= 6){
                var karix = Math.floor(rx+1);
                for(rx = rx;rx < karix;rx += 0.1){
                    drawSprite(...images.player.right2,rx*100,ry*100,100,100,0);
                    await delay(20);
                }
            rx = karix;
            }
            //drawSprite(...images.player.right2,rx*100,ry*100,100,100,0);
            //await delay(100);
            if(angle == 0){
                drawSprite(...images.player.back,rx*100,ry*100,100,100,0);
            }else{
                drawSprite(...images.player.front,rx*100,ry*100,100,100,0);
            }
            break;
        }

});
function drawSprite(frameX, frameY, frameWidth, frameHeight, x, y ,mx ,my ,rotateangle){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(x + mx/2, y + my/2);
    ctx.rotate(rotateangle * Math.PI / 1100);
    ctx.drawImage(playersheet, frameX, frameY, frameWidth, frameHeight, -mx/2, -my/2, mx, my);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

playersheet.onload = function(){
    drawSprite(...images.player.front,0,0,100,100,0);
}
