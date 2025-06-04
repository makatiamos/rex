(function () {
    if (window.eventCalendarAppScriptHasBeenRun) {
        return;
    }

    window.eventCalendarAppScriptHasBeenRun = true;

    var mainScript = document.createElement('script');
    mainScript.async = 1;
    mainScript.setAttribute('src', 'https://api.eventcalendarapp.com/calendar-build/main.js?query=8367418999441111');
    document.head.appendChild(mainScript);

    var iconFontCSS = document.createElement('link');
    iconFontCSS.setAttribute('href', 'https://api.eventcalendarapp.com/calendar-build/iconfont.css?query=8361748999441111');
    iconFontCSS.setAttribute('rel', 'stylesheet');
    document.head.appendChild(iconFontCSS);

    var stylesheet2 = document.createElement('link');
    stylesheet2.setAttribute('href', 'https://api.eventcalendarapp.com/cleanslate.css?query=8367481999441111');
    stylesheet2.setAttribute('rel', 'stylesheet');
    document.head.appendChild(stylesheet2);

    var stylesheet = document.createElement('link');
    stylesheet.setAttribute('href', 'https://api.eventcalendarapp.com/calendar-build/styles.css?query=8367418999441111');
    stylesheet.setAttribute('rel', 'stylesheet');
    document.head.appendChild(stylesheet);

})();
