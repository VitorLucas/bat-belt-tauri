import { Todo } from "../types/todo";

interface TodoItemProps{
    todo:Todo;
    onCompleteChange:(id:number, completed:boolean)=>void;
}

export default function TodoItem({todo, onCompleteChange}: TodoItemProps){
    return(
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input 
                    type="checkbox" 
                    className="scale-125" 
                    checked={todo.completed}
                    onChange={(e) => onCompleteChange(todo.id, e.target.checked)}/>
                <span key={todo.id} className={todo.completed ? "line-through text-gray-200" : "" }>
                    {todo.title}
                </span>
            </label>
        </div>
    );
}


// Components are tsx