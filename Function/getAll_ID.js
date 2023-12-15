import { base } from "@/utils/Airtable";

export default async function getData() {

    const WorkTable = base("tblgok5mwLDBss8j7")
    let data = await WorkTable.select({ fields: ["ProjectTableLink", "lastUpdated", "isHidden"] }).all()

    return data.map((e) => e._rawJson).filter(e => !e.fields.isHidden)
}