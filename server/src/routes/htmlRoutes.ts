import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
r//outer.get('/', (req:any, res:any)=>{
//    const fullPath= __dirname + __filename
//    readFile(fullPath, 'utf-8'(err, data) =>{
//        data}
//    res.send()
//})

export default router;
