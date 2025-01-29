import React from 'react';

function MissionFilter({ setFilter }) {
  const filters = ['All', 'Planned', 'Active', 'Completed'];

  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default MissionFilter;
