import { prisma } from "../../lib/prisma.js";

const getUserById = async (id) => {
    const user = prisma.user.findUnique({
        where: {
            id: id
        }
    });

    return user;
}

const getUserByEmail = async (email) => {
    const user = prisma.user.findUnique({
        where: {
            email
        }
    })

    return user;
}

const addUser = async (hashedPassword, email) => {
    return await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    })
}

const userQuery = { getUserById, addUser, getUserByEmail };

export default userQuery;