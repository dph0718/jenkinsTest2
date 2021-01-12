import { Selector, t } from 'testcafe';

fixture`Going to Google`
    .page`http://www.google.com`;

test('My first test', async t => {
    // Test code

    console.log("Happy Loggin Test")

});

test("My second test.", async t => {
    await t.expect(false).ok()
})