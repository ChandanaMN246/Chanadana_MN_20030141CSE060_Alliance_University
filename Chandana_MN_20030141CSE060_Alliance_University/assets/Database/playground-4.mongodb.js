/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'TechLearnHub';
const collection = 'profile';
use(database);
db.createCollection(collection);

db.createCollection(
    "users",
    {
      capped: false,
      autoIndexId: true,
      size: 1000000000,  
      max: 10000,       
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["username", "email", "age", "collegeName", "location", "profilePic"],
          properties: {
            username: {
              bsonType: "string",
              description: "Username must be a string."
            },
            email: {
              bsonType: "string",
              description: "Email must be a string."
            },
            age: {
              bsonType: "int",
              description: "Age must be an integer."
            },
            collegeName: {
              bsonType: "string",
              description: "CollegeName must be a string."
            },
            location: {
              bsonType: "string",
              description: "Location must be a string."
            },
            profilePic: {
              bsonType: "string",
              description: "ProfilePic must be a string (file path)."
            }
          }
        }
      },
      validationLevel: "strict",
      validationAction: "error",
      collation: { locale: "en", strength: 2 },  
      writeConcern: { w: "majority", wtimeout: 5000 },
      expireAfterSeconds: 0  
    }
  )
  

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
