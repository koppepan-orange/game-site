let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    botan:{
        "default": "#b2b2b2",
        "col": "#2b2b2b",
        "ed": "#2b2b2b",
        "col-ed": "#b2b2b2",
    },
    tekiou: function(){
        for(let section in this){
            if(section == 'apply') continue;
            for(let key in this[section]){
                let name = `--${section}-${key}`;
                if(key == 'default') name = `--${section}`;
                
                document.documentElement.style.setProperty(name, this[section][key]);
            }
        }
    }
}

const Fonts = [
    // {src:'comicsans', type:'ttf'},
];

const Images = {
    systems:['error'],
}

const Sounds = {
    // se:['error'],
    // bgm:[],
}

const Spaces = [
    { name:'loby', rank:2, back:'#f0f8ff', sho:1 },
    { name:'wait', rank:2, back:'#f6fff2' },
];


