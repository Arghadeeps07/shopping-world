import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookies = request.headers.get("cookie") || "";
  const tokenCookie = cookies.split("; ").find((cookie) => cookie.startsWith("token="));
  
  if (tokenCookie) {
    return NextResponse.json({ hasCookie: true });
  } else {
    return NextResponse.json({ hasCookie: false });
  }
}
