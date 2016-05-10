import {I<%= name %>Model} from "./I<%= name %>Model";
import * as Mongoose from "mongoose";
let application = require('../package.json');

class <%= name %>Schema {

  static get mongooseSchema () {
       let mongooseSchema =  new Mongoose.Schema({
           entityVersion: {
               type: String,
               required: true,
               unique: true,
               default: application.version
           },
           <%= nameToLower %>ID: {
                type: String,
                required: true,
                unique: true
            },
            name: {
                first: {
                    type: String,
                    required: true,
                    errMsg: 'Enter First Name'
                },
                last: {
                    type: String,
                    required: true
                }
            },
            address: {
                lines: {
                    type: [String]
                },
                city: {
                    type: String
                },
                state: {
                    type: String
                },
                zip: {
                    type: Number
                }
            }
       });

       return mongooseSchema;
   }

}
const <%= name %>Model = Mongoose.model<I<%= name %>Model>("<%= name %>", <%= name %>Schema.mongooseSchema);
export {<%= name %>Model};
