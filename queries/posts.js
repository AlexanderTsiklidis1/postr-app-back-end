const db = require("../db/dbConfig.js");

const getAllPosts = async () => {
    try {
        const allPosts = await db.any("SELECT * FROM posts");
        return allPosts
    } catch(err) {
        return err
    }
}
const getOnePost = async (id) => {
    try{
        const onePost = await db.one("SELECT * FROM posts WHERE id=$1", id)
        return onePost
    } catch (error){
        return error
    }
};
const createPost = async (post) =>{
    try {
        const createdPost = await db.one("INSERT INTO posts (id, userName, postMesssage, post_pic, profile_pic) VALUES ($1, $2, $3, $4, $5) RETURNING *", [post.id, post.userName, post.postMessage, post.post_pic, post.profile_pic])
        return createdPost
    } catch (error) {
        return error
    }
}

const deletePost = async (id) => {
    try {
        const deletedPost = await db.one(
            "DELETE from posts WHERE id = $1 RETURNING *",
            id
        )
        return deletedPost
    } catch(error) {
        return error
    }
};

const updatePost = async (id, post) => {
    try {
        const { userName, postMessage, post_pic, profile_pic} = post;
        const updatedPost = await db.one(
            "UPDATE posts SET userName=$1, postMessage=$2, post_pic=$3, profile_pic=$4 WHERE id=$5RETURNING *",
            [userName, postMessage, post_pic, profile_pic]
        );
        return updatedPost
    } catch(err) {
        return err
    }
};

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
    updatePost
}