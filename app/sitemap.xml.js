import getAll_ID from "@/Function/getAll_ID"

export default async function SiteMap() {
  const URL = process.env.SITEURL;

  const data = await getAll_ID();

  const workLink = data.map(({ id, fields }) => ({
    url: `${URL}/work/${id}?projectID=${fields.ProjectTableLink}`,
    lastModified: fields.lastUpdated,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
  const routes = [["","yearly",1], ["/about","yearly",0.8], ["/work","monthly",0.8], ["/contact","yearly",0.8]].map((route) => ({
    url: `${URL}${route[0]}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route[1],
    priority: route[2],
  }));

  return [...routes, ...workLink]
}