//#region ステージ構成とか
let stagebar = [
    [1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0]
]
let floor = 0;
function SetStageBar(){
    const StageButton = document.getElementById('StageButton');
    StageButton.innerHTML = '';
    let high = stagebar[0][floor];
    let low = stagebar[1][floor];
    if(low == 0){
        StageButton.style = `
        margin: 0 auto;
        padding: 5px;
        display: block;
        overflow: auto;
        `
        let text = '';
        switch(high){
            case 1:
                text = '敵と交戦します';
                break;
            case 2:
                text = '少し強い敵と交戦します';
                break;
            case 3:
                text = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text = 'キャンプで一時休憩します';
                break;
            case 5:
                text = 'ボスと対峙します';
                break;
        }
        StageButton.innerHTML = `
        <button class="button stagebar-big" onclick="LetsGoBattle(1,${high})">${text}</button>
        `;
    }else{
        StageButton.style = `
        margin: 0 auto;
        padding: 5px;
        display: flex;
        overflow: auto;
        justify-content: left;
        align-items: left;
        gap: 10px;
        `
        let text1 = '';
        let text2 = '';
        switch(high){
            case 1:
                text1 = '敵と交戦します';
                break;
            case 2:
                text1 = '少し強い敵と交戦します';
                break;
            case 3:
                text1 = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text1 = 'キャンプで一時休憩します';
                break;
            case 5:
                text1 = 'ボスと対峙します';
                break;
        }
        switch(low){
            case 1:
                text2 = '敵と交戦します';
                break;
            case 2:
                text2 = '少し強い敵と交戦します';
                break;
            case 3:
                text2 = '何か特別なことがあるかもしれない';
                break;
            case 4:
                text2 = 'キャンプで一時休憩します';
                break;
            case 5:
                text2 = 'ボスと対峙します';
                break;
        }
        StageButton.innerHTML = `
        <button class="button stagebar-small" onclick="LetsGoBattle(1,${high})">${text1}</button><button class="button stagebar-small" onclick="LetsGoBattle(2,${low})">${text2}</button>
        `;
    }
}
SetStageBar();
function LetsGoBattle(num,code){
    let irankamo = num;
    irankamo += 1;//ちゃんと道順作るってなったら道程要員になりそう
    switch(code){
        case 1:
            EnemyAppear(0);
            break;
        case 2:
            EnemyAppear(1);
            break;
        case 3:
            RandomEvent();
            break;
        case 4:
            GoToCamp(0);
            break;
        case 5:
            BossEnemyAppear();
            break;
    }
    document.getElementById('StageButton').style.display = 'none';
}
async function EnemyAppear(num){
    document.getElementById('GameArea').style.display = 'block';
    EnemyNameDeside(num);
    addtext(enemyname+'が現れた！');
    PlaceNoteCard();BarCardCreate();
    await delay(1000);
    justlook = 0;
}
function EnemyNameDeside(num){
    let enemynames = Object.keys(Enemies).filter(a => Enemies[a].elite == 0 && Enemies[a].appeable == 1).map(a => Enemies[a].name); //a.stage == stageとかもよろ
    enemyname = enemynames[Math.floor(Math.random() * enemynames.length)];
    if(num == 1){
        //エリートの場合
    }
    return enemyname;
}
//#endregion
//#region カード系統
let target = 1; //tabキーで狙う敵変れるようにしますか?いやいいや
const Cards = {
    'none':{
        id:'none',
        name: 'none',
        nume: '',
        code: 'A',
        rare: 1,
        cool: 1,
        have: {},
        buyable: 0,
        description: '"何もない"。デジタル絵師ならわかるよね？',
        process:async function(c,t){
            let atk = 0;
            atk += eleatk;
        }
    },
    //こっからA
    'slash':{
        id:'slash',
        name: 'スラッシュ',
        nume: 2,
        code: 'A',
        rare: 1,
        cool: 2,
        have: {}, //.lengthで所持枚数、中の数字が残りクールダウン
        buyable: 0,
        description: '軽い斬撃。',
        process:async function(c,t){
            let atk = 2;
            atk += eleatk;
            let result = await attack(c,t,atk,num);
            return result;
        }
    },
    'sword':{
        id:'sword',
        name: 'ソード',
        nume: 3,
        code: 'A',
        rare: 1,
        cool: 3,
        have: {},
        buyable: 0,
        description: '使うたびに攻撃力が上昇する。',
        process:async function(c,t){
            let atk = 3;
            atk += ソードeleatk;
            atk += eleatk;
            let result = await attack(c,me,me,target,atk);
            if(nowturn == 'p'){ソードplayereleatk += 1}; 
            if(nowturn == 'e'){ソードenemyeleatk += 1};
            return result;
        }
    },
    'rushsword':{
        id:'rushsword',
        name: 'ラッシュソード',
        nume: '3+',
        code: 'A',
        rare: 3,
        cool: 4,
        have: {},
        buyable: 1,
        description: '基本3ダメージ、次のカードが自分の攻撃カードの場合3回攻撃になる。',
        process:async function(c,t){
            let atk = 3;
            if(nextcard.classList.contains('A') && nextcard.classList.contains('p')){atknum += 2;}else
            if(prevcard.classList.contains('A') && prevcard.classList.contains('p')){atknum += 2;};//3回攻撃に
            atk += eleatk;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'soulknife':{
        id:'soulknife',
        name: 'ソウルナイフ',
        nume: 4,
        code: 'A',
        rare: 3,
        cool: 3,
        have: {},
        buyable: 1,
        description: '相手にダメージを与え、与えた分回復する。',
        process:async function(c,t){
            let atk = 4;
            atk += eleatk;
            if(enemyhealth <= atk){let atk = enemyhealth;}
            repair = atk;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'leafsword':{
        id:'leafsword',
        name: 'リーフソード',
        nume: '5+',
        code: 'A',
        rare: 3,
        cool: 4,
        have: {},
        buyable: 1,
        description: '基本5ダメージ、クール中カードが5枚以上なら10ダメージ。',
        process:async function(c,t){
            let atk = 5;
            if(document.querySelectorAll('.cooldown').length >= 5){let atk = 10;}
            atk += eleatk;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'treesword':{
        id:'treesword',
        name: 'ツリーソード',
        nume: '6+',
        code: 'A',
        rare: 4,
        cool: 5,
        have: {},
        buyable: 1,
        description: '基本7ダメージ、クール中カードが7枚以上なら14ダメージ。',
        process:async function(c,t){
            let atk = 7;
            if(document.querySelectorAll('.cooldown').length >= 7){let atk = 14;}
            atk += eleatk;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'forest_anger':{
        id:'forest_anger',
        name: '森の怒り',
        nume: '7+',
        code: 'A',
        rare: 7,
        cool: 7,
        have: {},
        buyable: 1,
        description: '基本6ダメージ、クール中カードが枚以上で、<br>自身の体力が半分以下ならなら18ダメージ、自身の体力を10回復',
        process:async function(c,t){
            let atk = 7;
            if(document.querySelectorAll('.cooldown').length >= 7){let atk = 14;}//こいつ廃止
            atk += eleatk;
        }
    },
    'gamble':{
        id:'gamble',
        name: '博打',
        nume: 8,
        code: 'A',
        rare: 4,
        cool: 5,
        have: {},
        buyable: 1,
        description: '基本3ダメージ、確率で8ダメージ。',
        process:async function(card,c,t){
            let atk = Math.floor(Math.random() * 2) == 0 ? 8 : 3; //3または8 50%
            atk += eleatk;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'dualcutter':{
        id:'dualcutter',
        name: 'デュアルカッター',
        nume: '4x2',
        code: 'A',
        rare: 4,
        cool: 4,
        have: {},
        buyable: 1,
        description: '4ダメージで2回攻撃する。',
        process:async function(c,t){
            let atk = 4;
            atk += eleatk;
            atknum = 2;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'quadcutter':{
        id:'quadcutter',
        name: 'クアッドカッター',
        nume: '4x4',
        code: 'A',
        rare: 7,
        cool: 7,
        have: {},
        buyable: 1,
        description: '3ダメージで4回攻撃する。',
        process:async function(c,t){
            let atk = 3;//ぶっ壊れになりそう..まあ名前かっこいいからいいよね！！
            atk += eleatk;
            atknum = 4;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'demondance':{
        id:'demondance',
        name: '鬼神乱舞',//アークナイツモンハンコラボ、キリンRヤトウの2ndスキルより
        nume: '4x6',//ちょっとやばいか...?ww
        code: 'A',
        rare: 9,
        cool: 8,
        have: {},
        buyable: 1,
        description: '3ダメージで6回攻撃する。',
        serif: '足掻こうが抗おうが無駄だ！',
        process:async function(c,t){
            let atk = 3;
            atk += eleatk;
            atknum = 6//ちょっとやばいかもよ？？ww
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },//鬼踊....ww
    'fevercutter':{
        id:'fevercutter',
        name: 'フィーバーカッター',
        nume: '7+',
        code: 'A',
        rare: 4,
        cool: 4,
        have: {},
        buyable: 1,
        description: '攻撃力+相手のデバフの持続時間の合計で攻撃する。',
        process:async function(c,t){
            let atk = 4;
            atk += enemydebuff.time;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'feverslash':{
        id:'feverslash',
        name: 'フィーバースラッシュ',
        nume: '7+x2',
        code: 'A',
        rare: 7,
        cool: 7,
        have: {},
        buyable: 1,
        description: '攻撃力+相手のデバフの持続時間の合計で2回攻撃する。',
        process:async function(c,t){
            let atk = 4;
            atk += enemydebuff.time;
            atknum = 2;
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },
    'heartseeker':{
        id:'heartseeker', //ハートを盗むもの...?
        name: 'ハートシーカー',
        nume: 'X',
        code: 'A',
        rare: 6,
        cool: 6,
        have: {},
        buyable: 1,
        description: '自身のバリアを全て消費し、<br>相手に消費前のバリアの1.5倍のダメージを与える。',
        process:async function(c,t){
            let atk = shield;
            let shl = -atk;
            atk += eleatk;
            atk = Math.floor(atk * 1.5);//元ネタはハートの合図です 今思ったけど名前似てる...
            let result = await attack(c,me,me,target,atk);
            return result;
        }
    },//1.5倍に強化とか、強化版武器追加してもいいかも
    'bloodknife':{
        id:'bloodknife',
        name: 'ブラッドナイフ',//これ好き(元:学マス-はじける水しぶき)
        nume: '16',
        code: 'A',
        rare: 4,
        cool: 4,
        have: {},
        buyable: 1,
        description: '自分のHPを7減らした後相手にダメージを与える。<br>自身にバリアがある場合、リカバリを2付与する' //作った本人記憶なくて"何これ?!"ってなったのは内緒のお話
    },


    //こっからM
    'shield':{
        id:'shield',
        name: '盾',
        nume: 4,
        code: 'M',
        rare: 1,
        cool: 2,
        have: {},
        buyable: 1,
        description: '軽く盾を構える。',
        process:async function(c,t){
            let shl = 4;
            shl += eleshl; 
            let result = await shield(c,me,c,me,shl);
        }
    },
    'heal':{
        id:'heal',
        name: '回復',
        nume: 4,
        code: 'M',
        rare: 1,
        cool: 2,
        have: {},
        buyable: 1,
        description: '自身のHPを4回復する。',
        process:async function(c,t){
            let result = await heal(c,me,me,4);
            return result;
        }
    },
    'attackup':{
        id:'attackup',
        name: '攻撃力上昇',
        nume: 1,
        code: 'M',
        rare: 6,
        cool: 6,
        have: {},
        buyable: 1,
        description: '自身の攻撃力を上昇させる。',
        process:async function(c,t){
            eleatk += 1;
            return 'alive';
        }
        
    },
    'greentrain':{
        id:'greentrain',//グリーン車ではないです
        name: 'グリーン・トレイン',
        nume: '',
        code: 'M',
        rare: 3,
        cool: 4,
        have: {},
        buyable: 1,
        description: '使用されたフェーズの配置されたカードを全て無効化する。<br>簡単に言えばスキップである',
        process:async function(c,t){
            //ないっすよ。だってこれ存在するだけで効果だし
            //逆に何を書けないいんですか？？
            return 'alive';
        }
    },
    'yellowtrain':{
        id:'yellowtrain', //黄色のドクターとかありじゃね？ だからあえてのそのまま
        name: 'ドクター・イエロー',
        nume: 'Px2',//p = Phase
        code: 'M',
        rare: 4,
        cool: 5,
        have: {},
        buyable: 1,
        description: '使用されたフェーズの配置されたカードを全て無効化する。<br>ついでに体力を現在のフェーズ数x2回復する。',
        process:async function(c,t){
            let result = await heal(c,me,me,me.phase*2);
            result = await skip(c,t);
            return result;
        }
    },
    'behard':{
        id:'behard', //die hardも作りたいね DBDのやつ
        name: '硬化',
        nume: '',
        code: 'M',
        rare: 3,
        cool: 3,
        have: {},
        buyable: 1,
        description: '4硬化状態を得る',//硬化:攻撃を受けた時バフの持続時間分ダメージを減らす。減らした分バフの持続時間を減少
        process:async function(c,t){
            buffAdd(c,me,'硬化',4);
            return 'alive';
        }
    },
    'dualcore':{
        id:'dualcore',
        name: 'デュアルコアシステム',//ダブルエントリーシステム的なやつができたらシステム消しといて
        nume: '',
        code: 'M',
        rare: 3,
        cool: 3,
        have: {},
        buyable: 1,
        description: '次のターン、相手のカードを後ろに配置する。',
        process:async function(c,t){
            if(c == 'p'){bar = '0011';}
            if(c == 'e'){bar = '1100';}
            return 'alive';
        }
    },
    'thiefmask':{
        id:'thiefmask',
        name: 'シーフマスク',
        nume: '',
        code: 'M',
        rare: 5,
        cool: 5,
        have: {},
        buyable: 1,
        description: 'このカードの一つ前のカードを盗む。', //敵が使うと自身のやつがなくなるだけ
        process:async function(c,t){　//今風に適応させといて PREV,NEXT処理部瑞花も
            if(prevcard){//敵が使った時
                if(prevcard.classList.contains('p')&&nowturn == 'e'){
                if(prevcard.classList.contains('A')){
                    havecardA.name.splice(havecardA.name.indexOf(prevcard.id),1);
                    console.log('多分盗まれたぜ!!Aの方ね')
                }
                if(prevcard.classList.contains('M')){
                    havecardM.name.splice(havecardM.name.indexOf(prevcard.id),1);
                    console.log('多分盗まれたぜ!!Mの方ね')
                }
                }
            }
            if(prevcard){//自分が使った時
                if(prevcard.classList.contains('e')&&nowturn == 'p'){
                if(prevcard.classList.contains('A')){
                    havecardA.name.push(prevcard.id);
                    console.log('多分盗んだぜ!Aを')
                }
                if(prevcard.classList.contains('M')){
                    havecardM.name.push(prevcard.id);
                    console.log('多分盗んだぜ!Mを')
                }
                }
            }
            return 'alive';
            //シーフマスクのエフェクト出しといて(画像がちょっと浮いて消えるだけでいい)
        }
    },
    'overdrive':{
        id:'overdrive',
        name: 'オーバードライブ',
        nume: '',
        code: 'M',
        rare: 8,//初URこれね？ww
        cool: 6,
        have: {},
        buyable: 1,
        description: '自身の体力をクール中カードx2にし、<br>次のターン、相手のカードを無くす。<br>敵が使うことは絶対にない。',//まあ..使えたらかなりきっついからね とはいいつつ一人くらいあってもいいかも
        process:async function(c,me,t,targat){
            playerhealth = document.querySelectorAll('.cooldown').length*2;
            if(c == 'p'){bar = '0000';}
            if(c == 'e'){bar = '1111';}
        }
    },
    'backwater_camp':{ //こいつの相手のカード無くし無くして、分離させてもいいかも
        id:'backwater_camp',
        name: '背水の陣',
        nume: '',
        code: 'M',
        rare: 8,
        cool: 6,
        have: {},
        buyable: 1,
        description: '自身の体力を1にし、攻撃力を2増加し、次のターン、相手のカードをなくす。',
        process:async function(c,t){
            if(c == 'p'){bar = '0011';}
            if(c == 'e'){bar = '1100';}
            return 'alive';
        }
    }
};

const SortCardA = Object.keys(Cards).filter(card => Cards[card].code === 'A').map(card => Cards[card].id);
const SortCardM = Object.keys(Cards).filter(card => Cards[card].code === 'M').map(card => Cards[card].id);
//#endregion
//#region 敵の動きのまとめ
let enemyname = '古書館の魔術師';
let Enemies = {
    '古書館の魔術師':{
        name:'古書館の魔術師',
        elite:0,
        appeable:1,
        actpat:{
            1:['attackup 1', 0, 0, 'sword 1'],
            2:[0, 'thiefmask 1', 0, 'gamble 1'],
            3:[0,'shield 1',0,'dualcutter 1'],
        }
    },
    '船上のバニーチェイサー':{
        name:'船上のバニーチェイサー',
        elite:0,
        appeable:1,
        actpat:{
            1:['attackup 1',0,'attackup 1',0],
            2:[0,'shield 1','sword 1',0],
            3:['shield 1',0,0,'heartseeker 1'], 
        }
    },
}

//#endregion
//#region 変数s
let x, y, z; 
let justlook = 0;

let eleshl = 0;
let eleatk = 0;
let ソードeleatk = 0;


cardAdd('slash');
cardAdd('slash');
cardAdd('sword');
cardAdd('gamble');
cardAdd('rushsword');
cardAdd('soulknife');
cardAdd('heartseeker');
cardAdd('shield')
cardAdd('heal')



let humans = {
    p:{
        1:{
            name:'player',
            health:40,
            maxhealth:40,
            shield:0,
            eleatk:0,
            eleshl:0,
            used:{
                'sword':{
                    eleatk:0
                },
            },
            buff:{
                g:{

                },
                b:{

                }
            },
        }
    },
    e: {
        1:{
            name:'enemy',
            health:20,
            maxhealth:20,
            shield:0,
            eleatk:0,
            eleshl:0,
            used:{
                'sword':{
                    eleatk:0
                },
            },
            buff:{
                g:{

                },
                b:{
                    
                }
            },
        },
    }
};

let CardActList = {
    card: [],
    turn: []
};
let actcardlist = [];

let actpatnum = 1;
let bar = 0;//バーの状態 0 == 特に条件なし
let barcard = [0,0,0,0];

let phase = 0;

//#endregion
//#region バフ/デバフのそれ
const Buffs = {
    //こっからbuff
    'fang':{
        id:'fang',
        name:'吸血の牙',
        type:'buff',
        description:'相手の体力を減らした時、自身の体力を4回復する',
    },

    //こっからdebuff
    'poison':{
        id:'poison',
        name:'毒',
        type:'debuff',
        description:'ターン最後に自身のの体力を2減らす',
    },
    'palsy':{
        id:'palsy',
        name:'麻痺',
        type:'debuff',
        description:'ターン最後に自身のバフの持続時間を1減らす',
    },
    'none':{
        id:'none',
        name:'There is nothing',
        type:'debuff',
        description:'硬化は "何も" ない。ええ、本当に', //勝ち気要員よね ワンチャンぶっ壊れるかも
    }
}
function buffadd(tcam,tme,buff,time){
    if(humans[tcam][tme].buff[buff] != 0){
        humans[tcam][tme].buff[buff].time += time;
    }else{
        humans[tcam][tme].buff[buff] = {
            id:buff,
            name:Buffs[buff].name,
            time:time
        }
    }
    tekiou();
}
function buffrem(tcam,tme,buff,time){
    if(humans[tcam][tme].buff[buff] != 0){
        humans[tcam][tme].buff[buff].time -= time;
        if(humans[tcam][tme].buff[buff].time <= 0){
            delete humans[tcam][tme].buff[buff];
        }
    }
    tekiou();
}
function buffclear(){
    Object.keys(humans).forEach(cam => {
        Object.keys(humans[cam]).forEach(me => {
            Object.keys(humans[cam][me].buff).forEach(buff => {
                delete humans[cam][me].buff[buff];
                console.log(`${humans[cam][me].buff}を消去しました`);
            })
        })
    })
    tekiou();
}
//#endregion
//#region 扱いやすい子達
function delay(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function tekiou(){
    Object.keys(humans).forEach(cam =>{
        Object.keys(humans[cam]).forEach(me => {
            document.getElementById(`${cam}${me}`).innerHTML = `
            <b>${humans[cam][me].name}</b><br>
            <span class='shield'>${humans[cam][me][me].shield}</span> HP:${humans[cam][me].health}/${humans[cam][me].maxhealth}<br>
            <span class='buff'><img class="buff-img" src="assets/buffs/${humans[cam][me].buff.g.id}.png"/>${humans[cam][me].buff.g.time}</span>|<span class='debuff'>${humans[cam][me].buff.b.name}</span> ${humans[cam][me].buff.b.time}
            `
        })
    })
}
function copy(obj) {
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

function arrayRandom(array){
    return array[Math.floor(Math.random() * array.length)];
}
function arrayShuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
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

//#endregion
//#region log&text
let textDiv = document.getElementById('text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ

function colorcheck(rawtext) {
    const text = [];
    let isRed = false; // ** で囲まれた部分かどうか
    let isPink = false; // && で囲まれた部分かどうか
    let isBlue = false;

    for (let i = 0; i < rawtext.length; i++) {
        if(rawtext[i] === "*" && rawtext[i + 1] === "*"){
            isRed = !isRed; // 状態を切り替える
            i++; // 次の * をスキップ
        }else if(rawtext[i] === "&" && rawtext[i + 1] === "&"){
            isPink = !isPink;
            i++; // 次の & をスキップ
        }else if(rawtext[i] === "^" && rawtext[i + 1] === "^"){
            isBlue = !isBlue;
            i++;
        }else{
            text.push({ char: rawtext[i], color: isRed ? "red" : isPink ? "pink" : isBlue ? "blue" : null });
        }
    }
    return text;
}

async function addtext(text) {
    text = colorcheck(text);
    textDiv.innerHTML = ""; // 中身をリセット
    textDiv.style.display = "block"; // 表示
    let index = 0;
    clearText = false; // 消去フラグをリセット

    return new Promise((resolve) => {
        async function type() {
            if (index < text.length) {
                if (skipText) {
                    // スキップ処理
                    while (index < text.length) {
                        const span = document.createElement("span");
                        span.textContent = text[index].char;
                        if (text[index].color) {
                            span.classList.add(`color-${text[index].color}`);
                        }
                        textDiv.appendChild(span);
                        index++;
                    }
                    index = text.length; // 全ての文字を表示済みにする
                    skipText = false;
                    setTimeout(type, 10);
                } else {
                    // 通常の文字表示
                    const span = document.createElement("span");
                    span.textContent = text[index].char;
                    if (text[index].color) {
                        span.classList.add(`color-${text[index].color}`);
                    }
                    textDiv.appendChild(span);

                    index++;
                    setTimeout(type, 80); // 次の文字を表示する間隔
                }
            } else {
                addlog(textDiv.innerHTML);
                const waitTime = autoDelay * 1000;
                const timeout = new Promise(resolve => setTimeout(resolve, waitTime));
                const userAction = new Promise(resolve => {
                    function waitToClear(event) {
                        if (event.type === 'click' || event.key === 'z' || event.key === 'Enter') {
                            document.removeEventListener('click', waitToClear);
                            document.removeEventListener('keydown', waitToClear);
                            resolve();
                        }
                    }
                    document.addEventListener('click', waitToClear);
                    document.addEventListener('keydown', waitToClear);
                });

                Promise.race([timeout, userAction]).then(() => {
                    textDiv.textContent = "";
                    textDiv.style.display = "none";
                    clearText = true;
                    skipText = false
                    resolve('end'); // Promiseを解決
                });
            }
        }
        type();
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'z' || event.key === 'Enter') {
        skipText = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'z' || event.key === 'Enter') {
        skipText = false;
    }
});

document.addEventListener('click', () => {
    skipText = true;
    setTimeout(() => skipText = false, 50); // 一時的にスキップを有効化
});

let logDiv = document.getElementById('log');
let logOpener = document.getElementById('log-opener');
logOpener.addEventListener('click', function(){
    if(logDiv.style.right == '-300px'){
        logDiv.style.right = '0px';
        logOpener.style.right = '300px';
    }else{
        logDiv.style.right = '-300px';
        logOpener.style.right = '0px';
    }
});

function addlog(text){
    logDiv.innerHTML += text + '<br>';
    logDiv.scrollTop = logDiv.scrollHeight;
}

// 実行例
let Examples = {
    1:async function(){
        await addtext('コッペ「こんにちは、**コッペ・パン**です！」')
        await addtext('コッペ「あ、気づきました？」')  
        await addtext('コッペ「&&色が&&**変えれるんですよ**^^！！^^」')
        await addtext('それに感心しながらも、一つ違和感を覚える')
        await addtext('コッペパン「誰だお前」')
    },
    2:async function(){
        await addtext('battle start');
        await addtext('飛花レイルが現れた！');
        await addtext('飛花レイルに1のダメージ！');
        await addtext('飛花レイル「も、もう戦うのやめてもいいんじゃないかな?!」');
        await addtext('飛花レイル「ほら、花もこんなに咲いてるし..」');
        await addtext('飛花レイル「小鳥も鳴いてるし..さ？」');
        await delay(1000);
        await addtext('飛花レイルに9999のダメージ！');
        await addtext('飛花レイル「むぅ..」');
        await addtext('battle end');
        await addtext('1のexpを獲得!');
    }
}
document.addEventListener('keyup', (event) => {
    if(event.key == '1'){
        Examples[1]();
    }else if(event.key == '2'){
        Examples[2]();
    }
})
//#endregion
//#region Notice
let noticenow = 0;
function OpenNotice(){
   if(noticenow == 0){
      noticenow = 1;
      document.getElementById('Notice-page').style.display = 'block';
      document.getElementById('Notice-page').innerHTML = '<iframe src="resources/notice.html" width="100%" height="100%" frameborder="0"></iframe>';
   }else{
      noticenow = 0;
      document.getElementById('Notice-page').style.display = 'none';
      document.getElementById('Notice-page').innerHTML = '';
   }
}
//#endregion

//#region add/remove Card
function cardAdd(ids, lv){
    // Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0).map(a => Cards[a].name)
    let leg = Object.keys(Cards[ids].have).length;
    Cards[ids].have[leg+1] = {
        num: leg+1, //${ids}
        id: ids,
        cool: 0,
        lv: lv??1,
    }
}
function cardRemove(ids){
    let leg = Object.keys(Cards[ids].have).length;
    delete Cards[ids].have[leg]; //一旦ね 洗濯式にしたいから頑張って
}
//#endregion
//#region make bar, place notecard
function nextActpat(){
    actpatnum++;
    if(actpatnum >= Enemies[enemyname].actpat.length){actpatnum = 1;};
}
function BarCardCreate() {
    document.getElementById('PhaseBar').innerHTML = '';

    barcard = copy(Enemies[enemyname].actpat[actpatnum]); //コピー？らしい
    let moto = barcard.map((val, index) => (val !== 0 ? index + 1 : null)) .filter((val) => val !== null);
    let ato = Array.from(bar).map((val, index) => (val === '1' ? index + 1 : null)) .filter((val) => val !== null);
    for(let i = 0; i < ato.length; i++){
        let nanka = ato[i];
        let card = barcard[moto[ato.indexOf(nanka)] - 1];
        barcard[moto[ato.indexOf(nanka)] - 1] = 0;
        barcard[nanka - 1] = Cards[card];
        if(i >= 1){break;}
    }
    if(bar === '1111'){//埋め合わせの動き
        nextActpat();
        let motonoko= copy(Enemies[enemyname].actpat[actpatnum]);
        moto = motonoko.map((val, index) => (val !== 0 ? index + 1 : null)) .filter((val) => val !== null);
        ato = [3,4]

        for(let i = 0; i < ato.length; i++){
            let nanka = ato[i];
            let card = motonoko[moto[ato.indexOf(nanka)] - 1];
            motonoko[moto[ato.indexOf(nanka)] - 1] = 0;
            barcard[nanka - 1] = Cards[card];
            if(i >= 1){break;}
        }
    }

    let i = 0
    for (let nanka of barcard) {
        i++
        const Zone = document.getElementById('PhaseBar');
        const cardEle = document.createElement('div');

        if(nanka !== 0){
            const card = Cards[nanka];
            let LV = nanka.slice(-1) //レベルが1~9であると仮定する
            nanka = nanka.slice(0, -2);
            if(card) {
                cardEle.id = card.name;
                cardEle.setAttribute('data-id', card.id);
                cardEle.setAttribute('data-num', i);
                cardEle.setAttribute('data-lv', LV);
                cardEle.setAttribute('data-rare', card.rare);
                cardEle.setAttribute('data-description', card.description);
                cardEle.className = `card ${card.code} r${card.rare} e ${i}`;
                cardEle.innerHTML = `<img src="assets/cards/${card.name}.png" class="card-img">${card.nume}`;
                Zone.appendChild(cardEle);
            }
        }else{
            cardEle.id = 'none';
            cardEle.setAttribute('data-id', 'none');
            cardEle.setAttribute('data-num', i);
            cardEle.setAttribute('data-description', Cards['none'].description);
            cardEle.className = 'card r0 ' + i;
            cardEle.innerHTML = '<img src="assets/cards/none.png" class="card-img">';
            Zone.appendChild(cardEle);
        }
    }
}
function PlaceNoteCard(){
    let ZatuZatuNum

    ['A','M'].forEach(code => { //css....ww　あのcssではないです　cardsの略のファンネームです
        document.getElementById(`NoteCard${code}`).innerHTML = '';
        let css = Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0 && Cards[a].code == code).flatMap(a => Object.values(Cards[a].have));
        let ed = [];
        css.forEach(card => {
            let nam = ed[card.id]??1
            let cardinfo = Cards[card.id]

            const cardEle = document.createElement('div');
            cardEle.id = card.id;                                   //以下例
            cardEle.setAttribute('data-id', card.id); //slash
            cardEle.setAttribute('data-cool', card.cool); //0 (クールダウン)
            cardEle.setAttribute('data-num', nam); //1 (何番目の子か)
            cardEle.setAttribute('data-lv', card.lv); //1(レベル)
            cardEle.setAttribute('data-rare', cardinfo.rare);
            cardEle.setAttribute('data-description', Cards[card.id].description); //単体に2ダメージ

            if(card.cool == 0){
                cardEle.className = `notecard ${cardinfo.code} r${cardinfo.rare}`;
                cardEle.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${cardinfo.nume}`;
            }else{
                cardEle.className = `notecard ${cardinfo.code} r${cardinfo.rare} cooldown`;
                cardEle.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="notecard-img">${card.cool}`;
            }

            cardEle.addEventListener('click', function (event) {
                if(event.target.classList.contains('cooldown')){return;}
                event.stopPropagation();
                changeBackgroundColor('yellow');

                event.target.classList.add('holdcooldown');
                event.target.classList.add('usedbefore');


                document.querySelectorAll('.card.none').forEach(function (barnocard){
                    function handleClick(event) {
                        barcardClicked(event, barnocard);
                    }
                    barnocard.addEventListener('click', (event) => {
                        handleClick(event);
                    });
                });
            })

            
            document.getElementById(`NoteCard${code}`).appendChild(cardEle);
         })

         // カードクリック時の背景色変更とクリックイベント設定
         
    });
}
function barcardClicked(event,card){
    event.stopPropagation();
    if(getBackgroundColor(card) == 'rgb(255, 255, 0)') {
        const classList = card.data.num.split(' ');
        z = classList[classList.length - 1];
        const cardinfo = Cards[card.id];
        if(cardinfo){
            card.id = cardinfo.name;
            card.className = `card ${cardinfo.code} r${cardinfo.rare} p ${z}`;
            card.innerHTML = `<img src="assets/cards/${cardinfo.name}.png" class="card-img">${cardinfo.nume}`;
            changeBackgroundColor('#dedede');

            if(document.querySelector('.holdcooldown')){
                let ittannoyatu = document.querySelector('.holdcooldown');
                ittannoyatu.classList.remove('holdcooldown');
                ittannoyatu.classList.add('cooldown');
                ittannoyatu.innerHTML = `<img src="assets/cards/${x}.png" class="notecard-img">${cardinfo.cool}`;
            }

            if (havecardA.name.includes(x)) {
                indices = havecardA.name.map((name, idx) => name === x ? idx : -1).filter(index => index !== -1);
                //console.log("Indices in havecardA:", indices); // 取得されたインデックスを確認

                for (let index of indices) {
                    //console.log("Checking havecardA.ct[index]:", havecardA.ct[index]); // ここでクールダウン値を確認
                    if (havecardA.ct[index] === 0) { // クールダウンがない場合のみ更新
                        havecardA.ct[index] = Object.keys(Cards).find(c => c.name === x).cool; 
                        //card.removeEventListener('click', barcardClicked);
                        //console.log("Updated havecardA.ct[index]:", havecardA.ct[index]); // 更新後の値を確認
                        break; // 更新したらループ終了
                    }
                }
            } else if (havecardM.name.includes(x)) {
                indices = havecardM.name.map((name, idx) => name === x ? idx : -1).filter(index => index !== -1);
                console.log("Indices in havecardM:", indices);

                for (let index of indices) {
                    console.log("Checking havecardM.ct[index]:", havecardM.ct[index]);
                    if (havecardM.ct[index] === 0) { // クールダウンがない場合のみ更新
                        havecardM.ct[index] = Object.keys(Cards).find(c => c.name === x).cool;
                        console.log("Updated havecardM.ct[index]:", havecardM.ct[index]);
                        break; // 更新したらループ終了
                    }
                }
            }
        }

        if(!document.querySelector('.card.none')) {
            document.getElementById('NoteCardArea').style.display = 'none';
            document.getElementById('PhaseStart').style.display = 'block';
            document.getElementById('PhaseStart').innerHTML = '<button onclick="Phasestart()">行動を開始する</button><br><br><button onclick="Phasereset()">やり直す</button>';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
});
let indices
let NoteCard
function NextPhase(){
    phase += 1;
    document.getElementById('ShowPhase').innerHTML = phase;
    tekiou();

    PlaceNoteCard();
    BarCardCreate();

    // カード説明表示の設定

    
}

function ShowCardInfoEdit(id) {
    const card = Object.keys(Cards).find(c => c.name === id);
    document.getElementById('ShowCardInfo').innerHTML = card ? card.description : 'this card is not found...';
}

function changeBackgroundColor(color) {
    document.querySelectorAll('.card.none').forEach(function (card) {
        card.style.backgroundColor = color;
    });
}
function getBackgroundColor(element) {
    return window.getComputedStyle(element).backgroundColor;
}
//#endregion
//#region Phasereset
function Phasereset() {
    BarCardCreate();
    document.getElementById('PhaseStart').style.display = 'none';
    document.getElementById('NoteCardArea').style.display = 'block';
    document.querySelectorAll('.usedbefore').forEach(function (card) {
        card.classList.remove('usedbefore');
        card.classList.remove('cooldown');
        card.innerHTML = `<img src="assets/cards/${card.id}.png" class="notecard-img">${Object.keys(Cards).find(c => c.name === card.id).nume}`;
    });

    document.querySelectorAll('.notecard').forEach(function (notecard) {
        notecard.addEventListener('click', function (event) {
            event.stopPropagation();
            changeBackgroundColor('yellow');
            x = notecard.id;
            notecard.classList.add('holdcooldown');
            notecard.classList.add('usedbefore');
        });
    });

    document.querySelectorAll('.card.none').forEach(function (card) {
        card.addEventListener('click', function (event) {
            event.stopPropagation();
            if(getBackgroundColor(card) == 'rgb(255, 255, 0)') {
                changeBackgroundColor('#ddd');

                if(document.querySelector('.holdcooldown')) {
                    x = document.querySelector('.holdcooldown');
                    x.classList.remove('holdcooldown');
                    x.classList.add('cooldown');
                    x.innerHTML = `<img src="assets/cards/${x.id}.png" class="notecard-img">${Object.keys(Cards).find(c => c.name === x.id).cool}`;
                }
                if(!document.querySelector('.card.none')) {
                    document.getElementById('NoteCardArea').style.display = 'none';
                    document.getElementById('PhaseStart').style.display = 'block';
                    document.getElementById('PhaseStart').innerHTML = '<button onclick="Phasestart()">行動を開始する</button><br><br><button onclick="Phasereset()">やり直す</button>';
                }
            }
        });
    });
}
//#endregion
//#region エフェクトの動き
const canvas = document.getElementById('ZentaiMiruo');
const ctx = canvas.getContext('2d');
const EffectImagesKorehaMemoDesu = [
    'thief',''
]

function EffectAppear(side,name){
    const img = new Image();
    //img.src = name+'.png';
    img.src = 'assets/cards/盾.png';

    let yPos ;
    let xPos;
    if(side == 'p'){
        yPos = canvas.height - 20;
        xPos = canvas.width - 20;
    }else{
        yPos = 20;
        xPos = 20;
    }
    let opacity = 1;
    function animate() {
    console.log(img.src, xPos, yPos, 50, 50);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      ctx.drawImage(img, xPos, yPos, 50, 50);

      yPos -= 2;
      opacity -= 0.02;

      if (opacity > 0) {requestAnimationFrame(animate);}
    }
    animate();
  };


//#endregion
//#region 戦闘のシステム
async function attack(tcam,tme,atk,num){
    num = num??1;
    for(let i = 0; i < num; i++){
        humans[tcam][tme].health -= atk;
        await delay(750);
    }
    if(humans[tcam][tme].health <= 0){
        humans[tcam][tme].health = 0;
        return 'dead';
    }else{
        return 'alive';
    }
}
async function heal(tcam,tme,amo,num){
    num = num??1;
    for(let i = 0; i < num; i++){
        humans[tcam][tme].health += amo;
        if(humans[tcam][tme].health > humans[tcam][tme].maxhealth){humans[tcam][tme].health = humans[tcam][tme].maxhealth;}
        await delay(750);
    }
}
async function skip(now,name){
    effect(name);
    for(let i = now+1; i < 5; i++){
        barcard[i] = 0;
    }
}
async function cool(cam,me,code,num,number){//陣営(pのみ有効), コード(全部,Aのみ,Mのみ,ランダムに1個,それぞれ), 度数, (それぞれの場合)何枚目か
    if(cam == 'e'||me !== 1){return 'alive';}
    switch(code){
        case 1:{
            let cards = Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0).map(a => Cards[a].id);
            let cooled = {};
            cards.forEach((card) => {
                let nam = cooled[card]??1;
                Cards[card].have[nam].cool -= num;
                if(Cards[card].have[nam].cool < 0){Cards[card].have[nam].cool = 0;}
                cooled[card] = nam+1;
            });
            break;
        };
        case 'a':{
            let cards = Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0 && Cards[a].code == 'A').map(a => Cards[a].id);
            let cooled = {};
            cards.forEach((card) => {
                let nam = cooled[card]??1;
                Cards[card].have[nam].cool -= num;
                if(Cards[card].have[nam].cool < 0){Cards[card].have[nam].cool = 0;}
                cooled[card] = nam+1;
            });
            break;
        };
        case 'm':{
            let cards = Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0 && Cards[a].code == 'M').map(a => Cards[a].id);
            let cooled = {};
            cards.forEach((card) => {
                let nam = cooled[card]??1;
                Cards[card].have[nam].cool -= num;
                if(Cards[card].have[nam].cool < 0){Cards[card].have[nam].cool = 0;}
                cooled[card] = nam+1;
            });
            break;
        }
        case 'r':{
            let cards = Object.keys(Cards).filter(a => Object.keys(Cards[a].have).length > 0).map(a => Cards[a].id);
            let card =  arrayRandom(cards);
            let nam = Math.floor(Math.random()*Object.keys(Cards[card].have).length)+1
            Cards[card].have[nam].cool -= num;
            if(Cards[card].have[nam].cool < 0){Cards[card].have[nam].cool = 0;}
            break;
        }
        default:{
            let card = code;
            let nam = number;
            Cards[card].have[nam].cool -= num;
            if(Cards[card].have[nam].cool < 0){Cards[card].have[nam].cool = 0;}
            break;
        }
    }
    return 'alive';
};
//#endregion

//#region PhaseStart
let actCards = [];
async function Phasestart() {
    if(justlook == 0){
        justlook = 1;
        
        document.getElementById('PhaseStart').style.display = 'none';
        document.getElementById('NoteCardArea').style.display = 'none';

        actCards = [];
        let i = 0;
        document.querySelectorAll('.card').forEach(function (card){
            i += 1;
            x = Cards[card.id];
            x.order = i; //実行の順番やね　1,2,3,4
            x.who = card.getAttribute('data-who');
            actCards.push(x);
        });
        bar = 0;//resetにﾖﾛ

        let ZatuZatuNum = 0;

        if(actcardlist.includes('グリーン・トレイン')||actcardlist.includes('ドクター・イエロー')){
            await addtext('電車が通ってカードは全て無効化された！！');//ほんとはこれ下に置きたかったです...
            if(actcardlist.includes('ドクター・イエロー')){
                playerhealth += (phase*2);
                tekiou();
            }   
        }else{
        for(let card of actcardlist){
            console.log(`--${card.order}枚目(${+card.name})--`);

            let who = card.who;
            let name = card.name;
            let id = card.id;
            
            if(actcardlist[card.order-1]){console.log('prev:'+actcardlist[card.order-1].id)};
            if(actcardlist[card.order+1]){console.log('next:'+actcardlist[card.order+1].id)};
            console.log('カード名:' + nanka + ' atk:' + atk + ' atknum:' + atknum + ' shl:' + shl + ' repair:' + repair + ' eleatk:' + eleatk+' eleshl:'+eleshl);

            //こっから行動
            // switch (nowturn) {
            //     case 'p':
            //         if(shl < 0){playershield += shl;}
            //         for (let i = 0; i < atknum; i++) {
            //             if(enemyhealth <= 0){break;}
            //             if(enemyshield > 0){
            //                 x = enemyshield - atk;
            //                 if(x < 0) {
            //                     enemyshield = 0;
            //                     enemyhealth -= (x * -1);
            //                 } else {
            //                     enemyshield -= atk;
            //                 }
            //             }else{
            //                 if(enemyhealth <= atk){atk = enemyhealth;}
            //                 enemyhealth -= atk;
            //             }
            //             tekiou();
            //             await delay(100);
            //         }
            //         playerhealth += repair;
            //         if(shl > 0){playershield += shl;}
            //         tekiou();
            //         if(!addbuff[0] == 0){
            //             await delay(1000);
            //             buffincrease(addbuff[0],addbuff[1],addbuff[2]);
            //         }
            //         break;
            //     case 'e':
            //         enemyshield += shl;
            //         for (let i = 0; i < atknum; i++) {
            //             if(!playershield > 0) {
            //                 x = playershield - atk;
            //                 if(x < 0) {
            //                     playershield = 0;
            //                     playerhealth -= (x * -1);
            //                 } else {
            //                     playershield -= atk;
            //                 }
            //             } else {
            //                 playerhealth -= atk;
            //             }
            //             tekiou();
            //             await delay(250);
            //         }
            //         enemyhealth += repair;
            //         tekiou();
            //         if(!addbuff[0] == 0){
            //             await delay(1000);
            //             buffincrease(addbuff[0],addbuff[1],addbuff[2]);
            //         }
            //         break;
            // };

            //セリフ入れるならここ

            atk = 0;
            shl = 0;
            repair = 0;
            atknum = 1;
            shield = 0;
            eleshl = 0;
            eleatk = 0;
            ソードeleatk = 0;
            await delay(800);
            if(playerhealth <= 0||enemyhealth <= 0){break;}//強制脱出プロンプト(???)
        }
        }

        //セリフ入れるならここ2
        if(bar === '0011'){
            await addtext( 'デュアルコアシステム、始動！！');
        }
        if(bar === '0000'){
            await addtext( 'この時を待っていました...');//シュナさんのセリフやね まあ..これはコラボじゃないんで！SSRではないです！！！
            await addtext('オーバードライブ！！！');
        }

        if(playerhealth <= 0){
            await addtext( '負けた！！！');
        }
        if(enemyhealth <= 0){
            await addtext('勝ち！！！！');//いや適当か ←このツッコミ好き
        }
        CardActList.card = [];
        CardActList.turn = [];
        actcardlist = [];
        justlook = 0;
        await delay(800);
        NextPhase();
    }
}
//#endregion