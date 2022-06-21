import express, { application } from 'express';

const app = express();
app.use(express.json())

app.listen(3000, () => {
  console.log('server is listening on port 3000')
});

app.get("/customers", (req, res) => {
  res.send({
    id: 1,
    name: "golden software",
  });
})