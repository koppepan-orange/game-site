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

let movable = 0;

let SELECTx = 0; // x座標
let SELECTy = 0; // y座標
let MAPx,MAPy;


const keys = {};
document.addEventListener("keydown", (e) => {
   let key = e.key
   if(key == ' ') key = 'space'
   keys[key] = true
});
document.addEventListener("keyup", (e) => {
   let key = e.key
   if(key == ' ') key = 'space'
   keys[e.key] = false
});

// キーが押されたときの...やつ
document.addEventListener('keydown', async function(event) {
   if(!movable) return;
   let moved = 0;

   draw();

   karix = SELECTx;
   kariy = SELECTy;
   
   let speed = 75;
   switch(event.key) {
      case 'w':
      case 'ArrowUp': // 上
         event.preventDefault();
         kariy -= speed;
         break;
      case 'a':
      case 'ArrowLeft': // 左
         event.preventDefault();
         karix -= speed;
         moved = 1;
         break;
      case 's':
      case 'ArrowDown': // 下
         event.preventDefault();
         kariy += speed;
         moved = 1;
         break;
      case 'd':
      case 'ArrowRight': // 右
         event.preventDefault();
         karix += speed;
         moved = 1;
         break;
   }

   if(objMap[MAPy][MAPx] != undefined || objMap[MAPy][MAPx] != 18){
      SELECTx = karix;
      SELECTy = kariy;
   }

   draw()

   if(MAPx < 0 || 8 < MAPx || MAPy < 0 || 8 < MAPy){
      addtext('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
      await delay(2000);
      window.open('about:blank', '_self').close();
   }
   

   // ここに爆弾　一旦廃止してます
   // if(moved == 1){
   // if(objMap.some(row => row.includes(15))){
   //    bombtimer--;
   //    if(bombtimer <= 0){
   //       triggerExplosion(PlacedBombx, PlacedBomby);
   //    }
   // }}
   // function triggerExplosion(centerX, centerY) {
   //    let explosionStage = 0;
   //    const stageDelay = 100; //エフェクトの処理速度
   
   //    function drawExplosion(){
   //       let img;
   //       if (explosionStage === 0) {
   //          img = explosion1;//なんか最初だけ白くなってる もうちょい調整いる
   //       } else if (explosionStage === 1) {
   //          img = explosion2;
   //       } else if (explosionStage === 2) {
   //          img = explosion3;
   //       }

   //       //MAPx = Math.floor(SELECTx / 75);
   //       //MAPy = Math.floor(SELECTy / 75);
   //       //objMap[MAPy][MAPx] = 15;
   //       //bombtimer = 5;
   //       //PlacedBombx = MAPx;
   //       //PlacedBomby = MAPy;
   
   //       // 爆発のエフェクトを十字に描画する
   //       for (let i = 0; i < 4; i++) {
   //          let explosionCoords = [
   //             [centerX + i, centerY],
   //             [centerX - i, centerY],
   //             [centerX, centerY + i],
   //             [centerX, centerY - i]
   //          ];
   
   //          explosionCoords.forEach(([x, y]) => {
   //             ctx.clearRect(x * 75, y * 75, 75, 75); // 前のフレームを消去
   //             ctx.drawImage(img, x * 75, y * 75, 75, 75); // 新しいフレームを描画
   //             //DrawBackground();
   //             //ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   //          });
   //       }
   
   //       explosionStage++;
   
   //       if (explosionStage < 3) {
   //          setTimeout(drawExplosion, stageDelay);
   //       } else {
   //          clearExplosion(centerX, centerY);
   //       }
   //    }
   
   //    // 爆発アニメーションを開始
   //    drawExplosion();

   

   //    function clearExplosion(centerX, centerY) {
   //       for (let i = 0; i < 4; i++) {
   //          let explosionCoords = [
   //             [centerX + i, centerY],
   //             [centerX - i, centerY],
   //             [centerX, centerY + i],
   //             [centerX, centerY - i]
   //          ];
      
   //          explosionCoords.forEach(([x, y]) => {
   //             if (x >= 0 && x < objMap[0].length && y >= 0 && y < objMap.length) {
   //                // 座標がマップ範囲内なら0にする
   //                objMap[y][x] = 0;
   //             }
   //          });
   //       }
   //       objMap[PlacedBomby][PlacedBombx] = 0;
   //       ctx.clearRect(0, 0, 600, 600); 
   //       DrawBackground();
   //       ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
   //    }

   // }
   

});


function draw() {
   if(SELECTx<0) SELECTx=0;
   if(SELECTy<0) SELECTy=0;
   if(SELECTx>525) SELECTx=525;
   if(SELECTy>525) SELECTy=525;

   MAPx = Math.floor(SELECTx / 75);
   MAPy = Math.floor(SELECTy / 75);

   ctx.clearRect(0, 0, 600,600);
   DrawBackground();
   ctx.drawImage(IMGselect, SELECTx, SELECTy, 75, 75);
}

document.addEventListener('keydown', (event) => {
   if(movable == 1 && dungeonnow == 1 && textShowing == 0){
      if(event.key == 'Enter'||event.key == 'z'){

      draw()

      // マップの値をチェック
      if(MAPy >= 0 && MAPy < objMap.length && MAPx >= 0 && MAPx < objMap[MAPy].length){
         NanigaOkirukana[objMap[MAPy][MAPx]].process();
      }
      
      draw()
      }
   }
   if(event.key == 'e' && document.querySelector('#overfieldArea').style.display == 'block'){
      if(movable){
         movable = 0;
         window.setTimeout(inventoryOpen,200)
      }else{
         movable = 1;
         window.setTimeout(inventoryClose,200)
   }}else if(event.key == 'g' && document.querySelector('#overfieldArea').style.display == 'block'){
      testEnemyAppear();
   }
});


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
   objMap = objMaps[Math.floor(Math.random() *   MAPy)+MAPx];
   objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));

   if(stage == 1){
      if(fun == 23 && probability(10)){
         backMap = backMaps[4];
         objMap = objMaps[6];
      }else if(fun <= 50 && probability(10)){
         backMap = backMaps[5];
         objMap = objMaps[7];
      };
   }else if(stage == 2){
      if(fun == 68 && probability(10)){
         backMap = backMaps[11];
         objMap = objMaps[14];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      }else if(fun <= 50 && probability(10)){
         backMap = backMaps[19];
         objMap = objMaps[23];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      };
   }else if(stage == 3){
      if(fun == 68 && probability(10)){
         backMap = backMaps[18];
         objMap = objMaps[22];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      }else if(fun <= 50 && probability(10)){
         backMap = backMaps[19];
         objMap = objMaps[23];
         objMap = JSON.parse(JSON.stringify(objMaps[Math.floor(Math.random() * MAPy) + MAPx]));
      };
   }
   if(stage == 1 && floor >= 10){SELECTx = 150;SELECTy = 525;backMap = backMaps[6];objMap = objMaps[8]}; //創生黎明の原野
   if(stage == 2 && floor >= 7 ){SELECTx = 150;SELECTy = 525;backMap = backMaps[13];objMap = objMaps[16]}; //ガチェンレイゲスドゥールラート(昼)
   if(stage == 3 && floor >= 3 ){SELECTx = 150;SELECTy = 525;backMap = backMaps[20];objMap = objMaps[24]}; //ガチェンレイゲスドゥールラート(夜)

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

