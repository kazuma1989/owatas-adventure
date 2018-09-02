phina.define('AAObject', {

  superClass: 'Label',

  init(options) {
    if (typeof options === 'string') {
      const text = options;
      options = {
        text,
      };
    }

    const defaults = {
      text: '(^o^ )',
      fontFamily: 'monospace',
      fontSize: 14,
      lineHeight: 1,
      width: 40,
      height: 7,
      padding: 0,
      originX: 0,
      originY: 0,
    };

    this.superInit(Object.assign(defaults, options));
  },

});
