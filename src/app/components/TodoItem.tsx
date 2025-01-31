const TodoItem = ({ todo }: {todo: Todo}) => {
    return (
        <div className="flex items-center gap-4">
            <input type="checkbox" checked={todo.checked} />
            <p className={todo.checked ? "line-through" : ""}>{todo.label}</p>
        </div>
    );
};

export default TodoItem;