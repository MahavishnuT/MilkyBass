import './App.css';

function App() {
  const upcomingShows = [
    { date: '15 Jan 2026', venue: 'Club Oxygen', city: 'Paris' },
    { date: '28 Jan 2026', venue: 'Jungle Club', city: 'Bruxelles' },
    { date: '12 Fév 2026', venue: 'Neon Nights', city: 'Marseille' },
  ];

  return (
    <div className="app">
      
      <header className="header">
        <div className="logo-container">
          <h1 className="dj-name">MILKY BASS</h1>
          <p className="tagline">Electronic Music Producer & DJ</p>
        </div>
      </header>

      <section className="upcoming-shows">
        <h2 className="section-title">Next Shows</h2>
        <div className="shows-grid">
          {upcomingShows.map((show, index) => (
            <div key={index} className="show-card">
              <div className="show-date">{show.date}</div>
              <div className="show-venue">{show.venue}</div>
              <div className="show-city">{show.city}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="spotify-section">
        <h2 className="section-title">My Latest Tracks</h2>
        <div className="spotify-container">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/artist/3FcGHbmZJCKjUkmuy7MmPO?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Milky Bass. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
