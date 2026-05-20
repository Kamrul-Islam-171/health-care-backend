
import path from "path";
import dotenv from 'dotenv';

dotenv.config({path : path.join(process.cwd(), ".env")});

export default {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    app_name: process.env.APP_NAME,
};
  