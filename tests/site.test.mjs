import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const pages = {
  en: await readFile(new URL('../public/index.html', import.meta.url), 'utf8'),
  zh: await readFile(new URL('../public/zh/index.html', import.meta.url), 'utf8'),
};

const sectionIds = ['about', 'work', 'research', 'experience', 'awards', 'contact'];

for (const [language, html] of Object.entries(pages)) {
  test(`${language} homepage uses the shared editorial structure`, () => {
    assert.match(html, /class=(?:"[^"]*cv-home[^"]*"|cv-home)/);

    let previousIndex = -1;
    for (const id of sectionIds) {
      const index = html.search(new RegExp(`id=(?:"${id}"|${id})(?:[ >])`));
      assert.ok(index > previousIndex, `${id} must exist after the previous section`);
      previousIndex = index;
    }
  });

  test(`${language} homepage exposes real project visuals and primary links`, () => {
    assert.match(html, /georoutenet-route\.svg/);
    assert.match(html, /poetrygpt-sample\.svg/);
    assert.match(html, /arxiv\.org\/abs\/2606\.22776/);
    assert.match(html, /github\.com\/stardustlil\/GeoRouteNet/);
    assert.match(html, /github\.com\/stardustlil\/poetryGPT/);
    assert.match(html, /uploads\/resume\.pdf/);
    assert.match(html, /mailto:lixiang\.stu@yangtzeu\.edu\.cn/);
  });

  test(`${language} homepage removes template-demo decoration`, () => {
    assert.doesNotMatch(html, /<option[^>]*>Theme<\/option>/);
    assert.doesNotMatch(html, /[🔬📄🎓🏆💻]/u);
  });
}

test('localized homepages render the same shared section count', () => {
  const countSections = (html) => [...html.matchAll(/<section\b[^>]*class="([^"]+)"/g)]
    .filter(([, classes]) => classes.split(/\s+/).includes('cv-section')).length;
  assert.equal(countSections(pages.en), countSections(pages.zh));
  assert.equal(countSections(pages.en), sectionIds.length);
});

test('each homepage keeps its localized content', () => {
  assert.match(pages.en, />Selected Work<\/h2>/);
  assert.match(pages.en, />Download CV<\/span>/);
  assert.match(pages.zh, />代表成果<\/h2>/);
  assert.match(pages.zh, />下载简历<\/span>/);
  assert.match(pages.zh, /href=\/zh\/publications\/georoutenet\//);
});
