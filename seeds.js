var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Moutain",
    image: "https://images.unsplash.com/photo-1504701365486-b44b67f99439?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8caa83bf3aa0e9a07827ddb36e9fc948&auto=format&fit=crop&w=500&q=60",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
  },
  {
    name: "Star",
    image: "https://images.unsplash.com/photo-1455122990967-5f5b1030f719?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18e01f89892b18ede93bb4dd2ce1d070&auto=format&fit=crop&w=500&q=60",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
  },
  {
    name: "Trees",
    image: "https://images.unsplash.com/photo-1475710534222-6165a8b45449?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=692683df20283d5aa6e2b058be2c000e&auto=format&fit=crop&w=500&q=60",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
  }
]
function seedDB(){
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    // add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          // add a few comments
          Comment.create({
            text: "Test place is great",
            author: "Homer"
          }, function(err, comment){
            if (err) {
              console.log(err);
            } else {
              campground.comments.push(comment);
              campground.save();
              console.log("Created new comment");
            }
          });
        }
      });
    });
  });
  // add a few comments
}

module.exports = seedDB;
