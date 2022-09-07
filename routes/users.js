import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

const users = [
    /*{
        firstName:"John",
        secondName:"Doe",
        age: 25
    },
    {
        firstName: "Jane",
        secondName: "Smith",
        age: 24
    }*/
];

// All routes in here are starting with /users
router.get("/", (req,res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const user = (req.body);

    const userId = uuidv4();

    users.push({user, Id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);    
});

// users/2 => req.params {id: 2}

router.get("/:id", (req, res) => {
    const id = req.params;

    const foundUser = users.find((user)=>user.id == id);
    
    res.send(foundUser);
    
    
});

export default router;