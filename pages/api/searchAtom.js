// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
    if(req.method === 'POST'){
      const client = await MongoClient.connect(
        "mongodb+srv://212083:ForIonia@achilles.ckale.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db("G305");
      const collections = db.collection("atomb3lyp631gd");
      const data = await collections.findOne({ sym: req.body });
      
      client.close();

      res.status(201).send(data);
    }
}
