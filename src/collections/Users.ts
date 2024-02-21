
import { Access, CollectionConfig } from "payload/types";

// It could be used as a foundation for a user management system with different roles and permissions in an application. This file defines a user collection with fields like role (Admin or User) and sets up authentication. and different useful things about our database.

//this will be where our authentication logic will happen

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: ()=> true,
    create: ()=> true,
  },
  
  fields: [
    
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
