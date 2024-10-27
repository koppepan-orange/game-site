
const playersheet = new Image();playersheet.src = 'assets/player.png';
const firesheet = new Image();firesheet.src = 'assets/fire.png';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let images = {//開始地点x,開始地点y,そこからの幅,そこからの高さ
    player:{
        front:[playersheet,0,0,190,190],
        back: [playersheet,180,0,190,190],
        left1:[playersheet,360,0,190,190],
        left2:[playersheet,690,0,190,190],
        right1:[playersheet,520,0,190,190],
        right2:[playersheet,860,0,190,190],
        charge1:[playersheet,540,200,190,190],
        charge2:[playersheet,720,200,190,190],
        skill1:[playersheet,1060,420,190,190],
        skill2:[playersheet,1010,600,190,190],
        skill3:[playersheet,1050,30,190,190],
        skill4:[playersheet,1060,230,190,190],

    },
    fire:{
        ef1:[firesheet,0,20,290,290],
        ef2:[firesheet,300,0,280,300],
        ef3:[firesheet,590,10,270,270],
        ef4:[firesheet,860,0,280,280],
        ball1:[firesheet,0,350,210,210],
        ball2:[firesheet,160,350,220,220],
        ball3:[firesheet,330,350,220,220],
        ball4:[firesheet,500,350,220,220],
        ball5:[firesheet,670,350,220,220],
        ball6:[firesheet,870,350,220,220],
    }
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
    w: false,
    a: false,
    s: false,
    d: false,
    z: false
};
window.addEventListener("keyup", (event) => {
    if(keys.hasOwnProperty(event.key)){keys[event.key] = false};
});

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
addEventListener('keydown', async(event) => {
    if(keys.hasOwnProperty(event.key)){keys[event.key] = true;console.log(keys)};
    switch(event.key){
        case 'w':
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
        case 'a':
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
        case 's':
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
        case 'd':
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
            clear();
            if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
            //await delay(50);
            moving = 0;
            break;
        }

});
const SkillAct = (async(event) => {
    //removeEventListener('keydown', SkillAct);
    if(event.key == 'z'){
        if(charging == 1){return};
        willfire = 0;
        if(event.key === "z" && (keys.w || keys.a || keys.s || keys.d)){
            console.log(keys)
            if(keys.w){willfire = 1;}
            if(keys.a){willfire = 2;}
            if(keys.s){willfire = 3;}
            if(keys.d){willfire = 4;}
        }
        if(willfire == 0){willfire = 1;};
        charging = 1;
        chargednum = 0;
        while(charging == 1){
            clear();
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
                    if(charging == 0){return};
                    charging = 0;
                    console.log('今発射しました。chargedは'+charged,'willfireは'+willfire);
                    removeEventListener('keyup', onkeyup);
                    if(charged >= 10){
                        moving = 1;
                        clear();
                        switch(willfire){
                            case 1:drawSprite(...images.player.skill1,rx*100,ry*100,100,100,0);break;
                            case 2:drawSprite(...images.player.skill2,rx*100,ry*100,100,100,0);break;
                            case 3:drawSprite(...images.player.skill3,rx*100,ry*100,100,100,0);break;
                            case 4:drawSprite(...images.player.skill4,rx*100,ry*100,100,100,0);break;
                        }
                        FireAct(willfire);
                        await delay(500);
                        moving = 0;charged = 0;willfire = 0;
                        clear();
                        if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
                        //addEventListener('keydown', SkillAct);
                        return;
                    }else{
                        moving = 0;
                        clear();
                        if(angle == 0){drawSprite(...images.player.back,rx*100,ry*100,100,100,0);}else{drawSprite(...images.player.front,rx*100,ry*100,100,100,0);}
                        //addEventListener('keydown', SkillAct);
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
addEventListener('keydown', SkillAct);

async function FireAct(aangle){
    let kakudo = 0;
    switch(aangle){
        case 1: kakudo = 0; break;
        case 2: kakudo = 90; break;
        case 3: kakudo = 180; break;
        case 4: kakudo = -90; break;
    }
    adddrawSprite(...images.fire.ef1,rx*100,ry*100,100,100,rx*100,ry*100,100,100,kakudo);await delay(100);
    adddrawSprite(...images.fire.ef2,rx*100,ry*100,100,100,rx*100,ry*100,100,100,kakudo);await delay(100);
    FireMove(aangle,kakudo);
    adddrawSprite(...images.fire.ef3,rx*100,ry*100,100,100,rx*100,ry*100,100,100,kakudo);await delay(100);
    adddrawSprite(...images.fire.ef4,rx*100,ry*100,100,100,rx*100,ry*100,100,100,kakudo);await delay(100);

    async function FireMove(aangle,kakudo){
        let fx = rx;
        let fy = ry;
        console.log(kakudo,fx,fy);  
        for(var i = 0;i < 5;i++){
            adddrawSprite(...images.fire.ball1,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
            adddrawSprite(...images.fire.ball2,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
            adddrawSprite(...images.fire.ball3,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
            adddrawSprite(...images.fire.ball4,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
            adddrawSprite(...images.fire.ball5,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
            adddrawSprite(...images.fire.ball6,fx*100,fy*100,100,100,fx*100,fy*100,100,100,kakudo);
            switch(aangle){case 1: fy -= 0.5;break;case 2: fx -= 0.5;break;case 3: fy += 0.5;break;case 4: fx += 0.5;break;}
            await delay(100);
        }
    }
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawSprite(sheet,frameX, frameY, frameWidth, frameHeight, x, y ,mx ,my ,rotateangle){
    clear()
    ctx.translate(x + mx/2, y + my/2);
    ctx.rotate(rotateangle * Math.PI / 1100);
    ctx.drawImage(sheet, frameX, frameY, frameWidth, frameHeight, -mx/2, -my/2, mx, my);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
function adddrawSprite(sheet,frameX, frameY, frameWidth, frameHeight, x, y ,mx ,my ,rotateangle){
    ctx.translate(x + mx/2, y + my/2);
    ctx.rotate(rotateangle * Math.PI / 1100);
    ctx.drawImage(sheet, frameX, frameY, frameWidth, frameHeight, -mx/2, -my/2, mx, my);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
playersheet.onload = function(){
    clear();
    drawSprite(...images.player.front,0,0,100,100,0);
}
