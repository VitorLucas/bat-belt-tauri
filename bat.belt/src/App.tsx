import {dummyData} from "./data/todo";
import TodoItem from "./component/TodoItem";

function App() {

  function setTodoCompleted(id:number, completed:boolean){
    alert(`Todo with id:${id} is now ${completed ? "is completed" :"not completed"}`)
  }
  
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
        {
          dummyData.map(todo => (
            <TodoItem
             todo={todo}
             onCompleteChange={setTodoCompleted}
             />
          ))
        }
       
        </div>
      </div>
    </main>
  );
}

export default App;
