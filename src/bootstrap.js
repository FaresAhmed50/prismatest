import prisma from "../prisma/prisma.client.js";


const bootstrap = async (app, express) => {

    app.use(express.json());



    const x = prisma.user

}


export default bootstrap;