import { save, ActionOptions } from "gadget-server";
 

/** @type { ActionRun } */
export const run = async ({ record }) => {
  record.lastSignedIn = new Date();
  await save(record);
 
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
  triggers: {
 
    emailSignIn: true,
    googleOAuthSignIn: true
  }
};
