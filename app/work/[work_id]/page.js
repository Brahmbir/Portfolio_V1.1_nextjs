import getData from '@/Function/getDataForProject';
import getMetaData from "@/Function/getDataForMeta"

import styles from "@/styles/projectPage/Project.module.css"
import MarkDownStyles from "@/styles/projectPage/MarkDown.module.css"

import ContactSection from '@/components/contactSection/ContactSection';
import ProjectTop from "@/components/projectPage/ProjectTop"
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ReactMarkdown from "react-markdown"

export async function generateMetadata({ params }) {

    const data = await getMetaData(params.work_id)
    let link = `${process.env.SITEURL}/work/${data.id}?projectID=${data.fields.ProjectTableLink[0]}`

    let description = `This is the detail page of ${data.fields.Tittle}. ${data.fields.Description}`

    let openGraph = {
        title: data.fields.Tittle,
        description: description,
        url: link,
        siteName: 'Brahmbir',
        images: [
            {
                url: data.fields.Image != undefined ? data.fields.Image[0].thumbnails.large.url : " ",
                width: data.fields.Image[0].thumbnails.large.width,
                height: data.fields.Image[0].thumbnails.large.height,
                alt: `${data.fields.Tittle}'s photos`,
            },
        ],
        type: 'website',
    }
    return {
        title: { absolute: data.fields.Tittle },
        description: description,
        alternates: {
            canonical: link,
        },
        openGraph,
    }
}

const Page = async (props) => {
    let result = await getData(props.params.work_id, props.searchParams.projectID)
    return (
        <main>
            <section className={styles.proSect}>
                <ProjectTop data={result.Work.fields} />
                <ProMarkDown Markdown={result.Proj.fields.Markdown} />
                {(result.Proj.fields.Goal || result.Proj.fields.Solution) && <Conclusion Goal={result.Proj.fields.Goal} Solution={result.Proj.fields.Solution} />}
            </section>
            <ContactSection />
        </main>
    );
}

function Conclusion({ Goal, Solution }) {
    return (
        <div className={styles.proSummary} >
            <h3>Executive Summary</h3>
            <div className={styles.proGS}>
                {Goal && <div className={`${styles.GS} ${styles.Goal}`}>
                    <p>{Goal}</p>
                </div>}
                {Solution && <div className={`${styles.GS} ${styles.Solution}`}>
                    <p>{Solution}</p>
                </div>}
            </div>
        </ div>
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