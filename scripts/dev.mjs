#!/usr/bin/env node
/**
 * Safe dev server start — kills stale port 3000 process and clears .next cache
 * to prevent "Cannot find module './331.js'" 500 errors.
 */
import { spawn, execSync } from 'node:child_process';
import { rmSync, existsSync } from 'node:fs';
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
  // Port already free
}

const nextDir = path.join(root, '.next');
if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
}

// Clear webpack cache if present (prevents stale chunk errors)
const webpackCache = path.join(root, 'node_modules', '.cache');
if (existsSync(webpackCache)) {
  try {
    rmSync(webpackCache, { recursive: true, force: true });
  } catch {
    // Optional cache — ignore if locked
  }
}

const child = spawn('npx', ['next', 'dev'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => process.exit(code ?? 0));
