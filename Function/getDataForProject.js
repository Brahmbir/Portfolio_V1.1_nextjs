import { base } from "@/utils/Airtable";
import { notFound } from "next/navigation";

export default async function getData(work_ID, project_ID) {

    async function forTable(ID, Table) {
        const data = await Table.find(ID);
        return data._rawJson;
    }

    const WorkTable = base("tblgok5mwLDBss8j7")
    let Work = await forTable(work_ID, WorkTable).then(data => {
        if (!data.fields.isHidden) {
            return data
        }
        else {
            notFound();
        }
    }).catch(() => { notFound() })

    const ProjectTable = base('tblDt1W2vTRPpHtoR')
    let Proj = await forTable(project_ID, ProjectTable).catch(() => { notFound() })

    return { Work, Proj }
}