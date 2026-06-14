import Navbar from "../components/Navbar";

function KnowledgeHub() {

  const sections = [

   

    {
      title: "💧 Global Water Crisis",
      content:
        "Water scarcity is increasing due to population growth, climate change, and pollution. By 2030, global demand for water is expected to exceed supply by 40%. Many regions including parts of India face severe groundwater depletion.",
      link: "https://www.unwater.org/water-facts/scarcity"
    },

    {
      title: "🌧️ Rainwater Harvesting",
      content:
        "Rainwater harvesting is a method of collecting and storing rainwater from rooftops and surfaces. It helps recharge groundwater, reduces flooding, and provides an alternative water source during shortages.",
      link: "https://www.worldbank.org/en/topic/waterresourcesmanagement"
    },

    {
      title: "🏭 Water Pollution Causes",
      content:
        "Major causes include industrial waste discharge, untreated sewage, plastic pollution, oil spills, and agricultural chemicals. Polluted water affects human health, marine life, and ecosystems.",
      link: "https://www.who.int/news-room/fact-sheets/detail/drinking-water"
    },

    {
      title: "🏠 Water Conservation Methods",
      content:
        "Simple methods include fixing leaks, using low-flow taps, recycling greywater, using buckets instead of showers, and adopting drip irrigation in agriculture. Small changes can save thousands of liters per year.",
      link: "https://www.epa.gov/watersense"
    },

    {
      title: "🌱 Groundwater Importance",
      content:
        "Groundwater supplies nearly 30% of global freshwater. Over-extraction leads to land sinking and water shortages. Proper recharge systems are essential for sustainability.",
      link: "https://www.usgs.gov/special-topics/water-science-school"
    },

    {
      title: "🌡️ Climate Change & Water",
      content:
        "Climate change affects rainfall patterns, increases droughts and floods, and reduces freshwater availability. Managing water resources is critical for climate resilience.",
      link: "https://www.ipcc.ch/"
    },

    {
      title: "♻️ Water Reuse & Recycling",
      content:
        "Wastewater can be treated and reused for agriculture, industry, and even drinking in advanced systems. This reduces pressure on freshwater resources.",
      link: "https://www.unwater.org/water-facts/wastewater"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="knowledge">

        <h1>📚 Aqua AI Knowledge Hub</h1>
        <p className="subtext">
          Learn about water, sustainability, and SDG 6
        </p>

        <div className="knowledge-grid">

          {sections.map((item, index) => (
            <div key={index} className="knowledge-card">

              <h2>{item.title}</h2>

              <p>{item.content}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="read-more"
              >
                🔗 Read More
              </a>

            </div>
          ))}

        </div>

        {/* EXTRA INFO SECTION */}
        <div className="extra-info">

          <h2>💡 Did You Know?</h2>

          <ul>
            <li>🚰 A leaking tap can waste 3000+ liters/year</li>
            <li>🌍 Only 3% of Earth's water is fresh</li>
            <li>👨‍👩‍👧‍👦 Average person uses 100–150 liters/day</li>
            <li>🏭 Agriculture uses ~70% of global freshwater</li>
            <li>💧 India is one of the most groundwater-stressed countries</li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default KnowledgeHub;