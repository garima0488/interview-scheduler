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
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00',
];

const CalendarGrid: React.FC<Props> = ({
  engineers,
  candidate,
  onSchedule,
  scheduledSlot,
}) => {
  return (
    <div style={{ marginTop: '32px' }}>
      <h2 style={{ color: '#1f2937', marginBottom: '12px' }}>Calendar Grid</h2>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            minWidth: '800px',
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            color: '#1f2937',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #d1d5db', padding: '10px', background: '#f3f4f6' }}>
                Time
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  style={{
                    border: '1px solid #d1d5db',
                    padding: '10px',
                    background: '#f3f4f6',
                  }}
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
                    border: '1px solid #d1d5db',
                    padding: '8px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: '#f9fafb',
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
                  const isScheduled = scheduledSlot === `${day} ${time}` && isAvailable;

                  return (
                    <td
                      key={day}
                      style={{
                        border: '1px solid #e5e7eb',
                        padding: '4px',
                        textAlign: 'center',
                        width: '100px',
                        height: '40px',
                        cursor: isAvailable ? 'pointer' : 'default',
                        backgroundColor: isScheduled
                          ? '#34d399' // scheduled green
                          : isAvailable
                          ? '#e0f2fe' // available blue
                          : 'transparent',
                        color: isScheduled || isAvailable ? '#111827' : '#9ca3af',
                        transition: 'background-color 0.3s ease',
                        fontWeight: isScheduled ? 'bold' : 'normal',
                      }}
                      onClick={() => {
                        if (isAvailable) {
                          onSchedule(overlappingEngineers[0], time, day);
                        }
                      }}
                    >
                      {isScheduled ? 'Scheduled' : isAvailable ? 'Available' : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarGrid;
