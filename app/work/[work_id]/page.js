import styles from "@/styles/projectPage/Project.module.css";
import MarkDownStyles from "@/styles/projectPage/Markdown.module.css";

import ContactSection from "@/components/contactSection/ContactSection";
import ProjectTop from "@/components/projectPage/ProjectTop";
import ReactMarkdown from "react-markdown";

import { getXataClient } from "@/utils/xata";
import { notFound } from "next/navigation";
import { SiteURL } from "@/app/const";

const xata = getXataClient();

async function getData(id) {
  const Workdata = await xata.db.AllWorkTable.read(id);
  if (Workdata.isHidden) {
    notFound();
  }
  const Projectdata = await xata.db.ProjectTable.read(
    Workdata.ProjectTableLink.id
  );

  return { ...Workdata, Projectdata };
}

export async function generateMetadata({ params }) {
  const data = await getData(params.work_id).catch(() => {
    notFound();
  });
  let link = `${SiteURL}/work/${data.id}`;

  let description = `This is the detail page of ${data.Tittle}. ${data.Description}`;

  let openGraph = {
    title: data.Tittle,
    description: description,
    url: link,
    siteName: "Brahmbir",
    images: [
      {
        url: data.Image != undefined ? data.Image[0].url : " ",
        width: data.Image[0].attributes.width,
        height: data.Image[0].attributes.height,
        alt: `${data.Tittle}'s photos`,
      },
    ],
    type: "website",
  };
  return {
    title: { absolute: data.Tittle },
    description: description,
    alternates: {
      canonical: link,
    },
    openGraph,
  };
}

const Page = async ({ params }) => {
  let result = await getData(params.work_id).catch(() => {
    notFound();
  });
  return (
    <main>
      <section className={styles.proSect}>
        <ProjectTop data={result} />
        <ProMarkDown Markdown={result.Projectdata.Markdown} />
        {(result.Projectdata.Goal || result.Projectdata.Solution) && (
          <Conclusion
            Goal={result.Projectdata.Goal}
            Solution={result.Projectdata.Solution}
          />
        )}
      </section>
      <ContactSection />
    </main>
  );
};

function Conclusion({ Goal, Solution }) {
  return (
    <div className={styles.proSummary}>
      <h3>Executive Summary</h3>
      <div className={styles.proGS}>
        {Goal && (
          <div className={`${styles.GS} ${styles.Goal}`}>
            <p>{Goal}</p>
          </div>
        )}
        {Solution && (
          <div className={`${styles.GS} ${styles.Solution}`}>
            <p>{Solution}</p>
          </div>
        )}
      </div>
    </div>
  );
}
function ProMarkDown({ Markdown = "" }) {
  return (
    <div className={styles.proPara}>
      <ReactMarkdown className={MarkDownStyles.markdown} children={Markdown} />
    </div>
  );
}

export default Page;
