import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata";

const xata = getXataClient();

export const GET = async (request) => {

    const page = await xata.db.AllWorkTable.select([
        "id",
        "ProjectTableLink.LiveLink",
      ]).filter({isHidden:false}).getPaginated({
        pagination: {
          size: 15,
        },
      });
console.log(page.records)

    return new NextResponse( JSON.stringify(page.records),{ status: 200 })


}