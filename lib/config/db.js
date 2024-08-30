import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NIMESH939:Nkk@12048@cluster0.bknfy.mongodb.net/todo-app"
    //mongodb+srv://NIMESH939:<db_password>@cluster0.bknfy.mongodb.net/
  );
  console.log("DB Connected");
};
