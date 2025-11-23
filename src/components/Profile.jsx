import React from "react";

export default function Profile({ profile, statistics }) {
  return (
    <div className="profile-card-premium">
      <div className="profile-left">
        <img src={profile.photo_url} className="profile-photo" />
      </div>

      <div className="profile-right">
        <h2 className="profile-name">{profile.full_name}</h2>

        <p className="profile-sub">
          {profile.headline}
        </p>

        <p className="profile-bio">
          {profile.short_bio}
        </p>

        <div className="profile-badges">
          <span className="badge premium">{profile.nim}</span>
          <span className="badge premium">{profile.prodi}</span>
          <span className="badge premium">{profile.angkatan}</span>
        </div>

        <div className="profile-meta-row">
          <span className="profile-location">{profile.location}</span>
          <span className="profile-views">{statistics.views_count} views</span>
        </div>

        <a
          href={profile.portfolio_url}
          className="portfolio-btn"
          target="_blank"
        >
          Visit Portfolio
        </a>
      </div>
    </div>
  );
}
