import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const { data } = await api.get(`/campers?${searchParams}`);

  return NextResponse.json(data);
}
