import { promises as fs } from "fs";
import { resolve } from "path";
import { ActionOptions } from "gadget-server";

/** @type { ActionRun } */
export const run = async ({ params, logger, api, connections }) => {
  try {
    const [universitiesData, programsData] = await Promise.all([
      fs.readFile(resolve("data", "universities.json"), "utf8"),
      fs.readFile(resolve("data", "programs.json"), "utf8")
    ]);

    let universities, programs;
    try {
      universities = JSON.parse(universitiesData);
      programs = JSON.parse(programsData);
    } catch (parseError) {
      logger.error({
        msg: "Failed to parse JSON data files",
        error: parseError.message,
        stack: parseError.stack,
        source: parseError.message.includes("universities.json") ? "universities" : "programs"
      });
      return {
        success: false,
        error: "Failed to parse university data files"
      };
    }

    if (!Array.isArray(universities) || !Array.isArray(programs)) {
      logger.error({
        msg: "Invalid data structure in files",
        universitiesIsArray: Array.isArray(universities),
        programsIsArray: Array.isArray(programs)
      });
      return {
        success: false,
        error: "Invalid data structure in university files"
      };
    }

    const isValidUniversity = universities.every(uni => 
      typeof uni === "object" &&
      Array.isArray(uni.web_pages) &&
      typeof uni.name === "string" &&
      typeof uni.alpha_two_code === "string" &&
      (uni.state_province === null || typeof uni.state_province === "string") &&
      Array.isArray(uni.domains) &&
      typeof uni.country === "string"
    );

    if (!isValidUniversity) {
      logger.error({
        msg: "Invalid university data structure",
        sample: universities[0]
      });
      return {
        success: false,
        error: "Invalid university data format"
      };
    }

    if (!programs.every(p => typeof p === "string")) {
      logger.error({
        msg: "Invalid program data structure",
        sample: programs[0]
      });
      return {
        success: false,
        error: "Invalid program data format"
      };
    }

    return {
      success: true,
      data: { universities, programs }
    };
  } catch (error) {
    logger.error({
      msg: "Failed to read university data files",
      error: error.message, 
      stack: error.stack,
      path: error.path
    });
    return {
      success: false,
      error: "Failed to read university data files"
    };
  }
};

/** @type { ActionOptions } */
export const options = { returnType: true };