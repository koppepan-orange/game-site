// DOM要素
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
const waitRoom = document.getElementById('WaitRoom');
const gameRoom = document.getElementById('GameRoom');
const waitText = document.getElementById('WaitText');
const opponentName = document.getElementById('OpponentName');
const log = document.getElementById('Log');
let usersRef = null;
let gameRef = database.ref('forgame');
let username = 'Guest';
let userData = null;


// ゲーム開始処理
document.getElementById('login-form').addEventListener('submit', function(event){
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    event.preventDefault();
    username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    usersRef = database.ref('users/'+username);

    // データベースでユーザーが存在するか確認
    usersRef.once('value').then(function(snapshot){
        if(snapshot.exists()){

            userData = snapshot.val();
            if(userData.password === password){
                console.log('password==true')
                if(userData.WaitNow == '1'){open('about:blank','_self').close();console.log('えらったらしい')}
                document.getElementById('LoginRoom').innerHTML = 'Now loading..';
                setTimeout(LetsWait,1000);
                document.getElementById('LoginRoom').style.display = 'none';
            }else{
                // パスワードが間違っている
                console.log('password==false')
                document.getElementById('LoginRoom').innerHTML = `
                <form class="login-form" id="login-form">
                    <input type="text" id="username" placeholder="ユーザー名" required>
                    <input type="password" id="password" placeholder="パスワード" required>
                    <button type="submit">ログイン</button>
                    <div id="login-error" style="color: red; display: none;">パスワードが間違っています。</div>
                </form>
                `;
                loginError.style.display = 'block';
            }
        }else{
            console.log('newuser')
            usersRef.update({
                password: password,
            });

            document.getElementById('LoginRoom').innerHTML = 'Now loading..';
            setTimeout(LetsWait,1000);
            document.getElementById('LoginRoom').style.display = 'none';
        }
    });
});

function LetsWait(){
    usersRef.update({
        WaitNow: '1',
    });
    gameRef.transaction(function(gameData){
        if(gameData === null){
            gameData = {
                players: {},
            }
        }
        return gameData;
    }).then(function(){
        gameRef.child('players').child(username).set({
            name: username,
            WaitNow: '1',
        });
        waitForOpponent();
    }).catch(function(error){
        console.log(error);
    });
    
}
window.addEventListener('beforeunload', () => {
    usersRef.update({
        WaitNow: '0',
    });
});
gameRef.on("child_changed", (snapshot) => {
    if(snapshot.key === 'players'){
        document.getElementById('WaitPlayers').textContent = 'Now: '+ Object.keys(gameRef.child('players').val()).length;
    }
    if(Object.keys(gameRef.child('players').val()).length >= 2){
        if(indexOf(Object.keys(gameRef.child('players').val()),username) >= 3){
            gameRef.child('players').child(username).set({
                name: username,
                WaitNow: '1',
            });
        }else{
            waitRoom.style.display = 'none';
            gameRoom.style.display = 'block';
            log.textContent = '';
            opponentName.textContent = Object.keys(gameRef.child('players').val())[indexOf(Object.keys(gameRef.child('players').val()),username)];
            gameRef.child('players').child(username).update({
                WaitNow: '0',
            });
        }

    }

});

// 待機処理
function waitForOpponent(){
    waitRoom.style.display = 'block';
    gameRoom.style.display = 'none';
    waitText.textContent = 'wait for other player....';
    document.getElementById('WaitPlayers').textContent = 'Now: '+ Object.keys(gameRef.child('players').val()).length;
    opponentName.textContent = 'Guest';
    log.textContent = '';
};
