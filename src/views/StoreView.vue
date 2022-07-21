<template>
  <div class="store">
    <div class="container">
      <div class="windowBox bgsec-color">
        <p>{{ getName }}</p>
      </div>
      <div class="set-btnBox">
        <button class="set-btn" @click="getItem">到底吃甚麼?!</button>
        <button class="set-btn" @click="reset">全部清除</button>
      </div>
      <div class="inputbox">
        <input type="text" class="textContent" placeholder="輸入文字" v-model="text" @keyup.enter="addItems">
        <button type="button" class="addbtn" @click="addItems">+</button>
      </div>

      <ul class="items">
        <li v-for="item in getAlldata()" :key="item.id" class="item">{{ item.text }}<span @click="removeItem(item)">X</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      getName: '現在想來點',
      text: '',
      data: [
        { id: 1, text: '八方雲集' },
        { id: 2, text: '711超商' },
        { id: 3, text: '全家超商' },
        { id: 4, text: '小樹台越' },
        { id: 5, text: '池上便當' },
        { id: 6, text: '德惠米粉湯' }
      ],
      newdata: []
    }
  },
  methods: {
    getAlldata () {
      const newarry = this.data.concat(this.newdata)
      return newarry
    },
    // btn新增資料
    addItems () {
      this.data.push({
        id: this.data.length + 1,
        text: this.text
      })
      // console.log(newdata)
      this.text = ''
    },
    // 刪除資料
    removeItem (item) {
      const index = this.data.findIndex(obj => obj.id === item.id)
      console.log(index)
      this.data.splice(index, 1)
    },
    // 亂數取得
    getItem () {
      const num = this.data.length
      console.log(num)
      const ans = Math.floor(Math.random() * num) + 1
      console.log(ans)
      for (let i = 0; i < num; i++) {
        if (this.data[i].id === ans) {
          this.getName = this.data[i].text
        }
      }
    },
    // 全部清除
    reset () {
      location.reload()
      // this.$router.go(0)
    }
  }
}
</script>
