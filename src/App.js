import AuthPreset from "./presets/AuthPreset";
import ThemePreset from "./presets/ThemePreset";
import MotionLazyContainer from "./helpers/animate/MotionLazyContainer";
import ScrollToTop from "./components/common/ScrollToTop";
import Setting from "./layouts/Setting";
import RoutePreset from "./presets/RoutePreset";

function App() {
  return (
    <AuthPreset>
      <ThemePreset>
        <MotionLazyContainer>
          <Setting/>
          <ScrollToTop/>
          <RoutePreset/>
        </MotionLazyContainer>
      </ThemePreset>
    </AuthPreset>
  );
}

export default App;