//#region komagome
function delay(ms){
   return new Promise(resolve=>setTimeout(resolve,ms));
};
async function nicoText(mes){
   const newDiv = document.createElement('div');
   newDiv.textContent = mes;
   newDiv.className = 'nicotext';
   newDiv.style.top = `calc(${random(0,100)}vh - 20px)`
   body.appendChild(newDiv);
   //let speed = (Math.random()*100+1)*0.1;
   //let speed = mes.toString().length*2 
   let speed = 2;
   for(let i = 0; window.innerWidth > i*speed; i++){
      let val = i*speed;
      newDiv.style.right = `${val}px`
      await delay(5);
   }
   newDiv.remove();
};
function arraySelect(array){
    let select = Math.floor(Math.random()*array.length);
    return array[select];
};
function arrayShuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
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
};
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
};
function probability(num){
    return Math.random()*100 <= num;
    //例:num == 20 → randomが20以内ならtrue,elseならfalseを返す
};
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function countText(text){
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
function setLocalStorage(name, value) {
   localStorage.setItem(name, value || "");
}
function getLocalStorage(name) {
   return localStorage.getItem(name);
}
//#endregion
//#region 変数達
let w,x,y,z;//こいつらは計算

let fun = random(1,100);

let turn = ['players', 1];//今誰のターンか
let turncount = 0;//今のターン数
let phase = 0;//何中か

//保存されるデータs
let username = 'no name';
let rank = 1;
let rpt = 0;
let maxrpt = 100;
let stone = 0;
let bankstone = 0;

//毎ダンジョン変わるデータs 固有値というか規定値。接頭辞によってこっから変動させたりできるようにする用
let enemylv = 1;
let enemyhp = 0;
let enemymp = 0;
let enemyatk = 0;
let enemydef = 0;
let enemymatk = 0;
let enemymdef = 0;
let enemycrla = 0;
let enemycrdm = 0;
let enemycrrs = 0;


let sp = 1;//能力上昇(ダンジョン内有効)用

let acted = 0;
let bar = {
   cam:['players','players','players','players','enemies','enemies','enemies','enemies'],
   num:[1,2,3,4,1,2,3,4]
}

//0 = false,1 = true
let afknow = 0;
let dungeonnow = 0;
let bossbattlenow = 0;


let myWeapons = [];
let myArmors = [];
let mySkills = [];

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

//#endregion

//#region ダブルタップによる拡大を禁止するやつ
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
//#endregion


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
};

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
   movable = 1;
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
      nicoText('spがないのぜ');
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

