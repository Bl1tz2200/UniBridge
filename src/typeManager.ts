export type loginForm = {
  username: string,
  password: string
}

export type registrationForm = loginForm & {
  email: string
}

export function isLoginForm(obj: any): obj is loginForm { // Checking if it's login form by type guard check
  return obj && typeof obj.username === "string" && typeof obj.password === "string" && !("email" in obj)
}

export function isRegistrationForm(obj: any): obj is registrationForm { // Checking if it's registrationForm form by type guard check
  return obj && typeof obj.username === "string" && typeof obj.password === "string" && typeof obj.email === "string"
}
