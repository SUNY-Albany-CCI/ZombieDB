//
// Survival advice:
//
//    Blades don't need reloading
//

var person = db.people.findOne( { name: "Sean" } );

db.people.update( { _id: person._id },
     { $set : {
           weapon : {
              name : "Chainsaw",
              strength : 1
              }
            }
     });
