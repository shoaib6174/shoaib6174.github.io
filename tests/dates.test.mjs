import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, sortKey, formatRange } from '../src/lib/dates.ts';

test('year only renders as year', () => assert.equal(formatDate('2017'), '2017'));
test('year-month renders as Mon YYYY', () => assert.equal(formatDate('2023-12'), 'Dec 2023'));
test('sortKey orders year-month after bare year', () => assert.ok(sortKey('2023-12') > sortKey('2023')));
test('sortKey orders across years', () => assert.ok(sortKey('2025') > sortKey('2024-11')));
test('range with no end says now', () => assert.equal(formatRange('2025-06'), 'Jun 2025 – now'));
