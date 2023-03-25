function foo (a, b) {
  function getsum () {
    return a + b
  }
  return getsum() + 1
}

foo(1, 2)
