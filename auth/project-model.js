const projectsdb = require('../database/dbConfig');

module.exports = {
    addProjects,
    addResources, 
    addTasks,
    findProjects,
    findResources,
    findTasks,
    findById
}

function addResources(resource) {
    return projectsdb('resources')
    .insert(resource)
}

function findResources() {
    return projectsdb('resources')
}

function addProjects(project) {
    return projectsdb('projects')
    .insert(project)
}

function findProjects() {
    return projectsdb('projects')
}
function addTasks(task) {
    return projectsdb('tasks')
    .insert(task)
}

function findTasks(id) {
    return projectsdb('projects')
    .select('*')
    .join('tasks','tasks.projects_id', 'projects.id')
    .where({projects_id: id})
}
function findById(id) {
    return projectsdb('projects')
        .where({ id })
        .first();
}