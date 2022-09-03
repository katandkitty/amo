const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const port = process.env.PORT || 5000;

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA2Y2JlYTMwNTdiZWE2OTMzNzhmMjQwNTRlNzBmZmUyZDE0MjdiMzRmNDYyNTBiZGZhOWNiMjU1ZmMwZmZmMTNjNjdkN2RjMWQ1ZWZmMjdmIn0.eyJhdWQiOiI4YTVjODlmOS1mZGU1LTQ1YzYtOWExYi1iMTYzYjAwMzg5YmIiLCJqdGkiOiIwNmNiZWEzMDU3YmVhNjkzMzc4ZjI0MDU0ZTcwZmZlMmQxNDI3YjM0ZjQ2MjUwYmRmYTljYjI1NWZjMGZmZjEzYzY3ZDdkYzFkNWVmZjI3ZiIsImlhdCI6MTY2MjIxMzA4NSwibmJmIjoxNjYyMjEzMDg1LCJleHAiOjE2NjIyOTk0ODUsInN1YiI6Ijg1MDc0MTAiLCJhY2NvdW50X2lkIjozMDM2ODExNiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.UZARO2gYj_pO0TIQSOHmqJTbbxsrGp56EFIxOHNposTcdhm5Vd6rV9P1MaBA_9tjyiOoK5IRpk3K5yXRNgjJvRLqqA3mWfJ0DmoUgz9ccmY97OVXi_xM8_1iBsQaMKLHfvB-Sz0QFwpAOjZLxmlvgWPwY_M4uBF_6BXm8560GpOTvP1wxlbzXtKz8yycc7-SYdgUaPZdf_e5_NIKbJ-d_kou6g1WUCBpnxCzBZStVVN4Sa6ahx8ouZmCi7Vfp-5yKd3qOlW1YisqhNfHwghjWIQxkZgfgkemckHGG5rkIRwWz73KMAUjCqFzP5-mfgXO4PQhDbiT4OyQq5e-m_pAxA';

app.get("/leads", (req, res) => {
    if (req.query.query !== undefined) {
        backendUrl = encodeURI('https://nightguest2600.amocrm.ru/api/v4/leads?query=' + req.query.query)
    } else backendUrl = "https://nightguest2600.amocrm.ru/api/v4/leads"

    
    axios.get(backendUrl, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(response => {
        if (response.data._embedded?.leads !== undefined) res.send(response.data._embedded.leads)
        else res.send([])
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});