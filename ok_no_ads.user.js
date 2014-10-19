// ==UserScript==
// @name            OK без рекламы
// @author          olecom
// @namespace       ok
// @description     ок без рекламы
// @match           http://www.odnoklassniki.ru/*
// @match           http://odnoklassniki.ru/*
// @match           http://ok.ru/*
// @version         0.2
// ==/UserScript==

function id(n){
return document.getElementById(n)
}

function rmq(cls){
var i, arr = document.querySelectorAll("." + cls)
    if(arr && arr.length) for(i = 0; i < arr.length; ++i){
        arr[i].style.display = 'none'
    }
}

setInterval(function(){
try {
    id("fthColWrp").style.display = 'none'
    id("hook_Block_HolidaysPortlet").style.display = 'none'

    var i = 0, ads = document.querySelectorAll('a[target=_blank][class=feed-i_spec]')

    if(ads.length) for(var i = 0; i < ads.length; ++i){
        ads[i].style.display = 'none'
    }
} catch(e) { }
try { id("hook_Block_StickyBannerContainer").style.display = 'none'
} catch(e) { }
try {
    rmq("dialogWrapperBanner__inner")
    rmq("dialogWrapperBanner")
} catch(e) { }
}, 1234)
