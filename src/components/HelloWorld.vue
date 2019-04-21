<template>
  <div class="hello">
    <el-button>按钮</el-button>
<!--    不设置size 则显示位small-->
    <el-button type="primary">按钮</el-button>
<!--    随便设置一个size，则显示为重置之前的默认按钮的大小 可以单独给这个class加上指定的样式-->
    <el-button type="primary" size="large">按钮</el-button>
    <el-button type="primary" size="max">按钮</el-button>
    <el-button type="primary" size="medium">按钮</el-button>
    <el-button type="primary" size="small">按钮</el-button>
    <el-button type="primary" size="mini">按钮</el-button>
<!--    按钮的自定义类别，不需要增加自定义的类名即可-->
    <el-button type="special" size="mini">按钮</el-button>
    <el-button type="fuybooo" size="mini">按钮</el-button>
    <div>
      显示msg：{{msg}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
