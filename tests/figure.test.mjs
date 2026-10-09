// Checks the built output: a journey detail page whose entry has image slots but no
// images must render a captioned placeholder with the slot text. Run after `npm run build`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const page = 'dist/route/2017-debate-and-club/index.html';

test('journey detail renders a placeholder figure for each missing photo', { skip: !existsSync(page) && 'run npm run build first' }, () => {
  const html = readFileSync(page, 'utf8');
  assert.match(html, /figure placeholder/);
  assert.match(html, /best speaker award, intra-university debate, 2017/);
  assert.equal((html.match(/figure placeholder/g) ?? []).length, 3);
});
