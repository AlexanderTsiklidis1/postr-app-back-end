const checkUserName = (req, res, next) => {
    
    if(req.body.username){
        console.log("username is okay")
        
    } else {
        
        res.status(400).json({ error: "username is required!" })
    }
}

// const checkBoolean = (req, res, next) => {
  
//     if (req.body.is_favorite === true || req.body.is_favorite === false){
        
//         next()
//     } else{
        
//         res.status(400).json({ error: "is_favorite must be a boolean value"})
//     }
// }

module.exports = {
    checkUserName,
    // checkBoolean
}