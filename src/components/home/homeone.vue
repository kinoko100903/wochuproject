<template>
    <div class = "homecon">
        <img src="../../assets/img/1_04.jpg">
        <div>
            <p>请填写地址 <span class="iconfont">&#xe6bd;</span></p>
        </div>
        <img src="../../assets/img/1_03.jpg">
    </div>
</template>



<style lang="scss" scoped>
    .homecon{
        width:100%;
        height:.9rem;
        background: #fff;
        position: absolute;
        // line-height: .9rem;
        padding:.24rem;
        z-index: 3;
        top:0;
        left:0;
        display:flex;
        align-content: center;
        img:nth-of-type(1){
            width:.8rem;
            height:.42rem;
        }
        div{
           margin-left:.625rem;
           p{
               font-size: .3rem;
               span{
                   font-size: .2rem;
               }
           }
        }
        img:nth-of-type(2){
            width:.35rem;
            height:.35rem;
            margin-left:3.4375rem;
        }
    }
</style>