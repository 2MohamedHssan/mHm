<template>
  <div>
    <nav>
      <div class="container">
        <ul class="breadcrumb container m-0" aria-label="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">FAQ</li>
        </ul>
      </div>
    </nav>
    <div class="container pt-5 pb-5">
      <div class="pb-5">
        <h1>Frequently Asked Questions</h1>
        <hr />
        <p class="lead">
          Here You Will Find All Questions You Are Searching For And The Full
          Knowledgebase
        </p>
      </div>
      <div class="sing">
        <div>
          <div>
            <h4
              @click="open1 = !open1"
              :class="[open1 ? 'off' : 'on']"
              data-bs-target="#s"
              data-bs-toggle="collapse"
            >
              {{ heading1 }}
            </h4>
          </div>
          <p class="collapse" id="s">{{ text }}</p>
        </div>
        <div>
          <div>
            <h4
              @click="open2 = !open2"
              :class="[open2 ? 'off' : 'on']"
              data-bs-target="#s2"
              data-bs-toggle="collapse"
            >
              {{ heading2 }}
            </h4>
          </div>
          <p class="collapse" id="s2">{{ text }}</p>
        </div>
        <div>
          <div>
            <h4
              @click="open3 = !open3"
              :class="[open3 ? 'off' : 'on']"
              data-bs-target="#s3"
              data-bs-toggle="collapse"
            >
              {{ heading3 }}
            </h4>
          </div>
          <p class="collapse" id="s3">{{ text }}</p>
        </div>
        <div>
          <div>
            <h4
              @click="open4 = !open4"
              :class="[open4 ? 'off' : 'on']"
              data-bs-target="#s4"
              data-bs-toggle="collapse"
            >
              {{ heading4 }}
            </h4>
          </div>
          <p class="collapse" id="s4">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskeQuestion',
  data() {
    return {
      open1: true,
      open2: true,
      open3: true,
      open4: true,
      text: `This Is Test Message Describe The Answer Of The First Question This Is Test Message Describe The Answer Of The First Question This Is Test Message Describe The Answer Of The First Question This Is Test Message Describe The Answer Of The First Question This Is Test Message Describe The Answer Of The First Question`,
      heading1: '#1 How To Use Bootstrap Version 3.0?',
      heading2: '#2 How To Use Media Queries?',
      heading3: '#3 How To Create Your Own Slider?',
      heading4: '#3 How To Create Your Own Accordion?',
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 10px;
  background-color: #f5f5f5;
}
h1 {
  font-size: 60px;
}
hr {
  border: 0;
  width: 70%;
  margin: 20px auto;
  border-top: 1px solid #aaa;
}
.sing {
  > div {
    margin: 7px;
    text-align: start;
    border-radius: 4px;
    background-color: #f5f5f5;
    border: solid 1px #ddd;
    div {
      border-bottom: solid 1px #ddd;
      position: relative;
      h4 {
        padding: 10px 20px;
        color: #333;
        transition: 0.5s;
        width: fit-content;
        font-size: 16px;

        cursor: pointer;
      }
    }
    h4:hover {
      text-decoration: underline;
    }
    p {
      margin: 0;
      padding: 5px 20px;
      background-color: #fff;
    }
  }
}
.off::after {
  font-family: 'Font Awesome 6 Free';
  content: '\f054';
  position: absolute;
  top: 10px;
  transition: 0.5s;
  font-weight: 900;
  right: 10px;
  color: #777;
  font-size: 20px;
}
.on::after {
  font-family: 'Font Awesome 6 Free';
  font-size: 20px;
  content: '\f078';
  position: absolute;
  top: 10px;
  transition: 0.5s;
  font-weight: 900;
  right: 10px;
  color: #000;
}
</style>
