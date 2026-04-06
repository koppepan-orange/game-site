

import sys
import subprocess

try:
    import pyautogui
except ImportError:
    print("pyAutoGUIが見つかりませんでした。インストールを開始します")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pyautogui"])
    import pyautogui

import time 

pyautogui.FAILSAFE = True
pyautogui.PAUSE = 0.05

tm = 4
tai9 = 2147483647

now = 0

jun = ["1", "f", "2", "3", "4", "5", "6", "7", "8", "9"]

def act():
    global now
    now += 1
    print(f"やったed {now}")

def main():
    print("準備中...")
    time.sleep(2)

    print("行動、開始")
    try:
        for _ in range(tai9):
            # 宣伝📺 https://discom.online
            pyautogui.hotkey("command", "v")
            pyautogui.press("enter")
            act()
            time.sleep(tm)


    except KeyboardInterrupt:
        print("ユーザーによる中断を確認。停止します")
        try:
            pyautogui.mouseUp(button='left')
        except Exception:
            pass

    except pyautogui.FailSafeException:
        # マウスが左上に移動されたとき
        print("ユーザーによる中断を確認。停止します")

    finally:
        print("行動完了、稼働を停止します")

if __name__ == '__main__':
    main()

