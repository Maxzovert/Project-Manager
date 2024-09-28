import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState , setProjectState] = useState({
    seletedPojectId : undefined,
    projects : []
  })
  function handleStartAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        seletedPojectId : null,
      }
    })
  }

  let content;

  if (projectState.seletedPojectId === null){
    content = <NewProject/>
  } else if (projectState.seletedPojectId === undefined){
    content = <NoProject onStartAdd={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar onStartAdd={handleStartAddProject}/>    
    {content}
    </main>
  );
}

export default App;
