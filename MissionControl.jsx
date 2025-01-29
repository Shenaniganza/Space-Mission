import React, { useState } from 'react';
import MissionCard from './MissionCard';
import MissionAction from './MissionAction';
import MissionFilter from './MissionFilter';

function MissionControl({ initialMissions }) {
  const [missions, setMissions] = useState(initialMissions);
  const [filter, setFilter] = useState('All');

  const updateMissionStatus = (id, status) => {
    setMissions(prevMissions =>
      prevMissions.map(mission =>
        mission.id === id ? { ...mission, status } : mission
      )
    );
  };

  const filteredMissions = filter === 'All' ? missions : missions.filter(mission => mission.status === filter);

  return (
    <div>
      <MissionFilter setFilter={setFilter} />
      {filteredMissions.map(mission => (
        <div key={mission.id}>
          <MissionCard mission={mission} />
          <MissionAction mission={mission} updateMissionStatus={updateMissionStatus} />
        </div>
      ))}
    </div>
  );
}

export default MissionControl;
