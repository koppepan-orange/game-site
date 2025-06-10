//#region komagome
function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
async function NicoNicoText(mes){
    const newDiv = document.createElement('div');
    newDiv.textContent = mes;
    newDiv.style = `
    position: absolute;
    top: ${Math.random()*100}vh;
    right: 0;
    background-color: rgba(228, 249, 255, 0.563);
    color: #000000;
    font-size: 50px;
    `
    document.querySelector('body').appendChild(newDiv);
    //let speed = (Math.random()*100+1)*0.1;
    //let speed = mes.toString().length*2 
    speed = 4;
    for(let i = 0; window.innerWidth > i*speed; i++){
        let val = i*speed;
        newDiv.style.right = `${val}px`
        await delay(10);
    }
    newDiv.remove();
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
function arrayGacha(array,probability){
    if(array.length !== probability.length){throw new Error("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");}
    const total = probability.reduce((sum, p) => sum + p, 0);
    let random = Math.random() * total;
    for (let i = 0; i < array.length; i++) {
        if(random < probability[i]){
        return array[i];
        }
        random -= probability[i];
    }
}
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
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
}
async function zako(){
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('たぁ');
    await delay(750);
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('わぁ');
    await delay(750);
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('ざぁこ');
    await delay(500);
    NicoNicoText('けぇ');
    await delay(750);
    NicoNicoText('さんせーうにうまっちゃえ');
    await delay(1000);
    NicoNicoText('clap');
    await delay(100);
    NicoNicoText('clap');
    await delay(100);
    NicoNicoText('clap');
    await delay(100);
}
//#endregion
//#region data
let Cards = {
    //normal
    'A':{
        name:'A',
        val:'A',
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '2':{
        name:'2',
        val:2,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '3':{
        name:'3',
        val:3,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '4':{
        name:'4',
        val:4,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '5':{
        name:'5',
        val:5,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '6':{
        name:'6',
        val:6,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '7':{
        name:'7',
        val:7,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '8':{
        name:'8',
        val:8,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '9':{
        name:'9',
        val:9,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    '10':{
        name:'10',
        val:10,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    'J':{
        name:'J',
        val:10,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    'Q':{
        name:'Q',
        val:10,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    'K':{
        name:'K',
        val:10,
        suits:['♡','♤','♢','♧'],
        kind:'normal',
        rare:'N',
        buyable:1,
    },
    'strength':{
        name:'strength',
        val:0,
        suits:'Ⅷ',
        kind:'tarot',
        rare:'UR',
        buyable:1
    },
    'wheel of fourtune':{
        name:'wheel of fourtune',
        val:0,
        suits:'Ⅹ',
        kind:'tarot',
        rare:'UR',
        buyable:1
    }
}
//#endregion

let humans = {
    player:{
        name: "player",
        cards: [],
        value: 0,
    },
    dealer:{
        deck: [
            {
                name:'A',
                value:'A',
                suit:'♡',
                data:{
                    name:'A',
                    val:'A',
                    suits:['♡','♤','♢','♧'],
                    kind:'normal',
                    rare:'N',
                    buyable:1,
                }
            }
        ],
        cards: [],
        value: 0,
    }
}
let coin = 100;

let spada = 21; //仮名。

let uiButtons = document.getElementById('buttons')
let hitButton = uiButtons.querySelector(".hit");
let standButton = uiButtons.querySelector(".stand")

function tekiou(){
    Object.keys(humans).forEach(cam => {
        let div = document.querySelector(`#nowPoints .${cam}`);
        let human = humans[cam];
        
        human.value = 0;

        //増加の機構とAの処理
        let aces = 0;
        humans[cam].cards.forEach(c => {
            if(c == 1){
                aces++;
                human.value += 1;
            }else{
                human.value += c.value;
            }
        });
        while(aces > 0 && human.value + 10 <= 21) {
            human.value += 10;
            aces--;
        };

        div.textContent = `${cam}: ${human.value}`;
    });
    
}
function getCard(cam){
    let deck = humans[cam].deck.filter(a => !a.showing);
    let card = arraySelect(deck); // ランダムに1枚選ぶ関数だと仮定
    card.showing = 1;
    return [card.name, card.value, card.suit];
}

hitButton.addEventListener("click", async function (){ 
    let player = humans['player'];
    let dealer = humans['dealer']
    if(!player.standed){
        let drawCard = cardDraw('player')
        await delay(750);
        if(player.value > spada){
            let isburst = isBurst('player');
            if(isburst) return;
        }

        if(!dealer.standed){
            drawCard = cardDraw('dealer');
            await delay(750);
            if(dealer.value > spada){
                let isburst = isBurst('dealer');
                if(isburst) return;
            }
        }
    }
})

function cardDraw(cam){
    let [name, num, suit] = getCard(cam);
    cardAdd(cam, name, num, suit);
    tekiou();


}
function cardAdd(cam, name, value, suit){
    let cardData = Cards[name]
    
    let drawCard = {
        name: name,
        value: value,
        suit: suit,
        data: cardData
    }
    
    humans[cam].cards.push(drawCard);

    let newCard = document.createElement("div");
    newCard.className = `card ${cardData.kind}`;

    switch(cardData.kind){
        case 'normal':{
            let upper = document.createElement("div");
            upper.className = "upper";
            upper.textContent = suit
            newCard.appendChild(upper)

            let num = document.createElement("div");
            num.className = "num";
            num.textContent = name;
            newCard.appendChild(num)

            let lower = document.createElement("div");
            lower.className = "lower";
            lower.textContent = suit
            newCard.appendChild(lower)

            break;
        };
        case 'tarot':{
            let upper = document.createElement("div");
            upper.className = "upper";
            upper.textContent = suit
            newCard.appendChild(upper);
            
            let img = document.createElement("img");
            img.className = 'img';
            console.log(`assets/cards/${cardData.kind}/${cardData.id}`)
            img.src = `assets/cards/${cardData.kind}/${cardData.id}.png`;
            newCard.appendChild(img);
            'assets/cards/tarot/wheel_of_fourtune'
            
            break;
        }
    };
    
    document.querySelector(`#cardPlaces .${cam}`).appendChild(newCard);
    return drawCard;
}

standButton.addEventListener("click", async function (){
    standed = 1;
    
    //dealer's turn
    do{
        let [num, card, suit] = getCard('delaer');
        cardAdd("dealer", num, card, suit);
        tekiou();
        await delay(1000)
    } while(humans["dealer"].value < 17);

    await delay(1000);

    //result
    outcome(result());
})

async function result(){
    let player = humans["player"]
    let dealer = humans["dealer"]

}
async function outcome(winner){
    let thisRate = 1;
    switch(winner){
        case 'player':
            wholeRate = 0;
            thisRate = (player.value == 21 ? 3 : 2 + wholeRate);
            coin += Math.floor(bet * thisRate);
            break;
        case 'dealer':
            wholeRate += 0.2;
            break;
    }
    tekiou();
    await delay(3000);
    battleStart();
}

let debugMenu = document.querySelector("#debug .menu");
let debugData = document.querySelector("#debug .data");
document.addEventListener("keydown", (e) =>{
    if(e.key == "p"){
        let [num, card, suit] = getCard();
        cardAdd("player",num,card,suit);
    }else if(e.key == 'y'){
        if(debugData.style.display == 'block'){
            debugData.style.display = 'none';
            debugData.innerHTML = JSON.stringify(humans);
        }else{
            debugData.style.display = 'block';
        }
    }else if(e.key == "g"){
        if(debugMenu.style.display == 'block'){
            debugMenu.style.display = 'none';
        }else{
            debugMenu.style.display = 'block';
        }
    }
});


function battleStart(){
    document.querySelector("#cardPlaces .player").innerHTML = '';
    document.querySelector("#cardPlaces .dealer").innerHTML = '';

    humans = {
        player: {
            value: 0,
            cards: []
        },
        dealer: {
            value: 0,
            cards: []
        }
    }
    tekiou();

    wholeRate = 0;
}


//一旦のやつ
battleStart();

//本来はダンジョン開始時にやるべき動きを！なんと贅沢にコードの1番下に描かせていただきます！！
let nums = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let suits = ['♡','♤','♢','♧'];
humans.player.deck = [];
humans.dealer.deck = [];
nums.forEach(num => {
    suits.forEach(suit => {
        const card = {
            name: num,
            value: Cards[num].val,
            suit: suit,
            showing: 0,
            data: Cards[num]
        };
        humans.player.deck.push(card);
        humans.dealer.deck.push(card);
    });
});