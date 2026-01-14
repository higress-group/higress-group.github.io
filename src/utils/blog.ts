/**
 * Extract excerpt from markdown content
 */
export const getExcerpt = (content: string, length = 200, defaultExcerpt = ""): string => {
    try {
        const strippedContent = content.replace(/(<([^>]+)>)/gi, "");
        const plainText = strippedContent.replace(
            /[#>*-]|\[.*?\]\(.*?\)|\!\[.*?\]\(.*?\)/g,
            "",
        );
        let excerpt = plainText.substring(0, length);

        if (plainText.length > length) {
            excerpt += "...";
        }
        return excerpt;
    } catch (error) {
        return defaultExcerpt;
    }
};
