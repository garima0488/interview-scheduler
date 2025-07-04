
import React from 'react';

type Candidate = {
  id: string;
  name: string;
  availability: {
    day: string;
    start: string;
    end: string;
  };
};

type Props = {
  candidates: Candidate[];
  onSelect: (candidate: Candidate) => void;
};

const CandidateDropdown: React.FC<Props> = ({ candidates, onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label
        htmlFor="candidate-select"
        style={{ marginRight: '10px', color: '#00FF88' }}
      >
        Select Candidate:
      </label>
      <select
        id="candidate-select"
        onChange={(e) => {
          const selected = candidates.find((c) => c.id === e.target.value);
          if (selected) onSelect(selected);
        }}
        style={{
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: '#000000',
          color: '#00FF88',
          border: '1px solid #00FF88',
        }}
      >
        <option value="">-- Choose --</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.id}>
            {candidate.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CandidateDropdown;
