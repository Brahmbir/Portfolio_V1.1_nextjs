import { base } from "@/utils/Airtable"
import { getXataClient } from "@/utils/xata";


export default async function getData() {

    const WorkTable = base("tblgok5mwLDBss8j7")
    let data = await WorkTable.select({ fields: ["ProjectTableLink", "lastUpdated", "isHidden"] }).all()

    return data.map((e) => e._rawJson).filter(e => !e.fields.isHidden)
}

const xata = getXataClient();

async function getDataForSitemap(){
    const data = await xata.db.AllWorkTable.select([
        "isHidden",
        "ProjectTableLink.id",
      ]).getMany()
      console.log(data)

}