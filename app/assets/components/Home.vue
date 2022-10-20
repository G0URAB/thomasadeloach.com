<script setup>
import Glide from '@glidejs/glide'
import {onMounted} from "vue";

onMounted(() => {
      new Glide('.glide', {autoplay: 3000}).mount();
    }
);

</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="wrapper">
        <div class="signup-box">
          <div class="header">
            Ready to be <span style="color: orangered">Empowered</span> while On-the-Go?
          </div>
          <div class="sample-mp3">

          </div>
          <div class="content">
            <div class="text-1">You have nothing to lose. All pure SPIRITUAL GAIN with Pastor Thomas A. DeLoach.</div>
            <div class="text-2"><span style="color: orangered">+ PLUS </span> we give you “7 Biblical Principles To Success Report” for FREE!</div>
            <div class="user-input">
              <input type="text" name="name" placeholder="Name">
              <input type="email" name="email" placeholder="Email">
            </div>
            <div class="button">
              SIGN UP HERE
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="hero-sub">
      <div class="pastor-thomas">
        <img src="https://www.thomasadeloach.com/wp-content/uploads/2020/11/Pastor-Deloach-cool-stance-black-and-white-fade.png">
      </div>
      <div class="blank-left">

      </div>
      <div class="listen-to-podcasts">
        <div class="podcast-wrapper">
          <a href="https://thomasadeloach.podbean.com/" target="_blank">
            <div class="podcast">
              <b>Listen To My Podcast On Podbean</b>
            </div>
          </a>
          <a href="https://podcasts.apple.com/us/podcast/2-empower-u-with-thomas-a-deloach/id1512656694" target="_blank">
            <div class="podcast">
              <b>Listen To My Podcast On Apple</b>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="about-me">
      <h2 class="heading">About Me</h2>
      <div class="content">
        Pastor DeLoach was born in Louisville, Alabama and was later brought to Canton, Ohio by his mother.
        He attended Canton Public Schools, where he was very active. At the age of 13, Pastor DeLoach taught himself how to play the drums. He likewise became quite good in playing two other instruments.
        Grateful for the talents bestowed on him, he vowed to give all the glory and honor back to God – not only through music but in all significant aspects of his life.
      </div>
      <div class="read-more">
        <router-link to="/about">Read More...</router-link>
      </div>
    </div>

    <div class="empowerment">
      <h2 class="heading">
        "2 Empower U Podcast" Brings You:
      </h2>

      <div class="content">
        <div class="empowerment-feature">
          <div class="empower-icon">
            <i class="fa-solid fa-podcast"></i>
          </div>
          <h4 class="empower-heading">Self-Empowerment </h4>
          <div class="empower-text">Take control of your own life with God’s guidance and make positive choices. Stay confident & faithful in Him. </div>
        </div>
        <div class="empowerment-feature">
          <div class="empower-icon">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <h4 class="empower-heading">Building Partnership with God </h4>
          <div class="empower-text">Acknowledge how things are impossible without God. Two is always better than one. </div>
        </div>
        <div class="empowerment-feature">
          <div class="empower-icon">
            <i class="fa-solid fa-bus"></i>
          </div>
          <h4 class="empower-heading">Strategy & Execution of Goals </h4>
          <div class="empower-text">Set goals, make the right activities to reach your desired results. And don’t forget His spiritual guidance. Always. </div>
        </div>
        <div class="empowerment-feature">
          <div class="empower-icon">
            <i class="fa-solid fa-book"></i>
          </div>
          <h4 class="empower-heading">Mentorship </h4>
          <div class="empower-text">Being a trainer is serious business but I believe I can coach, educate, equip, and advise you on how to live a spirit led life with these episodes as well as other sessions I can provide for you. </div>
        </div>
      </div>

    </div>

    <div class="hurry-limited-slots">
      <div class="announcements">
        <div class="text">
          <div class="paragraph"><span style="color: #EF4423">Hurry!</span> Limited slots only!</div>
          <div class="paragraph">Subscribe and get your</div>
          <div class="paragraph">FREE Material Now!</div>
        </div>
        <div class="buttons">
          <div class="button">
            SIGN UP NOW!
          </div>
          <div class="button">
            DONATE TO MY PODCAST
          </div>
        </div>
      </div>
      <div class="micro-phone">
         <img src="https://www.thomasadeloach.com/wp-content/uploads/2020/05/microphone-159768_960_720-nlhkixf4fhdxg1w8g2xlfxvphp6k59rxo0wkdlpbxc.png">
      </div>
    </div>

    <!-- Testimonials / Glider   -->
    <div class="testimonials">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <span class="text">
                I’m a goal setter the moment I step into adulthood.
                I became too focused on making sure I achieve my desired results.
                But most of the time, I failed. Until I started listening to podcasts and found “2 Empower U”.
                I realized I was doing it all on my own when I shouldn’t.
              </span>
              <span class="author">
                - Cathy
              </span>
            </li>
            <li class="glide__slide">
              <span class="text">
                I rate this podcast Excellent.  Boy, if I had been offered this advice and acted studiously on it when I was in my 20’s and 30’s,
                I would have been much more useful to God.  But live and learn, God’s ways are the best ways.  You will enjoy if you listen to what Pastor DeLoach says here.
              </span>
              <span class="author">
                - Dr Jennifer Wright Walken
              </span>
            </li>
            <li class="glide__slide">
              <span class="text">
                I have been thoroughly blessed by the 2 Empower U podcast. The messages thus far have been both encouraging and thought provoking.
                I look forward to the notifications of a new episode being available, as I know I am in for a treat that will bless my spirit and help through my week.
              </span>
              <span class="author">
                - Jamiece G.
              </span>
            </li>
          </ul>
        </div>
        <div class="glide-buttons" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
    </div>

  </div>

</template>

<style>


</style>