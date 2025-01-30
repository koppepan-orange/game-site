const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const backMaps = [
   // 1, 2, 3 のステージ（今までのやつ）
   [
      [1,1,1,1,1,2,2,2,2],
      [1,1,1,1,1,2,2,2,2],
      [1,1,1,1,1,1,2,2,2],
      [1,1,1,1,1,1,2,2,2],
      [1,1,1,1,1,1,1,1,2],
      [1,1,1,1,1,1,1,1,2],
      [1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,2],
      [1,1,1,1,1,1,2,2,2]
   ],
   [
      [1,1,2,2,2,2,2,2,2],
      [1,1,1,2,2,2,2,2,2],
      [1,1,2,2,2,2,2,2,2],
      [1,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,1,2,2],
      [2,2,2,2,2,2,1,1,2],
      [2,2,2,2,2,2,1,1,2],
      [2,2,2,1,1,2,2,1,2],
      [2,2,2,1,1,1,2,2,2]
   ],
   [
      [1,1,2,2,2,2,2,2,2],
      [2,1,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2],
      [1,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2],
      [3,3,2,2,2,3,3,4,4],
      [2,3,3,2,3,2,3,3,4],
      [3,3,3,3,3,3,3,3,3],
      [2,3,3,3,3,2,3,3,3]
   ],
   // 4: 砂漠の岩場
   [
      [3,3,3,3,3,4,4,4,4],
      [3,3,3,3,4,4,4,4,4],
      [3,3,3,3,3,4,4,4,4],
      [3,3,3,3,3,4,4,4,4],
      [3,3,3,3,3,3,4,4,4],
      [3,3,3,3,3,3,3,4,4],
      [3,3,3,3,3,3,3,3,4],
      [3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3]
   ],
   // 5: 溶岩地帯
   [
      [4,4,4,4,5,5,5,5,5],
      [4,4,4,5,5,5,5,5,5],
      [4,4,4,4,5,5,5,5,5],
      [4,4,4,4,4,5,5,5,5],
      [4,4,4,4,4,4,5,5,5],
      [4,4,4,4,4,4,5,5,5],
      [4,4,4,4,4,4,4,5,5],
      [4,4,4,4,4,4,4,4,5],
      [4,4,4,4,4,4,4,4,4]
   ],
   // 6: 火山の岩場
   [
      [4,4,5,5,6,6,6,6,6],
      [4,4,5,5,5,6,6,6,6],
      [4,5,5,5,5,5,6,6,6],
      [4,5,5,5,5,5,5,6,6],
      [5,5,5,5,5,5,5,6,6],
      [5,5,5,5,5,5,5,5,6],
      [5,5,5,5,5,5,5,5,5],
      [5,5,5,5,5,5,5,5,5],
      [5,5,5,5,5,5,5,5,5]
   ],
   // 7: 溶岩洞窟
   [
      [6,6,6,6,6,6,6,6,6],
      [6,6,6,6,6,6,6,6,6],
      [6,6,6,6,6,5,5,6,6],
      [6,6,6,6,6,5,5,5,6],
      [6,6,6,6,6,6,6,6,6],
      [6,5,5,6,6,6,6,6,6],
      [6,6,5,6,6,6,6,6,6],
      [6,6,6,6,6,6,6,6,6],
      [6,6,6,6,6,6,6,6,6]
   ],
   //クリア(一旦終わり)
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,2,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,3,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,4,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,5,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,6,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
   ],
   [
      [0,0,0,0,0,0,0,0,0],
      [0,2,0,0,0,0,0,2,0],
      [0,2,0,0,0,0,0,2,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,2,0,0],
      [0,0,0,2,2,2,0,0,0],
   ],
];

let backMap = [
   [1,1,1,1,1,2,2,2,2],
   [1,1,1,1,1,2,2,2,2],
   [1,1,1,1,1,1,2,2,2],
   [1,1,1,1,1,1,2,2,2],
   [1,1,1,1,1,1,1,1,2],
   [1,1,1,1,1,1,1,1,2],
   [1,1,1,1,1,1,1,1,0],
   [1,1,1,1,1,2,1,1,2],
   [1,1,1,1,1,2,2,2,2]
]
let objMap = [
   ['rock','gate','rock','rock','gate','rock','rock','gate','rock'],
   ['none','none','none','none','none','none','none','none','none'],
   ['none','none','none','none','none','none','none','none','none'],
   ['rock','gate','rock','rock','gate','rock','rock','gate','rock'],
   ['none','none','none','none','none','none','none','none','none'],
   ['none','none','none','none','none','none','none','none','none'],
   ['rock','gate','rock','rock','gate','rock','rock','gate','rock'],
   ['none','none','none','none','none','none','none','none','none'],
   ['none','none','none','none','none','none','none','none','none']
]

