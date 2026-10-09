import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeDim, nextSort, activeYear } from '../src/lib/ui.ts';

test('computeDim is 1 when no role is active', () => assert.equal(computeDim(null, ['build']), 1));
test('computeDim is 1 for a matching item', () => assert.equal(computeDim('build', ['build', 'explain']), 1));
test('computeDim dims a non-matching item', () => assert.equal(computeDim('organise', ['build']), 0.4));
test('nextSort toggles', () => {
  assert.equal(nextSort('year'), 'country');
  assert.equal(nextSort('country'), 'year');
});
test('activeYear picks the last entry above the line', () => {
  const tops = [{ year: '2014', top: 0 }, { year: '2017', top: 500 }, { year: '2020', top: 900 }];
  assert.equal(activeYear(tops, 600), '2017');
  assert.equal(activeYear(tops, -10), null);
  assert.equal(activeYear(tops, 2000), '2020');
});
