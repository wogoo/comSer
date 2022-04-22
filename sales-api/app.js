import express from 'express';

const app = express();
const env = process.env;
const PORT = env.PORT || 8083;

app.get("/api/status", (req, res) => {
    return res.status(200).json({
        status: "OK",
        service: "sales"
    })
})

app.listen(PORT, () => {
   console.info(`Server is listening on port ${PORT}`); 
})