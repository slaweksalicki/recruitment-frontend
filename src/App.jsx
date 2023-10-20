import "./App.scss";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTask />
        <TasksList />
      </main>
    </>
  );
}

export default App;
