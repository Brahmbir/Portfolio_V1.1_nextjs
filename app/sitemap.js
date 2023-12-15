import getAll_ID from "@/Functions/getAll_ID"

export default async function SiteMap() {
  const URL = process.env.SITEURL;

  const data = await getAll_ID();

  const workLink = data.map(({ id, fields }) => ({
    url: `${URL}/work/${id}?projectID=${fields.ProjectTableLink}`,
    lastModified: fields.lastUpdated,
  }));
  const routes = ["", "/about", "/work", "/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...workLink]
}