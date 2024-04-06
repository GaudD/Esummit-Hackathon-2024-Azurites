import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    console.log("New CKient Initiated");
    return new PrismaClient();
}

declare global{
    // eslint-disable-next-line no-var
    var prisma: undefined | ReturnType<typeof PrismaClientSingleton>
}

const prisma = globalThis.prisma ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;