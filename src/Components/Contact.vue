<template>
 <section class="contact-area section-padding-100">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Contact Form Area -->
                <div class="col-12 col-md-10 col-lg-9">
                  <app-contactform></app-contactform>
                </div>
                <div class="col-12 col-md-10 col-lg-3">
                    <div class="post-sidebar-area">
                        <app-search></app-search>
                        <app-newslettersub></app-newslettersub>
                        <app-social></app-social>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Search from "./Search";
import NewsLetterSub from "./NewsLetterSub";
import ContactForm from "./ContactForm";
import Social from "./Social";


export default {
  components:{
    "appSearch":Search,
    "appNewslettersub":NewsLetterSub,
    "appContactform":ContactForm,
    "appSocial":Social,
  },
}
</script>