import * as dotenv from "dotenv";
import express from "express";
const app = express();
import {categoryRouter} from "./routes/category";
import { authRouter } from "./routes/users";
import { connect } from "mongoose";
import session from "express-session";
import { postRouter } from "./routes/posts";
// import { MongoDBStore } from "connect-mongodb-session";
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(session({
//     secret: "helloworld_",
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoDBStore({
//         uri: process.env.mongoConnectionURI!,
//         collection: "Sessions"
//     }),
//     cookie: {maxAge: 1000 * 60 * 60 * 24}
// }));

app.get("/", (req, res)=>{
    res.send("Merhaba");
});

app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/posts", postRouter);


connect(process.env.mongoConnectionURI!).then(()=>{
    console.log("Mongo db Connection successfuly");
    app.listen(3000, ()=>console.log("Listening a Port 3000"));
}).catch(()=>console.log("Errorrrrrrr"));