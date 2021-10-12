import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--incognito")
chrome = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=chrome_options)

url = "https://solfaucet.com/"
chrome.get(url)


a = [1, 10]

accounts = [
    "7pWPedYyGtkCBUSY4HJQiCeSGw63WkaKDQUjYzAhK7Sq",
    "9ehshwYkRJvuixY2PgrXumPZnmJsUu3muDAEc5m1Qmkz",
    "9x8DgC7Beb9CoFShWKjt3tB5dM77uUtyM12KC2QXzBBt"
]

id = 0

while True:
    if id == len(accounts): break

    time.sleep(1)
    inputs = chrome.find_elements_by_tag_name("input")
    time.sleep(1)
    inputs[0].clear()
    inputs[0].send_keys(accounts[id])

    i = 0

    while True:
        buttons = chrome.find_elements_by_tag_name("button")
        time.sleep(1)
        inputs[1].clear()
        inputs[1].send_keys(a[i])
        buttons[i].click()
        time.sleep(2)
        btn = chrome.find_elements_by_tag_name("button")[2]
        css = btn.get_attribute("class")

        if css.find('bg-red-600') != -1:
            id+=1
            btn.click()
            break

        btn.click()
        time.sleep(5)
        i = (i+1) % 2
        if i == 0:
            time.sleep(5)

chrome.quit()
