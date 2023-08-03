const express = require('express');
const apiRouter = express.Router();
const {findDataArrayByName, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId, createMeeting, deleteAllFromDatabase}  = require('./db')
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const getMinionWork = require('./myhelpers');

/* minions routes */

apiRouter.get('/minions', (req, res, next) => {
    const minionsArray = [findDataArrayByName('minions')]
    res.status(200).send(minionsArray[0].data)
})

apiRouter.post('/minions', (req, res, next) => {
    const newMinion = addToDatabase('minions',req.body)
    res.status(201).send(newMinion)
})

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId
    const minion = getFromDatabaseById('minions',minionId)   // check for if there is any minion with this id
    if (minion != null){
        res.send(minion)      
    }else{
        res.status(404).send()
    }
    
})

apiRouter.put('/minions/:minionId', (req, res, next) => {
    const minion = getFromDatabaseById('minions',req.params.minionId)
    if (minion != null){
        const updatedMinion = updateInstanceInDatabase('minions',req.body)
        res.send(updatedMinion)
    } else{
        res.status(404).send()
    }
})

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const deleteMinion = deleteFromDatabasebyId('minions',req.params.minionId)
    if (deleteMinion){
        res.status(204).send()
    } else{
        res.status(404).send()
    }
})



/* ideas routes */

apiRouter.get('/ideas', (req, res, next) => {
    const ideasArray = findDataArrayByName('ideas')
    res.send(ideasArray.data)
})

apiRouter.post('/ideas', checkMillionDollarIdea, (req, res, next) => {
    
    const newIdea = addToDatabase('ideas',req.body)
    res.status(201).send(newIdea)
})

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const idea = getFromDatabaseById('ideas',req.params.ideaId)
    if (idea != null){
        res.send(idea)      
    }else{
        res.status(404).send()
    }
    
})

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const idea = getFromDatabaseById('ideas',req.params.ideaId)
    if (idea != null){
        const updatedIdea = updateInstanceInDatabase('ideas',req.body)
        res.send(updatedIdea)
    } else{
        res.status(404).send()
    }
})

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const deleteIdea = deleteFromDatabasebyId('ideas',req.params.ideaId)
    if (deleteIdea){
        res.status(204).send()
    } else{
        res.status(404).send()
    }
})



/* meetings routes */

apiRouter.get('/meetings', (req, res, next) => {
    const meetingsArray = findDataArrayByName('meetings')
    res.send(meetingsArray.data)
})

apiRouter.post('/meetings', (req, res, next) => {
    const generatedMeeting = createMeeting()
    const newMeeting = addToDatabase('meetings',generatedMeeting)
    res.status(201).send(newMeeting)
})

apiRouter.delete('/meetings', (req, res, next) => {
    const deleteAllMeetings = deleteAllFromDatabase('meetings')
    res.status(204).send()
    
})



/* Bonus */

apiRouter.get('/minions/:minionId/work', (req, res, next) => {
    const minionId = req.params.minionId
    const minion = getFromDatabaseById('minions',minionId)
    if (minion != null){                                                                               
        res.status(200).send( getMinionWork( findDataArrayByName('work').data, minionId))     
    }else{
        res.status(404).send()
    }
})


apiRouter.post('/minions/:minionId/work', (req, res, next) => {
    const newMinionWork = addToDatabase('work',req.body)
    res.status(201).send( newMinionWork )
})

apiRouter.put('/minions/:minionId/work/:workId', (req, res, next) => {
    const minion = getFromDatabaseById('minions',req.params.minionId)
    const work = getFromDatabaseById('work',req.params.workId)

    if (minion != null && work != null && work.minionId === req.params.minionId){
        const updatedWork = updateInstanceInDatabase('work',req.body)
        res.send(updatedWork)
    }
    if (minion === undefined || work === undefined) {
        res.status(404).send();

    } else {
        res.status(400).send()
    }
})

apiRouter.delete('/minions/:minionId/work/:workId', (req, res, next) => {
    const deleteWork = deleteFromDatabasebyId('work',req.params.workId)
    if (deleteWork){
        res.status(204).send()
    } else{
        res.status(404).send()
    }
})
    

module.exports = apiRouter;
