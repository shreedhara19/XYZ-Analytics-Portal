import React, { useEffect, useRef } from "react";

export default function TableauEmbed({ id, params = {}, scriptUrl = "https://public.tableau.com/javascripts/api/viz_v1.js" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const obj = document.createElement("object");
    obj.className = "tableauViz";
    obj.style.display = "none";

    Object.entries(params).forEach(([name, value]) => {
      const p = document.createElement("param");
      p.name = name;
      p.value = value;
      obj.appendChild(p);
    });

    container.appendChild(obj);

    try {
      const vizElement = obj;
      const setSize = () => {
        const width = container.clientWidth || container.offsetWidth;
        vizElement.style.minWidth = "0";
        vizElement.style.maxWidth = "100%";
        vizElement.style.width = "100%";
        vizElement.style.height = Math.max(600, Math.round(width * 0.75)) + "px";
      };

      setSize();
      window.addEventListener("resize", setSize);

      const script = document.createElement("script");
      script.src = scriptUrl;
      vizElement.parentNode.insertBefore(script, vizElement);

      return () => {
        window.removeEventListener("resize", setSize);
        if (script?.parentNode) script.parentNode.removeChild(script);
        if (obj?.parentNode) obj.parentNode.removeChild(obj);
      };
    } catch (err) {
      if (obj?.parentNode) obj.parentNode.removeChild(obj);
    }
  }, [id, JSON.stringify(params), scriptUrl]);

  return <div id={id} className="tableauPlaceholder" ref={containerRef} />;
}
