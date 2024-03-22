
const frameworks = [
    {
        name: "Next.js",
        src: "/nextjs-icon-svgrepo-com.svg",
        alt: "nextjs logo",
        href: "https://nextjs.org/"
    },
    {
        name:"MongoDB",
        src: "/mongodb-svgrepo-com.svg",
        alt: "mongoDB logo",
        href: "https://www.mongodb.com/"
    },
    {
        name: "Typescript",
        src: "/typescript-svgrepo-com.svg",
        alt: "TypeScript logo",
        href: "https://www.typescriptlang.org/"
    },
    {
        name: "Express.js",
        src: "/express-svgrepo-com.svg",
        alt: "Expressjs logo",
        href: "https://expressjs.com/"
    },
    {
        name: "React.js",
        src: "/react-svgrepo-com.svg",
        alt: "React logo",
        href: "https://es.react.dev/"
    },
    {
        name: "Jest",
        src: "/jest-snapshot-svgrepo-com.svg",
        alt: "Jest logo",
        href: "https://jestjs.io/"
    },
    {
        name: "Javascript",
        src: "/javascript-svgrepo-com.svg",
        alt: "Javascript logo",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "SQL server",
        src: "/sql-database-generic-svgrepo-com.svg",
        alt: "SQL server logo",
        href: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16"
    }, 
    {
        name: "MySQL",
        src: "/mysql-svgrepo-com.svg",
        alt: "MySQL Logo",
        href: "https://www.mysql.com/"
    },
    {
        name: "Node.js",
        src: "/nodejs-icon-svgrepo-com.svg",
        alt: "Nodejs logo",
        href: "https://nodejs.org/"
    }, 
    {
        name: "Tailwind CSS",
        src: "/tailwind-svgrepo-com.svg",
        alt: "Tailwind logo",
        href: "https://tailwindcss.com/"
    },
    {
        name: "Chakra UI",
        src: "/chakraui-svgrepo-com.svg",
        alt: "ChakraUI logo",
        href: "https://chakra-ui.com/"
    }
]


export default function MyStack() {
    return(
        <div className="space-y-2 mt-6">
            <h3 className="border-b-2 border-green-300 border-opacity-50 w-fit mb-5">My Stack</h3>
            <div className="grid grid-cols-2 gap-3  md:grid-cols-4 md:gap-3">
            {frameworks.map((framework, index) => (
                <a key={index} href={framework.href}
                className="border-2 flex items-center rounded text-sm bg-green-300 w-fit">
                    <img src={framework.src} className="mr-1 bg-white bg-cover" height={10} width={30} alt={framework.alt}/>
                    <p className="text-green-600 font-bold">{framework.name}</p>
                </a>
            ))}
            </div>
        </div>
    )
}