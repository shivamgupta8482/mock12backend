const connection = require("./Config/db");
const { UserModel } = require("./Model/productmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const { BookmarkModel } = require("./Model/bookmarkModel")
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//signup of application-----------------------------------------------------------------------------------------------------
app.post("/addingdata", async (req, res) => {
  const { company,postedAt,city,location,role,level,contract,position,language } = req.body;
 
 
        const new_user = new UserModel({
          company: company,
		postedAt: postedAt,
		city: city,
		location: location,
		role: role,
		level: level,
		contract: contract,
		position: position,
		language: language,
            date:new Date()
        });

        await new_user.save();
        res.send({ message: "sign up successful" });
      })
     
  



app.get("/dashboard", async (req, res) => {
 
  const data = await UserModel.find();
  res.send(data);
});



app.listen(4000, async () => {
  try {
    await connection;
    console.log("connected to db sucessfully");
  } catch (err) {
    console.log("not able to connect");
  }
});


