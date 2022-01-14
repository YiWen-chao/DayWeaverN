$(function () {
function $id(id){
    return document.getElementById(id);
}
function Slide(){
        
    let wrap = document.querySelector(".small-wrap") ;
    let curIndex = 0;
    
    if(document.body.clientWidth > 768){
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
    else if(document.body.clientWidth < 768){
    
        $id("btnLeft").onclick = function(){
            curIndex--;//curIndex，為要幾個-310
            wrap.style.left = -100 * curIndex + "px";
            if(curIndex ==0){
                $id("btnLeft").disabled = true;
            }
            $id("btnRight").disabled = false;//沒有失能，可用
        }
    
        $id("btnRight").onclick = function(){
            curIndex++;
            let left = -100*curIndex;
            wrap.style.left = left + "px";
            if(curIndex ==3){
                $id("btnRight").disabled = true;
            }
            $id("btnLeft").disabled = false;
        }

    }

} 

        $(document).ready(function(){
            Slide();    
            $(window).resize(Slide());
        })

// window.addEventListener('load',doFirst);
})
