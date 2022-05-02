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
                <a class="btn ana-ekran-btn"><i class="far fa-arrow-alt-circle-left"></i>Ana Ekrana Dön</a>
                <span style="cursor: pointer;">Sponsor Ürün Listesi</span>
            </div>
            
        </div>
    </div>
    
    <br>
    <div class="row">
        <div class="col-md-12">
            <div class="product-area row" style="margin-left: 1px;">
                <div class="product-item " v-for="product of GetGifts" :key="product.$id" >
                    <div class="product-img">
                        <img :src="product.url" alt="">
                        
                    </div>
                    <div class="product-text">
                        <span class="product-name">{{ product.name}}</span>
                        <br>
                        <span class="product-code">{{ product.brand}}</span>
                        <br>
                        <span class="product-piece">{{ product.description}}</span>
                    </div>

                </div>

                
                
            </div>
            
        </div>
    </div>
    <br>
    <footer>
        <div class="page-2-footer">
            <p>Bu kampanya S.S BURSA ECZACILAR ÜRETİM TEMİN  VE DAĞ KOOP BURSA ECZA KOOP adına MPİ'nin 03.09.2021 tarih ve  
                E-40453693-255.01.02-8371 sayılı izni ile 13.09.2021 SAAT:10:00- 31.10.2021 SAAT: 22:00 tarihleri arasında Hedef çekiliş tarafından  düzenlenmektedir. 18 yaşından küçükler kampanyaya katılamaz, katılmış ve kazanmış olsalar dahi ikramiyeleri verilemez. 
                İkramiyeye konu olan eşya ve/veya hizmetin bedeli içinde bulunan KDV + ÖTV gibi vergiler dışındaki vergi ve diğer yasal yükümlülükler talihliler tarafından ödenir 
            </p>
            <a class="footer-btn">Çekiliş ve Katılım Koşulları ve MPİ yasal metin için tıklayınız</a>
        </div>
    </footer>

</template>
<script>
import axios from "axios";
  export default {
      name:"PageTwo",
    async created() {
      await this.getPostsAsync();
    },
    data() {
      return {
        GetGifts: [],
        errors: []
      };
    },
    methods: {
      async getPostsAsync() {
        try {
          const response = await axios.get(
            "https://api.bek.org.tr/api/Test/GetGifts"
          );
          this.GetGifts = response.data.$values;
        } catch (error) {
          this.errors.push(error);
        }
      }
    }
  };

</script>
