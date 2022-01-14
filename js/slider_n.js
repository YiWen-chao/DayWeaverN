$(function () {
function $id(id){
    return document.getElementById(id);
}
function Slide(){
        
    let wrap = document.querySelector(".small-wrap") ;
    let curIndex = 0;
    
    if(document.body.clientWidth < 1800){
    //-----------------------------------------btnLeft.onclick
        $id("btnTop").onclick = function(){
            curIndex--;//curIndex，為要幾個-310
            wrap.style.top = -100 * curIndex + "px";
            if(curIndex ==0){
                $id("btnTop").disabled = true;
            }
            $id("btnBottom").disabled = false;//沒有失能，可用
        }

        $id("btnBottom").onclick = function(){
            curIndex++;
            let top = -100*curIndex;
            wrap.style.top = top + "px";
            if(curIndex ==3){
                $id("btnBottom").disabled = true;
            }
            $id("btnTop").disabled = false;
        }
    
    }

} 

        $(document).ready(function(){
            Slide();    
            $(window).resize(Slide());
        })

// window.addEventListener('load',doFirst);
})
