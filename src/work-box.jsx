import React from 'react';
import workUpdates from './work-update';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkList = ({ workIndex }) => {
  const work = workUpdates[workIndex];

  if (!work) {
    return <p>No work available for you.</p>;
  }

  return (
    <div className="container mt-4">
      <div key={work.id} className="card mb-3">
        <div className="card-body">
          {/* Work name */}
          <h4 className="card-title">{work.workName}</h4>
          
          {/* Work description */}
          <p className="card-text">{work.description}</p>
          
          {/* Due Date */}
          <p className="text-muted">
            <strong>Due Date: </strong>{work.dueDate}
          </p>
          
          {/* Button to mark as done */}
          <button className="btn btn-success">Mark as Done</button>

          {/* Last Updated */}
          <p className="text-muted mt-2">
            <strong>Last Updated: </strong>{work.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
