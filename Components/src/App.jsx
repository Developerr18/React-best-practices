import "./App.css";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button
          primary
          onClick={() => console.log("Primary button clicked")}
          onMouseMove={() => console.log("Primary button hover")}
        >
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
          onMouseEnter={() => console.log("Secondary button mouse enter")}
        >
          Secondary
        </Button>
      </div>
      <div>
        <Button
          success
          outline
          onClick={() => console.log("Success button clicked")}
        >
          <GoCloudDownload /> Success
        </Button>
      </div>
      <div>
        <Button danger className="ml-7">
          <GoDatabase /> Danger
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Warning
        </Button>
      </div>
    </div>
  );
}

export default App;
