import * as mongoose from "mongoose";

interface I<%= name %>Model extends mongoose.Document {
    entityVersion: string,
    <%= name %>ID: string,
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