//内部へようこそ！！！
//#region 探索部分
document.getElementById('BattleArea').style.display = 'block';
document.getElementById('NowMap').style.display = 'none';
const canvas = document.getElementById("NowMap");
const ctx = canvas.getContext("2d");
const backMaps = [
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
let backMap = [
   ['a','b','c','d','e','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
   ['a','a','a','a','a','a','a','a'],
];
const backMapnum = ['0.3','7.3','14.3'];//開始位置.そっから終了位置までの差

const objMaps = [
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
   ],//こちらは祝福
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

];
const objsAll = [
   [
      {id:2,type:'e',name:'蒼白の粘液',p:35,strong:0},
      {id:2,type:'e',name:'翠嵐の風刃',p:35,strong:0},
      {id:2,type:'e',name:'燐光の妖花',p:35,strong:0},
      {id:2,type:'e',name:'蒼白の粘液',p:15,strong:1},
      {id:2,type:'e',name:'燐光の妖花',p:12,strong:1},
      
      {id:3,type:'o',name:'焚き火',p:25,rare:0,},//このrareは生成時に決めちゃってもいいかも
      {id:5,type:'0',name:'スキルショップ',p:25},
      
   ]
]
let objMap = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0]
];
const objMapnum = ['0.5','9.4','17.4'];
let stage = 1;
let floor = 0;

//#region 画像とかをロードする機構
let imagesLoaded = 0;
let images = {};
let imageNames = {
   'maps':['a','b','c','d','e','f','g',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
   'effects':['explosion_1','explosion_2','explosion_3'],
   'enemies':['翠嵐の風刃','蒼白の粘液'],
   'charas':['greenslime','mechanic','clown','magodituono','wretch']
}
let totalImages = Object.keys(imageNames).map(a => imageNames[a].length).reduce((a, b) => a + b);

Object.keys(imageNames).forEach(belong => {
   imageNames[belong].forEach(num => {
      let img = new Image();
      img.src = `assets/${belong}/${num}.png`;
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
});
//#endregion

function DrawBackground(){
   //background、そのまま背景
   for(let yy = 0; yy < 8; yy++){
     for(let xx = 0; xx < 8; xx++){
      let img = images[backMap[yy][xx]];
      if(img){
        ctx.drawImage(img, xx * 75, yy * 75, 75, 75);
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
        ctx.drawImage(img, x * 75, y * 75, 75, 75);
      }else{
        console.error(`Image for object value ${objMap[y][x]} not found.`);
      }
     }
   }
}

// 選択画像のロードと初期表示
let IMGselect = 0;
IMGselect = new Image();
IMGselect.src = 'assets/maps/select.png';

let AllowMove = 0;

let SELECTx = 0; // x座標
let SELECTy = 0; // y座標
let MAPx,MAPy;

let speed = 10;
const keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

let updatestop = 0;
function update() {
   if(AllowMove == 0){
      let moved = false;
      let newX = SELECTx, newY = SELECTy;

      if (keys["w"] || keys["ArrowUp"]) {
         newY -= speed;
         if(newY < 0){newY = 0};
         moved = true;
      }
      if (keys["a"] || keys["ArrowLeft"]) {
         newX -= speed;
         if(newX < 0){newX = 0};
         moved = true;
      }
      if (keys["s"] || keys["ArrowDown"]) {
         newY += speed;
         if(newY > 575){newY = 575};
         moved = true;
      }
      if (keys["d"] || keys["ArrowRight"]) {
         newX += speed;
         if(newX > 575){newX = 575};
         moved = true;
      }

      if (moved) {
         let newMAPx = Math.floor(newX / 100);
         let newMAPy = Math.floor(newY / 100);

         if (newMAPx >= 0 && newMAPx <= 8 && newMAPy >= 0 && newMAPy <= 8) {
            if (objMap[newMAPy][newMAPx] !== undefined && objMap[newMAPy][newMAPx] !== 18) {
               SELECTx = newX;
               SELECTy = newY;
               MAPx = newMAPx;
               MAPy = newMAPy;

               //触れた時の挙動あればここに
            }
         }
      }
   }

   draw();
   if(updatestop == 0){requestAnimationFrame(update);}
}

function draw() {
   ctx.clearRect(0, 0, 600,600);
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 25, 25);
}

// スマホ版対応は移動UIでも作りましょ
// canvas.addEventListener('click', (event) => {
//    if(AllowMove == 0 && dungeonnow == 1){
//       const rect = canvas.getBoundingClientRect();
//       MAPx = Math.floor(event.offsetX / 75);
//       MAPy = Math.floor(event.offsetY / 75);
      
//       SELECTx = MAPx*75;
//       SELECTy = MAPy*75;

//       // マップの値をチェック
//       if (MAPy >= 0 && MAPy < objMap.length && MAPx >= 0 && MAPx < objMap[MAPy].length) {NanigaOkoruKana(objMap[MAPy][MAPx]);}
//       draw()
//    }
// });

//z,xの動き

document.addEventListener('keydown', (event) => {
   if(AllowMove == 0 && dungeonnow == 1 && textShowing == 0){
      if(event.key == 'Enter'||event.key == 'z'){
      if(SELECTx<0){SELECTx=0};if(SELECTy<0){SELECTy=0};if(SELECTx>525){SELECTx=525};if(SELECTy>525){SELECTy=525};
      MAPx = Math.floor(SELECTx / 75);
      MAPy = Math.floor(SELECTy / 75);

      // マップの値をチェック
      if(MAPy >= 0 && MAPy < objMap.length && MAPx >= 0 && MAPx < objMap[MAPy].length){NanigaOkoruKana(objMap[MAPy][MAPx]);}
      draw()
      }
   }
   if(event.key == 'e'&&document.getElementById('NowMap').style.display == 'block'){
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

let NanigaOkirukana = {
   1:{
      name:'階段',
      process:async function(){
         GoNextFloor();
      },
   },
   2:{
      name:'敵',
      process:async function(){
         EnemyAppear();
      },
   },
   3:{
      name:'焚き火',
      process:async function(){
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
      }
   },
   4:{
      name:'焚き火跡',
      process:async function(){
         await addtext(arrayGacha( //この重複感好き
            ['この焚き火はもう木炭になっている','まだ温かい..この辺りに誰かいるようだ'],
            [85,15]
         ));
      }
   },
   5:{
      name:'スキルショップ',
      process:async function(){
         SkillShopOpen();
      }
   },
   6:{
      name:'宝箱',
      process:async function(){
         if(!objMap.some(row => row.includes(2))){OpenChest(1);}
      }
   },
   7:{
      name:'レア宝箱',
      process:async function(){
         if(!objMap.some(row => row.includes(2))){OpenChest(2);}
      }
   },
   8:{
      name:'救いのボタン',
      process:async function(){
         HopeButtonact();
      },
   },
   9:{
      name:'none',
      process:async function(){
         addtext('まだ用意できていないのです...')
      }
   },
   10:{
      name:'あめ置き場',
      process:async function(){
         Candytake();
      }
   },
   11:{
      name:'クッキー置き場',
      process:async function(){
         Cookietake();
      }
   },
   12:{
      name:'zom_mzyb',
      process:async function(){
         ZomuEvent();
      }
   },
   13:{
      name:'boss',
      process:async function(){
         BossEnemyAppear();
      }
   },
   14:{
      name:'door',
      process:async function(){
         if(!objMap.some(row => row.includes(13))){NextStage();}
      }
   },
   16:{
      name:'chest',
      process:async function(){
         if(!objMap.some(row => row.includes(2))){OpenChest(1);}
      }
   },
   17:{
      name:'rarechest',
      process:async function(){
         if(!objMap.some(row => row.includes(2))){OpenChest(2);}
      }
   },
   19:{
      name:'サソリさん',
      process:async function(){
         ScorpionAct(1);
      }
   },
   20:{
      name:'サボテン', //ついに動いたサボテン
      process:async function(){
         CatusAct();
      }
   },
   21:{
      name:'オアシス',
      process:async function(){
         OasisAct();
      }
   },
   22:{
      name:'砂嵐',
      process:async function(){
         console.log('これはなんもないよ')
      }
   },
   23:{
      name:'サソリさんⅡ',
      process:async function(){
         ScorpionAct(2);
      }
   },
   24:{
      name:'utu_mzyb',
      process:async function(){
         UtusenEvent();
      }
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

function weightedRandomSelect(items, count) {
   let pool = [...items]; // 配列をコピーして元のデータを壊さないようにする
   let result = [];
   
   while (result.length < count && pool.length > 0) {
       const totalWeight = pool.reduce((sum, item) => sum + item.p, 0);
       let random = Math.random() * totalWeight;
       
       for (let i = 0; i < pool.length; i++) {
           if (random < pool[i].p) {
               result.push(pool[i]);
               pool.splice(i, 1); // 選ばれた要素をリストから削除
               break;
           }
           random -= pool[i].p;
       }
   }
   return result;
}

function GoNextFloor(){
   floor += 1;
   candybar = [];
   MAPx = backMapnum[stage-1].split('.');
   MAPy = +MAPx[1]+1
   MAPx = +MAPx[0]
   backMap = backMaps[Math.floor(Math.random() * MAPy)+MAPx];

   MAPx = objMapnum[stage-1].split('.');
   MAPy = +MAPx[1]+1
   MAPx = +MAPx[0]
   objMap = objMaps[Math.floor(Math.random() * MAPy)+MAPx];
   objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));

   if(stage == 1){
      if(fun == 23 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[4];
         objMap = objMaps[6];
      }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[5];
         objMap = objMaps[7];
      };
   }else if(stage == 2){
      if(fun == 68 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[11];
         objMap = objMaps[14];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[19];
         objMap = objMaps[23];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      };
   }else if(stage == 3){
      if(fun == 68 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[18];
         objMap = objMaps[22];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      }else if(fun <= 50 && Math.floor(Math.random()*10)==0){
         backMap = backMaps[19];
         objMap = objMaps[23];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      };
   }
   if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backMap = backMaps[6];objMap = objMaps[8];}//創生黎明の原野
   else if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backMap = backMaps[13];objMap = objMaps[16];}//ガチェンレイゲスドゥールラート(昼)
   else if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backMap = backMaps[20];objMap = objMaps[24];}//ガチェンレイゲスドゥールラート(夜)

   draw()
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
let t = 't'
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
let enemymp = 0
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
let Prefixes = {
   'furious':{
      id:'furious',
      name:'激昂',
      rare:1,
      process:function(cam,me){
         humans[cam][me].attack  = Math.floor(humans[cam][me].attack*1.5);
         humans[cam][me].defense = Math.floor(humans[cam][me].defense*0.75);
         humans[cam][me].critlate = 0.05
      },
   },
   'calm':{
      id:'calm',
      name:'冷静沈着な',
      rare:1,
      process:function(cam,me){
         humans[cam][me].attack  = Math.floor(humans[cam][me].attack*0.75);
         humans[cam][me].defense = Math.floor(humans[cam][me].defense*2.0);
         humans[cam][me].critrate = 5
      },
   },
   'gambler':{
      id:'gambler',
      name:'ギャンブラーな',
      rare:1,
      process:function(cam,me){
         humans[cam][me].critrate += 4
         humans[cam][me].maxhealth = Math.floor(humans[cam][me].maxhealth*2.0);
      },
   },
   'defender':{
      id:'defender',
      name:'守りが固い',
      rare:2,
      process:function(cam,me){
         humans[cam][me].critresist += 5;
         humans[cam][me].maxhealth = Math.floor(humans[cam][me].maxhealth*1.25);
         humans[cam][me].defense = Math.floor(humans[cam][me].defense*1.5);
         humans[cam][me].attack = Math.floor(humans[cam][me].attack*0.3)
      },
   },
   'wise':{
      id:'wise',
      name:'心眼持ちの',
      rare:3,
      process:function(cam,me){
         humans[cam][me].critlate = 100; //確定会心人間
         humans[cam][me].critdmg = 1.2; //さすがに弱め
         humans[cam][me].attack = Math.floor(humans[cam][me].attack*0.3); //つまり防御力無視害悪敵ってこと
      },
   },
}

let myWeapons = [];
let myArmors = [];
//let mySkills = [];

myWeapons.push(
   {
      id:'woodensword',
      lv:1, //強化で上がる数値
      rank:1,//重層で上がる数値
   },
   {
      id:'card',
      lv:3,
      rank:1,
   }
)

let quests = {
   main:{
      1:{
         name:'はじめの一歩',
         detail:'最初のダンジョンに挑戦しよう！',
         reward:'100RP',
         done:0,
      },
      2:{
         name:'次のステージへ',
         detail:'次のステージに挑戦しよう！',
         reward:'200RP',
         done:0,
      },
      3:{
         name:'最後のステージへ',
         detail:'最後のステージに挑戦しよう！',
         reward:'300RP',
         done:0,
      },
   }
}

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
         slash2:'double slash',
         slash3:'slash of light',
         
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
         ps:'null',
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
         slash2:'double slash',
         slash3:'slash of light',

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
         ex:'null',
         ns:'null',
         ps:'null',
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
         slash2:'double slash',
         slash3:'slash of light',

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
         ex:'null',
         ns:'null',
         ps:'null',
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
         slash2:'double slash',
         slash3:'slash of light',

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
         ex:'null',
         ns:'null',
         ps:'null',
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
         slash2:'double slash',
         slash3:'slash of light',

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
         ex:'null',
         ns:'null',
         ps:'null',
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
         ex:'null',
         ns:'null',
         ps:'null',
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

         ps:'null',
         ns:'null',
         ex:'null',
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
         
         ps:'null',
         ns:'null',
         ex:'null',
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
         
         ps:'null',
         ns:'null',
         ex:'null'
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

         ex:'null',
         ps:'null',
         ns:'null'
      }
   }
}

