import { compile } from "json-schema-to-typescript";
import { jsonSchemaToZodDereffed } from "json-schema-to-zod";
import * as fs from "fs";
import * as json5 from "json5";

const schemata: Record<string, string> = {
  assetlist: "Assetlist",
  chain: "Chain",
  ibc_data: "IBCData",
};

async function main() {
  fs.mkdirSync("./src/types");
  fs.mkdirSync("./src/zods");

  Object.keys(schemata).map((schema) => generateTypeAndZod(schema));
}

main();

async function generateTypeAndZod(key: string) {
  if (!fs.existsSync("./src/types/index.ts")) {
    fs.writeFileSync("./src/types/index.ts", "");
  }
  if (!fs.existsSync("./src/zods/index.ts")) {
    fs.writeFileSync("./src/zods/index.ts", "");
  }

  const assetlistSchema = json5.parse(
    fs.readFileSync(`../${key}.schema.json`).toString()
  );

  compile(assetlistSchema, schemata[key]).then((ts) =>
    fs.writeFileSync(`./src/types/${schemata[key]}.ts`, ts)
  );

  fs.appendFileSync(
    "./src/types/index.ts",
    `export * from "./${schemata[key]}"\n`
  );

  const zod = await jsonSchemaToZodDereffed(assetlistSchema, {
    module: "esm",
    name: schemata[key] + "Schema",
  });

  fs.appendFileSync(
    "./src/zods/index.ts",
    `export * from "./${schemata[key]}"\n`
  );

  fs.writeFileSync(`./src/zods/${schemata[key]}.ts`, zod);
}
