const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html')
const TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent: string): string {
    const turndownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;