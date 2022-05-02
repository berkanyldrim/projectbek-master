<template>
<br>
<MainTopArea></MainTopArea>
<br>
<div class="row">
    <div class="col-md-9">
       
        <div class="image-area">
            <img src="../../public/img/img1.jpg" alt="">
        </div>

    </div>
    <div class="col-md-3">
        <RightMenu></RightMenu>
    </div>

</div>

<div class="row">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-6">
                <div class="image-area">
                    <img src="../../public/img/img2.jpg" alt="">
                </div>
          
            </div>
            <div class="col-md-3">
                <div class="image-area" style="padding-left: 0px;">
                    <img src="../../public/img/img3.jpg" alt="">
                </div>
                
            </div>

        </div>
       
    </div>
    <div class="col-md-3">
        <div class="image-area" style="padding-left: 0px;">
            <img src="../../public/img/img4.jpg" alt="">
        </div>
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-6">
                <div class="image-area">
                    <img src="../../public/img/img2.jpg" alt="">
                </div>
          
            </div>
            <div class="col-md-3">
                <div class="image-area" style="padding-left: 0px;">
                    <img src="../../public/img/img3.jpg" alt="">
                </div>
                
            </div>

        </div>
       
    </div>
    <div class="col-md-3">
        
    </div>
</div>

</template>

<script>

import MainTopArea from "./pageMainComponents/mainTopArea.vue";
import RightMenu from "./pageMainComponents/rightMenu.vue";
export default {
    name: "MainPage",
    components:{
    MainTopArea,
    RightMenu
}

}
</script>
