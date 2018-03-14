var mongoose = require('mongoose');

/*schema necessaire pour structurer les données et requis par mongoose,
contient les champs constituant une note.
le timestamps:true sert à générer des champs contenant les timestamps de création et de modification*/
var NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);