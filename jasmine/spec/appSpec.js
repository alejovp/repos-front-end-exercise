// A very basic test for the functions app

describe('A function that will render the repos in the DOM', function () {
  it('should exist', function () {
    expect(showRepos).toBeDefined()
  })

  it('should return a string', function () {
    var result = showRepos([])
    expect(typeof result).toEqual('string')
  })
})

describe('A function that will render the user info in the DOM', function () {
  it('should exist', function () {
    expect(showUserData).toBeDefined()
  })
})

describe('A function that shows the error message', function () {
  it('should exist', function () {
    expect(showError).toBeDefined()
  })
})
