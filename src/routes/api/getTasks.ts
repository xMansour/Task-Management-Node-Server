import express from 'express';


type task ={
    id:Number;
    title:string;
    description:string;
}

const route = express.Router();
//const tasks:task = [];

route.get('/', );

export default route;
