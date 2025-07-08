const fs = require('fs');
const path = require('path');

export function validateRawGithubContent(uri, isImage) {
  const prefix =
    'https://raw.githubusercontent.com/initia-labs/initia-registry/main/';
  // Check only if initia-registry main branch
  if (!uri.startsWith(prefix)) return;

  // Get file path
  const filePath = path.join(__dirname, '../../../', uri.slice(prefix.length));

  if (!fs.existsSync(filePath)) {
    throw new Error(`File(${filePath}) doesn't exists`);
  }

  // check image size
  if (isImage) {
    const sizeLimit = uri.endsWith('.svg') ? 50 * 1024 : 100 * 1024;
    const stats = fs.statSync(filePath);
    if (stats.size > sizeLimit) {
      throw new Error(`image(${filePath}) size exceeds limit`);
    }
  }
}
