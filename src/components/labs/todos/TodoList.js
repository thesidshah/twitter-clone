// import TodoItem from "./TodoItem.js";
// import todos from "./todos.js";
// const TodoList = () => {
//     return(`
//  <ul>
//             ${
//         todos.map(todo => {
//             return(TodoItem(todo));
//         }).join('')
//     }
//         </ul>
//     `);
// }
// export default TodoList;
import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return(
            // <ul>
            //     <TodoItem todos={todos}/>
            //     todos.map(todo => {return(<TodoItem todo={todo}/>);})
            //
            // </ul>
        <>
        {
            todos.map(todo => {
                return(
                    <TodoItem todo={todo}/>
                );
            })
        }
        </>
    );
}
export default TodoList;