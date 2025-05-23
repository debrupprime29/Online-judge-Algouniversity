import fs from 'fs/promises';
import { v4 as uuid } from 'uuid';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tempDir = path.join(__dirname, '../temp');

export const executeCpp = async (code) => {
  const jobId = uuid();
  const filePath = path.join(tempDir, `${jobId}.cpp`);
  const outPath = path.join(tempDir, `${jobId}.out`);

  await fs.mkdir(tempDir, { recursive: true });
  await fs.writeFile(filePath, code);

  return new Promise((resolve, reject) => {
    exec(`g++ ${filePath} -o ${outPath} && ${outPath}`, (err, stdout, stderr) => {
      if (err || stderr) {
        reject(new Error(stderr || 'Compilation failed'));
      } else {
        resolve(stdout);
      }
    });
  });
};
