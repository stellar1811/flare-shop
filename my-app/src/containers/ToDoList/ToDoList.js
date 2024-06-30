import { useEffect, useState } from "react";
import List from "../../components/List/List";
import { API_URL } from "../../constants";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      getTodos();
    }
  }, [isLoaded]);

  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`);
      const data = await response.json();

      // Переконайтеся, що data є масивом
      if (Array.isArray(data)) {
        setTodos(data);
      } else {
        console.error("Data is not an array:", data);
      }

      setIsLoaded(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addTodo = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: false,
          name,
        }),
      });

      setName("");
      setIsLoaded(false);
      setShow(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      });

      setIsLoaded(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const editTodo = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/todos/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: false,
          name,
        }),
      });

      setName("");
      setIsLoaded(false);
      setEditId(null);
      setShow(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setIsDone = async (id, isDone) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: !isDone,
        }),
      });

      setIsLoaded(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (name, id) => {
    setName(name);
    setEditId(id);
    setShow(true);
  };

  return (
    <div>
      Todo List
      <List
        items={todos}
        deleteItem={deleteTodo}
        editItem={handleEdit}
        setIsDone={setIsDone}
      />
      <Button variant="primary" onClick={() => setShow(true)}>
        Add/Edit
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleSubmit={editId ? editTodo : addTodo}>
            <label>
              Name:
              <Input value={name} handleChange={setName} />
            </label>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoList;
