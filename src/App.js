// @flow
import React, { Component } from 'react';
// import logo from './logo.svg';
import { observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';
import Button from '@skbkontur/react-ui/Button'
import Toast from '@skbkontur/react-ui/Toast'


class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;
}

class TodoList {
  @observable todos: Todo[] = [];
  @computed
  get unfinishedTodoCount(): number {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo =>
            <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
);

const createTodo = (title: string): Todo => {
  const result = new Todo();
  result.title = title;
  return result;
};

const store = new TodoList();
store.todos.push(createTodo('Задание 1'));
store.todos.push(createTodo('Задание 2'));

autorun(() => {
  console.log('Tasks left: ' + store.unfinishedTodoCount);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Вакансии</h2>
        <TodoListView todoList={store} />
	<Button onClick={() => Toast.push('Hey!')}>Click me</Button>
      </div>
    );
  }
}

export default App;
