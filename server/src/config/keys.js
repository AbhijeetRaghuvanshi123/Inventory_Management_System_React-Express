import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../../keys/private.key"),
  "utf8"
);

const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../../keys/public.key"),
  "utf8"
);

export { privateKey, publicKey };