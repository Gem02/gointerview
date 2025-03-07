import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  );

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = await client.create({
    _type: "user",
    name,
    email,
    password: hashedPassword,
    role: "user",
  });

  return res
    .status(201)
    .json({ message: "User registered successfully", userId: newUser._id });
}
