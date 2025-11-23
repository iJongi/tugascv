import React from 'react'

function SkillItem({ s }) {
  const levelMap = {
    Beginner: 30,
    Intermediate: 60,
    Advanced: 85,
    Expert: 100
  };

  const percent = levelMap[s.level] ?? 50;

  return (
    <li className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{s.name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>

      {/* Level text tetap muncul */}
      <div className="skill-level">
        {s.level} • {s.years_of_experience ?? '-'}
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </li>
  );
}



export default function Skills({ skills }) {
  return (
    <div className="card skills-card">
      <h3>Skills</h3>
      <ul>
        {skills.map(s => (
          <SkillItem key={s.id} s={s} />
        ))}
      </ul>
    </div>
  )
}
