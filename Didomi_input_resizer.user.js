// ==UserScript==
// @name         Didomi autocomplete input resizer
// @namespace    http://tampermonkey.net/
// @version      2025-04-28
// @description  try to take over the world!
// @author       You
// @match        https://console.didomi.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=didomi.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var didomiCards = document.querySelectorAll('[class="didomi-modal-card didomi-modal-card-slim"]');
    for (var c of didomiCards) {
        console.log("c:", c)
        c.style.maxWidth = "1200px";
    }
    var didomiInputs = document.querySelectorAll(".didomi-base-input-content");
    for (var i of didomiInputs) {
        console.log("i:", i)
        i.style.width = "800px";
    }
})();