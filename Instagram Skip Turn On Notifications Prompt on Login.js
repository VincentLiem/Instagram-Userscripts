// ==UserScript==
// @name         Instagram Skip Turn On Notifications Prompt on Login
// @version      1.0
// @match        https://www.instagram.com/*
// @run-at       document-idle
// ==/UserScript==

if ((document.getElementsByClassName("aOOlW   HoLwm ")).length > 0)
{
    document.getElementsByClassName("aOOlW   HoLwm ")[0].click(); //autopress don't allow
}
