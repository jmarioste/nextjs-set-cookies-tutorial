import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = serialize("hello-cookie", "api-hello-cookie-value", {
    httpOnly: true,
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "Successfully set cookie!" });
}
