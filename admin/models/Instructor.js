const mongoose= require("mongoose")

const InstructorSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    profile:{
        type:String,
    },
    profession:{
        type:String,
        default:"free"
    },
    description:{
        type:String,
    },
},
{timestamps: true},
);

module.exports = mongoose.model("Instructor",InstructorSchema);