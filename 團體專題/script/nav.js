var toggle = document.querySelector('.toggle input')
    // var nav_h = document.querySelector(".navbtns_hamburger")
    // 按鍵事件      
    // $(".toggle input").on('click', function () {
    //     var animate = setInterval(() => {
    //         toggle.checked = !toggle.checked
    //     },3000
    //     )
    // });

    // console.log(myBox.classList.contains("active"))
    
    // 2.在什麼時候
        
    $(".toggle input").click(function(){
        // 按下第n個按鈕,第n個按鈕和分頁要加上active
        var nav_h = document.querySelector(".navbtns_hamburger")
        if (nav_h.classList.contains("active")) {
            nav_h.classList.remove("active")
            console.log("delete active");
        } else {
            nav_h.classList.add("active")
            console.log("add active");
        }
    })
    

    // 初始化
    window.onload = function () {
        lax.setup() // init

        const updateLax = () => {
            lax.update(window.scrollY)
            window.requestAnimationFrame(updateLax)
        }
        window.requestAnimationFrame(updateLax)
    }
   
    // 偵測滾輪位置
    // 抓到漢堡條的位置
    // 漢堡條碰到menu變顏色
    // 超過menu變顏色
    
    // var menu_h = document.querySelector(".menu_hamburger")
    // var toggl = document.querySelector('.toggle')
    // var menu = document.querySelector("#menu")    
    // document.querySelector('.menu_hamburger').offsetTop

    // window.onscroll = function () {

    //     if( document.documentElement.scrollTop >= menu.offsetTop){
    //         menu_h.classList.add('colors_b')
    //         menu_h.classList.remove('colors_w')
    //     console.log( document.documentElement.scrollTop >= menu.offsetTop );

            
    //     }else{
    //         nav_h.classList.remove('colors_w')
    //         nav_h.classList.add('colors_b')

    //     }
    // }

    