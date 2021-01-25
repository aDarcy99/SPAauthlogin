const mongoose = require("mongoose");

const TermSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    synonyms: {
        type: Array,
        required: false
    },
    definition: {
        type: String,
        required: true
    },
    currentUsage: {
        type: String,
        required: false
    },
    furtherReading: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateLastEdited: {
        type: Date,
        required: true
    }
});

const Term = mongoose.model("term", TermSchema);

module.exports = Term;