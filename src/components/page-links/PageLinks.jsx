import { pageLinks } from "../../data";
import PageLink from "../page-link/PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return <PageLink link={link} key={id} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
