import { save, ActionOptions, DefaultEmailTemplates, Config } from "gadget-server";
import { randomBytes } from "crypto";

/** @type { ActionRun } */
export const run = async ({ record }) => {
  record.emailVerificationToken = randomBytes(32).toString('hex');
  record.emailVerificationTokenExpiration = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  await save(record);
  actionType: "custom",
  returnType; true;
  triggers: {
    api: true
  }
};

/** @type { ActionOnSuccess } */
export const onSuccess = async ({ record, emails }) => {
  if (!record.emailVerified && record.emailVerificationToken) {
    const url = new URL("/verify-email", Config.appUrl);
    url.searchParams.append("token", record.emailVerificationToken);

    await emails.sendMail({
      to: record.email,
      subject: `Verify your email with ${Config.appName}`,
      html: DefaultEmailTemplates.renderVerifyEmailTemplate({
        app_name: Config.appName,
        url: url.toString()
      })
    });
  }
};
