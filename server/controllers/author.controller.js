const Author = require("../models/author.model")


module.exports = {

    // find all
    findAllAuthors: (req, res) =>{
        Author.find().collation({locale:'en', strength:2}).sort({name:1})
        .then((allAuthors)=>{
            console.log(allAuthors)
            res.json(allAuthors)
        })
        .catch((err)=>{
            console.log("Find all authors failed.")
            res.status(400).json({message: "Something went wrong with findAll", error: err})
        })
    },



    // create / add one
    addAuthor: (req, res) =>{
        Author.create(req.body)
        .then((newAuthor)=>{
            console.log(newAuthor)
            res.json(newAuthor)
        })
        .catch((err)=>{
            console.log("Add author failed.")
            res.status(400).json(err)
        })
    },



    // find one
    findOneAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id})
        .then((oneAuthor)=>{
            console.log(oneAuthor)
            res.json(oneAuthor)
        })
        .catch((err)=>{
            console.log("Something went wrong with find author.")
            res.status(400).json({message: "Something went wrong with find author", error: err})
        })
    },




    // delete one
    deleteAuthor: (req, res)=>{
        Author.deleteOne({_id: req.params.id})
        .then((delAuthor)=>{
            console.log(delAuthor)
            res.json(delAuthor)
        })
        .catch((err)=>{
            console.log("Something went wrong with delete author.")
            res.status(400).json({message: "Something went wrong in delete author", error: err})
        })
    },



    // update one
    updateAuthor: (req, res)=>{
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
        .then((updatedAuthor)=>{
            console.log(updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch((err)=>{
            console.log("Something went wrong with update author.")
            res.status(400).json(err)
        })
    }

}