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
      text: '┗(^o^ )┓\n┏┗ ',
      fontFamily: 'monospace',
      fontSize: 14,
    };

    this.superInit(Object.assign(defaults, options));
  },

});
