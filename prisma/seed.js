const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here

  const createContact = await prisma.contact.create({
    data: {
      phone: "+233 244813779",
      email: "alice@gmail.com",
      customerId: createdCustomer.id,
    },
  });
  console.log("create contact", createContact);

  const movie = await prisma.movie.create({
    data: {
      title: "The God Father",
      runtimeMins: 90,
    },
  });
  console.log("movie", movie);

  const screen = await prisma.screen.create({
    data: {
      number: 5,
    },
  });
  console.log(screen);

  const screening = await prisma.screening.create({
    data: {
      startAt: new Date("march 20,2022 02:34:00"),
      movie: {
        connect: {
          id: movie.id,
        },
      },
      screen: {
        connect: {
          id: screen.id,
        },
      },
    },
  });
  console.log(screening);

  const ticket = await prisma.ticket.create({
    data: {
      screening: {
        connect: {
          id: screening.id,
        },
      },
      customer: {
        connect: {
          id: createdCustomer.id,
        },
      },
    },
  });
  console.log(ticket);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
