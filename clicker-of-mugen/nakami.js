//#region 探索部分
const overfieldArea = document.querySelector('#overfieldArea')
const NowMap = document.getElementById('NowMap');

const ctx = NowMap.getContext('2d');
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
   'charas':['greenslime','mechanic','clown','magodituono','wretch'],
   'system':['star1','star2','star3'],
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

let speed = 5;
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
// NowMap.addEventListener('click', (event) => {
//    if(AllowMove == 0 && dungeonnow == 1){
//       const rect = NowMap.getBoundingClientRect();
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
      if(MAPy >= 0 && MAPy < objMap.length && MAPx >= 0 && MAPx < objMap[MAPy].length){
         NanigaOkirukana[objMap[MAPy][MAPx]].process();
      }
      draw()
      }
   }
   if(event.key == 'e' && document.querySelector('#overfieldArea').style.display == 'block'){
      if(AllowMove == 0){
         AllowMove = 1;
         phase = 'null'
         window.setTimeout(inventoryOpen,200)
      }else{
         AllowMove = 0;
         phase = 1
         window.setTimeout(inventoryClose,200)
   }}else if(event.key == 'g' && document.querySelector('#overfieldArea').style.display == 'block'){
      testEnemyAppear();
   }
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
         document.querySelector('#overfieldArea').style.display = 'none';
         document.querySelector('#eventArea').style.display = 'block';
         document.querySelector('#eventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
         log.textContent = '休憩できそうな場所を見つけた！';
         Camprestper = (Math.floor(Math.random() * 4)+3)/10;
         document.querySelector('#CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
         switch(Math.floor(Math.random() * 3)+1){
            case 1:
            if(Math.floor(Math.random() * 3)+1){
                  y = 10;document.querySelector('#CampTrade').textContent = '放浪武器商人に話しかける';
            }else{  y = 1; document.querySelector('#CampTrade').textContent = '武器商人に話しかける';}
            break;
            case 2: y = 2; document.querySelector('#CampTrade').textContent = '防具取扱専門家に話しかける'; break;
            case 3: y = 3; document.querySelector('#CampTrade').textContent = '道具屋24に話しかける'; break;
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
let t = 't';

let fun = Math.floor(Math.random() * 100)+1;

//保存されるデータs
let username = 'no name';
let rank = 1;
let rpt = 0;
let maxrpt = 100;
let stone = 0;
let bankstone = 0;

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

//移したら消しといて
let enemynames = ["彷徨わない亡霊", "地上の月兎", "悠々自適なクラス委員", "大胆不敵な問題児", "兎角のシルバージャグラー", "デスブリンガー・ナース",//草原
                  "ついに動いたサボテン","スフィンクスの残像","襲来セシ砂嵐","サソリ風ザリガニ","毒無しのガラガラヘビ","裏切りのアリジゴク",//昼砂漠
                  "ピンクな先輩", "ブルーな後輩", "過激派のハッカー", "反旗を翻したアンドロイド", "腐敗した落武者", "アスピリン中毒者",//夜砂漠
                  "†古書館の魔術師†", "トラブルメーカーな天才少女","黒服","無邪気な夜の希望"];//学校(ここだけブルアカにしましょ
let bossenemynames = ['purpleslime','steampumker','RailwayGun "Shemata"','joker']//RailwayGun "Shemata"...wwあ、列車砲シェマタね 対策委員会が壊そうとしてたやつ


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

// ダブルタップによる拡大を禁止
// ダブルタップ完全無効 100%ブロックにしてしまう
var time = 0;
document.addEventListener('touchend', function (e) {
    e.preventDefault();

    console.log("preventDefault");
    var now = new Date().getTime();
    if ((now - time) < 350) {
        e.preventDefault();
    }
    time = now;
}, true);

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
         //...あれ？これ読まれたらやばくね？..まあ....いいか！！！！直接的な表現無いしだいじょぶっしょ、多分 え？なんのことかわからないって？ならdiscordのなんか..なんか。のkoppekun-uraを見るといい！！！！え？見れないって？ふっふっふ..ざまぁ(可愛くてごめん風)
   
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
   }
}

let turn = ['players', 1];//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か

let Charas = {
   'wretch':{
      id:'wretch',
      name:'持たざる者',
      description:'持たざる者。何もないが、何でもあるとも言える。<br>平均的で普遍的。普通の凡才でただの人間。',
      ex:'null',
      ns:'null',
      ps:'null',
      attack:20,
      defense:0,
      mattack:10,
      mdefense:0,
      maxhealth:100,
      maxmp:50,
      critlate:5,
      critdmg:1.5,
      critresist:0,
      speed:50,
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
      critresist:'absolute',
      speed:35,
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
      maxhealth:25,
      maxmp:30,
      critlate:7,
      critdmg:2.0,
      critresist:0,
      speed:65,
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
      critlate:9,
      critdmg:3.0,//...ちょまってこれ大丈夫かな
      critresist:10,
      speed:40,
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
      critlate:5,
      critdmg:2.0,
      critresist:5,
      speed:60,
      buttonsolid:'#7f1184',
      buttonback:'#5f4894',
   },
}

let Friends = {
   '飛花レイル':{
      ruby:'ひか れいる',
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
      ruby:'はばから れいる',
      name:'憚羅レイル',
      rare:3
   },
   '泡沫アリア':{
      ruby:'うたかた ありあ',
      name:'泡沫アリア',
      belongto:'',
      rare:2,
      description:``, 
      comment:``,
      N:0,
      S:0,
      E:0,
      P:0,
   },
   'メメント・ラメント':{
      ruby:'めめんと らめんと',
      name:'メメント・ラメント',
      rare:3
   },

   '小安見ニーク':{
      ruby:'おやすみ にーく',
      name:'小安見ニーク',
      rare:3,
   },
   '面戸ガリヤ':{
      ruby:'めんど がりや',
      name:'面戸ガリヤ',
      rare: 2,
   },
   '伊辣キキ':{
      ruby:'いらつ きき',
      name:'伊辣キキ',
      rare: 2,
   },

   '息留河鹿':{
      ruby:'いきる かしか',
      name:'息留 河鹿',
      rare: 1
   },
   'ジャンネ マジデ':{
      ruby:'じゃんね まじで',
      name:'ジャンネ マジデ',
      rare:1
   },
   '手斧バス':{
      ruby:'ておの ばす',
      name:'手斧バス',
      rare:1
   },

   '久須田和伊男':{
      ruby:'くすた わいお',
      name:'久須田 和伊男',
      rare:1,
   },
   'ゴードン・ソージィ':{
      ruby:'ごーどん そーじぃ',
      name:'ゴードン・ソージィ',
      rare:3
   }
}

let Effects = {
   buffs:{
      'powerup':{
         name:'powerup',
         type:'buffs',
         kind:'turn',
         addable:true,
         img:'power',
         description:'攻撃倍率が上がる。やったね！',
      },
      'shellup':{
         name:'shellup',
         type:'buffs',
         kind:'turn',
         addable:true,
         img:'shell',
         description:'防御倍率が上がる。あんまり実感しづらい。',
      },
      'luck':{
         name:'luck',
         type:'buffs',
         kind:'turn',
         addable:false,
         img:'luck',
         description:'ターン終了時、1/6の確率でもう一回行動できる。<br>願うと起きやすいです',
         effect:false
      },
      'luck_great':{
         name:'luck_great',
         type:'buffs',
         kind:'turn',
         addable:false,
         img:'luck',
         description:'ターン終了時、1/3の確率でもう一回行動できる。<br>気分はさながらラスボスですね',
         effect:false
      },
      'disappear':{
         name:'disappear',
         type:'buffs',
         kind:'turn',
         addable:false,
         img:'disappear',
         description:'姿を消し、攻撃を受けなくなる。<br>しかし範囲攻撃はちゃんと当たる。',
      },
      'cheerup':{
         name:'cheerup',
         type:'buffs',
         kind:'turn',
         addable:false,
         img:'cheerup',
         description:'応援されている状態。攻撃力と速度が上がり会心率が下がる。<br>ちょっと緊張しちゃうよね、わかる',
         effect:{
            'power':1.0,
            'speed':20.0,
            'crit':-5.0
         }
      }
   },
   debuffs:{
      'powerdown':{
         name:'powerdown',
         type:'debuffs',
         kind:'turn',
         addable:true,
         img:'power',
         description:'攻撃力が下がる。stackするようにしたいけどまあいっか',
      },
      'shelldown':{
         name:'shelldown',
         type:'debuffs',
         kind:'turn',
         addable:true,
         img:'shell',
         description:'防御力が下がる。こっちは実感しやすいのよね',
      },
      'poison':{
         name:'poison',
         type:'debuffs',
         kind:'turn',
         addable:false,
         img:'poison',
         description:'ターン終了時割合で防御貫通ダメージ。<br>毒の苦しみもお好きなんですね',
         //ターン終了時体力のx%のダメージ
         effect:{
            'poison':0.05 //"毒ダメージ"として5%削れる
         }
      },
      'blood':{
         name:'blood',
         type:'debuffs',
         kind:'turn',
         addable:false,
         img:'blood',
         description:'ターン終了時固定ダメージ、徐々に増加。<br>増加率は"2倍"<br>そのままにしとくと普通に死にます',
         //ターン終了時xダメージ
         effect:{
            'blood':2
         }
      },
      'burn':{
         name:'burn',
         type:'debuffs',
         kind:'turn',
         addable:false,
         img:'burn',
         description:'ターン終了時固定ダメージ。ついでに攻撃力低下。<br>まじでこれ嫌い...ww',
         //ターン終了時xダメージ
         effect:{
            'burn':10,
            'attack':-3
         }
      },
      'injury':{
         name:'injury',
         type:'debuffs',
         kind:'turn',
         addable:false,
         img:'injury',
         description:'行動時固定ダメージ。<br>連続行動ビルドに大打撃',
         //ターン終了時xダメージ
         effect:{
            'injury':12
         }
      }
   },
   handles:{
      'freeze':{
         name:'freeze',
         type:'handles',
         kind:'turn',
         addable:false,
         img:'freeze',
         description:'凍っている状態。これ燃やされたら解除みたいにしたい',
         //1/xの確率で解除
      },
      'palsy':{
         name:'palsy',
         type:'handles',
         kind:'turn',
         addable:false,
         img:'palsy',
         description:'麻痺ですね。これ好き',
         //1/xの確率で行動不可
      },
      'stan':{
         name:'stan',
         type:'handles',
         kind:'turn',
         addable:false,
         img:'stan',
         description:'スタンなうです。おつおつお〜',
      },
      'skip':{
         name:'skip',
         type:'handles',
         kind:'turn',
         addable:false,
         img:'skip',
         description:'はいお前スキップ〜〜ww状態です。ぴえん超えてだっさぁ',
      },
      'sleep':{
         name:'sleep',
         type:'handles',
         kind:'turn',
         addable:false,
         img:'sleep',
         description:'睡眠ですね...いやね....ちょ..っと......w',
         //あーーもうやります！！そのうち！！！あの人を作りましょう！！！www いや大丈夫かな...?まあいっか、戦略性あっておもろいしょ、多分
      },
      'anger':{
         name:'anger',
         type:'handles',
         kind:'stack',
         addable:false,
         img:'anger',
         description:'すごいイラつかせてくる敵..だからメガさんとかと相性良さそう<br>で避けられてさらに煽られるみたいな',
         lv:{//殴りかかる確率
            1:0.1,
            2:0.25,
            3:0.5,
         }
      }
   },
   uniques:{
      'onslime':{
         name:'onslime',
         type:'uniques',
         kind:'turn',
         addable:false,
         img:'onslime',
         description:'スライムが体に粘りついている状態です。やばいね(行動不可)',
         lv:{
            1:1,
         }
      },
      'stickyslime':{
         name:'stickyslime',
         type:'uniques',
         kind:'turn',
         addable:false,
         img:'stickyslime',
         description:'スライムがくっついているおかげで行動するとダメージを受けます',
         //行動時ダメージ(固定)
      },
      'letsthrow':{
         name:'letsthrow',
         type:'uniques',
         kind:'turn',
         addable:false,
         img:'wrench',
         description:'レンチを投げる準備をしている状態。次の攻撃与ダメ2倍',
      },
      'gambling':{
         name:'gambling',
         type:'uniques',
         kind:'turn',
         addable:false,
         img:'gamble',
         description:'次の攻撃が0,2,4倍になる。これぞ醍醐味..ってやつ？',
      },
   }
}

let Slashs = {
   'slash':{
      id:'slash',
      name:'シンプル斬り',
      description:'必中ー倍単体刹那斬', //そのうち武士作ってこれ作りたい
      mp:0,
      lv:1,
      tcam:'players',
      process:async function(cam,me,tcam,target){
         let result = await humandamaged(cam,me,tcam,target,1,'sh',1);
         if(result == 'dead'){return 'dead';}

         if(humans[cam][me].ps == 'sthree' && Math.floor(Math.random() * 4) == 0){//1/4
            log.textContent = humans[cam][me].name+'は頑張った!';
            await delay(500)
            result = await humandamaged(cam,me,tcam,target,1,'sh',1);
            if(result == 'dead'){return 'dead';}
            result = await humandamaged(cam,me,tcam,target,1,'sh',1);
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
      process:async function(cam,me,tcam,target){
         if(Math.floor(Math.random() * 3) == 0){
            log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
         }else{
            let result = await humandamaged(cam,me,tcam,target,1,'sh',2);
            if(result == 'dead'){return 'dead';}
         }
         if(Math.floor(Math.random() * 3) == 0){
            log.textContent = 'miss! ダメージを与えられない!';await delay(1000);
         }else{
            let result = await humandamaged(cam,me,tcam,target,1,'sh',2);
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
      process:async function(cam,me,tcam,target){
         x = Math.floor(Math.random() * 1); // 1/3です
         if(humans[cam][me].ps == 'highsol'){x = Math.floor(Math.random() * 5);}; // 1/5です。
         if(x == 0){
            let result = await humandamaged(cam,me,tcam,target,3,'sh',3);
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
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はpowerを唱えた!';await delay(1000);
         await buffadd(tcam,target,'powerup','turn',3,1);
         return 'alive';
      }
   },
   'shell':{
      id:'shell',
      name:'shell',
      description:'防御力が1.25倍になります！実感あんまりないけど..',
      mp:5,
      lv:1,
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はshellを唱えた!';await delay(1000);
         await buffadd(tcam,target,'shellup','turn',3,1);
         return 'alive';
      }
   },
   'poison':{
      id:'poison',
      name:'poison',
      description:'相手を毒にします！わーい！！',
      mp:7,
      lv:3,
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はpoisonを唱えた!';await delay(1000);
         await buffadd(tcam,target,'poison','turn',4,1);
         return 'alive';
      }
   },
   'thunder':{
      id:'thunder',
      name:'thunder',
      description:'牽制に使われがち。吹っ飛び率は低め。(雷の小ダメージ)',
      mp:3,
      lv:4,
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はthunderを唱えた!!';await delay(1000);
         let result = await humandamaged(cam,me,tcam,target,0.7,'mg',4);//雷
         return result;
      }
   },
   'fire':{
      id:'fire',
      name:'ふぁいあ',
      description:'ひらがな大好きさ(炎の小ダメージ)',
      mp:4,
      lv:4,
      process:async function(cam,me,tcam,target){
         log.textContent = `${humans[cam].name}はfireを唱えた！`;await delay(1000);
         let result = await humandamaged(cam,me,tcam,target,1.1,'mg',2);//火
         await buffadd(tcam,target,'burn','turn',2,1);
         return result
      }
   },
   'healerthan':{
      id:'healerthan',
      name:'healer than',
      description:'体力を40%回復します。healよりも強い。だから比較のthanなんですね〜',
      mp:8,
      lv:6,
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'luck','turn',4,1);
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
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はellthunderを唱えた!';await delay(1000);
         humandamaged(cam,me,tcam,target,1.2,'mg',4);//雷
         return 'alive'
      }
   },
   'morepower':{
      id:'morepower',
      name:'more power',
      description:'攻撃力が1.5倍になります。power使ってた人いるんかな',
      mp:8,
      lv:9,
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'powerup','turn',3,2)
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
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'shellup','turn',3,2)
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
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'poison','turn',5,2);
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
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はgiga fireを唱えた!';await delay(1000);
         let result = await humandamaged(cam,me,tcam,target,2.3,'mg',2);//火
         await buffadd(tcam,target,'burn','turn',2,2);
         return result
      }
   },
   'thehealest':{
      id:'thehealest',
      name:'the healest',
      description:'60%回復。これ以上はない、っていう意味ですね。xyzじゃないよ',
      mp:12,
      lv:12,
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'luck','turn',5,2);
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
      process:async function(cam,me,tcam,target){
         log.textContent = humans[cam][me].name + 'はメラゾーマを唱えた!';
         await delay(1000);
         let result = await humandamaged(cam,me,tcam,target,3.5,'mg',4);//雷
         await buffadd(tcam,target,'burn','turn',3,2);
         return result
      }
   },
   'thoron':{
      id:'thoron',
      name:'Thoron',
      description:'当たったらラッキー、シールドでされたら空前で追撃なつよつよ技。<br>けどギガサンダーの方が好き(雷の大ダメージ)',
      mp:20,
      lv:15,
      process:async function(cam,me,tcam,target){
         log.textContent = 'トロン！！！';await delay(1000);//byルフレ
         let result = await humandamaged(cam,me,tcam,target,6,'mg',4);//雷
         return result
      }
   },
   'random':{
      id:'random',
      name:'Random',
      description:'自身が覚えてる魔法からランダム(mpは5固定)。これぞ醍醐味ってやつよな',
      mp:5,
      lv:1,
      process:async function(cam,me,tcam,target){
         log.textContent = 'randomを唱えた.......';await delay(1000);
         x = Object.keys(Magics).map(a => Magics[a].lv <= humans[cam][me].level ? Magics[a].name : null).filter(Boolean)
         y = Math.floor(Math.random() * x.length);
         log.textContent = x[y]+'が出た！';await delay(1000);
         x[y](cam,me,tcam,target);
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
      ap:0,
      ce:0,
   },
   'woodenstick':{
      name:'木の棒',
      id:'woodstick',
      num:0,
      power:2,
      price:10,
      description:'初期装備あるあるの武器。値段に見合わず割と強い',
      buyable:1,//購入可能かどうか
      ap:0,
      ce:0,
      
   },
   'woodensword':{
      name:'木刀',
      id:'woodsword',
      num:0,
      power:4,
      price:20,
      description:'木の棒よりも強い。言うなれば気の剣。',
      buyable:1,
      ap:0,
      ce:0,
   },
   'bamboosword':{
      name:'竹刀',
      id:'bamboosword',
      num:0,
      power:6,
      price:30,
      description:'さあ、剣道しようぜ！！',
      buyable:1,
      ap:0,
      ce:0,
   },
   'stone':{
      name:'石ころ',
      id:'stone',
      num:0,
      power:8,
      price:50,
      description:'石です。よわよわ',
      buyable:1,
      ap:0,
      ce:0,
   },
   'bigrock':{
      name:'大きな石',
      id:'bigrock',
      num:0,
      power:10,
      price:80,
      description:'岩です。つよつよ',
      buyable:1,
      ap:0,
      ce:0,
   },
   'brick':{
      name:'レンガ',
      id:'brick',
      num:0,
      power:12,
      price:100,
      description:'岩にセメントつけたら強くなるのって意味わからなくね？',
      buyable:1,
      ap:0,
      ce:0,
   },
   'thinpaper':{
      name:'薄めの紙',
      id:'thinpaper',
      num:0,
      power:20,
      price:5,
      description:'薄い紙です。すって相手に切り付けて｢いたっ..｣ってさせる用です',
      buyable:1,
      ap:0,
      ce:1,
      combatEffect:{ //攻撃前の効果
         critlate: 70,
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
      ap:0,
      ce:0,
   },
   'scissors':{
      name:'はさみ',
      id:'scissors',
      num:0,
      power:25,
      price:200,
      description:'持って｢近づいたら*すよ..?｣っていう用。実際*せない',
      buyable:1,
      ap:0,
      ce:1,
      combatEffect:{
         critdmg: 4.0,
      }
   },
   'knife':{
      name:'ほんもののナイフ',
      id:'knife',
      num:0,
      power:40,
      price:300,
      description:'つよつよ武器。花や骨に向かって振り回しましょう',
      buyable:1,
      ap:0,
      ce:1,
      combatEffect:{
         critlate: 10,
      }
   },

   'blooddagger':{
      name:'ジェン・ソルテ',
      id:'blooddagger',
      num:0,
      power:0,
      price:150,
      description:'名前意味わからんランキング第1位。<br>攻撃時相手の体力を吸い回復する。<br>変換効率は80%..水力発電と同じくらい',
      buyable:1,
      ap:1,
      afterProcess:async function(cam,me,tcam,target,rate,kind,attributes,damage){
         x = (damage * 0.80).toFixed(0);
         humans[cam][me].health += x;
         if(humans[cam][me].health > humans[cam][me].maxhealth){humans[cam][me].health = humans[cam][me].maxhealth;}
         addtext('血を吸った！');
         tekiou();
         addtext(`体力が${x}回復した!`);
         return 'alive';
      },
      ce:0,
   },
   'timeontarget':{
      name:'time on target',
      id:'timeontarget',
      num:0,
      power:10,
      price:150,
      description:'ナギサ様の手好き',
      buyable:1,
      ap:1,
      afterProcess:async function(cam,me,tcam,target,rate,kind,attributes,damage){
         addtext(arraySelect(['トリニティの砲撃術は優秀ですから。','お口に合うと良いのですが..']));
         let result = await humandamaged(cam,me,tcam,target,0.4,kind,['unpursuit']);
         if(result == 'end'){return 'end';}
         await buffadd(tcam,target,'shelldown','turn',3,1);
         return 'alive';
      },
      ce:0,
   },
   'biggamble':{
      name:'大博打',
      id:'biggamble',
      num:0,
      power:0,
      price:150,
      description:'大勝負..ってやつ？まじで賭け。がんばえ',
      buyable:1,
      ap:0,
      ce:1,
      combatEffect:{
         attack: Math.floor(Math.random()*100)+1,
      }
   },
   'contrarian':{
      name:'天邪鬼',
      id:'contrarian',
      num:0,
      power:80,
      price:150,
      description:'名前変更予定。',
      buyable:0,
      ap:0,
      ce:1,
      combatEffect:{
         critlate: 60
      }
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
      id:'aspirin',
      name:'アスピリン',
      price:20,
      description:'頭痛薬らしいですね、これ。痛み止め薬とか耐えればいらんくね？とかいったら炎上するかな',
      num:5,
      process:async function(cam,me,tcam,target){
         await addtext(`おや、頭が痛いって？痛みに効くのはアスピリン！`);
         x = Math.round(humans[tcam][target].maxhealth * 0.2);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         tekiou()
         await addtext(`体力が${x}回復した!`);
         return 'alive';
      }
   },
   'pablon':{
      name:'パブロン',
      id:'pablon',
      price:40,
      description:'風邪薬。大人とか向けらしいね',
      num:2,
      process:async function(cam,me,tcam,target){
         await addtext(`早めのパブロン♪`);
         x = Math.round(humans[tcam][target].maxhealth * 0.4);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         tekiou();
         await addtext(`体力が${x}回復した!`);
         return 'alive';
      }
   },
   'trypsin':{
      name:'トリプシン',
      id:'trypsin',
      price:60,
      description:'タンパク質を分解し、アミノ酸にする働きのある消化酵素。所属事務所は膵臓。',
      num:0,
      process:async function(cam,me,tcam,target){
         await addtext(`トリプシンを飲んだ！！え？これは薬じゃないって？`);
         x = Math.round(humans[tcam][target].maxhealth * 0.6);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         tekiou();
         await addtext(`体力が${x}回復した!`);
         return 'alive';
      }
   },
   'lulu':{
      name:'ルル',
      id:'lulu',
      price:80,
      description:'sick sickな頭痛薬。毒が流るルルですね。',
      num:0,
      process:async function(cam,me,tcam,target){
         await addtext(`求愛性 孤独 ドク 流るルル♪`)
         x = Math.round(humans[tcam][target].maxhealth * 0.8);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         tekiou();
         await addtext(`体力が${x}回復した!`);
         return 'alive';
      }
   },
   'potion':{
      name:'魔法薬',
      id:'potion',
      price:100,
      description:'投げつけたい。敵に',
      num:0,
      process:async function(cam,me,tcam,target){
         await addtext(`なんか一番しょうもないよね、これ<br>あ、全回復です`)
         x = Math.round(humans[tcam][target].maxhealth);
         if((x + humans[tcam][target].health) > humans[tcam][target].maxhealth){x = humans[tcam][target].maxhealth - humans[tcam][target].health;};
         humans[tcam][target].health += x;
         tekiou();
         await addtext(`体力が${x}回復した!`);
         return 'alive';
      }
   },
   'throwknife':{
      name:'投げナイフ',
      id:'throwknife',
      price:20,
      description:'シンプルに20%ダメージ。十六夜さんが投げるあれ',
      num:5,
      process:async function(cam,me,tcam,target){
         await addtext('では、ナイフの錆にしてあげましょう');
         x = Math.ceil(humans[tcam][target].health*0.2);
         let result = await humandamaged(cam,me,tcam,target,x,'sh',['unpursuit','fixed'])
         tekiou();
         await addtext(`${humans[tcam][target].name}に${x}のダメージ！`);
         if(result == 'end'){return 'end'};
         return 'alive';
      }
   },
   'trickyvariables':{
      name:'トリッキーな変数',
      id:'trickyvariables',
      price:40,
      description:'黒崎コユキ、きちゃいました！！なんか面白いことないですか？<br>(10%,25%,40%からランダム)',
      num:1,
      process:async function(cam,me,tcam,target){
         x = Math.floor(Math.random() * 3) + 1;
         switch(x){
            case 1:
               await addtext('ま、これでいいですよね？');
               x = Math.floor(humans[tcam][target].health*0.10);break;
            case 2:
               await addtext('結果良ければすべてオッケー！ってね？');
               x = Math.floor(humans[tcam][target].health*0.25);break;
            case 3:
               await addtext('これぞ醍醐味、ってやつ？');
               x = Math.floor(humans[tcam][target].health*0.40);break;
         };
         let result = await humandamaged(cam,me,tcam,target,x,'sh',['unpursuit','fixed'])
         if(result == 'end'){return 'end'};
         return 'alive';
      }
   },
   'bottlegrenade':{
      name:'ボトルグレネード',
      id:'bottlegrenade',
      price:60,
      description:'殴るついでに燃やす。まじでつよい<br>レッドウィンターの問題児にしては上出来すぎる',
      num:0,
      process:async function(cam,me,tcam,target){
         await addtext('これはちょっと、スパイシーなやつだよ');
         let result = await humandamaged(cam,me,tcam,target,0.8,'mg',['unpursuit'])
         if(result == 'end'){
            await addtext('レッドウィンターの問題児にしては上出来じゃない？');
            return 'dead';
         };
         await buffadd(tcam,target,'burn','turn',3,1);
         return 'alive';
      }
   },
   'coveringfire':{
      name:'援護射撃',
      id:'coveringfire',
      price:80,
      description:'ダメージ与える。ゴミ箱に隠れてる人。',
      num:0,
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
         await buffadd(tcam,target,'skip','turn',1,1);
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
      process:async function(cam,me,tcam,target){
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
      process:async function(cam,me,tcam,target){
         let rbuffs = ['powerup','shellup','luck'];
         rbuffs = arrayShuffle(rbuffs);
         x = rbuffs[0];
         y = rbuffs[1];
         await buffadd(tcam,target,x,'turn',3,Math.floor(Math.random()*2)+1);
         await buffadd(tcam,target,y,'turn',3,Math.floor(Math.random()*2)+1);
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
      process:async function(cam,me,tcam,target){
         let rbuffs = ['powerdown','shelldown','poison','burn','freeze'];
         rbuffs = arrayShuffle(rbuffs);
         for(i = 0;i < 2;i++){
            await buffadd(tcam,target,rbuffs[i],'turn',3,Math.floor(Math.random()*2)+1);
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
      process:async function(cam,me,tcam,target){
         stone += 120;updateUI()
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
               case 3:x=3;log.textContent = '爆弾は毒ガス入りだった!!';await buffadd(target[1],target[0],'poison','turn',3,1);break; //毒ガス入りだった場合
               case 2:x=2;log.textContent = '爆弾はスライム入りだった!!';await buffadd(target[1],target[0],'onslime','turn',2,1);break;//スライム入りだった場合
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
            document.querySelector('#log').textContent = serifs[Math.floor(Math.random() * serifs.length)];//そのうち消える
            await delay(1000);
            let result = await humandamaged(cam,target[1],me,target[0],1.5,'sh',4);
            if(Math.floor(Math.random()*2) == 0){await buffadd('enemydebuff','freeze','turn',4,1)};
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
            await buffadd(target[0],target[1],'elec','turn',2,1);
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
            await buffadd(target[1],target[0],'stun','turn',1,1);
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
            await buffadd(target[1],target[0],'shelldown','turn',3,1);
            await buffadd(cam,me,'powerup','turn',3,2);
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
            await buffadd(target[1],target[0],'weaknessgrasp','turn',2,1);//弱点把握状態
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
               case 0:log.textContent = 'いけっ！ピカピカの実！';await buffadd(target[1],target[0],'stan','turn',2,1);break;
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
            await buffadd(target[1],target[0],'onslime','turn',1,1);
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
            await buffadd(cam,me,'letsthrow','turn',2,1);
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
            await buffadd(cam,me,'gambling','turn',1,1);
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
            await buffadd(cam,me,'improve','turn',4,1);
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
            await buffadd(target[1],target[0],'elecshield','turn',2,1);
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
            await buffadd(cam,me,'powerup','turn',2,2);
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
      stage:1,
      maxhealth:'+10',
      attack:'+0',
      defense:'-10',
      maxmp:'0',
      mattack:'0',
      mdefense:'-20',
      critlate:'-0.01',
      critdmg:'-1',
      critresist:'+1',
      speed:'40',
      acts:{
         1:{
            name:'粘液飛ばし',
            probability:75,
            num:1,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は粘液を飛ばしてきた！`);
               let selected = ShallTargetSelect(cam,me,'phph',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         2:{
            name:'粘液付与',//やばい方のスライムも作りたいね 一緒に溶けよ....? みたいな..ってちょっと癖すぎるか....?よし、技名は自己責任で表示可にしよう その場合セリフは...?
            probability:25,
            num:3,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は粘液を絡ませてきた！`);//いやこれはこれでやばいか...?いや全然捉えようによってはやばいわ
               let selected = ShallTargetSelect(cam,me,'phph',0);
               await buffadd(selected[1],selected[0],'stickyslime','turn',2,1);
               return 'alive';
            }
         }
      }
   },
   '翠嵐の風刃':{
      name:'翠嵐の風刃',
      stage:1,
      maxhealth:'+10',
      attack:'+10',
      defense:'-10',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+0',
      critlate:'+0.3',
      critdmg:'+0.5',
      critresist:'+0',
      speed:'75',
      acts:{
         1:{
            name:'体当たり',
            probability:70,
            num:1,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は体当たりを仕掛けてきた！`);
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
               return result;
            }
         },
         3:{
            name:'体当たり・改',
            probability:30,
            num:3,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は回転しながら突進してきた！`);
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],1.5,'sh',1);
               return result;
            }
         }
      }
   },
   '黄昏の穿影':{
      name:'黄昏の穿影',
      stage:1,
      maxhealth:'-10',
      attack:'+15',
      defense:'+0',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+0',
      critlate:'+0',
      critdmg:'+0',
      critresist:'+0',
      speed:'60',
      acts:{
         1:{
            name:'消滅',
            probability:60,
            type:'reinvisi',
            num:1,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は姿を消..あれどこ行った？`)
               let selected = ShallTargetSelect(cam,me,'ec',0);
               console.log(`多分これだけバグってるので原因解明すっかり探偵団 ${cam}${me}`)
               await buffadd(selected[1],selected[0],'disappear','turn',2,1);
               return 'alive';
            }
         },
         2:{
            name:'衝突',
            probability:20,
            type:'abinvisi',
            num:2,
            process:async function(cam, me){
               if(buffhas(cam,me,'disappear')){x = 2;buffclear(cam,me,'disappear');}else{x = 1};
               await addtext(`${humans[cam][me].name}は突進してきた！`)
               let selected = ShallTargetSelect(cam,me,'pr',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],x,'sh',1);
               return result;
            }
         },
         3:{
            name:'ローキック',//ロストワンの号哭の号哭使いたいけど意味が泣くことらしい
            probability:20,
            type:'none',
            num:3,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}はローキックしてきた！`)
               let selected = ShallTargetSelect(cam,me,'phpl',0);
               let result = await humandamaged(cam,selected[1],me,selected[0],x,'sh',1);
               await buffadd(selected[1],selected[0],'speeddown','turn',2,1);
               return result;
            }
         }
      }
   },
   '燐光の妖花':{
      name:'燐光の妖花',
      stage:1,
      maxhealth:'-15',
      attack:'-10',
      defense:'+0',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+15',
      critlate:'+0',
      critdmg:'+0.5',
      critresist:'+0.1',
      speed:'50',
      acts:{
         1:{
            name:'しびれごな',
            probability:30,
            type:'none',
            num:1,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は痺れ粉を振りかけてきた！`)
               let selected = ShallTargetSelect(cam,me,'patkh',0);
               await buffadd(selected[1],selected[0],'palsy','turn',2,1);
               return 'alive';
            }
         },
         2:{
            name:'どくのこな',
            probability:30,
            type:'none',
            num:2,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は毒の粉を振りかけてきた！`)
               let selected = ShallTargetSelect(cam,me,'phph',0);
               await buffadd(selected[1],selected[0],'poison','turn',2,1);
               return 'alive';
            }
         },
         3:{
            name:'ねむりごな',
            probability:30,
            type:'none',
            num:3,
            process:async function(cam, me){
               await addtext(`${humans[cam][me].name}は眠り粉を振りかけてきた！`)
               let selected = ShallTargetSelect(cam,me,'patkh',0);
               await buffadd(selected[1],selected[0],'sleep','turn',1,1);
               return 'alive';
            }
         }
      }
   },






   '古書館の魔術師':{//ウイさん　コッペパンの"めっちゃ好きなキャラ"。ヒナタさんと仲がいい。
      name:'古書館の魔術師',
      maxhealth:'-10',
      attack:'-15',
      defense:'+5',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+20',
      critlate:'+0.05',
      critdmg:'+0',
      critresist:'+0.1',
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
      maxhealth:'+10',
      attack:'+10',
      defense:'-10',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+0',
      critlate:'+0.3',
      critdmg:'+0.5',
      critresist:'+0',
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
      maxhealth:'+10',
      attack:'+0',
      defense:'+10',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+0',
      critlate:'+0',
      critdmg:'+0',
      critresist:'+0',
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
      maxhealth:'+10',
      attack:'+0',
      defense:'+10',
      maxmp:'0',
      mattack:'+0',
      mdefense:'+0',
      critlate:'+0',
      critdmg:'+0',
      critresist:'+0',
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
         let human = humans[cam][me];
         let humanDiv = document.querySelector(`#${cam}${me}`);

         let name = human.prefixe ? `${human.prefixe} ${human.name}` : human.name;

         humanDiv.querySelector(`.name`).textContent = name;
         humanDiv.querySelector(`.level`).textContent = `Lv.${human.level}`;
         humanDiv.querySelector(`.health .num`).textContent = `${human.health}/${human.maxhealth}`;
         humanDiv.querySelector(`.health .bar .inner`).style.width = `${(human.health / human.maxhealth)*100}%`;
         humanDiv.querySelector(`.mp .num`).textContent = `${human.mp}/${human.maxmp}`;
         humanDiv.querySelector(`.mp .bar .inner`).style.width = `${(human.mp / human.maxmp)*100}%`;

         if(cam == 'players' && me !== 't'){
            humanDiv.querySelector('.skill .gauge').style.height = `${(human.ep / human.maxep)*100}%`;
            if(human.ep >= human.maxep){human.ep = human.maxep; humanDiv.querySelector('.skill gauge').style.height = '100%'}
         }

         let apply = buffcheck(cam,me);
         humanDiv.querySelector(`.effects`).innerHTML = apply.join('');

         humans[cam][me].power = 1;humans[cam][me].shell = 1;
         let karix = 0;
         
         human.buffs.forEach(buff => {
            
         })

         if(humans[cam][me].status == 2){
            document.querySelector(`#${cam}${me}`).style.backgroundColor = '#b2b2b2';
         }
      })
   })

   function buffcheck(cam,me){
      let buffs = humans[cam][me].buffs;

      let apply = [];

      const typeOrder = {buff: 1, debuff: 2, handle: 3, unique: 4, unknown: 5};
      const kindOrder = {turn: 1, stack: 2};

      let result =  buffs.sort((a, b) => {
         // type（buff → debuff → handle → unique → unknown）でソート
         if(typeOrder[a.type] !== typeOrder[b.type]){
            return typeOrder[a.type] - typeOrder[b.type];
         }
         // kind（turn → stack）でソート
         return (kindOrder[a.kind] || 99) - (kindOrder[b.kind] || 99);
      });

      result.forEach(effect => {
         //console.log(`${effect.lv}Lvの${effect.time}の${effect.name}。typeは${effect.type}で、kindは${effect.kind}`);
         let buffData = Object.values(Effects[effect.type]).find(e => e.name == effect.name);

         let Time = effect.kind == 'turn' ? effect.time : (effect.kind == 'stack' ? effect.lv : '？？？');
         let Lv = effect.kind == 'turn' ? `<br>Lv: ${effect.lv}` : '';

         let top,bottom;
         if(effect.type == 'debuffs'){
            top = ` hasd" data-description="${buffData.description}<br>${effect.kind}: ${Time}${Lv}" style="background:url('assets/buffs/${buffData.img}.png') center/cover no-repeat"`;
            bottom = `"`;
         }else{
            top = `"`;
            bottom = ` hasd" data-description="${buffData.description}<br>${effect.kind}: ${Time}${Lv}" style="background:url('assets/buffs/${buffData.img}.png') center/cover no-repeat"`;
         }

         apply.push(`
            <div class="${effect.type}"">
               <div class="top${top}></div>
               <div class="bottom${bottom}></div>
            </div>
         `)
      })

      return apply
   }

   let buffses = [
      {
         name:'powerup',
         type:'buffs',
         kind:'turn',
         lv:1,
         time:1
      },
      {
         name:'palsy',
         type:'handles',
         kind:'turn',
         lv:2,
         time:1
      },
      {
         name:'enchant',
         type:'buffs',
         kind:'turn',
         lv:2,
         time:3
      },
      {
         name:'powerdown',
         type:'debuff',
         kind:'turn',
         lv:2,
         time:2
      },
      {
         name:'anger',
         type:'handles',
         kind:'stack',
         lv:2,
         time:null
      },
      {
         name:'pierce',
         type:'buffs',
         kind:'turn',
         lv:2,
         time:4
      },
   ]

   //細々とした必要なものを 略して"こまごめピペット"
   document.querySelector('#turn').textContent = `turn:${turncount}`;
   

}



