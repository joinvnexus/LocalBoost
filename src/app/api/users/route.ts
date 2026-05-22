// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // Get user by ID
      const user = await db.select().from(users).where(eq(users.id, Number(id)));

      if (user.length === 0) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }

      const { password: _, ...userWithoutPassword } = user[0];
      return NextResponse.json(userWithoutPassword);
    } else {
      // List all users (be careful in production)
      const allUsers = await db.select().from(users);
      const usersWithoutPassword = allUsers.map(({ password: _, ...rest }) => rest);
      return NextResponse.json(usersWithoutPassword);
    }
  } catch (error) {
    console.error("Users error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}