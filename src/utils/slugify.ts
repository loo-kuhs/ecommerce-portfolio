/**
 * It takes a string or number and returns a slugified version of it
 * @param {(string | number)[]} args - (string | number)[]
 * @returns A function that takes in a string or number and returns a string.
 */
export const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
}
