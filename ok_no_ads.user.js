// ==UserScript==
// @name            OK без рекламы
// @author          olecom
// @namespace       ok
// @description     ок без рекламы
// @match           http://www.odnoklassniki.ru/*
// @match           http://odnoklassniki.ru/*
// @match           http://ok.ru/*
// @version         0.4
// ==/UserScript==

function id(n){
return document.getElementById(n)
}

function rmgames(cls){
var i, t, arr = document.querySelectorAll("." + cls)
    if(arr && arr.length) for(i = 0; i < arr.length; ++i){
        t = arr[i]
        if(~t.innerHTML.indexOf('в игре')){
            t.parentElement.innerHTML=''
        }
    }
    t = arr = void 0
}

function rmads(cls){
var i, t, arr = document.querySelectorAll("." + cls)
    if(arr && arr.length) for(i = 0; i < arr.length; ++i){
        t = arr[i]
        if(~t.innerText.indexOf('Реклама')){
            t.parentElement.parentElement.innerHTML=''
        }
    }
    t = arr = void 0
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

    var i, ads

    ads = document.querySelectorAll('a[target=_blank][class=feed-i_spec]')
    if(ads.length) for(i = 0; i < ads.length; ++i){
        ads[i].style.display = 'none'
    }
    id("bannerWithTitlePanel_TargetBanner").style.display = 'none'
    id("hook_BannerNew_LeftColumnAdCustomInner").style.display = 'none'
} catch(e) { }
try { id("hook_Block_StickyBannerContainer").style.display = 'none'
} catch(e) { }
try {
    rmq("dialogWrapperBanner__inner")
    rmq("dialogWrapperBanner")
    rmq('__gift')
    rmq('mctc_link')
    rmads("feed-i_spec-lbl")
    rmgames('feed-i_action')
} catch(e) { }
}, 1234)
