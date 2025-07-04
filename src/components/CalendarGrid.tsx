// import React from 'react';

// type AvailabilitySlot = {
//   day: string;
//   start: string;
//   end: string;
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: AvailabilitySlot[];
// };

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
//   engineers: Engineer[];
//   candidate: Candidate | null;
//   onSchedule: (engineer: Engineer, time: string, day: string) => void;
// };

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const timeSlots = Array.from({ length: 18 }, (_, i) => {
//   const hour = 9 + Math.floor(i / 2);
//   const minute = i % 2 === 0 ? '00' : '30';
//   return `${hour.toString().padStart(2, '0')}:${minute}`;
// });

// const isTimeInRange = (start: string, end: string, time: string): boolean => {
//   return start <= time && time < end;
// };

// const CalendarGrid: React.FC<Props> = ({ engineers, candidate, onSchedule }) => {
//   if (!candidate) return null;

//   const getEngineerForSlot = (day: string, time: string): Engineer | null => {
//     for (const engineer of engineers) {
//       if (
//         engineer.availability.some(
//           (slot) => slot.day === day && isTimeInRange(slot.start, slot.end, time)
//         )
//       ) {
//         return engineer;
//       }
//     }
//     return null;
//   };

//   return (
//     <div style={{ marginTop: '24px' }}>
//       <h2>Weekly Interview Calendar</h2>
//       <div style={{ display: 'grid', gridTemplateColumns: `100px repeat(${days.length}, 1fr)`, gap: '4px', marginTop: '16px' }}>
//         {/* Header Row */}
//         <div></div>
//         {days.map((day) => (
//           <div key={day} style={{ fontWeight: 'bold', textAlign: 'center' }}>{day}</div>
//         ))}

//         {/* Time Slots */}
//         {timeSlots.map((time) => (
//           <React.Fragment key={time}>
//             {/* Time column */}
//             <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{time}</div>
//             {days.map((day) => {
//               const isCandidateAvailable =
//                 candidate.availability.day === day &&
//                 isTimeInRange(candidate.availability.start, candidate.availability.end, time);

//               const engineer = getEngineerForSlot(day, time);

//               const isAvailable = isCandidateAvailable && engineer;

//               return (
//                 <div
//                   key={`${day}-${time}`}
//                   onClick={() =>
//                     isAvailable && onSchedule(engineer!, time, day)
//                   }
//                   style={{
//                     height: '40px',
//                     backgroundColor: isAvailable ? '#a5d6a7' : '#e0e0e0',
//                     cursor: isAvailable ? 'pointer' : 'not-allowed',
//                     border: '1px solid #ccc',
//                     textAlign: 'center',
//                     lineHeight: '40px',
//                     borderRadius: '4px',
//                   }}
//                 >
//                   {isAvailable ? 'Available' : ''}
//                 </div>
//               );
//             })}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarGrid;
// import React from 'react';

// type Availability = {
//   day: string;
//   start: string;
//   end: string;
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type Candidate = {
//   id: string;
//   name: string;
//   availability: Availability;
// };
// type Props = {
//   engineers: Engineer[];
//   candidate: Candidate | null;
//   onSchedule: (engineer: Engineer, time: string, day: string) => void;
//   scheduledSlot: string | null;
// };


// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const timeSlots = Array.from({ length: 18 }, (_, i) => {
//   const hour = 9 + Math.floor(i / 2);
//   const minutes = i % 2 === 0 ? '00' : '30';
//   return `${hour.toString().padStart(2, '0')}:${minutes}`;
// });

// const CalendarGrid: React.FC<Props> = ({ engineers, candidate, onSchedule, scheduledSlot }) => {
//   const isCandidateAvailable = (day: string, time: string) => {
//     if (!candidate) return false;
//     const { availability } = candidate;
//     if (availability.day !== day) return false;
//     return time >= availability.start && time < availability.end;
//   };

//   const isEngineerAvailable = (day: string, time: string) => {
//     return engineers.filter((eng) =>
//       eng.availability.some((a) => a.day === day && a.start === time)
//     );
//   };

//   return (
//     <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
//       <thead>
//         <tr>
//           <th>Time</th>
//           {days.map((day) => (
//             <th key={day}>{day}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {timeSlots.map((time) => (
//           <tr key={time}>
//             <td>{time}</td>
//             {days.map((day) => {
//               const overlappingEngineers = isEngineerAvailable(day, time);
//               const isAvailable = isCandidateAvailable(day, time) && overlappingEngineers.length > 0;
//               const isScheduled = scheduledSlot === time;

//               return (
//                 <td
//                   key={day + time}
//                   // Only include the style-related changes
// style={{
//   border: '1px solid #00FF88',
//   padding: '8px',
//   backgroundColor: isScheduled
//     ? '#00FF88'
//     : isAvailable
//     ? '#003322'
//     : '#000000',
//   color: isScheduled ? '#000000' : '#00FF88',
//   cursor: isAvailable ? 'pointer' : 'default',
//   textAlign: 'center',
// }}

//                   // style={{
//                   //   border: '1px solid #ccc',
//                   //   backgroundColor: isScheduled
//                   //     ? '#ffedcc'
//                   //     : isAvailable
//                   //     ? '#d4fcd4'
//                   //     : '#f0f0f0',
//                   //   textAlign: 'center',
//                   //   cursor: isAvailable ? 'pointer' : 'default',
//                   // }}
//                   onClick={() => {
//                     if (isAvailable) {
//                       onSchedule(overlappingEngineers[0], time,day);
//                     }
//                   }}
//                 >
//                   {isAvailable ? '✓ Available' : ''}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CalendarGrid;

// import React from 'react';

// type Availability = {
//   day: string;
//   start: string;
//   end: string;
// };

// type Engineer = {
//   id: string;
//   name: string;
//   availability: Availability[];
// };

// type Candidate = {
//   id: string;
//   name: string;
//   availability: Availability;
// };

// type Props = {
//   engineers: Engineer[];
//   candidate: Candidate | null;
//   onSchedule: (engineer: Engineer, time: string, day: string) => void;
//   scheduledSlot: string | null;
// };

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const timeSlots = [
//   '09:00',
//   '09:30',
//   '10:00',
//   '10:30',
//   '11:00',
//   '11:30',
//   '12:00',
//   '12:30',
//   '13:00',
//   '13:30',
//   '14:00',
//   '14:30',
//   '15:00',
//   '15:30',
//   '16:00',
//   '16:30',
//   '17:00',
// ];

// const CalendarGrid: React.FC<Props> = ({
//   engineers,
//   candidate,
//   onSchedule,
//   scheduledSlot,
// }) => {
//   return (
//     <div style={{ marginTop: '32px' }}>
//       <h2 style={{ color: '#00FF88', marginBottom: '12px' }}>Calendar Grid</h2>
//       <table
//         style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           tableLayout: 'fixed',
//           color: '#00FF88',
//           backgroundColor: '#000',
//           boxShadow: '0 0 10px #00FF88',
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #00FF88', padding: '8px', background: '#00110f' }}>
//               Time
//             </th>
//             {days.map((day) => (
//               <th
//                 key={day}
//                 style={{ border: '1px solid #00FF88', padding: '8px', background: '#00110f' }}
//               >
//                 {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {timeSlots.map((time) => (
//             <tr key={time}>
//               <td
//                 style={{
//                   border: '1px solid #00FF88',
//                   padding: '8px',
//                   textAlign: 'center',
//                   fontWeight: 'bold',
//                   backgroundColor: '#00110f',
//                 }}
//               >
//                 {time}
//               </td>
//               {days.map((day) => {
//                 const isCandidateAvailable =
//                   candidate &&
//                   candidate.availability.day === day &&
//                   candidate.availability.start <= time &&
//                   candidate.availability.end > time;

//                 const overlappingEngineers = engineers.filter((engineer) =>
//                   engineer.availability.some(
//                     (slot) =>
//                       slot.day === day &&
//                       slot.start <= time &&
//                       slot.end > time
//                   )
//                 );

//                 const isAvailable = isCandidateAvailable && overlappingEngineers.length > 0;
//                 const isScheduled =
//                   scheduledSlot === `${day}-${time}` && isAvailable;

//                 return (
//                   <td
//                     key={day}
//                     style={{
//                       border: '1px solid #00FF88',
//                       padding: '4px',
//                       textAlign: 'center',
//                       width: '100px',
//                       height: '40px',
//                       cursor: isAvailable ? 'pointer' : 'default',
//                       backgroundColor: isScheduled
//                         ? '#00FF88'
//                         : isAvailable
//                         ? '#003322'
//                         : 'transparent',
//                       color: isScheduled ? '#000' : '#00FF88',
//                       transition: 'background-color 0.3s ease',
//                       fontWeight: isScheduled ? 'bold' : 'normal',
//                     }}
//                     onClick={() => {
//                       if (isAvailable) {
//                         onSchedule(overlappingEngineers[0], time, day);
//                       }
//                     }}
//                   >
//                     {isScheduled
//                       ? 'Scheduled'
//                       : isAvailable
//                       ? 'Available'
//                       : ''}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CalendarGrid;



import React from 'react';

type Availability = {
  day: string;
  start: string;
  end: string;
};

type Engineer = {
  id: string;
  name: string;
  availability: Availability[];
};

type Candidate = {
  id: string;
  name: string;
  availability: Availability;
};

type Props = {
  engineers: Engineer[];
  candidate: Candidate | null;
  onSchedule: (engineer: Engineer, time: string, day: string) => void;
  scheduledSlot: string | null;
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

const CalendarGrid: React.FC<Props> = ({
  engineers,
  candidate,
  onSchedule,
  scheduledSlot,
}) => {
  return (
    <div style={{ marginTop: '32px' }}>
      <h2 style={{ color: '#00FF88', marginBottom: '12px' }}>Calendar Grid</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          color: '#00FF88',
          backgroundColor: '#000',
          boxShadow: '0 0 10px #00FF88',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #00FF88', padding: '8px', background: '#00110f' }}>
              Time
            </th>
            {days.map((day) => (
              <th
                key={day}
                style={{ border: '1px solid #00FF88', padding: '8px', background: '#00110f' }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td
                style={{
                  border: '1px solid #00FF88',
                  padding: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  backgroundColor: '#00110f',
                }}
              >
                {time}
              </td>
              {days.map((day) => {
                const isCandidateAvailable =
                  candidate &&
                  candidate.availability.day.trim() === day &&
                  candidate.availability.start <= time &&
                  candidate.availability.end > time;

                const overlappingEngineers = engineers.filter((engineer) =>
                  engineer.availability.some(
                    (slot) =>
                      slot.day === day &&
                      slot.start <= time &&
                      slot.end > time
                  )
                );

                const isAvailable = isCandidateAvailable && overlappingEngineers.length > 0;

                const isScheduled =
                  scheduledSlot === `${day} ${time}` && isAvailable;

                return (
                  <td
                    key={day}
                    style={{
                      border: '1px solid #00FF88',
                      padding: '4px',
                      textAlign: 'center',
                      width: '100px',
                      height: '40px',
                      cursor: isAvailable ? 'pointer' : 'default',
                      backgroundColor: isScheduled
                        ? '#00FF88'
                        : isAvailable
                        ? '#003322'
                        : 'transparent',
                      color: isScheduled ? '#000' : '#00FF88',
                      transition: 'background-color 0.3s ease',
                      fontWeight: isScheduled ? 'bold' : 'normal',
                    }}
                    onClick={() => {
                      if (isAvailable) {
                        onSchedule(overlappingEngineers[0], time, day);
                      }
                    }}
                  >
                    {isScheduled
                      ? 'Scheduled'
                      : isAvailable
                      ? 'Available'
                      : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarGrid;
