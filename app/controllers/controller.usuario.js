import User from "../models/User.js";
import connection from "../config/db.js";
import bcrypt from "bcrypt";
import { createJWT } from "../middlewares/token.js";

async function Register(req, res) {
  const { firstName, lastName, email, age, phoneNumber, password } = req.body;

  connection();
  const exists = await User.findOne({ email });

  if (exists) {
    return res.status(500).json({ error: "User alredy registred!" });
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  const date = new Date()
  const user = new User({
    firstName,
    lastName,
    email,
    age,
    phoneNumber,
    password: hash,
    createdAt : date
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).send(error);
  }
}

async function Login(req, res) {
  const { email, password } = req.body;
  connection();
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(500).json({ error: "Account not found!" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = createJWT(user.id);

    let data = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      phoneNumber: user.phoneNumber,
    };

    res.status(200).json({token, user: data});
  } else {
    res.status(500).json({ error: "Wrong Password!" });
  }
}

async function GetById(req, res) {
  const id = req.id;

  connection();

  const data = await User.findById(id, '-password');

  res.status(200).json({ data });
}


export default { Register, Login, GetById};
