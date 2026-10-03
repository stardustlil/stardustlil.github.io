import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const pages = { en: await read('index.html'), zh: await read('zh/index.html') };

const sections = ['interests', 'publication', 'projects', 'experience', 'awards'];
const repos = ['poetryGPT', 'tsp_benchmark', 'Actor_Critic', 'flappy_bird_REINFORCE', '408-local-judge', 'errorbook-mcp', 'algorithm-templates'];

for (const [lang, html] of Object.entries(pages)) {
  test(`${lang}: sections appear in order`, () => {
    let previous = -1;
    for (const id of sections) {
      const index = html.indexOf(`id="${id}"`);
      assert.ok(index > previous, `#${id} missing or out of order`);
      previous = index;
    }
  });

  test(`${lang}: no photo and no removed copy`, () => {
    assert.doesNotMatch(html, /<img\b/);
    assert.doesNotMatch(html, /Research Assistant|研究助理|Aspiring|青年研究者|致力于|Feel free/);
  });

  test(`${lang}: primary links`, () => {
    assert.match(html, /href="mailto:lixiang\.stu@yangtzeu\.edu\.cn"/);
    assert.match(html, /href="https:\/\/arxiv\.org\/abs\/2606\.22776"/);
    assert.match(html, /href="https:\/\/github\.com\/stardustlil\/GeoRouteNet"/);
    assert.match(html, /href="\/uploads\/resume\.pdf"/);
  });

  test(`${lang}: two projects shown, the rest behind the toggle`, () => {
    const [shown, hidden] = html.split('<details');
    assert.ok(hidden, 'expand toggle missing');
    repos.forEach((repo, i) => {
      const link = `github.com/stardustlil/${repo}"`;
      assert.ok((i < 2 ? shown : hidden).includes(link), `${repo} in the wrong place`);
    });
    assert.match(hidden, /github\.com\/stardustlil\?tab=repositories/);
  });

  test(`${lang}: tour figure rendered`, () => {
    assert.match(html, /class="tour[^"]*"/);
    assert.equal(html.match(/<circle\b/g)?.length, 30);
  });
}

test('pages link to each other', () => {
  assert.match(pages.en, /<html lang="en"/);
  assert.match(pages.zh, /<html lang="zh-CN"/);
  assert.match(pages.en, /href="\/zh\/"/);
  assert.match(pages.zh, /href="\/"/);
});

test('CV and favicon are published', async () => {
  await access(new URL('../dist/uploads/resume.pdf', import.meta.url));
  await access(new URL('../dist/favicon.svg', import.meta.url));
});