function save(){
   updateUI();
   const newData = {
      stone: stone,
      bankstone: bankstone,
      rank: rank,
      rpt: rpt,
      rp: rp,
      clearedmainquest: clearedmainquest,
      cleareddailyquest: cleareddailyquest,
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
function probability(num){
   return Math.random()*100 <= num;
   //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
}

function countLength(text){
   if(typeof text !== 'string'){text = text.toString();}
   let count = 0;
   text.split('').forEach(a => {
      if(/^[a-z_0-9]+$/.test(a)){
         count += 1;
      }else{
         count += 2;
      }
   })
   return count;
}

document.addEventListener('mousemove', (e) => {
   const HasDescription = document.querySelector('#movabledescription');
   HasDescription.style.left = `${e.clientX + 10}px`;
   HasDescription.style.top = `${e.clientY + 10}px`;
});
document.addEventListener('mouseover', (e) => {
   if(e.target.classList.contains('hasd')){
      const movabledescription = e.target.dataset.description;
      document.querySelector('#movabledescription').innerHTML = movabledescription;
      document.querySelector('#movabledescription').style.display = 'block';
   }
});
document.addEventListener('mouseout', (e) => {
   if(e.target.classList.contains('hasd')){
      document.querySelector('#movabledescription').innerHTML = '';
      document.querySelector('#movabledescription').style.display = 'none';
   }
});

function setLocalStorage(name, value) {
   localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
   return localStorage.getItem(name);
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
   document.querySelector('#body').appendChild(newDiv);
   //let spd = Math.random()*100+1;
   let spd = mes.toString().length*2 
   for(let i = 0; window.innerWidth > i*spd; i++){
       let val = i*spd;
       newDiv.style.right = `${val}px`
       await delay(50);
   }
   newDiv.remove();
}




//#endregion
//#region オブザーバー
function observeDisplayChangeBlock(targetSelector, callback){ //style="display:block;" を検知するやつ。
   const targetNode = document.querySelector(targetSelector);
   if (!targetNode) return;

   const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
         if (mutation.attributeName == "style") {
            const displayValue = window.getComputedStyle(targetNode).display;
            if (displayValue == "block"){
               callback();
            }
         }
      }
   });

   observer.observe(targetNode, { attributes: true, attributeFilter: ["style"] });
}
//#endregion
//#region log&text

