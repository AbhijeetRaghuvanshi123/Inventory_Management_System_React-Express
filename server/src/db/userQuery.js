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
    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    })

    return user;
}

const userQuery = { getUserById, addUser, getUserByEmail };

export default userQuery;