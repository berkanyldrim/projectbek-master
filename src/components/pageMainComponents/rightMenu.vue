<template>
<div class="right-menu" >
    <a class="menu-btn">Menu <i class="fas fa-bars"></i> </a>
    <ul>
        <li v-for="menu of RightMenu" :key="menu.$id">{{menu.name}}</li>
    </ul>
</div>

</template>

<script>
import axios from "axios";
export default {
    name: "RightMenu",
    async created() {
      await this.getMenuAsync();
    },
    data() {
      return {
        RightMenu: [],
        errors: []
      };
    },
    methods: {
      async getMenuAsync() {
        try {
          const response = await axios.get(
            "https://api.bek.org.tr/api/Test/GetMenus"
          );
          this.RightMenu = response.data.$values;
        } catch (error) {
          this.errors.push(error);
        }
      }
    }
}
</script>