//内部へようこそ！！！
//#region 探索部分
document.getElementById('BattleArea').style.display = 'block';
document.getElementById('NowMap').style.display = 'none';
const canvas = document.getElementById("NowMap");
const ctx = canvas.getContext("2d");
const backgroundMaps = [
   [
      ['b','b','b','b','b','b','b','b'],
      ['b','a','b','b','b','b','a','a'],
      ['a','a','b','b','b','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
   ],
   [
      ['a','a','a','a','a','a','a','a'],
      ['a','b','b','a','a','a','a','a'],
      ['a','b','b','a','a','a','a','a'],
      ['a','a','b','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','b','b','b','a'],
      ['a','a','a','b','b','b','b','a'],
      ['a','a','a','b','b','b','b','b'],
   ],
   [
      ['b','b','b','b','b','a','b','a'],
      ['b','b','b','a','a','a','a','a'],
      ['b','b','a','a','a','a','a','a'],
      ['b','b','a','a','a','a','a','a'],
      ['b','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','b'],
      ['a','a','a','a','a','a','a','b'],
      ['a','a','a','a','a','a','b','b'],
   ],
   [
      ['a','a','a','a','a','b','b','b'],
      ['a','b','b','a','a','b','b','b'],
      ['a','b','a','a','a','a','b','b'],
      ['a','b','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','b','b','b','b','b','a'],
      ['a','b','b','b','b','b','b','a'],
      ['a','a','a','b','b','b','b','b'],
   ],
   [
      ['b','b','b','b','b','b','b','b'],
      ['b','b','a','b','b','a','b','b'],
      ['b','b','a','b','b','a','b','b'],
      ['b','b','a','b','b','a','b','b'],
      ['b','b','b','b','b','b','b','b'],
      ['b','a','b','b','b','b','a','b'],
      ['b','b','a','a','a','a','b','b'],
      ['b','b','b','b','b','b','b','b'],
   ],//fun23room
   [
      ['a','a','a','a','a','a','a','a'],
      ['a','b','b','a','a','b','b','a'],
      ['a','b','b','a','a','b','b','a'],
      ['a','a','a','b','b','a','a','a'],
      ['a','a','b','b','b','b','a','a'],
      ['a','a','b','a','a','b','a','a'],
      ['a','a','b','a','a','b','a','a'],
      ['a','a','a','a','a','a','a','a'],
   ],//zomusan room
   [
      ['c','c','c','c','c','c','c','c'],
      ['c','d','c','c','c','c','c','c'],
      ['c','d','d','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','a'],
      ['c','a','a','a','a','a','c','a'],
      ['a','a','a','a','a','a','a','a'],
      ['a','a','a','a','a','a','a','a'],
   ],//boss room
   [
      ['d','d','d','d','d','d','d','d'],
      ['d','c','d','d','d','d','d','d'],
      ['d','c','c','c','c','d','d','d'],
      ['c','c','c','c','c','c','c','d'],
      ['c','c','c','c','c','c','c','d'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
   ],
   [
      ['d','d','c','c','c','c','c','c'],
      ['d','d','c','c','c','c','c','d'],
      ['d','d','d','c','c','c','c','d'],
      ['d','d','d','c','c','c','c','d'],
      ['d','d','c','c','c','c','c','c'],
      ['d','d','c','c','c','c','c','c'],
      ['d','d','d','c','c','c','c','c'],
      ['d','d','d','d','c','c','c','c'],
   ],
   [
      ['c','c','c','c','c','d','d','d'],
      ['c','c','c','c','c','d','d','c'],
      ['c','c','d','c','c','c','d','c'],
      ['c','c','d','d','c','c','c','c'],
      ['c','d','d','d','c','c','c','c'],
      ['c','d','d','d','c','d','d','c'],
      ['c','c','c','c','c','d','d','c'],
      ['c','c','c','c','c','c','c','c'],
   ],
   [
      ['c','c','c','d','d','d','c','d'],
      ['c','c','c','d','d','d','c','c'],
      ['c','c','d','d','d','d','c','c'],
      ['c','c','d','d','d','c','c','c'],
      ['c','d','d','d','c','c','c','c'],
      ['d','d','d','d','c','c','c','c'],
      ['d','d','d','c','c','c','c','c'],
      ['d','c','c','c','c','c','c','c'],
   ],
   [
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
      ['c','c','c','c','c','c','c','c'],
   ],//fun68room
   [
      ['d','d','d','d','d','d','d','d'],
      ['d','d','d','d','d','d','d','d'],
      ['d','d','d','d','d','d','d','d'],
      ['g', 0 ,'d','d','d','d', 0 ,'g'],
      ['d','d','e','e','e','e','d','d'],
      ['d','d','f','d','d','f','d','d'],
      ['d','d','e','e','e','e','d','d'],
      ['d','d','d','d','d','d','d','d'],
   ],//tontonsanroom
   [
      ['d','d','c','c','c','d','d','c'],
      ['d','c','c','c','d','d','c','c'],
      ['d','c','c','c','d','d','c','c'],
      ['c','c','c','c','d','d','c','c'],
      ['c','c','c','c','d','c','c','c'],
      ['d','d','c','d','d','c','c','c'],
      ['d','d','c','d','d','c','c','c'],
      ['c','c','c','d','d','c','c','c'],
   ],//bossroom
   [
      ['e','e','e','e','e','d','d','d'],
      ['e','e','e','e','e','e','d','d'],
      ['e','e','e','e','e','e','d','d'],
      ['d','d','e','e','e','e','e','d'],
      ['d','d','d','e','e','e','e','e'],
      ['d','d','d','e','e','e','e','e'],
      ['e','e','e','e','e','e','e','d'],
      ['e','e','e','e','e','d','d','e'],
   ],
   [
      ['d','d','e','e','e','e','e','e'],
      ['d','d','e','e','e','e','e','d'],
      ['d','d','d','e','e','e','e','d'],
      ['d','d','d','e','e','e','e','d'],
      ['d','d','e','e','e','e','e','e'],
      ['d','d','e','e','e','e','e','e'],
      ['d','d','d','e','e','e','e','e'],
      ['d','d','d','d','e','e','e','e'],
   ],
   [
      ['e','e','e','e','e','d','d','d'],
      ['e','e','e','e','e','d','d','e'],
      ['e','e','d','e','e','e','d','e'],
      ['e','e','d','d','e','e','e','e'],
      ['e','d','d','d','e','e','e','e'],
      ['e','d','d','d','e','d','d','e'],
      ['e','e','e','e','e','d','d','e'],
      ['e','e','e','e','e','e','e','e'],
   ],
   [
      ['e','e','e','d','d','d','e','d'],
      ['e','e','e','d','d','d','e','e'],
      ['e','e','d','d','d','d','e','e'],
      ['e','e','d','d','d','e','e','e'],
      ['e','d','d','d','e','e','e','e'],
      ['d','d','d','d','e','e','e','e'],
      ['d','d','d','e','e','e','e','e'],
      ['d','e','e','e','e','e','e','e'],
   ],
   [
      ['e','e','e','d','d','d','e','d'],
      ['e','e','e','d','d','d','e','e'],
      ['e','e','d','d','d','d','e','e'],
      ['e','e','d','d','d','e','e','e'],
      ['e','d','d','d','e','e','e','e'],
      ['d','d','d','d','e','e','e','e'],
      ['d','d','d','e','e','e','e','e'],
      ['d','e','e','e','e','e','e','e'],
   ],//fun68
   [
      ['d','d','d','d','d','d','d','d'],
      ['d','d','d','d','d','d','d','d'],
      ['d','d','d','d','d','e','d','d'],
      ['d','d','e','d','e','e','e','d'],
      ['b', 0, 'd','e','e','d', 0 ,'b'],
      ['b', 0, 'd','b','b','d', 0 ,'b'],
      ['b','b','b','e','e','b','b','b'],
      ['e','e','e','d','d','e','e','e'],
   ],//utusen room
   [
      ['e','e','e','d','d','d','e','d'],
      ['e','e','e','d','d','d','e','e'],
      ['e','e','d','d','d','d','e','e'],
      ['e','e','d','d','d','e','e','e'],
      ['e','d','d','d','e','e','e','e'],
      ['d','d','d','d','e','e','e','e'],
      ['d','d','d','e','e','e','e','e'],
      ['d','e','e','e','e','e','e','e'],
   ],//bossroom

]
let backgroundMap = [
   ['a','b','c','d','e','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
];
const backgroundMapnum = ['0.3','7.3','14.3'];//開始位置.そっから終了位置までの差

const objectMaps = [
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 11, 0, 2, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0],//19と23
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 6, 0],
      [0, 5, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 2, 0],
      [0, 0, 2, 0, 0, 0, 0, 0],
      [0, 6, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 6, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 10, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 7, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 8, 0, 0, 0],
      [0, 5, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 5, 0],
      [0, 10, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 11, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],//こちら、「祝福」ですっ！(ノアさん風)
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 2, 0],
      [0, 0, 0, 6, 6, 0, 0, 0],
      [2, 0, 7, 7, 7, 7, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 1],   
   ],//急にホラー感ねw まあ1/100x1/10の確率だから俺が言わない限り出会わないでしょう！
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 12, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 1],
   ],//ゾム部屋。是非ともこの部屋を引き当てて欲しいものですわ... と思ったら移動3回目くらいで出たらしい 豪運....
   [
      [0, 0, 0, 0, 0, 14, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 0, 0, 0, 0, 0],
   ],//ボス部屋
   [//こっから昼砂漠
      [0, 0, 0, 17, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 18, 0],
      [0, 20, 0, 0, 18, 0, 18, 0],
      [0, 0, 1, 0, 0, 0, 18, 18],
      [0, 0, 22, 22, 0, 0, 2, 0],
      [0, 0, 0, 22, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 16, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 20, 0, 16, 0],
      [0, 18, 0, 0, 2, 0, 0, 0],
      [0, 16, 18, 22, 22, 22, 22, 0],
      [0, 18, 18, 3, 0, 22, 22, 0],
      [0, 0, 0, 0, 0, 19, 0, 0],
      [2, 0, 20, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 18, 17, 17],
      [0, 0, 16, 0, 2, 18, 17, 17],
      [0, 0, 0, 0, 0, 0, 18, 0],
      [0, 3, 22, 19, 0, 0, 22, 0],
      [0, 0, 22, 22, 0, 0, 0, 0],
      [0, 0, 16, 22, 20, 0, 0, 0],
      [0, 0, 2, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 16, 0, 0, 2, 20, 0],
      [0, 5, 0, 0, 0, 0, 0, 0],
      [0, 21, 0, 0, 0, 0, 0, 0],
      [0, 0, 22, 22, 2, 0, 0, 0],
      [0, 2, 22, 22, 22, 22, 19, 0],
      [0, 0, 0, 20, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 20, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 19, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 20, 0],
      [22, 5, 16, 0, 2, 0, 0, 0],
      [21, 22, 22, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],//fun値68の部屋。...どしよここ
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 24],
      [18, 0, 0, 0, 0, 0, 0, 18],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 1],
   ],//tontonsan部屋。
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 13, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 14, 0],
   ],//ボス部屋
   [//こっから夜砂漠
      [22, 22, 0, 17, 0, 0, 0, 0],
      [22, 22, 0, 2, 0, 0, 18, 0],
      [22, 20, 0, 0, 18, 0, 18, 0],
      [0, 0, 1, 0, 0, 0, 18, 18],
      [0, 0, 22, 22, 22, 22, 2, 0],
      [2, 22, 22, 22, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 16, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 22, 22],
      [22, 22, 1, 0, 20, 22, 16, 22],
      [0, 18, 0, 0, 2, 0, 0, 22],
      [0, 16, 18, 22, 22, 22, 22, 0],
      [0, 18, 18, 3, 22, 22, 22, 0],
      [0, 0, 0, 22, 22, 23, 22, 0],
      [2, 0, 20, 22, 22, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [22, 22, 22, 22, 0, 18, 17, 17],
      [22, 22, 16, 22, 2, 18, 17, 17],
      [22, 0, 0, 0, 22, 0, 18, 0],
      [0, 3, 22, 23, 0, 22, 22, 22],
      [22, 22, 22, 22, 0, 0, 0, 0],
      [22, 0, 16, 22, 20, 0, 0, 0],
      [22, 22, 2, 0, 0, 1, 0, 0],
      [22, 22, 0, 0, 0, 0, 0, 0],
   ],
   [
      [22, 1, 22, 22, 22, 0, 0, 0],
      [0, 22, 16, 0, 0, 2, 20, 0],
      [0, 5, 0, 0, 0, 0, 0, 0],
      [0, 21, 22, 22, 22, 22, 22, 0],
      [0, 0, 22, 22, 2, 0, 0, 0],
      [0, 2, 22, 22, 22, 22, 23, 0],
      [0, 0, 0, 20, 0, 0, 22, 22],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],
   [
      [22, 22, 22, 22, 22, 22, 22, 0],
      [22, 22, 22, 22, 22, 22, 1, 0],
      [0, 20, 22, 22, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 23, 0, 0, 0, 0],
      [0, 0, 0, 22, 22, 0, 20, 0],
      [22, 5, 16, 0, 2, 22, 0, 0],
      [21, 22, 22, 22, 22, 22, 0, 0],
   ],
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],//fun68
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 24, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
   ],//utusen
   [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 13, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 14],
   ]//boss

]
let objectMap = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0]
];
const objectMapnum = ['0.5','9.4','17.4'];
let stage = 1;
let floor = 0;

let imagesLoaded = 0;
let totalImages = 34;//ここ変えるの忘れないでね
let images = {};
let imageNames = ['a','b','c','d','e','f','g',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

imageNames.forEach(num => {
  let img = new Image();
  img.src = `assets/maps/${num}.png`;
  img.onload = () => {
   imagesLoaded++;
   if(imagesLoaded === totalImages){
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
   for(let yy = 0; yy < 8; yy++){
     for(let xx = 0; xx < 8; xx++){
      let img = images[backgroundMap[yy][xx]];
      if(img){
        ctx.drawImage(img, xx * 75, yy * 75, 75, 75);
      }else{
        console.error(`Image for background value ${backgroundMap[yy][xx]} not found.`);
      }
     }
   }
   //object、仕掛けとか
   for(let y = 0; y < objectMap.length; y++) {
     for(let x = 0; x < objectMap[y].length; x++) {
      let img = images[objectMap[y][x]];
      if(img){
        ctx.drawImage(img, x * 75, y * 75, 75, 75);
      }else{
        console.error(`Image for object value ${objectMap[y][x]} not found.`);
      }
     }
   }
}

const explosion1 = new Image();
explosion1.src = 'assets/effects/explosion_1.png';
const explosion2 = new Image();
explosion2.src = 'assets/effects/explosion_2.png';
const explosion3 = new Image();
explosion3.src = 'assets/effects/explosion_3.png';

// 選択画像のロードと初期表示
const IMGselect = new Image();
IMGselect.src = 'assets/maps/select.png';

let AllowMove = 0;

let SELECTx = 0; // 初期x座標
let SELECTy = 0; // 初期y座標
let MAPx,MAPy;

let bombtimer = 0;
let PlacedBombx = 0;
let PlacedBomby = 0;

canvas.addEventListener('keydown', function(event) {
   // 上下キーのキーコード
   if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' ||  event.key === 'ArrowDown' || event.key === 'ArrowRight') {
       event.preventDefault(); // デフォルトの動作を無効化
   }
});

// キーが押されたときの...やつ
document.addEventListener('keydown', (event) => {
   if(AllowMove == 0){//scratchで良くやってたやつ なつかしいっすねぇ..
   let moved = 0;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   switch(event.key) {
   case 'w':
   case 'ArrowUp': // 上
      SELECTy -= 75;
      MAPy = Math.floor(SELECTy / 75);
      if(MAPy < 0){SELECTy = 0}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTy += 75}}
      break;
   case 'a':
   case 'ArrowLeft': // 左
      SELECTx -= 75;
      MAPx = Math.floor(SELECTx / 75);
      if(MAPx < 0){SELECTx = 0}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTx += 75}}
      moved = 1;
      break;
   case 's':
   case 'ArrowDown': // 下
      SELECTy += 75;
      MAPy = Math.floor(SELECTy / 75);
      if(MAPy > 7){SELECTy = 525}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTy -= 75}}
      moved = 1;
      break;
   case 'd':
   case 'ArrowRight': // 右
      SELECTx += 75;
      MAPx = Math.floor(SELECTx / 75);
      if(MAPx > 7){SELECTx = 525}else if(objectMap[MAPy][MAPx]){if(objectMap[MAPy][MAPx] == undefined||objectMap[MAPy][MAPx] == 18){SELECTx -= 75}}
      moved = 1;
      break;
   }

   // 枠外に出ないように制限
   if(SELECTx<0){SELECTx=0};
   if(SELECTy<0){SELECTy=0};
   if(SELECTx>525){SELECTx=525};
   if(SELECTy>525){SELECTy=525};
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);

   // 画面をクリアしてから再描画
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);

   //ここに動いた時に記述を(爆弾とか)
   if(moved == 1){
   if(objectMap.some(row => row.includes(15))){
      bombtimer--;
      if(bombtimer <= 0){
         triggerExplosion(PlacedBombx, PlacedBomby);
      }
   }}
   function triggerExplosion(centerX, centerY) {
      let explosionStage = 0;
      const stageDelay = 100; //エフェクトの処理速度
   
      function drawExplosion(){
         let img;
         if (explosionStage === 0) {
            img = explosion1;//なんか最初だけ白くなってる もうちょい調整いる
         } else if (explosionStage === 1) {
            img = explosion2;
         } else if (explosionStage === 2) {
            img = explosion3;
         }

         //MAPx = Math.floor(SELECTx / 75);
         //MAPy = Math.floor(SELECTy / 75);
         //objectMap[MAPy][MAPx] = 15;
         //bombtimer = 5;
         //PlacedBombx = MAPx;
         //PlacedBomby = MAPy;
   
         // 爆発のエフェクトを十字に描画する
         for (let i = 0; i < 4; i++) {
            let explosionCoords = [
               [centerX + i, centerY],
               [centerX - i, centerY],
               [centerX, centerY + i],
               [centerX, centerY - i]
            ];
   
            explosionCoords.forEach(([x, y]) => {
               ctx.clearRect(x * 75, y * 75, 75, 75); // 前のフレームを消去
               ctx.drawImage(img, x * 75, y * 75, 75, 75); // 新しいフレームを描画
               //DrawBackground();
               //ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
            });
         }
   
         explosionStage++;
   
         if (explosionStage < 3) {
            setTimeout(drawExplosion, stageDelay);
         } else {
            clearExplosion(centerX, centerY);
         }
      }
   
      // 爆発アニメーションを開始
      drawExplosion();

   

   function clearExplosion(centerX, centerY) {
      for (let i = 0; i < 4; i++) {
         let explosionCoords = [
            [centerX + i, centerY],
            [centerX - i, centerY],
            [centerX, centerY + i],
            [centerX, centerY - i]
         ];
   
         explosionCoords.forEach(([x, y]) => {
            if (x >= 0 && x < objectMap[0].length && y >= 0 && y < objectMap.length) {
               // 座標がマップ範囲内なら0にする
               objectMap[y][x] = 0;
            }
         });
      }
      objectMap[PlacedBomby][PlacedBombx] = 0;
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   }
   
}
   
}});



canvas.addEventListener('click', (event) => {
   if(AllowMove == 0 && dungeonnow == 1){
      const rect = canvas.getBoundingClientRect();
      MAPx = event.clientX - rect.left;
      MAPy = event.clientY - rect.top;
      
      MAPx = Math.floor(x/75);
      MAPy = Math.floor(y/75);
      SELECTx = MAPx*75;
      SELECTy = MAPy*75;

      // マップの値をチェック
      if (MAPy >= 0 && MAPy < objectMap.length && MAPx >= 0 && MAPx < objectMap[MAPy].length) {NanigaOkoruKana(objectMap[MAPy][MAPx]);}
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   }
});

//z,xの動き
document.addEventListener('keydown', (event) => {
   if(AllowMove == 0 && dungeonnow == 1){
      if(event.key == 'Enter'||event.key == 'z'){
      if(SELECTx<0){SELECTx=0};if(SELECTy<0){SELECTy=0};if(SELECTx>525){SELECTx=525};if(SELECTy>525){SELECTy=525};
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);

      // マップの値をチェック
      if(MAPy >= 0 && MAPy < objectMap.length && MAPx >= 0 && MAPx < objectMap[MAPy].length){NanigaOkoruKana(objectMap[MAPy][MAPx]);}
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      }
   }
   if(event.key == 'x'&&document.getElementById('NowMap').style.display == 'block'){
      if(AllowMove == 0){
         AllowMove = 1;
         phase = 'null'
         window.setTimeout(inventoryOpen,200)
      }else{
         AllowMove = 0;
         phase = 1
         window.setTimeout(inventoryClose,200)
   }}
});