let smartMenu = document.querySelector("#smartMenu");
let smartPhone = smartMenu.querySelector(".main");
smartPhone.addEventListener("click", () => {
   smartMenu.querySelectorAll(".item:not(.main)").forEach(item => {
      item.classList.toggle("hidden");
   });
});

//#region notice
const noticeButton = document.querySelector('#smartMenu .notice');
const noticeMain = document.querySelector('#notice');
const noticeList = document.querySelector('#notice .list');
const noticeShow = document.querySelector('#notice .show');
const noticeShowX = document.querySelector('#notice .x');
const noticeShowBack = document.querySelector('#notice .back');
const noticeShowTitle = document.querySelector('#notice .show .title');
const noticeShowDate = document.querySelector('#notice .show .date');
const noticeShowBody = document.querySelector('#notice .show .body');
let noticeNow = 0;

noticeButton.addEventListener('click', () => {
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
//#region questの動き
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
   quest.main = quest.main[clearedmainquest];

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
let loginDiv = document.querySelector('#login');
let loginAbleto = document.querySelector('#upperUI .login');

async function GameStart(){
   document.querySelector('#homeArea').style.display = 'block';

   //autoLogin
   username = getLocalStorage("username"); // ログイン時
   if(username){
      console.log("自動ログインしました");
      usersRef = database.ref(`users/${username}/forrpg`);
      nicoText('wait for now...')
      login();
   }else{
      console.log("ログインしてください");
      loginAbleto.style.display = 'block'
   }
}

loginAbleto.addEventListener('click', () =>  {
   loginDiv.style.display = 'block';
})

loginDiv.querySelector('.button').addEventListener('click', async function(event){
   event.preventDefault();
   username = document.querySelector('#login .username').value;
   var password = document.querySelector('#login .password').value;
   let kariusersRef = database.ref('users/'+username+'/forrpg');

   // データベースでユーザーが存在するか確認
   kariusersRef.once('value').then(async function(snapshot){
      if(snapshot.exists()){
         userData = snapshot.val();
         if(userData.password === password){
            console.log('success!!!!!!!!!!!!!!!')
            login();
            setLocalStorage("username", username); // ログイン成功時
         } else {
            nicoText('パスワードが間違っています');
         }
      }else{
         usersRef.update({
            password: password,
         });
         
         stone = 0;
         bankstone = 0;
         rank = 1;
         rpt = 0;
         clearedmainquest = 0;
         clearedmainquest = 0;

         quest.main = quest.main[0];
         quest.daily = [];
         for(i = 0;i < 5;i++){
            let newquest = arraySelect(quest.daily)
            newquest.id = i+1;
            quest.daily.push(newquest);
         }

         save()
         console.log('maked!!!!!!!!!!!!!!!!!!!!!')
         login();
         setLocalStorage("username", username);
      }
   });
   
});

// function questMake(code){
//    if(code == 'daily'){
//       for(i = 0;i < 5;i++){
//          let newquest = arraySelect(quest.daily)
//          newquest.id = i+1;
//          quest.daily.push(newquest);
//       };
//    };
// };

async function login(){

   usersRef.update({
      status: 'online'
   });
   loginDiv.style.display = 'none';
   document.querySelector('#chat-tab #chat').style.display = 'flex';
   selectRoom( )


   // データを取得する関数)
   userData = await load();
   await delay(50)

   stone = userData.stone??0;
   bankstone = userData.bankstone??0;
   rank = userData.rank??1;
   rpt = userData.rpt??0;
   clearedmainquest = userData.clearedmainquest??0;
   cleareddailyquest = userData.cleareddailyquest??0;
   maxrpt = rank*100;

   updateUI();
   
   quest.main = Quests.main[clearedmainquest+1];
   if(userData && checkLastLogin(userData?.lastact??0)){
      cleareddailyquest = 0;
      Object.keys(quest).filter(a => a.kind == 'daily').forEach(nanka => {
         quest[nanka] = arraySelect(Quests);
         quest[nanka].id = eval(nanka.slice(5));
      });
   }

   await delay(50);
   console.log('最初のロードのcd')
   cd('home','home','home')
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

   
   //こっからchat
   document.querySelector('#message-input').addEventListener('keypress', function(e) {
      if (e.key == 'Enter') {
         if(!e.shiftKey){
            e.preventDefault();
            document.querySelector('#send-button').click();
         }else{
            document.querySelector('#message-input').value += '<br>'
         }
      }
   });

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
      displayAllMessages(snapshot);  // 一回だけ全メッセージを表示
   });
}

