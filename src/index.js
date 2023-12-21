import React from './react'

function sayHello() {
  console.log('hello');
}
let element = React.createElement('button',
  { id: 'sayHello', style: { color: 'red', background: 'green' }, onClick: sayHello },
  'say', React.createElement('b', {}, 'Hello')
)
// 有一个 type 和 props
React.render(element, document.getElementById('root'))
// document.write("hello")