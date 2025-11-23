import React from 'react'
import data from './data/dataMahasiswa.json'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

export default function App() {
  return (
    <div className="app-root">
      
      <main className="container">
        <section className="left">
          <Profile profile={data.profile} statistics={data.statistics} />
          <Skills skills={data.skills} />
        </section>

        <section className="right">
          <Experiences experiences={data.experiences} />
        </section>
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite • {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}