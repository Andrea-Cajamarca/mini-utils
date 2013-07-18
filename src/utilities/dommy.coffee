define ->
  ###
   * DOM utilities
  ###

  ###
   * Easy way to access an element's dataset when available
  ###

  in_dataset = (element, name) ->
    dataset = element.dataset
    if dataset
      return name of dataset
    else
      return element.hasAttribute("data-#{name}")

  from_dataset = (element, name) ->
    dataset = element.dataset
    if dataset
      return dataset[name]
    else
      return element.getAttribute("data-#{name}")

  element_is_empty = (element) ->
    return element.textContent.match(/^\s*$/)?

  ###
   * Easy insertion of elements relative to
   * another without a parent's reference
  ###

  insert_before = (newElement, referenceElement) ->
    parentElement = referenceElement.parentNode
    return parentElement.insertBefore(newElement, referenceElement)

  insert_after = (newElement, referenceElement) ->
    parentElement = referenceElement.parentNode
    return parentElement.insertBefore(newElement, referenceElement.nextSibling)

  replace = (newElement, referenceElement) ->
    parentElement = referenceElement.parentNode
    return parentElement.replaceChild(newElement, referenceElement)

  ###
   * Self-removal, it also removes its parents if they end up empty
  ###
  remove_itself = (element) ->
    parentNode = element.parentNode
    element.parentNode.removeChild(element)
    if parentNode.childNodes.length is 0
      remove_itself(parentNode)

  ###
   * querySelectorAll shorthand,
   * also converts the result to a real Array
  ###
  qsa = (selector, context = document) ->
    return Array::slice.call context.querySelectorAll(selector)

  ###
   * addEventListener shorthand
  ###
  listen = (target, type, subscriber) ->
    unless target
      return console.log('target is null')
    target.addEventListener(type, subscriber)

  unlisten = (target, type, subscriber) ->
    unless target
      return console.log('target is null')
    target.removeEventListener(type, subscriber)

  ###
   * Beginnings of DOM categories analysis
  ###

  PHRASING = 'phrasing'
  HEADING = 'heading'
  SECTIONING = 'sectioning'
  FLOW = 'flow'
  INTERACTIVE = 'interactive'
  METADATA = 'metadata'
  EMBEDDED = 'embedded'

  PERMITTED_CONTENT = {
    'DT': [PHRASING],
    'DD': [FLOW],
    'P': [PHRASING],
    'H1': [PHRASING],
    'H2': [PHRASING],
    'H3': [PHRASING],
    'H4': [PHRASING],
    'H5': [PHRASING],
    'H6': [PHRASING],
    'ARTICLE': [FLOW],
    'ASIDE': [FLOW],
    'NAV': [FLOW],
    'SECTION': [FLOW],
    'FIGCAPTION':[FLOW]
  }

  CONTENT_CATEGORIES = {
    'DT': [FLOW],
    'DD': [FLOW],
    'P': [FLOW],
    'H1': [FLOW, HEADING],
    'H2': [FLOW, HEADING],
    'H3': [FLOW, HEADING],
    'H4': [FLOW, HEADING],
    'H5': [FLOW, HEADING],
    'H6': [FLOW, HEADING],
    'ARTICLE': [FLOW, SECTIONING],
    'ASIDE': [FLOW, SECTIONING],
    'NAV': [FLOW, SECTIONING],
    'SECTION': [FLOW, SECTIONING],
    'FIGCAPTION': []
  }

  permits_element = (childTag, parentTag) ->
    return PERMITTED_CONTENT[parentTag].some((content) ->
      CONTENT_CATEGORIES[childTag].indexOf(content) isnt -1
    )

  return {
    listen, unlisten, qsa,
    remove_itself, element_is_empty,
    insert_before, insert_after, replace,
    from_dataset, in_dataset, permits_element
  }