import { createRenderer } from '@vue/runtime-core'
import {
  h,
} from '@vue/runtime-dom'

const { createApp } = createRenderer({
  forcePatchProp(el, key){
    console.log('forcePatchProp')
    return false
  },
  patchProp(
    el,
    key,
    prevValue,
    nextValue,
    isSVG = false,
    prevChildren,
    parentComponent,
    parentSuspense,
    unmountChildren
  ){
    console.log('key')
    console.log(key)
    console.log('nextValue')
    console.log(nextValue);
    if(key.startsWith('on')) {
      el.addEventListener(key.substr(2).toLowerCase(), nextValue)
    } else {
      el.setAttribute(key, nextValue)
    }
  },
  insert(child, parent, anchor){
    parent.insertBefore(child, anchor || null)
  },
  remove(child){
    const parent = child.parentNode
    if(parent) {
      parent.removeNode(child)
    }
  },
  createElement(type, isSvg, isCustomizedBuiltIn){
    return document.createElement(type)
  },
  createText(text){
    console.log('createText');
    console.log(text);
    return document.createTextNode(text)
  },
  createComment(text){
    return document.createComment(text)
  },
  setText(node, text){
    console.log('setText');
    console.log(text);
    node.nodeValue = text
  },
  setElementText(el, text){
    console.log('setElementText');
    console.log(text);
    console.log(arguments)
    el.textContent = text
  },
  parentNode(node){
    return node.parentNode
  },
  nextSibling(node){
    return node.nextSibling
  },
  querySelector(selector){
    return document.querySelector(selector)
  },
  setScopeId(el, id){
    el.setAttribute(id, '')
  },
  cloneNode(el){
    return el.cloneNode(true)
  },
  insertStaticContent(){
    console.log('insertStaticContent')
    return []
  }
})

const el = document.createElement('div')
el.id = 'app'
document.body.appendChild(el)

const App = {
  render() {
    return h('div', 'ok')
  }
}

export {
  createApp
}
