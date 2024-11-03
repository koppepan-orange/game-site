// DOM要素
const waitRoom = document.getElementById('WaitRoom');
const gameRoom = document.getElementById('GameRoom');
const waitText = document.getElementById('WaitText');
const opponentName = document.getElementById('OpponentName');
const log = document.getElementById('Log');
let usersRef = null;
let gameRef = database.ref('forgame');
let username = 'Guest';
let userData = null;

let currentGameRef = null;

// 待機処理
function waitForOpponent(){
    waitRoom.style.display = 'block';
    gameRoom.style.display = 'none';
    waitText.textContent = 'wait for other player....';
    opponentName.textContent = 'Guest';
    log.textContent = '';
};

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
            usersRef.update({
                WaitNow: '1'
            });

            userData = snapshot.val();
            if(userData.password === password){           

                document.getElementById('LoginRoom').innerHTML = 'Now loading..';
                setTimeout(BacktoHome,1000);
            }else{
                // パスワードが間違っている
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
            usersRef.update({
                WaitNow: '1',
                password: password,
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
            document.getElementById('LoginRoom').style.display = 'none';
            document.getElementById('WaitRoom').style.display = 'block';

        }
    });

});

window.addEventListener('beforeunload', () => {
   usersRef.update({
       WaitNow: '0',
   });
});
