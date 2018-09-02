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
      width: 40,
      height: 7,
    };

    this.superInit(Object.assign(defaults, options));
  },

});
