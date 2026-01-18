// import pkg from '@prisma/client';
// const { PrismaClient } = pkg;
// import { PrismaPg } from '@prisma/adapter-pg';
// import 'dotenv/config';
//
// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
// const prisma = new PrismaClient({ adapter });
//
// export default prisma;
import 'dotenv/config';
import {PrismaClient} from "../src/generated/client.js";
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })


export default prisma