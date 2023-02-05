import { config } from "dotenv";
config();

export const DB = process.env.DBURL;
export const PORT = process.env.PORT;