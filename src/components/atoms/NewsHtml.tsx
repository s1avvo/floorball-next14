import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

export const NewsHtml = ({ html }: { html: string }) => {
	const sanitizedData = DOMPurify.sanitize(html);

	return <>{parse(sanitizedData)}</>;
};
