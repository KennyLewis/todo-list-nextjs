import { FC } from "react";

export interface TodoItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <p className={checked ? "line-through" : ""}>{label}</p>
    </div>
  );
};

export default TodoItem;
