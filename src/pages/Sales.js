import TableauEmbed from "../components/TableauEmbed";

function Sales() {
  const params = {
    host_url: "https%3A%2F%2Fpublic.tableau.com%2F",
    embed_code_version: "3",
    site_root: "",
    name: "XYZretailsalesperformancedashboard/SalesDashboard",
    tabs: "no",
    toolbar: "yes",
    static_image: "https://public.tableau.com/static/images/XY/XYZretailsalesperformancedashboard/SalesDashboard/1.png",
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
      <h1>Sales Dashboard</h1>

      <TableauEmbed id="viz1770535835982" params={params} />
    </div>
  );
}

export default Sales;
