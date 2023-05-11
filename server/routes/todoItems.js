const router = require('express').Router();
//import todo model
const TodoItemModel = require('../models/todoItems');


//Adds Item to DB
router.post('/api/add_item', async (req, res)=>{
    try{
        const newItem = new TodoItemModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully.')
    }catch(err){
        res.json(err);
    }
})

//Fetches Items from DB
router.get('/api/fetch_all', async (req, res)=>{
    try{
        const allTodoItems =  await TodoItemModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

//Fetch One Item from DB
router.get('/api/fetch_one', async (req, res)=>{
    try{
        const oneTodoItem =  await TodoItemModel.findById({});
        res.status(200).json(oneTodoItem)
    }catch(err){
        res.json(err);
    }
})

//Fetch One Item from DB and Update
router.put('/api/update_one/:id', async (req, res)=>{
    try{
        const updateTodoItem =  await TodoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated')
    }catch(err){
        res.json(err);
    }
})

//Fetch One Item from DB and Delete
router.delete('/api/delete_one/:id', async (req, res)=>{
    try{
        const delTodoItem =  await TodoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted')
    }catch(err){
        res.json(err);
    }
})

//export router
module.exports = router;