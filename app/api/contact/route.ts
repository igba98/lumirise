import { validateContact } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const result = validateContact(body as Record<string, string>);
  if (!result.valid) {
    return Response.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }

  // No email backend wired yet — log the message for now.
  console.log("[contact] new message:", body);

  return Response.json({ ok: true });
}
