////////////////////////////
//import dependencies
////////////////////////////
const express = require("express") //express for Router function
const Contact = require("../models/contact") //contact model

////////////////////
// Create router
////////////////////
const router = express.Router()

/////////////////////////////////
// Router Middleware
/////////////////////////////////

// middleware to check if user is logged in
router.use((req, res, next) => {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
})

////////////////////////////////
// Routes
////////////////////////////////

//index route
router.get("/", (req, res) => {
    Contact.find({username: req.session.username})
    .then((contacts) => {
        res.render("contacts/index.liquid", {contacts})
    })
        // error handling
        .catch((error) => {
            res.json({error})
        })
})

 //new route
 router.get("/new", (req, res) => {
     res.render("contacts/new.liquid")
 })

// create route
router.post("/", (req, res) => {
    //add username
    req.body.username = req.session.username
    
    // create the new contact
    Contact.create(req.body)
      .then((contacts) => {
        // redirect user to index page if successfully created item
        res.redirect("/contacts");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });


  //edit route
  router.get("/:id/edit", (req, res) => {
      const id = req.params.id
      //get the fruit with matching id
      Contact.findById(id)
      .then((fruit) => {
          res.render("contacts/edit.liquid", { fruit })
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  })

  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the contact
    Contact.findByIdAndRemove(id)
      .then((contact) => {
        // redirect to main page after deleting
        res.redirect("/contacts");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

    //update route
    router.put("/:id", (req, res) => {
        // get the id from params
        const id = req.params.id;
        // update the fruit
        Contact.findByIdAndUpdate(id, req.body, { new: true })
          .then((contact) => {
            // redirect to main page after updating
            res.redirect("/contacts");
          })
          // send error as json
          .catch((error) => {
            console.log(error);
            res.json({ error });
          });
      });

// show route
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
  
    // find the particular contact from the database
    Contact.findById(id)
      .then((contact) => {
        // render the template with the data from the database
        res.render("contacts/show.liquid", { contact });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

///////////////////////////////
//export router
///////////////////////////////
module.exports = router