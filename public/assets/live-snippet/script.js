const Demo = function () {
  const cssElem = document.querySelector('#demo-css');
  const htmlElem = document.body;
  this.textareasKeysList = ['html', 'css'];
  this.params = getUrlParams();

  this.elems = {
    css: {
      elem: cssElem,
      content: cleanCSS(cssElem.innerHTML)
    },
    html: {
      elem: htmlElem,
      content: cleanHTML(htmlElem.innerHTML)
    }
  };

  cssElem.innerHTML = '';
  htmlElem.innerHTML = '';
};

// ------------------------------

Demo.prototype.init = function () {
  this.layout = this.addLayout();

  // Textarea for editing content
  this.textareas = this.addTextareas();
  // Buttons to toggle codes columns
  this.addButtons();
  // Add iframe to show demo
  this.addIframe();
};

// ------------------------------

Demo.prototype.addIframe = function () {
  const that = this;
  const column = this.createColumn('iframe');
  const iframe = document.createElement('iframe');
  iframe.classList.add('iframe');
  iframe.src = 'about:blank';

  column.appendChild(iframe);
  this.layout.columns.appendChild(column);

  waitForIframe();

  function waitForIframe () {
    let iframeDoc;

    setTimeout(function () {
      iframeDoc = iframe.contentWindow.document;

      if (iframeDoc.readyState !== 'complete') {
        waitForIframe();
        return;
      }

      that.iframeDoc = iframeDoc;
      that.fillIframe();
      that.addHash();
      that.addActions();
    }, 500);
  }
};

// ------------------------------

Demo.prototype.fillIframe = function () {
  const iframeStyles = document.createElement('style');
  iframeStyles.innerHTML = this.elems.css.content;
  this.iframeDoc.head.appendChild(iframeStyles);

  this.iframeDoc.body.innerHTML = cleanHTML(this.elems.html.content);
};

// ------------------------------

Demo.prototype.addHash = function () {
  const hash = document.location.hash;
  this.iframeDoc.location.hash = hash;
};

// ------------------------------

Demo.prototype.addActions = function () {
  const that = this;
  const stylesElem = this.iframeDoc.querySelector('style');

  this.saveLink = this.createSaveLink();

  // Events
  this.saveLink.addEventListener('click', function () {
    that.updateSaveLink();
  });

  this.textareas.html.addEventListener('input', function () {
    that.iframeDoc.body.innerHTML = cleanHTML(this.value);
  });

  this.textareas.css.addEventListener('input', function () {
    stylesElem.innerHTML = cleanCSS(this.value);
  });
};

// ------------------------------

Demo.prototype.createSaveLink = function () {
  const source = this.iframeDoc.firstChild.outerHTML;
  const encoded = htmlToUrl(source);
  const href = 'data:text/html;base64,' + encoded;
  const pageTitle = document.title || '';

  const link = this.addLink(
    href,
    'download',
    'Download <span>result</span>'
  );
  link.setAttribute('download', pageTitle);
  link.setAttribute('title', pageTitle);
  this.layout.controls.appendChild(link);

  return link;
};

// ------------------------------

Demo.prototype.updateSaveLink = function () {
  const source = this.iframeDoc.firstChild.outerHTML;
  const encoded = htmlToUrl(source);
  const href = 'data:text/html;base64,' + encoded;
  this.saveLink.href = href;
};

// ------------------------------

Demo.prototype.addLayout = function () {
  const controls = document.createElement('div');
  controls.classList.add('controls');
  document.body.appendChild(controls);

  const columns = document.createElement('div');
  columns.classList.add('columns');
  document.body.appendChild(columns);

  return {
    controls: controls,
    columns: columns
  };
};

// ------------------------------

Demo.prototype.addButtons = function () {
  const that = this;

  this.textareasKeysList.forEach(function (key) {
    const button = document.createElement('button');
    button.classList.add('control');
    button.classList.add('control--' + key);

    if (that.params[key]) {
      button.classList.add('control--pressed');
    }

    button.innerHTML = key;
    that.layout.controls.appendChild(button);
    const column = document.querySelector('.column--' + key);

    button.addEventListener('click', function () {
      column.classList.toggle('column--collapsed');
      this.classList.toggle('control--pressed');
    });
  });

  const link = this.addLink(
    document.location.pathname,
    'direct',
    'Link <span>to demo</span>'
  );
  that.layout.controls.appendChild(link);
};

// ------------------------------

Demo.prototype.addLink = function (url, key, text) {
  const link = document.createElement('a');
  link.classList.add('link');
  link.classList.add('link--' + key);
  link.href = url;
  link.innerHTML = text;

  return link;
};

// ------------------------------

Demo.prototype.addTextareas = function () {
  const that = this;

  const textareas = this.textareasKeysList.reduce(function (prev, key) {
    const column = that.createColumn(key);

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.classList.add('textarea--' + key);
    textarea.innerHTML = that.elems[key].content;

    column.appendChild(textarea);
    that.layout.columns.appendChild(column);

    prev[key] = textarea;

    return prev;
  }, {});

  return textareas;
};

// ------------------------------

Demo.prototype.createColumn = function (key) {
  const column = document.createElement('div');
  column.classList.add('column');
  column.classList.add('column--' + key);

  if (key !== 'iframe' && !this.params[key]) {
    column.classList.add('column--collapsed');
  }

  return column;
};

// ------------------------------

function getUrlParams () {
  const urlParamsStr = document.location.search;

  if (!urlParamsStr) {
    // Without params show all tabs
    return {
      html: true,
      css: true
    };
  }

  const urlParams = urlParamsStr
    .substr(1)
    .split('&')
    .reduce(function (prev, item) {
      prev[item] = true;
      return prev;
    }, {});

  return urlParams;
}

function cleanCSS (css) {
  return css.trim();
}

function cleanHTML (html) {
  const cleanedHTML = html
    .replace(/<script id="__bs_script__">[\S\s]*<\/script>/gm, '')
    .replace(/<link href="chrome-extension[\S\s]*rel="stylesheet">/gm, '')
    .trim();

  return cleanedHTML;
}

function htmlToUrl (source) {
  const cleanCode = cleanHTML(source);
  const preparedCode = unescape(encodeURIComponent(cleanCode));
  const encoded = btoa(preparedCode);

  return encoded;
}

// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const demo = new Demo();
  demo.init();
});
