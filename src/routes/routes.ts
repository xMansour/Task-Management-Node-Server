import express from 'express';
//import getTasks from './api/getTasks';
import createTask from './api/createTask';
import editTask from './api/editTask';
import deleteTask from './api/deleteTask';

type task ={
    id:Number,
    title:string,
    description:string,
}
let tasks:task[];
const routes = express.Router();


const getTasks = (req:express.Request, res:express.Response)=>{
    tasks.push({
        id:5,
        title:"new Task",
        description:"bla bla bla",
    })
    res.send(tasks);
}
routes.get('/api/tasks', getTasks);
routes.post('/api/tasks', createTask);
routes.put('/api/tasks', editTask);
routes.delete('/api/tasks', deleteTask);

export default routes;