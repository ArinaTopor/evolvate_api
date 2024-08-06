import { join } from 'path';
import { MemoryStoredFile } from 'nestjs-form-data';
const fsPromises = require('fs').promises; 

export async function saveMediaToStorage(file: MemoryStoredFile, type: 'image' | 'video') {
  const originalName = file.originalName;
  const url = `../../uploads/task_${type}`;
  const path = join(__dirname, url, originalName);
  await fsPromises.writeFile(path, file.buffer);
  return `/uploads/task_${type}/${originalName}`;
}