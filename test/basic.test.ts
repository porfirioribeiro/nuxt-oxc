import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm, readFile } from 'node:fs/promises';
import { x, type Options } from 'tinyexec';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

const nuxt = fileURLToPath(new URL('../bin/nuxt.mjs', import.meta.resolve('nuxt')));
const oxlint = fileURLToPath(new URL('../bin/oxlint', import.meta.resolve('oxlint')));
const basicFixturePath = fileURLToPath(new URL('./fixtures/basic', import.meta.url));

const processOptions: Partial<Options> = { nodeOptions: { stdio: 'pipe', cwd: basicFixturePath } };

describe('ssr', () => {
  it('fails to run oxlint before nuxt prepare', async () => {
    const result = await x(oxlint, [], processOptions);

    expect(result.exitCode).toBe(1);
    expect(result.stdout).toContain('Failed to parse oxlint configuration file.');
  });

  describe('after running nuxt prepare', () => {
    beforeAll(async () => {
      const result = await x(nuxt, ['prepare'], processOptions);
      expect(result.exitCode).toBe(0);
    });

    afterAll(async () => {
      await rm(resolve(basicFixturePath, '.nuxt'), { recursive: true }).catch(() => {});
    });

    it('reads the generated oxlint configuration file and checks if it contains the correct globals', async () => {
      const configFile = await readFile(resolve(basicFixturePath, '.nuxt', 'oxlint.mjs'), 'utf-8');
      expect(configFile).toContain('"defineNuxtConfig":"readonly"');
    });

    it('runs oxlint with the generated configuration file and checks if it runs without errors', async () => {
      const result = await x(oxlint, [], processOptions);
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toContain('Found 0 warnings and 0 errors.');
    });
  });
});
