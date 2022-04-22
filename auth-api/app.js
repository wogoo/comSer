import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        "service": "Auth",
        "message": "OK"
    });
})

app.listen(PORT, () =>  {
    console.info(`Server is listening on port ${PORT}`);
})