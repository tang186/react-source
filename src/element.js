class Element {
  constructor(type, props) {
    this.type = type
    this.props = props
  }
}

function createElement(type, props, ...children) {
  props.children = children || [] // children 也是props的属性
  return new Element(type, props) // 返回的东西就叫虚拟dom
}

export {
  Element,
  createElement
}