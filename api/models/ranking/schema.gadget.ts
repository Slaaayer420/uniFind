import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "ranking" model, go to https://uni-find.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "U--B9kmx64fw",
  fields: {
    language: { type: "string", storageKey: "U--B9kmx64fw-language" },
    location: { type: "string", storageKey: "eGpavtx-C1xQ" },
    program: { type: "string", storageKey: "U--B9kmx64fw-program" },
    university: { type: "string", storageKey: "xqsoqh9zBeE4" },
  },
};
