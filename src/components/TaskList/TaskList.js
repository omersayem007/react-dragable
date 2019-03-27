import React from "react";
import Task from '../Task/Task';
import Card from '../Card/Card';
import Droppable from '../Dropable/Dropable'

export default props => {
  const { tasks = [], id } = props;
  return (
    <Card>
      <Droppable dndType="TASK" {...props}>
        <h2>{id}</h2>
        {tasks.map(task => (
          <Task key={task.id} dndType="TASK" {...task} />
        ))}
      </Droppable>
    </Card>
  );
};