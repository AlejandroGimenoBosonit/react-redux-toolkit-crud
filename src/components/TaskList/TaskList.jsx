import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../features/tasks/taskSlice";
import "./TaskList.css";

const TaskList = () => {
  const taskState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task) => {
    // navigate to formpage
    navigate(`/edit-task/${task.id}`);
  };

  return (
    <div className="list-container">
      <ListGroup as="ol" numbered>
        {taskState.map((task) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start task-item"
            key={task.id}
          >
            <div className="ms-2 me-auto list-task">
              <header>
                <h3 className="fw-bold task-title">{task.title}</h3>
              </header>

              <p className="task-desc">{task.desc}</p>
            </div>
            <div className="badge">
              <Badge bg="warning" pill>
                <Button
                  type="button"
                  variant="warning"
                  className="task-button"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </Button>
              </Badge>
              <Badge bg="danger" pill>
                <Button
                  type="button"
                  variant="danger"
                  className="task-button"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </Button>
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
