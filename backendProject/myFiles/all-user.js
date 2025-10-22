//File: all-user.js in ROOT-FOLDER/myFiles/ folder

import myExpress from "express"
const myRouter = myExpress.Router()
import myUser from "../myschema/UserSchema.js" //one folder back from "this" file

//sub-route is /all-user/
myRouter.get('/all-user/', async (req, res) => {
    let mySuccess = "false"
    try {
        const searchData = { status: "Teacher" }
        const getUser = await myUser.find(searchData)
        mySuccess = "true"
        res.json({ getData: getUser, success: mySuccess })
    } catch (e) { //parameter is compulsory for usage of catch()
        res.status(500).send({ success: mySuccess, message: "Internal Server Error" })
    }
})
//exporting so that it can access from other files
export default myRouter;