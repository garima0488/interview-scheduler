// // src/components/Dashboard.tsx
// import React from 'react';

// type DashboardProps = {
//   totalCandidates: number;
//   totalEngineers: number;
//   scheduledCount: number;
// };

// const Dashboard: React.FC<DashboardProps> = ({
//   totalCandidates,
//   totalEngineers,
//   scheduledCount,
// }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: '#000000',
//         color: '#00FF88',
//         padding: '20px',
//         borderRadius: '12px',
//         display: 'flex',
//         justifyContent: 'space-around',
//         fontWeight: 'bold',
//         boxShadow: '0 0 10px #00FF88',
//         marginBottom: '24px',
//       }}
//     >
//       <div>Candidates: {totalCandidates}</div>
//       <div>Engineers: {totalEngineers}</div>
//       <div>Scheduled Interviews: {scheduledCount}</div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';

type DashboardProps = {
  totalCandidates: number;
  totalEngineers: number;
  scheduledCount: number;
  scheduledDetails: {
    engineerName: string;
    candidateName: string;
    time: string;
  } | null;
};

const Dashboard: React.FC<DashboardProps> = ({
  totalCandidates,
  totalEngineers,
  scheduledCount,
  scheduledDetails,
}) => {
  return (
    <div
      style={{
        border: '1px solid #00FF88',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#000',
        color: '#00FF88',
        boxShadow: '0 0 10px #00FF88',
        marginBottom: '24px',
      }}
    >
      <h2 style={{ marginBottom: '16px' }}>📊 Dashboard</h2>

      <p><strong>Total Candidates:</strong> {totalCandidates}</p>
      <p><strong>Total Engineers:</strong> {totalEngineers}</p>
      <p><strong>Interviews Scheduled:</strong> {scheduledCount}</p>

      {scheduledDetails && (
        <div style={{ marginTop: '16px', padding: '10px', backgroundColor: '#00110f', borderRadius: '6px' }}>
          <p><strong>🛠 Engineer:</strong> {scheduledDetails.engineerName}</p>
          <p><strong>👤 Candidate:</strong> {scheduledDetails.candidateName}</p>
          <p><strong>🕒 Time:</strong> {scheduledDetails.time}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
