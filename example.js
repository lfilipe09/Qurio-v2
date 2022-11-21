var styles =
    '.legalmonster-cleanslate.lm-base-root.lm-modal-root { display:none !important; } #reamazejs-container { display:none !important; } .tp-widget-wrapper{ display:none !important; } #main-html{ overflow:hidden !important; } ',
  styleSheet = document.createElement('style')
styleSheet.innerText = styles
const Wrapper = document.createElement('div')
Wrapper.setAttribute('id', 'widgets-temp-display-none')
Wrapper.appendChild(styleSheet), document.body.appendChild(Wrapper)
