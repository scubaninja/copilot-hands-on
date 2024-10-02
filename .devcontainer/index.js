function splitUrl(url) {
    try {
        const urlObj = new URL(url);
        return {
            protocol: urlObj.protocol,
            hostname: urlObj.hostname,
            port: urlObj.port,
            pathname: urlObj.pathname,
            search: urlObj.search,
            hash: urlObj.hash
        };
    } catch (error) {
        console.error('Invalid URL:', error);
        return null;
    }
}

// Example usage:
const urlParts = splitUrl('https://example.com:8080/path/name?query=string#hash');
console.log(urlParts);