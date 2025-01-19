import { applyParams, save, ActionOptions } from "gadget-server";

/** @type { ActionRun } */
export const run = async ({ params, record, logger, api, emails }) => {
  // Applies new hashed code 'resetPasswordToken' to the user record and saves to database
  applyParams(params, record);
  await save(record);
  return {
    result: "ok"
  };
};

/** @type { ActionOptions } */
export const options = {
  actionType: "custom",
  returnType: true,
  triggers: { sendResetPassword: true }
};
