import React from 'react';

function MissionCard({ mission }) {
  return (
    <div>
      <h2>{mission.name}</h2>
      <p>Status: {mission.status}</p>
      <p>Crew: {mission.crew.join(', ')}</p>
    </div>
  );
}

export default MissionCard;
