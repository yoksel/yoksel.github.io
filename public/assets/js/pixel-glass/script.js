'use strict';

(() => {
  let controlsPanel = null;

  function pixelGlass () {
    var doc = document;
    var controlsPanel;
    var panelClass = 'controls-panel';
    var canBeDisabled = [];

    var prefix = 'pg';
    var filtersList = ['none', 'invert'];
    var statesList = ['off', 'on'];

    var currents = {
      state: getCurrent('state', statesList[1]),
      filter: getCurrent('filter', filtersList[0]),
      opacity: getCurrent('opacity', 0.5)
    };

    var targets = {
      state: {
        elem: doc.documentElement,
        attr: 'data'
      },
      filter: {
        elem: doc.body,
        attr: 'data'
      },
      opacity: {
        elem: doc.body,
        attr: 'style'
      }
    };

    // States switcher params
    var paramsStates = {
      elemTag: 'button',
      elemText: 'on',
      listName: 'states',
      itemName: 'state',
      target: targets.state,
      type: 'button',
      list: statesList,
      canDisableAll: true,
      attrs: {
        tabindex: 1
      }
    };

    // Filters switcher params
    var paramsFilters = {
      elemTag: 'button',
      elemText: 'invert',
      listName: 'filters',
      itemName: 'filter',
      target: targets.filter,
      type: 'button',
      list: filtersList,
      attrs: {
        tabindex: 2
      }
    };

    // Opacity range params
    var paramsOpacity = {
      itemName: 'opacity',
      type: 'number',
      target: targets.opacity,
      setAttr: 'style',
      attrs: {
        min: 0,
        max: 1,
        step: 0.1,
        tabindex: 3
      }
    };

    // ---------------------------------------------

    init();

    // ---------------------------------------------

    function init () {
      addExternalCSS();
      createContolsPanel();
      applyCurrentData();
    }

    // ---------------------------------------------

    function createContolsPanel () {
      var targetElem = doc.documentElement;

      var stickyPoint = doc.querySelector('.sticky-point');

      if (stickyPoint && !localStorage['pg-released']) {
        targetElem = stickyPoint;
      }
      // Override defaults for demo page
      currents.state = 'off';

      controlsPanel = doc.createElement('div');
      controlsPanel.classList.add(panelClass);
      targetElem.appendChild(controlsPanel);
      var sides = ['top', 'right', 'bottom', 'left'];

      sides.forEach(function (item) {
        var itemVal = getCurrent(item, '');
        if (itemVal) {
          controlsPanel.style[item] = itemVal;
        }
      });

      initControls();
    }

    // ---------------------------------------------

    function initControls () {
      createButton(paramsStates);
      createButton(paramsFilters);
      createInputNumber(paramsOpacity);

      createDragButton();
    }

    // ---------------------------------------------

    function createButton(params) {
      var itemName = params.itemName;
      var elemTag = params.elemTag;
      var elemText = params.elemText;
      var type = params.type;
      var list = params.list;
      var currentVal = currents[itemName];
      var attrs = params.attrs;
      var currentNum = list.indexOf(currentVal);
      var canDisableAll = params.canDisableAll;

      var id = itemName;
      var input = doc.createElement(elemTag);
      input.classList.add(panelClass + '__control', panelClass + '__control--' + type);
      input.setAttribute('type', type);
      input.setAttribute('id', id);
      input.dataset.stateNum = currentNum;

      if (attrs) {
        for (var attr in attrs) {
          input.setAttribute(attr, attrs[attr]);
        }
      }

      if (elemTag === 'button') {
        input.innerHTML = elemText;
      }

      if (!canDisableAll) {
        canBeDisabled.push(input);
      }

      controlsPanel.appendChild(input);

      input.onclick = function () {
        if (!params.target) {
          return;
        }

        currentNum = +!currentNum;
        currentVal = list[currentNum];

        input.dataset.stateNum = currentNum;
        params.target.elem.dataset[itemName] = currentVal;
        saveLocalStorage(itemName, currentVal);

        if (canDisableAll && canDisableAll === true) {
          if (currentVal === 'off') {
            removeCurrentStyles();
            disableInputs();
          } else {
            applyCurrentStyles();
            enableInputs();
          }
        }
      };
    }

    // ---------------------------------------------

    function createInputNumber(params) {
      var itemName = params.itemName;
      var attrs = params.attrs;
      var type = params.type;
      var setAttr = params.setAttr;
      var canDisableAll = params.canDisableAll;

      var id = itemName;
      var input = doc.createElement('input');
      input.classList.add(panelClass + '__control', panelClass + '__control--' + type);
      input.setAttribute('type', type);
      input.setAttribute('id', id);

      for (var attr in attrs) {
        input.setAttribute(attr, attrs[attr]);
      }
      input.setAttribute('value', currents[itemName]);

      if (!canDisableAll) {
        canBeDisabled.push(input);
      }

      controlsPanel.appendChild(input);

      input.oninput = function  () {
        if (setAttr === 'style') {
          params.target.elem.style[itemName] = this.value;
          saveLocalStorage(itemName, this.value);
        }
      };
    }

    // ---------------------------------------------

    function createDragButton () {
      var input = doc.createElement('button');
      input.classList.add(panelClass + '__control', panelClass + '__control--drag-n-drop');
      input.setAttribute('type', 'button');

      controlsPanel.appendChild(input);

      input.onmousedown = function  () {
        // Place it here to get real sizes after
        // external styles has been loaded
        var offsetLeft = controlsPanel.clientWidth - this.clientWidth;
        var styles = getComputedStyle(controlsPanel);

        controlsPanel.style.top = styles.top;
        controlsPanel.style.left = styles.left;
        controlsPanel.style.right = 'auto';
        controlsPanel.style.bottom = 'auto';

        doc.onmousemove = function (ev) {
          var x = (ev.clientX - offsetLeft) + 'px';
          var y = (ev.clientY) + 'px';

          controlsPanel.style.left = x;
          controlsPanel.style.top = y;
        };
      };

      input.onmouseup = function  () {
        var styles = getComputedStyle(controlsPanel);
        var left = +styles.left.replace(/px/, '');
        var right = +styles.right.replace(/px/, '');
        var top = +styles.top.replace(/px/, '');
        var bottom = +styles.bottom.replace(/px/, '');

        if (left > right) {
          saveLocalStorage('left', 'auto');
          saveLocalStorage('right', styles.right);

          controlsPanel.style.right = styles.right;
          controlsPanel.style.left = 'auto';
        } else {
          saveLocalStorage('left', styles.left);
          // 'auto' needs to override default position;
          saveLocalStorage('right', 'auto');
        }
        if (top > bottom) {
          saveLocalStorage('top', 'auto');
          saveLocalStorage('bottom', styles.bottom);

          controlsPanel.style.bottom = styles.bottom;
          controlsPanel.style.top = 'auto';
        } else {
          saveLocalStorage('top', styles.top);
          saveLocalStorage('bottom', 'auto');
        }

        doc.onmousemove = null;
      };
    }

    // ---------------------------------------------

    function disableInputs () {
      canBeDisabled.forEach(function (item) {
        item.setAttribute('disabled', '');
      });
    }

    // ---------------------------------------------

    function enableInputs () {
      canBeDisabled.forEach(function (item) {
        item.removeAttribute('disabled');
      });
    }

    // ---------------------------------------------

    function getCurrent(name, defaultValue) {
      var itemName = [prefix, name].join('-');
      var localStorageVal = localStorage[itemName];
      return localStorageVal || defaultValue;
    }

    // ---------------------------------------------

    function saveLocalStorage(name, value) {
      var itemName = [prefix, name].join('-');
      localStorage[itemName] = value;
    }

    // ---------------------------------------------

    function addExternalCSS () {
      var cssLink = doc.createElement('link');
      cssLink.setAttribute('rel', 'stylesheet');
      cssLink.setAttribute('href', '../assets/js/pixel-glass/styles.css');

      doc.head.appendChild(cssLink);
    }

    // ---------------------------------------------

    function applyCurrentData () {
      for (var key in targets) {
        var target = targets[key];
        var current = currents[key];

        if (!target.elem) {
          continue;
        }

        if (target.attr === 'data') {
          target.elem.dataset[key] = current;
        }
      }

      if (currents.state === 'off') {
        disableInputs();
      }
    }
    // ---------------------------------------------

    function applyCurrentStyles () {
      for (var key in targets) {
        var target = targets[key];
        var current = currents[key];

        if (!target.elem) {
          continue;
        }

        if (target.attr === 'style') {
          target.elem.style[key] = current;
        }
      }
    }

    // ---------------------------------------------

    function removeCurrentStyles () {
      for (var key in targets) {
        var target = targets[key];

        if (!target.elem) {
          continue;
        }

        if (target.attr === 'style') {
          target.elem.style[key] = '';
        }
      }
    }

    // ---------------------------------------------
  }

  // ---------------------------------------------
  //  DEMO
  // ---------------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    pixelGlass();
    runDemo();
  });

  function runDemo () {
    var doc = document;
    var stickyContainer;
    clearLocalStorage();

    if (!localStorage['pg-released']) {
      searchControlsPanel();
    }

    function searchControlsPanel () {
      controlsPanel = doc.querySelector('.controls-panel');

      if (!controlsPanel) {
        setTimeout(searchControlsPanel, 500);
      } else {
        stickyContainer = doc.querySelector('.sticky-container');
        if (!stickyContainer) {
          return;
        }

        stickyContainer.classList.add('sticky-container--filled');

        controlsPanel.addEventListener('click', takeOutPanel);
      }
    }

    // ---------------------------------------------

    function takeOutPanel () {
      var offsetTop = controlsPanel.offsetTop - window.scrollY + controlsPanel.offsetParent.offsetTop;
      var offsetLeft = controlsPanel.offsetLeft - window.scrollX + controlsPanel.offsetParent.offsetLeft;

      controlsPanel.style.position = 'fixed';
      controlsPanel.style.top = offsetTop + 'px';
      controlsPanel.style.left = offsetLeft + 'px';
      controlsPanel.style.right = 'auto';
      controlsPanel.style.bottom = 'auto';
      adjustPosition();

      doc.documentElement.appendChild(controlsPanel);

      stickyContainer.classList.add('sticky-container--collapse');

      controlsPanel.removeEventListener('click', takeOutPanel);

      // Switch off keeping state of the panel
      // localStorage['pg-released'] = 'yes';
    }

    // ---------------------------------------------

    function adjustPosition () {
      var styles = getComputedStyle(controlsPanel);
      var left = +styles.left.replace(/px/, '');
      var right = +styles.right.replace(/px/, '');
      var top = +styles.top.replace(/px/, '');
      var bottom = +styles.bottom.replace(/px/, '');

      if (left > right) {
        controlsPanel.style.right = styles.right;
        controlsPanel.style.left = 'auto';
      }

      if (top > bottom) {
        controlsPanel.style.bottom = styles.bottom;
        controlsPanel.style.top = 'auto';
      }
    }
  }

  // ---------------------------------------------

  function clearLocalStorage () {
    var list = ['pg-filter',
      'pg-opacity',
      'pg-bottom',
      'pg-top',
      'pg-left',
      'pg-right',
      'pg-state',
      'pg-released'
    ];

    list.forEach(function (item) {
      delete localStorage[item];
    });
  }
})();
