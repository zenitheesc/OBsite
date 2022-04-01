import { getTemplate } from "../../services/get-template";

export default function getTemplate_API(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }
  
    const body = JSON.parse(req.body);
    let template;
    template = getTemplate(body);

    res.status(200).json({data: template});
}