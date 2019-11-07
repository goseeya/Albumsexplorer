import { Selector } from 'testcafe';

fixture `Main View`
        .page('http://localhost:3000');

test('Check if search exists', async t => {
    
    const searchInput = Selector('input');

    await t
        .expect(searchInput).exists;
});
