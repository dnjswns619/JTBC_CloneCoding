window.onload= function(){
    let header = document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        header.classList.add('headerhov');
    })
    header.addEventListener('mouseleave',function(){
        header.classList.toggle('headerhov');
    })
    
    let slide = document.querySelectorAll('.swiper-slide');
    for(let i=0; i<slide.length; i++){

        slide[i].addEventListener('mouseover',function(){
            slide[i].classList.add('shadow_img');
        })
        slide[i].addEventListener('mouseout',function(){
            slide[i].classList.toggle('shadow_img');
        })
    }

    // let right = document.getElementById('right_arr');
    // let left = document.getElementById('left_arr');
    // let currentidx = 0;
    // let swipeslide = document.getElementById('swipe_slide');
    // let slidecount = slide.length;

    // function slidemove(num) {
    //     swipeslide.style.left = -num*330+'px';
    //     currentidx = num
    // }
    // right.addEventListener('click',function(){
    //     console.log(currentidx);
    //     if(currentidx>=0){
    //         left.style.background='url(../images/report/left_act.jpg) no-repeat';
    //     }
    //     if(currentidx<slidecount-4){
    //         slidemove(currentidx+1);
    //     } else {
    //         right.style.background='url(../images/report/right_default.jpg) no-repeat';
    //     }
    // })
    // left.addEventListener('click',function(){
    //     if(currentidx<slidecount-4){
    //         right.style.background='url(../images/report/right_act.jpg) no-repeat';
    //     }
    //     if(currentidx>0) {
    //         slidemove(currentidx-1);
    //     } else {
    //         left.style.background='url(../images/report/left_default.jpg) no-repeat';
    //     }
    // })

    

        let item1 = document.getElementById('item1');
        let item2 = document.getElementById('item2');
        let item3 = document.getElementById('item3');
        let itemcont = document.querySelectorAll('.item_cont');
        let hoverbg = document.querySelectorAll('.hover_txt');
        let bluebox = document.querySelectorAll('.blue_box');
        let conttxt = document.querySelectorAll('.cont_txt')

        item1.addEventListener('mouseenter',function(e){
            itemcont[0].classList.add('disappear');
            hoverbg[0].classList.add('appear_bg');
            bluebox[0].classList.add('box_row');
            conttxt[0].classList.add('txt_up');
        })
        item1.addEventListener('mouseleave',function(e){
            itemcont[0].classList.toggle('appear')
            itemcont[0].classList.toggle('disappear');
            hoverbg[0].classList.toggle('appear_bg');
            hoverbg[0].classList.toggle('disappear_bg');
            bluebox[0].classList.toggle('box_row');
            bluebox[0].classList.toggle('box_up');
            conttxt[0].classList.toggle('txt_up');
            conttxt[0].classList.toggle('txt_down');
        })
        
    
    
        item2.addEventListener('mouseenter',function(e){
            itemcont[1].classList.add('disappear');
            hoverbg[1].classList.add('appear_bg');
            bluebox[1].classList.add('box_row');
            conttxt[1].classList.add('txt_up');
        })
        item2.addEventListener('mouseleave',function(e){
            itemcont[1].classList.toggle('appear')
            itemcont[1].classList.toggle('disappear');
            hoverbg[1].classList.toggle('appear_bg');
            hoverbg[1].classList.toggle('disappear_bg');
            bluebox[1].classList.toggle('box_row');
            bluebox[1].classList.toggle('box_up');
            conttxt[1].classList.toggle('txt_up');
            conttxt[1].classList.toggle('txt_down');
        })

        item3.addEventListener('mouseenter',function(e){
            itemcont[2].classList.add('disappear');
            hoverbg[2].classList.add('appear_bg');
            bluebox[2].classList.add('box_row');
            conttxt[2].classList.add('txt_up');
        })
        item3.addEventListener('mouseleave',function(e){
            itemcont[2].classList.toggle('appear')
            itemcont[2].classList.toggle('disappear');
            hoverbg[2].classList.toggle('appear_bg');
            hoverbg[2].classList.toggle('disappear_bg');
            bluebox[2].classList.toggle('box_row');
            bluebox[2].classList.toggle('box_up');
            conttxt[2].classList.toggle('txt_up');
            conttxt[2].classList.toggle('txt_down');
        })

        //swiper.js 
        var swiper = new Swiper(".swipe_slide", {
            slidesPerView: 3.75,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
          });


}