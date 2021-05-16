import { fixture, expect } from '@open-wc/testing';
import './my-element.js';

describe('my-element', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(`<my-element></my-element>`);
  });
  it('is defined', () => {
    expect(el).to.exist;
  });
});
