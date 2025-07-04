// import React from 'react';

// type Availability = {
//   day: string;
//   start: string;
//   end: string;
// };

// type Candidate = {
//   id: string;
//   name: string;
//   availability: Availability;
// };

// type Props = {
//   candidates: Candidate[];
//   onSelect: (candidate: Candidate) => void;
// };

// const CandidateDropdown: React.FC<Props> = ({ candidates, onSelect }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedId = e.target.value;
//     const selectedCandidate = candidates.find(c => c.id === selectedId);
//     if (selectedCandidate) {
//       onSelect(selectedCandidate);
//     }
//   };

//   return (
//     <div>
//       <label>Select Candidate: </label>
//       <select onChange={handleChange} defaultValue="">
//         <option value="" disabled>Select</option>
//         {candidates.map((cand) => (
//           <option key={cand.id} value={cand.id}>
//             {cand.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CandidateDropdown;
// import React from 'react';

// type Availability = {
//   day: string;
//   start: string;
//   end: string;
// };

// type Candidate = {
//   id: string;
//   name: string;
//   availability: Availability;
// };

// type Props = {
//   candidates: Candidate[];
//   onSelect: (candidate: Candidate) => void;
// };

// const CandidateDropdown: React.FC<Props> = ({ candidates, onSelect }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedId = e.target.value;
//     const selectedCandidate = candidates.find(c => c.id === selectedId);
//     if (selectedCandidate) {
//       onSelect(selectedCandidate);
//     }
//   };

//   return (
//     <div style={{ marginBottom: '16px' }}>
//       <label htmlFor="candidateSelect" style={{ marginRight: '8px' }}>
//         Select Candidate:
//       </label>
//       <select id="candidateSelect" onChange={handleChange} defaultValue="">
//         <option value="" disabled>
//           -- Choose a candidate --
//         </option>
//         {candidates.map(candidate => (
//           <option key={candidate.id} value={candidate.id}>
//             {candidate.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CandidateDropdown;
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