function NanigaOkoruKana(code){
   switch(code){
      case 1:
         GoNextFloor();
      break;
      case 2:
         EnemyAppear();
      break;
      case 3:
         AllowMove = 1;
         document.getElementById('NowMap').style.display = 'none';
         document.getElementById('EventArea').style.display = 'block';
         document.getElementById('EventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
         log.textContent = '休憩できそうな場所を見つけた！';
         Camprestper = (Math.floor(Math.random() * 4)+3)/10;
         document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
         switch(Math.floor(Math.random() * 3)+1){
            case 1:
            if(Math.floor(Math.random() * 3)+1){
                  y = 10;document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';
            }else{  y = 1; document.getElementById('CampTrade').textContent = '武器商人に話しかける';}
            break;
            case 2: y = 2; document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
            case 3: y = 3; document.getElementById('CampTrade').textContent = '道具屋24に話しかける'; break;
         }
      break;
      case 5:
         SkillShopOpen();//こっちはまあいいかな〜って
      break;
      case 6:
         if(!objectMap.some(row => row.includes(2))){OpenChest(1);}//マップ内に敵がいないなら〜っていうやつです
      break;
      case 7:
         if(!objectMap.some(row => row.includes(2))){OpenChest(2);}
      break;
      case 8:
         HopeButtonact();
      break;
      case 10:
         Candytake();
      break;
      case 11:
         Cookietake();
      break;
      case 12:
         ZomuEvent();
      break;
      case 13:
         BossEnemyAppear();
      break;
      case 14:
         if(!objectMap.some(row => row.includes(13))){NextStage();}
      break;
      case 16:
         if(!objectMap.some(row => row.includes(2))){OpenChest(1);}
      break;
      case 17:
         if(!objectMap.some(row => row.includes(2))){OpenChest(2);}
      break;
      case 19:
         ScorpionAct(1);
      break;
      case 20:
         CatusAct();
      break;
      case 21:
         OasisAct();
      break;
      case 22:
         //これは触れただけで何か起こるようにしよ
      break;
      case 23:
         ScorpionAct(2);
      break;
      case 24:
         UtusenEvent();
      break;
      case 25:
      break;
   }
}


function SuteFuri(me,code){
   if(sp < 1){return;}
   switch(code){
      case 'maxhealth': humans.players[me].maxhealth += 20; humans.players[me].health += 20;   break;
      case 'attack':  humans.players[me].attack    += 5;   break;
      case 'defence':  humans.players[me].defense   += 5;   break;
      case 'maxmp':   humans.players[me].maxmp    += 5;   break;
      case 'mattack': humans.players[me].mattack   += 5;   break;
      case 'mdefence': humans.players[me].mdefense  += 5;   break;
      case 'critlate': humans.players[me].critlate *= 100; humans.players[me].critlate  += 2; humans.players[me].critlate *= 0.01; break;
      case 'critdmg': humans.players[me].critdmg *= 10; humans.players[me].critdmg  += 1; humans.players[me].critdmg *= 0.1;  break;
      case 'critresist': humans.players[me].critresist *= 100; humans.players[me].critresist  += 2; humans.players[me].critresist *= 0.01; break;
   }

   humans.players[me].critlate *= 100;humans.players[me].critlate = Math.floor(humans.players[me].critlate);humans.players[me].critlate *= 0.01;
   humans.players[me].critdmg *= 10;humans.players[me].critdmg = Math.floor(humans.players[me].critdmg);humans.players[me].critdmg *= 0.1;
   humans.players[me].critresist *= 100;humans.players[me].critresist = Math.floor(humans.players[me].critresist);humans.players[me].critresist *= 0.01;

   sp -= 1;
   inventoryOpen(me);
}

function GoNextFloor(){
   floor += 1;
   candybar = [];
      MAPx = backgroundMapnum[stage-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      backgroundMap = backgroundMaps[Math.floor(Math.random() * MAPy)+MAPx];
      MAPx = objectMapnum[stage-1].split('.');
      MAPy = +MAPx[1]+1
      MAPx = +MAPx[0]
      objectMap = objectMaps[Math.floor(Math.random() * MAPy)+MAPx];
      objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      if(stage == 1){
         if(fun == 23 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[4];
            objectMap = objectMaps[6];
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[5];
            objectMap = objectMaps[7];
         };
      }else if(stage == 2){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[11];
            objectMap = objectMaps[14];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[19];
            objectMap = objectMaps[23];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }else if(stage == 3){
         if(fun == 68 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[18];
            objectMap = objectMaps[22];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
            backgroundMap = backgroundMaps[19];
            objectMap = objectMaps[23];
            objectMap = JSON.parse(JSON.stringify(objectMaps[Math.floor(Math.random() * MAPy) + MAPx]));
         };
      }
      if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[6];objectMap = objectMaps[8];}//創生黎明の原野
 else if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[13];objectMap = objectMaps[16];}//ガチェンレイゲスドゥールラート(昼)
 else if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backgroundMap = backgroundMaps[20];objectMap = objectMaps[24];}//ガチェンレイゲスドゥールラート(夜)

   ctx.clearRect(0, 0, 600, 600);
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}
function NextStage(){
   floor = 0;
   candybar = [];
   switch(stage){
      case 1:
         ExitDungeon(1);
      break;
      case 2:
         stage = 3;
         GoNextFloor();
      break;
      case 3:
         ExitDungeon(2);
      break;
   }
}

//#endregion

//#region 変数達
let w,x,y,z;//こいつらは計算
let log = document.getElementById('log');

let fun = Math.floor(Math.random() * 100)+1;

//保存されるデータs
let username = 'no name';
let rank = 1;
let rpt = 0;
let maxrpt = 100;let euro = 0;
let bankeuro = 0;
let playeratk = 0;
let playerdef = 0;
let playermatk = 0;
let playermdef = 0;
let playerhp = 0;
let playermagicpoint = 0;
let playercrla = 0;
let playercrdm = 0;
let playercrrs = 0;

//毎ダンジョン変わるデータs
let enemylv = 1;
let enemyhp = 0//この辺は固有値というか規定値。接頭辞によってこっから変動させたりできるようにする用
let enemyatk = 0;
let enemydef = 0;
let enemymatk = 0;
let enemymdef = 0;
let enemycrla = 0;
let enemycrdm = 0;
let enemycrrs = 0;

let sp = 1;//能力上昇(ダンジョン内有効)用
let rp = 0;//スキルツリー(永続)用

let acted = 0;
let bar = {
   cam:['players','players','players','players','enemies','enemies','enemies','enemies'],
   num:[1,2,3,4,1,2,3,4]
}
let numberofplayer = 1;
let numberofenemy = 2;


//0 = false,1 = true
let afknow = 0;
let dungeonnow = 0;
let bossbattlenow = 0;

let enemynames = ["彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",//草原
                  "ついに動いたサボテン","スフィンクスの残像","襲来セシ砂嵐","サソリ風ザリガニ","毒無しのガラガラヘビ","裏切りのアリジゴク",//昼砂漠
                  "ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",//夜砂漠
                  "†古書館の魔術師†", "トラブルメーカーな天才少女","黒服","無邪気な夜の希望"];//学校(ここだけブルアカにしましょ)
const enemynamenum = ['0.5','6.5','12.5','18.3'];
let bossenemynames = ['purpleslime','steampumker','RailwayGun "Shemata"','joker']//RailwayGun "Shemata"...wwあ、列車砲シェマタね 対策委員会が壊そうとしてたやつ
let enemyprefixes = ['激昂','冷静沈着な','ギャンブラーな','守りが固い','心眼持ちの'];
let nstimeout = 0;
let skillcooldown = 0

//#endregion

//#region datas
let humans = {
   players:{
      1:{
         status:1,//0 = none, 1 = alive, 2 = dead
         cam:'players',
         num:1,
         name:'players',
         level:1,
         exp:0,
         sp:0,
   
         speed:10,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         power:1,
         shell:1,
         mp:10,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03, //これが確率。会心率ってやつだね
         critdmg:3, //これが倍率。会心ダメージってやつだね
         critresist:0,//これは会心抵抗。ハルカ(正月)さんが下げるやつだね
   
         buffs:[],
   
         slash1:'slash',
         slash2:'doubleslash',
         slash3:'slashoflight',
         
         magic1:'heal',
         magic2:'power',
         magic3:'shell',

         tool1:'aspirin',
         tool2:'throwknife',
         tool3:'redcard',

         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{ // 耳
            id:'none',
            lv:1,
         },
         ring:{ // 腕
            id:'none',
            lv:1,
         },
         neck:{ // 首
            id:'none',
            lv:1,
         },
         //ああそうさ、俺の趣味さ！！！！！"おもちゃ箱の夢"みたいなステージであることをしたくってねぇ...もしかしたら首はなくなるかも..いやまあ好きだけど解像度低いから自分でできなさそう
         //...あれ？これ読まれたらやばくね？..まあ....いいか！！！！直接的な表現無いしだいじょぶっしょ、多分 え？なんのことかわからないって？ならdiscordのなんか..なんか。のkoppekun-uraを見るといい！！！！え？見れないって？ふっふっふ..ざまぁ♡(可愛くてごめん風)
   
         cool:100,
         ex:'50%heal',
         ns:'5%heal',
         ps:0,
      },
      2:{
         status:0,
         cam:'players',
         num:2,
         name:'friend1',
         level:1,
         exp:0,
         sp:0,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         slash1:'slash',
         slash2:'doubleslash',
         slash3:'slashoflight',

         magic1:0,
         magic2:0,
         magic3:0,

         tool1:'aspirin',
         tool2:'throwknife',
         tool3:'redcard',
   
         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         cool:100,
         ex:0,
         ns:0,
         ps:0,
      },
      3:{
         status:0,
         cam:'players',
         num:3,
         name:'friend2',
         level:1,
         exp:0,
         sp:0,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         slash1:'slash',
         slash2:'doubleslash',
         slash3:'slashoflight',

         magic1:0,
         magic2:0,
         magic3:0,

         tool1:'aspirin',
         tool2:'throwknife',
         tool3:'redcard',
   
         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         cool:100,
         ex:0,
         ns:0,
         ps:0,
      },
      4:{
         status:0,
         cam:'players',
         num:4,
         name:'friend3',
         level:1,
         exp:0,
         sp:0,
   
         speed:1,
         health:0,
         maxhealth:0,
         attack:0,
         defense:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0.03,
         critdmg:3,
         critresist:0,
   
         buffs:[],
   
         slash1:'slash',
         slash2:'doubleslash',
         slash3:'slashoflight',

         magic1:0,
         magic2:0,
         magic3:0,

         tool1:'aspirin',
         tool2:'throwknife',
         tool3:'redcard',
   
         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         cool:100,
         ex:0,
         ns:0,
         ps:0,
      },
      't':{
         status:0,
         cam:'players',
         num:'t',
         name:'Turret',
         level:1,
         exp:0,
         sp:0,
   
         speed:20,

         kazu:0,
         attack:5,
         health:15,
         maxhealth:15,

         defense:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0,
         critdmg:10,
         critresist:0,
   
         buffs:[],
   
         slash1:'slash',
         slash2:'doubleslash',
         slash3:'slashoflight',

         magic1:0,
         magic2:0,
         magic3:0,

         tool1:'aspirin',
         tool2:'throwknife',
         tool3:'redcard',
   
         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         cool:100,
         ex:0,
         ns:0,
         ps:0,
      }
   },
   enemies:{
      1:{
         status:0,//存在の有無
         cam:'enemies',
         num:1,
         level:1,
         name:'古書館の魔術師',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],

         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         cool:100,
         ex:0,
         ns:0,
         ps:0,
      },
      2:{
         status:0,
         cam:'enemies',
         num:2,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],

         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         ps:{
            id:0,
            name:'null'
         },
         ns:{
            id:0,
            name:'null'
         },
         ex:{
            id:0,
            name:'null'
         }
      },
      3:{
         status:0,
         cam:'enemies',
         num:3,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],

         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },
         
         ps:{
            id:0,
            name:'null'
         },
         ns:{
            id:0,
            name:'null'
         },
         ex:{
            id:0,
            name:'null'
         }
      },
      4:{
         status:0,
         cam:'enemies',
         num:4,
         level:1,
         name:'†古書館の魔術師†',
         prefixe:'',
         ai:'supporter',

         speed:1,
         health:100,
         maxhealth:100,
         attack:10,
         defense:10,
         mattack:5,
         mdefense:5,
         critdmg:0.1,
         critlate:0.1,
         critresist:0.1,
         mp:0,
         maxmp:0,

         power:0,shell:0,
         buffs:[],

         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },
         
         ps:{
            id:0,
            name:'null'
         },
         ns:{
            id:0,
            name:'null'
         },
         ex:{
            id:0,
            name:'null'
         }
      },
      't':{
         status:0,
         cam:'enemies',
         num:'t',
         name:'Turret',
         level:1,
         exp:0,
         sp:0,
   
         speed:20,

         kazu:0,
         attack:5,
         health:15,
         maxhealth:15,

         defense:0,
         power:1,
         shell:1,
         mp:0,
         maxmp:10,
         mattack:0,
         mdefense:0,
         critlate:0,
         critdmg:10,
         critresist:0,
   
         buffs:[],
   
         weapon:{
            id:'none',
            lv:1,
         },
         armor:{
            id:'none',
            lv:1,
         },
         ear:{
            id:'none',
            lv:1,
         },
         ring:{
            id:'none',
            lv:1,
         },
         neck:{
            id:'none',
            lv:1,
         },

         ex:0,
         ps:0,
         ns:0
      }
   }
}

let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数

let phase = 0;//何中か

let Buffs = {
   'powerup':{
      name:'powerup',
      description:'攻撃力が上がる。やったね！',
      lv:{
         1:1.25,
         2:1.5,
         3:2,
         4:2.5,
         5:3,
         6:4
      }
   },
   'shellup':{
      name:'shellup',
      description:'防御力が上がる。あんまり実感しづらい。',
      lv:{
         1:1.25,
         2:1.5,
         3:2,
         4:2.5,
         5:3,
         6:4
      }
   },
   'luck':{
      name:'luck',
      description:'ターン終了時、たまにもう一回行動できる。気分はさながらラスボスですね',
      lv:{
         1:5,
         2:3,
      }
   },
   'LetsThrow':{
      name:'LetsThrow',
      description:'レンチを投げる準備をしている状態。次の攻撃与ダメ2倍',
      lv:{
         1:1,
      }
   },
   'gambling':{
      name:'gambling',
      description:'次の攻撃が0,2,4倍になる。これぞ醍醐味..ってやつ？',
      lv:{
         1:1,
      }
   },
}

let Debuffs = {
   'powerdown':{
      name:'powerdown',
      description:'攻撃力が下がる。stackするようにしたいけどまあいっか',
      lv:{//割合ダウン
         1:0.25,
         2:0.5,
         3:0.75,
         4:0.8,
         5:0.9,
         6:0.95
      }
   },
   'shelldown':{
      name:'shelldown',
      description:'防御力が下がる。こっちは実感しやすいのよね',
      lv:{//割合ダウン
         1:0.25,
         2:0.5,
         3:0.75,
         4:0.8,
         5:0.9,
         6:0.95
      }
   },
   'poison':{
      name:'poison',
      description:'ターン終了時割合で防御貫通ダメージ。毒の苦しみもお好きなんですね',
      lv:{//受けるダメージ(max*x)
         1:0.05,
         2:0.1,
         3:0.2,
      }
   },
   'burn':{
      name:'burn',
      description:'ターン終了時固定ダメージ。まじでこれ嫌い...ww',
      lv:{//受けるダメージ(固定)
         1:10,
         2:20,
         3:40,
      }
   },
   'freeze':{
      name:'freeze',
      description:'凍っている状態。これ燃やされたら解除みたいにしたい',
      lv:{//1/xの確率で抜け出せる
         1:3,//-
         2:5,//deep
         3:7,//etarnal
      }
   },
   'palsy':{
      name:'palsy',
      description:'麻痺ですね。これ好き',
      lv:{//1/xの確率で行動不可
         1:5,//-
      }
   },
   'stan':{
      name:'stan',
      description:'スタンなうです。おつおつお〜',
      lv:{
         1:1,
      }
   },
   'skip':{
      name:'skip',
      description:'はいお前スキップ〜〜ww状態です。ざまぁ',
      lv:{
         1:1,
      }
   },
   'sleep':{
      name:'sleep',
      description:'睡眠ですね...いやね....ちょ..っと......w',//あーーもうやります！！そのうち！！！あの人を作りましょう！！！www いや大丈夫かな...?まあいっか、戦略性あっておもろいしょ、多分
      lv:{//起きる確率
         1:0.5,
      }
   },
   'onslime':{
      name:'onslime',
      description:'スライムが体に粘りついている状態です。やばいね(行動不可)',
      lv:{
         1:1,
      }
   },
   'stickyslime':{
      name:'stickyslime',
      description:'スライムがくっついているおかげで行動するとダメージを受けます。これ好き',//こいつは..どしよね ちょっと違う形で作りますか コンセプトとしてはおもちゃ箱のゆめっぽくしたいから
      lv:{//行動時ダメージ(固定)
         1:5,
      }
   }
}

let Slashs = {
   'slash':{
      id:'slash',
      name:'シンプル斬り',
      description:'必中ー倍単体刹那斬',
      mp:0,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         let result = await humandamaged(cam,tcam,me,target,1,'sh',1);
         if(result == 'dead'){return 'dead';}

         if(humans[cam][me].ps == 'sthree' && Math.floor(Math.random() * 4) == 0){//1/4
            log.textContent = humans[cam][me].name+'は頑張った!';
            await delay(500)
            result = await humandamaged(cam,tcam,me,target,1,'sh',1);
            if(result == 'dead'){return 'dead';}
            result = await humandamaged(cam,tcam,me,target,1,'sh',1);
            if(result == 'dead'){return 'dead';}
         }
         return 'alive';
      }
   },
   'doubleslash':{
      id:'double slash',
      name:'つばめ返し',
      description:'二回攻撃。あたらないこともあるけど現環境最強',
      mp:0,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         if(Math.floor(Math.random() * 3) == 0){
            log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
         }else{
            let result = await humandamaged(cam,tcam,me,target,1,'sh',2);
            if(result == 'dead'){return 'dead';}
         }
         if(Math.floor(Math.random() * 3) == 0){
            log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
         }else{
            let result = await humandamaged(cam,tcam,me,target,1,'sh',2);
            if(result == 'dead'){return 'dead';}
         }
         return 'alive';
      }
   },
   'slashoflight':{
      id:'slash of light',
      name:'一閃',//まじん斬り も作りたいね 霹靂一閃も
      description:'初期のロマン技。当たれば幸いてきな感じで打ったほうが楽',
      mp:0,
      lv:1,
      tcam:'players',
      process:async function(cam,tcam,me,target){
         x = Math.floor(Math.random() * 1); // 1/3です
         if(humans[cam][me].ps == 'highsol'){x = Math.floor(Math.random() * 5);}; // 1/5です。
         if(x == 0){
            let result = await humandamaged(cam,tcam,me,target,3,'sh',3);
            if(result == 'dead'){return 'dead';}
         }else{
            if(humans[cam][me].ps !== 'solx5but'){
               log.textContent = 'miss! ダメージを与えられない!';
               await delay(1000);
            }else{
               humans[cam][me].health -= (humans[cam][me].attack + humans[cam][me].weapon.power);
               if(humans[cam][me].health <= 0){humans[cam][me].health = 1;};
               tekiou();
               log.textContent = humans[cam][me].name+'は混乱して自分を殴った！';
               await delay(1000);
            }
         }
         return 'alive';
      }
   }
}

let Magics = {
   'heal':{
      id:'heal',
      name:'heal',
      description:'体力を回復する。20%',
      mp:4,
      lv:1,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はhealを唱えた!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.2);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'power':{
      id:'power',
      name:'power',
      description:'攻撃力が1.25倍になります。やったね！',
      mp:5,
      lv:1,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はpowerを唱えた!';await delay(1000);
         buffadd(tcam,target,'powerup',3,1);
         return 'alive';
      }
   },
   'shell':{
      id:'shell',
      name:'shell',
      description:'防御力が1.25倍になります！実感あんまりないけど..',
      mp:5,
      lv:1,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はshellを唱えた!';await delay(1000);
         buffadd(tcam,target,'shellup',3,1);
         return 'alive';
      }
   },
   'poison':{
      id:'poison',
      name:'poison',
      description:'相手を毒にします！わーい！！',
      mp:7,
      lv:3,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はpoisonを唱えた!';await delay(1000);
         buffadd(tcam,target,'poison',4,1);
         return 'alive';
      }
   },
   'thunder':{
      id:'thunder',
      name:'thunder',
      description:'牽制に使われがち。吹っ飛び率は低め。(雷の小ダメージ)',
      mp:3,
      lv:4,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はthunderを唱えた!!';await delay(1000);
         let result = await humandamaged(cam,tcam,me,target,0.7,'mg',4);//雷
         return result;
      }
   },
   'fire':{
      id:'fire',
      name:'ふぁいあ',
      description:'ひらがな大好きさ(炎の小ダメージ)',
      mp:4,
      lv:4,
      process:async function(cam,tcam,me,target){
         log.textContent = `${humans[cam].name}はfireを唱えた！`;await delay(1000);
         let result = await humandamaged(cam,tcam,me,target,1.1,'mg',2);//火
         buffadd(tcam,target,'burn',2,1);
         return result
      }
   },
   'healerthan':{
      id:'healerthan',
      name:'healer than',
      description:'体力を40%回復します。healよりもつよい。だから比較のthanなんですね〜',
      mp:8,
      lv:6,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はhealer thanを唱えた!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.4);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive'
      }
   },
   'luck':{
      id:'luck',
      name:'luck',
      description:'二回行動マンになれるかも？なやつ。lv1',
      mp:4,
      lv:7,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'luck',4,1);
         log.textContent = humans[cam][me].name + 'はluckを唱えた!';await delay(1000);
         return 'alive'
      }
   },
   'ellthunder':{
      id:'ellthunder',
      name:'ellthunder',
      description:'ギガサンダー出そうとしてたまに出るやつ。そこそこつよい。(雷の中ダメージ)',
      mp:8,
      lv:8,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はellthunderを唱えた!';await delay(1000);
         humandamaged(cam,tcam,me,target,1.2,'mg',4);//雷
         return 'alive'
      }
   },
   'morepower':{
      id:'morepower',
      name:'more power',
      description:'攻撃力が1.5倍になります。power使ってた人いるんかな',
      mp:8,
      lv:9,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'powerup',3,2)
         log.textContent = humans[cam][me].name + 'はmore powerを唱えた!';await delay(1000);
         return 'alive'
      }
   },
   'moreshell':{
      id:'moreshell',
      name:'more shell',
      description:'防御力が1.5倍になります。けどあんまり実感はないよね',
      mp:8,
      lv:9,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'shellup',3,2)
         log.textContent = humans[cam][me].name + 'はmore shellを唱えた!';await delay(1000);
         return 'alive'
      }
   },
   'deadlypoison':{
      id:'deadlypoison',
      name:'deadly poison',
      description:'敵を猛毒にします。やったね！！！',
      mp:12,
      lv:10,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'poison',5,2);
         log.textContent = humans[cam][me].name + 'はdeadly poisonを唱えた!';await delay(1000);
         return 'alive'
      }
   },
   'gigafire':{
      id:'gigafire',
      name:'giga fire',
      description:'激ウザ攻撃No2ですね。1はPKファイア。これの後にスマッシュするのが最高(炎の中ダメージ)',//ずっっっとルフレの話してます私 まじであの人楽しい
      mp:10,
      lv:11,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はgiga fireを唱えた!';await delay(1000);
         let result = await humandamaged(cam,tcam,me,target,2.3,'mg',2);//火
         buffadd(tcam,target,'burn',2,2);
         return result
      }
   },
   'thehealest':{
      id:'thehealest',
      name:'the healest',
      description:'60%回復。これ以上はない、っていう意味ですね。xyzじゃないよ',
      mp:12,
      lv:12,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はthe healestを唱えた!!!';await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.6);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000)
         return 'alive'
      }
   },
   'luckgreat':{
      id:'luckgreat',
      name:'luckgreat',
      description:'luckよりも行動しやすいです。嬉しいね',
      mp:12,
      lv:14,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'luck',5,2);
         log.textContent = humans[cam][me].name + 'はluckgreatを唱えた!';await delay(1000);
         return 'alive'
      }
   },
   'merazoma':{
      id:'merazoma',
      name:'メラゾーマ',
      description:'ぬわーーっっ!!ってしてやりましょうぜ(炎の大ダメージ)',//対パパス最強にしたいね、これ
      mp:12,
      lv:12,
      process:async function(cam,tcam,me,target){
         log.textContent = humans[cam][me].name + 'はメラゾーマを唱えた!';
         await delay(1000);
         let result = await humandamaged(cam,tcam,me,target,3.5,'mg',4);//雷
         buffadd(tcam,target,'burn',3,2);
         return result
      }
   },
   'thoron':{
      id:'thoron',
      name:'Thoron',
      description:'当たったらラッキー、シールドでされたら空前で追撃なつよつよ技。けどギガサンダーの方が好き(雷の大ダメージ)',
      mp:20,
      lv:15,
      process:async function(cam,tcam,me,target){
         log.textContent = 'トロン！！！';await delay(1000);//byルフレ
         let result = await humandamaged(cam,tcam,me,target,6,'mg',4);//雷
         return result
      }
   },
   'random':{
      id:'random',
      name:'Random',
      description:'自身が覚えてる魔法からランダム(mpは5固定)。これぞ醍醐味ってやつよな',
      mp:5,
      lv:1,
      process:async function(cam,tcam,me,target){
         log.textContent = 'randomを唱えた.......';await delay(1000);
         x = Object.keys(Magics).map(a => Magics[a].lv <= humans[cam][me].level ? Magics[a].name : null).filter(Boolean)
         y = Math.floor(Math.random() * x.length);
         log.textContent = x[y]+'が出た！';await delay(1000);
         x[y](cam,tcam,me,target);
      }
   },

   
}

