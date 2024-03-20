import { signIn } from "next-auth/react";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    console.log(error);
  }
}
