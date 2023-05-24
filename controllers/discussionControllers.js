const Discussion   = require("../models/discussion.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'NEWTONSCHOOL';

const getAllDiscussion =async (req, res) => {

    const allDiscussion = await Discussion.find({});
    res.status(200).json({
        status: "success",
        data: allDiscussion
    })
   
}

/*

request.body = {
    heading
    body
    token
}

the token here is a JWT token.

1. Create new discussion from request body .
2. Save heading, body, creator_id for every discussion.
3. "creator_id" is "userId" in payload that we get from the JWT token.

Response :

1. Missing token 

401 Status Code

json = 
{
    status: 'fail',
    message: 'Missing token'
}

2. Invalid token

401 Status Code

json = 
{
    status: 'fail',
    message: 'Invalid token'
}

3. Success

200 Status Code

json = 
{
    message: 'Discussion added successfully',
    discussion_id: discussion_id._id, //id of task that is created.
    status: 'success'
}

4. Fail to do

500 Status Code
json = 
{
    status: 'fail',
    message: error message
}

*/

const createDiscussion = async (req, res) => {

    const {heading, body, token } = req.body;

    try{
        
        //Write your code here.

    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}

const deleteDiscussion = async (req, res) => {

    const id = req.params.id;

    const discussion = await Discussion.findById(id);
    if(!discussion)
    {
        res.status(404).json({
            status: 'fail',
            message: "Given Discussion doesn't exist"
        })
    }

    try{
        await Discussion.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Discussion deleted successfully'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}

const updateDiscussion = async (req, res) => {

    const id = req.params.id;

    const discussion = await Discussion.findById(id);

    if(!discussion)
    {
        res.status(404).json({
            status: 'fail',
            message: "Given Discussion doesn't exist"
        })
    }

    try{
        await Discussion.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'Discussion updated successfully'
        });
    } catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    };

}

const getDiscussion = async (req, res) => {

    const id = req.params.id;

    const discussion = await Discussion.findById(id);
    if(!discussion)
    {
        res.status(404).json({
            "status": 'fail',
            "message": "Given Discussion doesn't exist"
        })
    }

    res.status(200).json({
        "status": 'success',
        "data": discussion
    })

}

module.exports = { getAllDiscussion, getDiscussion, createDiscussion, deleteDiscussion, updateDiscussion };
