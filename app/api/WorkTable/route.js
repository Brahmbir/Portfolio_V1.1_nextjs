import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata";

const xata = getXataClient();

export const GET = async (request) => {
            
    switch (request.nextUrl.searchParams.get("type")) {
    // switch ("all") {
        case 'all':
            // data = (await table.select({sort: [{ field: "created_on", direction: "desc" }]}).all()).map(record=>record._rawJson);
            break;
        default:
            // data = (await table.select({sort: [{ field: "created_on", direction: "desc" }],filterByFormula:`FIND("${request.nextUrl.searchParams.get("type")}" ,{Type} )`}).all()).map(record=>record._rawJson);
            break;
        }
        // data = data.filter(e => !e.fields.isHidden)
        
    return new NextResponse( JSON.stringify(data),{ status: 200 })
}