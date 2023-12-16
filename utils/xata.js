// Generated by Xata Codegen 0.28.1. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "AllWorkTable",
    columns: [
      { name: "LiveLink", type: "text" },
      { name: "Github", type: "text" },
      { name: "Description", type: "text" },
      { name: "Language_Framework", type: "multiple" },
      { name: "Tools", type: "multiple" },
      { name: "Type", type: "multiple" },
      { name: "Tags", type: "multiple" },
      { name: "Image", type: "file[]" },
      { name: "Roles", type: "text" },
      { name: "isHidden", type: "bool", notNull: true, defaultValue: "false" },
      { name: "Tittle", type: "string" },
      {
        name: "ProjectTableLink",
        type: "link",
        link: { table: "ProjectTable" },
        unique: true,
      },
    ],
    revLinks: [{ column: "AllWorkTable", table: "ProjectTable" }],
  },
  {
    name: "ProjectTable",
    columns: [
      { name: "Name", type: "string" },
      { name: "AllWorkTable", type: "link", link: { table: "AllWorkTable" } },
      { name: "Markdown", type: "text" },
      { name: "Goal", type: "text" },
      { name: "Solution", type: "text" },
      { name: "LiveLink", type: "text" },
    ],
    revLinks: [{ column: "ProjectTableLink", table: "AllWorkTable" }],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Brahm-bir-Singh-s-workspace-fad51i.us-east-1.xata.sh/db/PortfolioData",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};