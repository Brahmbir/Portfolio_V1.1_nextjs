import { NextResponse } from "next/server";
import { getXataClient } from "@/utils/xata";

const xata = getXataClient();

export const GET = async (request) => {
  const data = await xata.db.AllWorkTable.select([
    "Tittle",
    "Tags",
    "Description",
    "Image",
    "ProjectTableLink.id",
  ])
    .filter({ isHidden: false })
    .sort("createData", "desc")
    .getMany({ pagination: { size: 3 } });
  return new NextResponse(data, { status: 200 });
};
