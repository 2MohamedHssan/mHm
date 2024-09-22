<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <h3 class="text-start">SiteMap</h3>
          <ul class="list-unstyled row text-start">
            <li
              class="col-6 col-md-4 pb-2"
              v-for="link in AllLinks"
              :key="link"
            >
              {{ link.link }}
            </li>
          </ul>
          <ul class="list-unstyled d-flex flex-wrap gap-1">
            <li v-for="imge in AllImge" :key="imge" class="fot">
              <img :src="imge.img" alt="" />
            </li>
          </ul>
        </div>
        <div class="col-xl-4">
          <h3 class="text-start">Latest Articles</h3>
          <div v-for="mg in Pimge" :key="mg">
            <div class="d-flex text-start gap-2 mb-2">
              <a href="#">
                <img :src="mg.Pimg" alt="" />
              </a>
              <div class="Foottext">
                <h4 class="text-light">Programming</h4>
                <p>{{ mg.Ptext }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-start col-xl-4">
          <h3 class="text-start">Our Awesome Work</h3>
          <img
            v-for="img in Wimg"
            :key="img"
            :src="img.imgsrc"
            alt=""
            class="img-thumbnail"
          />
        </div>
      </div>
    </div>
    <div class="copyr">
      <h4>Copyright &copy; 2025 <span>MHM</span> .Inc</h4>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/social-bookmarks/facebook.png';
import img2 from '@/assets/social-bookmarks/gplus.png';
import img3 from '@/assets/social-bookmarks/twitter.png';
import img4 from '@/assets/social-bookmarks/pinterest.png';
import img5 from '@/assets/social-bookmarks/rss.png';
import img6 from '@/assets/social-bookmarks/email.png';
import Pimg1 from '@/assets/articles/01.jpg';
import Pimg2 from '@/assets/articles/02.jpg';
import Pimg3 from '@/assets/articles/03.jpg';
import Wimg1 from '@/assets/work/01.jpg';
import Wimg2 from '@/assets/work/02.jpg';
import Wimg3 from '@/assets/work/03.jpg';
import Wimg4 from '@/assets/work/04.jpg';
export default {
  name: 'FooTer',
  data() {
    return {
      AllImge: [
        {
          img: img1,
        },
        {
          img: img2,
        },
        {
          img: img3,
        },
        {
          img: img4,
        },
        {
          img: img5,
        },
        {
          img: img6,
        },
      ],
      AllLinks: [
        {
          link: 'Home',
        },
        {
          link: 'About',
        },
        {
          link: 'Copmany',
        },
        {
          link: 'Code',
        },
        {
          link: 'Desgin',
        },
        {
          link: 'Host',
        },
        {
          link: 'Solution',
        },
        {
          link: 'Sitemap',
        },
        {
          link: 'Contact',
        },
      ],
      Pimge: [
        {
          Pimg: Pimg1,
          Ptext:
            'This Is Some Text About Programming Describe The Media Of Bootstrap 3.2.0',
        },
        {
          Pimg: Pimg2,
          Ptext:
            'This Is Some Text About Programming Describe The Media Of Bootstrap 3.2.0',
        },
        {
          Pimg: Pimg3,
          Ptext:
            'This Is Some Text About Programming Describe The Media Of Bootstrap 3.2.0',
        },
      ],
      Wimg: [
        {
          imgsrc: Wimg1,
        },
        {
          imgsrc: Wimg2,
        },
        {
          imgsrc: Wimg3,
        },
        {
          imgsrc: Wimg4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: #111;
}
h3 {
  color: var(--ColorOne);
  margin-top: 50px;
  margin-bottom: 20px;
}
li {
  color: #888;
  cursor: pointer;
  transition: 0.4s;
}
li:hover {
  color: #fff;
}
.fot {
  opacity: 0.4;
}
.img-thumbnail {
  background: rgba(0, 0, 0, 0.2);
  border: solid 1px #444;
}
.fot:hover {
  opacity: 1;
}
.Foottext {
  color: #888;
  p {
    font-size: 12px;
  }
}
.copyr {
  padding: 20px;
  color: #888;
  width: 100%;
  background-color: #333;
  span {
    color: var(--ColorOne);
  }
}
</style>
