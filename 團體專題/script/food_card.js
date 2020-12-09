// 酒卡宣告

var fctbtns = document.querySelectorAll('.fct_btn')
var tcards = document.querySelectorAll('.card_style_t')
//肉卡宣告

var fcbbtns = document.querySelectorAll('.fcb_btn')
var bcards = document.querySelectorAll('.card_style_b')

//大卡片宣告
var fullcard = document.querySelectorAll('.card-area-style')

//遮罩宣告

var msk = document.querySelectorAll('.fdmusk')

//酒卡按鈕控制酒卡分頁

for (let i = 0; i < fctbtns.length; i++) {
    const fctbtn = fctbtns[i];
    const tcard = tcards[i];
    
    fctbtn.onmouseover = function(){
        AllclearWinebtns()

        fctbtn.classList.add('active')
        tcard.classList.add('active')
    }
}

function AllclearWinebtns() {
    for (let i = 0; i < fctbtns.length; i++) {
        const fctbtn = fctbtns[i];
        const tcard = tcards[i];

        fctbtn.classList.remove("active")
        tcard.classList.remove("active")
    }
}

//肉卡按鈕控制肉卡分頁

for (let i = 0; i < fcbbtns.length; i++) {
    const fcbbtn = fcbbtns[i];
    const bcard = bcards[i];
    
    fcbbtn.onmouseover = function(){
        AllclearMeatbtns()

        fcbbtn.classList.add('active')
        bcard.classList.add('active')
    }
}

function AllclearMeatbtns() {
    for (let i = 0; i < fcbbtns.length; i++) {
        const fcbbtn = fcbbtns[i];
        const bcard = bcards[i];

        fcbbtn.classList.remove("active")
        bcard.classList.remove("active")
    }
}

//大卡片圖層效果
for (let i = 0; i < fullcard.length; i++) {
    const fcard = fullcard[i];
   
    fcard.onmouseover = function(){   
        Allclearfullcard()
        fcard.classList.add('active')
    }
}

function Allclearfullcard() {
    for (let i = 0; i < fullcard.length; i++) {
        const fcard = fullcard[i];

        fcard.classList.remove("active")
    }
}

//大卡遮罩

    for (let i = 0; i < msk.length; i++) {
        const musk = msk[i];
        
        musk.onmouseover = function(){ 
            AllclearMsk()
            musk.classList.add('active')
        }
    }
    
    function AllclearMsk() {
        for (let i = 0; i < msk.length; i++) {
            const musk = msk[i];
    
            musk.classList.remove("active")
        }
    }


    // phone版

    //酒卡

    var winecards = document.querySelectorAll('.phone_card_t')
    var winebtns = document.querySelectorAll('.phone_btn_t')

    for (let i = 0; i < winecards.length; i++) {
        const winecard = winecards[i];
        const winebtn = winebtns[i];

        winebtn.onmouseover = function() {
            AllclearWinebtns_phone()

            winecard.classList.add('active')
            winebtn.classList.add('active')
        }

        function AllclearWinebtns_phone() {
            for (let i = 0; i < winebtns.length; i++) {
                const winecard = winecards[i];
                const winebtn = winebtns[i];

            winecard.classList.remove('active')
            winebtn.classList.remove('active')
        }

    }
}


    //肉卡
    var meatcards = document.querySelectorAll('.phone_card_b')
    var meatbtns = document.querySelectorAll('.phone_btn_b')

    for (let i = 0; i < meatcards.length; i++) {
        const meatcard = meatcards[i];
        const meatbtn = meatbtns[i];

        meatbtn.onmouseover = function() {
            AllclearMeatbtns_phone()

            meatcard.classList.add('active')
            meatbtn.classList.add('active')
        }

        function AllclearMeatbtns_phone() {
            for (let i = 0; i < meatbtns.length; i++) {
                const meatcard = meatcards[i];
                const meatbtn = meatbtns[i];

            meatcard.classList.remove('active')
            meatbtn.classList.remove('active')
        }

    }
}
    