let Weapons = {
   'none':{
      name:'なし',
      id:'none',
      num:0,
      power:0,
      price:0,
      description:'ないです。素手とか念とか自由に解釈しておk',
      buyable:1,
      sp:0
   },
   'woodenstick':{
      name:'木の棒',
      id:'woodstick',
      num:0,
      power:2,
      price:10,
      description:'初期装備あるあるの武器。値段に見合わず割と強い',
      buyable:1,
      sp:0
   },
   'woodensword':{
      name:'木刀',
      id:'woodsword',
      num:0,
      power:4,
      price:20,
      description:'木の棒よりも強い。言うなれば気の剣。',
      buyable:1,
      sp:0
   },
   'bamboosword':{
      name:'竹刀',
      id:'bamboosword',
      num:0,
      power:6,
      price:30,
      description:'さあ、剣道しようぜ！！',
      buyable:1,
      sp:0
   },
   'stone':{
      name:'石ころ',
      id:'stone',
      num:0,
      power:8,
      price:50,
      description:'石です。よわよわ',
      buyable:1,
      sp:0
   },
   'bigrock':{
      name:'大きな石',
      id:'bigrock',
      num:0,
      power:10,
      price:80,
      description:'岩です。つよつよ',
      buyable:1,
      sp:0
   },
   'brick':{
      name:'レンガ',
      id:'brick',
      num:0,
      power:12,
      price:100,
      description:'岩にセメントつけたら強くなるのって意味わからなくね？',
      buyable:1,
      sp:0
   },
   'thinpaper':{
      name:'薄めの紙',
      id:'thinpaper',
      num:0,
      power:20,
      price:5,
      description:'薄い紙です。すって相手に切り付けて｢いたっ..｣ってさせる用です',
      buyable:1,
      sp:0
   },
   'card':{
      name:'カード',
      id:'card',
      num:0,
      power:'Math.floor(Math.random()*13)+1',
      price:7,
      description:'ちょっとした運要素。攻撃方法は切り付けなのでよわい(つよい)',
      buyable:0,
      sp:0
   },
   'scissors':{
      name:'はさみ',
      id:'scissors',
      num:0,
      power:25,
      price:200,
      description:'持って｢近づいたら*すよ..?｣っていう用。実際*せない',
      buyable:1,
      sp:0
   },
   'knife':{
      name:'ほんもののナイフ',
      id:'knife',
      num:0,
      power:40,
      price:300,
      description:'わりとつよい。花や骨に向かって振り回しましょう。',
      buyable:1,
      sp:0
   },

   'blooddagger':{
      name:'ジェン・ソルテ',
      id:'blooddagger',
      num:0,
      power:0,
      price:150,
      description:'名前意味わからんランキング第1位',
      buyable:1,
      sp:1,
      process:async function(cam,tcam,me,target){
         log.textContent = '血を吸った！';await delay(1000);
         x = Math.ceil(humans[tcam][target].health*0.1);
         humans[cam][me].health += x;
         if(humans[cam][me].health > humans[cam][me].maxhealth){humans[cam][me].health = humans[cam][me].maxhealth;}
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'timeontarget':{
      name:'time on target',
      id:'timeontarget',
      num:0,
      power:10,
      price:150,
      description:'まじでナギサさんの手良くない.....??',
      buyable:1,
      sp:1,
      process:async function(cam,tcam,me,target){
         log.textContent = 'トリニティの砲撃術は優秀ですから。';await delay(1000);
         x = Math.ceil(humans[cam][me].attack * humans[cam][me].power * 0.9 + weaponpower - humans[tcam][target].defense);
         if(x < 0){x = 0};if(x > humans[tcam][target].health){x = humans[tcam][target].health};
         humans[tcam][target].health -= x;
         buffadd(tcam,target,'shelldown',3,1);
         log.textContent = 'お口に合うと良いのですが..';
         await delay(1000);
         if(humans[tcam][target].health <= 0){return 'dead';}
         else{return 'alive';}
      }
   },
   'biggamble':{
      name:'大博打',
      id:'biggamble',
      num:0,
      power:'Math.floor(Math.random()*100)+1',
      price:150,
      description:'このどっちかは',
      buyable:0,
      sp:0,
   },
   'contrarian':{
      name:'天邪鬼',
      id:'contrarian',
      num:0,
      power:80,
      price:150,
      description:'名前変更予定。',
      buyable:0,
      sp:0,
   }
}

let Armors = {
   'none':{
      name:'なし',
      id:'none',
      num:0,
      shell:0,
      price:0,
      description:'ないです。筋肉とでもフォースとでもなんとでも解釈しておk',
      buyable:0,
      sp:0
   },
   'mask':{
      name:'マスク',
      id:'mask',
      num:0,
      shell:0,
      price:1,
      description:'大事ですね。防御力は関係ありませんが病気にはならない',
      buyable:1,
      sp:0
   },
   'thinbook':{
      name:'薄い本',
      id:'thinbook',
      num:0,
      shell:1,
      price:5,
      description:'***なのは駄目！！死刑！！！！',//コハルさんなのでセーフ
      buyable:1,
      sp:0
   },
   'woodenplank':{
      name:'木の板',
      id:'woodenplank',
      num:0,
      shell:5,
      price:20,
      description:'これを使って最初はつるはしを作りましょう',
      buyable:1,
      sp:0
   },
   'ironplate':{
      name:'テッパン',
      id:'ironplate',
      num:0,
      shell:10,
      price:30,
      description:'突進してくるあいつ。こいつに手間取ると他のがきてす*ぬので注意',
      buyable:1,
      sp:0
   },
   'potlid':{
      name:'鍋の蓋',
      id:'potlid',
      num:0,
      shell:15,
      price:50,
      description:'初期装備あるあるⅡですね。多分コスパ最強',
      buyable:1,
      sp:0
   },
   'thickbook':{
      name:'厚めの本',
      id:'thickbook',
      num:0,
      shell:20,
      price:80,
      description:'辞書とかなのかな。いや六法全書かも',
      buyable:1,
      sp:0
   },
   'door':{
      name:'ドア',
      id:'door',
      num:0,
      shell:25,
      price:100,
      description:'え？木の板と一緒だって？君は知らないのかい...?木の板を6つ並べるとドアが3つできるってことを',
      buyable:1,
      sp:0
   },
   'electricfan':{
      name:'扇風機',
      id:'electricfan',
      num:0,
      shell:30,
      price:200,
      description:'涼めるのに便利。また武器にもなり、ついでに敵から身を守れる万能装備',
      buyable:1,
      sp:0
   },
   'perorodoll':{
      name:'ペロロ様人形',
      id:'perorodoll',
      num:0,
      shell:50,
      price:400,
      description:'ペロロ様の出番です！！まじでヒフミさんいいよね',
      buyable:1,
      sp:0
   }

}

let Tools = {
   'aspirin':{
      name:'アスピリン',
      id:'aspirin',
      price:20,
      description:'頭痛薬らしいですね、これ。痛み止め薬とか耐えればいらんくね？とかいったら炎上するかな',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = `おや、頭が痛いって？痛みに効くのはアスピリン！`;await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.2);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'pablon':{
      name:'パブロン',
      id:'pablon',
      price:40,
      description:'風邪薬。大人とかむけらしいね',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = `早めのパブロン♪`;await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.4);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'trypsin':{
      name:'トリプシン',
      id:'trypsin',
      price:60,
      description:'タンパク質を分解し、アミノ酸にする働きのある消化酵素。所属事務所は膵臓。',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = `トリプシンを飲んだ！！え？これは薬じゃないって？`;await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.6);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'lulu':{
      name:'ルル',
      id:'lulu',
      price:80,
      description:'sick sickな頭痛薬。毒が流るルルですね。',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = `求愛性 孤独 ドク 流るルル♪`;await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth * 0.8);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'potion':{
      name:'魔法薬',
      id:'potion',
      price:100,
      description:'投げつけたい。敵に',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = `なんか一番しょうもないよね、これ あ、全回復です`;await delay(1000);
         x = Math.round(humans[tcam][target].maxhealth);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      }
   },
   'throwknife':{
      name:'投げナイフ',
      id:'throwknife',
      price:20,
      description:'シンプルに20%ダメージ。十六夜(じゅうろくや)さんが投げるあれ',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = 'では、ナイフの錆にしてあげましょう';await delay(1000);
         x = Math.ceil(humans[tcam][target].health*0.2);
         if(humans[tcam][target].health < x){x = humans[tcam][target].health};
         humans[tcam][target].health -= x
         log.textContent = humans[tcam][target].name+'に'+x+'のダメージ！';tekiou();await delay(1000);
         if(humans.enemies[target].health <= 0){return 'dead';}
         return 'alive';
      }
   },
   'trickyvariables':{
      name:'トリッキーな変数',
      id:'trickyvariables',
      price:40,
      description:'黒崎コユキ、きちゃいました！！なんか面白いことないですか？(10%,25%,40%からランダム)',
      num:0,
      process:async function(cam,tcam,me,target){
         x = Math.floor(Math.random() * 3) + 1;
         switch(x){
            case 1:
               log.textContent = 'ま、これでいいですよね？';
               x = Math.ceil(humans[tcam][target].health*0.10);break;
            case 2:
               log.textContent = '結果良ければすべてオッケー！ってね？';
               x = Math.ceil(humans[tcam][target].health*0.25);break;
            case 3:
               log.textContent = 'これぞ醍醐味、ってやつ？';
               x = Math.ceil(humans[tcam][target].health*0.40);break;
         };await delay(1000);
         if(humans[tcam][target].health < x){x = humans[tcam][target].health};
         humans[tcam][target].health -= x;
         log.textContent = humans[tcam][target].name+'に'+x+'のダメージ！';tekiou();await delay(1000);
         if(humans[tcam][target].health <= 0){log.textContent = 'ちょろい、ちょろい。BANG！';await delay(1000);return 'dead';}
         return 'alive';
      }
   },
   'bottlegrenade':{
      name:'ボトルグレネード',
      id:'bottlegrenade',
      price:60,
      description:'殴るついでに燃やす。まじでつよい レッドウィンターの問題児にしては上出来すぎる',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = 'これはちょっと、スパイシーなやつだよ';await delay(1000);
         x = Math.ceil(humans[cam][me].attack * 0.8)
         if(humans[tcam][target].health < x){x = humans[tcam][target].health};
         humans[tcam][target].health -= x;
         buffadd(tcam,target,'burn',3,1);
         log.textContent = humans[tcam][target].name+'に'+x+'のダメージ！';tekiou();await delay(1000);
         if(humans[tcam][target].health <= 0){log.textContent = 'レッドウィンターの問題児にしては上出来じゃない？';await delay(1000);return 'dead';}
         return 'alive';
      }
   },
   'coveringfire':{
      name:'援護射撃',
      id:'coveringfire',
      price:80,
      description:'ダメージ与える。ゴミ箱に隠れてる人。',
      num:0,
      process:async function(cam,tcam,me,target){
         log.textContent = 'え、援護します...';await delay(1000);
         x = Math.ceil(humans[cam][me].attack * 2.2);
         if(humans[tcam][target].health < x){x = humans[tcam][target].health};
         humans[tcam][target].health -= x
         log.textContent = humans[tcam][target].name+'に'+x+'のダメージ！';tekiou();await delay(1000);
         if(humans[tcam][target].health <= 0){log.textContent = 'わ、私のことはお気になさらずに...';await delay(1000);return 'dead';}
         return 'alive';
      }
   },
   'bomb':{
      name:'爆弾',
      id:'bomb',
      price:100,
      description:'エクスプローージョン！！！',
      num:0,
      process:async function(cam,tcam,me,target){
         humans[tcam][target].health = 0;tekiou();
         log.textContent = '爆発オチなんてサイテー！！';await delay(1000);
         return 'dead';
      }
   },
   'redcard':{
      name:'レッドカード',
      id:'redcard',
      price:35,
      description:'退場です。帰れ(スキップ)',
      num:0,
      process:async function(cam,tcam,me,target){
         buffadd(tcam,target,'skip',1,1);
         log.textContent = 'カードを仕込みました!';await delay(1000);
         return 'alive';
      }
   },
   'bluecard':{
      name:'ブルーカード',
      id:'bluecard',
      price:35,
      description:'リバースを召喚！このカードは相手と自分の体力を交換する！！割合だ！！！！',
      num:0,
      process:async function(cam,tcam,me,target){
         x = humans.players[me].health/humans.players[me].maxhealth*humans.enemies[target].health;//割合交換(そのうちゲージにする時用)
         y = humans.enemies[target].health/humans.enemies[target].health*humans.players[me].maxhealth;
         humans.enemies[target].health = x;
         if(humans.enemies[target].health < humans.enemies[target].health){humans.enemies[target].health = humans.enemies[target].health;}
         humans.players[me].health = y;
         if(humans.players[me].maxhealth < humans.players[me].health){humans.players[me].health = humans.players[me].maxhealth;}
         tekiou();
         log.textContent = 'これはリバースのモニュメントか？';await delay(1000);
         return 'alive';
      }
   },
   'greencard':{
      name:'グリーンカード',
      id:'greencard',
      price:35,
      description:'バフを2個ランダムでつける。つよい',
      num:0,
      process:async function(cam,tcam,me,target){
         let rbuffs = ['powerup','shellup','luck'];
         rbuffs = shuffleArray(rbuffs);
         x = rbuffs[0];
         y = rbuffs[1];
         buffadd(tcam,target,x,3,Math.floor(Math.random()*2)+1);
         buffadd(tcam,target,y,3,Math.floor(Math.random()*2)+1);
         log.textContent = humans[tcam][target].name+'にバフを二個つけました！！';await delay(1000);
         return 'alive';
      }
   },
   'blackcard':{
      name:'ブラックカード',
      id:'blackcard',
      price:35,
      description:'デバフを2個つける。割とつよい',
      num:0,
      process:async function(cam,tcam,me,target){
         let rbuffs = ['powerdown','shelldown','poison','burn','freeze'];
         rbuffs = shuffleArray(rbuffs);
         for(i = 0;i < 2;i++){
            buffadd(tcam,target,rbuffs[i],3,Math.floor(Math.random()*2)+1);
         }
         log.textContent = humans[tcam][target].name+'にバフをニ個つけました！！';await delay(1000);
         return 'alive';
      }
   },
   'gentlecard':{
      name:'大人のカード',
      id:'gentlecard',
      price:35,
      description:'「大人のカード」を取り出す。...プレ先ではないぞ',
      num:0,
      process:async function(cam,tcam,me,target){
         euro += 120;updateUI()
         log.textContent = '大人のカードを割りました！粉々になりました';await delay(1000);
         return 'alive';
      }
   }
}

let Skills = {
   ex:{
      '50%split':{//変更予定
         type:'ex',
         id:'50%split',
         name:'GO!SPLIT!!',
         description:`自分の体力を最大の50%削り、分身を作りだす`,
         price:95,
         process:async function(cam,me){
            console.log('slimeのex発動ですわ〜〜〜')
         }
      },
      'placeturret':{
         type:'ex',
         id:'placeturret',
         name:'雷ちゃん、召喚',
         description:'タレットを1つ配置する',
         price:95,
         process:async function(cam,me){
            turretPlace(cam);
            return 'alive';
         }
      },
      'trickyvariables':{
         type:'ex',
         id:'trickyvariables',
         name:'トリッキーな変数',
         description:'爆弾を投げる。効果はランダム',
         price:95,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            log.textContent = humans[cam][me].name+'は爆弾を投げた...';
            switch(Math.floor(Math.random() * 6)){
               case 0:x=0;log.textContent = 'しかし不発弾だった!!';break;//これによる効果とかもあっていいかも
               case 5:x=5;log.textContent = 'Lucky! 爆弾は焼夷弾だった!!!';break;
               case 4:x=4;log.textContent = '爆弾は花火だった!';break;
               case 3:x=3;log.textContent = '爆弾は毒ガス入りだった!!';buffadd(target[1],target[0],'poison',3,1);break; //毒ガス入りだった場合
               case 2:x=2;log.textContent = '爆弾はスライム入りだった!!';buffadd(target[1],target[0],'onslime',2,1);break;//スライム入りだった場合
               case 1:x=1;log.textContent = '爆発した..だがただの特殊な薬品だった!!';break;
            }
            await delay(1000);
            let result = await humandamaged(cam,target[1],me,target[0],x,'sh',4);
            return result;
         }
      },
      'bigdiamond':{
         type:'ex',
         id:'bigdiamond',
         name:'私がかけた魔法だよ',
         description:'敵に攻撃力の150%のダメージを与え、たまに凍らせる',
         price:95,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            let serifs = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']
            document.getElementById('log').textContent = serifs[Math.floor(Math.random() * serifs.length)];//そのうち消える
            await delay(1000);
            let result = await humandamaged(cam,target[1],me,target[0],1.5,'sh',4);
            if(Math.floor(Math.random()*2) == 0){buffadd('enemydebuff','freeze',4,1)};
            return result;
         }
      },
      'kylieeleison':{
         type:'ex',
         id:'kylieelison',
         name:'Kylie Eleison',
         description:'敵に攻撃力の200%のダメージ。もし敵の体力が70%以上ならば400%',
         price:110,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            x = 2;
            if(humans[target[1]][target[0]].health > humans[target[1]][target[0]].maxhealth * 0.7){x = 4;}
            let result = await humandamaged(cam,target[1],me,target[0],x,'sh',4);
            return result;
         }
      },
      'standrone':{
         type:'ex',
         id:'standrone',
         name:'自走式閃光ドローン',
         description:'敵に攻撃力の75%のダメージを与え、スタンさせる',
         price:60,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            let result = await humandamaged(cam,target[1],me,target[0],0.75,'sh',4);
            buffadd(target[1],target[0],'stun',1,1);
            return result;
         }
      },
      'recievechallenge':{//仲間にした方がいいかも
         type:'ex',
         id:'recievechallenge',
         name:'挑戦状を受け取ってください!!',
         description:'敵の防御力を下げ、自身の攻撃力を上げる',
         price:90,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            let result = await humandamaged(cam,target[1],me,target[0],0.5,'sh',4);
            buffadd(target[1],target[0],'shelldown',3,1);
            buffadd(cam,me,'powerup',3,2);
            return result;
         }
      },
      'timedpursuit':{//上に同じく
         type:'ex',
         id:'timedpursuit',
         name:'小心者の観測',
         description:'敵を弱点把握状態を付与する',
         price:50,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            switch(Math.floor(Math.random()*3)+1){
               case 1:
                  serif = '私はその辺の小石...';
                  break;
               case 2:
                  serif = '私のことなんて...気にしないでください...';
                  break;
               case 3:
                  serif = 'すみません...一人にさせてください......';
                  break;
            }
            log.textContent = serif;
            buffadd(target[1],target[0],'weaknessgrasp',2,1);//弱点把握状態
            return 'alive';
         },
      },
      'bombe':{
         type:'ex',
         id:'bombe',
         name:'ボマー',
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            log.textContent = humans.players[me].name+'は爆弾を投げた...';
            await delay(1000);//普通　水　マグマ　閃光弾
            const bombetype = [3,6,0];
            x = bombetype[Math.floor(Math.random()*4)]
            switch(x){
               case 1:log.textContent = '普通の爆弾だった..!';break;
               //case 1:log.textContent = '水爆弾だった！！';break;//強制終了です
               case 4:log.textContent = 'Lucky♪マグマ爆弾だった!!';break;
               case 0:log.textContent = 'いけっ！ピカピカの実！';buffadd(target[1],target[0],'stan',2,1);break;
            }
            let result = await humandamaged(cam,target[1],me,target[0],x,'sh',4);
            return result;
         }
      }
   },
   ns:{
      'null':{
         type:'ns',
         id:'null',
         name:'null',
         description:'(まじでnullです。効果無し。外れ。乙)',
         price:0,
         cool:0
      },
      'throwslime':{
         type:'ns',
         id:'throwslime',
         name:'Attach!Slime!!',
         description:'敵にスライムをくっつける',
         price:70,
         cool:3,
         process:async function(cam,me){
            let target = ShallTargetSelect(me,'er',0);
            buffadd(target[1],target[0],'onslime',1,1);
            log.textContent = humans[cam][me].name + 'にスライムが覆い被さった!';
            return 'alive';
         }
      },
      'throwwrench':{
         type:'ns',
         id:'throwwrench',
         name:'匙を投げる？これはレンチだよ',
         description:'レンチを投げる準備をし、次の攻撃が二倍になる',
         price:70,
         cool:4,
         process:async function(cam,me){
            buffadd(cam,me,'LetsThrow',2,1);
            log.textContent = 'wrenchを投げる準備ができた!';
            return 'alive';
         }
      },
      'gambler':{
         type:'ns',
         id:'gambler',
         name:'かけ上手',
         description:'次の攻撃時に0,2,4倍の倍率がかかる',
         price:70,
         cool:3,
         process:async function(cam,me){
            buffadd(cam,me,'gambling',1,1);
            log.textContent = 'さあ、ギャンブルの時間だ!!';
            return 'alive';
         }
      },
      'improve':{
         type:'ns',
         id:'improve',
         name:'改善が必要だよ',
         description:'攻撃力を1.4倍に上昇させる',//変更予定,
         price:70,
         cool:5,
         process:async function(cam,me){
            buffadd(cam,me,'improve',4,1);
            log.textContent = 'パーツアップグレード。';
            return 'alive';
         }
      },
      'hitelec':{
         type:'ns',
         id:'hitelec',
         name:'エレキギター殴り',
         description:'エレキギターで殴ります',
         cool:4,
         process:async function(cam,me){
            disappear();
            buffadd(cam,me,'powerup',2,2);
            log.textContent = 'エレキギターで殴るぞ..ごめんここのセリフどしよ'
            let target = ShallTargetSelect(me,'er',0);
            let result = await humandamaged(cam,target[1],me,target[0],2,'sh',4);
            log.textContent = 'かまってぇや、マジで';
            return result;
         }
      }
   },
   ps:{
      'null':{
         type:'ps',
         id:'null',
         name:'null',
         description:'(まじでnullです。効果無し。外れ。乙)',
         price:0,
      },
      'sthree':{
         type:'ps',
         id:'sthree',
         name:'DoYourBest!!',
         description:'slash時、たまに3回攻撃する',
         price:90,
      },
      'solplaceturret':{
         type:'ps',
         id:'solplaceturret',
         name:'雷ちゃん、もうちょっと',
         description:'slash of light命中時、タレットを1つ配置する',
         price:90,
      },
      'highsol':{
         type:'ps',
         id:'highsol',
         name:'生粋の勝負師',
         description:'slash of lightの命中率が下がるが、命中時3倍のダメージ',
         price:90,
      },
      'enemy50%pursuit':{
         type:'ps',
         id:'enemy50%pursuit',
         name:'一度限りの取引',
         description:'攻撃によって敵の体力を50%以下だった場合、攻撃力の70%で追撃する',
         price:90,
      }
   }
}

