<template>
    <div class="sidebar-widget-area">
         <h5 class="title">Latest Posts</h5>

         <div class="widget-content">
             <div v-for="post in posts" :key="post.Id"  class="single-blog-post d-flex align-items-center widget-post">
                 <div class="post-thumbnail">
                     <img src="/src/img/blog-img/lp1.jpg" alt="">
                 </div>
                 <div class="post-content">
                     <a href="#" class="post-tag">Lifestyle</a>
                     <h4><a href="#" class="post-headline">{{post.blogHeader}}</a></h4>
                     <div class="post-meta">
                         <p><a href="#">{{post.createdDay}} {{post.createdMonth}}</a></p>
                     </div>
                 </div>
             </div>
         </div>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
 computed: mapState({
    posts: state => state.post.posts
  }),
}
</script>