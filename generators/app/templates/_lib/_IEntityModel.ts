import * as mongoose from "mongoose";

interface I<%= name %>Model extends mongoose.Document {
  employeeID: string,
    name: {
        first: string,
        last: string
    },
    address: {
        lines: [string],
        city: string,
        state: string,
        zip: number
    }
}

export {I<%= name %>Model};