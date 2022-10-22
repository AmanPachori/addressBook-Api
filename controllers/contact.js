const jwt = require("jsonwebtoken");
const Contact = require("../models/contact.model.js");
const asyncHandler = require("express-async-handler");
const express = require("express");

const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone,address } = req.body;

  if (!name || !email) {
    res.json("Please enter the required field");
  }
  const contactExist = await Contact.findOne({ name });
  if (contactExist) {
    res.json("contact Already Exist");
  } else {
    const contact = new Contact({
      name,
      email,
      phone,
      address
    });
    contact
      .save()
      .then(() =>
        res.status(200).send({
          success : true,
          message : "Contact saved successfully",
          _id: contact.id,
          name: contact.name,
          token: genrateToken(contact.name),
        })
      )
      .catch((err) => res.status(400).json("Error :" + err));
  }
});
const addManyContact = asyncHandler(async (req, res) => {
  const { array } = req.body;
     Contact.insertMany(array)
    .then(() =>
        res.status(200).send({
          success : true,
          message : "Contacts added successfully"
        })
      )
      .catch((err) => res.status(400).json("Error :" + err));
      
});

const getSingleContact = asyncHandler(async (req, res) => {
  const  name  = req.params.name;
  const contactExist = await Contact.findOne({ name });

  if (contactExist) {
    res.status(200).send({
      success : true,
      message : "Contacts are displayed successfully",
      data:contactExist,
    })
  }
    else
    {
      res.status(400).send({
        success : false,
        message : "Contacts Not found",
      })
    }
});
const getMatchedContact = asyncHandler(async (req, res) => {
  let query  = req.params.query
  query= query.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
	queryregex = new RegExp(".*" + query+ ".*", "i");
	Contact.find({name: queryregex}, function(err, contact) {
		if(contact.length <= 0) {
			res.status(400).send({
        success : false,
        message : "Contacts Not found",
      })
		}
		else {
			if (err)
				{
          res.status(400).send({
            success : false,
            message : "Contacts Not found",
          })
        }
			else
     { res.status(200).send({
        success : true,
        message : "Contacts added successfully",
        data:contact,
      })}
		}
	});
});

const getListOfContacts = asyncHandler(async(req,res)=>{
  Contact.find({limit:50})
  .then((result)=>{
    res.status(200).send({
      success: true,
      message: "Contact is updated successfully",
      data:result,
    });
  })
  .catch((err) => res.status(400).send({
    success : false,
    message : "Caught some error",
  }))
})

const updateContact = asyncHandler(async (req,res)=>{
  const id = req.params.name;
  const { name, email, phone,address } = req.body;
  const contactExist = await Contact.findOne({ name:id });
  const myQuery = {name:id};
  const newvalues = {$set :{name:name, email:email,phone:phone,address:address}};

 if(contactExist)
 {
  Contact
  .updateOne(myQuery,newvalues)
  .then(() => {
    res.status(200).send({
      success: true,
      message: "Contact is updated successfully",
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send({
      success: false,
      message: "Caught some error",
    });
  });

 }
 else{
  res.status(400).send({
    success: false,
    message: "Contact Not found",
  });
 }

})

const deleteContact = asyncHandler((req,res)=>{
  const name = req.params.name;
   Contact.deleteOne({name : name})
   .then(()=>{
      res.status(200).send({
          success : true,
          message:'Contact is deleted successfully',
   })
   })
   .catch((err)=>{
      res.status(400).send({
       success:false,
       message: 'Caught some error',
      })
   })
})
const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });
};

module.exports = {addContact, addManyContact,getSingleContact,getMatchedContact,getListOfContacts,updateContact,deleteContact};