let turn = 0;//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か

let Charas = {
   'wretch':{
      id:'wretch',
      name:'持たざる者',
      description:'持たざる者。何もないが、何でもあるとも言える。',
      ex:'null',
      ns:'null',
      ps:'null',
      attack:20,
      defense:0,
      mattack:10,
      mdefense:0,
      maxhealth:100,
      maxmp:50,
      critlate:0.05,
      critdmg:1.5,
      critresist:0,
      buttonsolid:'#000000',
      buttonback:'#999999',
   },
   'greenslime':{
      id:'greenslime',
      name:'green_slime',
      description:'スライム。...まだできてないから使わない方が吉',
      ex:'null',
      ns:'null',
      ps:'null',
      attack:20,
      defense:0,
      mattack:10,
      mdefense:0,
      maxhealth:100,
      maxmp:50,
      critlate:0,
      critdmg:1.5,
      critresist:0,
      buttonsolid:'#000000',
      buttonback:'#999999',
   },

   'mechanic':{
      id:'mechanic',
      name:'メカニッカ',
      description:'メカニック。言うなれば「諸刃の刃」<br>ARMSのあの人ではない。打たれ弱いので繊細にね',
      ex:'placeturret',
      ns:'throwwrench',
      ps:'solplaceturret',
      attack:25,
      defense:0,
      mattack:20,
      mdefense:20,
      maxhealth:20,
      maxmp:30,
      critlate:0.07,
      critdmg:2.0,
      critresist:0,
      buttonsolid:'#ff7373',
      buttonback:'#fcffc0',
   },
   
   'clown':{
      id:'clown',
      name:'週末の道化師',
      description:'ピエロさん。ランダム要素多め。<br>',
      ex:'trickyvaiavles',
      ns:'gambler',
      ps:'highsol',
      attack:20,
      defense:0,
      mattack:10,
      mdefense:0,
      maxhealth:100,
      maxmp:50,
      critlate:0.09,
      critdmg:3.0,//...ちょまってこれ大丈夫かな
      critresist:0.1,
      buttonsolid:'#ffacf9',
      buttonback:'#acf8ff',
   },
   'magodituono':{
      id:'magodituono',
      name:'スオーノ・フルマイン',
      description:'雷電魔術師。"帯電"を用いて戦う<br>将軍ではない。誰だ将軍って言ったやつは',
      ex:'lightningstorm',
      ns:'elecbarrier',
      ps:'elecshock',
      attack:10,
      defense:0,
      mattack:30,
      mdefense:20,
      maxhealth:40,
      maxmp:100,
      critlate:0.05,
      critdmg:2.0,
      critresist:0.05,
      buttonsolid:'#7f1184',
      buttonback:'#5f4894',
   },
}

