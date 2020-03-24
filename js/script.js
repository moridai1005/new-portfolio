$(document).ready(function() {
    var prog = 0;
    $('#fullpage').fullpage({
        anchors: ["top","profile","skills","works","contact"],
        menu: '.navbar-nav',
        navigation:true,
        verticalCentered:true,
        scrollOverflow:true,
        onLeave: function(index, nextIndex, direction) {
            var index = index.index;
            if(index === 0 && direction == 'down') {
                $(".empty-box").addClass("active1");
                $(".profile-content").addClass("active2");
            }
            if(index===2 && direction == "up"){
                $(".empty-box").addClass("active1");
                $(".profile-content").addClass("active2");
            }
            if(index===1 && (direction=="up" || direction=="down")){
                $(".empty-box").removeClass("active1");
                $(".profile-content").removeClass("active2");
            }
        }
    });

    var prog_plus = function() {
        if(prog == 400){
            prog=400;
        }else {
        prog += 80;
        }
        $('.progress-bar').css({'width':prog});
        var perc = 100 * prog / 400;
        $('.progress-bar').text(perc+"%");
    }
    setInterval(prog_plus,300);

    $('.mask > .caption').append(
        '<div class="only-sp"><button class="btn btn-sm btn-secondary close-btn"><span class="fa fa-times"></span></button></div>'
        );
    


    /*$(document).not(".detail").click(function(){
        console.log("click on");
        var count = 0;
        var styles = document.getElementsByClassName("mask");
        for(var i = 0;i < styles.length;i++){
            sty = styles[i].style.display;
            if(sty=="block"){
                count += 1;
            }
            console.log("count="+count);
        }    
        if(count==1){
            for(var i = 0;i < styles.length;i++){
                styles[i].style.display = "none";
            }
        }
    });*/


    $(".detail").click(function() {
        console.log("detail true");
        var count = 0;
        var styles = document.getElementsByClassName("mask");
        for(var i = 0;i < styles.length;i++){
            sty = styles[i].style.display;
            if(sty=="block"){
                count += 1;
            }
            //console.log(count);
        }    
        if(count==0) {
            //console.log("mask fadein");
            $(this).find(".mask").fadeIn();
        }
        /*else{
            $(this).parents(".detail").find(".mask").fadeOut();
        }*/
    });

    $(".mask").click(
        function(e) {
            e.stopPropagation();
            return 0;
        }
    );

    $(".close-btn").click(
        function(e) {
            if($(".mask").is(":visible")){
            console.log("close true");
            e.stopPropagation();
            $(this).parents(".mask").hide();
            }
        }
    );

});

    
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}