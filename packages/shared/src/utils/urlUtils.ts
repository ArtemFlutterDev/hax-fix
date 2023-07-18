function getHostNameFromUrl({ url }: { url: string }): string {
  try {
    console.log('URL UTILS '+url)
    const urlInfo = new URL(url);
    const { hostname } = urlInfo;
    return hostname || '';
  } catch (error) {
    console.error(error);
  }
  return '';
}

export default {
  getHostNameFromUrl,
};
