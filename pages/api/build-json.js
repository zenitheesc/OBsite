import { buildJSON } from "../../services/build-json";

export default function buildJSON_API(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }
  
    const body = JSON.parse(req.body);
    let dataJSON;
    dataJSON = buildJSON(body.binary, body.exampleJSON);
    res.status(200).json({data: dataJSON});
}