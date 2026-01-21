let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    tekiou: function() {
        for (let section in this) {
            if (section == 'apply') continue;
            for (let key in this[section]) {
                document.documentElement.style
                    .setProperty(`--${section}-${key}`, this[section][key]);
            }
        }
    }
}

let Selections = {
    select:{
        id:'select',
        name:'全体',
        func:function(){}
    },
    buyer:{
        id:'buyer',
        name:'売り屋',
        serifs:{
            normal:[
                'おや、お客さんとは珍しいね<br>まあゆっくりしていきなよ',
                'ん？あーいらっしゃ〜い<br>え？キャラが違うって？<br>..このキャラを維持するのは難しくてね....'
            ],
        },
        func:function(){
            buyerOwnertext = arraySelect(Selections.buyer.serifs.normal);
            buyerOwnertextD.innerHTML = buyerOwnertext;
        }
    },
    mine:{
        id:'mine',
        name:'鉱山',
        func:function(){}
    },
    shop:{
        no:1,
        id:'shop',
        name:'セイムマート',
        func:function(){}
    },
    still:{
        no:1,
        id:'still',
        name:'まだ',
        func:function(){}
    },
}