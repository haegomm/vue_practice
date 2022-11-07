import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: [  // 배열
      // {  // todo 하나하나가 객체가 될 거임
      //   title: '할 일 1',
      //   isCompleted: false,
      // },
      // {
      //   title: '할 일 2',
      //   isCompleted: false,
      // }
    ]
  },
  getters: {
    // getters는 첫번째 인자로 state를 받음. state 값을 계산하기 때문에
    // return 이 있어야 값이 나옴. 없으면 null 이 나옴
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state) {
      // 1. 완료된 투두만 모아놓은 새로운 배열을 생성
      const completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted === true
      })
      // 2. 새로운 배열의 길이 반환
      return completedTodos.length
    },
    unCompletedTodosCount(state, getters) {
      return getters.allTodosCount - getters.completedTodosCount
    },
  },
  mutations: {
    // 뮤테이션이 하는 일은 액션에서 받은 데이터를 중앙저장소 state에 푸쉬
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      // 일단 삭제되는 얘 인덱스 구하기
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      // todos 배열에서 선택된 todo의 is_completed 값만 토글한 후
      // 업데이트 된 todos 배열로 되어야 함

      // 일단 배열에서 선택된 todo를 찾아야함. => ⭐반복⭐이 진행되어야 함
      // 반복이 진행 된 후 ⭐결과가 나와야⭐지 배열 반환이 됨
      // state.todos를 반복하면서 특정조건을 만족시키는 경우는 isCompleted 값을 바꾸고
      // 그리고 나머지 todo들은 그냥 return 하면서
      // 최종결과물을 state.todos 로 바꾼다.

      // 배열의 요소가 map 메서드의 콜백함수로 들어감
      state.todos = state.todos.map((todo) => {
        // 선택된 애랑 누가 같니~? 같다면~
        if (todo === todoItem) {
          // todo의 isCompleted 값을 바꿔주고
          todo.isCompleted = !todo.isCompleted
        }
        // 그렇게 나온 반환값이 모여서 state.todos 배열로 할당이 됨
        return todo
      })

      // 또 다른 코드
      // const index = state.todos.indexOf(todoItem)
      // state.todos[index].isCompleted = !state.todos[index].isCompleted

    },
    // LOAD_TODOS(state) {
    // const localStorage = localStorage.getItem('todos')  // 여기서 가져온 결과 -> 배열 아님
    // 저장할 때 문자열로 바꿔서 저장했기 때문에 역으로 파싱해야함
    // const parsedTodos = JSON.parse(localStorage)
    // state.todos = parsedTodos
    // },
  },
  actions: {
    // context(store에 있는 모든 속성과 메서드에 접근할 수 있는 친구), 올린 데이터
    createTodo(context, todoTitle) {
      // Todo 객체 만들기
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      // 뮤테이션으로 보내기.
      // 액션에서 뮤테이션 호출
      // context에 있는 commit 메서드로(뮤테이션 함수들의 이름은 대문자로), 만든 데이터를 보내기
      context.commit('CREATE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage')
    },
    deleteTodo(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
      // 본인이 받은 누가 삭제 될 건지에 대한 것도 같이 넘겨줌
      context.dispatch('saveTodosToLocalStorage')
    }, // 뮤테이션만 호출하는 액션은 생략하고 disparch 할 때 바로 적어줘도 됨
    updateTodoStatus(context, todoItem) {
      context.commit('UPDATE_TODO_STATUS', todoItem)
      context.dispatch('saveTodosToLocalStorage')
    },
    // saveTodosToLocalStorage(context) {
    //                              state의 투두즈를 json으로 바꿔줌
    // const jsonTodos = JSON.stringify(context.state.todos)
    //                   키(데이터를 가져올 때 사용할 이름 암거나~), 값
    // localStorage.setItem('todos', jsonTodos)
    // },
    // loadTodo(context) { // 로컬스토리지에 있는 데이터를 불러오는 친구
    // 불러와서 todos에 넣어야함
    // 결국 todos를, state를 조작하는 것
    // 그렇다는건 뮤테이션이 필요하다는 것
    // context.commit('LOAD_TODOS)')
    // }
  },
  modules: {
  }
})
