const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Mike', 10, 'mike@email.com', 'DNU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Mike', 10, 'mike@email.com', 'DNU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Mike', 10, 'mike@email.com.com', 'DNU');

    expect(intern.getRole()).toEqual("Intern");
}); 