
// import React from 'react';

// type ScheduledDetails = {
//   engineerName: string;
//   candidateName: string;
//   time: string;
//   engineerId: string;
//   candidateId: string;
// };

// type DashboardProps = {
//   totalCandidates: number;
//   totalEngineers: number;
//   scheduledInterviews: ScheduledDetails[];
//   onCancel: (engineerId: string, candidateId: string, time: string) => void;
// };

// const Dashboard: React.FC<DashboardProps> = ({
//   totalCandidates,
//   totalEngineers,
//   scheduledInterviews,
//   onCancel,
// }) => {
//   return (
//     <div
//       style={{
//         border: '1px solid #cbd5e1',
//         padding: '20px',
//         borderRadius: '10px',
//         backgroundColor: '#ffffff',
//         color: '#1f2937',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
//         marginBottom: '24px',
//       }}
//     >
//       <h2 style={{ marginBottom: '16px', color: '#1e40af' }}>📊 Dashboard</h2>

//       <p><strong>Total Candidates:</strong> {totalCandidates}</p>
//       <p><strong>Total Engineers:</strong> {totalEngineers}</p>
//       <p><strong>Interviews Scheduled:</strong> {scheduledInterviews.length}</p>
//     <p><strong>Interviews Scheduled:</strong></p>
//       {scheduledInterviews.map((interview, index) => (
//         <div
//           key={index}
//           style={{
//             marginTop: '16px',
//             padding: '12px 16px',
//             backgroundColor: '#e0f2fe',
//             borderRadius: '8px',
//             border: '1px solid #93c5fd',
//             color: '#1f2937',
//             position: 'relative',
//           }}
//         >
//           <p><strong>Engineer:</strong> {interview.engineerName}</p>
//           <p><strong>Candidate:</strong> {interview.candidateName}</p>
//           <p><strong>Time:</strong> {interview.time}</p>
//           <button
//             onClick={() =>
//               onCancel(interview.engineerId, interview.candidateId, interview.time)
//             }
//             style={{
//               position: 'absolute',
//               top: '12px',
//               right: '16px',
//               backgroundColor: '#ef4444',
//               color: '#fff',
//               border: 'none',
//               padding: '6px 10px',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px',
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';

type ScheduledDetails = {
  engineerName: string;
  candidateName: string;
  time: string;
  engineerId: string;
  candidateId: string;
};

type DashboardProps = {
  totalCandidates: number;
  totalEngineers: number;
  scheduledInterviews: ScheduledDetails[];
  onCancel: (engineerId: string, candidateId: string, time: string) => void;
};

const Dashboard: React.FC<DashboardProps> = ({
  totalCandidates,
  totalEngineers,
  scheduledInterviews,
  onCancel,
}) => {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
        marginBottom: '24px',
      }}
    >
      <h2 style={{ marginBottom: '24px', color: '#1e40af' }}> Dashboard</h2>

      {/* Statistics Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#e0f2fe',
            border: '1px solid #93c5fd',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#1e3a8a' }}> Candidates</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalCandidates}</p>
        </div>

        <div
          style={{
            backgroundColor: '#fef9c3',
            border: '1px solid #fde68a',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h3 style={{fontSize: '24px', marginBottom: '8px', color: '#92400e' }}> Engineers</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalEngineers}</p>
        </div>

        <div
          style={{
            backgroundColor: '#dcfce7',
            border: '1px solid #86efac',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '24px',marginBottom: '8px', color: '#166534' }}> Scheduled</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{scheduledInterviews.length}</p>
        </div>
      </div>

      {/* Scheduled Interviews List */}
      {scheduledInterviews.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '12px', color: '#1e40af' }}> Interview Details</h3>
          {scheduledInterviews.map((interview, index) => (
            <div
              key={index}
              style={{
                marginBottom: '16px',
                padding: '12px 16px',
                backgroundColor: '#f1f5f9',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                position: 'relative',
              }}
            >
              <p><strong>Engineer:</strong> {interview.engineerName}</p>
              <p><strong>Candidate:</strong> {interview.candidateName}</p>
              <p><strong>Time:</strong> {interview.time}</p>
              <button
                onClick={() =>
                  onCancel(interview.engineerId, interview.candidateId, interview.time)
                }
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
