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

const Fonts = [
    {src:'comicsans', type:'ttf'},
    {src:'papyrus', type:'ttf'},
    {src:'hangyaku', type:'ttf'},
    {src:'cube12', type:'ttf'},
    {src:'kaimetsu', type:'otf'},
    {src:'kurundeco', type:'otf'},
    {src:'starrysky', type:'otf'},
    {src:'kurobara', type:'ttf'},
    {src:'marukoius', type:'ttf'},
    {src:'novamono', type:'ttf'},
    {src:'pricedown', type:'ttf'},
    {src:'corporate', type:'otf'},
];

const Images = {
    players: ['slime','peace-witch_','peace-witch_oncat','ghost'],
    enemies: ['シーフード','フルメカシーフード','キャンディ','キャンディ亜種','チンアナゴ','フルメカチンアナゴ'],
    systems: ['x','error']
}

const Sounds = {
    // se:['error'],
    // bgm:[],
}

const Spaces = [
    { name:'game', rank:2, back:'#f0f8ff', sho:1 },
];


