import { testcafeAudit } from 'testcafe-lighthouse';
import {reportGenerate} from '../utils/utils.js';

fixture(`Homepage test`).page(process.env.ENV_HOME);

test('homepage scores desktop', async (t) => {
  const currentURL = await t.eval(() => document.documentURI);
  const lighthouseOptions = {
    emulatedFormFactor: 'desktop',
  };
  console.log('url:', currentURL);
  reportGenerate();
  await testcafeAudit({
    url: currentURL,
    opts: lighthouseOptions,
    thresholds: {
      performance: 30,
      accessibility: 30,
      'best-practices': 30,
      seo: 30,
      pwa: 30,
    },
    cdpPort: 9222,
    htmlReport: true,
    reports: {
      formats: {
        json: false,
        html: true,
        csv: false,
      },
      name: 'homepage-desktop',
      directory: 'report',
    },
  });
});

test('homepage scores mobile', async (t) => {
  const currentURL = await t.eval(() => document.documentURI);
  const lighthouseOptions = {
    emulatedFormFactor: 'mobile',
  };
  console.log('url:', currentURL);
  reportGenerate();
  await testcafeAudit({
    url: currentURL,
    opts: lighthouseOptions,
    thresholds: {
      performance: 30,
      accessibility: 30,
      'best-practices': 30,
      seo: 30,
      pwa: 30,
    },
    cdpPort: 9222,
    htmlReport: true,
    reports: {
      formats: {
        json: false,
        html: true,
        csv: false,
      },
      name: 'homepage-mobile',
      directory: 'report',
    },
  });
});