function displayAllMessages(snapshot){
   var roomSelect = document.querySelector('#room-select');
   chatroom = roomSelect.value;
   document.querySelector('#messages').innerHTML = '';

   // データベースから全てのメッセージを取得
   snapshot.forEach(function(childSnapshot){
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

   if (snapshot.numChildren() > 30) {
      var firstMessageKey = Object.keys(snapshot.val())[0];
      messagesRef.child(firstMessageKey).remove();
   }

   // 最新のメッセージが見えるようにスクロール
   document.querySelector('#messages').scrollTop = document.querySelector('#messages').scrollHeight;
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
   document.querySelector('#upperUI .stone').innerHTML = `${stone}𐩰`; 

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
      nicoText(`${m}€払い、${e}$チャージ完了、です！`);
   }else{
      nicoText('お金が足りません...');
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
async function cd(tab, area, selection, detail1, detail2, detail3){
   console.log(`tab:${tab} area:${area} selection:${selection} detail1:${detail1} detail2:${detail2} detail3:${detail3}に移動します！！`);
   console.log((`#${tab}-tab${area ? ` #${area}Area` : ''}${selection ? ` .${selection}` : ''}${detail1 ? ` .${detail1}` : ''}${detail2 ? ` .${detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`))
   
   // document.querySelector(`#${nowPlace.tab}-tab${nowPlace.area ? ` #${nowPlace.area}Area` : ''}${nowPlace.selection ? ` .${nowPlace.selection}` : ''}${nowPlace.detail1 ? ` .${nowPlace.detail1}` : ''}${nowPlace.detail2 ? ` .${nowPlace.detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'none';
   if(nowPlace.tab) document.querySelector(`#${nowPlace.tab}-tab`).style.display = 'none';
   if(nowPlace.area) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area`).style.display = 'none';
   if(nowPlace.selection) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection}`).style.display = 'none';
   if(nowPlace.detail1) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1}`).style.display = 'none';
   if(nowPlace.detail2) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1} .${nowPlace.detail2}`).style.display = 'none';
   if(nowPlace.detail3) document.querySelector(`#${nowPlace.tab}-tab #${nowPlace.area}Area .${nowPlace.selection} .${nowPlace.detail1} .${nowPlace.detail2} .${nowPlace.detail3}`).style.display = 'none';

   // document.querySelector(`#${tab}-tab${area ? ` #${area}Area` : ''}${selection ? ` .${selection}` : ''}${detail1 ? ` .${detail1}` : ''}${detail2 ? ` .${detail2}` : ''}${detail3 ? ` .${detail3}` : ''}`).style.display = 'block';
   if(tab) document.querySelector(`#${tab}-tab`).style.display = 'block';
   if(area) document.querySelector(`#${tab}-tab #${area}Area`).style.display = 'block';
   if(selection) document.querySelector(`#${tab}-tab #${area}Area .${selection}`).style.display = 'block';
   if(detail1) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1}`).style.display = 'block';
   if(detail2) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1} .${detail2}`).style.display = 'block';
   if(detail3) document.querySelector(`#${tab}-tab #${area}Area .${selection} .${detail1} .${detail2} .${detail3}`).style.display = 'block';


   nowPlace = {
      tab: tab,
      area: area,
      selection: selection,
      detail1: detail1,
      detail2: detail2,
      detail3: detail3
   };
}

