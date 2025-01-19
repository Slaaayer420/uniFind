import { save, ActionOptions } from "gadget-server";
 

/** @type { ActionRun } */
export const run = async ({ params, record }) => {
  if (!record.emailVerificationToken || 
      record.emailVerificationToken !== params.token ||
      record.emailVerificationTokenExpiration < new Date()) {
    throw new Error("Invalid or expired verification token");
  }

  record.emailVerified = true;
  record.emailVerificationToken = null;
  record.emailVerificationTokenExpiration = null;
 
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
 
  actionType: "custom",
  triggers: {
    api: true
  }
};
