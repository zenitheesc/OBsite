import { getTemplate } from "../../services/get-template";
import firebase from "../../firebase/client-app";
import { delBasePath } from "next/dist/shared/lib/router/router";

const database = firebase.firestore()

const ntypeof = (value) => {
  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      return "int"
    }
    return "float"

  }
  return typeof value;
}

const intToBytes = (value) => {
  let byteArray = new Uint16Array(1);
  byteArray[0] = value;
  return new Uint8Array(byteArray.buffer)
}

const floatToBytes = (value) => {
  let floatArray = new Float32Array(1);
  floatArray[0] = value;
  return new Uint8Array(floatArray.buffer)
}

const stringToBytes = (value) => {
  return new TextEncoder().encode(value);
}

const boolToBytes = (value) => {
  let byteArray = new Uint8Array(1);
  byteArray[0] = value;
  return new Uint8Array(byteArray.buffer)
}

const sendBytes = async (date, id, newPackage) => {
  await database.collection(`binary-data/${date}/${id}`).doc().set(newPackage);
}

const getTodayDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2,'0');
  const month = String(today.getMonth() + 1).padStart(2,'0');
  const year = today.getFullYear();

  return `${year}-${month}-${day}`


}

export default function saveProbeData(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const probeData = req.body;
  const template = getTemplate(probeData);
  const byteArray = [];
  byteArray.push(probeData["equipe"]);
  template.forEach(type => {
    switch (ntypeof(type.value)) {
      case "int":
        byteArray.push(...intToBytes(type.value))
        break;
      case "float":
        byteArray.push(...floatToBytes(type.value))
        break;
      case "boolean":
        byteArray.push(...boolToBytes(type.value))
        break;
      case "string":
        byteArray.push(...stringToBytes(type.value))
        byteArray.push(0x00)
        break;
      default:
        break;
    }
  });
  const dataPackage = {
    "equipe": byteArray[0],
    "binary": byteArray,
    "time-stamp": firebase.firestore.Timestamp.fromDate(new Date())
  }

    sendBytes(getTodayDate(), dataPackage.equipe, dataPackage);

  let hexArray = byteArray.map(byte => byte.toString(16));
  res.status(200).json(hexArray);
}