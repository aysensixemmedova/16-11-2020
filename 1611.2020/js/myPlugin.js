(function($){
    $.fn.changeColor=function(cl,cl2){
        this.css({
            background:cl,
            color:cl2
        })
    }
    $.fn.floatAnima=function(ilkin){
        var def={
            suret:500,
            mesafe:250,
            event:"click"
        }
        var setting=$.extend(def,ilkin)
        this.on(setting.event,function(){
            $(this).css("position","relative").animate({
              left:"+="+setting.mesafe+'px'  
            },setting.suret,function(){
                $(this).animate({
                    left:0
                },setting.suret)
            })
        })
    }
}(jQuery))