let Stages = {
   '1-1':{
      name:'創生黎明の原野',
      id:'1-1',
      num:1,
      phase:1,
      enemies:['蒼白の粘液','翠嵐の風刃','黄昏の穿影','燐光の妖花','琥珀の甲羅獣','蒼碧の震鱗','白霧の幻影獣']
   }
};

let Enemies = {
   '蒼白の粘液':{
      name:'蒼白の粘液',
      hp:'+10',
      atk:'+0',
      def:'-10',
      matk:'0',
      mdef:'-20',
      crla:'-0.01',
      crdm:'-0.5',
      crrs:'+0.5',
      speed:'40',
      acts:{
         1:{
            name:'粘液飛ばし',
            num:1,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は粘液を飛ばしてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phph',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'粘液飛ばし',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は粘液を飛ばしてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         3:{
            name:'粘液付与',//やばい方のスライムも作りたいね 一緒に溶けよ....? みたいな..ってちょっと癖すぎるか....?よし、技名は自己責任で表示可にしよう その場合セリフは...?
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は粘液を絡ませてきた！`;await delay(1000);//いやこれはこれでやばいか...?いや全然捉えようによってはやばいわ
               let selected = ShallTargetSelect(me,'phph',0);
               buffadd(selected[1],selected[0],'stickyslime',2,1);
               return 'alive';
            }
         }
      }
   },
   '翠嵐の風刃':{
      name:'翠嵐の風刃',
      hp:'+10',
      atk:'+10',
      def:'-10',
      matk:'+0',
      mdef:'+0',
      crla:'+0.3',
      crdm:'+0.5',
      crrs:'+0',
      speed:'75',
      acts:{
         1:{
            name:'体当たり',
            num:1,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は体当たりを仕掛けてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'体当たり',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は体当たりを仕掛けてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         3:{
            name:'体当たり',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は回転しながら突進してきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1.5,'sh',1);
               return result;
            }
         }
      }
   },
   '黄昏の穿影':{
      name:'黄昏の穿影',
      hp:'-10',
      atk:'+15',
      def:'+0',
      matk:'+0',
      mdef:'+0',
      crla:'+0',
      crdm:'+0',
      crrs:'+0',
      speed:'60',
      acts:{
         1:{
            name:'消滅',
            num:1,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は姿を消..あれどこ行った？`;await delay(1000);
               let selected = ShallTargetSelect(me,'ec',0);
               buffadd(selected[1],selected[0],'disappear',2,1);
               return 'alive';
            }
         },
         2:{
            name:'衝突',
            num:2,
            process:async function(cam, me){
               if(buffhas(cam,me,'disappear')){x = 2;buffremove(cam,me,'disappear');}else{x = 1};
               log.textContent = `${humans[cam][me].name}は突進してきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'pr',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],x,'sh',1);
               return result;
            }
         },
         3:{
            name:'ローキック',//ロストワンの号哭の号哭使いたいけど意味が泣くことらしい
            num:3,
            process:async function(cam, me){
               if(buffhas(cam,me,'disappear')){x = 1.5;buffremove(cam,me,'disappear')}else{x = 0.75};
               log.textContent = `${humans[cam][me].name}はローキックしてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],x,'sh',1);
               buffadd(selected[1],selected[0],'speeddown',2,1);
               return result;
            }
         }
      }
   },
   '燐光の妖花':{
      name:'燐光の妖花',
      hp:'-15',
      atk:'-10',
      def:'+0',
      matk:'+0',
      mdef:'+15',
      crla:'+0',
      crdm:'+0.5',
      crrs:'+0.1',
      speed:'50',
      acts:{
         1:{
            name:'しびれごな',
            num:1,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は痺れ粉を振りかけてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'patkh',0);
               buffadd(selected[1],selected[0],'palsy',2,1);
               return 'alive';
            }
         },
         2:{
            name:'どくのこな',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は毒の粉を振りかけてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'phph',0);
               buffadd(selected[1],selected[0],'poison',2,1);
               return 'alive';
            }
         },
         3:{
            name:'ねむりごな',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は眠り粉を振りかけてきた！`;await delay(1000);
               let selected = ShallTargetSelect(me,'patkh',0);
               buffadd(selected[1],selected[0],'sleep',1,1);
               return 'alive';
            }
         }
      }
   },






   '古書館の魔術師':{//ウイさん　コッペパンの"めっちゃ好きなキャラ"。ヒナタさんと仲がいい。
      name:'古書館の魔術師',
      hp:'-10',
      atk:'-15',
      def:'+5',
      matk:'+0',
      mdef:'+20',
      crla:'+0.05',
      crdm:'+0',
      crrs:'+0.1',
      speed:'40',
      acts:{
         1:{
            name:'攻撃！',//これはpazzlineね
            num:1,
            process:async function(cam, me){  
               log.textContent = `${humans[cam][me].name}はピストルカービンで撃った！`;await delay(1000);//ウイさんの武器やね デ・リーズル カービン
               let selected = ShallTargetSelect(me,'phpl',0);
               let result = await humandamaged(cam,selected[0],me,selected[1],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'古書の専門家',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は古書の専門家だ！！`;await delay(1000);//いやごめん、は？ (ウイさんのEX「古書の専門家」より)
               let selected = ShallTargetSelect(me,'eatkh',0);//enemies atk high
               let result = await Magics.power.process(cam,selected[0],me,selected[1]);
               return result;
            }
         },
         3:{
            name:'伝達されていく知識',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は知識を伝達した！`;await delay(1000);//ウイさんのNS「伝達されていく知識」..いやそのまますぎるか...?
               let selected = ShallTargetSelect(me,'ec',1);//自分付近
               await Magics.boost.process(cam,selected[0],me,selected[1]);
               return 'alive';
            }
         }
      }
   },
   '読書マニアな司書':{ //シミコさん
      name:'読書マニアな司書',
      hp:'+10',
      atk:'+10',
      def:'-10',
      matk:'+0',
      mdef:'+0',
      crla:'+0.3',
      crdm:'+0.5',
      crrs:'+0',
      speed:'75',
      acts:{
         1:{
            name:'体当たり',
            num:1,
            process:async function(cam, me){
            }
         },
         2:{
            name:'体当たり',
            num:2,
            process:async function(cam, me){
            }
         },
         3:{
            name:'体当たり',
            num:3,
            process:async function(cam, me){
            }
         }
      }
   },
   '忍び寄るナース':{ //セリナさん
      name:'忍び寄るナース',
      hp:'+10',
      atk:'+0',
      def:'+10',
      matk:'+0',
      mdef:'+0',
      crla:'+0',
      crdm:'+0',
      crrs:'+0',
      speed:'50',
      acts:{
         1:{
            name:'体当たり',
            num:1,
            process:async function(cam, me){
            }
         },
         2:{
            name:'体当たり',
            num:2,
            provess:async function(cam, me){
               
            }
         },
         3:{
            name:'体当たり',
            num:3,
            process:async function(cam, me){
               
            }
         }
      }
   },
   '「救護」のプロ':{ //ミネさん
      name:'「救護」のプロ',
      hp:'+10',
      atk:'+0',
      def:'+10',
      matk:'+0',
      mdef:'+0',
      crla:'+0',
      crdm:'+0',
      crrs:'+0',
      speed:'50',
      acts:{
         1:{
            name:'体当たり',
            num:1,
            process:async function(cam, me){
            }
         },
         2:{
            name:'体当たり',
            num:2,
            process:async function(cam, me){
            }
         },
         3:{
            name:'体当たり',
            num:3,
            process:async function(cam, me){
            }
         }
      }
   }
};
//#endregion


//#region 超シンプルで使いやすい子達
function tekiou(){
   //存在確認用コマンド
   //Object.keys(humans).forEach(cam => {Object.keys(humans[cam]).map(a => a.toString()).filter(s => humans[cam][s].status == 1 || humans[cam][s].status == 2).forEach(me => {console.log(me)})})
   Object.keys(humans).forEach(cam => {
      Object.keys(humans[cam]).map(a => a.toString()).forEach(me => {
         if(humans[cam][me].status == 1||humans[cam][me].status == 2){
            let apply = buffcheck(cam,me);
            document.getElementById(`${cam}${me}`).innerHTML = `
            <b>${humans[cam][me].name}</b>　<i>Lv.${humans[cam][me].level}</i><br>
            <span id="PlayerHealth">${humans[cam][me].health}</span>/<span>${humans[cam][me].maxhealth}</span><br>
            <span id="PlayerMP">${humans[cam][me].mp}</span>/<span id="PlayerMaxMP">${humans[cam][me].maxmp}</span><br>
            <span id="PlayerBuff">${apply.buff.join('')}</span> <span id="PlayerDebuff">${apply.debuff.join('')}</span>`;

            humans[cam][me].power = 1;humans[cam][me].shell = 1;
            let karix = 0;
            

            if(buffhas(cam,me,'powerup')){karix = buffhas(cam,me,'powerup').lv};
            if(buffhas(cam,me,'powerdown')){karix -= buffhas(cam,me,'powerdown').lv};
            if(karix > 0){humans[cam][me].power = Buffs.powerup.lv[karix]};if(karix < 0){humans[cam][me].power = Debuffs.powerdown.lv[karix*-me]}
            
            if(buffhas(cam,me,'shellup')){karix = buffhas(cam,me,'shellup').lv};
            if(buffhas(cam,me,'shelldown')){karix -= buffhas(cam,me,'shelldown').lv};
            if(karix > 0){humans[cam][me].shell = Buffs.shellup.lv[karix]};if(karix < 0){humans[cam][me].shell = Debuffs.shelldown.lv[karix*-1]}

            if(humans[cam][me].status == 2){
               document.getElementById(`${cam}${me}`).style.backgroundColor = '#cecece';
            }
         }
      })
   })





   function buffcheck(cam,me){
      let apply = {
         buff: [],
         debuff: []
      }
      humans[cam][me].buffs.filter(a => a.type == 'buff').forEach(bu => {apply.buff.push(`<img src="assets/buffs/${bu.name}.png" width="18" height="18"> `)});
      humans[cam][me].buffs.filter(b => b.type == 'debuff').forEach(db => {apply.debuff.push(`<img src="assets/buffs/${db.name}.png" width="18" height="18"> `)});
      return apply
   }

   save();

}
function save(){
   updateUI();
   const newData = {
      euro: euro,
      bankeuro: bankeuro,
      rank: rank,
      rpt: rpt,
      rp: rp,
      clearedmainquest: clearedmainquest,
      cleareddailyquest: cleareddailyquest,
      atk: playeratk,
      def: playerdef,
      matk: playermatk,
      mdef: playermdef,
      hp: playerhp,
      mp: playermagicpoint,
      crla: playercrla,
      crdm: playercrdm,
      crrs: playercrrs,
   };
   usersRef.update(newData)
}

function load(){
   return usersRef.once('value').then(snapshot => {
      return snapshot.val();
   });
}

function delay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}

function inSelect(array){
   let select = Math.floor(Math.random()*array.length);
   return array[select];
}
function shuffleArray(array) {
   for(let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}
   

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
   document.getElementById('All').appendChild(newDiv);
   //let speed = Math.random()*100+1;
   let speed = mes.toString().length*2 
   for(let i = 0; window.innerWidth > i*speed; i++){
       let val = i*speed;
       newDiv.style.right = `${val}px`
       await delay(50);
   }
   newDiv.remove();
}

function DesideEnemyName(target){
   humans.enemies[target].prefixe = '';
   let ENEMYarray = enemynamenum[stage-1].split('.');
   let ENEMY1 = +ENEMYarray[1]+1
   let ENEMY2 = +ENEMYarray[0]
   humans.enemies[target].name = enemynames[Math.floor(Math.random() * ENEMY1)+ENEMY2]; // 敵の名前を決めます
   if(Math.floor(Math.random() * 5) == 0){humans.enemies[target].prefixe = `${enemyprefixes[Math.floor(Math.random() * enemyprefixes.length)]} `};
   
   humans.enemies[target].attack = enemyatk;//敵の能力を決めます
   humans.enemies[target].defense = enemydef;
   humans.enemies[target].maxhealth = enemyhp; humans.enemies[target].health = humans.enemies[target].maxhealth;
   humans.enemies[target].critlate = enemycrla;
   humans.enemies[target].critdmg = enemycrdm;
   humans.enemies[target].critresist = enemycrrs;
   switch(humans.enemies[target].prefixe){//接頭辞ごとの能力
      case '激昂 ':
         humans.enemies[target].attack  = Math.floor(enemyatk*1.5);
         humans.enemies[target].defense = Math.floor(enemydef*0.75);
         humans.enemies[target].critlate = 0.05
         break;
      case '冷静沈着な ':
         humans.enemies[target].defense = Math.floor(enemydef*2);
         humans.enemies[target].attack  = Math.floor(enemyatk*0.75);
         break;
      case 'ギャンブラーな ':
         humans.enemies[target].critlate = enemycrla + 0.3;
         humans.enemies[target].maxhealth = Math.floor(enemyhp*0.5);
      break;
      case '守りが固い ':
         humans.enemies[target].critresist += 0.5;//会心半減ね
         humans.enemies[target].health = Math.floor(enemyhp*1.25);
         humans.enemies[target].defense = Math.floor(enemydef*1.5);
         humans.enemies[target].attack = Math.floor(enemyatk*0.3);
      break;
      case '心眼持ちの ':
         humans.enemies[target].critlate = 1;//確定会心人間(抵抗無視の場合)
         humans.enemies[target].critdmg = 1.2;//さすがに弱め
         humans.enemies[target].attack = Math.floor(enemyatk*0.3);//つまり..防御無視害悪敵だわこれ やば
         humans.enemies[target].maxhealth = Math.floor(enemyhp*0.5);
      break;
   }
   humans.enemies[target].health = humans.enemies[target].maxhealth;
   return humans.enemies[target].name;
}

//async function errorcheck(){if(playerattack==Infinity||playerdefense==Infinity||playerhealth==Infinity||playermaxhealth==Infinity||playerlevel==Infinity||playerpower==Infinity||playermaxmp==Infinity||playershell==Infinity||isNaN(playerhealth)||isNaN(playermaxhealth)||isNaN(playerattack)||isNaN(playerdefense)||isNaN(playermaxmp)||isNaN(playerpower)||isNaN(playershell)||isNaN(playerlevel)||Potion.num==Infinity||euro==Infinity||Bomb.num==Infinity||Redcard.num==Infinity||isNaN(Potion.num)||isNaN(euro)||isNaN(Bomb.num)||isNaN(Redcard.num)){log.textContent='error100が発生しました。';awaitdelay(1000);log.textContent='リブートを開始します。';await delay(1000);open('about:blank','_self').close();}}//おっとこれは...?}
//#endregion

//なんかNextTurnisとかいろいろ修正しといて。tcamがないところとかよろっぷ

//#region Inventory
let InventoryPage = 1;
function inventoryOpen(num){
   InventoryPage = num??1;
   AllowMove = 1;
   let array = ['name','level','exp','health','maxhealth','attack','defense','maxmp','mattack','mdefense','critlate','critdmg','critresist'];
   let Status = array.map(a => `${a}: ${humans.players[InventoryPage][a]}`).join('<br>');
   array = ['maxhealth','attack','defense','maxmp','mattack','mdefense','critlate','critdmg','critresist'];
   let Sutefuri = array.map(a => `<button class="button" onclick="SuteFuri${a}">${a}</button>`).join('<br>');
   document.getElementById('InventoryArea').style.display = 'flex';
   document.getElementById('InventoryArea').innerHTML = `
   <div id="Iblock1">
      <div id="IStatus">${Status}</div>
      <div id="ISkills"></div>
      <div id="IWeapons"></div>
      <div id="IArmors"></div>
      <div id="IItems"></div>
   </div>
   <div id="Iblock2">
      <div id="ISlashs">slashs<br>
      1:${humans.players[InventoryPage].slash1} <button class="button" onclick="SlashChange(1)">change</button><br>
      2:${humans.players[InventoryPage].slash2} <button class="button" onclick="SlashChange(2)">change</button><br>
      3:${humans.players[InventoryPage].slash3} <button class="button" onclick="SlashChange(3)">change</button><br>
      </div>
      <div id="ISlashAppearence""></div><br><div id="SlashChangePlace"></div>
      <div id="IMagics">magics<br>
      1:${humans.players[InventoryPage].magic1} <button class="button" onclick="MagicChange(1)">change</button><br>
      2:${humans.players[InventoryPage].magic2} <button class="button" onclick="MagicChange(2)">change</button><br>
      3:${humans.players[InventoryPage].magic3} <button class="button" onclick="MagicChange(3)">change</button><br>
      </div>
      <div id="IMagicAppearence""></div><br><div id="MagicChangePlace"></div>
      <span id="IAppearsp">${humans.players[InventoryPage].sp}pt</span><br>
      <div id="ISutefuri">${Sutefuri}</div>
   </div>
   `;
   let slashs = Object.keys(Slashs).map(a => Slashs[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Slashs[a].description}">${Slashs[a].id}</span>` : null).filter(Boolean)
   document.getElementById('ISlashAppearence').innerHTML = slashs.join('<br>');
   let magics = Object.keys(Magics).map(a => Magics[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Magics[a].description}">${Magics[a].id}</span>` : null).filter(Boolean)
   document.getElementById('IMagicAppearence').innerHTML = magics.join('<br>');
   let skills = ['ex','ns','ps'].map(a => `${a}:<span class="hasd" data-description="${Skills[a][humans.players[InventoryPage][a]].description}">${Skills[a][humans.players[InventoryPage][a]].name}</span>`)
   document.getElementById('ISkills').innerHTML = skills.join('<br>');
   let weapons = Object.keys(Weapons).map(a => Weapons[a].num >= 1 && Weapons[a].num > Object.keys(humans.players).filter(b => humans.players[b].weapon.id == Weapons[a].id).length ? `<span class="hasd" data-description="${Weapons[a].description}">${Weapons[a].name} x${Weapons[a].num}</span>` : null).filter(Boolean)
   document.getElementById('IWeapons').innerHTML = weapons.join('<br>');
   let armors = Object.keys(Armors).map(a => Armors[a].num >= 1 && Armors[a].num > Object.keys(humans.players).filter(b => humans.players[b].armor.id == Armors[a].id).length ? `<span class=" hasd" data-description="${Armors[a].description}">${Armors[a].name} x${Armors[a].num}</span>` : null).filter(Boolean)
   document.getElementById('IArmors').innerHTML = armors.join('<br>');
   let tools = Object.keys(Tools).map(a => `<span class="hasd" data-description="${Tools[a].description}">${Tools[a].name} x${Tools[a].num}:</span>`).filter(Boolean)
   document.getElementById('IItems').innerHTML = tools.join('<br>');

   let nextpage = addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {   
         InventoryPage++;if(InventoryPage>4){InventoryPage=1;}
         if(humans.players[InventoryPage].status >= 1){
            inventoryOpen();
            nextpage.remove();
         }else{
            InventoryPage--;
         }
      }
      if (event.key === 'ArrowLeft') {
         InventoryPage--;if(InventoryPage<1){InventoryPage=4;}
         if(humans.players[InventoryPage].status >= 1){
            inventoryOpen();
            nextpage.remove();
         }else{
            InventoryPage++;
         }
      }
   });
}
function inventoryClose(){
   AllowMove = 0;
   document.getElementById('InventoryArea').style.display = 'none';
   log.textContent = '';
};

document.addEventListener('mousemove', (e) => {
   const HasDescription = document.getElementById('movabledescription');
   HasDescription.style.left = `${e.clientX + 10}px`;
   HasDescription.style.top = `${e.clientY + 10}px`;
});

document.addEventListener('mouseover', (e) => {
   if(e.target.classList.contains('hasd')){
      const movabledescription = e.target.dataset.description;
      document.getElementById('movabledescription').textContent = movabledescription;
      document.getElementById('movabledescription').style.display = 'block';
   }
});

document.addEventListener('mouseout', (e) => {
   if(e.target.classList.contains('hasd')){
      document.getElementById('movabledescription').textContent = '';
      document.getElementById('movabledescription').style.display = 'none';
   }
});

function SlashChange(num){
   let availableSlashs = Object.keys(Slashs)
      .filter(a => Slashs[a].lv <= humans.players[InventoryPage].level)
      .map(a => Slashs[a].name);
   let slashSelectHTML = availableSlashs.map(slash => 
      `<button class="button" onclick="SlashChangeDecide('${slash}', ${num})">${slash}</button>`
  ).join(' ');
  
  document.getElementById('SlashChangePlace').innerHTML = `
      <div>Select Slash for Slot ${num}:</div>
      ${slashSelectHTML}
  `;
}
function SlashChangeDecide(name,num){
   // 選択したスロットに魔法を割り当て
   switch(num) {
       case 1:
           humans.players[InventoryPage].slash1 = name;
           break;
       case 2:
           humans.players[InventoryPage].slash2 = name;
           break;
       case 3:
           humans.players[InventoryPage].slash3 = name;
           break;
   }
   inventoryOpen(InventoryPage)
}
function MagicChange(num){
   let availableMagics = Object.keys(Magics)
      .filter(a => Magics[a].lv <= humans.players[InventoryPage].level)
      .map(a => Magics[a].name);
   let magicSelectHTML = availableMagics.map(magic => 
      `<button class="button" onclick="MagicChangeDecide('${magic}', ${num})">${magic}</button>`
  ).join(' ');
  
  document.getElementById('MagicChangePlace').innerHTML = `
      <div>Select Magic for Slot ${num}:</div>
      ${magicSelectHTML}
  `;
}
function MagicChangeDecide(name,num){
   // 選択したスロットに魔法を割り当て
   switch(num) {
       case 1:
           humans.players[InventoryPage].magic1 = name;
           break;
       case 2:
           humans.players[InventoryPage].magic2 = name;
           break;
       case 3:
           humans.players[InventoryPage].magic3 = name;
           break;
   }
   inventoryOpen(InventoryPage)
}

