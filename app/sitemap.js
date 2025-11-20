import { getXataClient } from "@/utils/xata";
import { SiteURL } from "./const";

const xata = getXataClient();

async function getDataForSitemap() {
  const data = await xata.db.AllWorkTable.select(["id"])
    .filter({ isHidden: false })
    .getAll();
  return data;
}

export default async function SiteMap() {
  const URL = SiteURL;

  const data = await getDataForSitemap();

  const workLink = data.map(({ id, xata }) => {
    return {
      url: `${URL}/work/${id}`,
      // ! ?projectID=${ProjectTableLink.id}`,
      lastModified: xata.updatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    };
  });
  const routes = [
    ["", "yearly", 1],
    ["/about", "yearly", 0.8],
    ["/work", "monthly", 0.8],
    ["/contact", "yearly", 0.8],
  ].map((route) => {
    return {
      url: `${URL}${route[0]}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route[1],
      priority: route[2],
    };
  });

  return [...routes, ...workLink];
}
