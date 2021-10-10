import "./TodoItem.scss";

export const TodoItem = ({ text, id, handleDelete }) => {
  return (
    <div className="todo-item">
      <p>{text}</p>
      <button id={id} onClick={(e) => handleDelete(e)}>
        <img src="/delete.svg" alt="Delete" />
      </button>
    </div>
  );
};
