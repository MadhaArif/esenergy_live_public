#!/usr/bin/env node
/**
 * Safe production build — stops dev server first to avoid .next cache corruption.
 */
import { spawn, execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

try {
  execSync('lsof -ti :3000 | xargs kill -9 2>/dev/null || true', {
    cwd: root,
    stdio: 'ignore',
    shell: true,
  });
} catch {
  // No dev server running
}

const child = spawn('npx', ['next', 'build'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => process.exit(code ?? 0));
