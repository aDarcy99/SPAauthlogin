const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        isRequired: true,
    },
    // tags: {
    //     type: array of tagIds,
    //     isRequired: true
    // },
    // terms: {
    //     type: array of termIds
    // }
    dateCreated: {
        type: Date,
        required: true
    },
    dateLastEdited: {
        type: Date,
        required: true
    }
    //user that list was created by

});

const List = mongoose.model("list", ListSchema);

module.exports = List;