<template>
  <div>
    <span 
    @click="updateTodoStatus"
    :class="{ 'is-completed': todo.isCompleted }"
    >
    <!-- is-completed 얘가 어떤 값에 따라서 입력이 됐다가 안됐다가 해야함
    객체로 넣는 방법을 배웠음
    key 가 입력되는 문자열 값
    값의 true false 에 따라서 key가 결정됨// v-bind 할 때 배웠었음 -->
    {{ todo.title }}
  </span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
      // 뭘 삭제했는지 알려줘야하기 때문에 선택된(클릭된) todo를 같이 보내줘야함
      // this.$store.commit('DELETE_TODO', this.todo)
    },
    updateTodoStatus() { // 액션호출~
      this.$store.dispatch('updateTodoStatus', this.todo)
    }
  }
}
</script>

<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>