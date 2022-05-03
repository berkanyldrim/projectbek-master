<template>
    <div class="row">
        <div class="col-md-12">
            <div class="container">
                <ul>
                    <li v-for="stories of GetStories" :key="stories.$id">
                        <div class="outer-layer">
                                <a href=""><img :src="stories.url" alt="">
                                
                                </a>
                        </div>
                    </li>
                    
                </ul>

                <div style="float: right;">
                  <a class="btn ana-ekran-btn"><i class="far fa-arrow-alt-circle-left"></i><router-link class="dropdown-item" to="/page2">Page2</router-link></a>
                  <a class="btn ana-ekran-btn"><i class="far fa-arrow-alt-circle-left"></i><router-link class="dropdown-item" to="/page3">Page3</router-link></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MainTopArea",
    async created() {
      await this.getStoriesAsync();
    },
    data() {
      return {
        GetStories: [],
        errors: []
      };
    },
    methods: {
      async getStoriesAsync() {
        try {
          const response = await axios.get(
            "https://api.bek.org.tr/api/Test/GetStories"
          );
          this.GetStories = response.data.$values;
        } catch (error) {
          this.errors.push(error);
        }
      }
    }
}
</script>