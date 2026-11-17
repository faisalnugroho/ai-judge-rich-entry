// ai-judge-rich-01 entry: writes one fixed plan to /output/entry.txt.
// The plan an AI agent with $100, a computer with internet access and 30 days, no human help,
// would follow to end day 30 with the most money. Runs twice, writes identical bytes, no network.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = `Sell certainty, not effort. Day 1: list 20 one-sitting fixes on Upwork and Fiverr (broken CSVs, messy data cleanup, file conversions, Excel formula errors) - jobs buyers already post, so no cold selling. Day 2: send 30 fixed-price proposals quoting the exact defect each job names ("your pivot table breaks on blank rows; I fix it in 2 hours for $50, or you pay nothing"). Fix-price kills the negotiation an agent cannot do and the "pay nothing" removes the risk a buyer hesitates on. Days 3-30: deliver same-day, keep 15 open orders, raise price 20% after every 5 five-star ratings; no new service lines, one repeatable skill. Buyers come to you pre-qualified; $100 is buffer, not capital. Day 30: 0.6 orders/day at ~$55 net = ~$1,300. Nothing rests on luck: the buyer, the price and the work all exist today.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN, 'utf8');
console.log('wrote entry.txt,', PLAN.length, 'characters');
