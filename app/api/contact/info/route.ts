import { NextResponse } from "next/server";

import { CONTACT_CONTENT, ContactPageContent } from "@/lib/contact";

export async function GET(): Promise<NextResponse<ContactPageContent>> {
  return NextResponse.json(CONTACT_CONTENT);
}
