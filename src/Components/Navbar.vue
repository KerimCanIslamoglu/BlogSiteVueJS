<template>
    <!-- ##### Header Area Start ##### -->
    <header class="header-area">
        <!-- <app-header></app-header>
        <hr> -->
        <!-- Nav Area -->
        <div class="original-nav-area" id="stickyNav">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Classy Menu -->
                    <nav class="classy-navbar justify-content-between">

                        <!-- Subscribe btn -->
                        <div class="subscribe-btn">
                            <a href="#" class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
                        </div>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu" id="originalNav">
                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li>
                                    <router-link exact active-class="active" to="/" tag="a">Home</router-link>
                                    </li>
                                    <li>
                                    <router-link exact active-class="active" to="/about" tag="a">About Us</router-link>
                                    </li>
                                    <li>
                                    <router-link exact active-class="active" to="/contact" tag="a">Contact</router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <hr>
    </header>
</template>

<script>
import Header from "./Header"
export default {
 components:{
     "appHeader":Header
 }
}
</script>

<style>

</style>
