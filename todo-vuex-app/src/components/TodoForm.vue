<template>
  <div><input 
    type="text"
    v-model.trim="todoTitle"
    @keyup.enter="createTodo"
  ></div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoTitle: null,
    }
  },
  methods: {
    createTodo() {
      // console.log(this.todoTitle)
      if (this.todoTitle) {  // 빈문자열이 아니라면 다음을 실행하겠다
        this.$store.dispatch('createTodo', this.todoTitle)
        //   '액션 메서드 이름', todoTitle 를 넣어줘야 액션이 이 값을 통해서 todo 객체 만들고 뮤테이션으로 넘겨줌
      }
      this.todoTitle= null
    }
  }
}
</script>

<style>

</style>