let imagesLoaded = 0;
let images = {};
let imageNames = [0,1,2,3,4,5,6,'none','gate','rock'];
let totalImages = imageNames.length;

imageNames.forEach(num => {
   let img = new Image();
   img.src = `assets/maps/${num}.png`;
   img.onload = () => {
      imagesLoaded++;
      if(imagesLoaded === totalImages){
         DrawBackground();
         GameStart();
      }
   };
   img.onerror = () => {
      console.error(`Image ${num} failed to load.`);
   };
   images[num] = img;
});

function DrawBackground(){
   //background、そのまま背景
   for(let yy = 0; yy < 9; yy++){
      for(let xx = 0; xx < 9; xx++){
         let img = images[backMap[yy][xx]];
         if(img){
            ctx.drawImage(img, xx*100, yy*100, 100, 100);
         }else{
            console.error(`Image for background value ${backMap[yy][xx]} not found.`);
         }
      }
   }
   //object、仕掛けとか
   for(let y = 0; y < objMap.length; y++) {
      for(let x = 0; x < objMap[y].length; x++) {
         let img = images[objMap[y][x]];
         if(img){
            ctx.drawImage(img, x * 100, y * 100, 100, 100);
         }else{
            console.error(`Image for object value ${objMap[y][x]} not found.`);
         }

         // ゲートの上に確率を描画
         if(objMap[y][x] === 'gate'){
            let probability = getGateProbability(x, y);

            ctx.font = '18px Hangyaku';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(`${probability}%`, x * 100 + 50, y * 100 + 20);

            gated += 1;
         }
      }
   }
   gated = 0;
}


// 選択画像のロードと初期表示
const IMGselect = new Image();
IMGselect.src = 'assets/system/select.png';

let AllowMove = 0;

let SELECTx = 0; // 初期x座標
let SELECTy = 0; // 初期y座標
let MAPx,MAPy;

// キーが押されたときの...やつ
document.addEventListener('keydown', (event) => {
   if(AllowMove == 0){//scratchで良くやってたやつ なつかしいっすねぇ..
      let moved = 0;
      MAPx = Math.floor(SELECTx / 100);
      MAPy = Math.floor(SELECTy / 100);
      switch(event.key) {
         case 'w':
         case 'ArrowUp': // 上
            SELECTy -= 100;
            MAPy = Math.floor(SELECTy / 100);
            if(MAPy < 0){SELECTy = 0}else if(objMap[MAPy][MAPx]){if(objMap[MAPy][MAPx] == undefined||objMap[MAPy][MAPx] == 'rock'){SELECTy += 100}}
            break;
         case 'a':
         case 'ArrowLeft': // 左
            SELECTx -= 100;
            MAPx = Math.floor(SELECTx / 100);
            if(MAPx < 0){SELECTx = 0}else if(objMap[MAPy][MAPx]){if(objMap[MAPy][MAPx] == undefined||objMap[MAPy][MAPx] == 'rock'){SELECTx += 100}}
            moved = 1;
            break;
         case 's':
         case 'ArrowDown': // 下
            SELECTy += 100;
            MAPy = Math.floor(SELECTy / 100);
            if(MAPy > 8){SELECTy = 800}else if(objMap[MAPy][MAPx]){if(objMap[MAPy][MAPx] == undefined||objMap[MAPy][MAPx] == 'rock'){SELECTy -= 100}}
            moved = 1;
            break;
         case 'd':
         case 'ArrowRight': // 右
            SELECTx += 100;
            MAPx = Math.floor(SELECTx / 100);
            if(MAPx > 8){SELECTx = 800}else if(objMap[MAPy][MAPx]){if(objMap[MAPy][MAPx] == undefined||objMap[MAPy][MAPx] == 'rock'){SELECTx -= 100}}
            moved = 1;
            break;
      }

      // 枠外に出ないように制限
      if(SELECTx<0){SELECTx=0};
      if(SELECTy<0){SELECTy=0};
      if(SELECTx>800){SELECTx=800};
      if(SELECTy>800){SELECTy=800};
      MAPx = Math.floor(SELECTx / 100);
      MAPy = Math.floor(SELECTy / 100);

      // 画面をクリアしてから再描画
      ctx.clearRect(0, 0, 900, 900); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 100, 100);

      let probability = getGateProbability(MAPx, MAPy);
      
      if (probability !== null) {
         let random = Math.random() * 100; // 0〜100のランダム数
         if (random > probability) {
            //NicoNicoText(`ゲート(${MAPx},${MAPy})を通れなかった！`);
            random = Math.random() * 100;
            if(random < 2){
               gates = gates.map(g => ({
                  ...g, 
                  probability: Math.min(g.probability + 5, 100) 
               }));
               NicoNicoText('超激レアイベント！ 全てのゲートの確率が5%上昇！');
               console.log('超激レアイベント！ 全てのゲートの確率が5%上昇！')
            }else if(random < 10){
               let index = gates.findIndex(g => g.x === MAPx && g.y === MAPy);
               if (index !== -1) {
                  gates[index].probability = Math.min(gates[index].probability + 15, 100);
               }
               NicoNicoText('激レアイベント！ ゲートの確率が10%上昇！')
               console.log('激レアイベント！ ゲートの確率が10%上昇！')
            }else if(random < 20){
                  gates = gates.map(g => ({
                     ...g, 
                     probability: Math.min(g.probability + 1, 100) 
                  }));
               NicoNicoText('レアイベント！ 全てのゲートの確率が1%上昇！')
               console.log('レアイベント！ 全てのゲートの確率が1%上昇！')
            }else{
               let index = gates.findIndex(g => g.x === MAPx && g.y === MAPy);
               if(index !== -1){
                  gates[index].probability = Math.min(gates[index].probability + 5, 100);
               }
            }


            SELECTx = 400;SELECTy = 800;
            MAPx = Math.floor(SELECTx / 100);
            MAPy = Math.floor(SELECTy / 100);
         } else {
            //NicoNicoText(`ゲート(${MAPx},${MAPy})を通過！`);
            
            let resetProbabilities = { 6: 60, 3: 30, 0: 5 }; // MAPy に対応する確率をオブジェクトで管理
            let index = gates.findIndex(g => g.x === MAPx && g.y === MAPy);
            if (index !== -1 && resetProbabilities.hasOwnProperty(MAPy)) {
               gates[index].probability = resetProbabilities[MAPy];
            }

            if(MAPy == 0){
               NextStage();
            }
         }
      }


      ctx.clearRect(0, 0, 900, 900); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 100, 100);

   }
});

