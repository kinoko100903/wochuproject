<template>
    <div id = "ClassifyTwo">
        <div class = "left">
            <ul class = "left-list">
                <li v-for="item in arr">{{item.text}}</li>

            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:'classifyTwo',
    data(){
        return{
          arr:[
              {
                  text:'推荐',
                  to:'/classify/one'
              },
              {
                  text:'我厨优选',
                  to:'/classify/two'
              },
              {
                  text:'餐馆名菜',
                  to:'/classify/three'
              },
              {
                  text:'全部净菜',
                  to:'/classify/four'
              },
              {
                  text:'儿童专区',
                  to:'/classify/five'
              },
              {
                  text:'蔬菜',
                  to:'/classify/six'
              },
              {
                  text:'水果',
                  to:'/classify/seven'
              },
              {
                  text:'肉禽蛋',
                  to:'/classify/eight'
              },
              {
                  text:'水产海鲜',
                  to:'/classify/nine'
              },
              {
                  text:'水产海鲜',
                  to:'/classify/ten'
              },
              {
                  text:'乳饮西点',
                  to:'/classify/eleven'
              },
              {
                  text:'点心速食',
                  to:'/classify/twelve '
              },
              {
                  text:'粮油副食',
                  to:'/classify/thirteen'
              }
          ]
        }
    },
}
</script>


<style>
  #ClassifyTwo{
      width:100%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      margin-top:1.2rem;
  }  
  .left{
      width:25%;
      border-right:1px solid rgb(187, 184, 184);
      position: absolute;
  }
  .left-list{
      width:100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top:.3rem;
  }
  .left-list li{
      text-align: center;
      width:70%;
      height:1rem;
      color:rgb(97, 95, 95);
      font-size: .28rem;
  }
</style>