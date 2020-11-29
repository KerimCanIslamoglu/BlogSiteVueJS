<template>
    <div class="container">
            <div class="row">
                        <!-- <app-preloader></app-preloader> -->
                <app-feed></app-feed>
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="post-sidebar-area">
                        <app-search></app-search>
                        <app-newslettersub></app-newslettersub>
                        <app-advertisement></app-advertisement>
                        <app-latestposts></app-latestposts>
                        <app-tags></app-tags>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import Search from "./Search";
import NewsLetterSub from "./NewsLetterSub";
import Advertisement from "./Advertisement";
import LatestPosts from "./LatestPosts";
import Tags from "./Tags";
import Feed from "./Feed";
import PreLoader from "./PreLoader";


export default {
  components:{
    "appSearch":Search,
    "appNewslettersub":NewsLetterSub,
    "appAdvertisement":Advertisement,
    "appLatestposts":LatestPosts,
    "appTags":Tags,
    "appFeed":Feed,
    "appPreloader":PreLoader,
  },
}
</script>