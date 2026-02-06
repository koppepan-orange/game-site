# 要件:
# - (1000, 500) をクリック
# - a-z, A-Z, 0-9 の中からランダムに1文字を選びキー押下、0.1秒待つ を6回繰り返す
# - 改行(Enter) を入力、1秒待つ
# - Ctrl+Shift+R を押す、1秒待つ
# - これを無限ループ

import pyautogui
import random
import string
import time

# 安全設定（マウスを左上に移動すると例外で停止）
pyautogui.FAILSAFE = True

CHARS = string.ascii_lowercase + string.ascii_uppercase + string.digits

def one_cycle():
    pyautogui.click(1011, 670)  # 指定座標をクリック
    for _ in range(6):
        c = random.choice(CHARS)
        pyautogui.press(c)      # 1文字を押す
        time.sleep(0.1)
    pyautogui.press('enter')    # 改行（Enter）
    time.sleep(1)
    pyautogui.hotkey('ctrl', 'shift', 'r')  # Ctrl+Shift+R
    time.sleep(1)

if __name__ == "__main__":
    print("3秒後に開始します。実行を停止するには Ctrl+C またはマウスを左上隅へ移動してね。")
    time.sleep(3)
    try:
        while True:
            one_cycle()
    except KeyboardInterrupt:
        print("ユーザーによる停止 (KeyboardInterrupt) を受け取りました。")
    except pyautogui.FailSafeException:
        print("フェイルセーフが発動しました。マウスが左上に移動された可能性があります。")
