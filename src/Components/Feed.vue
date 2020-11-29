<template>
      <div class="col-12 col-lg-9">
                    <div v-for="post in posts" :key="post.Id" class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                <div class="single-blog-thumbnail">
                                    <img src="/src/img/blog-img/3.jpg" alt="">
                                    <div class="post-date">
                                        <a href="#">{{post.createdDay}} <span>{{post.createdMonth}}</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="single-blog-content">
                                    <div class="line"></div>
                                    <a href="#" class="post-tag">Lifestyle</a>
                                    <h4><a href="#" class="post-headline">{{post.blogHeader}}</a></h4>
                                    <p>{{post.blogBody}}</p>
                                    <div class="post-meta">
                                        <p>By <a href="#">{{post.createdBy}}</a></p>
                                        <p>3 comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="load-more-btn mt-100 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="1000ms">
                        <a href="#" class="btn original-btn">Read More</a>
                    </div>
                </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
 computed: mapState({
    posts: state => state.post.posts
  }),
  created () {
    this.$store.dispatch('post/getAllPosts')
    //console.log('post',this.$store._vm._data.$$state.post.posts);  /// burda datalar var
    console.log(this.$store)
  },
}
</script>

<style>

</style>