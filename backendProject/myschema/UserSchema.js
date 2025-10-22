//File: UserSchema.js in ROOT-FOLDER/myschema/ folder

import UserMongoose from "mongoose"

const { Schema } = UserMongoose; // Destructure Schema from mongoose

const UserSchema = new Schema();

const UserModel = UserMongoose.model('mycollection_dbtest', UserSchema, 'mycollection_dbtest');

export default UserModel;