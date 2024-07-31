import { connection } from "mongoose";
import connectDB from "../";
import { Access, EntranceLog, Establishment, Guest, User } from "../models";
import bcrypt from "bcryptjs";

const seed = async () => {
  //   console.log("Cleaning database");

  await connectDB();
  //   await connection.dropDatabase();

  //   console.log("Database clean");

  const establishments = [
    new Establishment({ name: "Colonia 1", address: "Calle 123, Colonia 1" }),
    new Establishment({ name: "Colonia 2", address: "Calle 123, Colonia 2" }),
    new Establishment({ name: "Colonia 3", address: "Calle 123, Colonia 3" }),
  ];

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash("123", salt);

  const users = [
    // Super admin
    new User({
      name: "Adrian",
      lastname: "Montemayor",
      email: "adrianmontemayor.r@gmail.com",
      password: hashedPassword,
      birthday: "2000-07-21",
      type: "superadmin",
    }),
    // Admins
    new User({
      name: "Mariana",
      lastname: "Fernandez",
      email: "mariana.fernandez@gmail.com",
      password: hashedPassword,
      birthday: "1987-01-20",
      type: "admin",
      establishment: establishments[0]._id,
    }),
    new User({
      name: "Diego",
      lastname: "Castillo",
      email: "diego.castillo@gmail.com",
      password: hashedPassword,
      birthday: "1983-05-15",
      type: "admin",
      establishment: establishments[1]._id,
    }),
    new User({
      name: "Patricia",
      lastname: "Vega",
      email: "patricia.vega@gmail.com",
      password: hashedPassword,
      birthday: "1994-10-09",
      type: "admin",
      establishment: establishments[2]._id,
    }),
    // Residents
    new User({
      name: "Pablo",
      lastname: "Gonzalez",
      email: "pablo@gmail.com",
      password: hashedPassword,
      birthday: "1995-09-15",
      type: "resident",
      establishment: establishments[0]._id,
    }),
    new User({
      name: "Ana",
      lastname: "Martinez",
      email: "ana.martinez@gmail.com",
      password: hashedPassword,
      birthday: "1990-04-22",
      type: "resident",
      establishment: establishments[0]._id,
    }),
    new User({
      name: "Carlos",
      lastname: "Hernandez",
      email: "carlos.hernandez@gmail.com",
      password: hashedPassword,
      birthday: "1985-08-10",
      type: "resident",
      establishment: establishments[0]._id,
    }),
    new User({
      name: "Laura",
      lastname: "Lopez",
      email: "laura.lopez@gmail.com",
      password: hashedPassword,
      birthday: "1992-11-30",
      type: "resident",
      establishment: establishments[1]._id,
    }),
    new User({
      name: "Miguel",
      lastname: "Garcia",
      email: "miguel.garcia@gmail.com",
      password: hashedPassword,
      birthday: "1988-06-18",
      type: "resident",
      establishment: establishments[1]._id,
    }),
    new User({
      name: "Sofia",
      lastname: "Torres",
      email: "sofia.torres@gmail.com",
      password: hashedPassword,
      birthday: "1996-02-14",
      type: "resident",
      establishment: establishments[1]._id,
    }),
    new User({
      name: "Juan",
      lastname: "Ramirez",
      email: "juan.ramirez@gmail.com",
      password: hashedPassword,
      birthday: "1993-12-25",
      type: "resident",
      establishment: establishments[2]._id,
    }),
    new User({
      name: "Valentina",
      lastname: "Sanchez",
      email: "valentina.sanchez@gmail.com",
      password: hashedPassword,
      birthday: "1991-07-07",
      type: "resident",
      establishment: establishments[2]._id,
    }),
    new User({
      name: "Ricardo",
      lastname: "Morales",
      email: "ricardo.morales@gmail.com",
      password: hashedPassword,
      birthday: "1989-03-05",
      type: "resident",
      establishment: establishments[2]._id,
    }),
  ];

  const guests = [
    new Guest({
      user: users[4]._id,
      name: "Silvia",
      lastname: "Martinez",
      email: "silvia.mtz@gmail.com",
      phoneNumber: "8123456789",
      establishment: users[4].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[5]._id,
      name: "Luis",
      lastname: "Gomez",
      email: "luis.gomez@gmail.com",
      phoneNumber: "8123456790",
      establishment: users[5].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[6]._id,
      name: "Elena",
      lastname: "Perez",
      email: "elena.perez@gmail.com",
      phoneNumber: "8123456791",
      establishment: users[6].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[7]._id,
      name: "Fernando",
      lastname: "Hernandez",
      email: "fernando.hernandez@gmail.com",
      phoneNumber: "8123456792",
      establishment: users[7].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[8]._id,
      name: "Claudia",
      lastname: "Lopez",
      email: "claudia.lopez@gmail.com",
      phoneNumber: "8123456793",
      establishment: users[8].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[9]._id,
      name: "Daniel",
      lastname: "Garcia",
      email: "daniel.garcia@gmail.com",
      phoneNumber: "8123456794",
      establishment: users[9].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[10]._id,
      name: "Isabel",
      lastname: "Ramirez",
      email: "isabel.ramirez@gmail.com",
      phoneNumber: "8123456795",
      establishment: users[10].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[11]._id,
      name: "Jorge",
      lastname: "Sanchez",
      email: "jorge.sanchez@gmail.com",
      phoneNumber: "8123456796",
      establishment: users[11].establishment,
      idSaved: false,
    }),
    new Guest({
      user: users[12]._id,
      name: "Maximiliano",
      lastname: "Sanchez",
      email: "max.sanchez@gmail.com",
      phoneNumber: "8123456796",
      establishment: users[12].establishment,
      idSaved: false,
    }),
  ];

  const findRandomGuestByUser = (userid) => {
    const matchingUsers = users.filter((user) => user._id === userid);

    // Filtrar los guests que tienen el user con el ID especificado

    const matchingGuests = guests.filter((guest) => guest.user === userid);

    // Si no hay matching guests, retornar null o manejar el caso de otra forma
    if (matchingGuests.length === 0) {
      return null;
    }

    // Seleccionar un guest aleatorio de los que coinciden
    const randomGuest =
      matchingGuests[Math.floor(Math.random() * matchingGuests.length)];

    return randomGuest;
  };

  const getRandomDateWithinWeek = (startDate) => {
    const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Una semana después de startDate
    return new Date(
      startDate.getTime() + Math.random() * (endDate - startDate)
    );
  };

  const getAccesses = async () => {
    let accessList = [];
    for (var i = 0; i < 19; i++) {
      let initial_date = getRandomDateWithinWeek(new Date());
      const randomIndex = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
      let randomUser = users[randomIndex];

      let newAccess = await new Access({
        establishment: randomUser.establishment,
        initial_date: initial_date,
        final_date: getRandomDateWithinWeek(initial_date),
        infinite: false,
        user: randomUser._id,
        guest: findRandomGuestByUser(randomUser._id),
      });

      accessList.push(newAccess);
    }

    return accessList;
  };

  const accesses = await getAccesses();

  const savings = [
    ...users.map((user) => user.save()),
    ...establishments.map((establishment) => establishment.save()),
    ...guests.map((guest) => guest.save()),
    ...accesses.map((access) => access.save()),
  ];

  await Promise.all(savings);

  console.log("Database seeded");

  connection.close();
};

seed();
