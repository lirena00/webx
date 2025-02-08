
"use client";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { User } from "lucide-react";

function HeaderProfileBtn() {
  return (
    <>
      <UserButton appearance={{ baseTheme: dark }}>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
export default HeaderProfileBtn;
