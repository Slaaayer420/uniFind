import { applyParams, save, ActionOptions } from "gadget-server"; 

/** @type { ActionRun } */

export const run = async ({ params, record, logger, api, connections }) => {
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
  triggers: { resetPassword: true }
};
