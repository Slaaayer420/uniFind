import { ActionOptions } from "gadget-server";

/**
/**
 * Signs out the current user by removing them from the active session.
 * This causes the session to become unauthenticated and the user to be logged out.
 */ 
/** @type { ActionRun } */
export const run = async ({ session }) => {
  if (session) session.set("user", null);
 
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
  triggers: {
    signOut: true
  }
};
