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

let humans = {
    player:{
        name: "player",
        cards: [],
        value: 0,
        win: 0,
        lose: 0,
        draw: 0,
        blue: 0, //blackJackになった数
    },
    dealer:{
        cards: [],
        value: 0,
        win: 0,
        lose: 0,
        draw: 0,
        blue: 0,
    }
}
let euro = 100;
let bet = 1;
let betOrigin = 5;
let standed = 0;
let wholeRate = 0; //負けた時に加算されるやつ

let betZone = document.getElementById("betZone");
let betDisplay = betZone.querySelector('.bet')
let betRange = betZone.querySelector(".range");
betRange.addEventListener('input',() => {
    betTekiou();
})
function betTekiou(){
    bet = betRange.value;
    betDisplay.textContent = `bet:${bet}`;
}
let betDecide = betZone.querySelector(".button");
betDecide.addEventListener('click', function(){
    if(this.value < 1) return zako();
    bet = this.value;
    euro -= bet;
    //betZone.style.left = '-40%';
    betZone.style.display = 'none';
    uiButtons.style.display = 'flex';
})
betTekiou();


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
function getCard(){
    let x = Math.floor(Math.random() * 13)+1;
    let y = x;
    switch(y){
        case 1: y = "A";break;
        case 11: y = "J";break;
        case 12: y = "Q";break;
        case 13: y = "K";break;
    }
    if(x > 10){
        x = 10;
    }
    let z = arraySelect(["♡","♤","♢","♧"])
    return [x,y,z];
}

hitButton.addEventListener("click", ()=>{
    if(humans["player"].value <= 20 || standed){
        let [num, card, suit] = getCard('player');
        cardAdd("player", num, card, suit);
        tekiou();

        if(humans["player"].value > 21){
            //when barst, suddenly lose
            outcome('dealer')
        }
    }
})

function cardAdd(cam, value, card, suit){
    humans[cam].cards.push({
        value: value,
        card: card,
        suit: suit
    })

    let newCard = document.createElement("div");
    newCard.className = "card";

    let upper = document.createElement("div");
    upper.className = "upper";
    upper.textContent = suit
    newCard.appendChild(upper)

    let num = document.createElement("div");
    num.className = "num";
    num.textContent = card;
    newCard.appendChild(num)

    let lower = document.createElement("div");
    lower.className = "lower";
    lower.textContent = suit
    newCard.appendChild(lower)
    
    document.querySelector(`#cardPlaces .${cam}`).appendChild(newCard)
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
    if(dealer.value > 21){
        return "player";
    }else if(player.value == 21){
        if(dealer.value == 21){
            return player.cards.length < dealer.cards.length ? "player" : "dealer";
        }else{
            return "player";
        }
    }else if(player.value > dealer.value){
        return "player";
    }else if(player.value > dealer.value){
        return "dealer";
    }else if(player.value == dealer.value){
        return player.cards.length < dealer.cards.length ? "player" : "dealer";
    }
}
async function outcome(winner){
    let thisRate = 1;
    switch(winner){
        case 'player':
            wholeRate = 0;
            thisRate = (player.value == 21 ? 3 : 2 + wholeRate);
            euro += Math.floor(bet * thisRate);
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
    betRange.value = betOrigin;
    betRange.max = euro;
    betTekiou();
    
    betZone.style.display = 'block';
    uiButtons.style.display = 'none';
}


//一旦のやつ
battleStart();