let Friends = {
   '飛花レイル':{
      name:'飛花レイル',
      belongto:'', //所属
      rare:3,
      description:``, 
      comment:``,
      N:0,
      S:0,
      E:0,
      P:0,
   },
   '憚羅レイル':{
      name:'憚羅レイル',
      rare:3
   },
   '泡沫アリア':{
      name:'泡沫アリア',
      belongto:'', //所属
      rare:2,
      description:``, 
      comment:``,
      N:0,
      S:0,
      E:0,
      P:0,
   },
   'メメント・ラメント':{
      name:'メメント・ラメント',
      rare:3
   },

   '小安見ニーク':{
      name:'小安見ニーク',
      rare:3,
   },
   '面戸ガリヤ':{
      name:'面戸ガリヤ',
      rare: 2,
   },
   '伊辣キキ':{
      name:'伊辣キキ',
      rare: 2,
   },

   '息留河鹿':{
      name:'息留 河鹿',
      rare: 1
   },
   'ジャンネ マジデ':{
      name:'ジャンネ マジデ',
      rare:1
   },
   '手斧バス':{
      name:'手斧バス',
      rare:1
   },

   '久須田和伊男':{
      name:'久須田和伊男',
      rare:1,
   },
   'ゴードン・ソージィ':{
      name:'ゴードン・ソージィ',
      rare:3
   }
}

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
   'double slash':{
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
   'slash of light':{
      id:'slash of light',
      name:'一閃',//まじん斬り も作りたいね 霹靂一閃も
      description:'初期のロマン技。当たれば幸い的な感じで打ったほうが楽',
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
      buyable:0,
      sp:0,
      pp:0,
   },
   'woodenstick':{
      name:'木の棒',
      id:'woodstick',
      num:0,
      power:2,
      price:10,
      description:'初期装備あるあるの武器。値段に見合わず割と強い',
      buyable:1,//購入可能かどうか
      sp:0,//特殊能力(攻撃後)の有無
      pp:0,//特殊能力(攻撃前)の有無
   },
   'woodensword':{
      name:'木刀',
      id:'woodsword',
      num:0,
      power:4,
      price:20,
      description:'木の棒よりも強い。言うなれば気の剣。',
      buyable:1,
      sp:0,
      pp:0,
   },
   'bamboosword':{
      name:'竹刀',
      id:'bamboosword',
      num:0,
      power:6,
      price:30,
      description:'さあ、剣道しようぜ！！',
      buyable:1,
      sp:0,
      pp:0,
   },
   'stone':{
      name:'石ころ',
      id:'stone',
      num:0,
      power:8,
      price:50,
      description:'石です。よわよわ',
      buyable:1,
      sp:0,
      pp:0,
   },
   'bigrock':{
      name:'大きな石',
      id:'bigrock',
      num:0,
      power:10,
      price:80,
      description:'岩です。つよつよ',
      buyable:1,
      sp:0,
      pp:0,
   },
   'brick':{
      name:'レンガ',
      id:'brick',
      num:0,
      power:12,
      price:100,
      description:'岩にセメントつけたら強くなるのって意味わからなくね？',
      buyable:1,
      sp:0,
      pp:0,
   },
   'thinpaper':{
      name:'薄めの紙',
      id:'thinpaper',
      num:0,
      power:20,
      price:5,
      description:'薄い紙です。すって相手に切り付けて｢いたっ..｣ってさせる用です',
      buyable:1,
      sp:0,
      pp:1,
      pprocess:function(cam,tcam,me,target,num){
         if(num == 0){//攻撃前
            humans[cam][me].critlate += 0.7;
            humans[cam][me].critlate *= 100;humans[cam][me].critlate = Math.round(humans[cam][me].critlate);humans[cam][me].critlate /= 100;
         }
    else if(num == 1){//攻撃後
            humans[cam][me].critlate -= 0.7;
            humans[cam][me].critlate *= 100;humans[cam][me].critlate = Math.round(humans[cam][me].critlate);humans[cam][me].critlate /= 100;
         }
      }
   },
   'card':{
      name:'カード',
      id:'card',
      num:0,
      power:'Math.floor(Math.random()*13)+1',
      price:7,
      description:'ちょっとした運要素。攻撃方法は切り付けなのでよわい(つよい)',
      buyable:1,
      sp:0,
      pp:0,
   },
   'scissors':{
      name:'はさみ',
      id:'scissors',
      num:0,
      power:25,
      price:200,
      description:'持って｢近づいたら*すよ..?｣っていう用。実際*せない',
      buyable:1,
      sp:0,
      pp:1,
      pprocess:function(cam,tcam,me,target,num){
         if(num == 0){//攻撃前
            humans[cam][me].critdmg += 0.4;
            humans[cam][me].critdmg *= 100;humans[cam][me].critdmg = Math.round(humans[cam][me].critdmg);humans[cam][me].critdmg /= 100;
         }
    else if(num == 1){//攻撃後
            humans[cam][me].critdmg -= 0.4;
            humans[cam][me].critdmg *= 100;humans[cam][me].critdmg = Math.round(humans[cam][me].critdmg);humans[cam][me].critdmg /= 100;
         }
      },
   },
   'knife':{
      name:'ほんもののナイフ',
      id:'knife',
      num:0,
      power:40,
      price:300,
      description:'わりとつよい。花や骨に向かって振り回しましょう。',
      buyable:1,
      sp:0,
      pp:1,
      pprocess:function(cam,tcam,me,target,num){
         if(num == 0){//攻撃前
            humans[cam][me].critlate += 0.1;
            humans[cam][me].critlate *= 100;humans[cam][me].critlate = Math.round(humans[cam][me].critlate);humans[cam][me].critlate /= 100;
         }
    else if(num == 1){//攻撃後
            humans[cam][me].critlate -= 0.1;
            humans[cam][me].critlate *= 100;humans[cam][me].critlate = Math.round(humans[cam][me].critlate);humans[cam][me].critlate /= 100;
         }
      },
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
      sprocess:async function(cam,tcam,me,target,multiplier,kind,code){
         log.textContent = '血を吸った！';await delay(1000);
         x = Math.ceil(humans[tcam][target].health*0.1);
         humans[cam][me].health += x;
         if(humans[cam][me].health > humans[cam][me].maxhealth){humans[cam][me].health = humans[cam][me].maxhealth;}
         log.textContent = `体力が${x}回復した!`;tekiou();await delay(1000);
         return 'alive';
      },
      pp:0,
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
      sprocess:async function(cam,tcam,me,target,multiplier,kind,code){
         log.textContent = 'トリニティの砲撃術は優秀ですから。';await delay(1000);
         x = Math.ceil(humans[cam][me].attack * humans[cam][me].power * 0.9 + weaponpower - humans[tcam][target].defense);
         if(x < 0){x = 0};if(x > humans[tcam][target].health){x = humans[tcam][target].health};
         humans[tcam][target].health -= x;
         buffadd(tcam,target,'shelldown',3,1);
         log.textContent = 'お口に合うと良いのですが..';
         await delay(1000);
         if(humans[tcam][target].health <= 0){return 'dead';}
         else{return 'alive';}
      },
      pp:0,
   },
   'biggamble':{
      name:'大博打',
      id:'biggamble',
      num:0,
      power:'Math.floor(Math.random()*100)+1',
      price:150,
      description:'大勝負..ってやつ？まじで賭け。がんばえ',
      buyable:1,
      sp:0,
      pp:0,
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
      pp:0,
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
      num:5,
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
      num:2,
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
      num:5,
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
      num:1,
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
      num:1,
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
      num:3,
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
         rbuffs = arrayShuffle(rbuffs);
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
         rbuffs = arrayShuffle(rbuffs);
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
      'null':{
         type:'ex',
         id:'null',
         name:'null',
         description:'何もないです。まあこれが店頭に並ぶこともないでしょうけどね。はい論破',
         price:0,
         buyable:0,
      },
      '50%split':{//変更予定
         type:'ex',
         id:'50%split',
         name:'GO!SPLIT!!',
         description:`自分の体力を最大の50%削り、分身を作りだす`,
         price:95,
         buyable:1,
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
         buyable:1,
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
         buyable:1,
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
         price:80,
         buyable:1,
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
      'lightningstorm':{
         type:'ex',
         id:'lightningstorm',
         name:'ライニングストーム',
         description:'敵全体に攻撃力の120%のダメージを与え、帯電にする<br>帯電:自身の行動時自傷ダメージが入る',
         price:60,
         buyable:1,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect(3);
            let result = await humandamaged(cam,target[1],me,target[0],1.5,'sh',4);
            buffadd(target[0],target[1],'elec',2,1);
            return result;
         }
      },
      'kylieeleison':{
         type:'ex',
         id:'kylieelison',
         name:'Kylie Eleison',
         description:'敵に攻撃力の200%のダメージ。もし敵の体力が70%以上ならば400%',
         price:110,
         buyable:1,
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
         buyable:1,
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
         buyable:1,
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
         buyable:1,
         process:async function(cam,me){
            phase = 0; disappear();
            let target = await LetsTargetSelect();
            let S = ['わたしはその辺の小石...','わたしのことなんて、気にしないでください...','すみません、一人にさせてください......'];
            serif = arraySelect(S)
            log.textContent = serif;
            buffadd(target[1],target[0],'weaknessgrasp',2,1);//弱点把握状態
            return 'alive';
         },
      },
      'bombe':{
         type:'ex',
         id:'bombe',
         name:'ボマー',
         price:80,
         buyable:1,
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
         buyable:0,
         cool:0
      },
      'throwslime':{
         type:'ns',
         id:'throwslime',
         name:'Attach!Slime!!',
         description:'敵にスライムをくっつける',
         price:70,
         buyable:1,
         cool:3,
         process:async function(cam,me){
            let target = ShallTargetSelect(cam,me,'er',0);
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
         buyable:1,
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
         buyable:1,
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
         price:30,
         buyable:1,
         cool:5,
         process:async function(cam,me){
            buffadd(cam,me,'improve',4,1);
            log.textContent = 'パーツアップグレード。';
            return 'alive';
         }
      },
      'elecbarrier':{
         type:'ns',
         id:'elecbarrier',
         name:'エレクトリックバリア',
         description:'帯電バリアを付与する。<br>帯電バリア:被攻撃時相手に帯電を付与する<br>帯電:自身の行動時自傷ダメージが入る',
         price:70,
         buyable:1,
         cool:3,
         process:async function(cam,me){
            let target = ShallTargetSelect(cam,me,'phpl',0);
            buffadd(target[1],target[0],'elecshield',2,1);
            log.textContent = '帯電バリアを付与しました！';
            return 'alive';
         }
      },
      'hitelec':{
         type:'ns',
         id:'hitelec',
         name:'エレキギター殴り',
         description:'エレキギターで殴ります',
         price:50,
         buyable:1,
         cool:4,
         process:async function(cam,me){
            disappear();
            buffadd(cam,me,'powerup',2,2);
            log.textContent = 'エレキギターで殴るぞ..ごめんここのセリフどしよ'
            let target = ShallTargetSelect(cam,me,'er',0);
            let result = await humandamaged(cam,target[1],me,target[0],2,'sh',4);
            log.textContent = 'かまってぇや、マジで';
            return result;
         }
      },
   },
   ps:{
      'null':{
         type:'ps',
         id:'null',
         name:'null',
         description:'(まじでnullです。効果無し。外れ。乙)',
         price:0,
         buyable:0,
      },
      'sthree':{
         type:'ps',
         id:'sthree',
         name:'DoYourBest!!',
         description:'slash時、たまに3回攻撃する',
         price:90,
         buyable:1,
      },
      'solplaceturret':{
         type:'ps',
         id:'solplaceturret',
         name:'雷ちゃん、もうちょっと',
         description:'slash of light命中時、タレットを1つ配置する',
         price:90,
         buyable:1,
      },
      'highsol':{
         type:'ps',
         id:'highsol',
         name:'生粋の勝負師',
         description:'slash of lightの命中率が下がるが、命中時3倍のダメージ',
         price:90,
         buyable:1,
      },
      'enemy50%pursuit':{
         type:'ps',
         id:'enemy50%pursuit',
         name:'一度限りの取引',
         description:'攻撃によって敵の体力を50%以下だった場合、攻撃力の70%で追撃する',
         price:70,
         buyable:1,
      },
      'elecshock':{
         type:'ps',
         id:'elecshock',
         name:'エレクトリック衝撃',
         description:'会心時、相手に帯電を付与する。<br>帯電:自身の行動時自傷ダメージが入る',
         price:90,
         buyable:1,
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
               let selected = ShallTargetSelect(cam,me,'phph',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'粘液飛ばし',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は粘液を飛ばしてきた！`;await delay(1000);
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         3:{
            name:'粘液付与',//やばい方のスライムも作りたいね 一緒に溶けよ....? みたいな..ってちょっと癖すぎるか....?よし、技名は自己責任で表示可にしよう その場合セリフは...?
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は粘液を絡ませてきた！`;await delay(1000);//いやこれはこれでやばいか...?いや全然捉えようによってはやばいわ
               let selected = ShallTargetSelect(cam,me,'phph',0);
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
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'体当たり',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は体当たりを仕掛けてきた！`;await delay(1000);
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         3:{
            name:'体当たり',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は回転しながら突進してきた！`;await delay(1000);
               let selected = ShallTargetSelect(cam,me,'phpl',0);
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
               let selected = ShallTargetSelect(cam,me,'ec',0);
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
               let selected = ShallTargetSelect(cam,me,'pr',0);
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
               let selected = ShallTargetSelect(cam,me,'phpl',0);
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
               let selected = ShallTargetSelect(cam,me,'patkh',0);
               buffadd(selected[1],selected[0],'palsy',2,1);
               return 'alive';
            }
         },
         2:{
            name:'どくのこな',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は毒の粉を振りかけてきた！`;await delay(1000);
               let selected = ShallTargetSelect(cam,me,'phph',0);
               buffadd(selected[1],selected[0],'poison',2,1);
               return 'alive';
            }
         },
         3:{
            name:'ねむりごな',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は眠り粉を振りかけてきた！`;await delay(1000);
               let selected = ShallTargetSelect(cam,me,'patkh',0);
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
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[0],me,selected[1],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'古書の専門家',
            num:2,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は古書の専門家だ！！`;await delay(1000);//いやごめん、は？ (ウイさんのEX「古書の専門家」より)
               let selected = ShallTargetSelect(cam,me,'eatkh',0);//enemies atk high
               let result = await Magics.power.process(cam,selected[0],me,selected[1]);
               return result;
            }
         },
         3:{
            name:'伝達されていく知識',
            num:3,
            process:async function(cam, me){
               log.textContent = `${humans[cam][me].name}は知識を伝達した！`;await delay(1000);//ウイさんのNS「伝達されていく知識」..いやそのまますぎるか...?
               let selected = ShallTargetSelect(cam,me,'ec',1);//自分付近
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

const AllQuests = {
   main:{
      1:{
         num:1,
         description:"このゲームを見つけてくれてありがとう！！",
         rewards: 200,
         type:0,
         term:[0],
         act:1,
         acted:1
      },
      2:{
         num:2,
         description:"敵を3体倒す",
         rewards: 100, 
         type:'k', //敵を倒す
         term:[0],   //条件(stage1で〜みたいな)
         act:3,    //必要実行数
         acted:0   //現在実行数
      },
      3:{
         num:3,
         description:"ダンジョンを一回クリアする",
         rewards: 100,
         type:'dc',
         term:[0],
         act:1,
         acted:0,
      },
   },
   daily:[
      {
         id: 1,
         description: "ボスを1体倒す",
         rewards: 20,
         type: 'k',
         term:[0],
         act: 1,
         acted: 0,
      },
      {
         id: 1,
         description: "敵を3体倒す",
         rewards: 20,
         type: 'k',
         term:[0],
         act: 3,
         acted: 0,
      },
      {
         id: 1,
         description: "敵を5体倒す",
         rewards: 20,
         type: 'k',
         term:[0],
         act: 5,
         acted: 0,
      },
      {
         id: 1,
         description: "敵を7体倒す",
         rewards: 20,
         type: 'k',
         term:[0],
         act: 7,
         acted: 0,
      },
      {
         id: 1,
         description: "ダンジョンを1回クリアする",
         rewards: 20,
         type: 'dc',
         term:[0],
         act: 1,
         acted: 0,
      }
   ]
}

let Quests = {
   main:{
      num:1,
      description:"このゲームを見つけてくれてありがと！！！",
      rewards: 200,
      type:0,
      term:[0],
      act:1,
      acted:1
   },
   daily1:{
      num:1,
      description:"敵を3体倒す",
      rewards: 20,
      type:'k',
      term:[0],
      act:3,
      acted:0
   },
   daily2:{
      num:2,
      description:"ダンジョンを一回クリアする",
      rewards: 20,
      type:'dc',
      term:[0],
      act:1,
      acted:0
   },
   daily3:{
      num:3,
      description:"敵を5体倒す",
      rewards: 20,
      type:'k',
      term:[0],
      act:5,
      acted:0
   },
   daily4:{
      num:4,
      description:"敵を7体倒す",
      rewards: 20,
      type:'k',
      term:[0],
      act:7,
      acted:0
   },
   daily5:{
      num:5,
      description:"ダンジョンを1回クリアする",
      rewards: 20,
      type:'dc',
      term:[0],
      act:1,
      acted:0
   }
}
//#endregion

//#region 超シンプルで使いやすい子達
function tekiou(){
   //存在確認用コマンド Object.keys(humans).forEach(cam => {Object.keys(humans[cam]).map(a => a.toString()).filter(s => humans[cam][s].status == 1 || humans[cam][s].status == 2).forEach(me => {console.log(`${cam}${me}`)})})
   //生存確認用コマンド x = [1, 2, 3, 4].every(id => {let Enemy = humans.enemies[id];return Enemy.status == 0 || Enemy.status == 2;});
   Object.keys(humans).forEach(cam => {
      Object.keys(humans[cam]).map(a => a.toString()).filter(s => humans[cam][s].status == 1 || humans[cam][s].status == 2).forEach(me => {
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
            document.getElementById(`${cam}${me}`).style.backgroundColor = '#b2b2b2';
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

   //save();

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
function arrayGacha(array,probability){
   if(array.length !== probability.length){throw new Error("長さがあっていないっす！先輩、ちゃんとチェックした方がいいっすよ〜？");}
   const total = probability.reduce((sum, p) => sum + p, 0);
   let random = Math.random() * total;
   for (let i = 0; i < array.length; i++) {
      if(random < probability[i]){
         return array[i];
      }
      random -= probability[i];
   }
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
   if(Math.floor(Math.random() * 5) == 0){humans.enemies[target].prefixe = `${arraySelect(Object.keys(Prefixes))} `};
   
   humans.enemies[target].attack = enemyatk;//敵の能力を決めます
   humans.enemies[target].defense = enemydef;
   humans.enemies[target].maxhealth = enemyhp;
   humans.enemies[target].maxmp = enemymp;
   humans.enemies[target].critlate = enemycrla;
   humans.enemies[target].critdmg = enemycrdm;
   humans.enemies[target].critresist = enemycrrs;
   if(humans.enemies[target].prefixe !== ''){Prefixes[humans.enemies[target].prefixe]('enemies',target)};
   humans.enemies[target].health = humans.enemies[target].maxhealth;
   humans.enemies[target].mp = humans.enemies[target].maxmp;
   return humans.enemies[target].name;
}


//#endregion
//#region log&text
let textDiv = document.getElementById('text');
let autoDelay = 1;
let skipText = false; // スキップフラグ
let clearText = false; // テキスト消去フラグ
let textShowing = 0;

function colorcheck(rawtext) {
   const text = [];
   let isRed = false; // ** で囲まれた部分かどうか
   let isPink = false; // && で囲まれた部分かどうか
   let isBlue = false; // ^^ で囲まれた部分かどうか

   for(let i = 0; i < rawtext.length; i++){
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

async function addtext(text){
   textShowing = 1;
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
                  textShowing = 0;
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
//#endregion

//#region Inventory
let InventoryPage = 1;
function inventoryOpen(num){
   document.getElementById('movabledescription').textContent = '';document.getElementById('movabledescription').style.display = 'none';
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
      <div id="ISkills">
      EX:<span class="hasd" data-description="${Skills.ex[humans.players[InventoryPage].ex].description}">${Skills.ex[humans.players[InventoryPage].ex].name}</span><br>
      NS:<span class="hasd" data-description="${Skills.ns[humans.players[InventoryPage].ns].description}">${Skills.ns[humans.players[InventoryPage].ns].name}</span><br>
      PS:<span class="hasd" data-description="${Skills.ps[humans.players[InventoryPage].ps].description}">${Skills.ps[humans.players[InventoryPage].ps].name}</span>
      </div>
      <div id="IEquips">
      weapon:<span class="hasd" data-description="${Weapons[humans.players[InventoryPage].weapon.id].description}">${Weapons[humans.players[InventoryPage].weapon.id].name}</span> <button class="button" onclick="WeaponChange()">change</button><br>
      armor:<span class="hasd" data-description="${Armors[humans.players[InventoryPage].armor.id].description}">${Armors[humans.players[InventoryPage].armor.id].name}</span> <button class="button" onclick="ArmorChange()">change</button><br>
      tools;<br>
       1:<span class="hasd" data-description="${Tools[humans.players[InventoryPage].tool1].description}<br>${Tools[humans.players[InventoryPage].tool1].num}個所持しています">${Tools[humans.players[InventoryPage].tool1].name}</span> <button class="button" onclick="ToolChange(1)">change</button><br>
       2:<span class="hasd" data-description="${Tools[humans.players[InventoryPage].tool2].description}<br>${Tools[humans.players[InventoryPage].tool2].num}個所持しています">${Tools[humans.players[InventoryPage].tool2].name}</span> <button class="button" onclick="ToolChange(2)">change</button><br>
       3:<span class="hasd" data-description="${Tools[humans.players[InventoryPage].tool3].description}<br>${Tools[humans.players[InventoryPage].tool3].num}個所持しています">${Tools[humans.players[InventoryPage].tool3].name}</span> <button class="button" onclick="ToolChange(3)">change</button><br>
      </div>
      <div id="IEquipsChangeZone"></div>
   </div>
   <div id="Iblock2">
      <div id="ISlashs">slashs<br>
      1:${humans.players[InventoryPage].slash1} <button class="button" onclick="SlashChange(1)">change</button><br>
      2:${humans.players[InventoryPage].slash2} <button class="button" onclick="SlashChange(2)">change</button><br>
      3:${humans.players[InventoryPage].slash3} <button class="button" onclick="SlashChange(3)">change</button><br>
      </div>
      <div id="SlashChangePlace"></div>
      <div id="IMagics">magics<br>
      1:${humans.players[InventoryPage].magic1} <button class="button" onclick="MagicChange(1)">change</button><br>
      2:${humans.players[InventoryPage].magic2} <button class="button" onclick="MagicChange(2)">change</button><br>
      3:${humans.players[InventoryPage].magic3} <button class="button" onclick="MagicChange(3)">change</button><br>
      </div>
      <div id="MagicChangePlace"></div>
      <span id="IAppearsp">${humans.players[InventoryPage].sp}pt</span><br>
      <div id="ISutefuri">${Sutefuri}</div>
   </div>
   `;
   // let slashs = Object.keys(Slashs).map(a => Slashs[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Slashs[a].description}">${Slashs[a].id}</span>` : null).filter(Boolean)
   // document.getElementById('ISlashAppearence').innerHTML = slashs.join('<br>');
   // let magics = Object.keys(Magics).map(a => Magics[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Magics[a].description}">${Magics[a].id}</span>` : null).filter(Boolean)
   // document.getElementById('IMagicAppearence').innerHTML = magics.join('<br>');
   // let weapons = Object.keys(Weapons).map(a => Weapons[a].num >= 1 && Weapons[a].num > Object.keys(humans.players).filter(b => humans.players[b].weapon.id == Weapons[a].id).length ? `<span class="hasd" data-description="${Weapons[a].description}">${Weapons[a].name} x${Weapons[a].num}</span>` : null).filter(Boolean)
   // document.getElementById('IWeapons').innerHTML = weapons.join('<br>');
   // let armors = Object.keys(Armors).map(a => Armors[a].num >= 1 && Armors[a].num > Object.keys(humans.players).filter(b => humans.players[b].armor.id == Armors[a].id).length ? `<span class=" hasd" data-description="${Armors[a].description}">${Armors[a].name} x${Armors[a].num}</span>` : null).filter(Boolean)
   // document.getElementById('IArmors').innerHTML = armors.join('<br>');
   // let tools = Object.keys(Tools).filter(a => Tools[a].num > 0).map(a => `<span class="hasd" data-description="${Tools[a].description}">${Tools[a].name} x${Tools[a].num}:</span>`).filter(Boolean)
   // document.getElementById('IItems').innerHTML = tools.join('<br>');

   document.getElementById('IEquipsChangeZone').style.display = 'none';

   
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


function SlashChange(num){
   let availableSlashs = Object.keys(Slashs)
      .filter(a => Slashs[a].lv <= humans.players[InventoryPage].level)
      .map(a => Slashs[a].id);
   let slashSelectHTML = availableSlashs.map(slash => 
      `<button class="button hasd" onclick="SlashChangeDecide('${slash}',${num})" data-description="${Slashs[slash].description}">${Slashs[slash].name}</button>`
  ).join(' ');
  
  document.getElementById('SlashChangePlace').innerHTML = `
      Select Slash for Slot ${num}:<br>
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
   let availableMagics = Object.keys(Magics).filter(a => Magics[a].lv <= humans.players[InventoryPage].level).map(a => Magics[a].id);
   let magicSelectHTML = availableMagics.map(magic => 
      `<button class="button hasd" onclick="MagicChangeDecide('${magic}', ${num})" data-description="${Magics[magic].description}">${magic}</button>`
  ).join(' ');
  
  document.getElementById('MagicChangePlace').innerHTML = `
      <div>Select Magic for Slot ${num}:</br>
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
   document.getElementById('IEquipsChangeZone').innerHTML = '';document.getElementById('IEquipsChangeZone').style.display = 'block';
   let order = Object.keys(Weapons).map(a => a.id);
   let joins = [];
   myWeapons.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
   myWeapons.forEach((a,i) => {
      joins.push(`<button class="button hasd" data-description="${Weapons[a.id].description}" onclick="WeaponChangeDeside('${i}')">${Weapons[a.id].name}</button>`);
   })
   if(humans.players[InventoryPage].weapon.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Weapons.none.description}" onclick="WeaponChangeDeside('none')">none</button>`)};
   document.getElementById('IEquipsChangeZone').innerHTML += joins.join(' ');
}
function WeaponChangeDeside(code){
   console.log(`${Weapons[humans.players[InventoryPage].weapon.id]?.name??'error'} => ${Weapons[myWeapons[code]?.id??'none']?.name??'error'}`);
   if(code !== 'none'){
      humans.players[InventoryPage].weapon.id !== 'none' && myWeapons.push(humans.players[InventoryPage].weapon);
      humans.players[InventoryPage].weapon = myWeapons[code];
      myWeapons.splice(code,1);
   }else{
      humans.players[InventoryPage].weapon.id !== 'none' && myWeapons.push(humans.players[InventoryPage].weapon);
      humans.players[InventoryPage].weapon = Weapons.none;
   }
   inventoryOpen(InventoryPage);
}
function ArmorChange(){
   document.getElementById('IEquipsChangeZone').innerHTML = '';document.getElementById('IEquipsChangeZone').style.display = 'block';
   let order = Object.keys(Armors).map(a => a.id);
   let joins = [];
   myArmors.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
   myArmors.forEach((a,i) => {
      joins.push(`<button class="button hasd" data-description="${Armors[a.id].description}" onclick="ArmorChangeDeside('${i}')">${Armors[a.id].name}</button>`)
   })
   if(humans.players[InventoryPage].armor.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Armors.none.description}" onclick="ArmorChangeDeside('none')">none</button>`)};
   document.getElementById('IEquipsChangeZone').innerHTML += joins.join(' ');
}
function ArmorChangeDeside(code){
   console.log(`${Armors[humans.players[InventoryPage].armor.id]?.name??'error'} => ${Armors[myArmors[code]?.id??'none']?.name??'error'}`);
   if(code !== 'none'){
      humans.players[InventoryPage].armor.id !== 'none' && myArmors.push(humans.players[InventoryPage].armor);
      humans.players[InventoryPage].armor = myArmors[code];
      myArmors.splice(code,1);
   }else{
      humans.players[InventoryPage].armor.id !== 'none' && myArmors.push(humans.players[InventoryPage].armor);
      humans.players[InventoryPage].armor = Armors.none;
   }
   inventoryOpen(InventoryPage);
}
function ToolChange(num){
   document.getElementById('IEquipsChangeZone').innerHTML = '';document.getElementById('IEquipsChangeZone').style.display = 'block';
   Object.keys(Tools).filter(a => Tools[a].num > 0).forEach((a,i) => {
      document.getElementById('IEquipsChangeZone').innerHTML += `<button class="button hasd" data-description="${Tools[a].description}<br>${Tools[a].num}個所持しています" onclick="ToolChangeDeside(${num},'${a}')">${Tools[a].name}</button>`;
   })
}
function ToolChangeDeside(num,code){
   switch(num){
      case 1:
         humans.players[InventoryPage].tool1 = Tools[code].id;
         break;
      case 2:
         humans.players[InventoryPage].tool2 = Tools[code].id;
         break;
      case 3:
         humans.players[InventoryPage].tool3 = Tools[code].id;
         break;
   }
   inventoryOpen(InventoryPage);   
}
   

//#endregion
//#region Notice
const Notices = {
   'introduction':{
      txt:'introduction',//txtのファイル名
      headline:'このお知らせ機能について',//見出し
      name:'お知らせ機能！ついに登場〜☆',//タイトル
   },
   '1.200-1.205':{
      txt:'1.200-1.205',
      headline:'1.200~1.205',
      name:'1.200~1.205までの更新のお話',
   },
   '1.206':{
      txt:'1.206',
      headline:'1.206',
      name:'1.206の更新内容のお話',
   },
   '1.207':{
      txt:'1.207',
      headline:'1.207',
      name:'1.207の更新内容のお話',
   },
   '1.208':{
      txt:'1.208',
      headline:'1.208',
      name:'1.208の更新内容のお話',
   },
   '最近更新できてない件について':{
      txt:'最近更新できてない件について',
      headline:'最近更新できてない件について',
      name:'振り返って見ると最近更新できてない件',
   },
   'todo':{
      txt:'todo',
      headline:'todoリストとか',
      name:'something to do for me'
   },
   '1.300..?!':{
      txt:'1.300..?!',
      headline:'1.300..?!',
      name:'1.300..?!(まだ)'
   }
}
let noticenow = 0;
function OpenNotice(){
   sideMenu.style.left = '-250px';
   document.getElementById('Notice-page').style.display = 'block';
   document.getElementById('notice-honmei').style.display = 'block';
   document.getElementById('notice-list').innerHTML = Object.keys(Notices).map(a => `<li class="notice" data-name="${a}">${Notices[a].headline}</li>`).join('');
}
function CloseNotice(){
   document.getElementById('notice-list').innerHTML = '';
   document.getElementById('Notice-page').style.display = 'none';
}
document.addEventListener('click', (event) => {
   if(event.target.classList.contains('notice')){
       let name = event.target.getAttribute('data-name');

       document.getElementById('notice-honmei').style.display = 'none';
       document.getElementById('notice-main').style.display = 'block';

       console.log(`assets/notices/${name}.txt`);
       document.getElementById('notice-title').textContent = Notices[name].name;
       fetch(`assets/notices/${name}.txt`)
       .then(response => response.text())
       .then(data => {document.getElementById('notice-text').innerText = data;})
       .catch(error => console.error('Error:', error));
   }
});

document.getElementById('notice-back').addEventListener('click', () => {
   document.getElementById('notice-title').textContent = '';
   document.getElementById('notice-text').innerText = '';
   document.getElementById('notice-honmei').style.display = 'block';
   document.getElementById('notice-main').style.display = 'none';
})

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

//#region ゲーム開始時ログインの動き、チャットのあれこれ
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
   
               clearedmainquest = 0;
               quest.main = quests.main[0];
               quest.daily = [];
               for(i = 0;i < 5;i++){
                  let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                  newquest.id = i+1;
                  quest.daily.push(newquest);
               }

               save()
               setTimeout(BacktoHome,1000);
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
      await delay(500)

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
      
      Quests.main = AllQuests.main[clearedmainquest+1];
      if(userData && checkLastLogin(userData?.lastact??0)){
         cleareddailyquest = 0;
         Object.keys(Quests).filter(a => a.kind == 'daily').forEach(nanka => {
            Quests[nanka] = arraySelect(AllQuests);
            Quests[nanka].id = eval(nanka.slice(5));
         });
      }

      BacktoHome()
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
   
   document.getElementById('HomeArea').style.display = 'block';
   document.getElementById('HomeArea').style.textAlign = 'center';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('HomeArea').innerHTML = `
   <button class="button" onclick="HomeGoDungeon('greenslime');">greenslime</button><button class="button" onclick="HomeGoDungeon('mechanic');">mechanic</button><button class="button" onclick="HomeGoDungeon('clown');">clown</button><button class="button" onclick="HomeGoDungeon('magodituono');">Mago Di Tuono</button><br>
   <br>
   <button class="button" onclick="HomeGoDungeon('wretch');">wretch〜持たざる者〜</button>
   `;
}
function HomeGoDungeon(name){
   document.getElementById('HomeArea').style.textAlign = 'left';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'none';
   humans.players[1].id = name;

   humans.players[1].name = Charas[name].name;
   humans.players[1].ex = Charas[name].ex
   humans.players[1].ns = Charas[name].ns
   humans.players[1].ps = Charas[name].ps
   humans.players[1].maxhealth = Charas[name].maxhealth;
   humans.players[1].maxmp = Charas[name].maxmp;
   humans.players[1].attack = Charas[name].attack;
   humans.players[1].defense = Charas[name].defense;
   humans.players[1].mattack = Charas[name].mattack;
   humans.players[1].mdefense = Charas[name].mdefense;
   humans.players[1].critlate = Charas[name].critlate;
   humans.players[1].critdmg = Charas[name].critdmg;
   humans.players[1].critresist = Charas[name].critresist;
   buttonsolid = Charas[name].buttonsolid;
   buttonback = Charas[name].buttonback;

   humans.players[1].health = humans.players[1].maxhealth;
   humans.players[1].mp = humans.players[1].maxmp;

   switch(stage){
      case 1:
         enemylv = 1;enemyhp = 80;enemymp = 50;
         enemyatk = 10;enemypower = 1; enemymatk = 10;
         enemydef = 0; enemyshell = 1; enemymdef = 0;
         enemycrla = 0.03;enemycrdm = 1.5;enemycrrs = 0;
      break;
   }
   
   dungeonnow = 1;
   document.getElementById('NowMap').style.display = 'block';
   document.getElementById('HomeArea').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'none';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button">skill</button>';
   document.getElementById('ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   GoNextFloor();

   AllowMove = 0;

   IMGselect = new Image();
   IMGselect.src = images[humans['players'][1].id].src

   SELECTx = 35;
   SELECTy = 35;
   MAPx = Math.floor(SELECTx / 100);
   MAPy = Math.floor(SELECTy / 100);
   draw()
   updatestop = 0;
   update();
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

let per1 = 0.80, per2 = 0.17, per3 = 0.03;
const Result = document.getElementById('r-go');
let result = [];
let showresult = []
async function HomeBarRecluitGo(num){
   save();
   log.textContent = '';
   result = [];
   for(i = 0; i < num; i++){
      let rarity = Math.random();
      if(rarity < per1){
         result.push(1)
      }else if(rarity < (1-per3)){
         result.push(2)
      }else{
         result.push(3)
      }
   }
   if(num == 10 && !result.includes(2)){
      result.pop();
      result.push(2)
      console.log('最低保証が働きました！')
   }
   let color = result.includes(3) ? 'pink' : 'blue';

   result.forEach(atai => {
      let person = arraySelect(Object.keys(Friends).filter(a => Friends[a].rare == atai));
      showresult.push(person)
   })

   
   document.getElementById('HomeArea').innerHTML = `
   <div id="r-go">
      recluit agent is cool company<br>
      <img class='r-go-img' src="assets/system/recluit-${color}.png">
   </div>
   `;
   document.getElementById('r-go').style.fontSize = '8px';
   document.getElementById('r-go').addEventListener('click',HomeBarRecluitLets);
}

function HomeBarRecluitLets(num){
   document.getElementById('r-go').removeEventListener('click',HomeBarRecluitLets);
   log.textContent = "";
   document.getElementById('r-go').style.fontSize = '20px';//
   document.getElementById('r-go').innerHTML = showresult.join("<br>");
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
async function humandamaged(cam,tcams,me,targets,multiplier,kind,code){//矛先の陣営、攻撃タイプ(物理||魔法)、自分、矛先、倍率、コード(PS用)
   if(!Array.isArray(tcams)){tcams = [tcams];}
   if(!Array.isArray(targets)){targets = [targets];}
   for(let i = 0; i < tcams.length; i++){
      let tcam = tcams[i];
      let target = targets[i];
      console.log(`${humans[cam][me].name} => ${humans[tcam][target].name}; 引数は${[cam,tcam,me,target,multiplier,kind,code]}だってよ`);

      switch(kind){
         case 'sh':
            //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
   
            if(Weapons[humans[cam][me].weapon.id].pp = 0){
               Weapons[humans[cam][me].weapon.id].process(cam,tcam,me,target,multiplier,kind,code,1);
            }
   
            x = Weapons[humans[cam][me].weapon.id].power;
            if(typeof x == 'string'){x = eval(x);};
            
            x = (humans[cam][me].attack * humans[cam][me].power * multiplier + x);
            if(code == 3 && humans[cam][me].ps == 'highsol'){x *= 3};
            if(code == 3 && humans[cam][me].ps == 'solx5but'){x *= 5};
            if(buffhas(cam,me,'improve')){x *= 1.4;};
            if(buffhas(cam,me,'LetsThrow')){x *= 2; buffremove(cam,me,'LetsThrow');};
            if(buffhas(cam,me,'gambling')){
               z = clowngambling[Math.floor(Math.random() * clowngambling.length)];
               x *= z; buffremove(cam,me,'gambling');
               log.textContent = 'ダメージは' + z + '倍になった!!'; await delay(1000);
            };
   
            x -= (humans[tcam][target].defense * humans[tcam][target].shell);
         
            if((Math.floor(Math.random()+ humans[cam][me].critlate)-humans[tcam][target].critresist) >= 1){
               x += (humans[tcam][target].defense * humans[tcam][target].shell);
               x *= humans[cam][me].critdmg;
               log.textContent = '会心の一撃！';await delay(1000);
            };
            
            x = Math.ceil(x);
            if(x < 0){x = 0};
            if(x > humans[tcam][target].health){x = humans[tcam][target].health};
   
            y = humans[tcam][target].health;
   
            humans[tcam][target].health -= x;
            console.log(`damage:${y}->${humans[tcam][target].health}(${x})`);
            
            if(humans[tcam][target].health < 0){humans[tcam][target].health = 0};
            tekiou();
            
            log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ！';
            if(code == 3 && humans[cam][me].ps == 'solplaceturret'){turretPlace(cam);}
            
            if(cam == 'players'){
               x = 1;if(code == 3){x = 2};
               switch(humans[cam][me].id){
                  case 'wretch': humans[cam][me].cool += 10*x; break;
                  case 'green_slime': humans[cam][me].cool += 5*x; break;
                  case 'メカニッカ': humans[cam][me].cool += 15*x; break;
                  case '週末の道化師': humans[cam][me].cool += 20*x; break;
                  case 'ヘルタ': humans[cam][me].cool += 10*x; break;
               }
               if(humans[cam][me].cool > 100){humans[cam][me].cool = 100};
               if(humans[cam][me].cool == 100){document.getElementById('Skillbutton').innerHTML = `<button id="SkillCoolDown" class="button" onclick="skillReserve('${cam}','${me}')">skill</button>`;}
               else{document.getElementById("SkillCoolDown").textContent = humans[cam][me].cool + '%';};//新！クールダウン！！
            }
   
            await delay(1000);
            if(humans[tcam][target].health <= 0){let result = await killed(cam,tcam,me,target);if(result == 'end'){return 'end';}}
   
            if(Weapons[humans[cam][me].weapon.id].sp == 1){
               Weapons[humans[cam][me].weapon.id].sprocess(cam,tcam,me,target,multiplier,kind,code);
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
               humans[cam][me].cool += 10;
               if(humans[cam][me].cool > 100){humans[cam][me].cool = 100};if(humans[cam][me].cool == 100){document.getElementById('Skillbutton').innerHTML = `<button id="SkillCoolDown" class="button" onclick="skillReserve('${cam}','${me}')">skill</button>`;}else{document.getElementById("SkillCoolDown").textContent = humans[cam][me].cool + '%';};
               await delay(1000)
               if(humans[tcam][target].health <= 0){let result = await killed(cam,tcam,me,target);return result;}
            }else if(humans[cam][me].name == 'herta' && humans[tcam][target].health <= humans[tcam][target].maxhealth / 2 && humans[cam][me].level >= 10 && humans[tcam][target].health > 0){//1凸効果「弱みは付け込み」
               x = (humans[cam][me].attack * humans[cam][me].power * 0.4 + weaponpower) - (humans[tcam][target].defense);
               if((Math.floor(Math.random()+ humans[cam][me].critlate - 0.05)) == 1){x += (humans[tcam][target].defense); x *= humans[cam][me].critdmg; log.textContent = '会心の一撃！'; await delay(1000);};
               if(buffhas(cam,me,'improve')){x *= 1.4;};
               x = Math.ceil(x);
               if(buffhas(cam,me,'LetsThrow')){x *= 2; buffremove(cam,me,'LetsThrow');};
               if(x < 0){x = 0}; if(x > humans[tcam][target].health){x = humans[tcam][target].health};humans[tcam][target].health -= x;if(humans[tcam][target].health < 0){humans[tcam][target].health = 0};
               tekiou();
               log.textContent = humans[tcam][target].name + 'に' + x + 'のダメージ!';
               humans[cam][me].cool += 5;
               if(humans[cam][me].cool > 100){humans[cam][me].cool = 100};if(humans[cam][me].cool == 100){document.getElementById('Skillbutton').innerHTML = `<button id="SkillCoolDown" class="button" onclick="skillReserve('${cam}','${me}')">skill</button>`;}else{document.getElementById("SkillCoolDown").textContent = humans[cam][me].cool + '%';};
               await delay(1000);
               if(humans[tcam][target].health <= 0){let result = await killed(cam,tcam,me,target);return result;}
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
            if(humans[tcam][target].health <= 0){let result = await killed(cam,tcam,me,target);return result;}
            break;
      }
   }   
};
//#endregion

//#region playerturn
function backtoplayerturn(){
   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('select1').textContent = 'attack';
   document.getElementById('select2').textContent = 'magic';
   document.getElementById('select3').textContent = 'tools';
   document.getElementById('back').textContent = 'pass';
   //errorcheck();
}
async function playerturn(cam,me){
   if(humans[cam][me].ns.process != undefined && (turncount % Skills.ns[humans[cam][me].ns].cool) == 0){
      await Skills[humans[cam][me].ns].process(cam,me);
      await delay(1000)
   };

   if(humans[cam][me].cool == 100){document.getElementById('Skillbutton').innerHTML = `<button id="SkillCoolDown" class="button" onclick="skillReserve('${cam}','${me}')">skill</button>`;}
 else{document.getElementById("SkillCoolDown").textContent = humans[cam][me].cool + '%';};

   phase = 1;
   log.textContent = 'あなたのターンです！';
   document.getElementById('sbuttons').innerHTML = `<button class="button" id="select1" onclick="select1(${me})">attack</button>  <button class="button" id="select2" onclick="select2(${me})">magic</button>  <button class="button" id="select3" onclick="select3(${me})">tools</button>  <button class="button" id="back" onclick="back(${me})">pass</button>`
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
         Slash('players',me,humans.players[me].slash1)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic1 !== 0){
         Magic('players',me,humans.players[me].magic1)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(humans.players[me].tool1){
         Tool('players',me,humans.players[me].tool1)
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
         Slash('players',me,humans.players[me].slash2)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic2 !== 0){
         Magic('players',me,humans.players[me].magic2)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(humans.players[me].tool2){
         Tool('players',me,humans.players[me].tool2)
      }else{
         log.textContent = 'you dont have tool...';
         window.setTimeout(backtoplayerturn, 1000)
      }
      
   }
}
async function select3(me){
   if (phase == 1) {
      log.textContent = '何を使う？';
      document.getElementById('select1').textContent = humans.players[me].tool1+' x'+Tools[humans.players[me].tool1].num;
      document.getElementById('select2').textContent = humans.players[me].tool2+' x'+Tools[humans.players[me].tool2].num;
      document.getElementById('select3').textContent = humans.players[me].tool3+' x'+Tools[humans.players[me].tool3].num;
      document.getElementById('back').textContent = 'back';
      phase = 4;
   } else if (phase == 2) {
      disappear()
      if(humans.players[me].slash3 !== 0){
         Slash('players',me,humans.players[me].slash3)
      }else{
         log.textContent = 'you dont have slash...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 3) {
      disappear()
      if(humans.players[me].magic3 !== 0){
         Magic('players',me,humans.players[me].magic3)
      }else{
         log.textContent = 'you dont have magic...';
         window.setTimeout(backtoplayerturn, 1000)
      }
   } else if (phase == 4) {
      disappear()
      if(humans.players[me].tool3){
         Tool('players',me,humans.players[me].tool3)
      }else{
         log.textContent = 'you dont have tool...';      
         window.setTimeout(backtoplayerturn, 1000)
      }
   }
}

function LetsTargetSelect(one){
   let code = one??1; //1:通常(1人) 2:選んだところと左右 3:選んだ陣営全体
   log.textContent = '誰を狙う？';
   return new Promise((resolve) => {
      let color = '#fff450';
      let pcolor = '#f7f7f7';

      let array = [];
      Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(a => array.push(`players${a}`));
      Object.keys(humans.enemies).filter(a => humans.enemies[a].status == 1).forEach(a => array.push(`enemies${a}`));

      let target = [];
      function handleClick(event) {
         let element = event.target;
         while(element && !array.includes(element.id)){
            element = element.parentElement;
         }
         if(!element){return};

         array.forEach(a => {
            document.getElementById(a).removeEventListener('click', handleClick);
            document.getElementById(a).style.backgroundColor = pcolor;
         });

         let num = +element.id.slice(7);
         let cam = element.id.slice(0, 7);
         target.push(num);
         target.push(cam);

         if(code == 2){
            let pnum = (humans[cam][num-1]?.status??0 == 1) ? num - 1 : null;
            let nnum = (humans[cam][num+1]?.status??0 == 1) ? num + 1 : null;
            let cams = [cam];if(pnum){cams.push(cam)};if(nnum){cams.push(cam)};
            target = [
               [num-1,num,num+1],
               cams
            ];
         }else if(code == 3){
            let nums = Object.keys(humans[cam]).filter(a => humans[cam][a].status == 1);
            let cams = Array(nums.length).fill(cam); //fillは全ての値を同じ値にするやつ。同数にするために使用されがち
            target = [
               nums,
               cams
            ];
         }

         console.log(`？？？「${target[1]}${target[0]}を狙います！」`);
         resolve(target);
      }

      array.forEach(a => {
         let element = document.getElementById(a);
         element.removeEventListener('click', handleClick)
         element.addEventListener('click', handleClick);
         element.style.backgroundColor = color;
      });
   });
}
 
//一個選択肢を戻るやつ
async function back(me){
   if(phase == 1){
      disappear();
      document.getElementById('BattleArea').style.display = 'none';
      document.getElementById('NowMap').style.display = 'block';
      
      draw()
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
async function Slash(cam,me,name){
   if(humans.players[me].mp >= Slashs[name].mp){
      target = await LetsTargetSelect();
      humans.players[me].mp -= Slashs[name].mp;tekiou();
      log.textContent = `${humans.players[me].name}の${Slashs[name].name}！`;await delay(1000);
      let result = await Slashs[name].process('players',target[1],me,target[0]);
      if(result == 'dead'){let results = await killed('players',target[1],me,target[0]);return results}
      NextTurnis('players',target[1],me,target[0]);
   }else{
      log.textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}
//#endregion
//#region playerの魔法
async function Magic(cam,me,name){
   if(humans.players[me].mp >= Magics[name].mp){
      target = await LetsTargetSelect();
      humans.players[me].mp -= Magics[name].mp;tekiou();
      let result = await Magics[name].process('players',target[1],me,target[0]);
      if(result == 'dead'){let results = await killed('players',target[1],me,target[0]);return results}
      NextTurnis('players',target[1],me,target[0]);
   }else{
      log.textContent = 'not enough mp...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}

//#endregion
//#region playerの道具
async function Tool(cam,me,UseTool){
   if(Tools[UseTool].num > 0){
      target = await LetsTargetSelect();
      log.textContent = humans.players[me].name + 'は'+Tools[UseTool].name+'を使用した!';await delay(1000);
      Tools[UseTool].num -= 1
      let result = await Tools[UseTool].process(cam,target[1],me,target[0]);
      if(result == 'dead'){let results = await killed(cam,target[1],me,target[0]);return results}
      NextTurnis(cam,target[1],me,target[0]);
   }else{
      log.textContent = 'not enough tool...';
      window.setTimeout(backtoplayerturn, 1000)
   }
}
//#endregion
//#region playerのskill
let Splithealth = 0;
let Splitmaxhealth = 0;
let clowngambling = ['0','0','2','2','2','4'];

// スキル予約関数
let skillQueue = [];
async function skillReserve(cam,me){
   if(humans[cam][me].cool == 100){
      x = humans[cam][me].ex;
      skillQueue.push({cam:cam,me:me,skill:x});
      skillReset(cam,me);
      console.log(`スキル予約済み: ${cam} ${me} -> ${x}  現在キューは次に表示します;`);
      console.log(skillQueue);

      if(phase > 0){
         let result = await skillAct(cam,me,x);
         skillQueue.shift();
         if(result == 'end'){return 'end';}
      }
   }else{
      NicoNicoText('まだクールダウン中ですわ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
   }
}
async function skillAct(cam,me,skill){
   let result = await Skills.ex[skill].process(cam,me);
   await delay(1000);
   return result;
}
function skillReset(cam,me){
   humans[cam][me].cool = 0;
   document.getElementById('Skillbutton').innerHTML = `<button id="SkillCoolDown" class="button" onclick="skillReserve('${cam}','${me}')"></button>`;
   document.getElementById("SkillCoolDown").textContent = humans[cam][me].cool + '%';
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
   humans[cam][me].cool = 0;
}
function turretPlace(cam){
   if(!document.getElementById(`${cam}t`)){
      let div = document.createElement('div');
      div.id = `${cam}t`;
      div.className = 'players'
      document.getElementById(cam).appendChild(div);
      humans[cam].t.kazu = 0;
      humans[cam].t.maxhealth = 0;
      humans[cam].t.health = 0;
   }
   humans[cam].t.status = 1;
   humans[cam].t.kazu += 1;
   humans[cam].t.maxhealth += 15;
   humans[cam].t.health += 15;
   humans[cam].t.name = `Turret x${humans[cam].t.kazu}`;
   tekiou()
   document.getElementById(`${cam}t`).style.display = 'block'
   document.getElementById(`${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
   humans[cam].t.status = 0;
   humans[cam].t.kazu -= 1;
   if(humans[cam].t.kazu <= 0){
      humans[cam].t.kazu = 0;
      humans[cam].t.maxhealth = 0;
      humans[cam].t.health = 0;
      document.getElementById(`${cam}t`).remove();
   }
}
function turretAllClear(){
   if(document.getElementById('playerst')){
      document.getElementById('playerst').remove();
      humans.players.t.kazu = 0;
      humans.players.t.status = 0;
   };
   if(document.getElementById('enemiest')){
      document.getElementById('enemiest').remove();
      humans.enemies.t.kazu = 0;
      humans.enemies.t.status = 0
   }
}
//#endregion

//#region charaのturn
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
      if(humans[cam][me].health <= 0){let result = killed(0,cam,0,me);if(result == 'end'){return 'end';}}
   
      for(const key in humans[cam][me].buffs){
         humans[cam][n].buffs[key].time -= 1; // -1する
         if (humans[cam][me].buffs[key].time <= 0){
            delete humans[cam][me].buffs[key]; // 0以下なら消し去る
         }
      }
      tekiou();
   }

   //強制スキルの動き
   while(skillQueue.length > 0){
      const nanka = skillQueue.shift(); // 先頭を消してその消したやつを処理する的な機構".shift()"
      let cam = nanka.cam;
      let me = nanka.me;
      let skill = nanka.skill;
      console.log(`${cam}${me} のスキル:"${skill}"を発動!`);
      log.textContent = `${humans[cam][me].name}は"${Skills.ex[skill].name}"を発動した！！`;await delay(1000);
      let result = await skillAct(cam,me,skill);
      if(result == 'end'){return 'end';}
   }

   //こっから次のターン行く動き　ここでこの人のターンは終わるって感じだね
   acted += 1;
   if(acted < bar.num.length){
   }else{
      let cams = 0;
      if(humans.players['t'].kazu > 0){
         log.textContent = '我らのturretの攻撃!';
         await delay(1000);
         cams = 'players';
         let selected = ShallTargetSelect('players','t',`ehpl`,0);
         let tcams = selected[1];let targets = selected[0];
         console.log(`attack:${humans[cams]['t'].attack} power:${humans[cams]['t'].power} kazu:${humans[cams]['t'].kazu} defense:${humans[tcams][targets].defense} shell:${humans[tcams][targets].shell}`);
         x = Math.ceil(humans[cams]['t'].attack * humans[cams]['t'].power * humans[cams]['t'].kazu) - Math.ceil(humans[tcams][targets].defense*humans[tcams][targets].shell);
         if(x < 0){x = 0};if(x > humans[tcams][targets].health){x = humans[tcams][targets].health};
         humans[tcams][targets].health -= x;tekiou();
         log.textContent = `${humans[tcams][targets].name}に${x}のダメージ！`;
         if(humans[tcams][targets].health <= 0){let result = killed(cams,tcams,1,targets);if(result == 'end'){return 'end';}};
         await delay(1000);
      }
      if(humans.enemies['t'].kazu > 0 && x == false){
         log.textContent = '敵のturretの攻撃!';
         await delay(1000);
         cams = 'enemies';
         let selected = ShallTargetSelect('enemies','t',`phpl`,0);
         let tcams = selected[1];let targets = selected[0];
         x = Math.ceil(humans[cams]['t'].attack * humans[cams]['t'].kazu) - Math.ceil(humans[tcams][targets].defense*humans[tcams][targets].shell);
         if(x < 0){x = 0};if(x > humans[tcams][targets].health){x = humans[tcams][targets].health};
         humans[tcams][targets].health -= x;tekiou();
         log.textContent = `${humans[tcams][targets].name}に${x}のダメージ！`;
         if(humans[tcams][targets].health <= 0){let result = killed(cams,tcams,1,targets);if(result == 'end'){return 'end';}};
         await delay(1000);
      }

      turncount += 1;
      const combined = [...Object.values(humans.players).filter(a => a.status === 1 && a.health > 0 && a.num !== 't'), ...Object.values(humans.enemies)].filter(b => b.status === 1 && b.health > 0)// オブジェクトをリストに変換して合体
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
      console.log(`〜〜〜〜〜〜${turncount}ターン目〜〜〜〜〜〜`); //あとはskill系とmagicもて加えてって 今skill系着工中 todolistをみんな見れる形にするみたいにしたいね
   } 

   nowturn = bar.num[acted];
   cam = bar.cam[acted]

   console.log('現在、'+cam+'の'+nowturn+'さんのターンですわ〜');

   if(nowturn == 't'){
      console.log('って、turretやないか〜〜〜い')
      return NextTurnis(0)
   }

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
   console.log(cam+''+nowturn+'、動きます！');

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
      selected = ShallTargetSelect(cam,me,'phpl',0);
      let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
      if(result == 'end'){let results = killed(cam,selected[1],me,selected[0]);if(results == 'end'){return result;}}
   }
   NextTurnis(cam,selected[1],me,selected[0]);
}
function ShallTargetSelect(cam,me,code,both){//これは敵しか使わないターゲットセレクト。だから陣営とかは考えんでいいよ
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         x = [me,me-1,me-2,me+1,me+2].find(n => playerstatus.num.includes(n))||1;
         if(!x){return 'end'}
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
         if(!x){return 'end'}
         ret.push(x);
         break;

      //enemies
      case 'er':
         x = enemystatus.health[Math.floor(Math.random() * enemystatus.length)]
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
         if(!x){return 'end'}
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
   console.log(`${cam}${me}「${ret[1]}の${ret[0]}を狙います！」`);
   return ret;
}
//#endregion

//#region 勝利/負けの動き
async function killed(cam,tcam,me,target){//殺った側cam,meと殺された側tcam,target
   humans[tcam][target].health = 0;
   humans[tcam][target].status = 2;
   buffclear(tcam,target);tekiou();
   
   if(target == 't'){turretBreak(tcam)};//turretだった場合はkazuも減らすのです

   let karix = bar.cam.map((Cam, Num) => Cam === 'p' && bar.num[Num] === 2 ? Num : -1).filter(Num => Num !== -1);
   bar.cam.splice(karix,1);bar.num.splice(karix,1);
   
   //クエストの動
   Object.keys(Quests).filter(a => Quests[a].type == 'k' && Quests[a].term.includes(0) || Quests[a].term.includes(stage) && tcam == 'enemies').forEach(nanka => {
      Quests[nanka].acted += 1;
      if(Quests[nanka].acted >= Quests[nanka].act){
         Quests[nanka].acted = Quests[nanka].act;
         Quests[nanka].type =  '';
      }
   })

   //あれ、もしかして全滅しちゃった？な動
   let result = await killedCheck();
   return result;
}
async function killedCheck(){
   let karix = false;
   karix = [1, 2, 3, 4].every(id => {
      let Enemy = humans.enemies[id];
      return Enemy.status == 0 || Enemy.status == 2;//0か2ならOKってこと。everyは全会一致だからね
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
      objMap[MAPy][MAPx] = 0;//戦利品的な何かにしてもいいかも..いやなし
      draw()
      AllowMove = 0;
      return 'end';
   }else{
      karix = false;
      karix = [1,2,3,4].every(id => {
         let Player = humans.players[id];
         return Player.status == 0 || Player.status == 2;
      })
      if(karix){
         let saydefeats = [`${humans.players[1].name}は力尽きた...残念でしたね！にはははは〜！`,'残念だったね!すごい惜しかったね!!','あ、あれ..？もう負けちゃったんですか....？','ほら、負けを認めてください？'];
         if(humans.players[1].level < 3){saydefeats = ['あはは..負けちゃいましたね....防御力を上げると楽ですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!','あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!','あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];}
         log.textContent = arraySelect(saydefeats);
         await delay(2000);
         Object.keys(humans.players).filter(a => humans.players[a].status == 1||humans.players[a].status == 2).forEach(nanka => {
            humans.players[nanka].status = 1;
            humans.players[nanka].health = Math.floor(humans.players[nanka].maxhealth*0.5);
         })
         tekiou();
         bossbattlenow = 0;
         floor = 0;GoNextFloor();

         document.getElementById('BattleArea').style.display = 'none';
         document.getElementById('NowMap').style.display = 'block';

         MAPx = Math.floor(SELECTx / 75);
         MAPy = Math.floor(SELECTy / 75);
         draw()
         AllowMove = 0;
         log.textContent = '';
         return 'end';
      }else{
         return 'continue';
      }
   }
}   
async function EnemyAppear(){
   AllowMove = 1;
   document.getElementById('NowMap').style.display = 'none';
   document.getElementById('BattleArea').style.display = 'block';
   document.getElementById('select1').textContent = ' ';
   document.getElementById('select2').textContent = ' ';
   document.getElementById('select3').textContent = ' ';
   document.getElementById('back').textContent = ' ';
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown" class="button"></button>'

   //前までのやつの処理
   await turretAllClear();
   enemy50pursuitenelgy = 1;

   x = Object.keys(humans.players).filter(a => humans.players[a].status == 1 || humans.players[a].status == 2).length;
   for(i = 1; i < x+1; i++){
      let num = i-1;
      document.getElementById(`players${i}`).style.display = 'block';
      document.getElementById(`players${i}`).style.backgroundColor = '#f7f7f7';
      humans.players[i].status = 1;
      tekiou();
   }
   x = [1,1,1,1,2,2,3]
   x = x[Math.floor(Math.random() * x.length)];
   for(i = 1; i < x+1; i++){
      let num = i-1;console.log(num);
      document.getElementById(`enemies${i}`).style.display = 'block';
      document.getElementById(`enemies${i}`).style.backgroundColor = '#f7f7f7';
      humans.enemies[i].status = 1;
      humans.enemies[i].level = enemylv + Math.floor(Math.random() * 7)-3;if(humans.enemies[i].level < 1){humans.enemies[i].level = 1;}
      humans.enemies[i].name = DesideEnemyName(i);
      if(humans.enemies[i].prefixe){document.getElementById(`enemies${i}`).style.backgroundColor = '#fefaff';}//ちょい強敵ってことね
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
   document.getElementById('Skillbutton').innerHTML = '<button id="SkillCoolDown"  class="button"></button>'
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
   objMap[MAPy][MAPx] = 4;
   draw()
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
 

  function skillshopcreateCard(item){
   const card = document.createElement('div');
   card.classList.add('card');
   
   const titleText = document.createElement('span');
   titleText.classList.add('card-titletext');
   titleText.innerHTML = `${item.type}   ${item.name}<br>価格: ${item.price}€<br>${item.description}<br>`;
   card.appendChild(titleText);
   
   const buyButton = document.createElement('button');
   buyButton.classList.add('button');
   buyButton.classList.add('card-buy');
   buyButton.setAttribute('onclick', `BuyItem('${item.type}','${item.id}','${item.name}','${item.price}')`);
   buyButton.textContent = 'Buy';
   card.appendChild(buyButton);
   
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
   const selectedItems = arrayShuffle(Allskill).slice(0, 6);
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
   objMap[MAPy][MAPx] = 0;
   draw()
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
let Events = {
   'candystand':{
      id:'candystand',
      name:'あめ置き場',
      happend:0,
      process:async function(){
         let candynum = Math.floor(Math.random() * 20) + 1;
         if(candybar.includes(candynum)){candynum = 2}
       else{candybar.push(candynum);candynum = 1};
         log.textContent = 'あめを食べた..';await delay(500);
         
         let changeyousos = [
            ['attack','defense','maxhealth'],
            ['攻撃力','防御力','体力'],
            [Math.floor(Math.random()*4)+2,Math.floor(Math.random()*4)+2,Math.floor(Math.random()*10)+5]
         ];

         if(Math.floor(Math.random()*3) == 0){
            let numm = Math.floor(Math.random()*3);
            humans.players[1][changeyousos[0][numm]] += changeyousos[2][numm];
            log.textContent = changeyousos[1][numm]+'が上がった！';
         }else{
            let numm = Math.floor(Math.random()*3);
            humans.players[1][changeyousos[0][numm]] -= changeyousos[2][numm];
            log.textContent = changeyousos[1][numm]+'が下がった！';
         }
      }
   }
};
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
   objMap[MAPy][MAPx] = 0;
   draw()
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
         x = arraySelect(inchestTool);
         Tools[x].num += 1;
         log.textContent = Tools[x].name+'を手に入れた！';
         await delay(750);
      }
   break;
   case 2:
      log.textContent = 'チェストを開けた...';
      await delay(1000);
      for(let i = 0; i < 3; i++){
         x = arraySelect(inchestRareTool);
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
   objMap[MAPy][MAPx] = 0;
   draw()
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
   objMap[MAPy][MAPx] = 0;
   draw()
   AllowMove = 0;
}
// #endregion
//#region placebomb
const explosion1 = new Image();
explosion1.src = 'assets/effects/explosion_1.png';
const explosion2 = new Image();
explosion2.src = 'assets/effects/explosion_2.png';
const explosion3 = new Image();
explosion3.src = 'assets/effects/explosion_3.png';

let bombtimer = 0;
let PlacedBombx = 0;
let PlacedBomby = 0;

async function placebomb(){
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objMap[MAPy][MAPx] = 15;
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
      objMap[MAPy][MAPx] = 0;
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
   objMap[MAPy][MAPx] = 0;
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
   objMap[MAPy][MAPx] = 0;
   draw()
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
   objMap[MAPy][MAPx] = 0;
   draw()
   AllowMove = 0;
}
// #endregion      

