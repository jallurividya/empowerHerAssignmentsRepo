import express from "express";
import os from "os";
import dns from "dns";
import { readFileData } from "./read.js";

const app = express();
const PORT = 3000;
app.get("/test", (req, res) => {
    res.send("Test route is working!");
});

app.get("/readfile", async (req, res) => {
    try {
        const data = await readFileData();
        res.send(data);
    } catch (error) {
        res.status(500).send("Unable to read file");
    }
});

app.get("/systemdetails", (req, res) => {
    const systemDetails = {
        platform: os.platform(),
        totalMemory: `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`,
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length // Bonus
    };
    res.json(systemDetails);
});

app.get("/getip", (req, res) => {
    dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
        if (err) {
            res.status(500).json({ error: "DNS lookup failed" });
        } else {
            res.json({
                hostname: "masaischool.com",
                addresses
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