function WeaponChange(){
   let weapons = Object.keys(Weapons).map(a => Weapons[a].num >= 1 && Weapons[a].num > Object.keys(humans.players).filter(b => humans.players[b].weapon.id == Weapons[a].id).length ? `<button class="button" onclick="ChangeWeapon('${Weapons[a].id}')">${Weapons[a].name}</button>` : null).filter(Boolean)
   weapons.unshift(`<button class="button" onclick="ChangeWeapon('none')">none</button>`)
   document.getElementById('IWeapons').innerHTML = weapons.join(' ');
}
function WeaponChangeDeside(code){
   humans.players[InventoryPage].weapon = {
      id: Weapons[code].id,
      lv: 1,//一旦。そのうち消えるかも
   }
   inventoryOpen(InventoryPage);
}
function ArmorChange(){
   let armors = Object.keys(Armors).map(a => Armors[a].num >= 1 && Armors[a].num > Object.keys(humans.players).filter(b => humans.players[b].armor.id == Armors[a].id).length ? `<button class="button" onclick="ChangeArmor('${Armors[a].id}')">${Armors[a].name}</button>` : null).filter(Boolean)
   armors.unshift(`<button class="button" onclick="ChangeArmor('none')">none</button>`)
   document.getElementById('IArmors').innerHTML = armors.join(' ');
}
function ArmorChangeDeside(code){
   humans.players[InventoryPage].armor = {
      id: Armors[code].id,
      lv: 1,//一旦。そのうち消えるかも
   }
   inventoryOpen(InventoryPage);
}

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

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
menuToggle.addEventListener('click', () => {
   if(sideMenu.style.left === '0px'){
         sideMenu.style.left = '-250px';
   }else{
         sideMenu.style.left = '0px';
   }
});
//#endregion
//#region Questの動き
const quests = {
   main:[
      {
         id: 1,
         description: "このゲームを見つけてくれてありがとう！！",
         rewards: 200,
         type: 'if',
         num: 1,
         nom: 1,
      },
      {
         id: 1,
         description: "ダンジョンを1回クリアせよ",
         rewards: 150,
         type: 'd.c.',//dungeon clearの略 ダ・カーボじゃないぞ☆
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "武器を装備せよ",
         rewards: 80,
         type: 'e.w.',
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "敵を10体倒せ",
         rewards: 120,
         type: 'k.',
         num: 0,
         nom: 10,
      },
      {
         id: 1,
         description: "ボスを1体倒せ",
         rewards: 150,
         type: 'k.b.',//kill boss
         num: 0,
         nom: 1,
      }
   ],
   daily:[
      {
         id: 1,
         description: "ボスを1体倒す",
         rewards: 20,
         type: 'k.b',
         num: 0,
         nom: 1,
      },
      {
         id: 1,
         description: "敵を3体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 3,
      },
      {
         id: 1,
         description: "敵を5体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 5,
      },
      {
         id: 1,
         description: "敵を7体倒す",
         rewards: 20,
         type: 'k.',
         num: 0,
         nom: 7,
      },
      {
         id: 1,
         description: "ダンジョンを1回クリアする",
         rewards: 20,
         type: 'd.c.',
         num: 0,
         nom: 1,
      }
   ]
}
let quest = {
   main:{},
   daily:[
       {},
       {},
       {},
       {},
       {},
   ]
};
let clearedmainquest = 0;
let cleareddailyquest= 0;





function MakeNewQuest(code){
   quest.main = quests.main[clearedmainquest];

   //クエストのリストを更新
   const waku = document.getElementById('quest-list');
   waku.innerHTML = '';
   const br = document.createElement('br');
   //main
   const mq = document.createElement('div');
   mq.className = 'quest-main';
   mq.innerHTML = `
      Main:${quest.main.description}
      <br>
      ${quest.main.rewards}€  ${quest.main.num}/${quest.main.nom}<br>
      <button class="button"onclick="ClearedMainQuest('M')">受け取り</button>`
   waku.appendChild(mq);
   waku.appendChild(br);
   waku.appendChild(br);

   //daily
   for (let i = 0; i < quest.daily.length; i++){
      const dq = document.createElement('div');
      dq.className = 'quest-daily';
      dq.innerHTML = `
         ${quest.daily[i].id}:${quest.daily[i].description}<br>
         ${quest.daily[i].rewards}€  ${quest.daily[i].num}/${quest.daily[i].nom}<br>
         <button class="button"onclick="ClearedMainQuest('${i}')">受け取り</button>`//mainが2以上になったら()のとこD1にして
      waku.appendChild(dq);
      waku.appendChild(br);
   }
}

function ClearedMainQuest(code){
   if(code == 'M'&&quest.main.num == quest.main.nom){
      euro += quest.main.rewards;
      rpt += 20;
      clearedmainquest += 1;
      MakeNewQuest('x');
   }
   switch(code){
      case 0:
         if(quest.daily[0].num == quest.daily[0].nom){
         euro += quest.daily[0].rewards;
         quest.daily[0].id = 0;
         quest.daily[0].description = 'end';
         quest.daily[0].rewards = 0;
         quest.daily[0].type = '';
         quest.daily[0].num = 0;
         quest.daily[0].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 1:
         if(quest.daily[1].num == quest.daily[1].nom){
         euro += quest.daily[1].rewards;
         quest.daily[1].id = 0;
         quest.daily[1].description = 'end';
         quest.daily[1].rewards = 0;
         quest.daily[1].type = '';
         quest.daily[1].num = 0;
         quest.daily[1].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 2:
         if(quest.daily[2].num == quest.daily[2].nom){
         euro += quest.daily[2].rewards;
         quest.daily[2].id = 0;
         quest.daily[2].description = 'end';
         quest.daily[2].rewards = 0;
         quest.daily[2].type = '';
         quest.daily[2].num = 0;
         quest.daily[2].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 3:
         if(quest.daily[3].num == quest.daily[3].nom){            
         euro += quest.daily[3].rewards;
         quest.daily[3].id = 0;
         quest.daily[3].description = 'end';
         quest.daily[3].rewards = 0;
         quest.daily[3].type = '';
         quest.daily[3].num = 0;
         quest.daily[3].nom = 0;
         cleareddailyquest += 1;
         }
         break;
      case 4:
         if(quest.daily[4].num == quest.daily[4].nom){
         euro += quest.daily[4].rewards;
         quest.daily[4].id = 0;
         quest.daily[4].description = 'end';
         quest.daily[4].rewards = 0;
         quest.daily[4].type = '';
         quest.daily[4].num = 0;
         quest.daily[4].nom = 0;
         cleareddailyquest += 1;
         }
         break;
   }
   save();
}
//#endregion
//#region buffの動き
function buffadd(tcam,target,buff,time,lv){//誰のバフ/デバフか,バフ/デバフの名前,効果時間,効果レベル
   console.log(tcam, target, buff, time, lv ?? 0);
   let Time = time ?? 1;
   // 同じ効果量のバフがある場合、時間を足す
   //let existingBuff = humans[tcam][target].buffs.find(b => b.name === buff && b.lv === lv);
   if (humans[tcam][target].buffs.find(b => b.name === buff && b.lv === lv)) {
      humans[tcam][target].buffs.find(b => b.name === buff && b.lv === lv).time += Time;
   } else {
      // 新しいバフを追加
      humans[tcam][target].buffs.push({
         type: Buffs[buff] ? 'buff' : Debuffs[buff] ? 'debuff' : 'unknown',
         name: buff,
         time: Time,
         lv: lv ?? 1,
      });
   }
   tekiou();
}
function buffremove(tcam,target,buff){
   //誰のバフ/デバフか,バフ/デバフの名前
   let index = humans[tcam][target].buffs.findIndex(b => b.name === buff);
   if(index !== -1){
      humans[tcam][target].buffs.splice(index, 1);
   }
   tekiou();
}
function buffclear(tcam,target){
   humans[tcam][target].buffs = [];
   tekiou()
}
function buffhas(tcam,target,buff){
   return humans[tcam][target].buffs.find(b => b.name === buff);
}
//#endregion

//#region ゲーム開始時ログインの動き、チャットのあれこれ - - - - - - - - - - -  - - -  - - -  - - -  - - -  - - -  - - -  - - -
const firebaseConfig = {
   apiKey: "AIzaSyBN5V_E6PzwlJn7IwVsluKIWNIyathhxj0",
   authDomain: "koppepan-orange.firebaseapp.com",
   databaseURL: "https://koppepan-orange-default-rtdb.firebaseio.com",
   projectId: "koppepan-orange",
   storageBucket: "koppepan-orange.appspot.com",
   messagingSenderId: "730150198097",
   appId: "1:730150198097:web:076a074a3d406053155170",
   measurementId: "G-MYKJWD203Z"
};
// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let chatroom = 1;
let messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
let usersRef;
let userData;

async function GameStart(){
   document.getElementById('HomeArea').innerHTML = `
   <div id="login-container" class="login-container">
      <form class="login-form" id="login-form">
         <input type="text" id="username" placeholder="ユーザー名" required>
         <input type="password" id="password" placeholder="パスワード" required>
         <button type="submit">ログイン</button>
         <div id="login-error" style="color: red; display: none;">パスワードが間違っています。</div>
      </form>
   </div>
   `;
   document.getElementById('HomeArea').style.display = 'block';

   function setLocalStorage(name, value) {
      localStorage.setItem(name, value || ""); // 値が空なら空文字を入れる
   }

   function getLocalStorage(name) {
      return localStorage.getItem(name); // 値をそのまま返す、ない場合はnull
   }

   username = getLocalStorage("username"); // ログイン時
   if(username){
      console.log("自動ログインしました");
      usersRef = database.ref('users/'+username+'/forrpg');
      document.getElementById('login-container').style.display = 'none';
      log.textContent = 'wait for now...'
      login()
   }else{
      console.log("ログインしてください");
      
      document.getElementById('login-form').addEventListener('submit',async function(event){
         const loginForm = document.getElementById('login-form');
         const loginError = document.getElementById('login-error');
         const chatContainer = document.getElementById('chat-container');
   
         event.preventDefault();
         username = document.getElementById('username').value;
         var password = document.getElementById('password').value;
         usersRef = database.ref('users/'+username+'/forrpg');
   
         // データベースでユーザーが存在するか確認
         usersRef.once('value').then(async function(snapshot){
            if(snapshot.exists()){
               userData = snapshot.val();
               if(userData.password === password){
                  login();
                  setLocalStorage("username", username); // ログイン成功時
               } else {
                  // パスワードが間違っている
                  document.getElementById('HomeArea').innerHTML = `
                  <div class="login-container">
                     <form class="login-form" id="login-form">
                        <input type="text" id="username" placeholder="ユーザー名" required>
                        <input type="password" id="password" placeholder="パスワード" required>
                        <button type="submit">ログイン</button>
                        <div id="login-error" style="color: red; display: none;">パスワードが間違っています。</div>
                     </form>
                  </div>
                  `
                  loginError.style.display = 'block';
               }
            }else{
               document.getElementById('HomeArea').style.display = 'none';
               usersRef.update({
                  status: 'online',
                  password: password,
               });
               setLocalStorage("username", username); // ログイン成功時
               loginForm.style.display = 'none';
               document.getElementById('ChatTab').style.display = 'block';
               chatContainer.style.display = 'flex';
               startChat();
               document.getElementById('room-select').style.display = 'block';
               document.getElementById('ChatTab').style.display = 'none';
               document.getElementById('BattleArea').style.display = 'none';
               
   
               AllowMove = 1;
   
               euro = 0;
               bankeuro = 0;
               rank = 1;
               rpt = 0;
               rp = 0;
               clearedmainquest = 0;
               playeratk = 20;
               playerdef = 0;
               playermatk = 10;
               playermdef = 0;
               playerhp = 100;
               playermagicpoint = 50;
               playercrla = 0.03;
               playercrdm = 1.5;
               playercrrs = 0;
               Potion.num = 2; Bomb.num = 2; Redcard.num = 2;
   
               BacktoHome();
   
               clearedmainquest = 0;
               quest.main = quests.main[0];
               quest.daily = [];
               for(i = 0;i < 5;i++){
                  let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                  newquest.id = i+1;
                  quest.daily.push(newquest);
               }
            }
         });
         
      });
   }

   async function login(){
      const loginForm = document.getElementById('login-form');
      const loginError = document.getElementById('login-error');
      const chatContainer = document.getElementById('chat-container');

      usersRef.update({
         status: 'online'
      });
      menuToggle.style.display = 'block';   
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('ChatTab').style.display = 'block';
      chatContainer.style.display = 'flex';
      startChat();
      document.getElementById('room-select').style.display = 'block';
      document.getElementById('ChatTab').style.display = 'none';

      AllowMove = 1;
      document.getElementById('BattleArea').style.display = 'none';
      document.getElementById('EventArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'none';

      // データを取得する関数)
      userData = await load();
      euro = userData.euro??0;
      bankeuro = userData.bankeuro??0;
      rank = userData.rank??1;
      rpt = userData.rpt??0;
      rp = userData.rp??0;
      clearedmainquest = userData.clearedmainquest??0;
      cleareddailyquest = userData.cleareddailyquest??0;
      playerhp = userData.hp??100;
      playeratk = userData.atk??20;
      playerdef = userData.def??0;
      playermatk = userData.matk??10;
      playermdef = userData.mdef??0;
      playermagicpoint = userData.mp??50;
      playercrla = userData.crla??0.03;
      playercrdm = userData.crdm??1.5;
      playercrrs = userData.crrs??0;
      maxrpt = rank*100;
      
      setTimeout(BacktoHome,1000);

      // ここでlastactをチェックする処理を追加
      load();
      usersRef.once('value').then(snapshot => {
         
         if(userData && checkLastLogin(userData.lastact)){
               cleareddailyquest = 0;
               quest.daily = [];
               for(i = 0;i < 5;i++){
                  let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                  newquest.id = i+1;
                  quest.daily.push(newquest);
               }
         }else{
            const namba = 5- cleareddailyquest
            quest.daily = [];
            for(i = 0;i < namba;i++){
               let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
               newquest.id = i+1;
               quest.daily.push(newquest);
            }
         }
      });
   }

   

   //こっからchat
   document.getElementById('message-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          if(!e.shiftKey){
            e.preventDefault();
            document.getElementById('send-button').click();
          }else{
            document.getElementById('message-input').value += '<br>'
          }
      }
      });   
  function startChat() {
      chatroom = document.getElementById('room-select').value;
      selectRoom();
  }

}
//#endregion

//#region chatのやつ
function selectRoom() {
   const roomSelect = document.getElementById('room-select');
   const sendButton = document.getElementById('send-button');
   const messageInput = document.getElementById('message-input');
   messagesRef.off();
   chatroom = roomSelect.value;
   messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
   document.getElementById('messages').innerHTML = '';

   function formatDate(date) {
       const year = date.getFullYear();
       const month = String(date.getMonth() + 1).padStart(2, '0');
       const day = String(date.getDate()).padStart(2, '0');
       const hours = String(date.getHours()).padStart(2, '0');
       const minutes = String(date.getMinutes()).padStart(2, '0');
       return `${year}/${month}/${day} ${hours}:${minutes}`;
   }

   // メッセージ送信
   sendButton.addEventListener('click', function() {
       var message = messageInput.value;
       if (message.trim() !== '') {
           messagesRef.push({
               text: message,
               username: username,
               timestamp: formatDate(new Date())
           });
           messageInput.value = '';
       }
       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
               setTimeout(displayAllMessages, 200);
           }
       });
   });

   // 新しいメッセージが追加された時のみ、そのメッセージを追加表示
   messagesRef.on('child_added', function(snapshot) {
       var messageData = snapshot.val();
       var messageElement = document.createElement('div');
       messageElement.className = 'message';
       messageElement.setAttribute('data-id', snapshot.key);

       var usernameElement = document.createElement('span');
       usernameElement.className = 'username';
       usernameElement.textContent = messageData.username;
       messageElement.appendChild(usernameElement);

       var timestampElement = document.createElement('span');
       timestampElement.className = 'timestamp';
       timestampElement.textContent = '  —' + messageData.timestamp;
       messageElement.appendChild(timestampElement);

       var brElement = document.createElement('br');
       messageElement.appendChild(brElement);

       var textElement = document.createElement('div');
       textElement.innerHTML = messageData.text;
       messageElement.appendChild(textElement);

       document.getElementById('messages').appendChild(messageElement);

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
   });

   messagesRef.once('value', function(snapshot) {
       displayAllMessages();  // 一回だけ全メッセージを表示
   });
}

function displayAllMessages() {
   var roomSelect = document.getElementById('room-select');
   chatroom = roomSelect.value;
   document.getElementById('messages').innerHTML = '';

   // データベースから全てのメッセージを取得
   messagesRef.once('value', function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
           var messageData = childSnapshot.val();
           var messageElement = document.createElement('div');
           messageElement.className = 'message';
           messageElement.setAttribute('data-id', childSnapshot.key);

           var usernameElement = document.createElement('span');
           usernameElement.className = 'username';
           usernameElement.textContent = messageData.username;
           messageElement.appendChild(usernameElement);

           var timestampElement = document.createElement('span');
           timestampElement.className = 'timestamp';
           timestampElement.textContent = '  —' + messageData.timestamp;
           messageElement.appendChild(timestampElement);

           var brElement = document.createElement('br');
           messageElement.appendChild(brElement);

           var textElement = document.createElement('div');
           textElement.innerHTML = messageData.text;
           messageElement.appendChild(textElement);

           document.getElementById('messages').appendChild(messageElement);
       });

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
   });
}

// 部屋作ったりラジバンダリ
function makeRoom() {
   const roomSelect = document.getElementById('room-select');
   const Loom = document.getElementById('room-make').value;
   const NowRef = database.ref('rooms/' + Loom);
   const pass = document.getElementById('room-make-pass').value;
   NowRef.once('value').then(function(snapshot) {
       if (snapshot.exists()) { // 既存部屋の場合
           var roomData = snapshot.val();
           if (roomData.pass == pass) {
               document.getElementById('room-select').appendChild(new Option(Loom, Loom));
               roomSelect.value = Loom;
               chatroom = Loom;
               selectRoom();
               document.getElementById('room-make').value = '';
               document.getElementById('room-make-pass').value = '';
           } else {
               document.getElementById('room-make').value = 'missed!!';
               document.getElementById('room-make-pass').value = '';
           }
       } else {
           const Pass = { pass: document.getElementById('room-make-pass').value };
           document.getElementById('room-select').appendChild(new Option(Loom, Loom));
           roomSelect.value = Loom;
           chatroom = Loom;

           NowRef.update(Pass);

           selectRoom();
           document.getElementById('room-make').value = '';
           document.getElementById('room-make-pass').value = '';
       }
   });
}


function checkLastLogin(lastact) {
   const now = new Date().getTime();
   const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1日をミリ秒に変換

   // 最終アクティブ時間が昨日以前かどうかを判定
   return (now - lastact) > oneDayInMilliseconds;
}

// beforeunloadイベントでユーザーの状態を更新
window.addEventListener('beforeunload', () => {
   const lastact = new Date().getTime();
   usersRef.update({
       status: 'offline',
       lastact: lastact
   });
});

//#endregion

//#region euroとrankの上のやつ
function updateUI(){
   document.getElementById('rank').textContent = rank;
   document.getElementById('rpt-bar').style.width = (rpt / maxrpt) * 100 + '%';
   document.getElementById('rpt-text').textContent = `${rpt}/${maxrpt}`;
   document.getElementById('euro').textContent = euro+'€';

   if(rpt >= maxrpt){
      rank += 1;
      rpt = 0;
      maxrpt = rank*100;
      save();
   }
}
updateUI();

