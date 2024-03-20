import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2ds28yKBc3NNcxVqjk7QmEDqhSb",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
