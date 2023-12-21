import $ from 'jquery'
import { createUnit } from './unit'
import { createElement } from './element'

let React = {
  render,
  createElement
}

function render(element, container) {
  // container.innerHTML = 
  let unit = createUnit(element)
  let markUp = unit.getMarkUp(0) // 返回html标记
  console.log(markUp);
  $(container).html(markUp)
}

export default React