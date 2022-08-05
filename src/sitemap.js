import { writeFileSync } from "fs";
import { designProjectsLinks, softwareProjectsLinks, marketingProjectsLinks} from './utils/constants/constants'

const generateSitemap = async () => {
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.duckstudios.net/</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/software</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/graphic-design</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/marketing</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/portfolio/software</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/portfolio/graphic-design</loc>
    </url>
    <url>
        <loc>https://www.duckstudios.net/portfolio/marketing</loc>
    </url>
    ${designProjectsLinks
        .map((page) => {
            return `
          <url>
              <loc>${`https://www.duckstudios.net/portfolio/graphic-design/${page}`}</loc>
          </url>
        `;
        })
    .join( "" )}

    ${softwareProjectsLinks
        .map((page) => {
            return `
          <url>
              <loc>${`https://www.duckstudios.net/portfolio/software/${page}`}</loc>
          </url>
        `;
        })
    .join( "" )}
        
    ${marketingProjectsLinks
        .map((page) => {
            return `
          <url>
              <loc>${`https://www.duckstudios.net/portfolio/marketing/${page}`}</loc>
          </url>
        `;
        })
    .join("")}
  </urlset>
    `;

    writeFileSync("./frontend/public/sitemap.xml", sitemap);
    console.log("genarated Sitemap successfully");
    return;
};

export default generateSitemap;