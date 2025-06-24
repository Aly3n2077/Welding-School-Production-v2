// FIX: This file is a temporary placeholder to resolve build errors.
// It was part of a mock database that has been removed.
// It should be deleted once all imports of 'db' and 'comparePassword' are removed.
export const db = {}
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  console.warn("comparePassword is a deprecated mock function.")
  return false
}
