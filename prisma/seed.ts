import prisma from "@/db";
import { hashPassword } from "@/auth";

async function main() {
    try {
        const systemAdmin = await prisma.user.create({
            data: {
                username: 'systemadmin1',
                email: 'systemadmin1@nextaurant.com',
                firstName: 'Winsten',
                lastName: 'Coellins',
                password: hashPassword('adminpassword123'),
                gender: 'Male',
                role: 'Admin'
            }
        })
    } catch (error) {
        console.error('Error: ', error)
        return
    }

    console.log('System Admin successfully created! ✅')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })