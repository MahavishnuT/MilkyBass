import './UpcomingShows.css';

interface Show {
  date: string;
  venue: string;
  city: string;
}

interface UpcomingShowsProps {
  shows: Show[];
}

const UpcomingShows = ({ shows }: UpcomingShowsProps) => {
  return (
    <section className="upcoming-shows">
      <h2 className="section-title">Next Shows</h2>
      <div className="shows-grid">
        {shows.map((show, index) => (
          <div key={index} className="show-card">
            <div className="show-date">{show.date}</div>
            <div className="show-venue">{show.venue}</div>
            <div className="show-city">{show.city}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingShows;
