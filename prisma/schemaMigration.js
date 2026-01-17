import fs from 'node:fs';
import path from 'node:path';

const inputDir = path.join(path.resolve(), 'DB', 'Models');
const outputFile = path.join(path.resolve(), 'prisma', 'schema.prisma');

// Keep your original generator & datasource blocks
const baseSchema = `
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider     = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

`;

let finalSchema = baseSchema + '\n\n';

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.prisma'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
    finalSchema += `// -------- ${file} --------\n\n${content}\n\n`;
});

fs.writeFileSync(outputFile, finalSchema);
console.log('✅ Merged schema.prisma created at prisma/schema.prisma');