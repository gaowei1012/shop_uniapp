/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-12 18:43:07
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-13 22:38:50
 * @Description:
 */
export var behavior = Behavior({
  created: function created() {
    var _this = this;

    if (!this.$options) {
      return;
    }

    var cache = {};

    var _this$$options = this.$options,
      computed = _this$$options.computed;
    if (!computed) {
      return;
    }
    var keys = Object.keys(computed);

    this.calcComputed = function() {
      var needUpdate = {};
      keys.forEach(function(key) {
        var value = computed[key].call(_this);

        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value;
        }
      });
      return needUpdate;
    };
  },
  attached: function attached() {
    this.set();
  },
  methods: {
    // set data and set computed data
    set: function set(data, callback) {
      if (data) {
        this.setData(data, callback);
      }

      if (this.calcComputed) {
        this.setData(this.calcComputed());
      }
    },
  },
});
