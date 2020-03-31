const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const tripSchema = new Schema({
   date: Date,
   hour: Number,
   from: '',
   destiny: '',
   pilot : {type: Schema.Types.ObjectId, ref: 'Pilot'},
    copilots: [{type: Schema.Types.ObjectId, ref: 'Pilot',
                min: 0,
                max: 3
              }]

});

const Trip = mongoose.model('Trip', tripSchema );

module.exports = Trip