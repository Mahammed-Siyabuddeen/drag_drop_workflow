import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <div className="flex ">
        <div className="basis-1/5">
          <PipelineToolbar />
        </div>
        <div className="basis-4/5">
          <PipelineUI />
        </div>
      </div>
    </>

  );
}

export default App;
