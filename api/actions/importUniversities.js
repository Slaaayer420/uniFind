import { readFile } from "fs/promises";
import { join } from "path";
import { ActionOptions } from "gadget-server";

/** @type { ActionRun } */
export const run = async ({ params, logger, api, connections }) => {
  try {
    logger.info("Starting university import process");
    
    const filePath = join(process.cwd(), "data", "universities.json");
    const fileContent = await readFile(filePath, "utf8");
    
    let data;
    try {
      data = JSON.parse(fileContent);
    } catch (error) {
      logger.error("Failed to parse universities.json file", { error });
      throw new Error("Failed to parse universities data file");
    }
    
    const results = {
      total: data.universities.length,
      succeeded: 0,
      failed: 0,
      errors: []
    };

    for (const university of data.universities) {
      try {
        await api.university.create(university);
        results.succeeded++;
      } catch (error) {
        results.failed++;
        results.errors.push({ name: university.name, error: error.message });
      }
    }
    
    return results;
  } catch (error) {
    logger.error("University import failed", { error });
    throw error;
  }
};

export const options = /** @type { ActionOptions } */ ({
  triggers: { api: true },
  returnType: true
});
