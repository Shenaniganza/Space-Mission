import React from 'react';

function MissionAction({ mission, updateMissionStatus }) {
  const statuses = ['Planned', 'Active', 'Completed'];

  return (
    <div>
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => updateMissionStatus(mission.id, status)}
          disabled={mission.status === status}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default MissionAction;
