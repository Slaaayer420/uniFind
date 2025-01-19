import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://uni-find.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "QEFhFC500cOU",
  comment:
    "This model represents users in the application and includes fields necessary for authentication and user management.",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "QEFhFC500cOU-email",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "QEFhFC500cOU-emailVerificationToken",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "QEFhFC500cOU-emailVerificationTokenExpiration",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      validations: { required: true },
      storageKey: "QEFhFC500cOU-emailVerified",
    },
    firstName: {
      type: "string",
      storageKey: "QEFhFC500cOU-firstName",
    },
    googleImageUrl: {
      type: "url",
      storageKey: "QEFhFC500cOU-googleImageUrl",
    },
    googleProfileId: {
      type: "string",
      storageKey: "QEFhFC500cOU-googleProfileId",
    },
    lastName: { type: "string", storageKey: "QEFhFC500cOU-lastName" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "QEFhFC500cOU-lastSignedIn",
    },
    password: {
      type: "password",
      storageKey: "QEFhFC500cOU-password",
    },
    passwordResetToken: {
      type: "string",
      storageKey: "QEFhFC500cOU-passwordResetToken",
    },
    passwordResetTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "QEFhFC500cOU-passwordResetTokenExpiration",
    },
    roles: { type: "roleList", storageKey: "QEFhFC500cOU-roles" },
    sessions: {
      type: "hasMany",
      children: { model: "session", belongsToField: "user" },
      storageKey: "FBetDa819X5O",
    },
  },
};
