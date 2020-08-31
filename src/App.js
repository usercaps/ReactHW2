import React from "react";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import { Tabs } from "./components/Tabs/Tabs";
import TodoList from "./components/TodoList/TodoList";
import { Totals } from "./components/Total/Total";

import "./app.scss";

class App extends React.Component {
  setId = 100;
  state = {
    toDoList: [
      { task: "some", important: false, done: false, id: 1 },
      { task: "text", important: false, done: false, id: 2 },
      { task: "i", important: false, done: false, id: 3 },
      { task: "coppy", important: false, done: false, id: 4 },
    ],
    tab: "main",
    searchInputValue: "",
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      const todos = prevState.toDoList.filter((todo) => {
        return todo.id !== id;
      });
      return {
        toDoList: todos,
      };
    });
  };

  onAdded = (setValue) => {
    this.setState((prev) => {
      const addTodos = [
        ...prev.toDoList,
        {
          task: setValue,
          important: false,
          done: false,
          id: ++this.setId,
        },
      ];
      return {
        toDoList: addTodos,
      };
    });
  };

  onToggle = (id) => {
    this.setState((prev) => {
      let todo = prev.toDoList.map((elem) => {
        if (elem.id === id) {
          elem.done = !elem.done;
        }
        return elem;
      });
      return {
        toDolist: todo,
      };
    });
  };

  onFavor = (id) => {
    this.setState((prev) => {
      let todo = prev.toDoList.map((elem) => {
        if (elem.id === id) {
          elem.important = !elem.important;
        }
        return elem;
      });
      return {
        toDolist: todo,
      };
    });
  };

  favorTab = () => {
    this.setState({
      tab: "favor",
    });
  };
  mainTab = () => {
    this.setState({
      tab: "main",
    });
  };
  comleteTab = () => {
    this.setState({
      tab: "complete",
    });
  };
  liveSearch = (value) => {
    this.setState({
      searchInputValue: value,
    });
  };

  render() {
    let { toDoList } = this.state;
    if (this.state.tab === "favor") {
      toDoList = toDoList.filter((i) => i.important);
    } else if (this.state.tab === "complete") {
      toDoList = toDoList.filter((i) => i.done);
    }
    if (this.state.searchInputValue !== "") {
      toDoList = toDoList.filter((i) =>
        i.task.match(new RegExp(this.state.searchInputValue))
      );
    }
    const favor = this.state.toDoList.filter((i) => i.important).length;
    const done = this.state.toDoList.filter((i) => i.done).length;
    return (
      <div className="wrapper">
        <Header />
        <SearchInput searchValue={this.liveSearch} />
        <Tabs
          howTab={this.state.tab}
          favor={this.favorTab}
          mainTab={this.mainTab}
          comleteTab={this.comleteTab}
        />
        <TodoList
          todos={toDoList}
          onDelete={this.onDelete}
          onAdded={this.onAdded}
          onToggle={this.onToggle}
          onFavor={this.onFavor}
        />
        <Totals favor={favor} done={done} />
      </div>
    );
  }
}

export default App;
