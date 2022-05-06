import dotenv from 'dotenv';
import applyDotenv from '../../app/lambdas/applyDotenv.js';

import mongoose from 'mongoose';
import UserModel from './User.js';
mongoose.Promise = global.Promise;

const { mongoUri } = applyDotenv(dotenv);
const db = {};

db.mongoose = mongoose;
db.url = mongoUri;
db.User = new UserModel(mongoose);

export default db;
