require("dotenv/config");
const { PrismaClient } = require("../generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

// Prisma 7 wajib memakai driver adapter. Satu instance dipakai bersama seluruh aplikasi.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
