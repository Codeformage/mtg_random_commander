import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
    origin: ['http://localhost:5173'],
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
       blogPost:[
        {
            title: 'My first blog post',
            content: 'This is my first blog post. I am so excited to share my thoughts with the world.',
        },
        {
            title: 'The change of seasons',
            content: 'I love all the seasons. Each season has its own beauty and charm.',
        }
       ] 
    })
  });

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});