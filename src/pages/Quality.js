import TableauEmbed from "../components/TableauEmbed";

function Quality() {
  const params = {
    host_url: "https%3A%2F%2Fpublic.tableau.com%2F",
    embed_code_version: "3",
    site_root: "",
    name: "XYZretailqualityperformancedashboard/XYZQualityDashboard",
    tabs: "no",
    toolbar: "yes",
    static_image: "https://public.tableau.com/static/images/XY/XYZretailqualityperformancedashboard/XYZQualityDashboard/1.png",
    animate_transition: "yes",
    display_static_image: "yes",
    display_spinner: "yes",
    display_overlay: "yes",
    display_count: "yes",
    language: "en-US",
    filter: "publish=yes",
  };

  return (
    <div>
      <h1>Quality Dashboard</h1>

      <TableauEmbed id="viz-quality-1" params={params} />
    </div>
  );
}

export default Quality;
