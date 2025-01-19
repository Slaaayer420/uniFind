import { applyParams, save, ActionOptions } from "gadget-server";

/** @type { ActionRun } */
export const run = async ({ params, record }) => {
  applyParams(params, record);
  record.roles = ["signed-in"];
  record.lastSignedIn = new Date();
  if (params.googleProfile) {
    record.emailVerified = true;
  }
  await save(record);
};

/** @type { ActionOnSuccess } */
export const onSuccess = async ({ record, api }) => {
  if (!record.emailVerified) {
    await api.user.sendVerifyEmail.run({ id: record.id });
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
  triggers: { emailSignUp: true, googleOAuthSignUp: true }
};