let textDiv = document.querySelector('#text');
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

let logOOmoto = document.querySelector('#log');
let log = document.querySelector('#log .log');
let logOpener = document.querySelector('#log .opener');
logOpener.addEventListener('click', function(){
   if(logOOmoto.style.right == '-300px'){
      logOOmoto.style.right = '0px';
      logOpener.textContent = '>';
   }else{
      logOOmoto.style.right = '-300px';
      logOpener.textContent = '<';
   }
});
function addlog(text){
   log.innerHTML += text + '<br>';
   log.scrollTop = log.scrollHeight;
}
//#endregion

//#region Inventory
let Inventory = document.querySelector('#Inventory');
let Sutefuris = {
   'maxhealth':{
      name:'最大体力',
      id:'maxhealth',
      added:0, //実績用にします？
      value:20,
      description:'最大体力を20増やし、体力を20回復する<br>ピンチな時にぜひ<br>筋肉は全てを解決する',
   },
   'attack':{
      name:'攻撃力',
      id:'attack',
      added:0,
      value:5,
      description:'攻撃力を5増加させる。腕立て伏せかな'
   },
   'defense':{
      name:'防御力',
      id:'defense',
      added:0,
      value:5,
      description:'防御力を5増加させる。腹筋とかかな'
   },
   'maxmp':{
      name:'最大魔素',
      id:'maxmp',
      added:0,
      value:10,
      description:'最大魔素保有量を10増加。けど圧縮してる感じ<br>筋肉でも解決できないことはある'
   },
   'mattack':{
      name:'魔法攻撃力',
      id:'mattack',
      added:0,
      value:5,
      description:'魔法攻撃力を5増加。おそらく変換機の改良'
   },
   'mdefense':{
      name:'魔法抵抗力',
      id:'mdefense',
      added:0,
      value:5,
      description:'魔法防御力を5増加。おそらく気合い'
   },
   'critlate':{
      name:'会心率',
      id:'critlate',
      added:0,
      value:2,
      description:'会心率を2上昇する。つまりは2%上昇。<br>相手の弱点を見抜く力は大事',
   },
   'critdmg':{
      name:'会心倍率',
      id:'critdmg',
      added:0,
      value:0.1,
      description:'会心時の倍率を10%上昇する。つまりは倍率が+0.1',
   },
   'critresist':{
      name:'会心抵抗',
      id:'critresist',
      added:0,
      value:2,
      description:'会心抵抗を2上昇する。つまりは2%分会心されにくい<br>どこまでが本体かわからないような服着てるのかな'
   },
   'speed':{
      name:'速度',
      id:'speed',
      added:0,
      value:5,
      description:'速度を5上昇させる。あまり上げる意味はない<br>こうそくいどうがなんだかんだめちゃ強なんすわ'
   },
   'dodge':{
      name:'回避率',
      id:'dodge',
      added:0,
      value:2,
      description:'回避率を2上昇させる。つまりは2%。<br>速度と一緒やろ！！って思った人は帰れ'
   },
   'targe':{
      name:'命中率',
      id:'targe',
      added:0,
      value:2,
      description:'命中率を2上昇させる。つまりは2%。<br>回避率に対抗するか命中が下げられたかでもないと基本上げない'
   }
}
let InventoryPage = 1;
function inventoryOpen(num){
   document.querySelector('#movabledescription').textContent = '';
   document.querySelector('#movabledescription').style.display = 'none';

   InventoryPage = num??1;
   AllowMove = 1;
   let array = ['name','level','exp','health','maxhealth','attack','defense','maxmp','mattack','mdefense','critlate','critdmg','critresist'];
   let Status = array.map(a => `${a}: ${humans.players[InventoryPage][a]}`).join('<br>');
   
   let Sutefuri = Object.key(Sutefuris).map(a => `<button class="button" data-description="${Sutefuris[a].description}" onclick="suteFuri${a}">${a}</button>`).join('<br>');
   Inventory.style.display = 'flex';
   

   // let slashs = Object.keys(Slashs).map(a => Slashs[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Slashs[a].description}">${Slashs[a].id}</span>` : null).filter(Boolean)
   // document.querySelector('#ISlashAppearence').innerHTML = slashs.join('<br>');
   // let magics = Object.keys(Magics).map(a => Magics[a].lv <= humans.players[InventoryPage].level ? `<span class="hasd" data-description="${Magics[a].description}">${Magics[a].id}</span>` : null).filter(Boolean)
   // document.querySelector('#IMagicAppearence').innerHTML = magics.join('<br>');
   // let weapons = Object.keys(Weapons).map(a => Weapons[a].num >= 1 && Weapons[a].num > Object.keys(humans.players).filter(b => humans.players[b].weapon.id == Weapons[a].id).length ? `<span class="hasd" data-description="${Weapons[a].description}">${Weapons[a].name} x${Weapons[a].num}</span>` : null).filter(Boolean)
   // document.querySelector('#IWeapons').innerHTML = weapons.join('<br>');
   // let armors = Object.keys(Armors).map(a => Armors[a].num >= 1 && Armors[a].num > Object.keys(humans.players).filter(b => humans.players[b].armor.id == Armors[a].id).length ? `<span class=" hasd" data-description="${Armors[a].description}">${Armors[a].name} x${Armors[a].num}</span>` : null).filter(Boolean)
   // document.querySelector('#IArmors').innerHTML = armors.join('<br>');
   // let tools = Object.keys(Tools).filter(a => Tools[a].num > 0).map(a => `<span class="hasd" data-description="${Tools[a].description}">${Tools[a].name} x${Tools[a].num}:</span>`).filter(Boolean)
   // document.querySelector('#IItems').innerHTML = tools.join('<br>');

   document.querySelector('#IEquipsChangeZone').style.display = 'none';

   
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
   Inventory.style.display = 'none';
   
};


