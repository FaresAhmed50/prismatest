import prisma from "../prisma/prisma.client.js";


const bootstrap = async (app, express) => {

    app.use(express.json());


    const x = await prisma.test.findMany();
    console.log(x)



}


export default bootstrap;