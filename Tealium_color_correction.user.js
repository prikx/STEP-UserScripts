// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-04-11
// @description  try to take over the world!
// @author       You
// @match        https://*.tealiumiq.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tealiumiq.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function waitForTag() {
        var navbar = document.querySelector("#main_navigation > div.nui-main-header > div");
        if(!navbar) {
            navbar = document.querySelector("#mainHeader > div")
        }
        if(!navbar) {
            window.setTimeout(waitForTag, 500)
        } else {
            console.log("tealium restyling")
            navbar.setAttribute('style', 'border-bottom: 1px #ccc solid !important; background: #eee !important;');
        }
    }

    waitForTag()
})();