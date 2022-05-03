<template>
<br>
<MainTopArea></MainTopArea>
<br>
<div class="row">
    <div class="col-md-9">
       
        <div class="image-area">
            <img :src="GetCampaigns[0].url" alt="">
        </div>

    </div>
    <div class="col-md-3">
        <RightMenu></RightMenu>
    </div>

</div>

<div class="row">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-9">
                <div class="image-area" >
                    <img :src="GetCampaigns[1].url" alt="">
                </div>
          
            </div>
            <div class="col-md-3" >
                <div class="image-area" style="padding-left: 0px;">
                    <img :src="GetCampaigns[2].url" alt="">
                </div>
                
            </div>

        </div>
       
    </div>
    <div class="col-md-3">
        <div class="image-area" style="padding-left: 0px; width: 80%;">
            <img :src="GetCampaigns[3].url" alt="">
        </div>
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-9">
                <div class="image-area">
                    <img :src="GetCampaigns[4].url" alt="">
                </div>
          
            </div>
            <div class="col-md-3">
                <div class="image-area" style="padding-left: 0px;">
                    <img :src="GetCampaigns[5].url" alt="">
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
import axios from "axios";
export default {
    name: "MainPage",
    components:{
    MainTopArea,
    RightMenu
    },
    async created() {
      await this.getCampaignsAsync();
    },
    data() {
      return {
        GetCampaigns: [],
        errors: []
      };
    },
    methods: {
      async getCampaignsAsync() {
        try {
          const response = await axios.get(
            "https://api.bek.org.tr/api/Test/GetCampaigns"
          );
          this.GetCampaigns = response.data.$values;
        } catch (error) {
          this.errors.push(error);
        }
      }
    }

}
</script>
