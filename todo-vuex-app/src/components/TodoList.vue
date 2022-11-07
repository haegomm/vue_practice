<template>
  <div>
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    todos() {
            // 어디있는 todos? store에 있는데 인스턴스(뭔솔)의 store
      return this.$store.state.todos  // 여기 있는 개별 요소들을 todolistitem으로 내려줘야함
    }
  }
}
</script>

<style>

</style>