function LetsCharge(){
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">チャージステーション</span><br>-->
   <button onclick="BacktoHome()">←</button> チャージステーション<br>
   <div class="row">
   <button class="HomeBButton" onclick="Charge(90,120)">90€/120$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">300€/360$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">720€/860$</button>
   </div>
   <div class="row">
   <button class="HomeBButton" onclick="Charge(900,1080)">960€/1080$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">1340€/1460$</button>
   <button class="HomeBButton" onclick="Charge(300,360)">1980€/2160$</button>
   </div>
   `;
}
function Charge(e,m){
   load();
   if(userData.money??0 >= m){
      euro += e;
      usersRef.update({
         money: userData.money??m - m
      });
      save();
      NicoNicoText(`${m}$払い、${e}€チャージ完了、です！`);
   }else{
      NicoNicoText('お金が足りません...');
   }
}
//#endregion
//#region profileのやつ
async function UpdateProfile(){
   let about = userData.about??'入力してね';
   document.getElementById('ProfileTab').innerHTML = `
   <span style="font-size: 24px; border: 1px solid #000000">${username}</span>　Rank:${rank}<br><br>
   <textarea id="about" placeholder="write about you" style="width: 255px; height: 124px;" oninput="InputAboutMe()">${about}</textarea>
   `
   document.getElementById('about').addEventListener('change', InputAboutMe);
}//自己紹介とかも入れたいよね
function InputAboutMe(){
   const textarea = document.getElementById('about');
   usersRef.update({
      about: textarea.value
   });
   load();
}
//#endregion
//#region Homeの動き達
function OpenTab(code){
   document.getElementById('HomeTab').style.display = 'none';
   document.getElementById('InventoryTab').style.display = 'none';
   document.getElementById('QuestTab').style.display = 'none';
   document.getElementById('ChatTab').style.display = 'none';
   document.getElementById('ProfileTab').style.display = 'none';

   switch(code){
      case 'H':document.getElementById('HomeTab').style.display = 'block';break;
      case 'I':document.getElementById('InventoryTab').style.display = 'block';break;
      case 'Q':document.getElementById('QuestTab').style.display = 'block';MakeNewQuest('x');break;
      case 'C':document.getElementById('ChatTab').style.display = 'block';break;
      case 'P':document.getElementById('ProfileTab').style.display = 'block';UpdateProfile();break;
   }
}
function BacktoHome(){
   save();
   log.textContent = '';
   document.getElementById('HomeArea').style.display = 'block';
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">シャングリ・ラ中心街</span><br>-->
   <img src="assets/downtown.png" style="width: 600px; height: 300px;"><br>
   インタラクト<br>
   <div class="row"><button class="HomeButton" onclick="LetsCharge()">Premium Shop</button> <button class="HomeButton" onclick="HomeBar()">酒場</button> <button class="HomeButton" onclick="HomeTraining()">訓練場</button></div>
   <button class="HomeButton" onclick="HomeBank()">銀行</button> (ここもうちょい追加したいね)<br><br>
   <button class="HomeBigButton" onclick="HomeMapSelect()">駅に行く</button>
   <button class="HomeBigButton" onclick="HomeJobSelect()">タイミーをする</button>
   <button class="HomeBigButton" onclick="HomeMarket()">商店街を見に行く</button>
   `;
}
//#region rpgtoka
function HomeMapSelect(){
   save();
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">シャングリ・ラ中心街</span><br>-->
   <img src="assets/station.png" style="width: 600px; height: 300px;"><br>
   <button onclick="BacktoHome()">←</button> 駅<br>
   <button class="HomeSButton" onclick="HomeLetsDungeon(1)">創世黎明の原野</button><br>
   <button class="HomeSButton" onclick="HomeLetsDungeon(2)">ガチェンレイゲスドゥールラート</button><br>
   <button class="HomeSButton" onclick="">アビドス高等学校((</button><br>
   `;
}
function HomeLetsDungeon(code){
   save();
   fun = Math.floor(Math.random() * 100)+1;//毎回変更されるのぜ
   stage = code;
   floor = 0;

   humans.players[1].level = 1;
   humans.players[1].exp = 0;
   sp = 1;
   
   humans.players[1].attack = playeratk;
   humans.players[1].defense = playerdef;
   humans.players[1].mattack = playermatk;
   humans.players[1].mdefense = playermdef;
   humans.players[1].maxhealth = playerhp;
   humans.players[1].maxmp = playermagicpoint;
   humans.players[1].critlate = playercrla;
   humans.players[1].critdmg = playercrdm;
   humans.players[1].critresist = playercrrs;
   humans.players[1].health = humans.players[1].maxhealth;
   humans.players[1].mp = humans.players[1].maxmp
   humans.players[1].power = 1;humans.players[1].shell = 1;
   
   document.getElementById('HomeArea').style.display = 'block';
   document.getElementById('HomeArea').style.textAlign = 'center';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('HomeArea').innerHTML = `
   <button class="button" onclick="HomeGoDungeon('greenslime');">greenslime</button><button class="button" onclick="HomeGoDungeon('mechanic');">mechanic</button><button class="button" onclick="HomeGoDungeon('clown');">clown</button><button class="button" onclick="HomeGoDungeon('herta');">herta</button><br>
   <button class="button" onclick="HomeGoDungeon('magodiaqua');">Mago Di Aqua</button><br>
   <button class="button" onclick="HomeGoDungeon('wretch');">wretch〜持たざる者〜</button>
   `;
}
function HomeGoDungeon(name){
   document.getElementById('HomeArea').style.textAlign = 'left';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'none';
   humans.players[1].name = name;
   switch(humans.players[1].name){//これはキャラ固有のやつやね
      case 'wretch'://wretch〜持たざる者〜
         humans.players[1].name = '持たざる者';
         humans.players[1].ex = 'none';
         humans.players[1].ns = 'none';
         humans.players[1].ps = 'none';
         buttonsolid = '#000000'
         buttonback = '#999999'
      break;
      case 'greenslime'://greenslime
         humans.players[1].name = 'greenslime';
         humans.players[1].ex = 'none';
         humans.players[1].ns = 'none';
         humans.players[1].ps = 'none';
         buttonsolid = '#000000'
         buttonback = '#999999'
         humans.players[1].maxmp = 0;
         humans.players[1].defense += 5;
         humans.players[1].mdefense -= 20;
      break;
      case 'mechanic'://mechanic
         humans.players[1].name = 'メカニッカ';
         humans.players[1].ex = 'placeturret';
         humans.players[1].ns = 'throwwrench';
         humans.players[1].ps = 'solplaceturret';
         buttonsolid = '#ff7373';
         buttonback = '#fcffc0';
         humans.players[1].maxhealth -= 50;
         humans.players[1].attack += 5;
         humans.players[1].mattack += 10;
         humans.players[1].mdefense += 20;
      break;
      case 'clown'://clown //ごめん好きこいつ...ww 終末もそのうち作るよ
         humans.players[1].name = '週末の道化師';
         humans.players[1].ex = 'trickyvariables';
         humans.players[1].ns = 'gambler';
         humans.players[1].ps = 'highsol';
         buttonsolid = '#FFACF9';
         buttonback = '#ACF8FF';
         humans.players[1].critlate += 0.06;
         humans.players[1].critresist += 0.1;
      break;
      case 'herta'://herta
         humans.players[1].name = 'ヘルタ'
         humans.players[1].ex = 'bigdiamond';//こんな大きなダイアモンド見たことないでしょ、あげるね〜
         humans.players[1].ns = 'improve';//パーツアップグレード。
         humans.players[1].ps = 'enemy50%pursuit';//くるくる〜っと、くるりん〜っと
         buttonsolid = '#F1EA66';
         buttonback = '#A163CB';
         humans.players[1].attack -= 5;
         humans.players[1].maxmp -= 40;
         humans.players[1].critlate += 0.04;
         enemy50pursuitenelgy = 1;
      break;
      case 'magodiaqua'://MagoDiAqua
         humans.players[1].name = 'Luna Di Mare';
         humans.players[1].ex = 'none';
         humans.players[1].ns = 'none';
         humans.players[1].ps = 'none';
         buttonsolid = '#4473ad'
         buttonback = '#AFC4DE'
         humans.players[1].maxhealth -= 50;
         humans.players[1].attack -= 10;
         humans.players[1].mattack += 20;
         humans.players[1].mdefense += 20;
         humans.players[1].maxmp += 50;
      break;
   }
   humans.players[1].health = humans.players[1].maxhealth;

   switch(stage){
      case 1:
         enemylevel = 1;enemyhp = 100;
         enemyatk = 10;enemypower = 1; enemymatk = 10;
         enemydef = 0; enemyshell = 1; enemymdef = 0;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
      break;
      case 2:case 3:
         enemylevel = 5;enemyhp = 140;
         enemyatk = 15;enemypower = 1; enemymatk = 10;
         enemydef = 5; enemyshell = 1; enemymdef = 0;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
      case 4:
         enemylevel = 10;enemyhp = 160;
         enemyatk = 25;enemypower = 1; enemymatk = 15;
         enemydef = 10; enemyshell = 1; enemymdef = 10;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
   }
   
   dungeonnow = 1;
   document.getElementById('NowMap').style.display = 'block';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   GoNextFloor();

   AllowMove = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}

function ExitDungeon(code){
   euro += 50*code;
   dungeonnow = 0;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'none';
   BacktoHome();
}
//#endregion
//#region jobtoka
function HomeJobSelect(){
   save();
   document.getElementById('HomeArea').innerHTML = `
   <!--<span id="BigText">タイミー</span><br>-->
   <button onclick="BacktoHome()">←</button> お仕事一覧<br>
   <select id="Num-Select"><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option></select><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroShort')">[急募][短期][面接無し]品出し(エイトイレブン)</button><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroMiddle')">[高収入]仕分け、シール貼り(株式会社アイミックス)</button><br>
   <button class="HomeSButton" onclick="HomeJobStart('EuroLong')">[超高収入]荷物を受け取り、運ぶだけ！</button><br>
   `;
}

function HomeJobStart(name){
   save();
   afknow = 1;
   let num = document.getElementById('Num-Select').value;
   document.getElementById('HomeArea').innerHTML = `
   ーAFKタスク進行中ー<br>
   <span id="Task-log">
      <div class="task-bar-container">
         <div class="task-bar" id="task-bar"></div>
         <div class="task-text">  <span id="task-text">wait...</span></div>
      </div>
   </span>
   `;
   let reword = 0;
   let time = 0;
   let type = 0;
   switch(name){
      case 'EuroShort':
         type = 'Euro'
         reword = num*10;
         time = 5
         break;
      case 'EuroMiddle':
         type = 'Euro';
         reword = num*50;
         time = 15;
         break;
      case 'EuroLong':
         type = 'Euro'; 
         reword = num*100
         time = 30;  
         break;
   }
   let maxTasks = num*time*60;
   let taskInterval = 1000; // 15分 (ミリ秒に変換)
   let completedTasks = 0;
   let taskTimer;
   function afkTask(){
      completedTasks++;
      if(completedTasks < maxTasks){
         document.getElementById('task-bar').style.width = (completedTasks/maxTasks) * 100 + '%';
         document.getElementById('task-text').textContent = `${completedTasks}/${maxTasks}`;
         //document.getElementById('Task-log').textContent = `${completedTasks} / ${maxTasks}`
      }else{
         clearInterval(taskTimer);
         afknow = 0;
         switch(type){
            case 'Euro':euro += reword;document.getElementById('euro').textContent = euro+'€'; break;
         }
         HomeJobSelect();
      }
   }
   // 15分ごとにafkTaskを実行
   taskTimer = setInterval(afkTask, taskInterval);
}

//#endregion

//#region bar
function HomeBar(){
   save();
   log.textContent = '';
   document.getElementById('HomeArea').innerHTML = `
   <button onclick="BacktoHome()">←</button> Dril's bar<br>
   <button class="HomeSButton" onclick="HomeBarRecluit()">募集</button>
   <button class="HomeSButton" onclick="HomeBarMeet()">探す</button>
   `;
}

function HomeBarRecluit(){
   save();
   log.textContent = '';
   document.getElementById('HomeArea').innerHTML = `
   <button onclick="HomeBar()">←</button>募集<br>
   ダンジョンで一緒に戦ってくれる仲間を募集することができます！<br>
   <div class="row">
   <button class="HomeSButton" onclick="HomeBarRecluitGo(1)">1回募集/80€</button>
   <button class="HomeSButton" onclick="HomeBarRecluitGo(10)">10回募集/800€</button>
   </div>
   `;
}

async function HomeBarRecluitGo(num){
   save();
   log.textContent = 'ごめんね、まだできてないんよ';
   document.getElementById('HomeArea').innerHTML = `
   <button onclick="HomeBarRecluit()">←</button>募集<br>
   ${num}回募集しました<br>
   <button class="HomeSButton" onclick="HomeBarMeet()">探す</button>
   `;
   await delay(1000);
   HomeBarRecluit();
}
function HomeBarMeet(){
   save();
   log.textContent = 'ごめんね、まだできてないんよ';
   setTimeout(HomeBarRecluit,1000)
}//ブルアカ風にappencChildでやりたいね
//#endregion
//#region training
function HomeTraining(){
   save();
   document.getElementById('HomeArea').innerHTML = `
   <button onclick="BacktoHome()">←</button> 訓練場<br>
   ここではスキルツリー的に能力を伸ばせるようにする予定。<br>
   まあ...できてないんですけどね！！！！！<br>
   steamにearly-accessのゲームが多い理由がわかるような気がしますわ！！！！！
   `;
}
//#endregion
//#region bank
function HomeBank(){
   updateUI()
   save();
   document.getElementById('HomeArea').innerHTML = `
  <button onclick="BacktoHome()">←</button> 超安心安全銀行<br>
  <span id="bank-deposit" class="bank-title">deposite</span><input type="number" id="bank-deposit-num" /><button id="bank-deposit-num-go" onclick="BankDeposite('Num')" class="bank-button">go</button><button id="bank-deposit-all" class="bank-button" onclick="BankDeposite('All')">All</button><br>
  <span id="bank-withdraw" class="bank-title">withdraw</span><input type="number" id="bank-withdraw-num" /><button id="bank-withdraw-num-go" onclick="BankWithdraw('Num')" class="bank-button">go</button><button id="bank-withdraw-all" class="bank-button" onclick="BankWithdraw('All')">All</button><br>
  <span id="BankEuro">bank account:0€</span>
   `;
   document.getElementById('BankEuro').textContent = 'bank account:'+bankeuro+'€';
}
function BankDeposite(code){
   if(code == 'Num'){
      let num = +document.getElementById('bank-deposit-num').value;
      bankeuro += num;
      euro -= num;
      document.getElementById('bank-deposit-num').value = '';
   }else if(code == 'All'){
      bankeuro += euro;
      euro = 0;
      document.getElementById('bank-deposit-num').value = '';
   }
   save();
   HomeBank();
}
function BankWithdraw(code){
   if(code == 'Num'){
      let num = +document.getElementById('bank-withdraw-num').value;
      euro += num;
      bankeuro -= num;
      document.getElementById('bank-withdraw-num').value = '';
   }else if(code == 'All'){
      euro += bankeuro;
      bankeuro = 0;
      document.getElementById('bank-withdraw-num').value = '';
   }
   save();
   HomeBank();
}
//#endregion

//#endregion

//#region 非ダメ時モーション(?)
async function humandamaged(cam,tcam,me,target,multiplier,kind,code){//矛先の陣営、攻撃タイプ(物理||魔法)、自分、矛先、倍率、コード(PS用)
   console.log(humans[cam][me].name+'->'+humans[tcam][target].name+'   引数は'+[cam,tcam,me,target,multiplier,kind,code]+'だってよ')
   switch(kind){
      case 'sh':
         //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
         x = humans[cam][me].weapon?.power??0;
         if(humans[cam][me].weapon.num == 8){x = Math.floor(Math.random() * 13)+1};
         if(humans[cam][me].weapon.num == 13){x = Math.floor(Math.random() * 1000)+1};//えぐ...
         x = (humans[cam][me].attack * humans[cam][me].power * multiplier + x);
         if(code == 3 && humans[cam][me].ps == 'highsol'){x *= 3};
         if(code == 3 && humans[cam][me].ps == 'solx5but'){x *= 5};
         x -= (humans[tcam][target].defense * humans[tcam][target].shell);
      
         if(equipweapon == 7){humans[cam][me].critlate += 0.5}
         if(equipweapon == 14){t=humans[cam][me].critlate;humans[cam][me].critlate = 0.7;w=humans[cam][me].critdmg;humans[cam][me].critdmg = 0.05}//ん？なんか会心多くね？を言わせてやりたいぜ..ww(50%増やしてるからかなりぶっ壊れ)
         if((Math.floor(Math.random()+ humans[cam][me].critlate)-humans[tcam][target].critresist) >= 1){x += (humans[tcam][target].defense); x *= humans[cam][me].critdmg; log.textContent = '会心の一撃！'; await delay(1000);};
         if(equipweapon == 14){humans[cam][me].critlate = t;humans[cam][me].critdmg = w;}
         if(equipweapon == 7){humans[cam][me].critlate -= 0.5}
         
         if(buffhas(cam,me,'improve')){x *= 1.4;};
         if(buffhas(cam,me,'LetsThrow')){x *= 2; buffremove(cam,me,'LetsThrow');};
         if(buffhas(cam,me,'gambling')){z = clowngambling[Math.floor(Math.random() * clowngambling.length)]; x *= z; buffremove(cam,me,'gambling'); log.textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);};
         x = Math.ceil(x);
         if(x < 0){x = 0}; if(x > humans[tcam][target].health){x = humans[tcam][target].health};
         y = humans[tcam][target].health;
         humans[tcam][target].health -= x;
         console.log(`damage:${y}->${humans[tcam][target].health}(${x})`);
         if(humans[tcam][target].health < 0){humans[tcam][target].health = 0};
         tekiou();
         log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ！';
         if(code == 3 && humans[cam][me].ps == 'solplaceturret'){turretPlace(cam);}
         
         if(cam == 'players'){
            x = 1;if(code == 3){x = 2};
            switch(humans[cam][me].name){
               case 'Wretch': skillcooldown += 10*x; break;
               case 'greenslime': skillcooldown += 5*x; break;
               case 'mechanic': skillcooldown += 15*x; break;
               case 'clown': skillcooldown += 20*x; break;
               case 'herta': skillcooldown += 10*x; break;
            }
            if(skillcooldown > 100){skillcooldown = 100};
            if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}
            else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};//新！クールダウン！！
         }
         await delay(1000);
         if(humans[tcam][target].health <= 0){return 'dead';}

         //特殊武器ゾーン Weaponsのprocessで
         if(equipweapon == 11){//体力を吸収するやつ。(ジェン・ソルテ)
            log.textContent = humans[cam][me].name+'は'+humans[tcam][target].name+'の体力を吸収した！';
            await delay(500);
            y = Math.ceil(x * 0.25);
            humans[cam][me].health += y;
            if(humans[cam][me].health > humans[cam][me].maxhealth){humans[cam][me].health = humans[cam][me].maxhealth};
            tekiou();
            log.textContent = y+'のHPを回復した！';
            await delay(1000);
         }
         if(equipweapon == 12 && code == 1 && humans[tcam][target].health > 0){//防御力下げるやつ(time on target)
            t = Math.floor(Math.random()*3)+1;
            switch(t){case 1:t='トリニティの砲撃術は優秀ですから。';break; case 2:t='お客様のお見送りも、丁寧に。'; break; case 3:t='砲手、支援を。';break;}
            log.textContent = t;
            await delay(1000);
            x = Math.ceil(humans[cam][me].attack * humans[cam][me].power * 1.1 + weaponpower - humans[tcam][target].defense);
            if(x < 0){x = 0};if(x > humans[tcam][target].health){x = humans[tcam][target].health};
            humans[tcam][target].health -= x;
            tekiou();
            buffadd(tcam,target,4,1);
            log.textContent = 'お口に合うと良いのですが..';
            await delay(1000);
            if(humans[tcam][target].health <= 0){return 'dead';}
         }
      
         //追撃ゾーン　ここどしよ
         if(humans[cam][me].ps == 'enemy50%pursuit' && humans[tcam][target].health <= humans[tcam][target].maxhealth / 2 && enemy50pursuitenelgy == 1 && humans[tcam][target].health > 0){
            enemy50pursuitenelgy = 0;
            z = Math.floor(Math.random() * 2);
            if(z == 0){log.textContent = 'くるくる～――っと';}else{log.textContent = 'くるりん～っと';}
            await delay(1000);
            x = (humans[cam][me].attack * humans[cam][me].power * 0.7 + weaponpower); x -= (humans[tcam][target].defense);
            if((Math.floor(Math.random()+ humans[cam][me].critlate)) == 1){x += (humans[tcam][target].defense); x *= 3; log.textContent = '会心の一撃！'; await delay(1000);};
            if(buffhas(cam,me,'improve')){x *= 1.4;};
            x = Math.ceil(x);
            if(buffhas(cam,me,'LetsThrow')){x *= 2; buffremove(cam,me,'LetsThrow');};
            if(x < 0){x = 0}; if(x > humans[tcam][target].health){x = humans[tcam][target].health};
            humans[tcam][target].health -= x;
            if(humans[tcam][target].health < 0){humans[tcam][target].health = 0};
            tekiou();
            log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ!';
            skillcooldown += 10;
            if(skillcooldown > 100){skillcooldown = 100};if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
            await delay(1000)
            if(humans[tcam][target].health <= 0){return 'dead';}
         }else if(humans[cam][me].name == 'herta' && humans[tcam][target].health <= humans[tcam][target].maxhealth / 2 && humans[cam][me].level >= 10 && humans[tcam][target].health > 0){//1凸効果「弱みは付け込み」
            x = (humans[cam][me].attack * humans[cam][me].power * 0.4 + weaponpower) - (humans[tcam][target].defense);
            if((Math.floor(Math.random()+ humans[cam][me].critlate - 0.05)) == 1){x += (humans[tcam][target].defense); x *= humans[cam][me].critdmg; log.textContent = '会心の一撃！'; await delay(1000);};
            if(buffhas(cam,me,'improve')){x *= 1.4;};
            x = Math.ceil(x);
            if(buffhas(cam,me,'LetsThrow')){x *= 2; buffremove(cam,me,'LetsThrow');};
            if(x < 0){x = 0}; if(x > humans[tcam][target].health){x = humans[tcam][target].health};humans[tcam][target].health -= x;if(humans[tcam][target].health < 0){humans[tcam][target].health = 0};
            tekiou();
            log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ!';
            skillcooldown += 5;
            if(skillcooldown > 100){skillcooldown = 100};if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
            await delay(1000);
            if(humans[tcam][target].health <= 0){return 'dead';}
         }
         break;
      case 'mg':
         //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
         x = (humans[cam][me].mattack * humans[cam][me].mpower * multiplier);
         x -= (humans[tcam][target].mdefense * humans[tcam][target].shell);
         x = Math.ceil(x);if(x < 0){x = 0};if(x > humans[tcam][target].health){x = humans[tcam][target].health};
         humans[tcam][target].health -= x;
         tekiou();
         log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ!';
         await delay(1000);
         break;
   }
};
//#endregion

//#region playerturn
function backtoplayerturn(){
   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(humans.players[1].ex == 'placeturret'){PlayerTurretattack = Math.round(humans.players[1].attack * 0.5);};
   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('select1').textContent = 'attack';
   document.getElementById('select2').textContent = 'magic';
   document.getElementById('select3').textContent = 'tools';
   document.getElementById('back').textContent = 'pass';
   //errorcheck();
}
async function playerturn(cam,me){
   nstimeout = 0;
   x = Object.values(humans.players).filter(x => x.status == 1&& x.health > 0).map(x => x.num);
   for(i = 0; i < x.length; i++){
      let n = x[i]
      for(const key in humans.players[n].buffs){
         humans.players[n].buffs[key].time -= 1; // -1する
         if (humans.players[n].buffs[key].time <= 0) {
            delete humans.players[n].buffs[key]; // 0以下なら消し去る
         }
      }
   }
   tekiou();

   if((turncount % Skills.ns[humans[cam][me].ns].cool) == 0){
      await Skills[humans[cam][me].ns].process(cam,me);
      await delay(1000)
   };

   if(skillcooldown == 100){document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()">skill</button>';}else{document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';};
   if(humans.players[me].ex == 'placeturret'){PlayerTurretattack = Math.round(humans.players[me].attack * 0.5);};
   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('sbuttons').innerHTML = `<button class="button" id="select1" onclick="select1(${me})">attack</button>  <button class="button" id="select2" onclick="select2(${me})">magic</button>  <button class="button" id="select3" onclick="select3(${me})">tools</button>  <button class="button" id="back" onclick="back(${me})">runaway</button>`
   //errorcheck();
};
//#endregion
//#region playerの選択
let nowturn = 0;
let targetselect = 0;
async function select1(me){
   if (phase == 1){
      log.textContent = 'どうやって攻撃する？';
      document.getElementById('select1').textContent = 'slash';
      document.getElementById('select2').textContent = 'double slash';
      document.getElementById('select3').textContent = 'slash of light';
      document.getElementById('back').textContent = 'back';
      phase = 2;
   } else if (phase == 2) {
      disappear()
      if(humans.players[me].slash1 !== 0){
         Slash(1,me)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic1 !== 0){
         Magic(1,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(humans.players[me].tool1 !== 0){
         Tool(1,me)
      }else{
         log.textContent = 'you dont have tool...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   }
}
async function select2(me){
   if (phase == 1) {
      log.textContent = 'どうする？';
      document.getElementById('select1').textContent = humans.players[me].magic1;
      document.getElementById('select2').textContent = humans.players[me].magic2;
      document.getElementById('select3').textContent = humans.players[me].magic3;
      document.getElementById('back').textContent = 'back';
      phase = 3;
   } else if (phase == 2) {
      disappear()
      if(humans.players[me].slash2 !== 0){
         log.textContent = `${humans.players[me].name}は${humans.players[me].slash2.name}をした！`;
         Slash(2,me)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic2 !== 0){
         Magic(2,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(humans.players[me].tool2 !== 0){
         Tool(2,me)
      }else{
         log.textContent = 'you dont have tool...';
         window.setTimeout(backtoplayerturn, 1000)
      }
      
   }
}
async function select3(me){
   if (phase == 1) {
      log.textContent = '何を使う？';
      document.getElementById('select1').textContent = humans.players[me].tool1.name+' x'+humans.players[me].tool1.num;
      document.getElementById('select2').textContent = humans.players[me].tool2.name+' x'+humans.players[me].tool2.num;
      document.getElementById('select3').textContent = humans.players[me].tool3.name+' x'+humans.players[me].tool3.num;
      document.getElementById('back').textContent = 'back';
      phase = 4;
   } else if (phase == 2) {
      disappear()
      if(humans.players[me].slash3 !== 0){
         Slash(3,me)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic3 !== 0){
         Magic(3,me)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(equiptool3.num > 0){
         log.textContent = humans.players[me].name + 'は'+equiptool3.name+'を使用した!'
         window.setTimeout(eval(equiptool3+'act(me)'), 1000)
      }else{
         log.textContent = 'not enough item ...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   }
}

function LetsTargetSelect(){
   log.textContent = '誰を狙う？';
   return new Promise((resolve) => {
      let color = 'background-color:#fff450';
      let pcolor = 'background-color:#ffffff';

      let pla1 = document.getElementById('players1');
      let pla2 = document.getElementById('players2');
      let pla3 = document.getElementById('players3');
      let pla4 = document.getElementById('players4');
      let ene1 = document.getElementById('enemies1');
      let ene2 = document.getElementById('enemies2');
      let ene3 = document.getElementById('enemies3');
      let ene4 = document.getElementById('enemies4');
      
      const resetStyles = () => {
         pla1.style.backgroundColor = pcolor;
         pla2.style.backgroundColor = pcolor;
         pla3.style.backgroundColor = pcolor;
         pla4.style.backgroundColor = pcolor;
         ene1.style.backgroundColor = pcolor;
         ene2.style.backgroundColor = pcolor;
         ene3.style.backgroundColor = pcolor;
         ene4.style.backgroundColor = pcolor;
      };

      let zigo = function(){
         resetStyles();
         if(humans.players[1].status == 1){pla1.removeEventListener('click', handleClick);}
         if(humans.players[2].status == 1){pla2.removeEventListener('click', handleClick);}
         if(humans.players[3].status == 1){pla3.removeEventListener('click', handleClick);}
         if(humans.players[4].status == 1){pla4.removeEventListener('click', handleClick);}
         if(humans.enemies[1].status == 1){ene1.removeEventListener('click', handleClick);}
         if(humans.enemies[2].status == 1){ene2.removeEventListener('click', handleClick);}
         if(humans.enemies[3].status == 1){ene3.removeEventListener('click', handleClick);}
         if(humans.enemies[4].status == 1){ene4.removeEventListener('click', handleClick);}
         resolve(target);
      }
      let target = []
      function handleClick(num,cam){
         target.push(num);target.push(cam);
         zigo();
      }
      if(humans.players[1].status == 1){
         pla1.style.backgroundColor = color;
         pla1.addEventListener('click', () => handleClick(1, 'players'));
      }
      if (humans.players[2].status == 1) {
         pla2.style.backgroundColor = color;
         pla2.addEventListener('click', () => handleClick(2, 'players'));
      }
      if (humans.players[3].status == 1) {
         pla3.style.backgroundColor = color;
         pla3.addEventListener('click', () => handleClick(3, 'players'));
      }
      if (humans.players[4].status == 1) {
         pla4.style.backgroundColor = color;
         pla4.addEventListener('click', () => handleClick(4, 'players'));
      }

      if (humans.enemies[1].status == 1) {
         ene1.style.backgroundColor = color;
         ene1.addEventListener('click', () => handleClick(1, 'enemies'));
      }
      if (humans.enemies[2].status == 1) {
         ene2.style.backgroundColor = color;
         ene2.addEventListener('click', () => handleClick(2, 'enemies'));
      }
      if (humans.enemies[3].status == 1) {
         ene3.style.backgroundColor = color;
         ene3.addEventListener('click', () => handleClick(3, 'enemies'));
      }
      if (humans.enemies[4].status == 1) {
         ene4.style.backgroundColor = color;
         ene4.addEventListener('click', () => handleClick(4, 'enemies'));
      }
   });
}
 
//一個選択肢を戻るやつ
async function back(me){
   if(phase == 1){
      disappear();
      document.getElementById('BattleArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'block';
      
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      AllowMove = 0;
      log.textContent = 'うまく逃げ切れた！';
      await delay(1000);
      log.textContent = '';
   }else if(phase == 2){
      backtoplayerturn()
   }else if(phase == 3){
      backtoplayerturn()
   }else if(phase == 4){
      backtoplayerturn()
   }
   
}
function disappear(){
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = '';
   phase = 'null';
}
//#endregion
//#region playerの斬撃
async function Slash(num,me){
   console.log(`slash${num}起きたよ!${me}がやったってよ`);
   let UseSlash
   switch(num){
      case 1:UseSlash = humans.players[me].slash1; break;
      case 2:UseSlash = humans.players[me].slash2; break;
      case 3:UseSlash = humans.players[me].slash3; break;
   }

   humans.players[me].mp -= Slashs[UseSlash].mp;tekiou();
   if(humans.players[me].mp >= Slashs[UseSlash].mp){
      target = await LetsTargetSelect();
      log.textContent = `${humans.players[me].name}の${Slashs[UseSlash].name}！`;await delay(1000);
      let result = await Slashs[UseSlash].process('players',target[1],me,target[0]);
      if(result == 'dead'){killed('players',target[1],me,target[0])};
      NextTurnis('players',target[1],me,target[0]);
   }else{
      log.textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}
//#endregion
//#region playerの魔法
async function Magic(num,me){
   let UseMagic
   switch(num){
      case 1:UseMagic = humans.players[me].magic1;break;
      case 2:UseMagic = humans.players[me].magic2;break;
      case 3:UseMagic = humans.players[me].magic3;break;
   }
   
   if(humans.players[me].mp >= Magics[UseMagic].mp){
      target = await LetsTargetSelect();
      humans.players[me].mp -= Magics[UseMagic].mp;tekiou();
      let result = await Magics[UseMagic].process('players',target[1],me,target[0]);
      if(result == 'dead'){killed('players',target[1],me,target[0])};
      NextTurnis('players',target[1],me,target[0]);
   }else{
      log.textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}

//#endregion
//#region playerの道具
async function Tool(num,me){
   let UseTool
   switch(num){
      case 1:UseTool = humans.players[me].tool1;break;
      case 2:UseTool = humans.players[me].tool2;break;
      case 3:UseTool = humans.players[me].tool3;break;
   }
   if(humans.players[me][UseTool].num > 0){
      target = await LetsTargetSelect();
      //log.textContent = humans.players[me].name + 'は'+equiptool3.name+'を使用した!';
      Tools[UseTool].process('players',target[1],me,target[0]);
      humans.players[me][UseTool].num -= 1
      tekiou();
   }else{
      log.textContent = 'not enough tool...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}
//#endregion
//#region playerのskill
let Splithealth = 0;
let Splitmaxhealth = 0;
//let PlayerTurret = 0;
//let PlayerTurretattack = 0;
let clowngambling = ['0','0','2','2','2','4'];
let hertaexvoice = ['こんな大きなダイアモンド見たことないでしょ？あげるね～','あなた…それじゃあダメだよ','ちょっとは静かになさい！','私が誰だか知ってるの？']

// スキル予約関数
let skillQueue = [];
function skillReserve(cam,me){
   x = humans[cam][me].ex;
   skillQueue.push({cam,me,x});
   console.log(`スキル予約済み: ${cam} ${num} -> ${skill}  現在キュー: ${skillQueue}`);
}
async function skillAct(cam,me,skill){
   let result = await Skills.ex[skill].process(cam,me);
   skillReset(cam,me);
   await delay(1000);
   return result;
}
function skillReset(cam,me){
   humans[cam][me].cooldown = 0;
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>';
   document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function Splittekiou(){
   document.getElementById('SplitHealth').textContent = Splithealth;
   document.getElementById('SplitMaxHealth').textContent = Splitmaxhealth;
   }
function Splitbreak(){
   buffremove(cam,me,'spliting')
   x = Math.floor(Splitmaxhealth * 0.7);
   playerhealth += x;
   if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
   document.getElementById('PlayerFriendFront').innerHTML = '';
   Splitmaxhealth = 0;
   Splithealth = 0;
   log.textContent = playername+'のコピーは倒された...';
   skillcooldown = 0;
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button" onclick="skillact()"></button>'
   document.getElementById("SkillCoolDown").textContent = skillcooldown + '%';
}
function turretPlace(cam){
   if(!document.getElementById(`${cam}Turret`)){
      let div = document.createElement('div');
      div.id = `${cam}t`;
      div.className = 'players'
      document.getElementById(cam).appendChild(div);
      kazu = 0;
      humans.players.t.maxhealth = 0;
      humans.players.t.health = 0;
   }
   humans.players.t.status = 1;
   humans.players.t.kazu += 1;
   humans.players.t.maxhealth += 15;
   humans.players.t.health += 15;
   tekiou()
}
function turretBreak(cam){
   humans[cam]['t'].kazu -= 1;
   if(humans[cam]['t'].kazu <= 0){
      humans[cam]['t'] = {};
      document.getElementById(`${cam}Turret`).remove();
   }else{
      tekiou()
   }
}
//#endregion

//#region prev-enemyturn
async function NextTurnis(cam,tcam,me,target){
   phase = 0;

   //アンコールの動き
   if(!cam == 0){
   y = 1;//luck
   if(buffhas(cam,me,'luck')){y = Math.floor(Math.random() * humans[cam][me].buffs.luck.lv);}//luck
   if(y == 0){
      log.textContent = '当たりが出たらもう一本♪';
      await delay(1000); backtoplayerturn(); return;
   }


   //継続ダメージの動き
   if (buffhas(cam,me,'poison')){
      x = humans[cam][me].health;
      humans[cam][me].health -= Math.floor(humans[cam][me].maxhealth * humans[cam][me].buffs.poison.lv);
      if(humans[cam][me].health < 0){humans[cam][me].health = 0};
      y = x - humans[cam][me].health;
      log.textContent = humans[cam][me].name + 'は毒で' + y + 'のダメージ!';
      await delay(1000);
   };
   if(buffhas(cam,me,'burn')){
      x = humans[cam][me].health;
      humans[cam][me].health -= humans[cam][me].buffs.burn.lv;
      if(humans[cam][me].health < 0){humans[cam][me].health = 0}
      y = x - humans[cam][me].health;
      log.textContent = humans[cam][me].name + 'は燃えて' + y + 'のダメージ!';
      await delay(1000);
   };
   tekiou();
   if(humans[cam][me].health <= 0){defeat();return;}
   }

   //強制スキルの動き
   while(skillQueue.length > 0){
      const {cam,me,skill} = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構"shift()"
      console.log(`${cam}${me} のスキル:${skill}を発動!`);
      await skillAct(cam,me,skill);
   }

   //こっから次のターン行く動き　ここでこの人のターンは終わるって感じだね
   acted += 1;
   if(acted < bar.num.length){
   }else{
      let cams = 0;
      x = [1, 2, 3, 4].every(id => {let Enemy = humans.enemies[id];return Enemy.status == 0 || Enemy.status == 2;});
      if(humans.players['t'].kazu > 0 && x == false){
         log.textContent = '我らのturretの攻撃!';
         await delay(1000);
         cams = 'players';
         let selected = ShallTargetSelect(1,`ehpl`,0);
         let tcams = selected[1];let targets = selected[0];
         console.log(humans[cams]['t'].attack,humans[cams]['t'].kazu,humans[tcams][targets].defense,humans[tcams][targets].shell);
         x = Math.ceil(humans[cams]['t'].attack * humans[cams]['t'].kazu) - Math.ceil(humans[tcams][targets].defense*humans[tcams][targets].shell);
         if(x < 0){x = 0};if(x > humans[tcams][targets].health){x = humans[tcams][targets].health};
         humans[tcams][targets].health -= x;tekiou();
         log.textContent = `${humans[tcams][targets].name}に${x}のダメージ！`;
         if(humans[tcams][targets].health <= 0){killed(cams,tcams,1,targets);return;};
         await delay(1000);
      }
      x = [1, 2, 3, 4].every(id => {let Players = humans.players[id];return Players.status == 0 || Players.status == 2;});
      if(humans.enemies['t'].kazu > 0 && x == false){
         log.textContent = '敵のturretの攻撃!';
         await delay(1000);
         cams = 'enemies';
         let selected = ShallTargetSelect(0,`phpl`,0);
         let tcams = selected[1];let targets = selected[0];
         x = Math.ceil(humans[cams]['t'].attack * humans[cams]['t'].kazu) - Math.ceil(humans[tcams][targets].defense*humans[tcams][targets].shell);
         if(x < 0){x = 0};if(x > humans[tcams][targets].health){x = humans[tcams][targets].health};
         humans[tcams][targets].health -= x;tekiou();
         log.textContent = `${humans[tcams][targets].name}に${x}のダメージ！`;
         if(humans[tcams][targets].health <= 0){killed(cams,tcams,1,targets);return;};
         await delay(1000);
      }

      turncount += 1;
      const combined = [...Object.values(humans.players), ...Object.values(humans.enemies)].filter(c => c.status === 1 && c.health > 0)// オブジェクトをリストに変換して合体
      .sort((a, b) => {// 降順でソート
         if(b.speed === a.speed){
            if(a.cam === b.cam){
               return a.num - b.num;  // 同じcamならnumの小さい方が優先
            }
            return a.cam === 'players' ? -1 : 1;  // camが'p'なら優先
         }
         return b.speed - a.speed;  // 速度の高い順に並べる
      });
      bar = {
         cam: combined.map(c => c.cam),
         num: combined.map(c => c.num)
      };
      console.log(bar)
      acted = 0;
      console.log(`〜〜〜〜〜〜${turncount}ターン目〜〜〜〜〜〜`); //あとはskill系とmagicもて加えてって
                                                               //今skill系着工中 todolistをみんな見れる形にするみたいにしたいね
   } 

   nowturn = bar.num[acted];
   cam = bar.cam[acted]

   console.log('現在、'+cam+'の'+nowturn+'さんのターンですわ〜');

   if(buffhas(cam,nowturn,'onslime')){
      if(Math.floor(Math.random() * Debuffs.onslime.lv[humans[cam][nowturn].buffs.onslime.lv]) !== 0){
         buffremove(cam,nowturn,'onslime');
         log.textContent = 'なんとかスライムを取り払った!!';
      }else{
         log.textContent = 'スライムが邪魔して動けない!!';//今思ったけどこれやばいのでは...?
         await delay(1000);NextTurnis(0);return;}; 
   }
   if(buffhas(cam,nowturn,'skip')){
      log.textContent = 'はい'+humans[cam][me].name+'、お前スキップ〜〜';
      await delay(1000); NextTurnis(cam,0,me,0); return;
   }
   if(buffhas(cam,nowturn,'stan')){
      log.textContent = humans[cam][me].name+'はスタンした！';
      await delay(1000); NextTurnis(cam,0,me,0); return;　
   }
   if(buffhas(cam,nowturn,'freeze')){
      if(!Math.floor(Math.random() * Debuffs.freeze.lv[humans[cam][nowturn].buffs.freeze.lv]) !== 0){
         log.textContent = '氷が溶けた!'; buffremove(cam,nowturn,'freeze');
      }else{
         log.textContent = humans[cam][nowturn].name + 'は凍っている...';
         await delay(1000); NextTurnis(cam,0,me,0); return;
      }   
   }

   switch(cam){
      case 'players':
         playerturn('players',nowturn);
         break;
      case 'enemies':
         enemyturn('enemies',nowturn);
         break;
   }
}
//#endregion
//#region enemyturn
async function enemyturn(cam,me){
   console.log('attack:'+humans.enemies[me].attack+'power:'+humans.enemies[me].power);
   x = Object.values(humans.enemies).filter(x => x.status == 1&& x.health > 0).map(x => x.num);
   for(i = 0; i < x.length; i++){
      let n = x[i]
      for(const key in humans.enemies[n].buffs){
         humans.enemies[n].buffs[key].time -= 1; //-1する
         if (humans.enemies[n].buffs[key].time <= 0) {
            delete humans.enemies[n].buffs[key]; //0以下なら消し去る
         }
      }
   }
   tekiou();
   
   let name = humans.enemies[me].name
   log.textContent = name+'のターン！';await delay(1000);
   let selected = ['players',1]
   if(Enemies[humans.enemies[me].name]){
      Enemies[humans.enemies[me].name].acts[Math.floor(Math.random() * Enemies[humans.enemies[me].name].acts.length)](cam,me);
   }else{
      log.textContent = `${name}は何かで攻撃した！`;await delay(1000);
      selected = ShallTargetSelect(me,'phpl',0);
      await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
   }
   NextTurnis(cam,selected[1],me,selected[0]);
}
function ShallTargetSelect(me,code,both){//これは敵しか使わないターゲットセレクト。だから陣営とかは考えんでいいよ
   //標的陣営、起動者、コード(e = enemies, p = players | m = most highest, l = most lowest,| atk = 攻撃力, def = 防御力, hp = 体力 || r = random)、両隣にも被害を与えるか0,1
   //,b => b.health//playerのhealth達を、statusが1のやつだけ、小さい順(昇順)に並べてる。
   const playerstatus = {
      num:Object.values(humans.players).filter(c => c.status == 1 && c.health > 0).sort((p1, p2) => p1.num - p2.num).map(a => a.num),
   health:Object.values(humans.players).filter(c => c.status == 1 && c.health > 0).sort((p1, p2) => p1.health - p2.health).map(a => a.num),
      atk:Object.values(humans.players).filter(c => c.status == 1 && c.health > 0).sort((p1, p2) => p1.attack - p2.attack).map(a => a.num),
      def:Object.values(humans.players).filter(c => c.status == 1 && c.health > 0).sort((p1, p2) => p1.defense - p2.defense).map(a => a.num),
   }
   const enemystatus = {
      num:Object.values(humans.enemies).filter(c => c.status == 1 && c.health > 0).sort((e1, e2) => e1.num - e2.num).map(a => a.num),
   health:Object.values(humans.enemies).filter(c => c.status == 1 && c.health > 0).sort((e1, e2) => e1.health - e2.health).map(a => a.num),
      atk:Object.values(humans.enemies).filter(c => c.status == 1 && c.health > 0).sort((e1, e2) => e1.attack - e2.attack).map(a => a.num),
      def:Object.values(humans.enemies).filter(c => c.status == 1 && c.health > 0).sort((e1, e2) => e1.defense - e2.defense).map(a => a.num),
   }
   let ret = [];
   switch(code){
      //players
      case 'pr'://random
         x = playerstatus.health[Math.floor(Math.random() * playerstatus.length)]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'phpl':
         x = playerstatus.health[0];
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'phph':
         x = playerstatus.health[playerstatus.length - 1];
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'patkl':
         x = playerstatus.atk[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'patkh':
         x = playerstatus.atk[playerstatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pdefl':
         x = playerstatus.def[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pdefh':
         x = playerstatus.def[playerstatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'pc'://center
         if(playerstatus.num.includes(me)){
            x = me;
         }else if(playerstatus.num.includes(me-1)){
            x = me-1;
         }else if(playerstatus.num.includes(me+1)){
            x = me+1;
         }else{
            x = 1;
         }
         x = [me,me-1,me-2,me+1,me+2].find(n => playerstatus.num.includes(n))||1;
         if(both == 0){
            ret.push(x);
         }else{
            let b = [];
            if(playerstatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(playerstatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b);
         }
         break;
      case 'pz'://zentai
         x = playerstatus.num;
         ret.push(x);
         break;

      //enemies
      case 'er':
         x = enemystatus.health[Math.floor(Math.random() * enemystatus.length)]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ehpl':
         x = enemystatus.health[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ehph':
         x = enemystatus.health[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'eatkl':
         x = enemystatus.atk[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'eatkh':
         x = enemystatus.atk[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'edefl':
         x = enemystatus.def[0]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'edefh':
         x = enemystatus.def[enemystatus.length - 1]
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
      case 'ec'://center..まあ自分よな
         x = me;
         if(both == 0){
            ret.push(x);
         }else{
            let b = []
            if(enemystatus.num.includes(x-1)){b.push(x-1)};
            b.push(x);
            if(enemystatus.num.includes(x+1)){b.push(x+1)};
            ret.push(b)
         }
         break;
   }
   if(code.startsWith('p')){ret.push('players')}
   if(code.startsWith('e')){ret.push('enemies')}
   console.log(ret)
   return ret;
}
//#endregion

//#region 勝利/負けの動き
async function killed(cam,tcam,me,target){//殺った側cam,meと殺された側tcam,target
   //log.textContent = humans.enemies[target].name + 'を倒した!';

   humans[tcam][target].health = 0;
   buffclear(tcam,target);
   humans[tcam][target].status = 2;
   tekiou();

   let karix = bar.cam.map((Cam, Num) => Cam === 'p' && bar.num[Num] === 2 ? Num : -1).filter(Num => Num !== -1);
   bar.cam.splice(karix,1);bar.num.splice(karix,1);


   /*
   //クエストの動
   if(quest.main.type == 'k.' || quest.main.type == '1.k.'&&stage == 1 || quest.main.type == '2.k.'&&stage == 2){//Quests={main:{},daily:[{},{}]};..みたいにしといて
      quest.main.num += 1;
      if(quest.main.num >= quest.main.nom){
         quest.main.num = quest.main.nom;
         quest.main.type = '';
      }
   }
   for(i = 0;i < quest.daily.length;i++){
      if(quest.daily[i].type == 'k.' || quest.daily[i].type == '1.k.'&&stage == 1 || quest.daily[i].type == '2.k.'&&stage == 2){
         quest.daily[i].num += 1;
         if(quest.daily[i].num >= quest.daily[i].nom && quest.daily[i].nom){
            quest.daily[i].num = quest.daily[i].nom;
            quest.daily[i].type = '';
         }
      }
   }
   */

   karix = false;
   karix = [1, 2, 3, 4].every(id => {
      let Enemy = humans.enemies[id];
      return Enemy.status == 0 || Enemy.status == 2;
   });
   if(karix){
      //敵全滅
      karix = (Math.floor(Math.random() *11)+5)*numberofenemy;
      euro += karix;
      karix = Object.keys(humans.enemies).filter(a => humans.enemies[a].status >= 1).reduce((sum, id) => {
         let Enemy = humans.enemies[id];
         return sum + (Enemy.level||0);
      }, 0);
      rpt += karix;
      updateUI();
      log.textContent = '敵を倒した！！';await delay(1000)
      log.textContent = karix+'の経験値を奪った!';
      Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(nanka => {// || humans.players[a].status == 2
         console.log(nanka)
         humans.players[nanka].exp += karix;
         while(humans.players[nanka].exp >= humans.players[nanka].level){
            humans.players[nanka].exp -= humans.players[nanka].level;
            humans.players[nanka].level += 1;
            humans.players[nanka].sp += 1;
         }
         tekiou();
      });
      await delay(1000);

      z = Math.floor(Math.random() * 7)-2;// -2~4
      enemylv += z;if(enemylv < 1){enemylv = 1;}
      if(!z <= 0){
         for(i = 0; i < z; i++){
         y = Math.floor(Math.random() * 3) + 1;
         switch(y){
            case 1: enemyhp  += 20;break;
            case 2: enemyatk += 5; break;
            case 3: enemydef += 5; break;
         }}
      }else if(z < 0){
         for(i = 0; i < -z; i++){
         y = Math.floor(Math.random() * 3) + 1;
         switch(y){
            case 1: enemyhp  -= 20;break;
            case 2: enemyatk -= 5; break;
            case 3: enemydef -= 5; break;
         }}
      }
      log.textContent = '';
      document.getElementById('BattleArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'block';
      

      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);
      objectMap[MAPy][MAPx] = 0;//戦利品的な何かにしてもいいかも..いやなし
      ctx.clearRect(0, 0, 600, 600); 
      DrawBackground();
      ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
      AllowMove = 0;
   }
   //turretBreak(cam);

   /*
   Object.keys(humans.enemies.map(a => a.status == 1/*|| a.status == 2).forEach(nanka => {
      z = Math.floor(Math.random() * 5)-2;// -2~2
      nanka.level += z;
      if(nanka.level < 1){nanka.level = 1;}
      if(!z <= 0){
         for(i = 0; i < z; i++){
         y = Math.floor(Math.random() * 3) + 1;
         switch(y){
            case 1: enemyhp  += 20;break;
            case 2: enemyatk += 5; break;
            case 3: enemydef += 5; break;
         }}
      }else if(z < 0){
         for(i = 0; i < -z; i++){
         y = Math.floor(Math.random() * 3) + 1;
         switch(y){
            case 1: enemyhp  -= 20;break;
            case 2: enemyatk -= 5; break;
            case 3: enemydef -= 5; break;
         }}
      }
      document.getElementById('EnemyLevel').textContent = enemylevel;
   }));
   */
   
   
}   
async function EnemyAppear(){
   AllowMove = 1;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'block';
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   

   enemy50pursuitenelgy = 1;
   x = numberofplayer+1;
   for(i = 1; i < x; i++){
      let num = i-1;
      document.getElementById(`players${i}`).style.display = 'block';
      humans.players[i].status = 1;
      tekiou();
   }
   x = [1,1,1,1,2,2,3]
   numberofenemy = x[Math.floor(Math.random() * x.length)];
   let nanika = numberofenemy+1;
   for(i = 1; i < nanika; i++){
      let num = i-1;
      document.getElementById(`enemies${i}`).style.display = 'block';
      humans.enemies[i].status = 1;
      humans.enemies[i].level = enemylv + Math.floor(Math.random() * 7)-3;if(humans.enemies[i].level < 1){humans.enemies[i].level = 1;}
      humans.enemies[i].name = DesideEnemyName(i);
      tekiou();
   }
   tekiou();
   log.textContent = humans.enemies[1].name + 'が現れた!';

   turncount = 1;document.getElementById('TurnCount').textContent = turncount;
   // bar-create
   bar = {
      cam:[],
      num:[]
   }
   NextTurnis(0);
}

async function defeat(){
   let saydefeats = [playername + 'は力尽きた...残念でしたね！にはははは〜！','残念だったね!すごい惜しかったね!!','あ、あれ..？もう負けちゃったんですか....？','ほら、負けを認めてください？'];
   if(humans.players[1].level < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると良いですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];}
   log.textContent = inSelect(saydefeats);
   await delay(2000);
   Object.keys(humans.players).filter(a => humans.players[a].status == 1||humans.players[a].status == 2).forEach(nanka => {
      humans.players[nanka].status = 1;
      humans.players[nanka].health = Math.floor(humans.players[nanka].maxhealth*0.5);
   })
   tekiou();
   bossbattlenow = 0;
   floor = 0;
   GoNextFloor();
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
   log.textContent = '';
}
//#endregion

//#region　bossの動き
function BossEnemyAppear(){
   AllowMove = 1;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'block';
   bossbattlenow = 1;
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button" onclick="skillact()"></button>'
   turncount = 0;
   document.getElementById('TurnCount').textContent = turncount;
   playermp = playermaxmp;
   playerpower = 1;playershell = 1;
   if(playerps == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
   humans.enemies[me].health = humans.enemies[me].health; document.getElementById('EnemyMaxHealth').textContent = humans.enemies[me].health; tekiou();
   if (enemylevel < 1){enemylevel = 1}
   humans.enemies[me].name = bossenemies[me].names[stage-1]; //敵の名前を決めます
   switch(humans.enemies[me].name){//ボスごとのステータスを決めます
      case 'purpleslime':
         humans.enemies[me].health = 300;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 30;
         humans.enemies[me].defense = 10;
         humans.enemies[me].mdefense = 0;
         humans.enemies[me].critlate = 0.01;
         humans.enemies[me].critdmg = 2;
         humans.enemies[me].critresist = 0.5;
      break;
      case 'steampumker':
         humans.enemies[me].health = 250;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 25;
         humans.enemies[me].defense = 10;
         humans.enemies[me].mdefense = 20;
         humans.enemies[me].critlate = 0.05;
         humans.enemies[me].critdmg = 2;
         humans.enemies[me].critresist = 0;
      break;
      case 'RailwayGun "Shemata"':
         humans.enemies[me].health = 400;
         humans.enemies[me].health = humans.enemies[me].health;
         humans.enemies[me].attack = 35;
         humans.enemies[me].defense = 20;
         humans.enemies[me].mdefense = 0;
         humans.enemies[me].critlate = 0;
         humans.enemies[me].critdmg = 0;
         humans.enemies[me].critresist = 0;
      break;

   }
   document.getElementById("EnemyName").textContent = humans.enemies[me].name;
   log.textContent = humans.enemies[me].name + 'が現れた!';
   document.getElementById('EnemyLevel').textContent = enemylevel;
   tekiou();
   window.setTimeout(playerturn, 750);
   save();
}
async function bossenemyturn(){
   if(humans.enemies[me].name == 'purpleslime'){
      //1: 攻撃(シンプル)
      //2:攻撃(シンプル)
      //3:相手を毒に(2ターン)
      //if(max0.3>)[確定]防御力down1(討伐まで有効)
      if(humans.enemies[me].health <= humans.enemies[me].health * 0.3){buffadd(cam,me,'shelldown',1,1);}
      switch(Math.floor(Math.random()*4)+1){
         case 1:
         case 2:
            log.textContent = humans.enemies[me].name + 'の攻撃';
            humandamaged('players',me,targetselect,1,1);
            break;
         case 3:
            log.textContent = humans.enemies[me].name + 'は大きく息を吐いた！';
            buffadd(cam,me,'poison',2,1);
            break;
      }
   }else if(humans.enemies[me].name == 'steampumker'){
      //ターン数が奇数: 攻撃
      //ターン数が偶数: タレットの設置
      //タレットが3つ以上: 攻撃力の3倍のダメージで攻撃、タレットを破壊
      if(enemyturret >= 3){
         humandamaged('players',me,targetselect,enemyturret,1);
         document.getElementById('EnemyFriendBack').innerHTML = '';
         enemyturret = 0;
         EnemyTurrettekiou();
      }
      if((turncount % 2) == 0){
         document.getElementById('EnemyFriendBack').innerHTML = '<br><b><font color="#DF0101">Turret</font><span id="EnemyTurret"></span></b><br><br>';
         enemyturret += 1;
         EnemyTurrettekiou();
         log.textContent = humans.enemies[me].name+'はturretを設置した!';
      }else{
         await humandamaged('players',me,targetselect,1,1);
      }
      if(enemyturret > 0){await humandamaged('players',me,targetselect,enemyturret*0.5,1);}
   }else if(humans.enemies[me].name == 'RailwayGun "Shemata"'){
      //
      //
      //
      playerhealth = 0;
      log.textContent = 'しーんだしんだ、シリウスブラ〜ック!';
      defeat();//いや雑にもほどがあるやろ
   }else if(humans.enemies[me].name == 'joker'){
      //1:爆弾を投げる。普通(x1),雷(x2),炎(x3),閃光弾(x0.5,スタン1)
      //if(max0.25>):勝ち気(攻撃が0倍か4倍になる)を付与(毎ターン)
      x = 1;
      if(humans.enemies[me].health <= humans.enemies[me].health * 0.25){x = [0,4];x = x[Math.floor(Math.random()*2)]};
      y = Math.floor(Math.random() * 4);
      switch(y){
         case 1:log.textContent = '普通の爆弾だった!!';break;//これによる効果とかもあっていいかも
         case 2:log.textContent = '爆弾は雷光弾だった!!!';break;
         case 3:log.textContent = '爆弾は焼夷弾だった!';break;
         case 0:log.textContent = '爆弾は閃光弾だった!!';buffadd(cam,me,'stan',1,1);y = 0.5;break;
      }
      await delay(1000);
      await humandamaged('players',me,targetselect,x*y,0);
   }
   await enemycontidmg(me);
   if(humans.enemies[me].health < 0){humans.enemies[me].health = 0};
   if(humans.enemies[me].health == 0){window.setTimeout(killed, 1000)}
   else {
      await delay(1000);
      return 'alive';
   }
}
//こっから変数とか関数とか
let enemyturret = 0;
function EnemyTurrettekiou(){
   document.getElementById('EnemyTurret').textContent = 'x' + enemyturret;
}
//#endregion

//#region 休憩所の動き
let Camprestper
  async function Camprest(){
   playerhealth += playermaxhealth * Camprestper;
   playerhealth = Math.floor(playerhealth);
   if(playerhealth > playermaxhealth){playerhealth = playermaxhealth;};
   log.textContent = '寝ることにした....';//睡眠阻害イベント...はさすがにやめようか..wちょっと隠しイベント多すぎる
   await delay(2000);
   log.textContent = '起きた！！！！！！！';
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 4;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
  }
  async function Camptrade(){
      save();
   if(y == 1){
         log.textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 1;
         log.textContent = 'ここにはこんなものがあるけど、どうする？';
         document.getElementById('EventArea').innerHTML = '<iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 2){
         log.textContent = '防具屋に話しかけた！';
         await delay(1000);
         nowshop = 2;
         log.textContent = 'うちの店ではこんなものが売ってるよ';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 3){
         log.textContent = '道具屋に話しかけた！';
         await delay(1000);
         nowshop = 3;
         log.textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 10){
         log.textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 10;
         log.textContent = 'ほう..よく来たな。好きに見ていってくれ';
         document.getElementById('EventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/rareweapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
}
     
  }
  
//shop
let nowshop = 0;
function ShopBuyButton(){
   const num = +document.getElementById('ShopInputText').value;
   switch(nowshop){
      case 1:
      if(haveweapons.includes(weapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= weapons.price[num]){
            euro -= weapons.price[num];
            haveweapons.push(weapons.name[num]);
            log.textContent = weapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 10:
      if(haveweapons.includes(rareweapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= rareweapons.price[num]){
            euro -= rareweapons.price[num];
            haveweapons.push(rareweapons.name[num]);
            log.textContent = rareweapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 2:
      if(havearmors.includes(armors.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(euro >= armors.price[num]){
            euro -= armors.price[num];
            havearmors.push(armors.name[num]);
            log.textContent = armors.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough euro..';
         };
      }
      break;
      case 3:
      if(euro >= tools.price[num]){
         euro -= tools.price[num];
         eval(tools.id[num]).num++;
         log.textContent = tools.name[num]+'を購入しました!';
      }else{
         log.textContent = 'not enough euro..';
      };
      break;
   }



   save();
   document.getElementById('ShopInputText').value = '';
}
function CampBye(){
   log.textContent = 'ついでに装備を変えていこうかな？';
   document.getElementById('EventArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">やめとこう！</button>';
}
function Campback(){
   document.getElementById('EventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
   document.getElementById('CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
   switch(y){
      case 1: document.getElementById('CampTrade').textContent = '武器商人に話しかける';     break;
      case 2: document.getElementById('CampTrade').textContent = '防具取扱専門家に話しかける'; break;
      case 3: document.getElementById('CampTrade').textContent = '道具屋24に話しかける';     break;
      case 10:document.getElementById('CampTrade').textContent = '放浪武器商人に話しかける';   break;
   }
}
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
   document.getElementById('EventArea').innerHTML = '<button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button>  <button class="button"onclick="GoToEquipArmor()">Equip Armor</button>  <button class="button"onclick="GoToEquipTool()">Equip Tool</button><br><br><button class="button"onclick="Campback()">Leave</button>'
}
function GoToEquipWeapon(){
   nowshop = 4;
   document.getElementById('EventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appearweapons = '';
   x = 0;
   for(let i = 0; i < haveweapons.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = haveweapons[i]+ ` <button class="button" onclick="ShopEquipButton('weapon',${i})">Equip</button>` + '<br>';
      document.getElementById('AppearShops').appendChild(ChildNText);
   }
}
function GoToEquipArmor(){
   nowshop = 5;
   document.getElementById('EventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appeararmors = '';
   x = 0;
   for(let i = 0; i < havearmors.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = havearmors[i]+ ` <button class="button" onclick="ShopEquipButton('armor',${i})">Equip</button>` + '<br>';
      document.getElementById('AppearShops').appendChild(ChildNText);
   }
}
function ShopEquipButton(){
   const Num = +document.getElementById('ShopInputText').value;
   switch(nowshop){
      case 4:
         if(haveweapons.includes(weapons.name[Num])){
            log.textContent = 'あなたは'+weapons.name[Num]+'を装備しました！';
            equipweapon = Num;
            weaponpower = weapons.power[Num];
         }else{log.textContent = 'you dont have it!'};
      break;
      case 5:
         if(havearmors.includes(armors.name[Num])){
            log.textContent = 'あなたは'+armors.name[Num]+'を装備しました！';
            equiparmor = Num;
            armorshell = armors.shell[Num];
         }else{log.textContent = 'you dont have it!'};
      break;
   }
   document.getElementById('ShopInputText').value = '';
}
function GoToEquipTool(){
   nowshop = 6;
   
   document.getElementById('EventArea').innerHTML = '<iframe src="resources/appeartools.html" width="100%" height="100%" frameborder="0"></iframe><br><div id="Camptoolequip"><button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button></div><br><br><button class="button" onclick="GoToEquip()">Back</button>'; //持ってないやつも登録できるようにしたら処理楽かな？
   document.getElementById('Campequipedtool1').textContent = humans.players[1].tool1.name;
   document.getElementById('Campequipedtool2').textContent = equiptool2.name;
   document.getElementById('Campequipedtool3').textContent = equiptool3.name;
   log.textContent = 'どうしようかな...?';
   }
function Campequiptool(code){
   x = code;
   log.textContent = '何を持とう？';
   x = [];
   document.getElementById('Camptoolequip').innerHTML = `
   <i>Item一覧</i><br>
   <div id="toolsdesuwa"></div>
   `;
   Object.keys(Tools).filter(a => Tools[a].num > 0).forEach(nanka => {
      let c = document.createElement('button');
      c.textContent = Tools[nanka].name+' x'+Tools[nanka].num;
      c.classList.add('button');
      c.addEventListener('click', () => {
         document.getElementById('toolsdesuwa').remove();
         humans.players[1].tool1[code] = Tools[nanka].id;
         document.getElementById('Camptoolequip').innerHTML = '<button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button>';
         document.getElementById('Campequipedtool1').textContent = humans.players[1].tool1.name;
         document.getElementById('Campequipedtool2').textContent = humans.players[1].tool2.name;
         document.getElementById('Campequipedtool3').textContent = humans.players[1].tool3.name;
         log.textContent = Tools[nanka].name+'を持つことにした！';
      })
      x.push(c);
   })
   document.getElementById('toolsdesuwa').innerHTML = x.join('');
}
// #endregion
//#region skillshop
   const Allskill = [
      ...Object.values(Skills.ex),
      ...Object.values(Skills.ns),
      ...Object.values(Skills.ps)
   ];
 
  function skillshopshuffle(array){
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
  }

  function skillshopcreateCard(item){
   const card = document.createElement('div');
   card.classList.add('card');
   
   //const cardTextbox = document.createElement('div');
   //cardTextbox.classList.add('card__textbox');
   
   const titleText = document.createElement('span');
   titleText.classList.add('card-titletext');
   titleText.innerHTML = `${item.type}   ${item.name}<br>価格: ${item.price}€<br>${item.description}<br>`;
   
   const buyButton = document.createElement('button');
   buyButton.classList.add('button');
   buyButton.setAttribute('onclick', `BuyItem('${item.type}','${item.id}','${item.name}','${item.price}')`);
   buyButton.textContent = 'Buy';
   
   card.appendChild(titleText);
   card.appendChild(buyButton);
   //card.appendChild(cardTextbox);
   
   return card;
  }

  function SkillShopOpen() {
   AllowMove = 0;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('EventArea').style.display = 'block';
   document.getElementById('EventArea').innerHTML = `
   <div id="skillshopcorner"></div><br>
   <button class="button" onclick="SkillShopClose()">Exit</button>
   `
   const cardsContainer = document.getElementById('skillshopcorner');
   cardsContainer.style.display = 'block';
   cardsContainer.innerHTML = ''; // 前の内容をクリアする
   const selectedItems = skillshopshuffle(Allskill).slice(0, 6);
   selectedItems.forEach(item => {
     const card = skillshopcreateCard(item);
     cardsContainer.appendChild(card);
   });
  }

  function SkillShopClose() {
   document.getElementById('skillshopcorner').innerHTML = ''; // 前の内容をクリアする
   log.textContent = '';
   document.getElementById('NowMap').style.display = 'block';
   
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
  }

  function BuyItem(type,id,name,price) {
   if(euro >= price){
     euro -= price;
     humans.players[1][type][id] = id;
     log.textContent = name + 'を購入しました！';
   }else{
     log.textContent = 'not enough euro...';
   }
   updateUI();
  }

// #endregion

//こっからイベントとかそのへん
//#region candystand
let candybar = [];
async function Candytake(){
   //log.textContent = 'あめを食べた..';
   //await delay(1000);
   let candynum = Math.floor(Math.random() * 20) + 1;
   if (!candybar.includes(candynum)){
   candybar.push(candynum);
   switch(Math.floor(Math.random()*3)+1){
      case 1:
         humans.players[1].attack += Math.floor(Math.random() * 3) + 2;
         log.textContent = '攻撃力が上がった！';
         break;
      case 2:
         humans.players[1].defense += Math.floor(Math.random() * 3) + 1;if(humans.players[1].defense < 0){humans.players[1].defense = 0};
         log.textContent = '防御力が上がった！';
         break;
      case 3:
         humans.players[1].maxhealth += Math.floor(Math.random() * 5) + 5;
         log.textContent = '体力が増えた！';
         break;
   };
   }else{
      switch(Math.floor(Math.random()*3)+1){
         case 1:
            humans.players[1].attack -= Math.floor(Math.random() * 13) + 5;if(humans.players[1].attack < 1){humans.players[1].attack = 1};
            log.textContent = '攻撃力が下がった！';
            break;
         case 2:
            humans.players[1].defense -= Math.floor(Math.random() * 10) + 3;if(humans.players[1].defense < 0){humans.players[1].defense = 0};
            log.textContent = '防御力が下がった！';
            break;
         case 3:
            humans.players[1].maxhealth -= Math.floor(Math.random() * 21) + 10;if(humans.players[1].maxhealth < 1){humans.players[1].maxhealth = 1};
            if(humans.players[1].health > humans.players[1].maxhealth){humans.players[1].health = humans.players[1].maxhealth};
            log.textContent = '体力が減った！';
            break;
      };
   }
}
// #endregion
//#region hopeful-button  廃止予定
async function HopeButtonact(){
   AllowMove = 1;
   log.textContent = 'ボタンを押した....';
   await delay(1000);
   if(Math.floor(Math.random() * 2) == 0){
      log.textContent = 'な、中から四葉のクローバーが...!!';
      buffclear(cam,me);
      buffadd('players',1,'luck',2,1);
   } else {
      log.textContent = 'ボタンが溶けて手がやられた！';
      buffadd(cam,me,'shelldown',3,1);
      buffadd(cam,me,'powerdown',3,2);
   }
   await delay(1000);
   log.textContent = '';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region chest
const inchestTool = ['aspirin','pablon','trypsin','throwknife','trickyvariable','bottlegrenade','redcard','bluecard','greencard'];
const inchestRareTool = ['lulu','potion','cdveringfire','bomb','blackcard'];
async function OpenChest(code){
   AllowMove = 1;
   switch(code){
   case 1:
      log.textContent = 'チェストを開けた...';
      await delay(1000);
      for(let i = 0; i < 3; i++){
         x = inSelect(inchestTool);
         Tools[x].num += 1;
         log.textContent = Tools[x].name+'を手に入れた！';
         await delay(750);
      }
   break;
   case 2:
      log.textContent = 'チェストを開けた...';
      await delay(1000);
      for(let i = 0; i < 3; i++){
         x = inSelect(inchestRareTool);
         Tools[x].num += 1;
         log.textContent = Tools[x].name+'を手に入れた！';
         await delay(750);
      }
   break;
   }
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region Cookietake
async function Cookietake(){
   AllowMove = 1;
   log.textContent = 'クッキーを食べてみた...';//これはお助け的イベントだから上昇量は少なめ
   await delay(1000);
   switch(Math.floor(Math.random()*3)+1){
      case 1:
         humans.players[1].attack += 5 ;
         x = '熱い！焼きたてだぜ！！';
         break;
      case 2:
         humans.players[1].defense += 5;
         x = '硬い！凍ってたかもしんねぇ！！';
         break;
      case 3:
         humans.players[1].maxhealth += 20;
         humans.players[1].health = humans.players[1].maxhealth;
         x = 'うまい！！';//体力増える..の味が思いつかなすぎた これはしゃーない 煉獄さん
         break;
      case 4:
         humans.players[1].maxmp += 10;
         x = '甘い！砂糖マシマシだー！！';
         break;
      case 5:
         humans.players[1].critdmg += 0.1;//当たり枠(会心ダメージ増加はぶっ壊れてる..たぶん)
         x = 'はっ..!?これは....ジャム入りだ.....!!!!';//ちなみにコッペくんはジャムが上に乗ったタルト生地のクッキーが好物です マカロンと張るくらい好き
         break;
   }
   log.textContent = x;
   await delay(1000);
   document.getElementById('EventArea').innerHTML = '';
   log.textContent = '';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('NowMap').style.display = 'block';
   

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion
//#region placebomb
async function placebomb(){
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 15;
   bombtimer = 5;
   PlacedBombx = MAPx;
   PlacedBomby = MAPy;
   log.textContent = '爆弾を設置しました！';
}//出口を消した時どうする論争
//#endregion
//#region catus
async function CatusAct(){
   if(humans.players[1].health > 10){
      log.textContent = 'いてっ';
      humans.players[1].health -= 10;humans.players[1].attack += 5;if(stage == 3){humans.players[1].health -= 10;humans.players[1].attack += 5;}
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);
      objectMap[MAPy][MAPx] = 0;
   }else{
      log.textContent = 'なんか..今触ったら死にそう....'
   }
   await delay(500);
   log.textContent = '';
}
//#endregion
//#region scorpion 廃止予定
async function ScorpionAct(code){
   log.textContent = '刺された...';
   switch(code){
      case 1:buffadd('playerbuff','poison',3,1);break;
      case 2:buffadd('playerbuff','poison',3,2);break;
   }
   playerattack += 10*code;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   await delay(500);
   log.textContent = '';
}
//#endregion

//#region wrwrdイベント(fun値50以下の際1/23の確率で出現)
function ZomuEvent(){//創生黎明の原野
   log.textContent = 'かまってぇや、マジで';
   playername = 'zomusan'
   humans.players[me].ex = 'bombe';//clownみたいな感じで爆弾投げ。普通、水、マグマ、閃光弾。ex使用後は攻撃力が1.5倍になる(1ターン)
   playerns = 'hitelec';//4の倍数のターンの時、強制的にエレキギターで殴る。攻撃力の3倍のダメージを与える。
   playerps = 'solx5but'//slashoflightを使った際、当たれば5倍だが、外れれば自分にダメージを与える。
   buttonsolid = '#000000';buttonback = '#50C878';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
function UtusenEvent(){
   log.textContent = 'はいどうも〜、僕です';
   playername = 'utusen'
   humans.players[me].ex = '50%appease';//相手の体力が半分以下なら仲間にする｡でなければ､攻撃力の1.5倍のダメージ
   playerns = 'ehp50%but';//3の倍数のターンの時、相手か自分の体力を半分にする。運ゲー
   playerps = 'reverseta';//逆TA(相手より体力がめちゃ低いとダメージを喰らわない)
   buttonsolid = '#4c6cb3';buttonback = '#949495';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objectMap[MAPy][MAPx] = 0;
   ctx.clearRect(0, 0, 600, 600); 
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   AllowMove = 0;
}
// #endregion      

