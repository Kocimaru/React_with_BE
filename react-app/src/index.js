import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
//component file
//import TodoContainer from "./classBase/components/ToDoContainer"
import TodoContainer from "./functionBase/components/ToDoContainer"

//stylesheet
//import "./classBase/App.css"
import "./functionBase/App.css"




//ReactDOM.render(<TodoContainer />, document.getElementById("root"));
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <TodoContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
