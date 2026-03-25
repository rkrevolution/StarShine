// StarShine parser tests — run with: node test.mjs

function parseMd(md){
  const out=[];
  const blocks=md.split(/^## /m).filter(b=>b.trim());
  for(const block of blocks){
    const lines=block.trim().split('\n');
    const hdr=lines[0].trim();
    const rest=lines.slice(1).join('\n');
    let title,company;
    if(hdr.includes('|')){[title,company]=hdr.split('|').map(s=>s.trim())}
    else{title=hdr;company='My Company'}
    const sM=rest.match(/S:\s*([\s\S]*?)(?=\nT:|$)/i);
    const tM=rest.match(/T:\s*([\s\S]*?)(?=\nA:|$)/i);
    const aM=rest.match(/A:\s*([\s\S]*?)(?=\nR:|$)/i);
    const rM=rest.match(/R:\s*([\s\S]*?)$/i);
    if(title&&(sM||tM)){out.push({title,company,s:sM?sM[1].trim():'',t:tM?tM[1].trim():'',a:aM?aM[1].trim():'',r:rM?rM[1].trim():''})}
  }
  return out;
}

let passed = 0, failed = 0;
function assert(name, condition) {
  if (condition) { passed++; console.log(`  PASS: ${name}`); }
  else { failed++; console.log(`  FAIL: ${name}`); }
}

// Standard format
const r1 = parseMd(`## Product Launch | Acme Corp
S: We needed to launch a product.
T: Own the GTM strategy.
A: Conducted 25 interviews. Built battle cards.
R: Exceeded pipeline by 35%.

## Developer Adoption | TechStart
S: API platform stalled at 3K users.
T: Grow to 10K MAUs.
A: Rebuilt docs. Launched Discord.
R: Hit 12.5K MAUs.`);
assert('Parses two stories', r1.length === 2);
assert('Correct title', r1[0].title === 'Product Launch');
assert('Correct company', r1[0].company === 'Acme Corp');
assert('Has all STAR fields', r1[0].s && r1[0].t && r1[0].a && r1[0].r);

// No company
const r2 = parseMd(`## My Project\nS: Situation.\nT: Task.\nA: Action.\nR: Result.`);
assert('Defaults company to "My Company"', r2[0].company === 'My Company');

// Multi-line actions
const r3 = parseMd(`## Story | Co\nS: Situation.\nT: Task.\nA: First thing.\nThen second.\nThird.\nR: Result.`);
assert('Multi-line action preserved', r3[0].a.includes('Then second'));

// Empty input
assert('Empty input returns empty array', parseMd('').length === 0);

// Bad format
assert('No S/T/A/R returns empty', parseMd('## Just a title\nRandom text').length === 0);

// JSON round-trip
const json = JSON.stringify(r1);
const roundTrip = JSON.parse(json);
assert('JSON round-trip preserves data', roundTrip.length === 2 && roundTrip[0].title === 'Product Launch');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
