import newMoon from "../assets/images/moon_phases/moon.svg";
import waxingCrescent from "../assets/images/moon_phases/crescent.svg";
import firstQuarter from "../assets/images/moon_phases/half-moon.svg";
import waxingGibbous from "../assets/images/moon_phases/gibbous-moon.svg";
import fullMoon from "../assets/images/moon_phases/full-moon.svg";
import waningGibbous from "../assets/images/moon_phases/gibbous-moon1.svg";
import lastQuarter from "../assets/images/moon_phases/half-moon1.svg";
import waningCrescent from "../assets/images/moon_phases/crescent1.svg";

export default phase => {
  // New Moon
  if (phase === 0) return { imagePath: newMoon, description: "New moon" };
  // Waxing Crescent
  else if (phase > 0 && phase < 0.25)
    return { imagePath: waxingCrescent, description: "Waxing crescent moon" };
  // First Quarter
  else if (phase === 0.25)
    return { imagePath: firstQuarter, description: "First quarter moon" };
  // Waxing Gibbous
  else if (phase > 0.25 && phase < 0.5)
    return { imagePath: waxingGibbous, description: "Waxing gibbous moon" };
  // Full Moon
  else if (phase === 0.5)
    return { imagePath: fullMoon, description: "Full moon" };
  // Waning Gibbous
  else if (phase > 0.5 && phase < 0.75)
    return { imagePath: waningGibbous, description: "Waning gibbous moon" };
  // Last Quarter
  else if (phase === 0.75)
    return { imagePath: lastQuarter, description: "Last quarter moon" };
  // Waning Crescent
  else
    return { imagePath: waningCrescent, description: "Waning crescent moon" };
};
