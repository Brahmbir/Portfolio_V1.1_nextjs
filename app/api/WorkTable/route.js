import { NextResponse } from "next/server";
import { getXataClient } from "@/utils/xata";

const xata = getXataClient();

export const GET = async (request) => {
  let data;
  let Tag = request.nextUrl.searchParams.get("type");

  switch (Tag) {
    case "all":
      data = await xata.db.AllWorkTable.select([
        "Tittle",
        "Tags",
        "Description",
        "Image.url",
        "id",
        "Image.id",
        "Image.name",
        "Github",
      ])
        .filter({ isHidden: false })
        .sort("createData", "desc")
        .getMany();
      break;
    default:
      data = await xata.db.AllWorkTable.select([
        "id",
        "Image.id",
        "Image.name",
        "Image.url",
        "Tittle",
        "Tags",
        "Description",
        "Github",
      ])
        .filter({
          isHidden: false,
          Type: { $includes: Tag },
        })
        .sort("createData", "desc")
        .getMany();
      break;
  }
  return new NextResponse(data, { status: 200 });
};
