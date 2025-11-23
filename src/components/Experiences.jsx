import React from 'react'

function ExperienceItem({ exp }) {
  const format = (value) => {
    // Jika kosong / null → tampil "-"
    if (!value) return "-";

    // Jika hanya tahun (misal "2023")
    if (value.length <= 4) return value;

    // Format tanggal → ambil tahun saja
    return new Date(value).getFullYear();
  };

  const start = format(exp.start_date);
  const end = exp.is_current ? "Present" : format(exp.end_date);

  return (
    <div className="timeline-item">
      <h4>{exp.title}</h4>

      <div className="year">
        {start}
        {end !== "-" ? ` — ${end}` : ""}
      </div>

      <p>{exp.description}</p>

      {exp.technologies && (
        <p className="muted">Tech: {exp.technologies.join(", ")}</p>
      )}
    </div>
  );
}

export default function Experiences({ experiences }) {
  return (
    <div className="experience-wrapper">
      <h3>Experience</h3>

      <div className="timeline">
        {experiences.map((e) => (
          <ExperienceItem key={e.id} exp={e} />
        ))}
      </div>
    </div>
  );
}

