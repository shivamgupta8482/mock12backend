const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
    company: String,
		postedAt: String,
		city: String,
		location: String,
		role: String,
		level: String,
		contract: String,
		position: String,
		language: String,
            date:String

})

const UserModel = mongoose.model("user",userSchema);

module.exports={UserModel};