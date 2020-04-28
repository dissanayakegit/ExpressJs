const express = require('express');
const router = express.Router();
const members = require('../membersJson');
const uuid = require('uuid');


//aroute to get all members
router.get('/members', (req, res) => {
    //res.send('<h1>Hello There ddd!!!!</h1');
    res.json(members);

});

// get single member
router.get('/get-single-member/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id) ));
    }else{
        res.status(400).json({msg: 'Member not found'});
    }
});

//create user
router.post('/add-member', (req, res) => { 
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:'Please include name and email'});
    }   
    members.push(newMember);
    res.json(members);
});

//update user
router.put('/update-member/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updateMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name ? req.body.name : member.name;
                member.email = updateMember.email ?req.body.email : member.email;

                res.json({msg: 'Member updated', member});
            }
        });
    }else{
        res.status(400).json({msg: 'Member not found'});
    }
});

//delete user
router.delete('/delete-member/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json({msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))})
        
    }else{
        res.status(400).json({msg: 'Member not found'});
    }
});



module.exports = router;