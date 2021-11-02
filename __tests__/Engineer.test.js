const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 10, 'mike@email.com', 'miketheman');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Mike', 10, 'mike@email.com', 'miketheman');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Mike', 10, 'mike@email.com', 'miketheman');

    expect(engineer.getRole()).toEqual("Engineer");
});