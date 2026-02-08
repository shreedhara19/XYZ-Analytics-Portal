function About() {
  return (
    <div className="main-container">
      <h1>About This Project</h1>

      <p>
        XYZ Analytics Portal is a case study project designed to visualize
        retail sales and quality performance data using Tableau and React.
      </p>

      <div className="about-section about-data-sources">
        <h2>Data Sources</h2>
        <p>Internal retail transaction and quality assessment data</p>
      </div>

      <div className="about-section about-technologies">
        <h2>Technologies</h2>
        <p>Tableau Public for dashboards, React for the web application</p>
      </div>

      <div className="about-section about-assumptions">
        <h2>Key Assumptions</h2>
        <ul>
          <li>Data reflects current retail operations</li>
          <li>Quality metrics use standardized assessment criteria</li>
          <li>Sales figures represent total outlet revenue</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
