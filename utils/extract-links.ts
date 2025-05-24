export function extractLinks(message: string): string[] {
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  return message.match(urlRegex) || [];
}

export function containsLink(message: string): boolean {
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  return urlRegex.test(message);
}

export function replaceLinksWithAnchor(message: string): string {
  //   const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  const urlRegex = /https?:\/\/[^\s]+[a-zA-Z0-9/#]/gi;
  return message.replace(
    urlRegex,
    (url) =>
      `<a href="${url}" target="_blank" className="hover:underline text-blue-600"}>${url}</a>`
  );
}