document.addEventListener('click', e => {
   const gotoTarget = e.target.closest('[data-goto]');
   if(gotoTarget){
      const reach = gotoTarget.dataset.goto;
      const goList = reach.split(' ');
      const [tab, area, selection, detail1, detail2, detail3] = [...goList, null, null, null, null, null, null];
      cd(tab, area, selection, detail1, detail2, detail3);
   };
})

//#region rpgtoka
async function HomeLetsDungeon(){
   save();

   cd('home', 'home', 'station', 'select');
   document.querySelector('#home-tab #homeArea .station .select .chara').style.display = 'flex';

   fun = random(1,100);//毎回変更されるのぜ
   stage = 1;
   floor = 0;

   humans.players[1].level = 1;
   humans.players[1].exp = 0;
   sp = 1;
   
   for(let id of Object.keys(Charas)){
      let chara = Charas[id];
      let newDiv = document.createElement('div');
      newDiv.className = 'item';
      newDiv.id = chara.name;
      newDiv.addEventListener('click', function(){
         HomeGoDungeon(chara.id);
      })
      
      let img = document.createElement('img');
      img.className = 'img';
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
      
      document.querySelector('#homeArea .station .select .chara').appendChild(newDiv);

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
   document.querySelector('#homeArea').style.display = 'none';
   document.querySelector('#overfieldArea').style.display = 'block';
   GoNextFloor();

   movable = 0;

   IMGselect = new Image();
   IMGselect.src = images[humans['players'][1].id].src

   SELECTx = 0;
   SELECTy = 0;
   draw()
   movable = 1;
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

async function humandamaged(cam, me, tcams, targets, rate, kind, attributes){
   if(!Array.isArray(tcams)){tcams = [tcams];}
   if(!Array.isArray(targets)){targets = [targets];}
   for(let i = 0; i < tcams.length; i++){
      let tcam = tcams[i];
      let target = targets[i];
      //攻撃x回復o = heal 攻撃+攻撃者与ダメ回復 = absorb
      //防御無視 = penetrate 確定会心 = crit 会心無効 = nocrit
      //固定値 = fixed
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
      if(attributes.includes('fixed')) damage = rate;

      //防御力
      if(!attributes.includes('penetrate')) damage -= kind == 'sh' ? (defender.defense * defender.shell) : (defender.mdefense * defender.shell)

      //会心
      if(isCrit(attacker.critlate, defender.critresist) && !attributes.includes('nocrit') || attributes.includes('crit')){
         damage += (defender.defense * defender.shell);
         damage *= attacker.critdmg;
         await addtext('かいしんのいちげき！')
      };

      //整え
      damage = Math.floor(damage);
      if(defender.health < damage) damage = defender.health;
      console.log(`${defender.health} => ${defender.health - damage} | damage:${damage}`);

      //実装
      if(!attributes.includes('heal'))
         defender.health -= damage;
      else defender.health += damage;

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
            let res = humandamaged(cam,me,tcam,target,0.5,'sh',['unpursuit']);
            if(res == 'end'){return 'end'};
         }else if(attacker.name == 'herta' && defender.health <= defender.maxhealth / 2 && attacker.level >= 10 && defender.health > 0){//1凸効果「弱みは付け込み」
            let res = humandamaged(cam,me,tcam,target,0.2,'sh',['unpursuit']);
            if(res == 'end'){return 'end'};
         }
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
         movable = 1;
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

         // 基本、[me,cam]の並びになるはず
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
      nicoText('まだクールダウン中ですわ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
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

//#region next-turn
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
      let result = await humandamaged(cam,me,selected[1],selected[0],1,'sh',1);
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
   Object.keys(quest).filter(a => quest[a].type == 'k' && quest[a].term.includes(0) || quest[a].term.includes(stage) && tcam == 'enemies').forEach(nanka => {
      quest[nanka].acted += 1;
      if(quest[nanka].acted >= quest[nanka].act){
         quest[nanka].acted = quest[nanka].act;
         quest[nanka].type =  '';
      }
   })

   //あれ、もしかして全滅しちゃった？な動
   let result = await killedCheck();
   return result;
}
async function killedCheck(){
   let isZemetu = false;
   isZemetu = Object.keys(humans.enemies).every(id => {
      let Enemy = humans.enemies[id];
      return Enemy.status == 0 || Enemy.status == 2;//0か2ならOKってこと。everyは全会一致だからね
   });
   if(isZemetu){
      //敵全滅
      let enemyKaz = Object.keys(humans['enemies']).length;
      let recievable = random(5,15) * enemyKaz;
      stone += recievable;
      
      let gainExp = 0;
      Object.keys(humans.enemies).filter(a => humans.enemies[a].status >= 1).forEach(a => {
         gainExp += a.level;
      })
      rpt += gainExp;
      updateUI();
      await addtext('勝利した！');
      await addtext(`${gainExp}の経験値を奪った!`);
      Object.keys(humans.players).filter(a => humans.players[a].status == 1).forEach(nanka => {// || humans.players[a].status == 2
         humans.players[nanka].exp += gainExp;
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
      
      objMap[MAPy][MAPx] = 0;//戦利品的な何かにしてもいいかも..いやなし
      draw()
      movable = 1;
      return 'end';
   }else{
      let isZemetu = [1,2,3,4].every(id => {
         let Player = humans.players[id];
         return Player.status == 0 || Player.status == 2;
      })
      if(isZemetu){
         let saydefeats = [`${humans.players[1].name}は力尽きた...残念でしたね！にはははは〜！`, '残念だったね!すごい惜しかったね!!', 'あ、あれ..？もう負けちゃったんですか....？', 'ほら、負けを認めてください？'];
         if(humans.players[1].level < 3)saydefeats = ['あはは..負けちゃいましたね....防御力を上げると楽ですよ!', 'あはは..負けちゃいましたね....double slashは運要素も少ないので強いですよ!', 'あはは..負けちゃいましたね....魔法にターン数制限はありません!いっぱい使っちゃいましょう!', 'あはは..負けちゃいましたね....mechanicは防御全振りで戦うと良いですよ!', 'あれ〜？負けちゃったんですか〜？？おにいさんよわいね〜？？'];
         
         await addtext(arraySelect(saydefeats));

         Object.keys(humans.players).filter(a => humans.players[a].status == 1||humans.players[a].status == 2).forEach(nanka => {
            humans.players[nanka].status = 1;
            humans.players[nanka].health = Math.floor(humans.players[nanka].maxhealth*0.5);
         })

         bossbattlenow = 0;
         floor = 0;
         GoNextFloor();

         document.querySelector('#battleArea').style.display = 'none';
         document.querySelector('#overfieldArea').style.display = 'block';

         draw()
         movable = 1;
         
         return 'end';
      }else{
         return 'continue';
      }
   }
}   
async function EnemyAppear(){
   movable = 0;
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
   movable = 0;
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
   movable = 0;
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
   log.textContent = '寝ることにした....';//睡眠阻害イベント..とかありでは？
   await delay(2000);
   log.textContent = '起きた！！！！！！！';
   await delay(1000);
   document.querySelector('#eventArea').innerHTML = '';
   
   document.querySelector('#battleArea').style.display = 'none';
   document.querySelector('#overfieldArea').style.display = 'block';
   
   objMap[MAPy][MAPx] = 4;
   draw()
   movable = 1;
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
   movable = 0;
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
   
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
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
   movable = 0;
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
   
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
}
// #endregion
//#region chest
const inchestTool = ['aspirin','pablon','trypsin','throwknife','trickyvariable','bottlegrenade','redcard','bluecard','greencard'];
const inchestRareTool = ['lulu','potion','cdveringfire','bomb','blackcard'];
async function OpenChest(code){
   movable = 0;
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
   
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
}
// #endregion
//#region Cookietake
async function Cookietake(){
   movable = 0;
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
   
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
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
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
}
function UtusenEvent(){
   log.textContent = 'はいどうも〜、僕です';
   playername = 'utusen'
   humans.players[me].ex = '50%appease';//相手の体力が半分以下なら仲間にする｡でなければ､攻撃力の1.5倍のダメージ
   playerns = 'ehp50%but';//3の倍数のターンの時、相手か自分の体力を半分にする。運ゲー
   playerps = 'reverseta';//逆TA(相手より体力がめちゃ低いとダメージを喰らわない)
   buttonsolid = '#4c6cb3';buttonback = '#949495';
   document.querySelector('#ButtonStyle').textContent = `.button{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};cursor: pointer;}input[type="text"]:focus{border: 2px solid ${buttonsolid};padding: 2px 3px;background: ${buttonback};}`;
   objMap[MAPy][MAPx] = 0;
   draw()
   movable = 1;
}
// #endregion      

