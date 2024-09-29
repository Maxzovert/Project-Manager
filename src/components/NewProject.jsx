import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({onAdd , onCancel}) => {

  const modal = useRef();

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave(){
    const enterTitle = title.current.value;
    const enterDescriptiion = description.current.value;
    const enterDate = dueDate.current.value;

    if(enterTitle.trim() === '' || 
    enterDescriptiion.trim() === '' || 
    enterDate.trim() === ''
    ){
      modal.current.open()
      return;
    }

    onAdd({
      title : enterTitle,
      description : enterDescriptiion,
      dueDate : enterDate
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Sure!!">
      <h2 className="text-xl font-bold text-stone-700 my-4 text-center">Invalid Input</h2>
      <p className="text-stone-600 mb-2 text-center">Oops... You forgot to enter a Value.</p>
      <p className="text-stone-600 mb-2 text-center">Please provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:txt-stone-950" onClick={onCancel}>Cancel</button>
          </li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 " onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title"/>
        <Input ref={description} label="Description" textarea/>
        <Input type="date" ref={dueDate} label="Due Date"/>
      </div>
    </div>
    </>
  )
}

export default NewProject
