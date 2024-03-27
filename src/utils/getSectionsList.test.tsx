import { getSectionsList } from './getSectionsList';

describe('getSectionsList()', () => {
  test('returns sections ids', () => {
    const result = getSectionsList(
      `<section id="display-flex" data-name="display-flex"><h2>Display: flex</h2>Some text</section>

      <section id="flex-direction"><h2>Flex-direction</h2>Some text</section>

      <section data-name="order"><h2>Order</h2>`,
    );
    const expectedResult = [
      { id: 'display-flex', level: 0, text: 'display-flex' },
      { id: 'flex-direction', level: 0, text: 'Flex-direction' },
    ];

    expect(result).toEqual(expectedResult);
  });

  test('returns empty array if there are no ids', () => {
    const result = getSectionsList(
      `<section data-name="display-flex"><h2>Display: flex</h2>Some text</section>

      <section data-name="flex-direction"><h2>Flex-direction</h2>Some text</section>`,
    );
    const expectedResult = [
      { id: 'display-flex', level: 0, text: 'display-flex' },
      { id: 'flex-direction', level: 0, text: 'flex-direction' },
    ];

    expect(result).toEqual([]);
  });
});
