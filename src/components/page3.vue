<template>
<div class="row">
        <div class="col-md-12">
            <div class="logo-area">
                <img src="../../public/img/logo.svg" alt="">
            </div>
        </div>
        
</div>
<br>
<div class="row">
    <div class="col-md-12">
        <div class="top-area">
            <a class="btn ana-ekran-btn"><i class="far fa-arrow-alt-circle-left"></i><router-link class="dropdown-item" to="/">Ana Ekrana Dön</router-link></a>
            <div class="input-group rounded" style="width: 85%; margin-left: 10px;">

                <input  v-model="sProduct" type="search" class="form-control rounded" style="height: 30px;" placeholder="Ürünlerde marka ya da ürün adı yazarak arayın.." aria-label="Search" />
                <i class="fas fa-search"></i>
                
            </div>
        </div>
        
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-9">
        <div class="product-area row">

                <div class="product-item " v-for="product of GetProduct" :key="product.$id" style="height: 420px !important;">
                    <div class="product-img" style="height: 260px;">
                        <img :src="product.url" alt="">
                    </div>
                    <br>
                    <br>
                    <div class="product-text">
                        <span class="product-name">{{ product.name}}</span>
                        <br>
                        <span class="product-code">{{product.description}}</span>
                        <br>
                        <div class="product-bottom">
                            <span class="product-point">{{product.price}} BEK Puanı</span>
                            <span class="product-count">
                                <span class="btn" id="minus"><i class="far fa-minus-circle" ></i> </span>
                                
                                <span id="numberPlace">0</span> 
                                <span class="btn" id="plus"><i class="far fa-plus-circle" ></i> </span>
                                
                            </span>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
    <div class="col-md-3">
        <div class="bek-point">
            BEK Puanınız: <span class="score">100</span>
        </div>
        <br>
        <br>
        <div class="chard-area">
            <div class="chard-top">
                <span>Sepetiniz</span>
                <i class="fas fa-shopping-cart"></i>
            </div>
            <hr style="margin: 0px;">
            <div class="chard-body">
                <span style="font-weight: bold;">Toplam Sepet Puanı: 0 BEK Puan</span>
                <br>
                <br>
                <span>Kalan Sepet Puanı:0</span>
            </div>
        </div>
        <br>
        <a class="btn order-btn">Siparişi Tamamla</a>
    </div>
</div>

</template>

<script>
import axios from "axios";
export default {
    name:"PageThree",
    async created() {
      await this.getProductAsync();
    },
    data() {
      return {
        GetProduct: [],
        GetAllProduct: [],
        errors: [],
        sProduct: ''
      };
    },
    watch:{
        sProduct: function(s){
            this.GetProduct=this.GetAllProduct.filter(a => a.name.toLowerCase().includes(s.toLowerCase()));
            console.log(this.GetAllProduct);
        }
    },
    methods: {
      async getProductAsync() {
        try {
          const response = await axios.get(
            "https://api.bek.org.tr/api/Test/GetProducts"
          );
          this.GetAllProduct = response.data.$values;
          this.GetProduct = response.data.$values;
        } catch (error) {
          this.errors.push(error);
        }
      }
    }
}
</script>