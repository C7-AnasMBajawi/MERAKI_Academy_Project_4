const mongoose =  require("mongoose")

const carSchema = new mongoose.Schema({
    make:{type : String, required : true},
    model : {type : String, required : true},
    year : {type :String, required : true},
    color : {type : String, required : true},
    milage : {type : String, required : true},
    type : {type : String, required : true},
    fuelType : {type : String, required : true},
    plateNumber : {type : String, required : true, unique : true},
    rentPrice : {type : String, required : true},
    title : {type : String, required :true},
    description : {type : String, required : true},
    isAutomatic : {type : Boolean, required : true},
    location : {type : String, required : true},
    user : {type : mongoose.Schema.Types.ObjectId, ref: "user"}
})

module.exports = mongoose.model("car", carSchema)