function getGateProbability(x, y) {
   let gate = gates.find(g => g.x === x && g.y === y);
   return gate ? gate.probability : null;
}

function GameStart(){
   SELECTx = 400;
   SELECTy = 800;
   MAPx = Math.floor(SELECTx / 100);
   MAPy = Math.floor(SELECTy / 100);
   ctx.clearRect(0, 0, 900, 900); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 100, 100);
}
function NextStage(){
   nowstage += 1;
   backMap = backMaps[nowstage]

   SELECTx = 400;
   SELECTy = 800;
   MAPx = Math.floor(SELECTx / 100);
   MAPy = Math.floor(SELECTy / 100);
   ctx.clearRect(0, 0, 900, 900); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 100, 100);
}

let gated = 0;
let gates = [
   {x:1, y:0, probability:5},
   {x:4, y:0, probability:5},
   {x:7, y:0, probability:5},
   {x:1, y:3, probability:30},
   {x:4, y:3, probability:30},
   {x:7, y:3, probability:30},
   {x:1, y:6, probability:60},
   {x:4, y:6, probability:60},
   {x:7, y:6, probability:60}
];
let nowstage = 0;

const log = document.getElementById('log');
function randomGate(){

}

//#region 扱いやすい子達
function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
function copy(obj){
   if (obj === null || typeof obj !== 'object') {
      return obj; // 基本型はそのまま返す
  }
  if (Array.isArray(obj)) {
      return obj.map(copy); // 配列の各要素を再帰コピー
  }
  const result = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          result[key] = copy(obj[key]); // オブジェクトのプロパティを再帰コピー
      }
  }
  return result;
}

function arraySelect(array){
   let select = Math.floor(Math.random()*array.length);
   return array[select];
}
function arrayShuffle(array) {
   for(let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}
 
document.addEventListener('mousemove', (e) => {
   const HasDescription = document.getElementById('movabledescription');
   HasDescription.style.left = `${e.clientX + 10}px`;
   HasDescription.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
   if(e.target.classList.contains('hasd')){
      const movabledescription = e.target.dataset.description;
      document.getElementById('movabledescription').innerHTML = movabledescription;
      document.getElementById('movabledescription').style.display = 'block';
   }
});
document.addEventListener('mouseout', (e) => {
   if(e.target.classList.contains('hasd')){
      document.getElementById('movabledescription').innerHTML = '';
      document.getElementById('movabledescription').style.display = 'none';
   }
});
async function NicoNicoText(mes){
   const newDiv = document.createElement('div');
   newDiv.textContent = mes;
   newDiv.style = `
   position: absolute;
   top: ${Math.random()*100}vh;
   right: 0;
   background-color: rgba(228, 249, 255, 0.563);
   color: #000000;
   font-size: 20px;
   `
   document.getElementById('body').appendChild(newDiv);
   //let speed = Math.random()*100+1;
   //let speed = mes.toString().length*2 
   let speed = 10;
   for(let i = 0; window.innerWidth > i*speed; i++){
       let val = i*speed;
       newDiv.style.right = `${val}px`
       await delay(50);
   }
   newDiv.remove();
}
//#endregion