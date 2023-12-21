import { Element, createElement } from './element'
class Unit {
  constructor(element) {
    // 凡是挂载到私有属性上的都以_开头
    this._currentElement = element
  }
  // abstract getMarkUp() {  抽象类如果在子类不实现就会报错
  getMarkUp() {
    throw Error('不能实例化')
  }
}

class TextUnit extends Unit {
  getMarkUp(reactId) {
    this._reactId = reactId
    return `<span data-reactId="${reactId}">${this._currentElement}</span>`
  }
}

class NativeUnit extends Unit {
  getMarkUp(reactId) {
    this._reactId = reactId
    let { type, props } = this._currentElement
    let tagStart = `<${type}`
    let childString = ''
    let tagEnd = `<${type}>`
    for (let propsName in props) {
      if (/^on[A-Z]/.test(propsName)) {
        // 绑定事件
      } else if (propsName === 'style') {

      } else if (propsName === 'className') {

      } else if (propsName === 'children') {

      } else {
        tagStart += (` ${propsName}=${props[propsName]} `)
      }
    }
    return tagStart + '>' + childString + tagEnd
  }
}

function createUnit(element) {
  if (typeof element === 'string' || typeof element === 'number') {
    return new TextUnit(element)
  }
  if (element instanceof Element && typeof element.type === 'string') {
    return new NativeUnit(element)
  }
}

export {
  createUnit
}