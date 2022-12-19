import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  //Setting cookies in response.
  //This will be sent back to the browser.
  res.cookies.set("my-cookie", "my-cookie-value", {
    path: "/",
    httpOnly: true,
  });

  // Setting cookies in the request.
  // This will be forwarded to api handler or getServerSideProps
  // depending on the route.
  req.cookies.set({
    name: "test",
    value: "test-cookie-value",
  });
  return res;
}
