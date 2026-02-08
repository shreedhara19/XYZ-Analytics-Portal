import logo from "../logo.png";

function Home() {
  return (
    <div className="main-container">
      <div className="home-logo-section">
        <img src={logo} alt="XYZ Logo" className="home-logo" />
        <h1>XYZ Analytics Portal</h1>
      </div>

      <p className="home-intro">
        Monitor sales and quality performance across all XYZ retail outlets
        with real-time dashboards and actionable insights.
      </p>

      <h2 className="home-section-title">Get Started</h2>
      <ul className="home-list">
        <li>View <strong>Sales Dashboard</strong> for performance metrics</li>
        <li>Check <strong>Quality Dashboard</strong> for quality standards</li>
        <li>Learn more in <strong>About</strong> section</li>
      </ul>
    </div>
  );
}

export default Home;
