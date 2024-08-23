export const generateInitials = (name: string) => {
  const names = name.split(" ");
  const initials = names.map((n) => n.charAt(0)).join("");
  return initials.toUpperCase();
};