function SlashChange(num){
   let availableSlashs = Object.keys(Slashs)
      .filter(a => Slashs[a].lv <= humans.players[InventoryPage].level)
      .map(a => Slashs[a].id);
   let slashSelectHTML = availableSlashs.map(slash => 
      `<button class="button hasd" onclick="SlashChangeDecide('${slash}',${num})" data-description="${Slashs[slash].description}">${Slashs[slash].name}</button>`
  ).join(' ');
  
  document.querySelector('#SlashChangePlace').innerHTML = `
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
  
  document.querySelector('#MagicChangePlace').innerHTML = `
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
   document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
   let order = Object.keys(Weapons).map(a => a.id);
   let joins = [];
   myWeapons.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
   myWeapons.forEach((a,i) => {
      joins.push(`<button class="button hasd" data-description="${Weapons[a.id].description}" onclick="WeaponChangeDeside('${i}')">${Weapons[a.id].name}</button>`);
   })
   if(humans.players[InventoryPage].weapon.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Weapons.none.description}" onclick="WeaponChangeDeside('none')">none</button>`)};
   document.querySelector('#IEquipsChangeZone').innerHTML += joins.join(' ');
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
   document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
   let order = Object.keys(Armors).map(a => a.id);
   let joins = [];
   myArmors.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
   myArmors.forEach((a,i) => {
      joins.push(`<button class="button hasd" data-description="${Armors[a.id].description}" onclick="ArmorChangeDeside('${i}')">${Armors[a.id].name}</button>`)
   })
   if(humans.players[InventoryPage].armor.id !== 'none'){joins.unshift(`<button class="button hasd" data-description="${Armors.none.description}" onclick="ArmorChangeDeside('none')">none</button>`)};
   document.querySelector('#IEquipsChangeZone').innerHTML += joins.join(' ');
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
   document.querySelector('#IEquipsChangeZone').innerHTML = '';document.querySelector('#IEquipsChangeZone').style.display = 'block';
   Object.keys(Tools).filter(a => Tools[a].num > 0).forEach((a,i) => {
      document.querySelector('#IEquipsChangeZone').innerHTML += `<button class="button hasd" data-description="${Tools[a].description}<br>${Tools[a].num}個所持しています" onclick="ToolChangeDeside(${num},'${a}')">${Tools[a].name}</button>`;
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

function suteFuri(me,code){
   if(sp < 1){
      NicoNicoText('spがないのぜ');
      return;
   };
   switch(code){
      case 'maxhealth':
         humans.players[me].maxhealth += 20;
         humans.players[me].health += 20;
         break;
      case 'attack':
         humans.players[me].attack += 5;
         break;
      case 'defense':
         humans.players[me].defense += 5;
         break;
      case 'maxmp':
         humans.players[me].maxmp += 5;
         break;
      case 'mattack':
         humans.players[me].mattack += 5; 
         break;
      case 'mdefense':
         humans.players[me].mdefense += 5;
         break;
      case 'critlate':
         humans.players[me].critlate += 2;
         break;
      case 'critdmg':
         humans.players[me].critdmg += 0.1;
         break;
      case 'critresist':
         humans.players[me].critresist += 2;
         break;
      case 'speed':
         humans.players[me].speed += 5;
         break;
   }

   sp -= 1;
   inventoryOpen(me);
}

//#endregion


//#region sideMenu
const menuToggle = document.querySelector('#menuToggle');
const sideMenu = document.querySelector('#sideMenu');
menuToggle.addEventListener('click', () => {
   if(sideMenu.style.left === '0px'){
      sideMenu.style.left = '-250px';
   }else{
      sideMenu.style.left = '0px';
   }
});
//#endregion
//#region notice
const noticeButton = document.querySelector('#sideMenu .notice');
const noticeMain = document.querySelector('#notice');
const noticeList = document.querySelector('#notice .list');
const noticeShow = document.querySelector('#notice .show');
const noticeShowX = document.querySelector('#notice .x');
const noticeShowBack = document.querySelector('#notice .back');
const noticeShowTitle = document.querySelector('#notice .show .title');
const noticeShowDate = document.querySelector('#notice .show .date');
const noticeShowBody = document.querySelector('#notice .show .body');
let noticeNow = 0;

noticeButton.addEventListener('click', event => {
   noticeNow = 1;
   noticeMain.style.display = 'block';
   sideMenu.style.left = '-250px';

   noticeList.innerHTML = '';
   Object.keys(noticeData).forEach(key => {
      let item = document.createElement('div');
      item.className = 'item';
      item.innerText = noticeData[key].title;
      item.setAttribute('data-id', key);
      item.addEventListener('click', () => {
         noticeShowTitle.innerText = noticeData[key].title;
         noticeShowDate.innerText = noticeData[key].date;
         noticeShowBody.innerText = noticeData[key].body;
         noticeList.style.display = 'none';
         noticeShow.style.display = 'block';
      })
    noticeList.appendChild(item);
  });
})
noticeShowX.addEventListener('click', event => {
  noticeMain.style.display = 'none';
  noticeNow = 0;
});
noticeShowBack.addEventListener('click', event => {
  noticeShow.style.display = 'none';
  noticeList.style.display = 'block';
});

//#endregion
//#region tutorial
//#endregion
//#region setting
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
   const waku = document.querySelector('#quest-list');
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
      stone += quest.main.rewards;
      rpt += 20;
      clearedmainquest += 1;
      MakeNewQuest('x');
   }
   switch(code){
      case 0:
         if(quest.daily[0].num == quest.daily[0].nom){
         stone += quest.daily[0].rewards;
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
         stone += quest.daily[1].rewards;
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
         stone += quest.daily[2].rewards;
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
         stone += quest.daily[3].rewards;
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
         stone += quest.daily[4].rewards;
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
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
let chatroom = 1;
let messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
let usersRef;
let userData;

async function GameStart(){
   const Login = document.querySelector('#login');
   document.querySelector('#homeArea').style.display = 'block';

   //autoLogin
   username = getLocalStorage("username"); // ログイン時
   if(username){
      console.log("自動ログインしました");
      usersRef = database.ref(`users/${username}/forrpg'`);
      NicoNicoText('wait for now...')
      login()
   }else{
      console.log("ログインしてください");
      Login.style.display = 'block';

      document.querySelector('#login .button').addEventListener('click', async function(event){
   
         event.preventDefault();
         username = document.querySelector('#login .username').value;
         var password = document.querySelector('#login .password').value;
         let kariusersRef = database.ref('users/'+username+'/forrpg');
   
         // データベースでユーザーが存在するか確認
         kariusersRef.once('value').then(async function(snapshot){
            if(snapshot.exists()){
               userData = snapshot.val();
               if(userData.password === password){
                  login();
                  setLocalStorage("username", username); // ログイン成功時
               } else {
                  NicoNicoText('パスワードが間違っています');
               }
            }else{
               usersRef.update({
                  password: password,
               });
               
               stone = 0;
               bankstone = 0;
               rank = 1;
               rpt = 0;
               rp = 0;
               clearedmainquest = 0;
               clearedmainquest = 0;
   
               quest.main = quests.main[0];
               quest.daily = [];
               for(i = 0;i < 5;i++){
                  let newquest = quests.daily[Math.floor(Math.random() * quests.daily.length)];
                  newquest.id = i+1;
                  quest.daily.push(newquest);
               }

               save()
               login();
               setLocalStorage("username", username);
            }
         });
         
      });
   }

   async function login(){
      const Login = document.querySelector('#login');

      usersRef.update({
         status: 'online'
      });
      menuToggle.style.display = 'block';
      Login.style.display = 'none';
      document.querySelector('#chat-tab #chat').style.display = 'flex';
      startChat();

      AllowMove = 1;

      // データを取得する関数)
      userData = await load();
      await delay(500)

      stone = userData.stone??0;
      bankstone = userData.bankstone??0;
      rank = userData.rank??1;
      rpt = userData.rpt??0;
      rp = userData.rp??0;
      clearedmainquest = userData.clearedmainquest??0;
      cleareddailyquest = userData.cleareddailyquest??0;
      maxrpt = rank*100;
      
      Quests.main = AllQuests.main[clearedmainquest+1];
      if(userData && checkLastLogin(userData?.lastact??0)){
         cleareddailyquest = 0;
         Object.keys(Quests).filter(a => a.kind == 'daily').forEach(nanka => {
            Quests[nanka] = arraySelect(AllQuests);
            Quests[nanka].id = eval(nanka.slice(5));
         });
      }

      await delay(500);
      console.log('最初のロードのcd')
      cd('home','home','home')
   }

   

   //こっからchat
   document.querySelector('#message-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          if(!e.shiftKey){
            e.preventDefault();
            document.querySelector('#send-button').click();
          }else{
            document.querySelector('#message-input').value += '<br>'
          }
      }
      });   
  function startChat() {
      chatroom = document.querySelector('#room-select').value;
      selectRoom();
  }
}
//#endregion

//#region chatのやつ
function selectRoom() {
   const roomSelect = document.querySelector('#room-select');
   const sendButton = document.querySelector('#send-button');
   const messageInput = document.querySelector('#message-input');
   messagesRef.off();
   chatroom = roomSelect.value;
   messagesRef = database.ref('forrpg/rooms/'+chatroom+'/messages');
   document.querySelector('#messages').innerHTML = '';

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

       document.querySelector('#messages').appendChild(messageElement);

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.querySelector('#messages').scrollTop = document.querySelector('#messages').scrollHeight;
   });

   messagesRef.once('value', function(snapshot) {
      displayAllMessages();  // 一回だけ全メッセージを表示
   });
}

function displayAllMessages() {
   var roomSelect = document.querySelector('#room-select');
   chatroom = roomSelect.value;
   document.querySelector('#messages').innerHTML = '';

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

           document.querySelector('#messages').appendChild(messageElement);
       });

       messagesRef.on('value', function(snapshot) {
           if (snapshot.numChildren() > 20) {
               var firstMessageKey = Object.keys(snapshot.val())[0];
               messagesRef.child(firstMessageKey).remove();
           }
       });

       // 最新のメッセージが見えるようにスクロール
       document.querySelector('#messages').scrollTop = document.querySelector('#messages').scrollHeight;
   });
}

