import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationColumn from "@/components/IntegraionColumn";
import nextjs from "@/assets/images/nextjs.svg"
import vercel from "@/assets/images/vercel.svg";
import mongoDB from "@/assets/images/mongodb-svgrepo-com.svg";
import typescript from "@/assets/images/typescript-svgrepo-com.svg";
const integrations = [
    {
        name: "Next.js",
        icon: nextjs,
        description: "Next.js is a React framework for production.",
    },
    {
        name: "Vercel",
        icon: vercel,
        description: "Vercel is the platform for frontend developers to deploy websites.",
    },
    {
        name: "MongoDB",
        icon: mongoDB,
        description: "MongoDB is a document database with the scalability and flexibility that you want.",
    },
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Typescript",
        icon: typescript,
        description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden ">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integration</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                        Tech I Use & {" "}
                            <span className="text-lime-400 ">Love</span>
                        </h2>

                        <p className="text-white/50 mt-4 text-lg ">
                            Layers seamessly connects with your favourite tools
                            and platforms. It's easy to plug into any workflow
                            and collaborate platforms.
                        </p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}