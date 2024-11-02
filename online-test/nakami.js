// DOM要素
const waitRoom = document.getElementById('WaitRoom');
const gameRoom = document.getElementById('GameRoom');
const waitText = document.getElementById('WaitText');
const opponentName = document.getElementById('OpponentName');
const log = document.getElementById('Log');

let playerId = Math.random().toString(36).substr(2, 9); // プレイヤーのユニークID
let currentGameRef = null;

// 待機処理
const waitForOpponent = () => {
    const waitingRef = ref(database, 'waitingPlayers');
    set(waitingRef, {playerId});  // 自分を待機リストに登録
    
    onValue(waitingRef, (snapshot) => {
        const waitingData = snapshot.val();
        if (waitingData && waitingData.playerId !== playerId) {
            startGame(waitingData.playerId);
        }
    });
};

// ゲーム開始処理
const startGame = (opponentId) => {
    currentGameRef = ref(database, `games/${playerId}-${opponentId}`);
    set(currentGameRef, { player1: playerId, player2: opponentId, choices: {} });
    
    waitRoom.style.display = 'none';
    gameRoom.style.display = 'block';
    opponentName.textContent = `Opponent: ${opponentId}`;
};
