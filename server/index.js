const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g8eto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const database = client.db("konohaElectronics");
        const productCollection = database.collection("products");

        app.get("/products", async (req, res) => {
            const result = await productCollection.find().toArray();
            res.send(result)
        })

        // filter products according to brand name
        app.get("/product/:brand")

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", async (req, res) => {
    res.send("This is Konoha Electronics Server")
})



app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})

