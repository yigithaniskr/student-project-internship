import React from 'react'
import StudentList from '../pages/StudentList'
import { Route } from 'react-router-dom'
import StudentAdd from '../pages/StudentAdd'
import StudentFind from '../pages/StudentFind'
import StudentUpdate from '../pages/StudentUpdate'
import { ToastContainer } from 'react-toastify'
export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Route exact path="/" component={StudentList} />
            <Route exact path="/add" component={StudentAdd} />
            <Route exact path="/find" component={StudentFind} />
            <Route exact path="/update" component={StudentUpdate} />
        </div>
    )
}
