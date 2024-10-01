import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import Tasks from "./components/Tasks";

function App() {
  const [projectState , setProjectState] = useState({
    seletedPojectId : undefined,
    projects : [],
    tasks : []
  })

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text : text,
        projectId : prevState.seletedPojectId,
        id : taskId,
      }
      return {
        ...prevState,
        tasks : [newTask , ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter(
          (task) => task.id !== id
        )
      }
    })
  }
  
  function handleSelectProject (id){
    setProjectState(prevState => {
      return {
        ...prevState,
        seletedPojectId : id,
      }
    })
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return {
        ...prevState,
        seletedPojectId : null,
      }
    })
  }

  function handleCancel(){
    setProjectState(prevState => {
      return {
        ...prevState,
        seletedPojectId : undefined,
      }
    })
  }

  function handleAddProjects(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id : projectId
      }
      return {
        ...prevState,
        seletedPojectId : undefined,
        projects : [...prevState.projects, newProject ]
      }
    })
  }

  function handleDelete (){
    setProjectState(prevState => {
      return {
        ...prevState,
        seletedPojectId : undefined,
        projects : prevState.projects.filter(
          (project) => project.id !== prevState.seletedPojectId
        )
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.seletedPojectId)

  let content = (
  <SelectedProject 
  project={selectedProject} 
  onDel={handleDelete} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  />);

  if (projectState.seletedPojectId === null){
    content = <NewProject onAdd={handleAddProjects} onCancel={handleCancel}/>
  } else if (projectState.seletedPojectId === undefined){
    content = <NoProject onStartAdd={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar 
    onStartAdd={handleStartAddProject} 
    projects={projectState.projects} 
    onSelectProject={handleSelectProject}
    seletedPojectId={projectState.seletedPojectId}
    />    
    {content}
    </main>
  );
}

export default App;
