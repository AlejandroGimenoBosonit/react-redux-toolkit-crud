import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addTask, editTask } from "../../features/tasks/taskSlice";
import "./TaskForm.css";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", desc: "" });
  const tasks = useSelector((state) => state.tasks);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const assignId = uuid();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(
        editTask({
          ...task,
          id: params.id,
        })
      );
    } else {
      dispatch(
        addTask({
          ...task,
          id: assignId,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{params.id ? "Edit" : "Create"} Task </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">subtitulo</Card.Subtitle>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="title"
            onChange={handleChange}
            value={task.title}
            autoFocus
          />
          <textarea
            name="desc"
            placeholder="description"
            onChange={handleChange}
            value={task.desc}
          ></textarea>
          <Button variant="success" type="submit">
            {params.id ? "Edit" : "Create"}
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default TaskForm;
