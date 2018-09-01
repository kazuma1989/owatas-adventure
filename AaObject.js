phina.define('AaObject', {

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
      fontFamily: 'monospace'
    };

    this.superInit(Object.assign(defaults, options));
  },

});