// 部屋作ったりラジバンダリ
function makeRoom() {
   const roomSelect = document.querySelector('#room-select');
   const Loom = document.querySelector('#room-make').value;
   const NowRef = database.ref('rooms/' + Loom);
   const pass = document.querySelector('#room-make-pass').value;
   NowRef.once('value').then(function(snapshot) {
       if (snapshot.exists()) { // 既存部屋の場合
           var roomData = snapshot.val();
           if (roomData.pass == pass) {
               document.querySelector('#room-select').appendChild(new Option(Loom, Loom));
               roomSelect.value = Loom;
               chatroom = Loom;
               selectRoom();
               document.querySelector('#room-make').value = '';
               document.querySelector('#room-make-pass').value = '';
           } else {
               document.querySelector('#room-make').value = 'missed!!';
               document.querySelector('#room-make-pass').value = '';
           }
       } else {
           const Pass = { pass: document.querySelector('#room-make-pass').value };
           document.querySelector('#room-select').appendChild(new Option(Loom, Loom));
           roomSelect.value = Loom;
           chatroom = Loom;

           NowRef.update(Pass);

           selectRoom();
           document.querySelector('#room-make').value = '';
           document.querySelector('#room-make-pass').value = '';
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

//#region stoneとrankの上のやつ
function updateUI(){
   if(rpt >= maxrpt){
      rank += 1;
      rpt = 0;
      maxrpt = rank*100;
      save();
   }

   document.querySelector('.user .username').textContent = username;
   document.querySelector('.user .rank').textContent = `Rank:${rank}`;
   document.querySelector('.rpt .bar .inner').style.width = (rpt / maxrpt) * 100 + '%';
   document.querySelector('.rpt .text').textContent = `${rpt}/${maxrpt}`;
   document.querySelector('#upperUI .stone').innerHTML = `${stone}𐩰   <button class="get" onclick="if(afknow == 0){LetsCharge();}">+</button>`; 

}
updateUI();

function LetsCharge(){
   document.querySelector('#homeArea').innerHTML = `
   <!--<span id="BigText">チャージステーション</span><br>-->
   <button class="backtoHome">←</button> チャージステーション<br>
   <div class="row">
   <button class="buttonC" onclick="Charge(90,120)">90$/120€</button>
   <button class="buttonC" onclick="Charge(300,360)">300$/360€</button>
   <button class="buttonC" onclick="Charge(860,860)">860$/860€</button>
   </div>
   <div class="row">
   <button class="buttonC" onclick="Charge(1280,1080)">1280$/1080€</button>
   <button class="buttonC" onclick="Charge(1840,1460)">1840$/1460€</button>
   <button class="buttonC" onclick="Charge(2640,2160)">2640$/2160€</button>
   </div>
   `;
}
function Charge(e,m){
   load();
   if(userData.stone??0 >= m){
      stone += e;
      usersRef.update({
         stone: userData.stone??m - m
      });
      save();
      NicoNicoText(`${m}€払い、${e}$チャージ完了、です！`);
   }else{
      NicoNicoText('お金が足りません...');
   }
}
//#endregion
//#region profileのやつ
async function UpdateProfile(){
   let about = userData.about??'入力してね';
   document.querySelector('#profile-tab').innerHTML = `
   <span style="font-size: 24px; border: 1px solid #000000">${username}</span>　Rank:${rank}<br><br>
   <textarea id="about" placeholder="write about you" style="width: 255px; height: 124px;" oninput="InputAboutMe()">${about}</textarea>
   `
   document.querySelector('#about').addEventListener('change', InputAboutMe);
}//自己紹介とかも入れたいよね
function InputAboutMe(){
   const textarea = document.querySelector('#about');
   usersRef.update({
      about: textarea.value
   });
   load();
}
//#endregion
//#region Homeの動き達
const homeArea = document.querySelector('#homeArea');
let nowPlace = {
   tab: 'home', //home-tab
   area: 'home', //homeArea
   selection: 'home', //home
   detail1: null,
   detail2: null,
   detail3: null,
}
function cd(tab, area, selection, detail1, detail2, detail3){
   console.log(`tab:${tab} area:${area} selection:${selection} detail1:${detail1} detail2:${detail2} detail3:${detail3}に移動します！！`);
   document.querySelector(`#${nowPlace.tab}-tab${nowPlace.area ? ` #${nowPlace.area}Area` : ''}${nowPlace.selection ? ` .${nowPlace.selection}` : ''}${nowPlace.detail1 ? ` .${nowPlace.detail1}` : ''}${nowPlace.detail2 ? ` .${nowPlace.detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'none';
   document.querySelector(`#${tab}-tab${area ? ` #${area}Area` : ''}${selection ? ` .${selection}` : ''}${detail1 ? ` .${detail1}` : ''}${detail2 ? ` .${detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'block';
   nowPlace = {
      tab: tab,
      area: area,
      selection: selection,
      detail1: detail1,
      detail2: detail2,
      detail3: detail3
   } 
}
//MakeNewQuest('x');
//UpdateProfile();

document.querySelectorAll('.goto').forEach(el => {
   el.addEventListener('click', () => {
      const classList = el.className.split(' ');

      // "goto" より後ろのクラス名だけ抽出
      const index = classList.indexOf('goto');
      const args = classList.slice(index + 1);

      // "-" を取り除く処理
      const cleanArgs = args.map(arg => arg.replace(/-/g, ''));

      // 最大4つまでに制限しておく（足りなければnull）
      const [tab, area, selection, detail1, detail2, detail3] = [...cleanArgs, null, null, null, null, null, null];

      // console.log(el)
      // console.log('↑が押された時のcd')
      cd(tab, area, selection, detail1, detail2, detail3);
   });
});

let Tabs = document.getElementById('tabs');
let tabs = Array.from(Tabs.children);
tabs.forEach(tab => {
   tab.addEventListener('click', el => {
      
   })
})

//#region rpgtoka
function HomeMapSelect(){
   save();
   document.querySelector('#homeArea').innerHTML = `
   <!--<span id="BigText">シャングリ・ラ中心街</span><br>-->
   <img src="assets/station.png" style="width: 600px; height: 300px;"><br>
   <button class="backtoHome">←</button> 駅<br>
   <button class="buttonB" onclick="HomeLetsDungeon(1)">創世黎明の原野</button><br>
   <button class="buttonB" onclick="HomeLetsDungeon(2)">ガチェンレイゲスドゥールラート</button><br>
   <button class="buttonB" onclick="">アビドス高等学校((</button><br>
   `;
}
async function HomeLetsDungeon(code){
   save();
   fun = Math.floor(Math.random() * 100)+1;//毎回変更されるのぜ
   stage = code;
   floor = 0;

   humans.players[1].level = 1;
   humans.players[1].exp = 0;
   sp = 1;
   
   document.querySelector('#homeArea').style.display = 'block';
   document.querySelector('#homeArea').style.textAlign = 'center';
   document.querySelector('#battleArea').style.display = 'none';
   document.querySelector('#homeArea').innerHTML = '<div id="selectChara"></div>';
   for(let id of Object.keys(Charas)){
      let chara = Charas[id];
      let newDiv = document.createElement('div');
      newDiv.className = 'chara';
      newDiv.id = chara.name;
      newDiv.addEventListener('click', function(){
         HomeGoDungeon(chara.id);
      })
      
      let img = document.createElement('img');
      img.className = 'img hasd';
      img.setAttribute('data-description', chara.description);
      img.src = `assets/charas/${chara.id}.png`;
      newDiv.appendChild(img);

      let name = document.createElement('div')
      name.className = 'name';
      
      let span = document.createElement('div');
      span.className = 'txt';
      span.textContent = chara.name;
      name.appendChild(span);
      newDiv.appendChild(name);
      
      document.querySelector('#homeArea .station .select .1').appendChild(newDiv);

      //後付けハードディスク
      let spanScrollWidth = span.scrollWidth
      if(spanScrollWidth > 60){
         const animationName = `scroll-${chara.id}ver`;
         const styleSheet = document.styleSheets[0];
         let fixedTime = 2;//前後の固定タイム
         let moveTime = (spanScrollWidth - 60) * 0.05;

         styleSheet.insertRule(`
            @keyframes ${animationName} {
               0% { transform: translateX(0); }
               ${(fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(0); }
               ${(1 - fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(-${Math.max(0, spanScrollWidth - 60)}px); }
               100% { transform: translateX(-${Math.max(0, spanScrollWidth - 60)}px); }
            }`, styleSheet.cssRules.length);
         span.style.animation = `scroll-${chara.id}ver ${fixedTime * 2 + moveTime}s linear infinite`;
      }
   }

}
function HomeGoDungeon(name){
   document.querySelector('#homeArea').style.textAlign = 'left';
   document.querySelector('#homeArea').style.display = 'none';
   document.querySelector('#battleArea').style.display = 'none';
   let player = humans.players[1]
   player.id = name;

   Object.keys(Charas['wretch']).forEach(key => { //基本に戻す
      player[key] = Charas['wretch'][key];
   })

   Object.keys(Charas[name]).forEach(key => { //変更点だけ変更
      player[key] = Charas[name][key];
   })

   buttonsolid = Charas[name].buttonsolid;
   buttonback = Charas[name].buttonback;
   document.querySelector('#ButtonStyle').textContent = `
   .button{
      border: 2px solid ${buttonsolid};
      padding: 2px 3px;
      background: ${buttonback};
      cursor: pointer;
   }
   input[type="text"]:focus{
      border: 2px solid ${buttonsolid};
      padding: 2px 3px;
      background: ${buttonback};
   }`;

   player.health = player.maxhealth;
   player.mp = player.maxmp;

   enemylv = 1;
   enemyhp = 80;
   enemymp = 50;
   enemyatk = 10;
   enemymatk = 10;
   enemydef = 0;
   enemymdef = 0;
   enemycrla = 3;
   enemycrdm = 1.5;
   enemycrrs = 0;
   
   
   dungeonnow = 1;
   logOOmoto.style.display = 'flex';
   logOOmoto.style.right = '-300px';
   logOpener.textContent = '<';
   document.querySelector('#overfieldArea').style.display = 'block';
   document.querySelector('#homeArea').style.display = 'none';
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
   stone += 50*code;
   dungeonnow = 0;
   document.querySelector('#overfieldArea').style.display = 'none';
   document.querySelector('#battleArea').style.display = 'none';
   console.log('ダンジョン出た時ののcd')
   cd('home','home','home')
}
//#endregion
//#region jobtoka
function HomeJobStart(name){
   save();
   afknow = 1;
   let num = document.querySelector('#homeArea .job .num').value;
   document.querySelector('#homeArea').innerHTML = `
   `;
   let reword = 0;
   let time = 0;
   let type = 0;
   switch(name){
      case 'stoneShort':
         type = 'stone'
         reword = num*10;
         time = 5
         break;
      case 'stoneMiddle':
         type = 'stone';
         reword = num*50;
         time = 15;
         break;
      case 'stoneLong':
         type = 'stone'; 
         reword = num*100
         time = 30;  
         break;
   }
   let maxTasks = num*time*60;
   let taskInterval = 1000;
   let completedTasks = 0;
   let taskTimer;
   function afkTask(){
      completedTasks++;
      if(completedTasks < maxTasks){
         document.querySelector('#task-bar').style.width = (completedTasks/maxTasks) * 100 + '%';
         document.querySelector('#task-text').textContent = `${completedTasks}/${maxTasks}`;
         //document.querySelector('#Task-log').textContent = `${completedTasks} / ${maxTasks}`
      }else{
         clearInterval(taskTimer);
         afknow = 0;
         switch(type){
            case 'stone':stone += reword;document.querySelector('#stone').textContent = stone+'€'; break;
         }
         HomeJobSelect();
      }
   }
   // 15分ごとにafkTaskを実行
   taskTimer = setInterval(afkTask, taskInterval);
}

//#endregion

//#region bar

async function friendRecluit(num, code){ //numは回数、codeは"3"で
   let per1 = 0.80, per2 = 0.17, per3 = 0.03;

   const Recruiting = document.querySelector('#homeArea .bar .recluit .recruiting');
   const Start = Recruiting.querySelector('.start');
   const Detail = Recruiting.querySelector('.detail');
   const Results = Recruiting.querySelector('.results');

   let result = [];
   let resultName = []

   save();
   
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
      resultName.push(person)
   });

   Start.querySelector('.push').addEventListener('click', async function(){
      Start.style.display = 'none';
      Results.style.display = 'block';
      resultName.forEach(i => {
         let friend = Friends[resultName[i]];

         let newDiv = document.createElement('div');
         newDiv.className = 'result';
         newDiv.dataset.num = i;
         newDiv.innerHTML = `
         <div class="img">
            <img class="inner" src="${images[Friends[i].id].src}">
         </div>
         <div class="rare">
            <img class="inner" src="${images[`star${Friends[i].rare}`].src}" alt="">
         </div>
         `;

         newDiv.addEventListener('click', async function(){
            Results.style.display = 'none';
            Detail.style.display = 'block';

            Detail.querySelector('.name .ruby').textContent = friend.ruby;
            Detail.querySelector('.name .txt').textContent = friend.name;
            Detail.querySelector('.rare .img').src = images[`star${friend.rare}`].src;
         })
      })
   });
}

function HomeBarRecluitLets(num){
   document.querySelector('#r-go').removeEventListener('click',HomeBarRecluitLets);
   log.textContent = "";
   document.querySelector('#r-go').style.fontSize = '20px';
   document.querySelector('#r-go').innerHTML = resultName.join("<br>");
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
   document.querySelector('#homeArea').innerHTML = `
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
   document.querySelector('#homeArea').innerHTML = `
  <button onclick="BacktoHome()">←</button> 超安心安全銀行<br>
  <span id="bank-deposit" class="bank-title">deposite</span><input type="number" id="bank-deposit-num" /><button id="bank-deposit-num-go" onclick="BankDeposite('Num')" class="bank-button">go</button><button id="bank-deposit-all" class="bank-button" onclick="BankDeposite('All')">All</button><br>
  <span id="bank-withdraw" class="bank-title">withdraw</span><input type="number" id="bank-withdraw-num" /><button id="bank-withdraw-num-go" onclick="BankWithdraw('Num')" class="bank-button">go</button><button id="bank-withdraw-all" class="bank-button" onclick="BankWithdraw('All')">All</button><br>
  <span id="Bankstone">bank account:0€</span>
   `;
   document.querySelector('#Bankstone').textContent = 'bank account:'+bankstone+'€';
}
function BankDeposite(code){
   if(code == 'Num'){
      let num = +document.querySelector('#bank-deposit-num').value;
      bankstone += num;
      stone -= num;
      document.querySelector('#bank-deposit-num').value = '';
   }else if(code == 'All'){
      bankstone += stone;
      stone = 0;
      document.querySelector('#bank-deposit-num').value = '';
   }
   save();
   HomeBank();
}
function BankWithdraw(code){
   if(code == 'Num'){
      let num = +document.querySelector('#bank-withdraw-num').value;
      stone += num;
      bankstone -= num;
      document.querySelector('#bank-withdraw-num').value = '';
   }else if(code == 'All'){
      stone += bankstone;
      bankstone = 0;
      document.querySelector('#bank-withdraw-num').value = '';
   }
   save();
   HomeBank();
}
//#endregion

//#endregion

//#region 非ダメ時モーション(?)
async function humandamaged(cam,tcams,me,targets,rate,kind,code){//矛先の陣営、攻撃タイプ(物理||魔法)、自分、矛先、倍率、コード(PS用)
   if(!Array.isArray(tcams)){tcams = [tcams];}
   if(!Array.isArray(targets)){targets = [targets];}
   for(let i = 0; i < tcams.length; i++){
      let tcam = tcams[i];
      let target = targets[i];

      let attacker = humans[cam][me];
      let defender = humans[tcam][target];

      console.log(`${attacker.name} => ${defender.name}; 倍率は${rate}で、種類は${kind}でコードは${code}だってよ`);
      console.log(`ついでに言うと攻撃力は${attacker.attack}で、防御力は${defender.defense}だから計算上ダメージは${(attacker.attack * attacker.power * rate) - (defender.defense * defender.shell)}になるはずだよ`)

      switch(kind){
         case 'sh':
            //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
   
            if(Weapons[attacker.weapon.id].pp = 0){
               Weapons[attacker.weapon.id].process(cam,me,tcam,target,rate,kind,code,1);
            }
   
            x = Weapons[attacker.weapon.id].power;
            if(typeof x == 'string'){x = eval(x);};
            
            x = (attacker.attack * attacker.power * rate + x);
            if(code == 3 && attacker.ps == 'highsol'){x *= 3};
            if(code == 3 && attacker.ps == 'solx5but'){x *= 5};
            if(buffhas(cam,me,'improve')){x *= 1.4;};
            if(buffhas(cam,me,'letsthrow')){x *= 2; buffclear(cam,me,'letsthrow');};
            if(buffhas(cam,me,'gambling')){
               z = clowngambling[Math.floor(Math.random() * clowngambling.length)];
               x *= z; buffremove(cam,me,'gambling');
               await addtext('ダメージは' + z + '倍になった!!')
            };
   
            x -= (defender.defense * defender.shell);
         
            if(isCrit(attacker.critlate, humans[tcam][me].critresist)){
               x += (defender.defense * defender.shell);
               x *= attacker.critdmg;
               await addtext('会心の一撃！')
            };

            
            x = Math.ceil(x);
            if(x < 0){x = 0};
            if(x > defender.health){x = defender.health};
   
            y = defender.health;
   
            defender.health -= x;
            console.log(`damage:${y}->${defender.health}(${x})`);
            
            if(defender.health < 0){defender.health = 0};
            
            if(cam == 'players') attacker.ep += Math.floor(10 * attacker.epgain * code == 3 ? 2 : 1);

            tekiou();

            await addtext(`${defender.name}に${x}のダメージ！`)
            if(code == 3 && attacker.ps == 'solplaceturret'){turretPlace(cam);}
   
            if(defender.health <= 0){let result = await killed(cam,me,tcam,target);if(result == 'end'){return 'end';}}
   
         
            
            break;
         case 'mg':
            //codeは基本0。sは1、dsは2、solは3、スキルなら's'、アイテムなら'i'(ない)
            x = (attacker.mattack * attacker.power * rate);
            x -= (defender.mdefense * defender.shell);
            x = Math.ceil(x);if(x < 0){x = 0};if(x > defender.health){x = defender.health};
            defender.health -= x;
            tekiou();
            await addtext(`${defender.name}に${x}のダメージ！`)
            await delay(1000);
            if(defender.health <= 0){let result = await killed(cam,me,tcam,target);return result;}
            break;
      }
   }   
};

function isCrit(late, resist){
   let isCritical = false;
   if(resist == 'absolute'){
      isCritical = false;
      console.log('会心無効！')
   }else if(late == 'absolute'){
      isCritical = true;
      console.log('確定会心！')
   }else{
      isCritical = Math.random() < (late - resist) / 100;
      console.log(`${late - resist}%...結果は${isCritical}!!`)
   }
   return isCritical
}

async function humandamagedSimple(cam, me, tcam, target, rate, kind, attributes){
   //書き殴り 攻撃x回復o = heal 確定会心 = crit 攻撃+攻撃者回復 = absorb 
   console.log(attributes.includes('fixed') ? `${humans[cam][me].name}=>${humans[tcam][target].name} ${kind}で${rate}ダメージの予定！ ${attributes}` :`${humans[cam][me].name}=>${humans[tcam][target].name} ${kind}で攻撃力の${rate}倍 ${attributes}`);

   let attackerOriginal = humans[cam][me];
   let defenderOriginal = humans[tcam][target]

   let attacker = {};
   stats.forEach(stat => {
      attacker[stat] = attackerOriginal[stat];
   });

   let defender = {};
   stats.forEach(stat => {
      defender[stat] = defenderOriginal[stat];
   });

   const stats = [
      'attack', 'defense',
      'power', 'shell', 'mattack', 'mdefense',
      'critlate', 'critdmg', 'critresist'
   ];

   stats.forEach(stat => {
      Object.values(attacker.buffs).forEach(buff => {
         if(buff.data.addable == false){
            if(buff.data.effect.hasOwnProperty(stat)){
               attacker[stat] += buff.data.effect[stat].value;
            }
         }else{
            if(buff.data.effect.hasOwnProperty(stat)){
               attacker[stat] += buff.value
            }
         }
      });
      ['weapon','armor','ear','ring','neck'].forEach(bui => {Object.values(attacker[bui]).forEach(buff => {
         
      })})

      Object.values(defender.buffs).forEach(buff => {
         if(buff.data.addable == false){
            if(buff.data.effect.hasOwnProperty(stat)){
               defender[stat] += buff.data.effect[stat].value;
            }
         }else{
            if(buff.data.effect.hasOwnProperty(stat)){
               defender[stat] += buff.value
            }
         }
      })
   });

   //攻撃力
   let damage = kind == 'sh' ? (attacker.attack * attacker.power * rate) : (attacker.mattack * attacker.power * rate);

   //防御力
   damage -= kind == 'sh' ? (defender.defense * defender.shell) : (defender.mdefense * defender.shell)

   //会心
   if(isCrit(attacker.critlate, defender.critresist)){
      damage += (defender.defense * defender.shell);
      damage *= attacker.critdmg;
      await addtext('かいしんのいちげき！')
   };

   //整え
   damage = Math.floor(damage);
   if(defender.health < damage) damage = defender.health;
   console.log(`${defender.health} => ${defender.health - damage} | damage:${damage}`);

   //実装
   defender.health -= damage;

   //回復

   //ep
   if(cam == 'players') humans[cam][me].ep += Math.floor(10 * humans[cam][me].epgain);

   tekiou()
   await addtext(`${defender.name}に${damage}のダメージ！`)

   //その後
   if(defender.health <= 0){let result = await killed(cam,me,tcam,target);return result;}

   //追撃ゾーン　ここどしよ
   if(!attributes.includes('unpursuit')){
      if(Weapons[attacker.weapon.id].ap){
         let res = await Weapons[attacker.weapon.id].afterProcess(cam,me,tcam,target,rate,kind,attributes);
         if(res == 'end'){return 'end'};
      }

      if(attacker.ps == 'enemy50%pursuit' && defender.health <= defender.maxhealth / 2 && enemy50pursuitenelgy == 1 && defender.health > 0){
         enemy50pursuitenelgy = 0;
         await addtext(arraySelect(['くるくる〜っと','くるりん〜っと']));
         let res = humandamagedSimple(cam,me,tcam,target,0.5,'sh',['unpursuit']);
         if(res == 'end'){return 'end'};
      }else if(attacker.name == 'herta' && defender.health <= defender.maxhealth / 2 && attacker.level >= 10 && defender.health > 0){//1凸効果「弱みは付け込み」
         let res = humandamagedSimple(cam,me,tcam,target,0.2,'sh',['unpursuit']);
         if(res == 'end'){return 'end'};
      }
   }

   return 'alive';
}

async function humandamagedFixed(cam,me,tcam,target,num,kind){
   let attacker = humans[cam][me];
   let defender = humans[tcam][target]
   
   let damage = num;

   defender.health -= damage;

   tekiou()
   await addtext(`${defender.name}に${damage}のダメージ！`)

   if(defender.health <= 0){let result = await killed(cam,me,tcam,target);return result;}
   return 'alive';
}
//#endregion
//#region buffの動き
async function buffadd(tcam,target,buff,time,val){//誰のバフ/デバフか,バフ/デバフの名前,効果時間,効果量
   if(!buff || !time || !val){console.error('要素が足りないぜ！！！');}
   let buffData = [...Object.values(Effects.buffs), ...Object.values(Effects.debuffs), ...Object.values(Effects.handles), ...Object.values(Effects.uniques)].find(e => e.name === buff);
   let defender = humans[tcam][target];

   console.log(`${defender.name}に${val}の${buff}を${time}付与します！！`);

   let newbuff = {};

   switch(buffData.kind){
      case 'turn':{
         //すでにある場合の処理
         let hasbuffIndex = defender.buffs.findIndex(e => e.name == buff && e.value == val);
         if(hasbuffIndex >= 0){
            newbuff = defender.buffs[hasbuffIndex];
            defender.buffs.splice(hasbuffIndex,1);
            newbuff.time += time;
         }else{
            newbuff = {
               type: buffData.type,
               kind: buffData.kind,
               name: buff,
               time: time,
              value: val,
               data: buffData,
            };
         }
      };
      tekiou();
      await addtext(`${defender.name}は${buff}を${time}turn受けた!`);
      break;

      case 'stack':{
         let hasbuffIndex = defender.buffs.findIndex(e => e.name == buff);
         if(hasbuffIndex >= 0){
            defender.buffs[hasbuffIndex].time += time;
            defender.buffs[hasbuffIndex].value = buffData.lv[time];
         }else{
            newbuff = {
               type: buffData.type,
               kind: buffData.kind,
               name: buff,
               time: time, // (stack)
              value: buffData.lv[time],
               data: buffData,
            };
         }
      };
      tekiou();
      await addtext(`${defender.name}は${buff}を${time}stack受けた!`);
      break;
   }

   
   
}
function buffremove(tcam,target,buff){
   //誰のバフ/デバフか,バフ/デバフの名前
   let defender = humans[tcam][target];
   let i = defender.buffs.findIndex(e => e.name == buff)
   defender.buffs.splice(i,1);
   tekiou();
}
function buffclear(tcam,target,code){
   let defender = humans[tcam][target];
   switch(code){
      case 'all':
         defender.buffs = [];
         break;
      case 'turn':
         defender.buffs = defender.buffs.filter(e => e.kind != 'turn');
         break;
      case 'stack':
         defender.buffs = defender.buffs.filter(e => e.kind != 'stack');
         break;
      case 'buffs':
         defender.buffs = defender.buffs.filter(e => e.type == 'buffs');
         break;
      case 'debuffs':
         defender.buffs = defender.buffs.filter(e => e.type == 'debuffs');
         break;
      case 'handles':
         defender.buffs = defender.buffs.filter(e => e.type == 'handles');
         break;
      case 'uniques':
         defender.buffs = defender.buffs.filter(e => e.type == 'uniques');
         break;
      default:
         console.console('codeが違ったからとりあえず同名消したけど、よかった？');
         defender.buffs = defender.buffs.filter(e => e.name == code);
   }
   tekiou();
}
function buffhas(tcam,target,buff){
   return humans[tcam][target].buffs.find(b => b.name === buff);
}
//#endregion
//#region QTEのやつ
async function qte(keyLeft, keyRight, limit) {
   return new Promise((resolve) => {
       let isLeft = Math.random() < 0.5; // 左右をランダムに決定
       let keyToPress = isLeft ? keyLeft : keyRight;
       let qteElement = isLeft ? document.getElementById("qteLeft") : document.getElementById("qteRight");

       qteElement.style.display = "block";
       let success = false;

       function keyHandler(event) {
           if (event.key === keyToPress) {
               success = true;
               qteElement.style.display = "none";
               window.removeEventListener("keydown", keyHandler);
               resolve(true); // 成功！
           } else if (event.key === keyLeft || event.key === keyRight) {
               success = false;
               qteElement.style.display = "none";
               window.removeEventListener("keydown", keyHandler);
               resolve(false); // 間違えた
           }
       }

       window.addEventListener("keydown", keyHandler);

       setTimeout(() => {
           qteElement.style.display = "none";
           window.removeEventListener("keydown", keyHandler);
           if(!success)resolve(false); // タイムアウトで失敗
       }, limit * 1000);
   });
}
//#endregion

//#region playerturn
function backtoplayerturn(){
   phase = 1;
   select1.textContent = 'act';
   select2.textContent = 'magic';
   select3.textContent = 'tools';
   select4.textContent = 'run';
   //errorcheck();
}
async function playerturn(cam,me){
   if(humans[cam][me].ns.process != undefined && (turncount % Skills.ns[humans[cam][me].ns].cool) == 0){
      await Skills[humans[cam][me].ns].process(cam,me);
      await delay(1000)
   };

   tekiou();

   phase = 1;
   addtext('あなたのターンです！');
   backtoplayerturn();
};
//#endregion
//#region playerの選択
let nowturn = 0;
let targetselect = 0;

const battleArea = document.querySelector('#battleArea');
const battleCommands = battleArea.querySelector('.UIs .commands');
const select1 = battleCommands.querySelector('.select1');
const select2 = battleCommands.querySelector('.select2');
const select3 = battleCommands.querySelector('.select3');
const select4 = battleCommands.querySelector('.select4');

select1.addEventListener('click', async function(){
   let me = turn[0]
   switch(phase){
      case 1:
         phase = 2;
         select1.textContent = humans[1].slash1.name;
         select2.textContent = humans[1].slash2.name;
         select3.textContent = humans[1].slash3.name;
         select4.textContent = 'back';
         break;
      case 2:
         disappear()
         if(humans.players[me].slash1 !== 0){
            Slash('players',me,humans.players[me].slash1)
         }else{
            await addtext('you dont have slash...');
            backtoplayerturn()
         }
         break;
      case 3:
         disappear()
         if(humans.players[me].magic1 !== 0){
            Magic('players', me, humans.players[me].magic1)
         }else{
            await addtext('you dont have magic...');
            backtoplayerturn()
         }
         break;
      case 4:
         disappear()
         if(humans.players[me].tool1){
            Tool('players',me,humans.players[me].tool1)
         }else{
            await addtext('you dont have tool...');
            backtoplayerturn()
         }
         break;
   }
})

select2.addEventListener('click', async function(){
   switch(phase){
      case 1:
         phase = 2;
         battleCommands.querySelector('.select1').textContent = humans[1].magic1.name;
         select2.textContent = humans[1].magic2.name;
         select3.textContent = humans[1].magic3.name;
         select4.textContent = 'back';
         break;
      case 2:
         disappear()
         if(humans.players[me].slash2 !== 0){
            await addtext(`${humans.players[me].name}は${humans.players[me].slash2}をした！`);
            Slash('players',me,humans.players[me].slash2)
         }else{
            await addtext('you dont have slash...');
            backtoplayerturn()
         }
         break;
      case 3:
         disappear()
         if(humans.players[me].magic2 !== 0){
            Magic('players',me,humans.players[me].magic2)
         }else{
            await addtext('you dont have magic...');
            backtoplayerturn()
         }
         break;
      case 4:
         disappear()
         if(humans.players[me].tool2){
            Tool('players',me,humans.players[me].tool2)
         }else{
            await addtext('you dont have tool...');
            backtoplayerturn()
         }
         break;
   }
})

select3.addEventListener('click', async function(){
   switch(phase){
      case 1:
         phase = 2;
         select1.textContent = humans[1].tool1.name;
         select2.textContent = humans[1].tool2.name;
         select3.textContent = humans[1].tool3.name;
         select4.textContent = 'back';
         break;
      case 2:
         disappear()
         if(humans.players[me].slash3 !== 0){
            await addtext(`${humans.players[me].name}は${humans.players[me].slash3}をした！`);
            Slash('players',me,humans.players[me].slash3)
         }else{
            await addtext('you dont have slash...');
            backtoplayerturn()
         }
         break;
      case 3:
         disappear()
         if(humans.players[me].magic3 !== 0){
            Magic('players',me,humans.players[me].magic3)
         }else{
            await addtext('you dont have magic...');
            backtoplayerturn()
         }
         break;
      case 4:
         disappear()
         if(humans.players[me].tool3){
            Tool('players',me,humans.players[me].tool3)
         }else{
            await addtext('you dont have tool...');
            backtoplayerturn()
         }
         break;
   }
})

select4.addEventListener('click', async function(){
   switch(phase){
      case 1:
         disappear();
         battleArea.style.display = 'none';
         document.querySelector('#overfieldArea').style.display = 'block';
         
         draw()
         AllowMove = 0;
         await addtext('うまく逃げ切れた！');
         break;
      case 2:
      case 3:
      case 4:
         backtoplayerturn()
         break;
   } 
})

function disappear(){
   phase = 0;
   select1.textContent = ' ';
   select2.textContent = ' ';
   select3.textContent = ' ';
   select4.textContent = ' ';
}

function LetsTargetSelect(one){
   let code = one??1; //1:通常(1人) 2:選んだところと左右 3:選んだ陣営全体
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
 


//#endregion
//#region playerの斬撃
async function Slash(cam,me,name){
   if(humans.players[me].mp >= Slashs[name].mp){
      target = await LetsTargetSelect();
      humans.players[me].mp -= Slashs[name].mp;tekiou();
      await addtext(`${humans.players[me].name}の${Slashs[name].name}！`);
      let result = await Slashs[name].process('players',me,target[1],target[0]);
      if(result == 'dead'){let results = await killed('players',me,target[1],target[0]);return results}
      NextTurnis('players',me,target[1],target[0]);
   }else{
      await addtext('not enough mp...');
      window.setTimeout(backtoplayerturn, 1000)
   }
}
//#endregion
//#region playerの魔法
async function Magic(cam,me,name){
   if(humans.players[me].mp >= Magics[name].mp){
      target = await LetsTargetSelect();
      humans.players[me].mp -= Magics[name].mp;tekiou();
      let result = await Magics[name].process('players',me,target[1],target[0]);
      if(result == 'dead'){let results = await killed('players',me,target[1],target[0]);return results}
      NextTurnis('players',me,target[1],target[0]);
   }else{
      await addtext('not enough mp...');
      window.setTimeout(backtoplayerturn, 1000)
   }
}

//#endregion
//#region playerの道具
async function Tool(cam,me,UseTool){
   if(Tools[UseTool].num > 0){
      target = await LetsTargetSelect();
      await addtext(humans.players[me].name + 'は'+Tools[UseTool].name+'を使用した!');
      Tools[UseTool].num -= 1
      let result = await Tools[UseTool].process(cam,me,target[1],target[0]);
      if(result == 'dead'){let results = await killed(cam,me,target[1],target[0]);return results};
      NextTurnis(cam,me,target[1],target[0]);
   }else{
      await addtext('not enough tool...');
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
   if(humans[cam][me].ep == 100){
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
   humans[cam][me].ep = 0;
}
function Splittekiou(){
   document.querySelector('#SplitHealth').textContent = Splithealth;
   document.querySelector('#SplitMaxHealth').textContent = Splitmaxhealth;
   }
async function Splitbreak(){
   buffremove(cam,me,'spliting')
   x = Math.floor(Splitmaxhealth * 0.7);
   playerhealth += x;
   if (playerhealth > playermaxhealth){playerhealth = playermaxhealth;}
   document.querySelector('#PlayerFriendFront').innerHTML = '';
   Splitmaxhealth = 0;
   Splithealth = 0;
   await addtext(playername+'のコピーは倒された...');
   humans[cam][me].ep = 0;
}
function turretPlace(cam){
   if(!document.querySelector(`#${cam}t`)){
      let newDiv = makeNewPlayer('t')
      humans[cam].t.kazu = 0;
      humans[cam].t.maxhealth = 0;
      humans[cam].t.health = 0;
      document.querySelector(`#${cam}`).appendChild(newDiv);
   }
   humans[cam].t.status = 1;
   humans[cam].t.kazu += 1;
   humans[cam].t.maxhealth += 15;
   humans[cam].t.health += 15;
   humans[cam].t.name = `Turret x${humans[cam].t.kazu}`;
   tekiou()
   document.querySelector(`#${cam}t`).style.display = 'block'
   document.querySelector(`#${cam}t`).style.backgroundColor = '#f7f7f7'
}
function turretBreak(cam){
   humans[cam].t.status = 0;
   humans[cam].t.kazu -= 1;
   if(humans[cam].t.kazu <= 0){
      humans[cam].t.kazu = 0;
      humans[cam].t.maxhealth = 0;
      humans[cam].t.health = 0;
      document.querySelector(`#${cam}t`).remove();
   }
}
function turretAllClear(){
   if(document.querySelector('#playerst')){
      document.querySelector('#playerst').remove();
      humans.players.t.kazu = 0;
      humans.players.t.status = 0;
   };
   if(document.querySelector('#enemiest')){
      document.querySelector('#enemiest').remove();
      humans.enemies.t.kazu = 0;
      humans.enemies.t.status = 0
   }
}
//#endregion

//#region charaのturn
//#endregion


//#region prev-enemyturn
async function NextTurnis(cam,me,tcam,target){
   phase = 0;

   //アンコールの動き
   if(!cam == 0){
      y = 1;//luck
      if(buffhas(cam,me,'luck')){y = Math.floor(Math.random() * humans[cam][me].buffs.luck.lv);}//luck
      if(y == 0){
         await addtext('当たりが出たらもう一本♪');
         backtoplayerturn(); return;
      }


      //継続ダメージの動き
      if (buffhas(cam,me,'poison')){
         let poison = humans[cam][me].buffs.find(a => a.name == 'poison')
         x = Math.round(humans[cam][me].maxhealth * Effects.debuffs[poison.name].lv[poison.lv]);
         humans[cam][me].health -= x;
         if(humans[cam][me].health < 0){humans[cam][me].health = 0};
         await addtext(`${humans[cam][me].name}は毒で${x}のダメージ!`);
      };
      if(buffhas(cam,me,'burn')){
         let burn = humans[cam][me].buffs.find(a => a.name == 'burn')
         x = Math.round(humans[cam][me].maxhealth * Effects.debuffs[burn.name].lv[burn.lv]);
         humans[cam][me].health -= x;
         if(humans[cam][me].health < 0){humans[cam][me].health = 0}
         await addtext(`${humans[cam][me].name}は燃えて${x}のダメージ!`);
      };
      tekiou();
      if(humans[cam][me].health <= 0){let result = killed(0,0,cam,me);if(result !== 'continue'){return result;}}
   
      for(const key in humans[cam][me].buffs){
         humans[cam][me].buffs[key].time -= 1; // -1する
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
      await addtext(`${humans[cam][me].name}は"${Skills.ex[skill].name}"を発動した！！`);
      let result = await skillAct(cam,me,skill);
      if(result == 'end'){return 'end';}
   }

   //こっから次のターン行く動き　ここでこの人のターンは終わるって感じだね

   acted += 1;
   if(acted >= bar.num.length){
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
         if(humans[tcams][targets].health <= 0){let result = killed(cams,1,tcams,targets);if(result !== 'continue'){return result;}};
         await delay(1000);
      }
      if(humans.enemies['t']?.kazu || 0 > 0 && x == false){
         log.textContent = '敵のturretの攻撃!';
         await delay(1000);
         cams = 'enemies';
         let selected = ShallTargetSelect('enemies','t',`phpl`,0);
         let tcams = selected[1];let targets = selected[0];
         x = Math.ceil(humans[cams]['t'].attack * humans[cams]['t'].kazu) - Math.ceil(humans[tcams][targets].defense*humans[tcams][targets].shell);
         if(x < 0){x = 0};if(x > humans[tcams][targets].health){x = humans[tcams][targets].health};
         humans[tcams][targets].health -= x;tekiou();
         log.textContent = `${humans[tcams][targets].name}に${x}のダメージ！`;
         if(humans[tcams][targets].health <= 0){let result = killed(cams,1,tcams,targets);if(result !== 'continue'){return result;}};
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
      if(Math.floor(Math.random() * Effects.debuffs.onslime.lv[humans[cam][nowturn].buffs.onslime.lv]) !== 0){
         buffremove(cam,nowturn,'onslime');
         log.textContent = 'なんとかスライムを取り払った!!';
      }else{
         log.textContent = 'スライムが邪魔して動けない!!';//今思ったけどこれやばいのでは...?
         await delay(1000);NextTurnis(0);return;}; 
   }
   if(buffhas(cam,nowturn,'skip')){
      await addtext(`はい${humans[cam][me].name}、お前スキップ〜〜`);
      NextTurnis(cam,me,0,0); return;
   }
   if(buffhas(cam,nowturn,'stan')){
      await addtext(`${humans[cam][me].name}はスタンした！`);
      NextTurnis(cam,me,0,0); return;
   }
   if(buffhas(cam,nowturn,'freeze')){
      if(!Math.floor(Math.random() * Effects.debuffs.freeze.lv[humans[cam][nowturn].buffs.freeze.lv]) !== 0){
         await addtext(`氷が溶けた!`); buffremove(cam,nowturn,'freeze');
      }else{
         await addtext(`${humans[cam][nowturn].name}は凍っている...`);
         NextTurnis(cam,me,0,0); return;
      }   
   }
   console.log(`${cam}${nowturn}こと${humans[cam][nowturn].name}、動きます！`);

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
   let enemy = humans.enemies[me];
   let enemydata = Enemies[enemy.name];
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
   
   await addtext(enemy.name+'のターン！')
   let selected = ['players',1] //一旦のやつ。実際はShallTargetSelect(cam,me,'phpl',0);みたいなのがあるからこれの中の数値は関係ない

   if(enemydata){
      let selectedAction = enemySelectAction(me,enemydata.acts)
      await selectedAction.process(cam, me);
   }else{
      await addtext(`${enemy.name}は何かで攻撃した！`)
      selected = ShallTargetSelect(cam,me,'phpl',0);
      let result = await humandamaged(cam,selected[1],me,selected[0],1,'sh',1);
      if(result == 'end'){let results = killed(cam,me,selected[1],selected[0]);if(results !== 'continue'){return results;}}
   }
   NextTurnis(cam,me,selected[1],selected[0]);
}
function enemySelectAction(me, acts){
   let enemy = humans.enemies[me];

   let keys = Object.keys(acts);
   let probabilities = keys.map(key => acts[key].probability || 1);

   let lastType = enemy.lastype;
   if(lastType){
      //直前にreを実行していたならば、対応するab確定実行するやつ
      let absKey = keys.find(key => key.startsWith("ab") && key.endsWith(lastType));
      if (absKey) {
         enemy.lastype = null;
         return acts[absKey];
      }
   }

   //reをするとlastypeを記録
   let selectedKey = arrayGacha(keys, probabilities);
   if (selectedKey.startsWith("re")) {
      enemy.lastype = selectedKey.substring(2);//reを除いたものを保存
   }

   return acts[selectedKey];
}

function ShallTargetSelect(cam,me,code,both){
   //これは敵しか使わないターゲットセレクト。だから陣営とかは考えんでいいよ
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
         x = arraySelect(playerstatus.health)
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
         x = playerstatus.health[playerstatus.health.length - 1];
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
         x = playerstatus.atk[playerstatus.atk.length - 1]
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
         x = playerstatus.def[playerstatus.def.length - 1]
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
         x = arraySelect(enemystatus.health)
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
         x = enemystatus.health[enemystatus.health.length - 1]
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
         x = enemystatus.atk[enemystatus.atk.length - 1]
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
         x = enemystatus.def[enemystatus.def.length - 1]
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
async function killed(cam,me,tcam,target){//殺った側cam,meと殺された側tcam,target
   humans[tcam][target].health = 0;
   humans[tcam][target].status = 2;
   buffclear(tcam,target,'all');tekiou();
   
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
   //console.log(Object.keys(humans.enemies))
   let karix = false;
   karix = Object.keys(humans.enemies).every(id => {
      let Enemy = humans.enemies[id];
      return Enemy.status == 0 || Enemy.status == 2;//0か2ならOKってこと。everyは全会一致だからね
   });
   if(karix){
      //敵全滅
      karix = (Math.floor(Math.random() *11)+5)*numberofenemy;
      stone += karix;
      karix = Object.keys(humans.enemies).filter(a => humans.enemies[a].status >= 1).reduce((sum, id) => {
         let Enemy = humans.enemies[id];
         return sum + (Enemy.level||0);
      }, 0);
      rpt += karix;
      updateUI();
      await addtext('勝利した！');
      await addtext(`${karix}の経験値を奪った!`);
      Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(nanka => {// || humans.players[a].status == 2
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
      document.querySelector('#battleArea').style.display = 'none';
      document.querySelector('#overfieldArea').style.display = 'block';
      

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
         tekiou();
         await addtext(saydefeats[Math.floor(Math.random()*saydefeats.length)]);
         Object.keys(humans.players).filter(a => humans.players[a].status == 1||humans.players[a].status == 2).forEach(nanka => {
            humans.players[nanka].status = 1;
            humans.players[nanka].health = Math.floor(humans.players[nanka].maxhealth*0.5);
         })
         bossbattlenow = 0;
         floor = 0;GoNextFloor();

         document.querySelector('#battleArea').style.display = 'none';
         document.querySelector('#overfieldArea').style.display = 'block';

         MAPx = Math.floor(SELECTx / 75);
         MAPy = Math.floor(SELECTy / 75);
         draw()
         AllowMove = 0;
         
         return 'end';
      }else{
         return 'continue';
      }
   }
}   
async function EnemyAppear(){
   AllowMove = 1;
   document.querySelector('#overfieldArea').style.display = 'none';
   document.querySelector('#battleArea').style.display = 'block';
   select1.textContent = '';
   select2.textContent = '';
   select3.textContent = '';
   select4.textContent = '';

   //前までのやつの処理
   turretAllClear();
   enemy50pursuitenelgy = 1;

   x = Object.keys(humans.players).filter(a => humans.players[a].status == 1 || humans.players[a].status == 2).length;
   for(i = 1; i < x+1; i++){
      let newDiv = makeNewPlayer(i);
      document.querySelector('#players').appendChild(newDiv);
      tekiou();
   }
   x = [1,1,1,1,2,2,3]
   x = x[Math.floor(Math.random() * x.length)];
   for(i = 1; i < x+1; i++){
      humans.enemies[i] = DesideEnemyName(i);
      /**let newDiv = */makeNewEnemy(i);
      if(humans.enemies[i].prefixe){document.querySelector(`#enemies${i}`).style.backgroundColor = '#fefaff';}//ちょい強敵ってことね
      tekiou();
   }
   tekiou();
   logOOmoto.style.right = '0px';
   logOpener.textContent = '>';
   await addtext(`${humans.enemies[1].name}が現れた!`);
   
   // bar-create
   bar = {
      cam:[],
      num:[]
   }
   turncount = 0;
   NextTurnis(0);
}

function DesideEnemyName(target){
   let names = Object.keys(Enemies).filter(a => Enemies[a].stage == stage).map(a => Enemies[a].name);
   let enemyname = arraySelect(names);
   
   let nameData = Enemies[enemyname];
   let enemy = {};

   enemy.status = 1;
   enemy.cam = 'enemies';
   enemy.num = target;

   enemy.level = enemylv + Math.floor(Math.random() * 7)-3; 
   if(enemy.level < 1){enemy.level = 1;}
   
   enemy.id = enemyname; //nameは表示用、idは内部処理用
   enemy.name = enemyname;

   enemy.attack = enemyatk;
   enemy.defense = enemydef;
   enemy.mattack = enemymatk;
   enemy.mdefense = enemymdef;
   enemy.maxhealth = enemyhp;
   enemy.maxmp = enemymp;
   enemy.critlate = enemycrla;
   enemy.critdmg = enemycrdm;
   enemy.critresist = enemycrrs;
   enemy.speed = 50;

   enemy.power = 1;
   enemy.shell = 1;

   enemy.buffs = [];
   
   enemy.weapon = {id:'none', lv:1};
   enemy.armor  = {id:'none', lv:1};
   enemy.ear    = {id:'none', lv:1};
   enemy.ring   = {id:'none', lv:1};
   enemy.neck   = {id:'none', lv:1};

   enemy.ep = 0;
   enemy.ex = 'null';
   enemy.ns = 'null';
   enemy.ps = 'null';

   let statuses = ['attack','defense','mattack','mdefense','maxhealth','maxmp','critlate','critdmg','critresist','speed'];
   statuses.forEach(statu => {
      if(nameData[statu].startsWith('+') || nameData[statu].startsWith('-')){
         let num = Number(nameData[statu].slice(1));
         if(nameData[statu].startsWith('-')){num *= -1};
         enemy[statu] += num;
      }else if(nameData[statu].startsWith('=')){
         let num = Number(nameData[statu].slice(1));
         enemy[statu] = num;
      }
      //'0'なら変動無し
   })

   enemy.prefixe = '';
   let prefixe = arraySelect(Object.keys(Prefixes));
   if(Math.floor(Math.random() * 5) == 0){
      enemy.prefixe = Prefixes[prefixe].name;
      Prefixes[prefixe].process('enemies',target);
   };

   enemy.health = enemy.maxhealth;
   enemy.mp = enemy.maxmp;
   return enemy;
}

async function testEnemyAppear(){
   AllowMove = 1;
   document.querySelector('#overfieldArea').style.display = 'none';
   document.querySelector('#battleArea').style.display = 'block';
   select1.textContent = '';
   select2.textContent = '';
   select3.textContent = '';
   select4.textContent = '';

   //前までのやつの処理
   turretAllClear();
   enemy50pursuitenelgy = 1;

   x = Object.keys(humans.players).filter(a => humans.players[a].status == 1 || humans.players[a].status == 2).length;
   for(i = 1; i < x+1; i++){
      let newDiv = makeNewPlayer(i);
      document.querySelector('#players').appendChild(newDiv);
      tekiou();
   }

   let num = 1;
   const enemy = humans.enemies[num]

   enemy.status = 1;
   enemy.level = 2;
   enemy.name = '縺代▽縺ｰ繧'
   enemy.attack = 10;
   enemy.defense = 0;
   enemy.mattack = 10;
   enemy.mdefense = 0;
   enemy.maxhealth = 50;
   enemy.maxmp = 50;
   enemy.health = 50;
   enemy.maxmp = 50;
   enemy.critlate = 3;
   enemy.critdmg = 1.25;
   enemy.critresist = 0;
   enemy.speed = 50;

   let enemyDiv = document.createElement('div');
   enemyDiv.id = `enemies${num}`;
   enemyDiv.className = 'enemies';

   let border = document.createElement('div');
   border.className = 'border';

   let row = document.createElement('div');
   row.className = 'row';

   let name = document.createElement('span');
   name.className = 'name';
   name.textContent = enemy.name;
   row.appendChild(name);

   let level = document.createElement('span');
   level.className = 'level';
   level.textContent = 'Lv.' + enemy.level;
   row.appendChild(level);
   border.appendChild(row);

   let health = document.createElement('div');
   health.className = 'health';

   let healthNum = document.createElement('div');
   healthNum.className = 'num';
   healthNum.textContent = `${enemy.health}/${enemy.maxhealth}`;
   health.appendChild(healthNum);

   let healthBar = document.createElement('div');
   healthBar.className = 'bar';

   let healthBarInner = document.createElement('div');
   healthBarInner.className = 'inner';
   healthBarInner.style.width = `${(enemy.health / enemy.maxhealth) * 100}%`;
   healthBar.appendChild(healthBarInner);
   health.appendChild(healthBar);
   border.appendChild(health);

   let mp = document.createElement('div');
   mp.className = 'mp';

   let mpNum = document.createElement('div');
   mpNum.className = 'num';
   mpNum.textContent = `${enemy.mp}/${enemy.maxmp}`;
   mp.appendChild(mpNum);

   let mpBar = document.createElement('div');
   mpBar.className = 'bar';

   let mpBarInner = document.createElement('div');
   mpBarInner.className = 'inner';
   mpBarInner.style.width = `${(enemy.mp / enemy.maxmp) * 100}%`;
   mpBar.appendChild(mpBarInner);
   mp.appendChild(mpBar);
   border.appendChild(mp);
   enemyDiv.appendChild(border);

   let img = document.createElement('img');
   img.className = 'img';
   img.src = `assets/enemies/${enemy.name}.png`;
   enemyDiv.appendChild(img);

   let effects = document.createElement('div');
   effects.className = 'effects';

   let buffs = document.createElement('div');
   buffs.className = 'buffs';
   effects.appendChild(buffs);

   let debuffs = document.createElement('div');
   debuffs.className = 'debuffs';
   effects.appendChild(debuffs);
   enemyDiv.appendChild(effects);

   document.querySelector('#enemies').appendChild(enemyDiv);

   tekiou();
   logOOmoto.style.right = '0px';
   logOpener.textContent = '>';
   await addtext(`これは縺代▽縺ｰ繧だ！`);//訳:けつばん
   
   // bar-create
   bar = {
      cam:[],
      num:[]
   }
   turncount = 0;
   NextTurnis(0);
}

function makeNewPlayer(num){
   const player = humans.players[num];

   let playerDiv = document.createElement('div');
   playerDiv.id = `players${num}`;
   playerDiv.className = 'players';

   let effects = document.createElement('div');
   effects.className = 'effects';
   playerDiv.appendChild(effects);
   
   let main = document.createElement('div');
   main.className = 'main';

if(num !== 't'){
   let skill = document.createElement('div');
   skill.className = 'skill';

   let skillBack = document.createElement('img');
   skillBack.className = 'back';
   skillBack.src = `assets/skills/${player.ex}.png`;
   skill.appendChild(skillBack);

   let skillGauge = document.createElement('div');
   skillGauge.className = 'gauge';
   skillGauge.style.height = `${player.ep / player.maxep * 100}%`;
   skill.appendChild(skillGauge);
   main.appendChild(skill);
}

   let img = document.createElement('img');
   img.className = 'img';
   img.src = `assets/charas/${player.id}.png`; //長押しで詳細とか見れるようにしたい
   main.appendChild(img);
   playerDiv.appendChild(main);


   let border = document.createElement('div');
   border.className = 'border';

   let row = document.createElement('div');
   row.className = 'row';

   let name = document.createElement('span');
   name.className = 'name';
   name.textContent = player.name;
   row.appendChild(name);

   let level = document.createElement('span');
   level.className = 'level';
   level.textContent = 'Lv.' + player.level;
   row.appendChild(level);
   border.appendChild(row);

   let health = document.createElement('div');
   health.className = 'health';

   let healthNum = document.createElement('div');
   healthNum.className = 'num';
   healthNum.textContent = `${player.health}/${player.maxhealth}`;
   health.appendChild(healthNum);

   let healthBar = document.createElement('div');
   healthBar.className = 'bar';

   let healthBarInner = document.createElement('div');
   healthBarInner.className = 'inner';
   healthBarInner.style.width = `${(player.health / player.maxhealth) * 100}%`; //tekiouで色とか変えるようにしといて
   healthBarInner.style.backgroundColor = '#ff0000';
   healthBar.appendChild(healthBarInner);
   health.appendChild(healthBar);
   border.appendChild(health);

   let mp = document.createElement('div');
   mp.className = 'mp';

   let mpNum = document.createElement('div');
   mpNum.className = 'num';
   mpNum.textContent = `${player.mp}/${player.maxmp}`;
   mp.appendChild(mpNum);

   let mpBar = document.createElement('div');
   mpBar.className = 'bar';

   let mpBarInner = document.createElement('div');
   mpBarInner.className = 'inner';
   mpBarInner.style.width = `${(player.mp / player.maxmp) * 100}%`; //tekiouで色とか変えるようにしといて
   mpBar.appendChild(mpBarInner);
   mp.appendChild(mpBar);
   border.appendChild(mp);
   playerDiv.appendChild(border);

   return playerDiv;
}
function makeNewEnemy(num){
   const enemy = humans.enemies[num];

   let enemyDiv = document.createElement('div');
   enemyDiv.id = `enemies${num}`;
   enemyDiv.className = 'enemies';

   let border = document.createElement('div');
   border.className = 'border';

   let row = document.createElement('div');
   row.className = 'row';

   let name = document.createElement('span');
   name.className = 'name';

   let nameSpan = document.createElement('div');
   nameSpan.className = 'txt';
   nameSpan.textContent = enemy.name;
   name.appendChild(nameSpan);
   row.appendChild(name);

   let level = document.createElement('span');
   level.className = 'level';
   level.textContent = 'Lv.' + enemy.level;
   row.appendChild(level);
   border.appendChild(row);

   let health = document.createElement('div');
   health.className = 'health';

   let healthNum = document.createElement('div');
   healthNum.className = 'num';
   healthNum.textContent = `${enemy.health}/${enemy.maxhealth}`;
   health.appendChild(healthNum);

   let healthBar = document.createElement('div');
   healthBar.className = 'bar';

   let healthBarInner = document.createElement('div');
   healthBarInner.className = 'inner';
   healthBarInner.style.width = `${(enemy.health / enemy.maxhealth) * 100}%`;
   healthBar.appendChild(healthBarInner);
   health.appendChild(healthBar);
   border.appendChild(health);

   let mp = document.createElement('div');
   mp.className = 'mp';

   let mpNum = document.createElement('div');
   mpNum.className = 'num';
   mpNum.textContent = `${enemy.mp}/${enemy.maxmp}`;
   mp.appendChild(mpNum);

   let mpBar = document.createElement('div');
   mpBar.className = 'bar';

   let mpBarInner = document.createElement('div');
   mpBarInner.className = 'inner';
   mpBarInner.style.width = `${(enemy.mp / enemy.maxmp) * 100}%`;
   mpBar.appendChild(mpBarInner);
   mp.appendChild(mpBar);
   border.appendChild(mp);
   enemyDiv.appendChild(border);

   let img = document.createElement('img');
   img.className = 'img hasd';
   img.src = `assets/enemies/${enemy.name}.png`;
   img.setAttribute('data-description', 'これは新版のenemyDivです。これじゃないやついる？いねぇよなぁ？？')
   enemyDiv.appendChild(img);

   let effects = document.createElement('div');
   effects.className = 'effects';

   let buffs = document.createElement('div');
   buffs.className = 'buffs';
   effects.appendChild(buffs);

   let debuffs = document.createElement('div');
   debuffs.className = 'debuffs';
   effects.appendChild(debuffs);
   enemyDiv.appendChild(effects);

   document.querySelector('#enemies').appendChild(enemyDiv);


   //後付けハードディスク
   let spanScrollWidth = nameSpan.scrollWidth
   console.log(`${nameSpan.textContent}のnameSpanは${spanScrollWidth}です`)
   if(spanScrollWidth > 80){
      const animationName = `scroll-enemies${num}-${enemy.id}ver`;
      const styleSheet = document.styleSheets[0];
      let fixedTime = 1.5;//前後の固定タイム
      let moveTime = (spanScrollWidth - 80) * 0.05;

      styleSheet.insertRule(`
         @keyframes ${animationName} {
            0% { transform: translateX(0); }
            ${(fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(0); }
            ${(1 - fixedTime / (fixedTime * 2 + moveTime)) * 100}% { transform: translateX(-${Math.max(0, spanScrollWidth - 80)}px); }
            100% { transform: translateX(-${Math.max(0, spanScrollWidth - 80)}px); }
         }`, styleSheet.cssRules.length);
      nameSpan.style.animation = `scroll-enemies${num}-${enemy.id}ver ${fixedTime * 2 + moveTime}s linear infinite`;
   }


   return enemyDiv;
}
//#endregion

//#region　bossの動き
async function BossEnemyAppear(){
   AllowMove = 1;
   document.querySelector('#overfieldArea').style.display = 'none';
   document.querySelector('#battleArea').style.display = 'block';
   bossbattlenow = 1;
   select1.textContent = ' ';
   select2.textContent = ' ';
   select3.textContent = ' ';
   select4.textContent = ' ';
   turncount = 0;
   document.querySelector('#TurnCount').textContent = turncount;
   playermp = playermaxmp;
   playerpower = 1;playershell = 1;
   if(playerps == 'enemy50%pursuit'){enemy50pursuitenelgy = 1;};
   humans.enemies[me].health = humans.enemies[me].health; document.querySelector('#EnemyMaxHealth').textContent = humans.enemies[me].health; tekiou();
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
   document.getElementById('EnemyName').textContent = humans.enemies[me].name;
   logOpener.style.right = '300px'
   log.style.right = '0px'
   await addtext(`${humans.enemies[me].name}が現れた!`);
   document.querySelector('#EnemyLevel').textContent = enemylevel;
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
      if(humans.enemies[me].health <= humans.enemies[me].health * 0.3){await buffadd(cam,me,'shelldown','turn',1,1);}
      switch(Math.floor(Math.random()*4)+1){
         case 1:
         case 2:
            log.textContent = humans.enemies[me].name + 'の攻撃';
            humandamaged('players',me,targetselect,1,1);
            break;
         case 3:
            log.textContent = humans.enemies[me].name + 'は大きく息を吐いた！';
            await buffadd(cam,me,'poison','turn',2,1);
            break;
      }
   }else if(humans.enemies[me].name == 'steampumker'){
      //ターン数が奇数: 攻撃
      //ターン数が偶数: タレットの設置
      //タレットが3つ以上: 攻撃力の3倍のダメージで攻撃、タレットを破壊
      if(enemyturret >= 3){
         humandamaged('players',me,targetselect,enemyturret,1);
         document.querySelector('#EnemyFriendBack').innerHTML = '';
         enemyturret = 0;
         EnemyTurrettekiou();
      }
      if((turncount % 2) == 0){
         document.querySelector('#EnemyFriendBack').innerHTML = '<br><b><font color="#DF0101">Turret</font><span id="EnemyTurret"></span></b><br><br>';
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
         case 0:log.textContent = '爆弾は閃光弾だった!!';await buffadd(cam,me,'stan','turn',1,1);y = 0.5;break;
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
   document.querySelector('#EnemyTurret').textContent = 'x' + enemyturret;
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
   document.querySelector('#eventArea').innerHTML = '';
   
   document.querySelector('#battleArea').style.display = 'none';
   document.querySelector('#overfieldArea').style.display = 'block';
   
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
         document.querySelector('#eventArea').innerHTML = '<iframe height="230" width="200" src="assets/shops/weapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 2){
         log.textContent = '防具屋に話しかけた！';
         await delay(1000);
         nowshop = 2;
         log.textContent = 'うちの店ではこんなものが売ってるよ';
         document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/armors.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 3){
         log.textContent = '道具屋に話しかけた！';
         await delay(1000);
         nowshop = 3;
         log.textContent = 'いらっしゃいませぇぇぇぇぇ？？ご注文をどうぞ！！！！';
         document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/tools.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
      }else if(y == 10){
         log.textContent = '武器屋に話しかけた！';
         await delay(1000);
         nowshop = 10;
         log.textContent = 'ほう..よく来たな。好きに見ていってくれ';
         document.querySelector('#eventArea').innerHTML = '<iframe height="400" width="300" src="assets/shops/rareweapons.txt"></iframe><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopBuyButton()">Buy</button><br><br><button class="button" onclick="CampBye()">Bye</button>';
}
     
  }
  
//shop
let nowshop = 0;
function ShopBuyButton(){
   const num = +document.querySelector('#ShopInputText').value;
   switch(nowshop){
      case 1:
      if(haveweapons.includes(weapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(stone >= weapons.price[num]){
            stone -= weapons.price[num];
            haveweapons.push(weapons.name[num]);
            log.textContent = weapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough stone..';
         };
      }
      break;
      case 10:
      if(haveweapons.includes(rareweapons.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(stone >= rareweapons.price[num]){
            stone -= rareweapons.price[num];
            haveweapons.push(rareweapons.name[num]);
            log.textContent = rareweapons.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough stone..';
         };
      }
      break;
      case 2:
      if(havearmors.includes(armors.name[num])){
         log.textContent = 'you already have a it!';
      }else{
         if(stone >= armors.price[num]){
            stone -= armors.price[num];
            havearmors.push(armors.name[num]);
            log.textContent = armors.name[num]+'を購入しました!';
         }else{
            log.textContent = 'not enough stone..';
         };
      }
      break;
      case 3:
      if(stone >= tools.price[num]){
         stone -= tools.price[num];
         eval(tools.id[num]).num++;
         log.textContent = tools.name[num]+'を購入しました!';
      }else{
         log.textContent = 'not enough stone..';
      };
      break;
   }



   save();
   document.querySelector('#ShopInputText').value = '';
}
function CampBye(){
   log.textContent = 'ついでに装備を変えていこうかな？';
   document.querySelector('#eventArea').innerHTML = '<button class="button"onclick="GoToEquip()">そうしよう！</button><br><button class="button"onclick="Campback()">やめとこう！</button>';
}
function Campback(){
   document.querySelector('#eventArea').innerHTML = '<button id="CampRest" onclick="Camprest()"></button><br><button id="CampTrade" onclick="Camptrade()"></button>'
   document.querySelector('#CampRest').textContent = '朝まで休む(' + Camprestper*100 + '%回復)';//30のときはスキルカード強化みたいなやつあってもいいかも
   switch(y){
      case 1: document.querySelector('#CampTrade').textContent = '武器商人に話しかける';     break;
      case 2: document.querySelector('#CampTrade').textContent = '防具取扱専門家に話しかける'; break;
      case 3: document.querySelector('#CampTrade').textContent = '道具屋24に話しかける';     break;
      case 10:document.querySelector('#CampTrade').textContent = '放浪武器商人に話しかける';   break;
   }
}
let appearweapons = '';
let appeararmors = '';
let appeartools = '';
function GoToEquip(){
   document.querySelector('#eventArea').innerHTML = '<button class="button"onclick="GoToEquipWeapon()">Equip Weapon</button>  <button class="button"onclick="GoToEquipArmor()">Equip Armor</button>  <button class="button"onclick="GoToEquipTool()">Equip Tool</button><br><br><button class="button"onclick="Campback()">Leave</button>'
}
function GoToEquipWeapon(){
   nowshop = 4;
   document.querySelector('#eventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appearweapons = '';
   x = 0;
   for(let i = 0; i < haveweapons.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = haveweapons[i]+ ` <button class="button" onclick="ShopEquipButton('weapon',${i})">Equip</button>` + '<br>';
      document.querySelector('#AppearShops').appendChild(ChildNText);
   }
}
function GoToEquipArmor(){
   nowshop = 5;
   document.querySelector('#eventArea').innerHTML = '<span id="AppearShops"></span><br><br><input type="text" id="ShopInputText" minlength="2" maxlength="2" size="16" placeholder="write number here"><button class="button" onclick="ShopEquipButton()">Equip</button><br><br><button class="button" onclick="GoToEquip()">Back</button>';
   appeararmors = '';
   x = 0;
   for(let i = 0; i < havearmors.length; i++){
      let ChildNText = document.createElement('span');
      ChildNText.innerHTML = havearmors[i]+ ` <button class="button" onclick="ShopEquipButton('armor',${i})">Equip</button>` + '<br>';
      document.querySelector('#AppearShops').appendChild(ChildNText);
   }
}
function ShopEquipButton(){
   const Num = +document.querySelector('#ShopInputText').value;
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
   document.querySelector('#ShopInputText').value = '';
}
function GoToEquipTool(){
   nowshop = 6;
   
   document.querySelector('#eventArea').innerHTML = '<iframe src="resources/appeartools.html" width="100%" height="100%" frameborder="0"></iframe><br><div id="Camptoolequip"><button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button></div><br><br><button class="button" onclick="GoToEquip()">Back</button>'; //持ってないやつも登録できるようにしたら処理楽かな？
   document.querySelector('#Campequipedtool1').textContent = humans.players[1].tool1.name;
   document.querySelector('#Campequipedtool2').textContent = equiptool2.name;
   document.querySelector('#Campequipedtool3').textContent = equiptool3.name;
   log.textContent = 'どうしようかな...?';
   }
function Campequiptool(code){
   x = code;
   log.textContent = '何を持とう？';
   x = [];
   document.querySelector('#Camptoolequip').innerHTML = `
   <i>Item一覧</i><br>
   <div id="toolsdesuwa"></div>
   `;
   Object.keys(Tools).filter(a => Tools[a].num > 0).forEach(nanka => {
      let c = document.createElement('button');
      c.textContent = Tools[nanka].name+' x'+Tools[nanka].num;
      c.classList.add('button');
      c.addEventListener('click', () => {
         document.querySelector('#toolsdesuwa').remove();
         humans.players[1].tool1[code] = Tools[nanka].id;
         document.querySelector('#Camptoolequip').innerHTML = '<button id="Campequipedtool1" class="button" onclick="Campequiptool(1)"> </button>　<button id="Campequipedtool2" class="button" onclick="Campequiptool(2)"> </button>　<button id="Campequipedtool3" class="button" onclick="Campequiptool(3)"> </button>';
         document.querySelector('#Campequipedtool1').textContent = humans.players[1].tool1.name;
         document.querySelector('#Campequipedtool2').textContent = humans.players[1].tool2.name;
         document.querySelector('#Campequipedtool3').textContent = humans.players[1].tool3.name;
         log.textContent = Tools[nanka].name+'を持つことにした！';
      })
      x.push(c);
   })
   document.querySelector('#toolsdesuwa').innerHTML = x.join('');
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
   document.querySelector('#overfieldArea').style.display = 'none';
   document.querySelector('#eventArea').style.display = 'block';
   document.querySelector('#eventArea').innerHTML = `
   <div id="skillshopcorner"></div><br>
   <button class="button" onclick="SkillShopClose()">Exit</button>
   `
   const cardsContainer = document.querySelector('#skillshopcorner');
   cardsContainer.style.display = 'block';
   cardsContainer.innerHTML = ''; // 前の内容をクリアする
   const selectedItems = arrayShuffle(Allskill).slice(0, 6);
   selectedItems.forEach(item => {
     const card = skillshopcreateCard(item);
     cardsContainer.appendChild(card);
   });
  }

  function SkillShopClose() {
   document.querySelector('#skillshopcorner').innerHTML = ''; // 前の内容をクリアする
   
   document.querySelector('#overfieldArea').style.display = 'block';
   
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objMap[MAPy][MAPx] = 0;
   draw()
   AllowMove = 0;
  }

  function BuyItem(type,id,name,price) {
   if(stone >= price){
     stone -= price;
     humans.players[1][type][id] = id;
     log.textContent = name + 'を購入しました！';
   }else{
     log.textContent = 'not enough stone...';
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
      buffclear(cam,me,'all');
      await buffadd('players',1,'luck','turn',2,1);
   } else {
      log.textContent = 'ボタンが溶けて手がやられた！';
      await buffadd(cam,me,'shelldown','turn',3,1);
      await buffadd(cam,me,'powerdown','turn',3,2);
   }
   await delay(1000);
   
   document.querySelector('#overfieldArea').style.display = 'block';
   

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
   document.querySelector('#eventArea').innerHTML = '';
   
   document.querySelector('#battleArea').style.display = 'none';
   document.querySelector('#overfieldArea').style.display = 'block';
   

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
   document.querySelector('#eventArea').innerHTML = '';
   
   document.querySelector('#battleArea').style.display = 'none';
   document.querySelector('#overfieldArea').style.display = 'block';
   

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
   
}
//#endregion
//#region scorpion 廃止予定
async function ScorpionAct(code){
   log.textContent = '刺された...';
   switch(code){
      case 1:await buffadd('playerbuff','poison','turn',3,1);break;
      case 2:await buffadd('playerbuff','poison','turn',3,2);break;
   }
   playerattack += 10*code;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objMap[MAPy][MAPx] = 0;
   await delay(500);
   
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
   document.querySelector('#ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
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
   document.querySelector('#ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);
   objMap[MAPy][MAPx] = 0;
   draw()
   AllowMove = 0;
}
// #endregion      

