const express = require("express");
const { 
    getAllPosts, 
    getOnePost, 
    createPost, 
    deletePost, 
    updatePost
} = require("../queries/posts.js");
// 
const { checkUserName} = require("../validations/checkPosts.js")
const posts = express.Router();


posts.get("/", async (req, res) => {
    
    const allPosts = await getAllPosts();
    if (allPosts[0]) {
        res.status(200)
            .json({ success: true, data: { payload: allPosts } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

posts.get("/:id", async (req, res) => {
    const { id } = req.params
    const onePost = await getOnePost(id)
    if (onePost){
        res.json(onePost)
    } else {
        res.status(404).json({error: "not found!"})
    }
})

posts.post("/", checkUserName, async (req, res)=> {
    try {
       
        const createdPost = await createPost(req.body)
        res.json(createdPost)
    } catch (error) {
        res.status(400).json({error: "OH no! You got an error"})
    }
})

posts.delete("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const deletedPost = await deletePost(id);
        if(deletedPost) {
            res.status(200).json({success:true, payload: {data: deletedSong}})
        } else {
            res.status(404).json("post not found - uh oh")
        }
    } catch(err) {
        res.send(err)
    }
});

posts.put("/:id", async(req, res) => {
    const { id } = req.params;
    const updatedPost = await updatePost(id, req.body);
    if(updatedPost.id) {
        res.status(200).json(updatedPost);
    } else (
        res.status(404).json("no post found with that id")
    )
})

module.exports = posts;