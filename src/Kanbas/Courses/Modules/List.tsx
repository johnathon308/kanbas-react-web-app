import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <div className="button-container">
        <button 
          className="button add-module"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button 
          className="button update-module"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </div>
      <div className="module-textarea-container">
        <input 
          className="module-input"
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
        <textarea 
          className="description-textarea"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
      </div>
      </li>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button type="button" className="edit"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button type="button" className="delete"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;









  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [module, setModule] = useState({
  //   _id: "0", name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };