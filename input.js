document.onmousedown = function (event) {
    switch (NowPos) {
        case 'Menu':
            clickMenu(event.clientX, event.clientY);
    }
}
function clickMenu(x, y) {
    var mainMenuPerHeight = windowHeight / 4 * 3 / defaultMenuOptions.length;
    var mainMenuPerWidth = 4 * mainMenuPerHeight > windowWidth ? windowWidth : 4 * mainMenuPerHeight;
    if (x > (windowWidth - mainMenuPerWidth) / 2 && x < (windowWidth + mainMenuPerWidth) / 2 && y > windowHeight / 4) {
        var item = Math.floor((y - windowHeight / 4) / mainMenuPerHeight);
        switch (item) {
            case 0:
                singleGameMenu();
            case 1:
                MuitiGameMenu();
            case 2:
                settingMenu();
            case 3:
                moreMenu();
            case 4:
        }
    }
}