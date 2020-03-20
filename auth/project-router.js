const express = require('express');
const router = express.Router()


const Projects = require('./project-model');

router.get('/resources', ( req, res)=>{
    Projects.findResources()
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(error=>{
        res.status(500).json({
        error: `This is an error ${error}`})
    })
    })

    router.get('/', ( req, res)=>{
        Projects.findProjects()
        .then(project=>{
            res.status(200).json(project)
        })
        .catch(error=>{
            res.status(500).json({
            error: `This is an error ${error}`})
        })
        })

        router.get('/:id/tasks', ( req, res)=>{
            const {id}=req.params
            Projects.findTasks(id)
            .then(task=>{
                res.status(200).json(task)
            })
            .catch(error=>{
                res.status(500).json({
                error: `This is an error ${error}`})
            })
            })
            router.post('/', (req, res)=>{
                Projects.addProjects(req.body)
                .then(project=>{
                    res.status(201).json(project)
                })
                .catch(error=>{
                    res.status(500).json({
                        error:`This is and error${error}`
                    })
                })


            })
            router.post('/resources', (req, res)=>{
                Projects.addResources(req.body)
                .then(resource=>{
                    res.status(201).json(resource)
                })
                .catch(error=>{
                    res.status(500).json({
                        error:`This is and error${error}`
                    })
                })


            })

            router.post('/:id/tasks', (req, res) => {
                const{id}=req.params
                Projects.findById(id)
                .then(task => {
                    if (task) {
                        Projects.addTasks(req.body, id)
                        .then(tasks => {
                        res.status(201).json(tasks);
                    })
                    }
                })
                    .catch(error => {
                        res.status(500).json({ message: 'Failed to create new task'});
                    })
            })






module.exports = router;