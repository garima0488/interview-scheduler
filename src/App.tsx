// import React, { useState } from 'react';
// import candidates from './data/candidates.json';
// import rawEngineers from './data/engineers.json';
// import CandidateDropdown from './components/CandidateDropdown';
// import CalendarGrid from './components/CalendarGrid';
// import Dashboard from './components/Dashboard';

// // Types
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

// type RawEngineer = {
//   id: string;
//   name: string;
//   availability: {
//     [day: string]: string[] | undefined;
//   };
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type ScheduledInterview = {
//   engineerId: string;
//   engineerName: string;
//   time: string;
//   day: string;
// };

// const add30Minutes = (time: string): string => {
//   const [hour, minute] = time.split(':').map(Number);
//   const total = hour * 60 + minute + 30;
//   const newHour = Math.floor(total / 60).toString().padStart(2, '0');
//   const newMinute = (total % 60).toString().padStart(2, '0');
//   return `${newHour}:${newMinute}`;
// };

// const transformEngineers = (raw: RawEngineer[]): Engineer[] => {
//   return raw.map((engineer) => ({
//     id: engineer.id,
//     name: engineer.name,
//     availability: Object.entries(engineer.availability).flatMap(([day, times]) =>
//       (times ?? []).map((start) => ({
//         day,
//         start,
//         end: add30Minutes(start),
//       }))
//     ),
//   }));
// };

// function App() {
//   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
//   const [scheduledInterview, setScheduledInterview] = useState<ScheduledInterview | null>(null);

//   const transformedEngineers = transformEngineers(rawEngineers as RawEngineer[]);

//   const handleCandidateSelect = (candidate: Candidate) => {
//     setSelectedCandidate(candidate);
//     setScheduledInterview(null); // reset interview if new candidate is selected
//   };

//   const handleSchedule = (engineer: Engineer, time: string, day: string) => {
//     setScheduledInterview({
//       engineerId: engineer.id,
//       engineerName: engineer.name,
//       time,
//       day,
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: '20px',
//         fontFamily: 'Arial',
//         backgroundColor: '#000',
//         color: '#00FF88',
//         minHeight: '100vh',
//       }}
//     >
//       <h1 style={{ color: '#00FF88' }}> Interview Scheduler</h1>

//       <Dashboard
//         totalCandidates={candidates.length}
//         totalEngineers={transformedEngineers.length}
//         scheduledCount={scheduledInterview ? 1 : 0}
//       />

//       <CandidateDropdown
//         candidates={candidates}
//         onSelect={handleCandidateSelect}
//       />

//       {selectedCandidate && (
//         <p style={{ marginTop: '16px' }}>
//           Selected: <strong>{selectedCandidate.name}</strong> – available on{' '}
//           {selectedCandidate.availability.day} from{' '}
//           {selectedCandidate.availability.start} to{' '}
//           {selectedCandidate.availability.end}
//         </p>
//       )}

//       <CalendarGrid
//         engineers={transformedEngineers}
//         candidate={selectedCandidate}
//         onSchedule={handleSchedule}
//         scheduledSlot={
//           scheduledInterview
//             ? `${scheduledInterview.day}-${scheduledInterview.time}`
//             : null
//         }
//       />

//       {scheduledInterview && (
//         <div
//           style={{
//             marginTop: '20px',
//             padding: '16px',
//             backgroundColor: '#002d1f',
//             border: '1px solid #00FF88',
//             borderRadius: '8px',
//             color: '#00FF88',
//             fontWeight: 'bold',
//             boxShadow: '0 0 10px #00FF88',
//           }}
//         >
//           ✅ Interview Scheduled!
//           <br />
//           Candidate: {selectedCandidate?.name}
//           <br />
//           Engineer: {scheduledInterview.engineerName}
//           <br />
//           Time: {scheduledInterview.day}, {scheduledInterview.time}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------
// import React, { useState } from 'react';
// import candidates from './data/candidates.json';
// import rawEngineers from './data/engineers.json';
// import CandidateDropdown from './components/CandidateDropdown';
// import CalendarGrid from './components/CalendarGrid';
// import Dashboard from './components/Dashboard';
// //import './App.css';

// // Types
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

// type RawEngineer = {
//   id: string;
//   name: string;
//   availability: {
//     [day: string]: string[] | undefined;
//   };
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type ScheduledInterview = {
//   engineerId: string;
//   time: string;
// };

// const add30Minutes = (time: string): string => {
//   const [hour, minute] = time.split(':').map(Number);
//   const total = hour * 60 + minute + 30;
//   const newHour = Math.floor(total / 60).toString().padStart(2, '0');
//   const newMinute = (total % 60).toString().padStart(2, '0');
//   return `${newHour}:${newMinute}`;
// };

// const transformEngineers = (raw: RawEngineer[]): Engineer[] => {
//   return raw.map((engineer) => ({
//     id: engineer.id,
//     name: engineer.name,
//     availability: Object.entries(engineer.availability).flatMap(([day, times]) =>
//       (times ?? []).map((start) => ({
//         day,
//         start,
//         end: add30Minutes(start),
//       }))
//     ),
//   }));
// };

// function App() {
//   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
//   const [scheduledInterview, setScheduledInterview] = useState<ScheduledInterview | null>(null);
//   const [activeTab, setActiveTab] = useState<'dashboard' | 'calendar' | 'candidates' | 'engineers'>('dashboard');

//   const transformedEngineers = transformEngineers(rawEngineers as RawEngineer[]);

//   const handleCandidateSelect = (candidate: Candidate) => {
//     setSelectedCandidate(candidate);
//     setScheduledInterview(null);
//   };

//   const handleSchedule = (engineer: Engineer, time: string, day: string) => {
//     setScheduledInterview({ engineerId: engineer.id, time: `${day} ${time}` });
//   };

//   return (
//     <div className="app-container">
//       <aside className="sidebar">
//         <h2>SpeerCheck</h2>
//         <nav>
//           <ul>
//             <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
//             <li onClick={() => setActiveTab('calendar')}>Scheduler</li>
//             <li onClick={() => setActiveTab('candidates')}>Candidates</li>
//             <li onClick={() => setActiveTab('engineers')}>Engineers</li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="main-content">
//         <h1>Interview Scheduler</h1>

//         {activeTab === 'dashboard' && (
//           <Dashboard
//             totalCandidates={candidates.length}
//             totalEngineers={transformedEngineers.length}
//             scheduledCount={scheduledInterview ? 1 : 0}
//           />
//         )}

//         {activeTab === 'calendar' && (
//           <CalendarGrid
//             engineers={transformedEngineers}
//             candidate={selectedCandidate}
//             onSchedule={handleSchedule}
//             scheduledSlot={scheduledInterview?.time || null}
//           />
//         )}

//         {activeTab === 'candidates' && (
//           <>
//             <CandidateDropdown candidates={candidates} onSelect={handleCandidateSelect} />
//             {selectedCandidate && (
//               <p>
//                 Selected: <strong>{selectedCandidate.name}</strong> – available on {selectedCandidate.availability.day} from {selectedCandidate.availability.start} to {selectedCandidate.availability.end}
//               </p>
//             )}
//           </>
//         )}

//         {activeTab === 'engineers' && (
//           <div>
//             <h3>Available Engineers</h3>
//             <ul>
//               {transformedEngineers.map((eng) => (
//                 <li key={eng.id}>
//                   {eng.name} – {eng.availability.length} slots
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;
// above code sufficient

// import React, { useState } from "react";
// import candidates from "./data/candidates.json";
// import rawEngineers from "./data/engineers.json";
// import CandidateDropdown from "./components/CandidateDropdown";
// import CalendarGrid from "./components/CalendarGrid";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
// // Add imports
// import Toast from './components/Toast';
// import { useEffect } from 'react';

// import "./index.css";

// // Types
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

// type RawEngineer = {
//   id: string;
//   name: string;
//   availability: {
//     [day: string]: string[] | undefined;
//   };
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type ScheduledInterview = {
//   engineerId: string;
//   time: string;
// };

// const add30Minutes = (time: string): string => {
//   const [hour, minute] = time.split(":").map(Number);
//   const total = hour * 60 + minute + 30;
//   const newHour = Math.floor(total / 60).toString().padStart(2, "0");
//   const newMinute = (total % 60).toString().padStart(2, "0");
//   return `${newHour}:${newMinute}`;
// };

// const transformEngineers = (raw: RawEngineer[]): Engineer[] => {
//   return raw.map((engineer) => ({
//     id: engineer.id,
//     name: engineer.name,
//     availability: Object.entries(engineer.availability).flatMap(
//       ([day, times]) =>
//         (times ?? []).map((start) => ({
//           day,
//           start,
//           end: add30Minutes(start),
//         }))
//     ),
//   }));
// };

// function App() {
//   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
//     null
//   );
//   const [scheduledInterview, setScheduledInterview] =
//     useState<ScheduledInterview | null>(null);
//   const [activeTab, setActiveTab] = useState<string>("Dashboard");

//   const transformedEngineers = transformEngineers(
//     rawEngineers as RawEngineer[]
//   );

//   const handleCandidateSelect = (candidate: Candidate) => {
//     setSelectedCandidate(candidate);
//     setScheduledInterview(null); // reset
//   };

//   const handleSchedule = (
//     engineer: Engineer,
//     time: string,
//     day: string
//   ) => {
//     setScheduledInterview({
//       engineerId: engineer.id,
//       time: `${day} ${time}`,
//     });
//   };

//   return (
//     <div className="app-container">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="main-content">
//         {/* <h1>Interview Scheduler</h1> */}

//         {activeTab === "Dashboard" && (
//           <Dashboard
//   totalCandidates={candidates.length}
//   totalEngineers={transformedEngineers.length}
//   scheduledCount={scheduledInterview ? 1 : 0}
//   scheduledDetails={
//     scheduledInterview && selectedCandidate
//       ? {
//           engineerName: transformedEngineers.find(
//             (e) => e.id === scheduledInterview.engineerId
//           )?.name || '',
//           candidateName: selectedCandidate.name,
//           time: scheduledInterview.time,
//         }
//       : null
//   }
// />

//         )}

//         {activeTab === "Scheduler" && (
//           <>
//             <CandidateDropdown
//               candidates={candidates}
//               onSelect={handleCandidateSelect}
//             />

//             {selectedCandidate && (
//               <p style={{ marginTop: "16px", color: "#0f0" }}>
//                 Selected: <strong>{selectedCandidate.name}</strong> – available
//                 on {selectedCandidate.availability.day} from{" "}
//                 {selectedCandidate.availability.start} to{" "}
//                 {selectedCandidate.availability.end}
//               </p>
//             )}

//             <CalendarGrid
//               engineers={transformedEngineers}
//               candidate={selectedCandidate}
//               onSchedule={handleSchedule}
//               scheduledSlot={scheduledInterview?.time || null}
//             />
//           </>
//         )}

//         {activeTab === "Candidates" && (
//           <div className="list-section">
//             <h2>All Candidates</h2>
//             <ul>
//               {candidates.map((c) => (
//                 <li key={c.id} style={{ color: "#0f0" }}>
//                   {c.name} – {c.availability.day}{" "}
//                   {c.availability.start}-{c.availability.end}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeTab === "Engineers" && (
//           <div className="list-section">
//             <h2>Available Engineers</h2>
//             <ul>
//               {transformedEngineers.map((e) => (
//                 <li key={e.id} style={{ color: "#0f0" }}>
//                   {e.name} – {e.availability.length} available slots
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import candidates from "./data/candidates.json";
// import rawEngineers from "./data/engineers.json";
// import CandidateDropdown from "./components/CandidateDropdown";
// import CalendarGrid from "./components/CalendarGrid";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";
// import Toast from "./components/Toast";

// import "./index.css";

// // Types
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

// type RawEngineer = {
//   id: string;
//   name: string;
//   availability: {
//     [day: string]: string[] | undefined;
//   };
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type ScheduledInterview = {
//   engineerId: string;
//   time: string;
// };

// const add30Minutes = (time: string): string => {
//   const [hour, minute] = time.split(":").map(Number);
//   const total = hour * 60 + minute + 30;
//   const newHour = Math.floor(total / 60).toString().padStart(2, "0");
//   const newMinute = (total % 60).toString().padStart(2, "0");
//   return `${newHour}:${newMinute}`;
// };

// const transformEngineers = (raw: RawEngineer[]): Engineer[] => {
//   return raw.map((engineer) => ({
//     id: engineer.id,
//     name: engineer.name,
//     availability: Object.entries(engineer.availability).flatMap(
//       ([day, times]) =>
//         (times ?? []).map((start) => ({
//           day,
//           start,
//           end: add30Minutes(start),
//         }))
//     ),
//   }));
// };

// function App() {
//   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
//     null
//   );
//   const [scheduledInterview, setScheduledInterview] =
//     useState<ScheduledInterview | null>(null);
//   const [activeTab, setActiveTab] = useState<string>("Dashboard");

//   const [toastMessage, setToastMessage] = useState<string>("");
//   const [showToast, setShowToast] = useState<boolean>(false);

//   const transformedEngineers = transformEngineers(
//     rawEngineers as RawEngineer[]
//   );

//   const handleCandidateSelect = (candidate: Candidate) => {
//     setSelectedCandidate(candidate);
//     setScheduledInterview(null); // reset interview
//   };

//   const handleSchedule = (
//     engineer: Engineer,
//     time: string,
//     day: string
//   ) => {
//     const scheduledTime = `${day}-${time}`;

//     setScheduledInterview({
//       engineerId: engineer.id,
//       time: scheduledTime,
//     });

//     // Show toast message
//     setToastMessage(
//       `✅ Interview scheduled with ${engineer.name} on ${day} at ${time}`
//     );
//     setShowToast(true);
//   };

//   // Hide toast after 3 seconds
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => setShowToast(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast]);

//   return (
//     <div className="app-container">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="main-content">
//         {activeTab === "Dashboard" && (
//           <Dashboard
//             totalCandidates={candidates.length}
//             totalEngineers={transformedEngineers.length}
//             scheduledCount={scheduledInterview ? 1 : 0}
//             scheduledDetails={
//               scheduledInterview && selectedCandidate
//                 ? {
//                     engineerName:
//                       transformedEngineers.find(
//                         (e) => e.id === scheduledInterview.engineerId
//                       )?.name || "",
//                     candidateName: selectedCandidate.name,
//                     time: scheduledInterview.time,
//                   }
//                 : null
//             }
//           />
//         )}

//         {activeTab === "Scheduler" && (
//           <>
//             <CandidateDropdown
//               candidates={candidates}
//               onSelect={handleCandidateSelect}
//             />

//             {selectedCandidate && (
//               <p style={{ marginTop: "16px", color: "#0f0" }}>
//                 Selected: <strong>{selectedCandidate.name}</strong> – available
//                 on {selectedCandidate.availability.day} from{" "}
//                 {selectedCandidate.availability.start} to{" "}
//                 {selectedCandidate.availability.end}
//               </p>
//             )}

//             <CalendarGrid
//               engineers={transformedEngineers}
//               candidate={selectedCandidate}
//               onSchedule={handleSchedule}
//               scheduledSlot={scheduledInterview?.time || null}
//             />
//           </>
//         )}

//         {activeTab === "Candidates" && (
//           <div className="list-section">
//             <h2>All Candidates</h2>
//             <ul>
//               {candidates.map((c) => (
//                 <li key={c.id} style={{ color: "#0f0" }}>
//                   {c.name} – {c.availability.day}{" "}
//                   {c.availability.start}-{c.availability.end}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeTab === "Engineers" && (
//           <div className="list-section">
//             <h2>Available Engineers</h2>
//             <ul>
//               {transformedEngineers.map((e) => (
//                 <li key={e.id} style={{ color: "#0f0" }}>
//                   {e.name} – {e.availability.length} available slots
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <Toast message={toastMessage} show={showToast} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import candidates from "./data/candidates.json";
import rawEngineers from "./data/engineers.json";
import CandidateDropdown from "./components/CandidateDropdown";
import CalendarGrid from "./components/CalendarGrid";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";

import "./index.css";

// Types
type Availability = {
  day: string;
  start: string;
  end: string;
};

type Candidate = {
  id: string;
  name: string;
  availability: Availability;
};

type RawEngineer = {
  id: string;
  name: string;
  availability: {
    [day: string]: string[] | undefined;
  };
};

type Engineer = {
  id: string;
  name: string;
  availability: Availability[];
};

type ScheduledInterview = {
  engineerId: string;
  time: string;
};

const add30Minutes = (time: string): string => {
  const [hour, minute] = time.split(":").map(Number);
  const total = hour * 60 + minute + 30;
  const newHour = Math.floor(total / 60).toString().padStart(2, "0");
  const newMinute = (total % 60).toString().padStart(2, "0");
  return `${newHour}:${newMinute}`;
};

const transformEngineers = (raw: RawEngineer[]): Engineer[] => {
  return raw.map((engineer) => ({
    id: engineer.id,
    name: engineer.name,
    availability: Object.entries(engineer.availability).flatMap(
      ([day, times]) =>
        (times ?? []).map((start) => ({
          day,
          start,
          end: add30Minutes(start),
        }))
    ),
  }));
};

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [scheduledInterview, setScheduledInterview] =
    useState<ScheduledInterview | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const transformedEngineers = transformEngineers(
    rawEngineers as RawEngineer[]
  );

  const handleCandidateSelect = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setScheduledInterview(null); // reset interview
  };

  const handleSchedule = (
    engineer: Engineer,
    time: string,
    day: string
  ) => {
    const scheduledTime = `${day}-${time}`;

    setScheduledInterview({
      engineerId: engineer.id,
      time: scheduledTime,
    });

    // Show toast message
    setToastMessage(
      `✅ Interview scheduled with ${engineer.name} on ${day} at ${time}`
    );
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="main-content">
        {activeTab === "Dashboard" && (
          <Dashboard
            totalCandidates={candidates.length}
            totalEngineers={transformedEngineers.length}
            scheduledCount={scheduledInterview ? 1 : 0}
            scheduledDetails={
              scheduledInterview && selectedCandidate
                ? {
                    engineerName:
                      transformedEngineers.find(
                        (e) => e.id === scheduledInterview.engineerId
                      )?.name || "",
                    candidateName: selectedCandidate.name,
                    time: scheduledInterview.time,
                  }
                : null
            }
          />
        )}

        {activeTab === "Scheduler" && (
          <>
            <CandidateDropdown
              candidates={candidates}
              onSelect={handleCandidateSelect}
            />

            {selectedCandidate && (
              <p style={{ marginTop: "16px", color: "#00FF88" }}>
                Selected: <strong>{selectedCandidate.name}</strong> – available
                on {selectedCandidate.availability.day} from{" "}
                {selectedCandidate.availability.start} to{" "}
                {selectedCandidate.availability.end}
              </p>
            )}

            <CalendarGrid
              engineers={transformedEngineers}
              candidate={selectedCandidate}
              onSchedule={handleSchedule}
              scheduledSlot={scheduledInterview?.time || null}
            />
          </>
        )}

        {activeTab === "Candidates" && (
          <div className="list-section">
            <h2 style={{ color: "#00FF88", marginBottom: "16px" }}>All Candidates</h2>
            <div className="card-list">
              {candidates.map((c) => (
                <div
                  key={c.id}
                  className="card"
                  style={{
                    background: "#000",
                    border: "1px solid #00FF88",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    boxShadow: "0 0 10px #00FF88",
                    color: "#00FF88",
                  }}
                >
                  <strong>{c.name}</strong>
                  <p style={{ margin: 0 }}>
                    Availability: {c.availability.day},{" "}
                    {c.availability.start} - {c.availability.end}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      {activeTab === "Engineers" && (
  <div className="list-section">
    <h2 style={{ color: "#00FF88", marginBottom: "16px" }}>Engineers' Availability</h2>

    {transformedEngineers.map((engineer) => {
      // Group availability by day
      const groupedByDay: { [day: string]: { start: string; end: string }[] } = {};

      engineer.availability.forEach((slot) => {
        if (!groupedByDay[slot.day]) {
          groupedByDay[slot.day] = [];
        }
        groupedByDay[slot.day].push({ start: slot.start, end: slot.end });
      });

      return (
        <div
          key={engineer.id}
          style={{
            background: "#000",
            border: "1px solid #00FF88",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "24px",
            boxShadow: "0 0 10px #00FF88",
          }}
        >
          <h3 style={{ color: "#00FF88", marginBottom: "12px" }}>{engineer.name}</h3>

          <table style={{ width: "100%", borderCollapse: "collapse", color: "#00FF88" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #00FF88", padding: "8px" }}>Day</th>
                <th style={{ border: "1px solid #00FF88", padding: "8px" }}>Available Slots</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedByDay).map(([day, slots]) => (
                <tr key={day}>
                  <td style={{ border: "1px solid #00FF88", padding: "8px" }}>{day}</td>
                  <td style={{ border: "1px solid #00FF88", padding: "8px" }}>
                    {slots.map((slot, idx) => (
                      <span key={idx} style={{ display: "inline-block", marginRight: "12px" }}>
                        {slot.start} – {slot.end}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    })}
  </div>
)}



      </div>

      <Toast message={toastMessage} show={showToast} />
    </div>
  );
}

export default App;
