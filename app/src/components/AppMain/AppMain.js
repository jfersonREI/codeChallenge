import AppPanel from "../AppPanel/AppPanel";
import "./AppMain.scss";

function AppMain(props) {
  return (
    <div className="app-main">
      <div className="grid-container">
        <AppPanel>{props.children}</AppPanel>
      </div>
    </div>
  );
}

export default AppMain;
