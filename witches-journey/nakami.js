
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
        charge1:[540,200,190,190],
        charge2:[720,200,190,190],
        skill1:[1060,420,190,190],
        skill2:[1060,230,190,190],
        skill3:[1050,30,190,190],
        skill4:[1010,600,190,190],
    },
};
let sheets = {
    player: playersheet,
    fire: firesheet,
}
let moving = 0;
let rx = 0;
let ry = 0;
let angle = 1;//プレイヤーの向き(あっち=0,こっち=1}
let charging = 0;
let charged = 0;
let chargednum = 0;
let willfire = 0;

const keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
    z: false
};
window.addEventListener("keyup", (event) => {
    if(keys.hasOwnProperty(event.key))keys[event.key] = false;
});

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
addEventListener('keydown', async(event) => {
    if(keys.hasOwnProperty(event.key)) keys[event.key] = true;console.log(keys);
    switch(event.key){
        case 'ArrowUp':
        case 'w':
            if(moving == 1){return};
            if(charging == 1){break};
            moving = 1;angle = 0;
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
            if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
            //await delay(50);
            moving = 0;
            break;
        case 'ArrowLeft':
        case 'a':
            if(moving == 1){return};
            if(charging == 1){break};
            moving = 1;
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
            if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
            //await delay(50);
            moving = 0;
            break;
        case 'ArrowDown':
        case 's':
            if(moving == 1){return};
            if(charging == 1){break};
            moving = 1;angle = 1;
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
            if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
            //await delay(50);
            moving = 0;
            break;
        case 'ArrowRight':
        case 'd':
            if(moving == 1){return};
            if(charging == 1){break};
            moving = 1;
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
            if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
            //await delay(50);
            moving = 0;
            break;
        }

});
addEventListener('keydown', async(event) => {
    if(event.key == 'z'){
        if(charging == 1){return};
        willfire = 0;
        if(event.key === "z" && (keys.ArrowUp || keys.ArrowLeft || keys.ArrowDown || keys.ArrowRight)){
            switch(event.key){
                case 'ArrowUp':willfire = 1;break;
                case 'ArrowLeft':willfire = 2;break;
                case 'ArrowDown':willfire = 3;break;
                case 'ArrowRight':willfire = 4;break;
            }
        }
        if(willfire == 0){willfire = 1;};
        charging = 1;
        chargednum = 0;
        while(charging == 1){
            if(chargednum == 0){
                chargednum = 1;
                drawSprite(...images.player.charge1,rx*100,ry*100,100,100,0);
            }else{
                chargednum = 0;
                drawSprite(...images.player.charge2,rx*100,ry*100,100,100,0);
            }
            await delay(100);
            charged += 0.5;

            const onkeyup = (async(event) => {
                if(event.key == 'z'){
                    charging = 0;
                    console.log('今発射しました。chargedは'+charged,'willfireは'+willfire);
                    removeEventListener('keyup', onkeyup);
                    if(charged >= 10){
                        moving = 1;
                        switch(willfire){
                            case 1:drawSprite(...images.player.skill1,rx*100,ry*100,100,100,0);break;
                            case 2:drawSprite(...images.player.skill2,rx*100,ry*100,100,100,0);break;
                            case 3:drawSprite(...images.player.skill3,rx*100,ry*100,100,100,0);break;
                            case 4:drawSprite(...images.player.skill4,rx*100,ry*100,100,100,0);break;
                        }
                        await delay(500);
                        moving = 0;charged = 0;willfire = 0;
                        if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
                        return;
                    }else{
                        moving = 0;
                        if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
                        return;
                    }
                }
                
            })
            addEventListener('keyup', onkeyup);
        };
        moving = 1;
        charging = 1;
        charging = 0;
        moving = 0;

    }
    
})
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
