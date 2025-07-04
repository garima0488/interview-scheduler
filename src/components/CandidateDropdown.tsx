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
    <div style={{ marginBottom: '24px' }}>
      <label
        htmlFor="candidate-select"
        style={{
          marginRight: '12px',
          color: '#1f2937',
          fontWeight: '500',
          fontSize: '16px',
        }}
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
          padding: '10px 12px',
          borderRadius: '8px',
          backgroundColor: '#f9fafb',
          color: '#1f2937',
          border: '1px solid #cbd5e1',
          fontSize: '15px',
          minWidth: '200px',
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
