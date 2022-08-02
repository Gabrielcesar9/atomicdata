import {MongoClient} from 'mongodb'

export default async function handler(req, res){

const client = await MongoClient.connect("mongodb+srv://212083:ForIonia@achilles.ckale.mongodb.net/?retryWrites=true&w=majority");
const db = client.db("G305");
const collection = db.collection("atomb3lyp631gd");
const data = await collection.find().toArray();
const sorted = await data.sort((a,b)=>{if(parseInt(a.Z) < parseInt(b.Z)){return -1}});
sorted.map(item=>{console.log('sorted', item.Z)})
res.status(200).send(sorted);}
