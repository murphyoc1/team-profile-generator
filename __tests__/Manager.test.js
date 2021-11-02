const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Mike', 10, 'mike@email.com', 1010);
    
    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

test('gets role of Manager', () => {
    const manager = new Manager('Mike', 10, 'mike@email.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 