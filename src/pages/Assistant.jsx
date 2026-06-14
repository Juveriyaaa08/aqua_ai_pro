import { useState } from "react";
import Navbar from "../components/Navbar";

function Assistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    const q = question.toLowerCase();

    if (q.includes("save water")) {
      setAnswer("Fix leaks, turn off taps when not needed, take shorter showers, and use water-efficient appliances.");
    }

    else if (q.includes("rainwater harvesting")) {
      setAnswer("Rainwater harvesting is the process of collecting and storing rainwater for future use.");
    }

    else if (q.includes("water pollution")) {
      setAnswer("Water pollution occurs when harmful substances contaminate rivers, lakes, oceans, or groundwater.");
    }

    else if (q.includes("sdg 6")) {
      setAnswer("SDG 6 aims to ensure clean water and sanitation for everyone.");
    }

    else if (q.includes("water scarcity")) {
      setAnswer("Water scarcity happens when the demand for water exceeds the available supply.");
    }

    else if (q.includes("groundwater")) {
      setAnswer("Groundwater is water stored underground in soil and rock layers called aquifers.");
    }

    else if (q.includes("desalination")) {
      setAnswer("Desalination removes salt and minerals from seawater to make it suitable for human use.");
    }

    else if (q.includes("water cycle")) {
      setAnswer("The water cycle includes evaporation, condensation, precipitation, and collection.");
    }

    else if (q.includes("water conservation")) {
      setAnswer("Water conservation means using water efficiently and reducing unnecessary wastage.");
    }

    else if (q.includes("drinking water")) {
      setAnswer("Safe drinking water should be free from harmful bacteria, chemicals, and pollutants.");
    }

    else if (q.includes("climate change")) {
      setAnswer("Climate change affects rainfall patterns, droughts, floods, and water availability.");
    }

    else if (q.includes("water treatment")) {
      setAnswer("Water treatment removes contaminants to make water safe for drinking and other uses.");
    }

    else if (q.includes("river pollution")) {
      setAnswer("River pollution is caused by industrial waste, sewage discharge, plastic waste, and agricultural runoff.");
    }

    else if (q.includes("water management")) {
      setAnswer("Water management involves planning, distributing, and conserving water resources efficiently.");
    }

    else if (q.includes("leakage")) {
      setAnswer("Water leakage can waste large amounts of water and should be repaired immediately.");
    }

    else if (q.includes("ocean pollution")) {
      setAnswer("Ocean pollution is mainly caused by plastic waste, oil spills, and industrial discharge.");
    }

    else if (q.includes("drought")) {
      setAnswer("A drought is a prolonged period of unusually low rainfall leading to water shortages.");
    }

    else if (q.includes("flood")) {
      setAnswer("Floods occur when excess water overflows onto normally dry land.");
    }

    else if (q.includes("water quality")) {
      setAnswer("Water quality refers to the physical, chemical, and biological characteristics of water.");
    }

    else if (q.includes("water reuse")) {
      setAnswer("Water reuse involves treating and using wastewater again for beneficial purposes.");
    }

    else {
      setAnswer(
        "I am Aqua AI. Please ask questions about water conservation, SDG 6, rainwater harvesting, groundwater, water pollution, droughts, floods, water quality, or sustainable water management."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="assistant">
        <h1>💧 Aqua AI Water Expert</h1>

        <input
          type="text"
          placeholder="Ask anything about water..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askAI}>
          Ask Aqua AI
        </button>

        <div className="answer-box">
          <h3>Answer</h3>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
}

export default Assistant;