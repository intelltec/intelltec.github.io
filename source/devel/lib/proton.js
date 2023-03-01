(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Proton = factory());
  })(this, (function () { 'use strict';
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
  
    var WebGLUtil = {
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method ipot
       *
       * @todo add description
       * @todo add length description
       *
       * @param {Number} length
       *
       * @return {Boolean}
       */
      ipot: function ipot(length) {
        return (length & length - 1) === 0;
      },
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method nhpot
       *
       * @todo add description
       * @todo add length description
       *
       * @param {Number} length
       *
       * @return {Number}
       */
      nhpot: function nhpot(length) {
        --length;
        for (var i = 1; i < 32; i <<= 1) {
          length = length | length >> i;
        }
        return length + 1;
      },
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method makeTranslation
       *
       * @todo add description
       * @todo add tx, ty description
       * @todo add return description
       *
       * @param {Number} tx either 0 or 1
       * @param {Number} ty either 0 or 1
       *
       * @return {Object}
       */
      makeTranslation: function makeTranslation(tx, ty) {
        return [1, 0, 0, 0, 1, 0, tx, ty, 1];
      },
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method makeRotation
       *
       * @todo add description
       * @todo add return description
       *
       * @param {Number} angleInRadians
       *
       * @return {Object}
       */
      makeRotation: function makeRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [c, -s, 0, s, c, 0, 0, 0, 1];
      },
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method makeScale
       *
       * @todo add description
       * @todo add tx, ty description
       * @todo add return description
       *
       * @param {Number} sx either 0 or 1
       * @param {Number} sy either 0 or 1
       *
       * @return {Object}
       */
      makeScale: function makeScale(sx, sy) {
        return [sx, 0, 0, 0, sy, 0, 0, 0, 1];
      },
      /**
       * @memberof Proton#Proton.WebGLUtil
       * @method matrixMultiply
       *
       * @todo add description
       * @todo add a, b description
       * @todo add return description
       *
       * @param {Object} a
       * @param {Object} b
       *
       * @return {Object}
       */
      matrixMultiply: function matrixMultiply(a, b) {
        var a00 = a[0 * 3 + 0];
        var a01 = a[0 * 3 + 1];
        var a02 = a[0 * 3 + 2];
        var a10 = a[1 * 3 + 0];
        var a11 = a[1 * 3 + 1];
        var a12 = a[1 * 3 + 2];
        var a20 = a[2 * 3 + 0];
        var a21 = a[2 * 3 + 1];
        var a22 = a[2 * 3 + 2];
        var b00 = b[0 * 3 + 0];
        var b01 = b[0 * 3 + 1];
        var b02 = b[0 * 3 + 2];
        var b10 = b[1 * 3 + 0];
        var b11 = b[1 * 3 + 1];
        var b12 = b[1 * 3 + 2];
        var b20 = b[2 * 3 + 0];
        var b21 = b[2 * 3 + 1];
        var b22 = b[2 * 3 + 2];
        return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22];
      }
    };
  
    var DomUtil = {
      /**
       * Creates and returns a new canvas. The opacity is by default set to 0
       *
       * @memberof Proton#Proton.DomUtil
       * @method createCanvas
       *
       * @param {String} $id the canvas' id
       * @param {Number} $width the canvas' width
       * @param {Number} $height the canvas' height
       * @param {String} [$position=absolute] the canvas' position, default is 'absolute'
       *
       * @return {Object}
       */
      createCanvas: function createCanvas(id, width, height, position) {
        if (position === void 0) {
          position = "absolute";
        }
        var dom = document.createElement("canvas");
        dom.id = id;
        dom.width = width;
        dom.height = height;
        dom.style.opacity = 0;
        dom.style.position = position;
        this.transform(dom, -500, -500, 0, 0);
        return dom;
      },
      createDiv: function createDiv(id, width, height) {
        var dom = document.createElement("div");
        dom.id = id;
        dom.style.position = "absolute";
        this.resize(dom, width, height);
        return dom;
      },
      resize: function resize(dom, width, height) {
        dom.style.width = width + "px";
        dom.style.height = height + "px";
        dom.style.marginLeft = -width / 2 + "px";
        dom.style.marginTop = -height / 2 + "px";
      },
      /**
       * Adds a transform: translate(), scale(), rotate() to a given div dom for all browsers
       *
       * @memberof Proton#Proton.DomUtil
       * @method transform
       *
       * @param {HTMLDivElement} div
       * @param {Number} $x
       * @param {Number} $y
       * @param {Number} $scale
       * @param {Number} $rotate
       */
      transform: function transform(div, x, y, scale, rotate) {
        div.style.willChange = "transform";
        var transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ") rotate(" + rotate + "deg)";
        this.css3(div, "transform", transform);
      },
      transform3d: function transform3d(div, x, y, scale, rotate) {
        div.style.willChange = "transform";
        var transform = "translate3d(" + x + "px, " + y + "px, 0) scale(" + scale + ") rotate(" + rotate + "deg)";
        this.css3(div, "backfaceVisibility", "hidden");
        this.css3(div, "transform", transform);
      },
      css3: function css3(div, key, val) {
        var bkey = key.charAt(0).toUpperCase() + key.substr(1);
        div.style["Webkit" + bkey] = val;
        div.style["Moz" + bkey] = val;
        div.style["O" + bkey] = val;
        div.style["ms" + bkey] = val;
        div.style["" + key] = val;
      }
    };
  
    var imgsCache = {};
    var canvasCache = {};
    var canvasId = 0;
    var ImgUtil = {
      /**
       * This will get the image data. It could be necessary to create a Proton.Zone.
       *
       * @memberof Proton#Proton.Util
       * @method getImageData
       *
       * @param {HTMLCanvasElement}   context any canvas, must be a 2dContext 'canvas.getContext('2d')'
       * @param {Object}              image   could be any dom image, e.g. document.getElementById('thisIsAnImgTag');
       * @param {Proton.Rectangle}    rect
       */
      getImageData: function getImageData(context, image, rect) {
        context.drawImage(image, rect.x, rect.y);
        var imagedata = context.getImageData(rect.x, rect.y, rect.width, rect.height);
        context.clearRect(rect.x, rect.y, rect.width, rect.height);
        return imagedata;
      },
      /**
       * @memberof Proton#Proton.Util
       * @method getImgFromCache
       *
       * @todo add description
       * @todo describe func
       *
       * @param {Mixed}               img
       * @param {Proton.Particle}     particle
       * @param {Boolean}             drawCanvas  set to true if a canvas should be saved into particle.data.canvas
       * @param {Boolean}             func
       */
      getImgFromCache: function getImgFromCache(img, callback, param) {
        var src = typeof img === "string" ? img : img.src;
        if (imgsCache[src]) {
          callback(imgsCache[src], param);
        } else {
          var image = new Image();
          image.onload = function (e) {
            imgsCache[src] = e.target;
            callback(imgsCache[src], param);
          };
          image.src = src;
        }
      },
      getCanvasFromCache: function getCanvasFromCache(img, callback, param) {
        var src = img.src;
        if (!canvasCache[src]) {
          var width = WebGLUtil.nhpot(img.width);
          var height = WebGLUtil.nhpot(img.height);
          var canvas = DomUtil.createCanvas("proton_canvas_cache_" + ++canvasId, width, height);
          var context = canvas.getContext("2d");
          context.drawImage(img, 0, 0, img.width, img.height);
          canvasCache[src] = canvas;
        }
        callback && callback(canvasCache[src], param);
        return canvasCache[src];
      }
    };
  
    var Util = {
      /**
       * Returns the default if the value is null or undefined
       *
       * @memberof Proton#Proton.Util
       * @method initValue
       *
       * @param {Mixed} value a specific value, could be everything but null or undefined
       * @param {Mixed} defaults the default if the value is null or undefined
       */
      initValue: function initValue(value, defaults) {
        value = value !== null && value !== undefined ? value : defaults;
        return value;
      },
      /**
       * Checks if the value is a valid array
       *
       * @memberof Proton#Proton.Util
       * @method isArray
       *
       * @param {Array} value Any array
       *
       * @returns {Boolean}
       */
      isArray: function isArray(value) {
        return Object.prototype.toString.call(value) === "[object Array]";
      },
      /**
       * Destroyes the given array
       *
       * @memberof Proton#Proton.Util
       * @method emptyArray
       *
       * @param {Array} array Any array
       */
      emptyArray: function emptyArray(arr) {
        if (arr) arr.length = 0;
      },
      toArray: function toArray(arr) {
        return this.isArray(arr) ? arr : [arr];
      },
      sliceArray: function sliceArray(arr1, index, arr2) {
        this.emptyArray(arr2);
        for (var i = index; i < arr1.length; i++) {
          arr2.push(arr1[i]);
        }
      },
      getRandFromArray: function getRandFromArray(arr) {
        if (!arr) return null;
        return arr[Math.floor(arr.length * Math.random())];
      },
      /**
       * Destroyes the given object
       *
       * @memberof Proton#Proton.Util
       * @method emptyObject
       *
       * @param {Object} obj Any object
       */
      emptyObject: function emptyObject(obj, ignore) {
        if (ignore === void 0) {
          ignore = null;
        }
        for (var key in obj) {
          if (ignore && ignore.indexOf(key) > -1) continue;
          delete obj[key];
        }
      },
      /**
       * Makes an instance of a class and binds the given array
       *
       * @memberof Proton#Proton.Util
       * @method classApply
       *
       * @param {Function} constructor A class to make an instance from
       * @param {Array} [args] Any array to bind it to the constructor
       *
       * @return {Object} The instance of constructor, optionally bind with args
       */
      classApply: function classApply(constructor, args) {
        if (args === void 0) {
          args = null;
        }
        if (!args) {
          return new constructor();
        } else {
          var FactoryFunc = constructor.bind.apply(constructor, [null].concat(args));
          return new FactoryFunc();
        }
      },
      /**
       * This will get the image data. It could be necessary to create a Proton.Zone.
       *
       * @memberof Proton#Proton.Util
       * @method getImageData
       *
       * @param {HTMLCanvasElement}   context any canvas, must be a 2dContext 'canvas.getContext('2d')'
       * @param {Object}              image   could be any dom image, e.g. document.getElementById('thisIsAnImgTag');
       * @param {Proton.Rectangle}    rect
       */
      getImageData: function getImageData(context, image, rect) {
        return ImgUtil.getImageData(context, image, rect);
      },
      destroyAll: function destroyAll(arr, param) {
        if (param === void 0) {
          param = null;
        }
        var i = arr.length;
        while (i--) {
          try {
            arr[i].destroy(param);
          } catch (e) {}
          delete arr[i];
        }
        arr.length = 0;
      },
      assign: function assign(target, source) {
        if (typeof Object.assign !== "function") {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
          return target;
        } else {
          return Object.assign(target, source);
        }
      }
    };
  
    var idsMap = {};
    var Puid = {
      _index: 0,
      _cache: {},
      id: function id(type) {
        if (idsMap[type] === undefined || idsMap[type] === null) idsMap[type] = 0;
        return type + "_" + idsMap[type]++;
      },
      getId: function getId(target) {
        var uid = this.getIdFromCache(target);
        if (uid) return uid;
        uid = "PUID_" + this._index++;
        this._cache[uid] = target;
        return uid;
      },
      getIdFromCache: function getIdFromCache(target) {
        var obj, id;
        for (id in this._cache) {
          obj = this._cache[id];
          if (obj === target) return id;
          if (this.isBody(obj, target) && obj.src === target.src) return id;
        }
        return null;
      },
      isBody: function isBody(obj, target) {
        return typeof obj === "object" && typeof target === "object" && obj.isInner && target.isInner;
      },
      getTarget: function getTarget(uid) {
        return this._cache[uid];
      }
    };
  
    /**
     * Pool is the cache pool of the proton engine, it is very important.
     *
     * get(target, params, uid)
     *  Class
     *    uid = Puid.getId -> Puid save target cache
     *    target.__puid = uid
     *
     *  body
     *    uid = Puid.getId -> Puid save target cache
     *
     *
     * expire(target)
     *  cache[target.__puid] push target
     *
     */
    var Pool = /*#__PURE__*/function () {
      /**
       * @memberof! Proton#
       * @constructor
       * @alias Proton.Pool
       *
       * @todo add description
       * @todo add description of properties
       *
       * @property {Number} total
       * @property {Object} cache
       */
      function Pool(num) {
        this.total = 0;
        this.cache = {};
      }
  
      /**
       * @todo add description
       *
       * @method get
       * @memberof Proton#Proton.Pool
       *
       * @param {Object|Function} target
       * @param {Object} [params] just add if `target` is a function
       *
       * @return {Object}
       */
      var _proto = Pool.prototype;
      _proto.get = function get(target, params, uid) {
        var p;
        uid = uid || target.__puid || Puid.getId(target);
        if (this.cache[uid] && this.cache[uid].length > 0) {
          p = this.cache[uid].pop();
        } else {
          p = this.createOrClone(target, params);
        }
        p.__puid = target.__puid || uid;
        return p;
      }
  
      /**
       * @todo add description
       *
       * @method set
       * @memberof Proton#Proton.Pool
       *
       * @param {Object} target
       *
       * @return {Object}
       */;
      _proto.expire = function expire(target) {
        return this.getCache(target.__puid).push(target);
      }
  
      /**
       * Creates a new class instance
       *
       * @todo add more documentation
       *
       * @method create
       * @memberof Proton#Proton.Pool
       *
       * @param {Object|Function} target any Object or Function
       * @param {Object} [params] just add if `target` is a function
       *
       * @return {Object}
       */;
      _proto.createOrClone = function createOrClone(target, params) {
        this.total++;
        if (this.create) {
          return this.create(target, params);
        } else if (typeof target === "function") {
          return Util.classApply(target, params);
        } else {
          return target.clone();
        }
      }
  
      /**
       * @todo add description - what is in the cache?
       *
       * @method getCount
       * @memberof Proton#Proton.Pool
       *
       * @return {Number}
       */;
      _proto.getCount = function getCount() {
        var count = 0;
        for (var id in this.cache) count += this.cache[id].length;
        return count++;
      }
  
      /**
       * Destroyes all items from Pool.cache
       *
       * @method destroy
       * @memberof Proton#Proton.Pool
       */;
      _proto.destroy = function destroy() {
        for (var id in this.cache) {
          this.cache[id].length = 0;
          delete this.cache[id];
        }
      }
  
      /**
       * Returns Pool.cache
       *
       * @method getCache
       * @memberof Proton#Proton.Pool
       * @private
       *
       * @param {Number} uid the unique id
       *
       * @return {Object}
       */;
      _proto.getCache = function getCache(uid) {
        if (uid === void 0) {
          uid = "default";
        }
        if (!this.cache[uid]) this.cache[uid] = [];
        return this.cache[uid];
      };
      return Pool;
    }();
  
    var Stats = /*#__PURE__*/function () {
      function Stats(proton) {
        this.proton = proton;
        this.container = null;
        this.type = 1;
        this.emitterIndex = 0;
        this.rendererIndex = 0;
      }
      var _proto = Stats.prototype;
      _proto.update = function update(style, body) {
        this.add(style, body);
        var emitter = this.getEmitter();
        var renderer = this.getRenderer();
        var str = "";
        switch (this.type) {
          case 2:
            str += "emitter:" + this.proton.emitters.length + "<br>";
            if (emitter) str += "em speed:" + emitter.emitSpeed + "<br>";
            if (emitter) str += "pos:" + this.getEmitterPos(emitter);
            break;
          case 3:
            if (emitter) str += "initializes:" + emitter.initializes.length + "<br>";
            if (emitter) str += '<span style="display:inline-block;">' + this.concatArr(emitter.initializes) + "</span><br>";
            if (emitter) str += "behaviours:" + emitter.behaviours.length + "<br>";
            if (emitter) str += '<span style="display:inline-block;">' + this.concatArr(emitter.behaviours) + "</span><br>";
            break;
          case 4:
            if (renderer) str += renderer.name + "<br>";
            if (renderer) str += "body:" + this.getCreatedNumber(renderer) + "<br>";
            break;
          default:
            str += "particles:" + this.proton.getCount() + "<br>";
            str += "pool:" + this.proton.pool.getCount() + "<br>";
            str += "total:" + this.proton.pool.total;
        }
        this.container.innerHTML = str;
      };
      _proto.add = function add(style, body) {
        var _this = this;
        if (!this.container) {
          this.type = 1;
          this.container = document.createElement("div");
          this.container.style.cssText = ["position:absolute;bottom:0px;left:0;cursor:pointer;", "opacity:0.9;z-index:10000;padding:10px;font-size:12px;font-family:Helvetica,Arial,sans-serif;", "width:120px;height:50px;background-color:#002;color:#0ff;"].join("");
          this.container.addEventListener("click", function (e) {
            _this.type++;
            if (_this.type > 4) _this.type = 1;
          }, false);
          var bg, color;
          switch (style) {
            case 2:
              bg = "#201";
              color = "#f08";
              break;
            case 3:
              bg = "#020";
              color = "#0f0";
              break;
            default:
              bg = "#002";
              color = "#0ff";
          }
          this.container.style["background-color"] = bg;
          this.container.style["color"] = color;
        }
        if (!this.container.parentNode) {
          body = body || this.body || document.body;
          body.appendChild(this.container);
        }
      };
      _proto.getEmitter = function getEmitter() {
        return this.proton.emitters[this.emitterIndex];
      };
      _proto.getRenderer = function getRenderer() {
        return this.proton.renderers[this.rendererIndex];
      };
      _proto.concatArr = function concatArr(arr) {
        var result = "";
        if (!arr || !arr.length) return result;
        for (var i = 0; i < arr.length; i++) {
          result += (arr[i].name || "").substr(0, 1) + ".";
        }
        return result;
      };
      _proto.getCreatedNumber = function getCreatedNumber(renderer) {
        return renderer.pool.total || renderer.cpool && renderer.cpool.total || 0;
      };
      _proto.getEmitterPos = function getEmitterPos(e) {
        return Math.round(e.p.x) + "," + Math.round(e.p.y);
      };
      _proto.destroy = function destroy() {
        if (this.container && this.container.parentNode) {
          var body = this.body || document.body;
          body.removeChild(this.container);
        }
        this.proton = null;
        this.container = null;
      };
      return Stats;
    }();
  
    /*
     * EventDispatcher
     * This code reference since http://createjs.com/.
     *
     **/
    var EventDispatcher = /*#__PURE__*/function () {
      function EventDispatcher() {
        this._listeners = null;
      }
      EventDispatcher.bind = function bind(target) {
        target.prototype.dispatchEvent = EventDispatcher.prototype.dispatchEvent;
        target.prototype.hasEventListener = EventDispatcher.prototype.hasEventListener;
        target.prototype.addEventListener = EventDispatcher.prototype.addEventListener;
        target.prototype.removeEventListener = EventDispatcher.prototype.removeEventListener;
        target.prototype.removeAllEventListeners = EventDispatcher.prototype.removeAllEventListeners;
      };
      var _proto = EventDispatcher.prototype;
      _proto.addEventListener = function addEventListener(type, listener) {
        if (!this._listeners) {
          this._listeners = {};
        } else {
          this.removeEventListener(type, listener);
        }
        if (!this._listeners[type]) this._listeners[type] = [];
        this._listeners[type].push(listener);
        return listener;
      };
      _proto.removeEventListener = function removeEventListener(type, listener) {
        if (!this._listeners) return;
        if (!this._listeners[type]) return;
        var arr = this._listeners[type];
        var length = arr.length;
        for (var i = 0; i < length; i++) {
          if (arr[i] === listener) {
            if (length === 1) {
              delete this._listeners[type];
            }
  
            // allows for faster checks.
            else {
              arr.splice(i, 1);
            }
            break;
          }
        }
      };
      _proto.removeAllEventListeners = function removeAllEventListeners(type) {
        if (!type) this._listeners = null;else if (this._listeners) delete this._listeners[type];
      };
      _proto.dispatchEvent = function dispatchEvent(type, args) {
        var result = false;
        var listeners = this._listeners;
        if (type && listeners) {
          var arr = listeners[type];
          if (!arr) return result;
  
          // arr = arr.slice();
          // to avoid issues with items being removed or added during the dispatch
  
          var handler;
          var i = arr.length;
          while (i--) {
            handler = arr[i];
            result = result || handler(args);
          }
        }
        return !!result;
      };
      _proto.hasEventListener = function hasEventListener(type) {
        var listeners = this._listeners;
        return !!(listeners && listeners[type]);
      };
      return EventDispatcher;
    }();
  
    var PI = 3.1415926;
    var INFINITY = Infinity;
    var MathUtil = {
      PI: PI,
      PIx2: PI * 2,
      PI_2: PI / 2,
      PI_180: PI / 180,
      N180_PI: 180 / PI,
      Infinity: -999,
      isInfinity: function isInfinity(num) {
        return num === this.Infinity || num === INFINITY;
      },
      randomAToB: function randomAToB(a, b, isInt) {
        if (isInt === void 0) {
          isInt = false;
        }
        if (!isInt) return a + Math.random() * (b - a);else return (Math.random() * (b - a) >> 0) + a;
      },
      randomFloating: function randomFloating(center, f, isInt) {
        return this.randomAToB(center - f, center + f, isInt);
      },
      randomColor: function randomColor() {
        return "#" + ("00000" + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
      },
      randomZone: function randomZone(display) {},
      floor: function floor(num, k) {
        if (k === void 0) {
          k = 4;
        }
        var digits = Math.pow(10, k);
        return Math.floor(num * digits) / digits;
      },
      degreeTransform: function degreeTransform(a) {
        return a * PI / 180;
      },
      toColor16: function toColor16(num) {
        return "#" + num.toString(16);
      }
    };
  
    var Integration = /*#__PURE__*/function () {
      function Integration(type) {
        this.type = type;
      }
      var _proto = Integration.prototype;
      _proto.calculate = function calculate(particles, time, damping) {
        this.eulerIntegrate(particles, time, damping);
      }
  
      // Euler Integrate
      // https://rosettacode.org/wiki/Euler_method
      ;
      _proto.eulerIntegrate = function eulerIntegrate(particle, time, damping) {
        if (!particle.sleep) {
          particle.old.p.copy(particle.p);
          particle.old.v.copy(particle.v);
          particle.a.multiplyScalar(1 / particle.mass);
          particle.v.add(particle.a.multiplyScalar(time));
          particle.p.add(particle.old.v.multiplyScalar(time));
          if (damping) particle.v.multiplyScalar(damping);
          particle.a.clear();
        }
      };
      return Integration;
    }();
  
    var Proton = /*#__PURE__*/function () {
      // measure 1:100
  
      // event name
  
      /**
       * The constructor to add emitters
       *
       * @constructor Proton
       *
       * @todo proParticleCount is not in use
       * @todo add more documentation of the single properties and parameters
       *
       * @param {Number} [proParticleCount] not in use?
       * @param {Number} [integrationType=Proton.EULER]
       *
       * @property {String} [integrationType=Proton.EULER]
       * @property {Array} emitters   All added emitter
       * @property {Array} renderers  All added renderer
       * @property {Number} time      The active time
       * @property {Number} oldtime   The old time
       */
      function Proton(integrationType) {
        this.emitters = [];
        this.renderers = [];
        this.time = 0;
        this.now = 0;
        this.then = 0;
        this.elapsed = 0;
        this.stats = new Stats(this);
        this.pool = new Pool(80);
        this.integrationType = Util.initValue(integrationType, Proton.EULER);
        this.integrator = new Integration(this.integrationType);
        this._fps = "auto";
        this._interval = Proton.DEFAULT_INTERVAL;
      }
      var _proto = Proton.prototype;
      /**
       * add a type of Renderer
       *
       * @method addRenderer
       * @memberof Proton
       * @instance
       *
       * @param {Renderer} render
       */
      _proto.addRenderer = function addRenderer(render) {
        render.init(this);
        this.renderers.push(render);
      }
  
      /**
       * @name add a type of Renderer
       *
       * @method addRenderer
       * @param {Renderer} render
       */;
      _proto.removeRenderer = function removeRenderer(render) {
        var index = this.renderers.indexOf(render);
        this.renderers.splice(index, 1);
        render.remove(this);
      }
  
      /**
       * add the Emitter
       *
       * @method addEmitter
       * @memberof Proton
       * @instance
       *
       * @param {Emitter} emitter
       */;
      _proto.addEmitter = function addEmitter(emitter) {
        this.emitters.push(emitter);
        emitter.parent = this;
        this.dispatchEvent(Proton.EMITTER_ADDED, emitter);
      }
  
      /**
       * Removes an Emitter
       *
       * @method removeEmitter
       * @memberof Proton
       * @instance
       *
       * @param {Proton.Emitter} emitter
       */;
      _proto.removeEmitter = function removeEmitter(emitter) {
        var index = this.emitters.indexOf(emitter);
        this.emitters.splice(index, 1);
        emitter.parent = null;
        this.dispatchEvent(Proton.EMITTER_REMOVED, emitter);
      }
  
      /**
       * Updates all added emitters
       *
       * @method update
       * @memberof Proton
       * @instance
       */;
      _proto.update = function update() {
        // 'auto' is the default browser refresh rate, the vast majority is 60fps
        if (this._fps === "auto") {
          this.dispatchEvent(Proton.PROTON_UPDATE);
          if (Proton.USE_CLOCK) {
            if (!this.then) this.then = new Date().getTime();
            this.now = new Date().getTime();
            this.elapsed = (this.now - this.then) * 0.001;
            // Fix bugs such as chrome browser switching tabs causing excessive time difference
            this.amendChangeTabsBug();
            if (this.elapsed > 0) this.emittersUpdate(this.elapsed);
            this.then = this.now;
          } else {
            this.emittersUpdate(Proton.DEFAULT_INTERVAL);
          }
          this.dispatchEvent(Proton.PROTON_UPDATE_AFTER);
        }
  
        // If the fps frame rate is set
        else {
          if (!this.then) this.then = new Date().getTime();
          this.now = new Date().getTime();
          this.elapsed = (this.now - this.then) * 0.001;
          if (this.elapsed > this._interval) {
            this.dispatchEvent(Proton.PROTON_UPDATE);
            this.emittersUpdate(this._interval);
            // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
            this.then = this.now - this.elapsed % this._interval * 1000;
            this.dispatchEvent(Proton.PROTON_UPDATE_AFTER);
          }
        }
      };
      _proto.emittersUpdate = function emittersUpdate(elapsed) {
        var i = this.emitters.length;
        while (i--) this.emitters[i].update(elapsed);
      }
  
      /**
       * @todo add description
       *
       * @method amendChangeTabsBug
       * @memberof Proton
       * @instance
       */;
      _proto.amendChangeTabsBug = function amendChangeTabsBug() {
        if (!Proton.amendChangeTabsBug) return;
        if (this.elapsed > 0.5) {
          this.then = new Date().getTime();
          this.elapsed = 0;
        }
      }
  
      /**
       * Counts all particles from all emitters
       *
       * @method getCount
       * @memberof Proton
       * @instance
       */;
      _proto.getCount = function getCount() {
        var total = 0;
        var i = this.emitters.length;
        while (i--) total += this.emitters[i].particles.length;
        return total;
      };
      _proto.getAllParticles = function getAllParticles() {
        var particles = [];
        var i = this.emitters.length;
        while (i--) particles = particles.concat(this.emitters[i].particles);
        return particles;
      };
      _proto.destroyAllEmitters = function destroyAllEmitters() {
        Util.destroyAll(this.emitters);
      }
  
      /**
       * Destroys everything related to this Proton instance. This includes all emitters, and all properties
       *
       * @method destroy
       * @memberof Proton
       * @instance
       */;
      _proto.destroy = function destroy(remove) {
        var _this = this;
        if (remove === void 0) {
          remove = false;
        }
        var destroyOther = function destroyOther() {
          _this.time = 0;
          _this.then = 0;
          _this.pool.destroy();
          _this.stats.destroy();
          Util.destroyAll(_this.emitters);
          Util.destroyAll(_this.renderers, _this.getAllParticles());
          _this.integrator = null;
          _this.renderers = null;
          _this.emitters = null;
          _this.stats = null;
          _this.pool = null;
        };
        if (remove) {
          setTimeout(destroyOther, 200);
        } else {
          destroyOther();
        }
      };
      _createClass(Proton, [{
        key: "fps",
        get: function get() {
          return this._fps;
        },
        set: function set(fps) {
          this._fps = fps;
          this._interval = fps === "auto" ? Proton.DEFAULT_INTERVAL : MathUtil.floor(1 / fps, 7);
        }
      }]);
      return Proton;
    }();
    Proton.USE_CLOCK = false;
    Proton.MEASURE = 100;
    Proton.EULER = "euler";
    Proton.RK2 = "runge-kutta2";
    Proton.PARTICLE_CREATED = "PARTICLE_CREATED";
    Proton.PARTICLE_UPDATE = "PARTICLE_UPDATE";
    Proton.PARTICLE_SLEEP = "PARTICLE_SLEEP";
    Proton.PARTICLE_DEAD = "PARTICLE_DEAD";
    Proton.EMITTER_ADDED = "EMITTER_ADDED";
    Proton.EMITTER_REMOVED = "EMITTER_REMOVED";
    Proton.PROTON_UPDATE = "PROTON_UPDATE";
    Proton.PROTON_UPDATE_AFTER = "PROTON_UPDATE_AFTER";
    Proton.DEFAULT_INTERVAL = 0.0167;
    Proton.amendChangeTabsBug = true;
    EventDispatcher.bind(Proton);
  
    var Rgb = /*#__PURE__*/function () {
      function Rgb(r, g, b) {
        if (r === void 0) {
          r = 255;
        }
        if (g === void 0) {
          g = 255;
        }
        if (b === void 0) {
          b = 255;
        }
        this.r = r;
        this.g = g;
        this.b = b;
      }
      var _proto = Rgb.prototype;
      _proto.reset = function reset() {
        this.r = 255;
        this.g = 255;
        this.b = 255;
      };
      return Rgb;
    }();
  
    var PropUtil = {
      hasProp: function hasProp(target, key) {
        if (!target) return false;
        return target[key] !== undefined;
        // return obj.hasOwnProperty(key);
      },
      /**
       * set the prototype in a given prototypeObject
       *
       * @memberof Proton#Proton.Util
       * @method setProp
       *
       * @todo add description for param `target`
       * @todo translate desription from chinese to english
       *
       * @param {Object} target
       * @param {Object} prototypeObject An object of single prototypes
       *
       * @return {Object} target
       */
      setProp: function setProp(target, props) {
        for (var prop in props) {
          if (target.hasOwnProperty(prop)) {
            target[prop] = Span.getSpanValue(props[prop]);
          }
        }
        return target;
      },
      /**
       * @memberof Proton#Proton.Util
       * @method setVectorVal
       *
       * @todo add description for param `target`
       * @todo add description for param `conf`
       * @todo add description for function
       *
       * @param {Object} target
       * @param {Object} conf
       */
      setVectorVal: function setVectorVal(particle, conf) {
        if (conf === void 0) {
          conf = null;
        }
        if (!conf) return;
        if (this.hasProp(conf, "x")) particle.p.x = conf["x"];
        if (this.hasProp(conf, "y")) particle.p.y = conf["y"];
        if (this.hasProp(conf, "vx")) particle.v.x = conf["vx"];
        if (this.hasProp(conf, "vy")) particle.v.y = conf["vy"];
        if (this.hasProp(conf, "ax")) particle.a.x = conf["ax"];
        if (this.hasProp(conf, "ay")) particle.a.y = conf["ay"];
        if (this.hasProp(conf, "p")) particle.p.copy(conf["p"]);
        if (this.hasProp(conf, "v")) particle.v.copy(conf["v"]);
        if (this.hasProp(conf, "a")) particle.a.copy(conf["a"]);
        if (this.hasProp(conf, "position")) particle.p.copy(conf["position"]);
        if (this.hasProp(conf, "velocity")) particle.v.copy(conf["velocity"]);
        if (this.hasProp(conf, "accelerate")) particle.a.copy(conf["accelerate"]);
      }
    };
  
    var ease = {
      easeLinear: function easeLinear(value) {
        return value;
      },
      easeInQuad: function easeInQuad(value) {
        return Math.pow(value, 2);
      },
      easeOutQuad: function easeOutQuad(value) {
        return -(Math.pow(value - 1, 2) - 1);
      },
      easeInOutQuad: function easeInOutQuad(value) {
        if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 2);
        return -0.5 * ((value -= 2) * value - 2);
      },
      easeInCubic: function easeInCubic(value) {
        return Math.pow(value, 3);
      },
      easeOutCubic: function easeOutCubic(value) {
        return Math.pow(value - 1, 3) + 1;
      },
      easeInOutCubic: function easeInOutCubic(value) {
        if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 3);
        return 0.5 * (Math.pow(value - 2, 3) + 2);
      },
      easeInQuart: function easeInQuart(value) {
        return Math.pow(value, 4);
      },
      easeOutQuart: function easeOutQuart(value) {
        return -(Math.pow(value - 1, 4) - 1);
      },
      easeInOutQuart: function easeInOutQuart(value) {
        if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 4);
        return -0.5 * ((value -= 2) * Math.pow(value, 3) - 2);
      },
      easeInSine: function easeInSine(value) {
        return -Math.cos(value * MathUtil.PI_2) + 1;
      },
      easeOutSine: function easeOutSine(value) {
        return Math.sin(value * MathUtil.PI_2);
      },
      easeInOutSine: function easeInOutSine(value) {
        return -0.5 * (Math.cos(Math.PI * value) - 1);
      },
      easeInExpo: function easeInExpo(value) {
        return value === 0 ? 0 : Math.pow(2, 10 * (value - 1));
      },
      easeOutExpo: function easeOutExpo(value) {
        return value === 1 ? 1 : -Math.pow(2, -10 * value) + 1;
      },
      easeInOutExpo: function easeInOutExpo(value) {
        if (value === 0) return 0;
        if (value === 1) return 1;
        if ((value /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (value - 1));
        return 0.5 * (-Math.pow(2, -10 * --value) + 2);
      },
      easeInCirc: function easeInCirc(value) {
        return -(Math.sqrt(1 - value * value) - 1);
      },
      easeOutCirc: function easeOutCirc(value) {
        return Math.sqrt(1 - Math.pow(value - 1, 2));
      },
      easeInOutCirc: function easeInOutCirc(value) {
        if ((value /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - value * value) - 1);
        return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
      },
      easeInBack: function easeInBack(value) {
        var s = 1.70158;
        return value * value * ((s + 1) * value - s);
      },
      easeOutBack: function easeOutBack(value) {
        var s = 1.70158;
        return (value = value - 1) * value * ((s + 1) * value + s) + 1;
      },
      easeInOutBack: function easeInOutBack(value) {
        var s = 1.70158;
        if ((value /= 0.5) < 1) return 0.5 * (value * value * (((s *= 1.525) + 1) * value - s));
        return 0.5 * ((value -= 2) * value * (((s *= 1.525) + 1) * value + s) + 2);
      },
      getEasing: function getEasing(ease) {
        if (typeof ease === "function") return ease;else return this[ease] || this.easeLinear;
      }
    };
  
    var Vector2D = /*#__PURE__*/function () {
      function Vector2D(x, y) {
        this.x = x || 0;
        this.y = y || 0;
      }
      var _proto = Vector2D.prototype;
      _proto.set = function set(x, y) {
        this.x = x;
        this.y = y;
        return this;
      };
      _proto.setX = function setX(x) {
        this.x = x;
        return this;
      };
      _proto.setY = function setY(y) {
        this.y = y;
        return this;
      };
      _proto.getGradient = function getGradient() {
        if (this.x !== 0) return Math.atan2(this.y, this.x);else if (this.y > 0) return MathUtil.PI_2;else if (this.y < 0) return -MathUtil.PI_2;
      };
      _proto.copy = function copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
      };
      _proto.add = function add(v, w) {
        if (w !== undefined) {
          return this.addVectors(v, w);
        }
        this.x += v.x;
        this.y += v.y;
        return this;
      };
      _proto.addXY = function addXY(a, b) {
        this.x += a;
        this.y += b;
        return this;
      };
      _proto.addVectors = function addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
      };
      _proto.sub = function sub(v, w) {
        if (w !== undefined) {
          return this.subVectors(v, w);
        }
        this.x -= v.x;
        this.y -= v.y;
        return this;
      };
      _proto.subVectors = function subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
      };
      _proto.divideScalar = function divideScalar(s) {
        if (s !== 0) {
          this.x /= s;
          this.y /= s;
        } else {
          this.set(0, 0);
        }
        return this;
      };
      _proto.multiplyScalar = function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        return this;
      };
      _proto.negate = function negate() {
        return this.multiplyScalar(-1);
      };
      _proto.dot = function dot(v) {
        return this.x * v.x + this.y * v.y;
      };
      _proto.lengthSq = function lengthSq() {
        return this.x * this.x + this.y * this.y;
      };
      _proto.length = function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };
      _proto.normalize = function normalize() {
        return this.divideScalar(this.length());
      };
      _proto.distanceTo = function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      };
      _proto.rotate = function rotate(tha) {
        var x = this.x;
        var y = this.y;
        this.x = x * Math.cos(tha) + y * Math.sin(tha);
        this.y = -x * Math.sin(tha) + y * Math.cos(tha);
        return this;
      };
      _proto.distanceToSquared = function distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        return dx * dx + dy * dy;
      };
      _proto.lerp = function lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
      };
      _proto.equals = function equals(v) {
        return v.x === this.x && v.y === this.y;
      };
      _proto.clear = function clear() {
        this.x = 0.0;
        this.y = 0.0;
        return this;
      };
      _proto.clone = function clone() {
        return new Vector2D(this.x, this.y);
      };
      return Vector2D;
    }();
  
    /** @typedef {import('../behaviour/Behaviour')} Behaviour */
    var Particle = /*#__PURE__*/function () {
      /** @type string */
  
      /** @type {{p:Vector2D,v:Vector2D,a:Vector2D}} */
  
      /** @type {object} */
  
      /** @type {Behaviour[]} */
  
      /** @type {Vector2D} */
  
      /** @type {Vector2D} */
  
      /** @type {Vector2D} */
  
      /** @type {Rgb} */
  
      /**
       * the Particle class
       *
       * @class Proton.Particle
       * @constructor
       * @param {Object} pObj the parameters object;
       * for example {life:3,dead:false}
       */
      function Particle(conf) {
        this.id = "";
        this.old = null;
        this.data = null;
        this.behaviours = null;
        this.p = null;
        this.v = null;
        this.a = null;
        this.rgb = null;
        /**
         * The particle's id;
         * @property id
         * @type {string}
         */
        this.name = "Particle";
        this.id = Puid.id(this.name);
        this.old = {};
        this.data = {};
        this.behaviours = [];
        this.p = new Vector2D();
        this.v = new Vector2D();
        this.a = new Vector2D();
        this.old.p = new Vector2D();
        this.old.v = new Vector2D();
        this.old.a = new Vector2D();
        this.rgb = new Rgb();
        this.reset();
        conf && PropUtil.setProp(this, conf);
      }
      var _proto = Particle.prototype;
      _proto.getDirection = function getDirection() {
        return Math.atan2(this.v.x, -this.v.y) * MathUtil.N180_PI;
      };
      _proto.reset = function reset() {
        this.life = Infinity;
        this.age = 0;
        this.dead = false;
        this.sleep = false;
        this.body = null;
        this.sprite = null;
        this.parent = null;
        this.energy = 1; // Energy Loss
        this.mass = 1;
        this.radius = 10;
        this.alpha = 1;
        this.scale = 1;
        this.rotation = 0;
        this.color = null;
        this.p.set(0, 0);
        this.v.set(0, 0);
        this.a.set(0, 0);
        this.old.p.set(0, 0);
        this.old.v.set(0, 0);
        this.old.a.set(0, 0);
        this.easing = ease.easeLinear;
        this.rgb.reset();
        Util.emptyObject(this.data);
        this.removeAllBehaviours();
        return this;
      };
      _proto.update = function update(time, index) {
        if (!this.sleep) {
          this.age += time;
          this.applyBehaviours(time, index);
        }
        if (this.age < this.life) {
          var scale = this.easing(this.age / this.life);
          this.energy = Math.max(1 - scale, 0);
        } else {
          this.destroy();
        }
      };
      _proto.applyBehaviours = function applyBehaviours(time, index) {
        var length = this.behaviours.length;
        var i;
        for (i = 0; i < length; i++) {
          this.behaviours[i] && this.behaviours[i].applyBehaviour(this, time, index);
        }
      }
  
      /**
       * @param {Behaviour} behaviour
       */;
      _proto.addBehaviour = function addBehaviour(behaviour) {
        this.behaviours.push(behaviour);
        if (behaviour.hasOwnProperty("parents")) behaviour.parents.push(this);
        behaviour.initialize(this);
      }
  
      /**
       * @param {Behaviour[]} behaviours
       */;
      _proto.addBehaviours = function addBehaviours(behaviours) {
        var length = behaviours.length;
        var i;
        for (i = 0; i < length; i++) {
          this.addBehaviour(behaviours[i]);
        }
      };
      _proto.removeBehaviour = function removeBehaviour(behaviour) {
        var index = this.behaviours.indexOf(behaviour);
        if (index > -1) {
          var _behaviour = this.behaviours.splice(index, 1);
          _behaviour.parents = null;
        }
      };
      _proto.removeAllBehaviours = function removeAllBehaviours() {
        Util.emptyArray(this.behaviours);
      }
  
      /**
       * Destory this particle
       * @method destroy
       */;
      _proto.destroy = function destroy() {
        this.removeAllBehaviours();
        this.energy = 0;
        this.dead = true;
        this.parent = null;
      };
      return Particle;
    }();
  
    var ColorUtil = {
      /**
       * @typedef  {Object} rgbObject
       * @property {Number} r red value
       * @property {Number} g green value
       * @property {Number} b blue value
       */
      /**
       * converts a hex value to a rgb object
       *
       * @memberof Proton#Proton.Util
       * @method hexToRgb
       *
       * @param {String} h any hex value, e.g. #000000 or 000000 for black
       *
       * @return {rgbObject}
       */
      hexToRgb: function hexToRgb(h) {
        var hex16 = h.charAt(0) === "#" ? h.substring(1, 7) : h;
        var r = parseInt(hex16.substring(0, 2), 16);
        var g = parseInt(hex16.substring(2, 4), 16);
        var b = parseInt(hex16.substring(4, 6), 16);
        return {
          r: r,
          g: g,
          b: b
        };
      },
      /**
       * converts a rgb value to a rgb string
       *
       * @memberof Proton#Proton.Util
       * @method rgbToHex
       *
       * @param {Object | Proton.hexToRgb} rgb a rgb object like in {@link Proton#Proton.}
       *
       * @return {String} rgb()
       */
      rgbToHex: function rgbToHex(rbg) {
        return "rgb(" + rbg.r + ", " + rbg.g + ", " + rbg.b + ")";
      },
      getHex16FromParticle: function getHex16FromParticle(p) {
        return Number(p.rgb.r) * 65536 + Number(p.rgb.g) * 256 + Number(p.rgb.b);
      }
    };
  
    var Polar2D = /*#__PURE__*/function () {
      function Polar2D(r, tha) {
        this.r = Math.abs(r) || 0;
        this.tha = tha || 0;
      }
      var _proto = Polar2D.prototype;
      _proto.set = function set(r, tha) {
        this.r = r;
        this.tha = tha;
        return this;
      };
      _proto.setR = function setR(r) {
        this.r = r;
        return this;
      };
      _proto.setTha = function setTha(tha) {
        this.tha = tha;
        return this;
      };
      _proto.copy = function copy(p) {
        this.r = p.r;
        this.tha = p.tha;
        return this;
      };
      _proto.toVector = function toVector() {
        return new Vector2D(this.getX(), this.getY());
      };
      _proto.getX = function getX() {
        return this.r * Math.sin(this.tha);
      };
      _proto.getY = function getY() {
        return -this.r * Math.cos(this.tha);
      };
      _proto.normalize = function normalize() {
        this.r = 1;
        return this;
      };
      _proto.equals = function equals(v) {
        return v.r === this.r && v.tha === this.tha;
      };
      _proto.clear = function clear() {
        this.r = 0.0;
        this.tha = 0.0;
        return this;
      };
      _proto.clone = function clone() {
        return new Polar2D(this.r, this.tha);
      };
      return Polar2D;
    }();
  
    var Mat3 = {
      create: function create(mat3) {
        var mat = new Float32Array(9);
        if (mat3) this.set(mat3, mat);
        return mat;
      },
      set: function set(mat1, mat2) {
        for (var i = 0; i < 9; i++) mat2[i] = mat1[i];
        return mat2;
      },
      multiply: function multiply(mat, mat2, mat3) {
        var a00 = mat[0],
          a01 = mat[1],
          a02 = mat[2],
          a10 = mat[3],
          a11 = mat[4],
          a20 = mat[6],
          a21 = mat[7],
          b00 = mat2[0],
          b01 = mat2[1],
          b02 = mat2[2],
          b10 = mat2[3],
          b11 = mat2[4],
          b20 = mat2[6],
          b21 = mat2[7];
        mat3[0] = b00 * a00 + b01 * a10;
        mat3[1] = b00 * a01 + b01 * a11;
        mat3[2] = a02 * b02;
        mat3[3] = b10 * a00 + b11 * a10;
        mat3[4] = b10 * a01 + b11 * a11;
        mat3[6] = b20 * a00 + b21 * a10 + a20;
        mat3[7] = b20 * a01 + b21 * a11 + a21;
        return mat3;
      },
      inverse: function inverse(mat, mat3) {
        var a00 = mat[0],
          a01 = mat[1],
          a10 = mat[3],
          a11 = mat[4],
          a20 = mat[6],
          a21 = mat[7],
          b01 = a11,
          b11 = -a10,
          b21 = a21 * a10 - a11 * a20,
          d = a00 * b01 + a01 * b11,
          id;
        id = 1 / d;
        mat3[0] = b01 * id;
        mat3[1] = -a01 * id;
        mat3[3] = b11 * id;
        mat3[4] = a00 * id;
        mat3[6] = b21 * id;
        mat3[7] = (-a21 * a00 + a01 * a20) * id;
        return mat3;
      },
      multiplyVec2: function multiplyVec2(m, vec, mat3) {
        var x = vec[0],
          y = vec[1];
        mat3[0] = x * m[0] + y * m[3] + m[6];
        mat3[1] = x * m[1] + y * m[4] + m[7];
        return mat3;
      }
    };
  
    var Span$1 = /*#__PURE__*/function () {
      function Span(a, b, center) {
        if (Util.isArray(a)) {
          this.isArray = true;
          this.a = a;
        } else {
          this.isArray = false;
          this.a = Util.initValue(a, 1);
          this.b = Util.initValue(b, this.a);
          this.center = Util.initValue(center, false);
        }
      }
      var _proto = Span.prototype;
      _proto.getValue = function getValue(isInt) {
        if (isInt === void 0) {
          isInt = false;
        }
        if (this.isArray) {
          return Util.getRandFromArray(this.a);
        } else {
          if (!this.center) {
            return MathUtil.randomAToB(this.a, this.b, isInt);
          } else {
            return MathUtil.randomFloating(this.a, this.b, isInt);
          }
        }
      }
  
      /**
       * Returns a new Span object
       *
       * @memberof Proton#Proton.Util
       * @method setSpanValue
       *
       * @todo a, b and c should be 'Mixed' or 'Number'?
       *
       * @param {Mixed | Span} a
       * @param {Mixed}               b
       * @param {Mixed}               c
       *
       * @return {Span}
       */;
      Span.setSpanValue = function setSpanValue(a, b, c) {
        if (a instanceof Span) {
          return a;
        } else {
          if (b === undefined) {
            return new Span(a);
          } else {
            if (c === undefined) return new Span(a, b);else return new Span(a, b, c);
          }
        }
      }
  
      /**
       * Returns the value from a Span, if the param is not a Span it will return the given parameter
       *
       * @memberof Proton#Proton.Util
       * @method getValue
       *
       * @param {Mixed | Span} pan
       *
       * @return {Mixed} the value of Span OR the parameter if it is not a Span
       */;
      Span.getSpanValue = function getSpanValue(pan) {
        return pan instanceof Span ? pan.getValue() : pan;
      };
      return Span;
    }();
  
    var ArraySpan = /*#__PURE__*/function (_Span) {
      _inheritsLoose(ArraySpan, _Span);
      function ArraySpan(color) {
        var _this;
        _this = _Span.call(this) || this;
        _this._arr = Util.toArray(color);
        return _this;
      }
      var _proto = ArraySpan.prototype;
      _proto.getValue = function getValue() {
        var val = Util.getRandFromArray(this._arr);
        return val === "random" || val === "Random" ? MathUtil.randomColor() : val;
      }
  
      /**
       * Make sure that the color is an instance of Proton.ArraySpan, if not it makes a new instance
       *
       * @method setSpanValue
       * @memberof Proton#Proton.Color
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      ArraySpan.createArraySpan = function createArraySpan(arr) {
        if (!arr) return null;
        if (arr instanceof ArraySpan) return arr;else return new ArraySpan(arr);
      };
      return ArraySpan;
    }(Span$1);
  
    var Rectangle = /*#__PURE__*/function () {
      function Rectangle(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.bottom = this.y + this.height;
        this.right = this.x + this.width;
      }
      var _proto = Rectangle.prototype;
      _proto.contains = function contains(x, y) {
        if (x <= this.right && x >= this.x && y <= this.bottom && y >= this.y) return true;else return false;
      };
      return Rectangle;
    }();
  
    var Rate = /*#__PURE__*/function () {
      /**
       * The number of particles per second emission (a [particle]/b [s]);
       * @namespace
       * @memberof! Proton#
       * @constructor
       * @alias Rate
       *
       * @param {Array | Number | Span} numpan the number of each emission;
       * @param {Array | Number | Span} timepan the time of each emission;
       * for example: new Rate(new Span(10, 20), new Span(.1, .25));
       */
      function Rate(numpan, timepan) {
        this.numPan = Span$1.setSpanValue(Util.initValue(numpan, 1));
        this.timePan = Span$1.setSpanValue(Util.initValue(timepan, 1));
        this.startTime = 0;
        this.nextTime = 0;
        this.init();
      }
      var _proto = Rate.prototype;
      _proto.init = function init() {
        this.startTime = 0;
        this.nextTime = this.timePan.getValue();
      };
      _proto.getValue = function getValue(time) {
        this.startTime += time;
        if (this.startTime >= this.nextTime) {
          this.startTime = 0;
          this.nextTime = this.timePan.getValue();
          if (this.numPan.b === 1) {
            if (this.numPan.getValue(false) > 0.5) return 1;else return 0;
          } else {
            return this.numPan.getValue(true);
          }
        }
        return 0;
      };
      return Rate;
    }();
  
    var Initialize = /*#__PURE__*/function () {
      function Initialize() {}
      var _proto = Initialize.prototype;
      _proto.reset = function reset() {};
      _proto.init = function init(emitter, particle) {
        if (particle) {
          this.initialize(particle);
        } else {
          this.initialize(emitter);
        }
      }
  
      // sub class init
      ;
      _proto.initialize = function initialize(target) {};
      return Initialize;
    }();
  
    var Life = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Life, _Initialize);
      function Life(a, b, c) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.lifePan = Span$1.setSpanValue(a, b, c);
        _this.name = "Life";
        return _this;
      }
      var _proto = Life.prototype;
      _proto.initialize = function initialize(target) {
        if (this.lifePan.a === Infinity) target.life = Infinity;else target.life = this.lifePan.getValue();
      };
      return Life;
    }(Initialize);
  
    var Zone = /*#__PURE__*/function () {
      function Zone() {
        this.vector = new Vector2D(0, 0);
        this.random = 0;
        this.crossType = "dead";
        this.alert = true;
      }
      var _proto = Zone.prototype;
      _proto.getPosition = function getPosition() {};
      _proto.crossing = function crossing(particle) {};
      _proto.destroy = function destroy() {
        this.vector = null;
      };
      return Zone;
    }();
  
    var PointZone = /*#__PURE__*/function (_Zone) {
      _inheritsLoose(PointZone, _Zone);
      function PointZone(x, y) {
        var _this;
        _this = _Zone.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
      }
      var _proto = PointZone.prototype;
      _proto.getPosition = function getPosition() {
        this.vector.x = this.x;
        this.vector.y = this.y;
        return this.vector;
      };
      _proto.crossing = function crossing(particle) {
        if (this.alert) {
          console.error("Sorry, PointZone does not support crossing method!");
          this.alert = false;
        }
      };
      return PointZone;
    }(Zone);
  
    var Position = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Position, _Initialize);
      function Position(zone) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.zone = Util.initValue(zone, new PointZone());
        _this.name = "Position";
        return _this;
      }
      var _proto = Position.prototype;
      _proto.reset = function reset(zone) {
        this.zone = Util.initValue(zone, new PointZone());
      };
      _proto.initialize = function initialize(target) {
        this.zone.getPosition();
        target.p.x = this.zone.vector.x;
        target.p.y = this.zone.vector.y;
      };
      return Position;
    }(Initialize);
  
    var Velocity = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Velocity, _Initialize);
      function Velocity(rpan, thapan, type) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.rPan = Span$1.setSpanValue(rpan);
        _this.thaPan = Span$1.setSpanValue(thapan);
        _this.type = Util.initValue(type, "vector");
        _this.name = "Velocity";
        return _this;
      }
      var _proto = Velocity.prototype;
      _proto.reset = function reset(rpan, thapan, type) {
        this.rPan = Span$1.setSpanValue(rpan);
        this.thaPan = Span$1.setSpanValue(thapan);
        this.type = Util.initValue(type, "vector");
      };
      _proto.normalizeVelocity = function normalizeVelocity(vr) {
        return vr * Proton.MEASURE;
      };
      _proto.initialize = function initialize(target) {
        if (this.type === "p" || this.type === "P" || this.type === "polar") {
          var polar2d = new Polar2D(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * MathUtil.PI_180);
          target.v.x = polar2d.getX();
          target.v.y = polar2d.getY();
        } else {
          target.v.x = this.normalizeVelocity(this.rPan.getValue());
          target.v.y = this.normalizeVelocity(this.thaPan.getValue());
        }
      };
      return Velocity;
    }(Initialize);
  
    var Mass = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Mass, _Initialize);
      function Mass(a, b, c) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.massPan = Span$1.setSpanValue(a, b, c);
        _this.name = "Mass";
        return _this;
      }
      var _proto = Mass.prototype;
      _proto.initialize = function initialize(target) {
        target.mass = this.massPan.getValue();
      };
      return Mass;
    }(Initialize);
  
    var Radius = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Radius, _Initialize);
      function Radius(a, b, c) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.radius = Span$1.setSpanValue(a, b, c);
        _this.name = "Radius";
        return _this;
      }
      var _proto = Radius.prototype;
      _proto.reset = function reset(a, b, c) {
        this.radius = Span$1.setSpanValue(a, b, c);
      };
      _proto.initialize = function initialize(particle) {
        particle.radius = this.radius.getValue();
        particle.data.oldRadius = particle.radius;
      };
      return Radius;
    }(Initialize);
  
    var Body = /*#__PURE__*/function (_Initialize) {
      _inheritsLoose(Body, _Initialize);
      function Body(image, w, h) {
        var _this;
        _this = _Initialize.call(this) || this;
        _this.image = _this.setSpanValue(image);
        _this.w = Util.initValue(w, 20);
        _this.h = Util.initValue(h, _this.w);
        _this.name = "Body";
        return _this;
      }
      var _proto = Body.prototype;
      _proto.initialize = function initialize(particle) {
        var imageTarget = this.image.getValue();
        if (typeof imageTarget === "string") {
          particle.body = {
            width: this.w,
            height: this.h,
            src: imageTarget,
            isInner: true,
            inner: true
          };
        } else {
          particle.body = imageTarget;
        }
      };
      _proto.setSpanValue = function setSpanValue(image) {
        return image instanceof ArraySpan ? image : new ArraySpan(image);
      };
      return Body;
    }(Initialize);
  
    var Behaviour = /*#__PURE__*/function () {
      /**
       * The Behaviour class is the base for the other Behaviour
       *
       * @memberof! -
       * @interface
       * @alias Proton.Behaviour
       *
       * @param {Number} life 	the behaviours life
       * @param {String} easing 	The behaviour's decaying trend, for example ease.easeOutQuart
       *
       * @property {String}  id 		The behaviours id
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       * @property {Number}  age=0 	How long the particle should be 'alife'
       * @property {Number}  energy=1
       * @property {Boolean} dead=false The particle is dead at first
       * @property {Array}   parents 	The behaviour's parents array
       * @property {String}  name 	The behaviour name
       */
      function Behaviour(life, easing) {
        this.life = Util.initValue(life, Infinity);
        this.easing = ease.getEasing(easing);
        this.age = 0;
        this.energy = 1;
        this.dead = false;
        this.parents = [];
        this.id = "Behaviour_" + Behaviour.id++;
        this.name = "Behaviour";
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton.Behaviour
       * @instance
       *
       * @param {Number} [life=Infinity] 		this behaviour's life
       * @param {String} [easing=easeLinear] 	this behaviour's easing
       */
      var _proto = Behaviour.prototype;
      _proto.reset = function reset(life, easing) {
        this.life = Util.initValue(life, Infinity);
        this.easing = ease.getEasing(easing);
      }
  
      /**
       * Normalize a force by 1:100;
       *
       * @method normalizeForce
       * @memberof Proton.Behaviour
       * @instance
       *
       * @param {Proton.Vector2D} force
       */;
      _proto.normalizeForce = function normalizeForce(force) {
        return force.multiplyScalar(Proton.MEASURE);
      }
  
      /**
       * Normalize a value by 1:100;
       *
       * @method normalizeValue
       * @memberof Proton.Behaviour
       * @instance
       *
       * @param {Number} value
       */;
      _proto.normalizeValue = function normalizeValue(value) {
        return value * Proton.MEASURE;
      }
  
      /**
       * Initialize the behaviour's parameters for all particles
       *
       * @method initialize
       * @memberof Proton.Behaviour
       * @instance
       *
       * @param {Proton.Particle} particle
       */;
      _proto.initialize = function initialize(particle) {}
  
      /**
       * computing life cycle
       *
       * @method calculate
       * @memberof Proton.Behaviour
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.calculate = function calculate(particle, time, index) {
        this.age += time;
        if (this.age >= this.life || this.dead) {
          this.energy = 0;
          this.dead = true;
          this.destroy();
        } else {
          var scale = this.easing(particle.age / particle.life);
          this.energy = Math.max(1 - scale, 0);
        }
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Color
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
      }
  
      /**
       * Destory this behaviour
       *
       * @method destroy
       * @memberof Proton.Behaviour
       * @instance
       */;
      _proto.destroy = function destroy() {
        var i = this.parents.length;
        while (i--) {
          this.parents[i].removeBehaviour(this);
        }
        this.parents.length = 0;
      };
      return Behaviour;
    }();
    Behaviour.id = 0;
  
    var Force = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Force, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Force
       *
       * @param {Number} fx
       * @param {Number} fy
       * @param {Number} [life=Infinity] 			this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Force(fx, fy, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.force = _this.normalizeForce(new Vector2D(fx, fy));
        _this.name = "Force";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Force
       * @instance
       *
       * @param {Number} fx
       * @param {Number} fy
       * @param {Number} [life=Infinity] 			this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Force.prototype;
      _proto.reset = function reset(fx, fy, life, easing) {
        this.force = this.normalizeForce(new Vector2D(fx, fy));
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Force
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        particle.a.add(this.force);
      };
      return Force;
    }(Behaviour);
  
    var Attraction = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Attraction, _Behaviour);
      /**
       * This behaviour let the particles follow one specific Proton.Vector2D
       *
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Attraction
       *
       * @todo add description for 'force' and 'radius'
       *
       * @param {Proton.Vector2D} targetPosition the attraction point coordinates
       * @param {Number} [force=100]
       * @param {Number} [radius=1000]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {Proton.Vector2D} targetPosition
       * @property {Number} radius
       * @property {Number} force
       * @property {Number} radiusSq
       * @property {Proton.Vector2D} attractionForce
       * @property {Number} lengthSq
       * @property {String} name The Behaviour name
       */
      function Attraction(targetPosition, force, radius, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.targetPosition = Util.initValue(targetPosition, new Vector2D());
        _this.radius = Util.initValue(radius, 1000);
        _this.force = Util.initValue(_this.normalizeValue(force), 100);
        _this.radiusSq = _this.radius * _this.radius;
        _this.attractionForce = new Vector2D();
        _this.lengthSq = 0;
        _this.name = "Attraction";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Attraction
       * @instance
       *
       * @todo add description for 'force' and 'radius'
       *
       * @param {Proton.Vector2D} targetPosition the attraction point coordinates
       * @param {Number} [force=100]
       * @param {Number} [radius=1000]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Attraction.prototype;
      _proto.reset = function reset(targetPosition, force, radius, life, easing) {
        this.targetPosition = Util.initValue(targetPosition, new Vector2D());
        this.radius = Util.initValue(radius, 1000);
        this.force = Util.initValue(this.normalizeValue(force), 100);
        this.radiusSq = this.radius * this.radius;
        this.attractionForce = new Vector2D();
        this.lengthSq = 0;
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @memberof Proton#Proton.Attraction
       * @method applyBehaviour
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        this.attractionForce.copy(this.targetPosition);
        this.attractionForce.sub(particle.p);
        this.lengthSq = this.attractionForce.lengthSq();
        if (this.lengthSq > 0.00004 && this.lengthSq < this.radiusSq) {
          this.attractionForce.normalize();
          this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq);
          this.attractionForce.multiplyScalar(this.force);
          particle.a.add(this.attractionForce);
        }
      };
      return Attraction;
    }(Behaviour);
  
    var RandomDrift = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(RandomDrift, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Behaviour
       * @constructor
       * @alias RandomDrift
       *
       * @param {Number} driftX 				X value of the new Vector2D
       * @param {Number} driftY  				Y value of the new Vector2D
       * @param {Number} delay 				How much delay the drift should have
       * @param {Number} [life=Infinity] 		this behaviour's life
       * @param {String} [easing=easeLinear] 	this behaviour's easing
       *
       * @property {Number} time The time of the drift
       * @property {String} name The Behaviour name
       */
      function RandomDrift(driftX, driftY, delay, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(driftX, driftY, delay);
        _this.time = 0;
        _this.name = "RandomDrift";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#RandomDrift
       * @instance
       *
       * @param {Number} driftX 				X value of the new Vector2D
       * @param {Number} driftY  				Y value of the new Vector2D
       * @param {Number} delay 				How much delay the drift should have
       * @param {Number} [life=Infinity] 		this behaviour's life
       * @param {String} [easing=easeLinear] 	this behaviour's easing
       */
      var _proto = RandomDrift.prototype;
      _proto.reset = function reset(driftX, driftY, delay, life, easing) {
        this.panFoce = new Vector2D(driftX, driftY);
        this.panFoce = this.normalizeForce(this.panFoce);
        this.delay = delay;
        life && _Behaviour.prototype.reset.call(this, life, easing);
      };
      _proto.initialize = function initialize(particle) {
        particle.data.time = 0;
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#RandomDrift
       * @instance
       *
       * @param {Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        particle.data.time += time;
        if (particle.data.time >= this.delay) {
          particle.a.addXY(MathUtil.randomAToB(-this.panFoce.x, this.panFoce.x), MathUtil.randomAToB(-this.panFoce.y, this.panFoce.y));
          particle.data.time = 0;
        }
      };
      return RandomDrift;
    }(Behaviour);
  
    var Gravity = /*#__PURE__*/function (_Force) {
      _inheritsLoose(Gravity, _Force);
      /**
       * @memberof! Proton#
       * @augments Proton#Proton.Force
       * @constructor
       * @alias Proton.Gravity
       *
       * @param {Number} g 							Gravity
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Gravity(g, life, easing) {
        var _this;
        _this = _Force.call(this, 0, g, life, easing) || this;
        _this.name = "Gravity";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Gravity
       * @instance
       *
       * @param {Number} g 							Gravity
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Gravity.prototype;
      _proto.reset = function reset(g, life, easing) {
        _Force.prototype.reset.call(this, 0, g, life, easing);
      };
      return Gravity;
    }(Force);
  
    var Collision = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Collision, _Behaviour);
      /**
       * The callback after collision
       *
       * @callback Callback
       *
       * @param {Proton.Particle} particle
       * @param {Proton.Paritcle} otherParticle
       */
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Collision
       *
       * @todo add description to mass
       *
       * @param {Proton.Emitter} 	[emitter=null] 		the attraction point coordinates
       * @param {Boolean} 		[mass=true]
       * @param {Callback}	 	[callback=null]		the callback after the collision
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Collision(emitter, mass, callback, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(emitter, mass, callback);
        _this.newPool = [];
        _this.pool = [];
        _this.name = "Collision";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @memberof Proton#Proton.Collision
       * @method reset
       * @instance
       *
       * @todo add description to mass
       *
       * @param {Proton.Emitter} 	[emitter=null] 		the attraction point coordinates
       * @param {Boolean} 		[mass=true]
       * @param {Callback}	 	[callback=null]		the callback after the collision
       * @param {Number} 			[life=Infinity] 	this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Collision.prototype;
      _proto.reset = function reset(emitter, mass, callback, life, easing) {
        this.emitter = Util.initValue(emitter, null);
        this.mass = Util.initValue(mass, true);
        this.callback = Util.initValue(callback, null);
        this.collisionPool = [];
        this.delta = new Vector2D();
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @memberof Proton#Proton.Collision
       * @method applyBehaviour
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        if (this.emitter) {
          Util.sliceArray(this.emitter.particles, index, this.newPool);
        } else {
          Util.sliceArray(this.pool, index, this.newPool);
        }
        var length = this.newPool.length;
        var otherParticle;
        var lengthSq;
        var overlap;
        var totalMass;
        var averageMass1, averageMass2;
        var i;
        for (i = 0; i < length; i++) {
          otherParticle = this.newPool[i];
          if (otherParticle !== particle) {
            this.delta.copy(otherParticle.p);
            this.delta.sub(particle.p);
            lengthSq = this.delta.lengthSq();
            var distance = particle.radius + otherParticle.radius;
            if (lengthSq <= distance * distance) {
              overlap = distance - Math.sqrt(lengthSq);
              overlap += 0.5;
              totalMass = particle.mass + otherParticle.mass;
              averageMass1 = this.mass ? otherParticle.mass / totalMass : 0.5;
              averageMass2 = this.mass ? particle.mass / totalMass : 0.5;
              particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1));
              otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2));
              this.callback && this.callback(particle, otherParticle);
            }
          }
        }
      };
      return Collision;
    }(Behaviour);
  
    var CrossZone = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(CrossZone, _Behaviour);
      /**
       * Defines what happens if the particles come to the end of the specified zone
       *
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.CrossZone
       *
       * @param {Proton.Zone} zone 						can be any Proton.Zone - e.g. Proton.RectZone()
       * @param {String} 		[crossType=dead] 			what happens if the particles pass the zone - allowed strings: dead | bound | cross
       * @param {Number} 		[life=Infinity] 			this behaviour's life
       * @param {String} 		[easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function CrossZone(zone, crossType, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(zone, crossType);
        _this.name = "CrossZone";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.CrossZone
       * @instance
       *
       * @param {Proton.Zone} zone 				can be any Proton.Zone - e.g. Proton.RectZone()
       * @param {String} 		[crossType=dead] 	what happens if the particles pass the zone - allowed strings: dead | bound | cross
       * @param {Number} 		[life=Infinity] 	this behaviour's life
       * @param {String} 		[easing=easeLinear]	this behaviour's easing
       */
      var _proto = CrossZone.prototype;
      _proto.reset = function reset(zone, crossType, life, easing) {
        this.zone = zone;
        this.zone.crossType = Util.initValue(crossType, "dead");
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.CrossZone
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        this.zone.crossing(particle);
      };
      return CrossZone;
    }(Behaviour);
  
    var Alpha = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Alpha, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Alpha
       *
       * @todo add description for 'a' and 'b'
       *
       * @param {Number} a
       * @param {String} b
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Alpha(a, b, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(a, b);
        _this.name = "Alpha";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Alpha
       * @instance
       *
       * @todo add description for 'a' and 'b'
       *
       * @param {Number} a
       * @param {String} b
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Alpha.prototype;
      _proto.reset = function reset(a, b, life, easing) {
        this.same = b === null || b === undefined ? true : false;
        this.a = Span$1.setSpanValue(Util.initValue(a, 1));
        this.b = Span$1.setSpanValue(b);
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Sets the new alpha value of the particle
       *
       * @method initialize
       * @memberof Proton#Proton.Alpha
       * @instance
       *
       * @param {Proton.Particle} particle A single Proton generated particle
       */;
      _proto.initialize = function initialize(particle) {
        particle.data.alphaA = this.a.getValue();
        if (this.same) particle.data.alphaB = particle.data.alphaA;else particle.data.alphaB = this.b.getValue();
      }
  
      /**
       * @method applyBehaviour
       * @memberof Proton#Proton.Alpha
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        particle.alpha = particle.data.alphaB + (particle.data.alphaA - particle.data.alphaB) * this.energy;
        if (particle.alpha < 0.001) particle.alpha = 0;
      };
      return Alpha;
    }(Behaviour);
  
    var Scale = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Scale, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Scale
       *
       * @todo add description for 'a' and 'b'
       *
       * @param {Number} a
       * @param {String} b
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Scale(a, b, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(a, b);
        _this.name = "Scale";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Scale
       * @instance
       *
       * @param {Number} a
       * @param {String} b
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Scale.prototype;
      _proto.reset = function reset(a, b, life, easing) {
        this.same = b === null || b === undefined ? true : false;
        this.a = Span$1.setSpanValue(Util.initValue(a, 1));
        this.b = Span$1.setSpanValue(b);
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Initialize the behaviour's parameters for all particles
       *
       * @method initialize
       * @memberof Proton#Proton.Scale
       * @instance
       *
       * @param {Proton.Particle} particle
       */;
      _proto.initialize = function initialize(particle) {
        particle.data.scaleA = this.a.getValue();
        particle.data.oldRadius = particle.radius;
        particle.data.scaleB = this.same ? particle.data.scaleA : this.b.getValue();
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Scale
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        particle.scale = particle.data.scaleB + (particle.data.scaleA - particle.data.scaleB) * this.energy;
        if (particle.scale < 0.0001) particle.scale = 0;
        particle.radius = particle.data.oldRadius * particle.scale;
      };
      return Scale;
    }(Behaviour);
  
    var Rotate = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Rotate, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Rotate
       *
       * @todo add description for 'a', 'b' and 'style'
       *
       * @param {String} [influence=Velocity] The rotation's influence
       * @param {String} b
       * @param {String} [style=to]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Rotate(influence, b, style, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(influence, b, style);
        _this.name = "Rotate";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Rotate
       * @instance
       *
       * @todo add description for 'a', 'b' and 'style'
       *
       * @param {String} a
       * @param {String} b
       * @param {String} [style=to]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Rotate.prototype;
      _proto.reset = function reset(a, b, style, life, easing) {
        this.same = b === null || b === undefined ? true : false;
        this.a = Span$1.setSpanValue(Util.initValue(a, "Velocity"));
        this.b = Span$1.setSpanValue(Util.initValue(b, 0));
        this.style = Util.initValue(style, "to");
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Initialize the behaviour's parameters for all particles
       *
       * @method initialize
       * @memberof Proton#Proton.Rotate
       * @instance
       *
       * @param {Proton.Particle} particle
       */;
      _proto.initialize = function initialize(particle) {
        particle.rotation = this.a.getValue();
        particle.data.rotationA = this.a.getValue();
        if (!this.same) particle.data.rotationB = this.b.getValue();
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Rotate
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} 			time the integrate time 1/ms
       * @param {Int} 			index the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        if (!this.same) {
          if (this.style === "to" || this.style === "TO" || this.style === "_") {
            particle.rotation += particle.data.rotationB + (particle.data.rotationA - particle.data.rotationB) * this.energy;
          } else {
            particle.rotation += particle.data.rotationB;
          }
        } else if (this.a.a === "V" || this.a.a === "Velocity" || this.a.a === "v") {
          // beta...
          particle.rotation = particle.getDirection();
        }
      };
      return Rotate;
    }(Behaviour);
  
    var Color = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Color, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Color
       *
       * @param {Proton.ArraySpan | String} a the string should be a hex e.g. #000000 for black
       * @param {Proton.ArraySpan | String} b the string should be a hex e.g. #000000 for black
       * @param {Number} [life=Infinity] 	this behaviour's life
       * @param {String} [easing=easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Color(a, b, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.reset(a, b);
        _this.name = "Color";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Color
       * @instance
       *
       * @param {Proton.ArraySpan | String} a the string should be a hex e.g. #000000 for black
       * @param {Proton.ArraySpan | String} b the string should be a hex e.g. #000000 for black
       * @param {Number} [life=Infinity] 	this behaviour's life
       * @param {String} [easing=easeLinear] 	this behaviour's easing
       */
      var _proto = Color.prototype;
      _proto.reset = function reset(a, b, life, easing) {
        this.a = ArraySpan.createArraySpan(a);
        this.b = ArraySpan.createArraySpan(b);
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * Initialize the behaviour's parameters for all particles
       *
       * @method initialize
       * @memberof Proton#Proton.Color
       * @instance
       *
       * @param {Proton.Particle} particle
       */;
      _proto.initialize = function initialize(particle) {
        particle.color = this.a.getValue();
        particle.data.colorA = ColorUtil.hexToRgb(particle.color);
        if (this.b) particle.data.colorB = ColorUtil.hexToRgb(this.b.getValue());
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Color
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        if (this.b) {
          this.calculate(particle, time, index);
          particle.rgb.r = particle.data.colorB.r + (particle.data.colorA.r - particle.data.colorB.r) * this.energy;
          particle.rgb.g = particle.data.colorB.g + (particle.data.colorA.g - particle.data.colorB.g) * this.energy;
          particle.rgb.b = particle.data.colorB.b + (particle.data.colorA.b - particle.data.colorB.b) * this.energy;
          particle.rgb.r = particle.rgb.r << 0;
          particle.rgb.g = particle.rgb.g << 0;
          particle.rgb.b = particle.rgb.b << 0;
        } else {
          particle.rgb.r = particle.data.colorA.r;
          particle.rgb.g = particle.data.colorA.g;
          particle.rgb.b = particle.data.colorA.b;
        }
      };
      return Color;
    }(Behaviour);
  
    var CHANGING = "changing";
    var Cyclone = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(Cyclone, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Proton.Behaviour
       * @constructor
       * @alias Proton.Cyclone
       *
       * @param {Number} angle
       * @param {Number} force
       * @param {Number} [life=Infinity] 			this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function Cyclone(angle, force, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.setAngleAndForce(angle, force);
        _this.name = "Cyclone";
        return _this;
      }
      var _proto = Cyclone.prototype;
      _proto.setAngleAndForce = function setAngleAndForce(angle, force) {
        this.force = CHANGING;
        this.angle = MathUtil.PI / 2;
        if (angle === "right") {
          this.angle = MathUtil.PI / 2;
        } else if (angle === "left") {
          this.angle = -MathUtil.PI / 2;
        } else if (angle === "random") {
          this.angle = "random";
        } else if (angle instanceof Span$1) {
          this.angle = "span";
          this.span = angle;
        } else if (angle) {
          this.angle = angle;
        }
        if (String(force).toLowerCase() === "changing" || String(force).toLowerCase() === "chang" || String(force).toLowerCase() === "auto") {
          this.force = CHANGING;
        } else if (force) {
          this.force = force;
        }
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Cyclone
       * @instance
       *
       * @param {Number} angle
       * @param {Number} force
       * @param {Number} [life=Infinity] 			this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */;
      _proto.reset = function reset(angle, force, life, easing) {
        this.angle = MathUtil.PI / 2;
        this.setAngleAndForce(angle, force);
        life && _Behaviour.prototype.reset.call(this, life, easing);
      };
      _proto.initialize = function initialize(particle) {
        if (this.angle === "random") {
          particle.data.cangle = MathUtil.randomAToB(-MathUtil.PI, MathUtil.PI);
        } else if (this.angle === "span") {
          particle.data.cangle = this.span.getValue();
        }
        particle.data.cyclone = new Vector2D(0, 0);
      }
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#Proton.Cyclone
       * @instance
       *
       * @param {Proton.Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.calculate(particle, time, index);
        var length;
        var gradient = particle.v.getGradient();
        if (this.angle === "random" || this.angle === "span") {
          gradient += particle.data.cangle;
        } else {
          gradient += this.angle;
        }
        if (this.force === CHANGING) {
          length = particle.v.length() / 100;
        } else {
          length = this.force;
        }
        particle.data.cyclone.x = length * Math.cos(gradient);
        particle.data.cyclone.y = length * Math.sin(gradient);
        particle.data.cyclone = this.normalizeForce(particle.data.cyclone);
        particle.a.add(particle.data.cyclone);
      };
      return Cyclone;
    }(Behaviour);
  
    var Repulsion = /*#__PURE__*/function (_Attraction) {
      _inheritsLoose(Repulsion, _Attraction);
      /**
       * The oppisite of Proton.Attraction - turns the force
       *
       * @memberof! Proton#
       * @augments Proton#Proton.Attraction
       * @constructor
       * @alias Proton.Repulsion
       *
       * @todo add description for 'force' and 'radius'
       *
       * @param {Proton.Vector2D} targetPosition the attraction point coordinates
       * @param {Number} [force=100]
       * @param {Number} [radius=1000]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       *
       * @property {Number} force
       * @property {String} name The Behaviour name
       */
      function Repulsion(targetPosition, force, radius, life, easing) {
        var _this;
        _this = _Attraction.call(this, targetPosition, force, radius, life, easing) || this;
        _this.force *= -1;
        _this.name = "Repulsion";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#Proton.Repulsion
       * @instance
       *
       * @todo add description for 'force' and 'radius'
       *
       * @param {Proton.Vector2D} targetPosition the attraction point coordinates
       * @param {Number} [force=100]
       * @param {Number} [radius=1000]
       * @param {Number} [life=Infinity] 				this behaviour's life
       * @param {String} [easing=ease.easeLinear] 	this behaviour's easing
       */
      var _proto = Repulsion.prototype;
      _proto.reset = function reset(targetPosition, force, radius, life, easing) {
        _Attraction.prototype.reset.call(this, targetPosition, force, radius, life, easing);
        this.force *= -1;
      };
      return Repulsion;
    }(Attraction);
  
    var GravityWell = /*#__PURE__*/function (_Behaviour) {
      _inheritsLoose(GravityWell, _Behaviour);
      /**
       * @memberof! Proton#
       * @augments Behaviour
       * @constructor
       * @alias GravityWell
       *
       * @param {Vector2D} [centerPoint=new Vector2D] The point in the center
       * @param {Number} [force=100]					The force
       * @param {Number} [life=Infinity]				this behaviour's life
       * @param {String} [easing=easeLinear]	this behaviour's easing
       *
       * @property {String} name The Behaviour name
       */
      function GravityWell(centerPoint, force, life, easing) {
        var _this;
        _this = _Behaviour.call(this, life, easing) || this;
        _this.distanceVec = new Vector2D();
        _this.centerPoint = Util.initValue(centerPoint, new Vector2D());
        _this.force = Util.initValue(_this.normalizeValue(force), 100);
        _this.name = "GravityWell";
        return _this;
      }
  
      /**
       * Reset this behaviour's parameters
       *
       * @method reset
       * @memberof Proton#GravityWell
       * @instance
       *
       * @param {Vector2D} [centerPoint=new Vector2D] The point in the center
       * @param {Number} [force=100]					The force
       * @param {Number} [life=Infinity]				this behaviour's life
       * @param {String} [easing=easeLinear]	this behaviour's easing
       */
      var _proto = GravityWell.prototype;
      _proto.reset = function reset(centerPoint, force, life, easing) {
        this.distanceVec = new Vector2D();
        this.centerPoint = Util.initValue(centerPoint, new Vector2D());
        this.force = Util.initValue(this.normalizeValue(force), 100);
        life && _Behaviour.prototype.reset.call(this, life, easing);
      }
  
      /**
       * @inheritdoc
       */;
      _proto.initialize = function initialize(particle) {}
  
      /**
       * Apply this behaviour for all particles every time
       *
       * @method applyBehaviour
       * @memberof Proton#GravityWell
       * @instance
       *
       * @param {Particle} particle
       * @param {Number} the integrate time 1/ms
       * @param {Int} the particle index
       */;
      _proto.applyBehaviour = function applyBehaviour(particle, time, index) {
        this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
        var distanceSq = this.distanceVec.lengthSq();
        if (distanceSq !== 0) {
          var distance = this.distanceVec.length();
          var factor = this.force * time / (distanceSq * distance);
          particle.v.x += factor * this.distanceVec.x;
          particle.v.y += factor * this.distanceVec.y;
        }
      };
      return GravityWell;
    }(Behaviour);
  
    var InitializeUtil = {
      initialize: function initialize(emitter, particle, initializes) {
        var length = initializes.length;
        var i;
        for (i = 0; i < length; i++) {
          if (initializes[i] instanceof Initialize) {
            initializes[i].init(emitter, particle);
          } else {
            this.init(emitter, particle, initializes[i]);
          }
        }
        this.bindEmitter(emitter, particle);
      },
      // init
      init: function init(emitter, particle, initialize) {
        PropUtil.setProp(particle, initialize);
        PropUtil.setVectorVal(particle, initialize);
      },
      bindEmitter: function bindEmitter(emitter, particle) {
        if (emitter.bindEmitter) {
          particle.p.add(emitter.p);
          particle.v.add(emitter.v);
          particle.a.add(emitter.a);
          particle.v.rotate(MathUtil.degreeTransform(emitter.rotation));
        }
      }
    };
  
    var Emitter = /*#__PURE__*/function (_Particle) {
      _inheritsLoose(Emitter, _Particle);
      /**
       * You can use this emit particles.
       *
       * It will dispatch follow events:
       * PARTICLE_CREATED
       * PARTICLE_UPDATA
       * PARTICLE_DEAD
       *
       * @class Emitter
       * @constructor
       * @param {Object} conf the parameters object;
       * for example {damping:0.01,bindEmitter:false}
       */
      function Emitter(conf) {
        var _this;
        if (conf === void 0) {
          conf = {};
        }
        _this = _Particle.call(this, conf) || this;
        _this.particles = [];
        _this.behaviours = [];
        _this.initializes = [];
        _this.emitTime = 0;
        _this.emitSpeed = 0;
        _this.totalTime = -1;
  
        /**
         * The friction coefficient for all particle emit by This;
         * @property damping
         * @type {Number}
         * @default 0.006
         */
        _this.damping = 0.006;
  
        /**
         * If bindEmitter the particles can bind this emitter's property;
         * @property bindEmitter
         * @type {Boolean}
         * @default true
         */
        _this.bindEmitter = true;
  
        /**
         * The number of particles per second emit (a [particle]/b [s]);
         * @property rate
         * @type {Rate}
         * @default Rate(1, .1)
         */
        _this.rate = new Rate(1, 0.1);
        _this.name = "Emitter";
        _this.id = Puid.id(_this.name);
        return _this;
      }
  
      /**
       * start emit particle
       * @method emit
       * @param {Number} emitTime begin emit time;
       * @param {String} life the life of this emitter
       */
      var _proto = Emitter.prototype;
      _proto.emit = function emit(totalTime, life) {
        this.stoped = false;
        this.emitTime = 0;
        this.totalTime = Util.initValue(totalTime, Infinity);
        if (life === true || life === "life" || life === "destroy") {
          this.life = totalTime === "once" ? 1 : this.totalTime;
        } else if (!isNaN(life)) {
          this.life = life;
        }
        this.rate.init();
      }
  
      /**
       * stop emiting
       * @method stop
       */;
      _proto.stop = function stop() {
        this.totalTime = -1;
        this.emitTime = 0;
        this.stoped = true;
      };
      _proto.preEmit = function preEmit(time) {
        var oldStoped = this.stoped;
        var oldEmitTime = this.emitTime;
        var oldTotalTime = this.totalTime;
        this.stoped = false;
        this.emitTime = 0;
        this.totalTime = time;
        this.rate.init();
        var step = 0.0167;
        while (time > step) {
          time -= step;
          this.update(step);
        }
        this.stoped = oldStoped;
        this.emitTime = oldEmitTime + Math.max(time, 0);
        this.totalTime = oldTotalTime;
      }
  
      /**
       * remove current all particles
       * @method removeAllParticles
       */;
      _proto.removeAllParticles = function removeAllParticles() {
        var i = this.particles.length;
        while (i--) this.particles[i].dead = true;
      }
  
      /**
       * add initialize to this emitter
       * @method addSelfInitialize
       */;
      _proto.addSelfInitialize = function addSelfInitialize(initialize) {
        if (initialize["init"]) {
          initialize.init(this);
        }
      }
  
      /**
       * add the Initialize to particles;
       *
       * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3);
       * @method addInitialize
       * @param {Initialize} initialize like this new Radius(1, 12)
       */;
      _proto.addInitialize = function addInitialize() {
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }
        var i = rest.length;
        while (i--) this.initializes.push(rest[i]);
      }
  
      /**
       * remove the Initialize
       * @method removeInitialize
       * @param {Initialize} initialize a initialize
       */;
      _proto.removeInitialize = function removeInitialize(initializer) {
        var index = this.initializes.indexOf(initializer);
        if (index > -1) this.initializes.splice(index, 1);
      }
  
      /**
       * remove all Initializes
       * @method removeInitializers
       */;
      _proto.removeAllInitializers = function removeAllInitializers() {
        Util.emptyArray(this.initializes);
      }
  
      /**
       * add the Behaviour to particles;
       *
       * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3);
       * @method addBehaviour
       * @param {Behaviour} behaviour like this new Color('random')
       */;
      _proto.addBehaviour = function addBehaviour() {
        for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          rest[_key2] = arguments[_key2];
        }
        var i = arguments.length;
        while (i--) {
          var behaviour = rest[i];
          this.behaviours.push(behaviour);
          if (behaviour.parents) behaviour.parents.push(this);
        }
      }
  
      /**
       * remove the Behaviour
       * @method removeBehaviour
       * @param {Behaviour} behaviour a behaviour
       */;
      _proto.removeBehaviour = function removeBehaviour(behaviour) {
        var index = this.behaviours.indexOf(behaviour);
        this.behaviours.splice(index, 1);
        if (behaviour.parents) {
          index = behaviour.parents.indexOf(behaviour);
          behaviour.parents.splice(index, 1);
        }
        return index;
      }
  
      /**
       * remove all behaviours
       * @method removeAllBehaviours
       */;
      _proto.removeAllBehaviours = function removeAllBehaviours() {
        Util.emptyArray(this.behaviours);
      }
  
      // emitter update
      ;
      _proto.update = function update(time) {
        this.age += time;
        if (this.age >= this.life || this.dead) this.destroy();
        this.emitting(time);
        this.integrate(time);
      };
      _proto.integrate = function integrate(time) {
        if (!this.parent) return;
        var damping = 1 - this.damping;
        this.parent.integrator.calculate(this, time, damping);
        var length = this.particles.length;
        var i, particle;
        for (i = length - 1; i >= 0; i--) {
          particle = this.particles[i];
  
          // particle update
          particle.update(time, i);
          this.parent.integrator.calculate(particle, time, damping);
          this.dispatch("PARTICLE_UPDATE", particle);
  
          // check dead
          if (particle.dead) {
            this.dispatch("PARTICLE_DEAD", particle);
            this.parent.pool.expire(particle);
            this.particles.splice(i, 1);
          }
        }
      };
      _proto.dispatch = function dispatch(event, target) {
        this.parent && this.parent.dispatchEvent(event, target);
        this.bindEvent && this.dispatchEvent(event, target);
      };
      _proto.emitting = function emitting(time) {
        if (this.totalTime === "once") {
          var i;
          var length = this.rate.getValue(99999);
          if (length > 0) this.emitSpeed = length;
          for (i = 0; i < length; i++) this.createParticle();
          this.totalTime = "none";
        } else {
          this.emitTime += time;
          if (this.emitTime < this.totalTime) {
            var _length = this.rate.getValue(time);
            var _i;
            if (_length > 0) this.emitSpeed = _length;
            for (_i = 0; _i < _length; _i++) this.createParticle();
          }
        }
      }
  
      /**
       * create single particle;
       *
       * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
       * @method removeAllParticles
       */;
      _proto.createParticle = function createParticle(initialize, behaviour) {
        var particle = this.parent.pool.get(Particle);
        this.setupParticle(particle, initialize, behaviour);
        this.dispatch("PARTICLE_CREATED", particle);
        return particle;
      };
      _proto.setupParticle = function setupParticle(particle, initialize, behaviour) {
        var initializes = this.initializes;
        var behaviours = this.behaviours;
        if (initialize) initializes = Util.toArray(initialize);
        if (behaviour) behaviours = Util.toArray(behaviour);
        particle.reset();
        InitializeUtil.initialize(this, particle, initializes);
        particle.addBehaviours(behaviours);
        particle.parent = this;
        this.particles.push(particle);
      };
      _proto.remove = function remove() {
        this.stop();
        Util.destroyAll(this.particles);
      }
  
      /**
       * Destory this Emitter
       * @method destroy
       */;
      _proto.destroy = function destroy() {
        this.dead = true;
        this.remove();
        this.removeAllInitializers();
        this.removeAllBehaviours();
        this.parent && this.parent.removeEmitter(this);
        this.rate = null;
        this.old = null;
        this.rgb = null;
        this.v = null;
        this.a = null;
        this.p = null;
      };
      return Emitter;
    }(Particle);
    EventDispatcher.bind(Emitter);
  
    var BehaviourEmitter = /*#__PURE__*/function (_Emitter) {
      _inheritsLoose(BehaviourEmitter, _Emitter);
      /**
       * The BehaviourEmitter class inherits from Proton.Emitter
       *
       * use the BehaviourEmitter you can add behaviours to self;
       * @class Proton.BehaviourEmitter
       * @constructor
       * @param {Object} conf the parameters object;
       */
      function BehaviourEmitter(conf) {
        var _this;
        _this = _Emitter.call(this, conf) || this;
        _this.selfBehaviours = [];
        return _this;
      }
  
      /**
       * add the Behaviour to emitter;
       *
       * you can use Behaviours array:emitter.addSelfBehaviour(Behaviour1,Behaviour2,Behaviour3);
       * @method addSelfBehaviour
       * @param {Proton.Behaviour} behaviour like this new Proton.Color('random')
       */
      var _proto = BehaviourEmitter.prototype;
      _proto.addSelfBehaviour = function addSelfBehaviour() {
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }
        var i,
          length = rest.length;
        for (i = 0; i < length; i++) {
          var behaviour = rest[i];
          this.selfBehaviours.push(behaviour);
          behaviour.initialize(this);
        }
      }
  
      /**
       * remove the Behaviour for self
       * @method removeSelfBehaviour
       * @param {Proton.Behaviour} behaviour a behaviour
       */;
      _proto.removeSelfBehaviour = function removeSelfBehaviour(behaviour) {
        var index = this.selfBehaviours.indexOf(behaviour);
        if (index > -1) this.selfBehaviours.splice(index, 1);
      };
      _proto.update = function update(time) {
        _Emitter.prototype.update.call(this, time);
        if (!this.sleep) {
          var length = this.selfBehaviours.length;
          var i;
          for (i = 0; i < length; i++) {
            this.selfBehaviours[i].applyBehaviour(this, time, i);
          }
        }
      };
      return BehaviourEmitter;
    }(Emitter);
  
    var FollowEmitter = /*#__PURE__*/function (_Emitter) {
      _inheritsLoose(FollowEmitter, _Emitter);
      /**
       * The FollowEmitter class inherits from Proton.Emitter
       *
       * use the FollowEmitter will emit particle when mousemoving
       *
       * @class Proton.FollowEmitter
       * @constructor
       * @param {Element} mouseTarget mouseevent's target;
       * @param {Number} ease the easing of following speed;
       * @default 0.7
       * @param {Object} conf the parameters object;
       */
      function FollowEmitter(mouseTarget, ease, conf) {
        var _this;
        _this = _Emitter.call(this, conf) || this;
        _this.mouseTarget = Util.initValue(mouseTarget, window);
        _this.ease = Util.initValue(ease, 0.7);
        _this._allowEmitting = false;
        _this.initEventHandler();
        return _this;
      }
      var _proto = FollowEmitter.prototype;
      _proto.initEventHandler = function initEventHandler() {
        var _this2 = this;
        this.mousemoveHandler = function (e) {
          return _this2.mousemove.call(_this2, e);
        };
        this.mousedownHandler = function (e) {
          return _this2.mousedown.call(_this2, e);
        };
        this.mouseupHandler = function (e) {
          return _this2.mouseup.call(_this2, e);
        };
        this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, false);
      }
  
      /**
       * start emit particle
       * @method emit
       */;
      _proto.emit = function emit() {
        this._allowEmitting = true;
      }
  
      /**
       * stop emiting
       * @method stop
       */;
      _proto.stop = function stop() {
        this._allowEmitting = false;
      };
      _proto.mousemove = function mousemove(e) {
        if (e.layerX || e.layerX === 0) {
          this.p.x += (e.layerX - this.p.x) * this.ease;
          this.p.y += (e.layerY - this.p.y) * this.ease;
        } else if (e.offsetX || e.offsetX === 0) {
          this.p.x += (e.offsetX - this.p.x) * this.ease;
          this.p.y += (e.offsetY - this.p.y) * this.ease;
        }
        if (this._allowEmitting) _Emitter.prototype.emit.call(this, "once");
      }
  
      /**
       * Destory this Emitter
       * @method destroy
       */;
      _proto.destroy = function destroy() {
        _Emitter.prototype.destroy.call(this);
        this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, false);
      };
      return FollowEmitter;
    }(Emitter);
  
    var Types = {
      /**
       * Determine whether it is a picture object
       *
       * @return {boolean} is or no
       */
      isImage: function isImage(obj) {
        if (!obj) return false;
        if (obj.__isImage) return true;
        var tagName = ("" + obj.tagName).toUpperCase();
        var nodeName = ("" + obj.nodeName).toUpperCase();
        if (nodeName === "IMG" || tagName === "IMG") {
          obj.__isImage = true;
          return true;
        }
        return false;
      },
      /**
       * Determine whether it is a string object
       *
       * @return {boolean} is or no
       */
      isString: function isString(obj) {
        return typeof obj === "string";
      }
    };
  
    var BaseRenderer = /*#__PURE__*/function () {
      function BaseRenderer(element, stroke) {
        this.pool = new Pool();
        this.element = element;
        this.stroke = stroke;
        this.circleConf = {
          isCircle: true
        };
        this.initEventHandler();
        this.name = "BaseRenderer";
      }
      var _proto = BaseRenderer.prototype;
      _proto.setStroke = function setStroke(color, thinkness) {
        if (color === void 0) {
          color = "#000000";
        }
        if (thinkness === void 0) {
          thinkness = 1;
        }
        this.stroke = {
          color: color,
          thinkness: thinkness
        };
      };
      _proto.initEventHandler = function initEventHandler() {
        var _this = this;
        this._protonUpdateHandler = function () {
          _this.onProtonUpdate.call(_this);
        };
        this._protonUpdateAfterHandler = function () {
          _this.onProtonUpdateAfter.call(_this);
        };
        this._emitterAddedHandler = function (emitter) {
          _this.onEmitterAdded.call(_this, emitter);
        };
        this._emitterRemovedHandler = function (emitter) {
          _this.onEmitterRemoved.call(_this, emitter);
        };
        this._particleCreatedHandler = function (particle) {
          _this.onParticleCreated.call(_this, particle);
        };
        this._particleUpdateHandler = function (particle) {
          _this.onParticleUpdate.call(_this, particle);
        };
        this._particleDeadHandler = function (particle) {
          _this.onParticleDead.call(_this, particle);
        };
      };
      _proto.init = function init(proton) {
        this.parent = proton;
        proton.addEventListener("PROTON_UPDATE", this._protonUpdateHandler);
        proton.addEventListener("PROTON_UPDATE_AFTER", this._protonUpdateAfterHandler);
        proton.addEventListener("EMITTER_ADDED", this._emitterAddedHandler);
        proton.addEventListener("EMITTER_REMOVED", this._emitterRemovedHandler);
        proton.addEventListener("PARTICLE_CREATED", this._particleCreatedHandler);
        proton.addEventListener("PARTICLE_UPDATE", this._particleUpdateHandler);
        proton.addEventListener("PARTICLE_DEAD", this._particleDeadHandler);
      };
      _proto.resize = function resize(width, height) {};
      _proto.destroy = function destroy() {
        this.remove();
        this.pool.destroy();
        this.pool = null;
        this.element = null;
        this.stroke = null;
      };
      _proto.remove = function remove(proton) {
        this.parent.removeEventListener("PROTON_UPDATE", this._protonUpdateHandler);
        this.parent.removeEventListener("PROTON_UPDATE_AFTER", this._protonUpdateAfterHandler);
        this.parent.removeEventListener("EMITTER_ADDED", this._emitterAddedHandler);
        this.parent.removeEventListener("EMITTER_REMOVED", this._emitterRemovedHandler);
        this.parent.removeEventListener("PARTICLE_CREATED", this._particleCreatedHandler);
        this.parent.removeEventListener("PARTICLE_UPDATE", this._particleUpdateHandler);
        this.parent.removeEventListener("PARTICLE_DEAD", this._particleDeadHandler);
        this.parent = null;
      };
      _proto.onProtonUpdate = function onProtonUpdate() {};
      _proto.onProtonUpdateAfter = function onProtonUpdateAfter() {};
      _proto.onEmitterAdded = function onEmitterAdded(emitter) {};
      _proto.onEmitterRemoved = function onEmitterRemoved(emitter) {};
      _proto.onParticleCreated = function onParticleCreated(particle) {};
      _proto.onParticleUpdate = function onParticleUpdate(particle) {};
      _proto.onParticleDead = function onParticleDead(particle) {};
      return BaseRenderer;
    }();
  
    var CanvasRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(CanvasRenderer, _BaseRenderer);
      function CanvasRenderer(element) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.stroke = null;
        _this.context = _this.element.getContext("2d");
        _this.bufferCache = {};
        _this.name = "CanvasRenderer";
        return _this;
      }
      var _proto = CanvasRenderer.prototype;
      _proto.resize = function resize(width, height) {
        this.element.width = width;
        this.element.height = height;
      };
      _proto.onProtonUpdate = function onProtonUpdate() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
      };
      _proto.onParticleCreated = function onParticleCreated(particle) {
        if (particle.body) {
          ImgUtil.getImgFromCache(particle.body, this.addImg2Body, particle);
        } else {
          particle.color = particle.color || "#ff0000";
        }
      };
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        if (particle.body) {
          if (Types.isImage(particle.body)) {
            this.drawImage(particle);
          }
        } else {
          this.drawCircle(particle);
        }
      };
      _proto.onParticleDead = function onParticleDead(particle) {
        particle.body = null;
      }
  
      // private method
      ;
      _proto.addImg2Body = function addImg2Body(img, particle) {
        particle.body = img;
      }
  
      // private drawImage method
      ;
      _proto.drawImage = function drawImage(particle) {
        var w = particle.body.width * particle.scale | 0;
        var h = particle.body.height * particle.scale | 0;
        var x = particle.p.x - w / 2;
        var y = particle.p.y - h / 2;
        if (!!particle.color) {
          if (!particle.data["buffer"]) particle.data.buffer = this.createBuffer(particle.body);
          var bufContext = particle.data.buffer.getContext("2d");
          bufContext.clearRect(0, 0, particle.data.buffer.width, particle.data.buffer.height);
          bufContext.globalAlpha = particle.alpha;
          bufContext.drawImage(particle.body, 0, 0);
          bufContext.globalCompositeOperation = "source-atop";
          bufContext.fillStyle = ColorUtil.rgbToHex(particle.rgb);
          bufContext.fillRect(0, 0, particle.data.buffer.width, particle.data.buffer.height);
          bufContext.globalCompositeOperation = "source-over";
          bufContext.globalAlpha = 1;
          this.context.drawImage(particle.data.buffer, 0, 0, particle.data.buffer.width, particle.data.buffer.height, x, y, w, h);
        } else {
          this.context.save();
          this.context.globalAlpha = particle.alpha;
          this.context.translate(particle.p.x, particle.p.y);
          this.context.rotate(MathUtil.degreeTransform(particle.rotation));
          this.context.translate(-particle.p.x, -particle.p.y);
          this.context.drawImage(particle.body, 0, 0, particle.body.width, particle.body.height, x, y, w, h);
          this.context.globalAlpha = 1;
          this.context.restore();
        }
      }
  
      // private drawCircle --
      ;
      _proto.drawCircle = function drawCircle(particle) {
        if (particle.rgb) {
          this.context.fillStyle = "rgba(" + particle.rgb.r + "," + particle.rgb.g + "," + particle.rgb.b + "," + particle.alpha + ")";
        } else {
          this.context.fillStyle = particle.color;
        }
  
        // draw circle
        this.context.beginPath();
        this.context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
        if (this.stroke) {
          this.context.strokeStyle = this.stroke.color;
          this.context.lineWidth = this.stroke.thinkness;
          this.context.stroke();
        }
        this.context.closePath();
        this.context.fill();
      }
  
      // private createBuffer
      ;
      _proto.createBuffer = function createBuffer(image) {
        if (Types.isImage(image)) {
          var size = image.width + "_" + image.height;
          var canvas = this.bufferCache[size];
          if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            this.bufferCache[size] = canvas;
          }
          return canvas;
        }
      };
      _proto.destroy = function destroy() {
        _BaseRenderer.prototype.destroy.call(this);
        this.stroke = null;
        this.context = null;
        this.bufferCache = null;
      };
      return CanvasRenderer;
    }(BaseRenderer);
  
    var DomRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(DomRenderer, _BaseRenderer);
      function DomRenderer(element) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.stroke = null;
        _this.transform3d = false;
        _this.pool.create = function (body, particle) {
          return _this.createBody(body, particle);
        };
        _this.addImg2Body = _this.addImg2Body.bind(_assertThisInitialized(_this));
        _this.name = "DomRenderer";
        return _this;
      }
      var _proto = DomRenderer.prototype;
      _proto.onParticleCreated = function onParticleCreated(particle) {
        if (particle.body) {
          ImgUtil.getImgFromCache(particle.body, this.addImg2Body, particle);
        } else {
          particle.body = this.pool.get(this.circleConf, particle);
          this.element.appendChild(particle.body);
        }
      };
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        if (this.bodyReady(particle)) {
          if (this.transform3d) {
            DomUtil.transform3d(particle.body, particle.p.x, particle.p.y, particle.scale, particle.rotation);
          } else {
            DomUtil.transform(particle.body, particle.p.x, particle.p.y, particle.scale, particle.rotation);
          }
          particle.body.style.opacity = particle.alpha;
          if (particle.body.isCircle) {
            particle.body.style.backgroundColor = particle.color || "#ff0000";
          }
        }
      };
      _proto.onParticleDead = function onParticleDead(particle) {
        if (this.bodyReady(particle)) {
          this.element.removeChild(particle.body);
          this.pool.expire(particle.body);
          particle.body = null;
        }
      };
      _proto.bodyReady = function bodyReady(particle) {
        return typeof particle.body === "object" && particle.body && !particle.body.isInner;
      }
  
      // private method
      ;
      _proto.addImg2Body = function addImg2Body(img, particle) {
        if (particle.dead) return;
        particle.body = this.pool.get(img, particle);
        DomUtil.resize(particle.body, img.width, img.height);
        this.element.appendChild(particle.body);
      };
      _proto.createBody = function createBody(body, particle) {
        if (body.isCircle) return this.createCircle(particle);
        return this.createSprite(body, particle);
      }
  
      // private methods
      ;
      _proto.createCircle = function createCircle(particle) {
        var dom = DomUtil.createDiv(particle.id + "_dom", 2 * particle.radius, 2 * particle.radius);
        dom.style.borderRadius = particle.radius + "px";
        if (this.stroke) {
          dom.style.borderColor = this.stroke.color;
          dom.style.borderWidth = this.stroke.thinkness + "px";
        }
        dom.isCircle = true;
        return dom;
      };
      _proto.createSprite = function createSprite(body, particle) {
        var url = typeof body === "string" ? body : body.src;
        var dom = DomUtil.createDiv(particle.id + "_dom", body.width, body.height);
        dom.style.backgroundImage = "url(" + url + ")";
        return dom;
      };
      _proto.destroy = function destroy() {
        _BaseRenderer.prototype.destroy.call(this);
        this.stroke = null;
      };
      return DomRenderer;
    }(BaseRenderer);
  
    var EaselRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(EaselRenderer, _BaseRenderer);
      function EaselRenderer(element, stroke) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.stroke = stroke;
        _this.name = "EaselRenderer";
        return _this;
      }
      var _proto = EaselRenderer.prototype;
      _proto.onParticleCreated = function onParticleCreated(particle) {
        if (particle.body) {
          this.createSprite(particle);
        } else {
          this.createCircle(particle);
        }
        this.element.addChild(particle.body);
      };
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        if (particle.body) {
          particle.body.x = particle.p.x;
          particle.body.y = particle.p.y;
          particle.body.alpha = particle.alpha;
          particle.body.scaleX = particle.body.scaleY = particle.scale;
          particle.body.rotation = particle.rotation;
        }
      };
      _proto.onParticleDead = function onParticleDead(particle) {
        if (particle.body) {
          particle.body.parent && particle.body.parent.removeChild(particle.body);
          this.pool.expire(particle.body);
          particle.body = null;
        }
        if (particle.graphics) this.pool.expire(particle.graphics);
      }
  
      // private
      ;
      _proto.createSprite = function createSprite(particle) {
        particle.body = this.pool.get(particle.body);
        if (particle.body.parent) return;
        if (particle.body["image"]) {
          particle.body.regX = particle.body.image.width / 2;
          particle.body.regY = particle.body.image.height / 2;
        }
      };
      _proto.createCircle = function createCircle(particle) {
        var graphics = this.pool.get(createjs.Graphics);
        if (this.stroke) {
          if (Types.isString(this.stroke)) {
            graphics.beginStroke(this.stroke);
          } else {
            graphics.beginStroke("#000000");
          }
        }
        graphics.beginFill(particle.color || "#ff0000").drawCircle(0, 0, particle.radius);
        var shape = this.pool.get(createjs.Shape, [graphics]);
        particle.body = shape;
        particle.graphics = graphics;
      };
      _proto.destroy = function destroy() {
        _BaseRenderer.prototype.destroy.call(this);
        this.stroke = null;
      };
      return EaselRenderer;
    }(BaseRenderer);
  
    var PixelRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(PixelRenderer, _BaseRenderer);
      function PixelRenderer(element, rectangle) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.context = _this.element.getContext("2d");
        _this.imageData = null;
        _this.rectangle = rectangle;
        _this.createImageData(rectangle);
        _this.name = "PixelRenderer";
        return _this;
      }
      var _proto = PixelRenderer.prototype;
      _proto.resize = function resize(width, height) {
        this.element.width = width;
        this.element.height = height;
      };
      _proto.createImageData = function createImageData(rectangle) {
        this.rectangle = rectangle ? rectangle : new Rectangle(0, 0, this.element.width, this.element.height);
        this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height);
        this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
      };
      _proto.onProtonUpdate = function onProtonUpdate() {
        this.context.clearRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
        this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
      };
      _proto.onProtonUpdateAfter = function onProtonUpdateAfter() {
        this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
      };
      _proto.onParticleCreated = function onParticleCreated(particle) {};
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        if (this.imageData) {
          this.setPixel(this.imageData, particle.p.x - this.rectangle.x >> 0, particle.p.y - this.rectangle.y >> 0, particle);
        }
      };
      _proto.setPixel = function setPixel(imagedata, x, y, particle) {
        var rgb = particle.rgb;
        if (x < 0 || x > this.element.width || y < 0 || y > this.element.height) return;
        var i = ((y >> 0) * imagedata.width + (x >> 0)) * 4;
        imagedata.data[i] = rgb.r;
        imagedata.data[i + 1] = rgb.g;
        imagedata.data[i + 2] = rgb.b;
        imagedata.data[i + 3] = particle.alpha * 255;
      };
      _proto.onParticleDead = function onParticleDead(particle) {};
      _proto.destroy = function destroy() {
        _BaseRenderer.prototype.destroy.call(this);
        this.stroke = null;
        this.context = null;
        this.imageData = null;
        this.rectangle = null;
      };
      return PixelRenderer;
    }(BaseRenderer);
  
    var PIXIClass;
    var PixiRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(PixiRenderer, _BaseRenderer);
      function PixiRenderer(element, stroke) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.stroke = stroke;
        _this.color = false;
        _this.setColor = false;
        _this.blendMode = null;
        _this.pool.create = function (body, particle) {
          return _this.createBody(body, particle);
        };
        _this.setPIXI(window.PIXI);
        _this.name = "PixiRenderer";
        return _this;
      }
      var _proto = PixiRenderer.prototype;
      _proto.setPIXI = function setPIXI(PIXI) {
        try {
          PIXIClass = PIXI || {
            Sprite: {}
          };
          this.createFromImage = PIXIClass.Sprite.from || PIXIClass.Sprite.fromImage;
        } catch (e) {}
      };
      _proto.onProtonUpdate = function onProtonUpdate() {}
  
      /**
       * @param particle
       */;
      _proto.onParticleCreated = function onParticleCreated(particle) {
        if (particle.body) {
          particle.body = this.pool.get(particle.body, particle);
        } else {
          particle.body = this.pool.get(this.circleConf, particle);
        }
        if (this.blendMode) {
          particle.body.blendMode = this.blendMode;
        }
        this.element.addChild(particle.body);
      }
  
      /**
       * @param particle
       */;
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        this.transform(particle, particle.body);
        if (this.setColor === true || this.color === true) {
          particle.body.tint = ColorUtil.getHex16FromParticle(particle);
        }
      }
  
      /**
       * @param particle
       */;
      _proto.onParticleDead = function onParticleDead(particle) {
        this.element.removeChild(particle.body);
        this.pool.expire(particle.body);
        particle.body = null;
      };
      _proto.transform = function transform(particle, target) {
        target.x = particle.p.x;
        target.y = particle.p.y;
        target.alpha = particle.alpha;
        target.scale.x = particle.scale;
        target.scale.y = particle.scale;
  
        // using cached version of MathUtil.PI_180 for slight performance increase.
        target.rotation = particle.rotation * MathUtil.PI_180; // MathUtil.PI_180;
      };
      _proto.createBody = function createBody(body, particle) {
        if (body.isCircle) return this.createCircle(particle);else return this.createSprite(body);
      };
      _proto.createSprite = function createSprite(body) {
        var sprite = body.isInner ? this.createFromImage(body.src) : new PIXIClass.Sprite(body);
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        return sprite;
      };
      _proto.createCircle = function createCircle(particle) {
        var graphics = new PIXIClass.Graphics();
        if (this.stroke) {
          var stroke = Types.isString(this.stroke) ? this.stroke : 0x000000;
          graphics.beginStroke(stroke);
        }
        graphics.beginFill(particle.color || 0x008ced);
        graphics.drawCircle(0, 0, particle.radius);
        graphics.endFill();
        return graphics;
      };
      _proto.destroy = function destroy(particles) {
        _BaseRenderer.prototype.destroy.call(this);
        var i = particles.length;
        while (i--) {
          var particle = particles[i];
          if (particle.body) {
            this.element.removeChild(particle.body);
          }
        }
      };
      return PixiRenderer;
    }(BaseRenderer);
  
    var MStack = /*#__PURE__*/function () {
      function MStack() {
        this.mats = [];
        this.size = 0;
        for (var i = 0; i < 20; i++) this.mats.push(Mat3.create([0, 0, 0, 0, 0, 0, 0, 0, 0]));
      }
      var _proto = MStack.prototype;
      _proto.set = function set(m, i) {
        if (i === 0) Mat3.set(m, this.mats[0]);else Mat3.multiply(this.mats[i - 1], m, this.mats[i]);
        this.size = Math.max(this.size, i + 1);
      };
      _proto.push = function push(m) {
        if (this.size === 0) Mat3.set(m, this.mats[0]);else Mat3.multiply(this.mats[this.size - 1], m, this.mats[this.size]);
        this.size++;
      };
      _proto.pop = function pop() {
        if (this.size > 0) this.size--;
      };
      _proto.top = function top() {
        return this.mats[this.size - 1];
      };
      return MStack;
    }();
  
    var WebGLRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(WebGLRenderer, _BaseRenderer);
      function WebGLRenderer(element) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.gl = _this.element.getContext("experimental-webgl", {
          antialias: true,
          stencil: false,
          depth: false
        });
        if (!_this.gl) alert("Sorry your browser do not suppest WebGL!");
        _this.initVar();
        _this.setMaxRadius();
        _this.initShaders();
        _this.initBuffers();
        _this.gl.blendEquation(_this.gl.FUNC_ADD);
        _this.gl.blendFunc(_this.gl.SRC_ALPHA, _this.gl.ONE_MINUS_SRC_ALPHA);
        _this.gl.enable(_this.gl.BLEND);
        _this.addImg2Body = _this.addImg2Body.bind(_assertThisInitialized(_this));
        _this.name = "WebGLRenderer";
        return _this;
      }
      var _proto = WebGLRenderer.prototype;
      _proto.init = function init(proton) {
        _BaseRenderer.prototype.init.call(this, proton);
        this.resize(this.element.width, this.element.height);
      };
      _proto.resize = function resize(width, height) {
        this.umat[4] = -2;
        this.umat[7] = 1;
        this.smat[0] = 1 / width;
        this.smat[4] = 1 / height;
        this.mstack.set(this.umat, 0);
        this.mstack.set(this.smat, 1);
        this.gl.viewport(0, 0, width, height);
        this.element.width = width;
        this.element.height = height;
      };
      _proto.setMaxRadius = function setMaxRadius(radius) {
        this.circleCanvasURL = this.createCircle(radius);
      };
      _proto.getVertexShader = function getVertexShader() {
        var vsSource = ["uniform vec2 viewport;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 tMat;", "varying vec2 vTextureCoord;", "varying float alpha;", "void main() {", "vec3 v = tMat * vec3(aVertexPosition, 1.0);", "gl_Position = vec4(v.x, v.y, 0, 1);", "vTextureCoord = aTextureCoord;", "alpha = tMat[0][2];", "}"].join("\n");
        return vsSource;
      };
      _proto.getFragmentShader = function getFragmentShader() {
        var fsSource = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float alpha;", "uniform sampler2D uSampler;", "uniform vec4 color;", "uniform bool useTexture;", "uniform vec3 uColor;", "void main() {", "vec4 textureColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor = textureColor * vec4(uColor, 1.0);", "gl_FragColor.w *= alpha;", "}"].join("\n");
        return fsSource;
      };
      _proto.initVar = function initVar() {
        this.mstack = new MStack();
        this.umat = Mat3.create([2, 0, 1, 0, -2, 0, -1, 1, 1]);
        this.smat = Mat3.create([1 / 100, 0, 1, 0, 1 / 100, 0, 0, 0, 1]);
        this.texturebuffers = {};
      };
      _proto.blendEquation = function blendEquation(A) {
        this.gl.blendEquation(this.gl[A]);
      };
      _proto.blendFunc = function blendFunc(A, B) {
        this.gl.blendFunc(this.gl[A], this.gl[B]);
      };
      _proto.getShader = function getShader(gl, str, fs) {
        var shader = fs ? gl.createShader(gl.FRAGMENT_SHADER) : gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert(gl.getShaderInfoLog(shader));
          return null;
        }
        return shader;
      };
      _proto.initShaders = function initShaders() {
        var fragmentShader = this.getShader(this.gl, this.getFragmentShader(), true);
        var vertexShader = this.getShader(this.gl, this.getVertexShader(), false);
        this.sprogram = this.gl.createProgram();
        this.gl.attachShader(this.sprogram, vertexShader);
        this.gl.attachShader(this.sprogram, fragmentShader);
        this.gl.linkProgram(this.sprogram);
        if (!this.gl.getProgramParameter(this.sprogram, this.gl.LINK_STATUS)) alert("Could not initialise shaders");
        this.gl.useProgram(this.sprogram);
        this.sprogram.vpa = this.gl.getAttribLocation(this.sprogram, "aVertexPosition");
        this.sprogram.tca = this.gl.getAttribLocation(this.sprogram, "aTextureCoord");
        this.gl.enableVertexAttribArray(this.sprogram.tca);
        this.gl.enableVertexAttribArray(this.sprogram.vpa);
        this.sprogram.tMatUniform = this.gl.getUniformLocation(this.sprogram, "tMat");
        this.sprogram.samplerUniform = this.gl.getUniformLocation(this.sprogram, "uSampler");
        this.sprogram.useTex = this.gl.getUniformLocation(this.sprogram, "useTexture");
        this.sprogram.color = this.gl.getUniformLocation(this.sprogram, "uColor");
        this.gl.uniform1i(this.sprogram.useTex, 1);
      };
      _proto.initBuffers = function initBuffers() {
        var vs = [0, 3, 1, 0, 2, 3];
        var idx;
        this.unitIBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vs), this.gl.STATIC_DRAW);
        var i;
        var ids = [];
        for (i = 0; i < 100; i++) ids.push(i);
        idx = new Uint16Array(ids);
        this.unitI33 = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitI33);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW);
        ids = [];
        for (i = 0; i < 100; i++) ids.push(i, i + 1, i + 2);
        idx = new Uint16Array(ids);
        this.stripBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW);
      };
      _proto.createCircle = function createCircle(raidus) {
        this.circleCanvasRadius = WebGLUtil.nhpot(Util.initValue(raidus, 32));
        var canvas = DomUtil.createCanvas("circle_canvas", this.circleCanvasRadius * 2, this.circleCanvasRadius * 2);
        var context = canvas.getContext("2d");
        context.beginPath();
        context.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = "#FFF";
        context.fill();
        return canvas.toDataURL();
      };
      _proto.drawImg2Canvas = function drawImg2Canvas(particle) {
        var _w = particle.body.width;
        var _h = particle.body.height;
        var _width = WebGLUtil.nhpot(particle.body.width);
        var _height = WebGLUtil.nhpot(particle.body.height);
        var _scaleX = particle.body.width / _width;
        var _scaleY = particle.body.height / _height;
        if (!this.texturebuffers[particle.data.src]) this.texturebuffers[particle.data.src] = [this.gl.createTexture(), this.gl.createBuffer(), this.gl.createBuffer()];
        particle.data.texture = this.texturebuffers[particle.data.src][0];
        particle.data.vcBuffer = this.texturebuffers[particle.data.src][1];
        particle.data.tcBuffer = this.texturebuffers[particle.data.src][2];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.data.tcBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, _scaleX, 0.0, 0.0, _scaleY, _scaleY, _scaleY]), this.gl.STATIC_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.data.vcBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, _w, 0.0, 0.0, _h, _w, _h]), this.gl.STATIC_DRAW);
        var context = particle.data.canvas.getContext("2d");
        var data = context.getImageData(0, 0, _width, _height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, particle.data.texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
        particle.data.textureLoaded = true;
        particle.data.textureWidth = _w;
        particle.data.textureHeight = _h;
      };
      _proto.onProtonUpdate = function onProtonUpdate() {
        // this.gl.clearColor(0, 0, 0, 1);
        // this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      };
      _proto.onParticleCreated = function onParticleCreated(particle) {
        particle.data.textureLoaded = false;
        particle.data.tmat = Mat3.create();
        particle.data.tmat[8] = 1;
        particle.data.imat = Mat3.create();
        particle.data.imat[8] = 1;
        if (particle.body) {
          ImgUtil.getImgFromCache(particle.body, this.addImg2Body, particle);
        } else {
          ImgUtil.getImgFromCache(this.circleCanvasURL, this.addImg2Body, particle);
          particle.data.oldScale = particle.radius / this.circleCanvasRadius;
        }
      }
  
      // private
      ;
      _proto.addImg2Body = function addImg2Body(img, particle) {
        if (particle.dead) return;
        particle.body = img;
        particle.data.src = img.src;
        particle.data.canvas = ImgUtil.getCanvasFromCache(img);
        particle.data.oldScale = 1;
        this.drawImg2Canvas(particle);
      };
      _proto.onParticleUpdate = function onParticleUpdate(particle) {
        if (particle.data.textureLoaded) {
          this.updateMatrix(particle);
          this.gl.uniform3f(this.sprogram.color, particle.rgb.r / 255, particle.rgb.g / 255, particle.rgb.b / 255);
          this.gl.uniformMatrix3fv(this.sprogram.tMatUniform, false, this.mstack.top());
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.data.vcBuffer);
          this.gl.vertexAttribPointer(this.sprogram.vpa, 2, this.gl.FLOAT, false, 0, 0);
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.data.tcBuffer);
          this.gl.vertexAttribPointer(this.sprogram.tca, 2, this.gl.FLOAT, false, 0, 0);
          this.gl.bindTexture(this.gl.TEXTURE_2D, particle.data.texture);
          this.gl.uniform1i(this.sprogram.samplerUniform, 0);
          this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
          this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);
          this.mstack.pop();
        }
      };
      _proto.onParticleDead = function onParticleDead(particle) {};
      _proto.updateMatrix = function updateMatrix(particle) {
        var moveOriginMatrix = WebGLUtil.makeTranslation(-particle.data.textureWidth / 2, -particle.data.textureHeight / 2);
        var translationMatrix = WebGLUtil.makeTranslation(particle.p.x, particle.p.y);
        var angel = particle.rotation * MathUtil.PI_180;
        var rotationMatrix = WebGLUtil.makeRotation(angel);
        var scale = particle.scale * particle.data.oldScale;
        var scaleMatrix = WebGLUtil.makeScale(scale, scale);
        var matrix = WebGLUtil.matrixMultiply(moveOriginMatrix, scaleMatrix);
        matrix = WebGLUtil.matrixMultiply(matrix, rotationMatrix);
        matrix = WebGLUtil.matrixMultiply(matrix, translationMatrix);
        Mat3.inverse(matrix, particle.data.imat);
        matrix[2] = particle.alpha;
        this.mstack.push(matrix);
      };
      _proto.destroy = function destroy() {
        _BaseRenderer.prototype.destroy.call(this);
        this.gl = null;
        this.mstack = null;
        this.umat = null;
        this.smat = null;
        this.texturebuffers = null;
      };
      return WebGLRenderer;
    }(BaseRenderer);
  
    var CustomRenderer = /*#__PURE__*/function (_BaseRenderer) {
      _inheritsLoose(CustomRenderer, _BaseRenderer);
      function CustomRenderer(element) {
        var _this;
        _this = _BaseRenderer.call(this, element) || this;
        _this.name = "CustomRenderer";
        return _this;
      }
      return CustomRenderer;
    }(BaseRenderer);
  
    var LineZone = /*#__PURE__*/function (_Zone) {
      _inheritsLoose(LineZone, _Zone);
      function LineZone(x1, y1, x2, y2, direction) {
        var _this;
        _this = _Zone.call(this) || this;
        if (x2 - x1 >= 0) {
          _this.x1 = x1;
          _this.y1 = y1;
          _this.x2 = x2;
          _this.y2 = y2;
        } else {
          _this.x1 = x2;
          _this.y1 = y2;
          _this.x2 = x1;
          _this.y2 = y1;
        }
        _this.dx = _this.x2 - _this.x1;
        _this.dy = _this.y2 - _this.y1;
        _this.minx = Math.min(_this.x1, _this.x2);
        _this.miny = Math.min(_this.y1, _this.y2);
        _this.maxx = Math.max(_this.x1, _this.x2);
        _this.maxy = Math.max(_this.y1, _this.y2);
        _this.dot = _this.x2 * _this.y1 - _this.x1 * _this.y2;
        _this.xxyy = _this.dx * _this.dx + _this.dy * _this.dy;
        _this.gradient = _this.getGradient();
        _this.length = _this.getLength();
        _this.direction = Util.initValue(direction, ">");
        return _this;
      }
      var _proto = LineZone.prototype;
      _proto.getPosition = function getPosition() {
        this.random = Math.random();
        this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
        this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
        return this.vector;
      };
      _proto.getDirection = function getDirection(x, y) {
        var A = this.dy;
        var B = -this.dx;
        var C = this.dot;
        var D = B === 0 ? 1 : B;
        if ((A * x + B * y + C) * D > 0) return true;else return false;
      };
      _proto.getDistance = function getDistance(x, y) {
        var A = this.dy;
        var B = -this.dx;
        var C = this.dot;
        var D = A * x + B * y + C;
        return D / Math.sqrt(this.xxyy);
      };
      _proto.getSymmetric = function getSymmetric(v) {
        var tha2 = v.getGradient();
        var tha1 = this.getGradient();
        var tha = 2 * (tha1 - tha2);
        var oldx = v.x;
        var oldy = v.y;
        v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
        v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
        return v;
      };
      _proto.getGradient = function getGradient() {
        return Math.atan2(this.dy, this.dx);
      };
      _proto.rangeOut = function rangeOut(particle) {
        var angle = Math.abs(this.getGradient());
        if (angle <= MathUtil.PI / 4) {
          if (particle.p.x <= this.maxx && particle.p.x >= this.minx) return true;
        } else {
          if (particle.p.y <= this.maxy && particle.p.y >= this.miny) return true;
        }
        return false;
      };
      _proto.getLength = function getLength() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
      };
      _proto.crossing = function crossing(particle) {
        if (this.crossType === "dead") {
          if (this.direction === ">" || this.direction === "R" || this.direction === "right" || this.direction === "down") {
            if (!this.rangeOut(particle)) return;
            if (this.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
          } else {
            if (!this.rangeOut(particle)) return;
            if (!this.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
          }
        } else if (this.crossType === "bound") {
          if (!this.rangeOut(particle)) return;
          if (this.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
            if (this.dx === 0) {
              particle.v.x *= -1;
            } else if (this.dy === 0) {
              particle.v.y *= -1;
            } else {
              this.getSymmetric(particle.v);
            }
          }
        } else if (this.crossType === "cross") {
          if (this.alert) {
            console.error("Sorry, LineZone does not support cross method!");
            this.alert = false;
          }
        }
      };
      return LineZone;
    }(Zone);
  
    var CircleZone = /*#__PURE__*/function (_Zone) {
      _inheritsLoose(CircleZone, _Zone);
      function CircleZone(x, y, radius) {
        var _this;
        _this = _Zone.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        _this.angle = 0;
        _this.center = {
          x: x,
          y: y
        };
        return _this;
      }
      var _proto = CircleZone.prototype;
      _proto.getPosition = function getPosition() {
        this.angle = MathUtil.PIx2 * Math.random();
        this.randomRadius = Math.random() * this.radius;
        this.vector.x = this.x + this.randomRadius * Math.cos(this.angle);
        this.vector.y = this.y + this.randomRadius * Math.sin(this.angle);
        return this.vector;
      };
      _proto.setCenter = function setCenter(x, y) {
        this.center.x = x;
        this.center.y = y;
      };
      _proto.crossing = function crossing(particle) {
        var d = particle.p.distanceTo(this.center);
        if (this.crossType === "dead") {
          if (d - particle.radius > this.radius) particle.dead = true;
        } else if (this.crossType === "bound") {
          if (d + particle.radius >= this.radius) this.getSymmetric(particle);
        } else if (this.crossType === "cross") {
          if (this.alert) {
            console.error("Sorry, CircleZone does not support cross method!");
            this.alert = false;
          }
        }
      };
      _proto.getSymmetric = function getSymmetric(particle) {
        var tha2 = particle.v.getGradient();
        var tha1 = this.getGradient(particle);
        var tha = 2 * (tha1 - tha2);
        var oldx = particle.v.x;
        var oldy = particle.v.y;
        particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
        particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
      };
      _proto.getGradient = function getGradient(particle) {
        return -MathUtil.PI_2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
      };
      return CircleZone;
    }(Zone);
  
    var RectZone = /*#__PURE__*/function (_Zone) {
      _inheritsLoose(RectZone, _Zone);
      function RectZone(x, y, width, height) {
        var _this;
        _this = _Zone.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
      }
      var _proto = RectZone.prototype;
      _proto.getPosition = function getPosition() {
        this.vector.x = this.x + Math.random() * this.width;
        this.vector.y = this.y + Math.random() * this.height;
        return this.vector;
      };
      _proto.crossing = function crossing(particle) {
        // particle dead zone
        if (this.crossType === "dead") {
          if (particle.p.x + particle.radius < this.x) particle.dead = true;else if (particle.p.x - particle.radius > this.x + this.width) particle.dead = true;
          if (particle.p.y + particle.radius < this.y) particle.dead = true;else if (particle.p.y - particle.radius > this.y + this.height) particle.dead = true;
        }
  
        // particle bound zone
        else if (this.crossType === "bound") {
          if (particle.p.x - particle.radius < this.x) {
            particle.p.x = this.x + particle.radius;
            particle.v.x *= -1;
          } else if (particle.p.x + particle.radius > this.x + this.width) {
            particle.p.x = this.x + this.width - particle.radius;
            particle.v.x *= -1;
          }
          if (particle.p.y - particle.radius < this.y) {
            particle.p.y = this.y + particle.radius;
            particle.v.y *= -1;
          } else if (particle.p.y + particle.radius > this.y + this.height) {
            particle.p.y = this.y + this.height - particle.radius;
            particle.v.y *= -1;
          }
        }
  
        // particle cross zone
        else if (this.crossType === "cross") {
          if (particle.p.x + particle.radius < this.x && particle.v.x <= 0) {
            particle.p.x = this.x + this.width + particle.radius;
          } else if (particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0) {
            particle.p.x = this.x - particle.radius;
          }
          if (particle.p.y + particle.radius < this.y && particle.v.y <= 0) {
            particle.p.y = this.y + this.height + particle.radius;
          } else if (particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0) {
            particle.p.y = this.y - particle.radius;
          }
        }
      };
      return RectZone;
    }(Zone);
  
    var ImageZone = /*#__PURE__*/function (_Zone) {
      _inheritsLoose(ImageZone, _Zone);
      function ImageZone(imageData, x, y, d) {
        var _this;
        _this = _Zone.call(this) || this;
        _this.reset(imageData, x, y, d);
        return _this;
      }
      var _proto = ImageZone.prototype;
      _proto.reset = function reset(imageData, x, y, d) {
        this.imageData = imageData;
        this.x = Util.initValue(x, 0);
        this.y = Util.initValue(y, 0);
        this.d = Util.initValue(d, 2);
        this.vectors = [];
        this.setVectors();
      };
      _proto.setVectors = function setVectors() {
        var i, j;
        var length1 = this.imageData.width;
        var length2 = this.imageData.height;
        for (i = 0; i < length1; i += this.d) {
          for (j = 0; j < length2; j += this.d) {
            var index = ((j >> 0) * length1 + (i >> 0)) * 4;
            if (this.imageData.data[index + 3] > 0) {
              this.vectors.push({
                x: i + this.x,
                y: j + this.y
              });
            }
          }
        }
        return this.vector;
      };
      _proto.getBound = function getBound(x, y) {
        var index = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
        if (this.imageData.data[index + 3] > 0) return true;else return false;
      };
      _proto.getPosition = function getPosition() {
        var vector = Util.getRandFromArray(this.vectors);
        return this.vector.copy(vector);
      };
      _proto.getColor = function getColor(x, y) {
        x -= this.x;
        y -= this.y;
        var i = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
        return {
          r: this.imageData.data[i],
          g: this.imageData.data[i + 1],
          b: this.imageData.data[i + 2],
          a: this.imageData.data[i + 3]
        };
      };
      _proto.crossing = function crossing(particle) {
        if (this.crossType === "dead") {
          if (this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.dead = true;else particle.dead = false;
        } else if (this.crossType === "bound") {
          if (!this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.v.negate();
        }
      };
      _proto.destroy = function destroy() {
        _Zone.prototype.destroy.call(this);
        this.imageData = null;
      };
      return ImageZone;
    }(Zone);
  
    var Debug = {
      addEventListener: function addEventListener(proton, func) {
        proton.addEventListener("PROTON_UPDATE_AFTER", function () {
          return func();
        });
      },
      getStyle: function getStyle(color) {
        if (color === void 0) {
          color = "#ff0000";
        }
        var rgb = ColorUtil.hexToRgb(color);
        return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0.5)";
      },
      drawZone: function drawZone(proton, canvas, zone, clear) {
        var context = canvas.getContext("2d");
        var style = this.getStyle();
        this.addEventListener(proton, function () {
          if (clear) context.clearRect(0, 0, canvas.width, canvas.height);
          if (zone instanceof PointZone) {
            context.beginPath();
            context.fillStyle = style;
            context.arc(zone.x, zone.y, 10, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
          } else if (zone instanceof LineZone) {
            context.beginPath();
            context.strokeStyle = style;
            context.moveTo(zone.x1, zone.y1);
            context.lineTo(zone.x2, zone.y2);
            context.stroke();
            context.closePath();
          } else if (zone instanceof RectZone) {
            context.beginPath();
            context.strokeStyle = style;
            context.drawRect(zone.x, zone.y, zone.width, zone.height);
            context.stroke();
            context.closePath();
          } else if (zone instanceof CircleZone) {
            context.beginPath();
            context.strokeStyle = style;
            context.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2, true);
            context.stroke();
            context.closePath();
          }
        });
      },
      drawEmitter: function drawEmitter(proton, canvas, emitter, clear) {
        var context = canvas.getContext("2d");
        var style = this.getStyle();
        this.addEventListener(proton, function () {
          if (clear) context.clearRect(0, 0, canvas.width, canvas.height);
          context.beginPath();
          context.fillStyle = style;
          context.arc(emitter.p.x, emitter.p.y, 10, 0, Math.PI * 2, true);
          context.fill();
          context.closePath();
        });
      }
    };
  
    // namespace
    Proton.Particle = Particle;
    Proton.Pool = Pool;
    Proton.Util = Util;
    Proton.ColorUtil = ColorUtil;
    Proton.MathUtil = MathUtil;
    Proton.Vector2D = Proton.Vector = Vector2D;
    Proton.Polar2D = Proton.Polar = Polar2D;
    Proton.ArraySpan = ArraySpan;
    Proton.Rectangle = Rectangle;
    Proton.Rate = Rate;
    Proton.ease = ease;
    Proton.Span = Span$1;
    Proton.Mat3 = Mat3;
    Proton.getSpan = function (a, b, center) {
      return new Span$1(a, b, center);
    };
    Proton.createArraySpan = ArraySpan.createArraySpan;
    Proton.Initialize = Proton.Init = Initialize;
    Proton.Life = Proton.L = Life;
    Proton.Position = Proton.P = Position;
    Proton.Velocity = Proton.V = Velocity;
    Proton.Mass = Proton.M = Mass;
    Proton.Radius = Proton.R = Radius;
    Proton.Body = Proton.B = Body;
    Proton.Behaviour = Behaviour;
    Proton.Force = Proton.F = Force;
    Proton.Attraction = Proton.A = Attraction;
    Proton.RandomDrift = Proton.RD = RandomDrift;
    Proton.Gravity = Proton.G = Gravity;
    Proton.Collision = Collision;
    Proton.CrossZone = CrossZone;
    Proton.Alpha = Alpha;
    Proton.Scale = Proton.S = Scale;
    Proton.Rotate = Rotate;
    Proton.Color = Color;
    Proton.Repulsion = Repulsion;
    Proton.Cyclone = Cyclone;
    Proton.GravityWell = GravityWell;
    Proton.Emitter = Emitter;
    Proton.BehaviourEmitter = BehaviourEmitter;
    Proton.FollowEmitter = FollowEmitter;
    Proton.Zone = Zone;
    Proton.LineZone = LineZone;
    Proton.CircleZone = CircleZone;
    Proton.PointZone = PointZone;
    Proton.RectZone = RectZone;
    Proton.ImageZone = ImageZone;
    Proton.CanvasRenderer = CanvasRenderer;
    Proton.DomRenderer = DomRenderer;
    Proton.EaselRenderer = EaselRenderer;
    Proton.PixiRenderer = PixiRenderer;
    Proton.PixelRenderer = PixelRenderer;
    Proton.WebGLRenderer = Proton.WebGlRenderer = WebGLRenderer;
    Proton.CustomRenderer = CustomRenderer;
    Proton.Debug = Debug;
    Util.assign(Proton, ease);
  
    return Proton;
  
  }));
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG9uLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvV2ViR0xVdGlsLmpzIiwiLi4vc3JjL3V0aWxzL0RvbVV0aWwuanMiLCIuLi9zcmMvdXRpbHMvSW1nVXRpbC5qcyIsIi4uL3NyYy91dGlscy9VdGlsLmpzIiwiLi4vc3JjL3V0aWxzL1B1aWQuanMiLCIuLi9zcmMvY29yZS9Qb29sLmpzIiwiLi4vc3JjL2RlYnVnL1N0YXRzLmpzIiwiLi4vc3JjL2V2ZW50cy9FdmVudERpc3BhdGNoZXIuanMiLCIuLi9zcmMvbWF0aC9NYXRoVXRpbC5qcyIsIi4uL3NyYy9tYXRoL0ludGVncmF0aW9uLmpzIiwiLi4vc3JjL2NvcmUvUHJvdG9uLmpzIiwiLi4vc3JjL3V0aWxzL1JnYi5qcyIsIi4uL3NyYy91dGlscy9Qcm9wVXRpbC5qcyIsIi4uL3NyYy9tYXRoL2Vhc2UuanMiLCIuLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIi4uL3NyYy9jb3JlL1BhcnRpY2xlLmpzIiwiLi4vc3JjL3V0aWxzL0NvbG9yVXRpbC5qcyIsIi4uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCIuLi9zcmMvbWF0aC9NYXQzLmpzIiwiLi4vc3JjL21hdGgvU3Bhbi5qcyIsIi4uL3NyYy9tYXRoL0FycmF5U3Bhbi5qcyIsIi4uL3NyYy9tYXRoL1JlY3RhbmdsZS5qcyIsIi4uL3NyYy9pbml0aWFsaXplL1JhdGUuanMiLCIuLi9zcmMvaW5pdGlhbGl6ZS9Jbml0aWFsaXplLmpzIiwiLi4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIi4uL3NyYy96b25lL1pvbmUuanMiLCIuLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCIuLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIi4uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwiLi4vc3JjL2luaXRpYWxpemUvTWFzcy5qcyIsIi4uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIi4uL3NyYy9pbml0aWFsaXplL0JvZHkuanMiLCIuLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsIi4uL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCIuLi9zcmMvYmVoYXZpb3VyL0F0dHJhY3Rpb24uanMiLCIuLi9zcmMvYmVoYXZpb3VyL1JhbmRvbURyaWZ0LmpzIiwiLi4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwiLi4vc3JjL2JlaGF2aW91ci9Db2xsaXNpb24uanMiLCIuLi9zcmMvYmVoYXZpb3VyL0Nyb3NzWm9uZS5qcyIsIi4uL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCIuLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIiwiLi4vc3JjL2JlaGF2aW91ci9Sb3RhdGUuanMiLCIuLi9zcmMvYmVoYXZpb3VyL0NvbG9yLmpzIiwiLi4vc3JjL2JlaGF2aW91ci9DeWNsb25lLmpzIiwiLi4vc3JjL2JlaGF2aW91ci9SZXB1bHNpb24uanMiLCIuLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHlXZWxsLmpzIiwiLi4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCIuLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwiLi4vc3JjL2VtaXR0ZXIvQmVoYXZpb3VyRW1pdHRlci5qcyIsIi4uL3NyYy9lbWl0dGVyL0ZvbGxvd0VtaXR0ZXIuanMiLCIuLi9zcmMvdXRpbHMvVHlwZXMuanMiLCIuLi9zcmMvcmVuZGVyL0Jhc2VSZW5kZXJlci5qcyIsIi4uL3NyYy9yZW5kZXIvQ2FudmFzUmVuZGVyZXIuanMiLCIuLi9zcmMvcmVuZGVyL0RvbVJlbmRlcmVyLmpzIiwiLi4vc3JjL3JlbmRlci9FYXNlbFJlbmRlcmVyLmpzIiwiLi4vc3JjL3JlbmRlci9QaXhlbFJlbmRlcmVyLmpzIiwiLi4vc3JjL3JlbmRlci9QaXhpUmVuZGVyZXIuanMiLCIuLi9zcmMvdXRpbHMvTVN0YWNrLmpzIiwiLi4vc3JjL3JlbmRlci9XZWJHTFJlbmRlcmVyLmpzIiwiLi4vc3JjL3JlbmRlci9DdXN0b21SZW5kZXJlci5qcyIsIi4uL3NyYy96b25lL0xpbmVab25lLmpzIiwiLi4vc3JjL3pvbmUvQ2lyY2xlWm9uZS5qcyIsIi4uL3NyYy96b25lL1JlY3Rab25lLmpzIiwiLi4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwiLi4vc3JjL2RlYnVnL0RlYnVnLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLldlYkdMVXRpbFxuICAgKiBAbWV0aG9kIGlwb3RcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uXG4gICAqIEB0b2RvIGFkZCBsZW5ndGggZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aFxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXBvdChsZW5ndGgpIHtcbiAgICByZXR1cm4gKGxlbmd0aCAmIChsZW5ndGggLSAxKSkgPT09IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLldlYkdMVXRpbFxuICAgKiBAbWV0aG9kIG5ocG90XG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvblxuICAgKiBAdG9kbyBhZGQgbGVuZ3RoIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgbmhwb3QobGVuZ3RoKSB7XG4gICAgLS1sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzMjsgaSA8PD0gMSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgKGxlbmd0aCA+PiBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoICsgMTtcbiAgfSxcblxuICAvKipcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uV2ViR0xVdGlsXG4gICAqIEBtZXRob2QgbWFrZVRyYW5zbGF0aW9uXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvblxuICAgKiBAdG9kbyBhZGQgdHgsIHR5IGRlc2NyaXB0aW9uXG4gICAqIEB0b2RvIGFkZCByZXR1cm4gZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHR4IGVpdGhlciAwIG9yIDFcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHR5IGVpdGhlciAwIG9yIDFcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgbWFrZVRyYW5zbGF0aW9uKHR4LCB0eSkge1xuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMSwgMCwgdHgsIHR5LCAxXTtcbiAgfSxcblxuICAvKipcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uV2ViR0xVdGlsXG4gICAqIEBtZXRob2QgbWFrZVJvdGF0aW9uXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvblxuICAgKiBAdG9kbyBhZGQgcmV0dXJuIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBhbmdsZUluUmFkaWFuc1xuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBtYWtlUm90YXRpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbYywgLXMsIDAsIHMsIGMsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5XZWJHTFV0aWxcbiAgICogQG1ldGhvZCBtYWtlU2NhbGVcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uXG4gICAqIEB0b2RvIGFkZCB0eCwgdHkgZGVzY3JpcHRpb25cbiAgICogQHRvZG8gYWRkIHJldHVybiBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gc3ggZWl0aGVyIDAgb3IgMVxuICAgKiBAcGFyYW0ge051bWJlcn0gc3kgZWl0aGVyIDAgb3IgMVxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBtYWtlU2NhbGUoc3gsIHN5KSB7XG4gICAgcmV0dXJuIFtzeCwgMCwgMCwgMCwgc3ksIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5XZWJHTFV0aWxcbiAgICogQG1ldGhvZCBtYXRyaXhNdWx0aXBseVxuICAgKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb25cbiAgICogQHRvZG8gYWRkIGEsIGIgZGVzY3JpcHRpb25cbiAgICogQHRvZG8gYWRkIHJldHVybiBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYVxuICAgKiBAcGFyYW0ge09iamVjdH0gYlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBtYXRyaXhNdWx0aXBseShhLCBiKSB7XG4gICAgbGV0IGEwMCA9IGFbMCAqIDMgKyAwXTtcbiAgICBsZXQgYTAxID0gYVswICogMyArIDFdO1xuICAgIGxldCBhMDIgPSBhWzAgKiAzICsgMl07XG4gICAgbGV0IGExMCA9IGFbMSAqIDMgKyAwXTtcbiAgICBsZXQgYTExID0gYVsxICogMyArIDFdO1xuICAgIGxldCBhMTIgPSBhWzEgKiAzICsgMl07XG4gICAgbGV0IGEyMCA9IGFbMiAqIDMgKyAwXTtcbiAgICBsZXQgYTIxID0gYVsyICogMyArIDFdO1xuICAgIGxldCBhMjIgPSBhWzIgKiAzICsgMl07XG4gICAgbGV0IGIwMCA9IGJbMCAqIDMgKyAwXTtcbiAgICBsZXQgYjAxID0gYlswICogMyArIDFdO1xuICAgIGxldCBiMDIgPSBiWzAgKiAzICsgMl07XG4gICAgbGV0IGIxMCA9IGJbMSAqIDMgKyAwXTtcbiAgICBsZXQgYjExID0gYlsxICogMyArIDFdO1xuICAgIGxldCBiMTIgPSBiWzEgKiAzICsgMl07XG4gICAgbGV0IGIyMCA9IGJbMiAqIDMgKyAwXTtcbiAgICBsZXQgYjIxID0gYlsyICogMyArIDFdO1xuICAgIGxldCBiMjIgPSBiWzIgKiAzICsgMl07XG5cbiAgICByZXR1cm4gW1xuICAgICAgYTAwICogYjAwICsgYTAxICogYjEwICsgYTAyICogYjIwLFxuICAgICAgYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxLFxuICAgICAgYTAwICogYjAyICsgYTAxICogYjEyICsgYTAyICogYjIyLFxuICAgICAgYTEwICogYjAwICsgYTExICogYjEwICsgYTEyICogYjIwLFxuICAgICAgYTEwICogYjAxICsgYTExICogYjExICsgYTEyICogYjIxLFxuICAgICAgYTEwICogYjAyICsgYTExICogYjEyICsgYTEyICogYjIyLFxuICAgICAgYTIwICogYjAwICsgYTIxICogYjEwICsgYTIyICogYjIwLFxuICAgICAgYTIwICogYjAxICsgYTIxICogYjExICsgYTIyICogYjIxLFxuICAgICAgYTIwICogYjAyICsgYTIxICogYjEyICsgYTIyICogYjIyXG4gICAgXTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgY2FudmFzLiBUaGUgb3BhY2l0eSBpcyBieSBkZWZhdWx0IHNldCB0byAwXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkRvbVV0aWxcbiAgICogQG1ldGhvZCBjcmVhdGVDYW52YXNcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9ICRpZCB0aGUgY2FudmFzJyBpZFxuICAgKiBAcGFyYW0ge051bWJlcn0gJHdpZHRoIHRoZSBjYW52YXMnIHdpZHRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAkaGVpZ2h0IHRoZSBjYW52YXMnIGhlaWdodFxuICAgKiBAcGFyYW0ge1N0cmluZ30gWyRwb3NpdGlvbj1hYnNvbHV0ZV0gdGhlIGNhbnZhcycgcG9zaXRpb24sIGRlZmF1bHQgaXMgJ2Fic29sdXRlJ1xuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBjcmVhdGVDYW52YXMoaWQsIHdpZHRoLCBoZWlnaHQsIHBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiKSB7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGRvbS5pZCA9IGlkO1xuICAgIGRvbS53aWR0aCA9IHdpZHRoO1xuICAgIGRvbS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgZG9tLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGRvbS5zdHlsZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMudHJhbnNmb3JtKGRvbSwgLTUwMCwgLTUwMCwgMCwgMCk7XG5cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuXG4gIGNyZWF0ZURpdihpZCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkb20uaWQgPSBpZDtcbiAgICBkb20uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5yZXNpemUoZG9tLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBkb207XG4gIH0sXG5cbiAgcmVzaXplKGRvbSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGRvbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGRvbS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgZG9tLnN0eWxlLm1hcmdpbkxlZnQgPSAtd2lkdGggLyAyICsgXCJweFwiO1xuICAgIGRvbS5zdHlsZS5tYXJnaW5Ub3AgPSAtaGVpZ2h0IC8gMiArIFwicHhcIjtcbiAgfSxcblxuICAvKipcbiAgICogQWRkcyBhIHRyYW5zZm9ybTogdHJhbnNsYXRlKCksIHNjYWxlKCksIHJvdGF0ZSgpIHRvIGEgZ2l2ZW4gZGl2IGRvbSBmb3IgYWxsIGJyb3dzZXJzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkRvbVV0aWxcbiAgICogQG1ldGhvZCB0cmFuc2Zvcm1cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gZGl2XG4gICAqIEBwYXJhbSB7TnVtYmVyfSAkeFxuICAgKiBAcGFyYW0ge051bWJlcn0gJHlcbiAgICogQHBhcmFtIHtOdW1iZXJ9ICRzY2FsZVxuICAgKiBAcGFyYW0ge051bWJlcn0gJHJvdGF0ZVxuICAgKi9cbiAgdHJhbnNmb3JtKGRpdiwgeCwgeSwgc2NhbGUsIHJvdGF0ZSkge1xuICAgIGRpdi5zdHlsZS53aWxsQ2hhbmdlID0gXCJ0cmFuc2Zvcm1cIjtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KSBzY2FsZSgke3NjYWxlfSkgcm90YXRlKCR7cm90YXRlfWRlZylgO1xuICAgIHRoaXMuY3NzMyhkaXYsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSk7XG4gIH0sXG5cbiAgdHJhbnNmb3JtM2QoZGl2LCB4LCB5LCBzY2FsZSwgcm90YXRlKSB7XG4gICAgZGl2LnN0eWxlLndpbGxDaGFuZ2UgPSBcInRyYW5zZm9ybVwiO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMCkgc2NhbGUoJHtzY2FsZX0pIHJvdGF0ZSgke3JvdGF0ZX1kZWcpYDtcbiAgICB0aGlzLmNzczMoZGl2LCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB0aGlzLmNzczMoZGl2LCBcInRyYW5zZm9ybVwiLCB0cmFuc2Zvcm0pO1xuICB9LFxuXG4gIGNzczMoZGl2LCBrZXksIHZhbCkge1xuICAgIGNvbnN0IGJrZXkgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuXG4gICAgZGl2LnN0eWxlW2BXZWJraXQke2JrZXl9YF0gPSB2YWw7XG4gICAgZGl2LnN0eWxlW2BNb3oke2JrZXl9YF0gPSB2YWw7XG4gICAgZGl2LnN0eWxlW2BPJHtia2V5fWBdID0gdmFsO1xuICAgIGRpdi5zdHlsZVtgbXMke2JrZXl9YF0gPSB2YWw7XG4gICAgZGl2LnN0eWxlW2Ake2tleX1gXSA9IHZhbDtcbiAgfVxufTtcbiIsImltcG9ydCBXZWJHTFV0aWwgZnJvbSBcIi4vV2ViR0xVdGlsXCI7XG5pbXBvcnQgRG9tVXRpbCBmcm9tIFwiLi9Eb21VdGlsXCI7XG5cbmNvbnN0IGltZ3NDYWNoZSA9IHt9O1xuY29uc3QgY2FudmFzQ2FjaGUgPSB7fTtcbmxldCBjYW52YXNJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBnZXQgdGhlIGltYWdlIGRhdGEuIEl0IGNvdWxkIGJlIG5lY2Vzc2FyeSB0byBjcmVhdGUgYSBQcm90b24uWm9uZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIGdldEltYWdlRGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSAgIGNvbnRleHQgYW55IGNhbnZhcywgbXVzdCBiZSBhIDJkQ29udGV4dCAnY2FudmFzLmdldENvbnRleHQoJzJkJyknXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgICAgaW1hZ2UgICBjb3VsZCBiZSBhbnkgZG9tIGltYWdlLCBlLmcuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzSXNBbkltZ1RhZycpO1xuICAgKiBAcGFyYW0ge1Byb3Rvbi5SZWN0YW5nbGV9ICAgIHJlY3RcbiAgICovXG4gIGdldEltYWdlRGF0YShjb250ZXh0LCBpbWFnZSwgcmVjdCkge1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCByZWN0LngsIHJlY3QueSk7XG4gICAgY29uc3QgaW1hZ2VkYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEocmVjdC54LCByZWN0LnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGltYWdlZGF0YTtcbiAgfSxcblxuICAvKipcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIGdldEltZ0Zyb21DYWNoZVxuICAgKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb25cbiAgICogQHRvZG8gZGVzY3JpYmUgZnVuY1xuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGltZ1xuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gICAgIHBhcnRpY2xlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgICAgICAgICAgZHJhd0NhbnZhcyAgc2V0IHRvIHRydWUgaWYgYSBjYW52YXMgc2hvdWxkIGJlIHNhdmVkIGludG8gcGFydGljbGUuZGF0YS5jYW52YXNcbiAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgICAgICBmdW5jXG4gICAqL1xuICBnZXRJbWdGcm9tQ2FjaGUoaW1nLCBjYWxsYmFjaywgcGFyYW0pIHtcbiAgICBjb25zdCBzcmMgPSB0eXBlb2YgaW1nID09PSBcInN0cmluZ1wiID8gaW1nIDogaW1nLnNyYztcblxuICAgIGlmIChpbWdzQ2FjaGVbc3JjXSkge1xuICAgICAgY2FsbGJhY2soaW1nc0NhY2hlW3NyY10sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IGUgPT4ge1xuICAgICAgICBpbWdzQ2FjaGVbc3JjXSA9IGUudGFyZ2V0O1xuICAgICAgICBjYWxsYmFjayhpbWdzQ2FjaGVbc3JjXSwgcGFyYW0pO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIH1cbiAgfSxcblxuICBnZXRDYW52YXNGcm9tQ2FjaGUoaW1nLCBjYWxsYmFjaywgcGFyYW0pIHtcbiAgICBjb25zdCBzcmMgPSBpbWcuc3JjO1xuXG4gICAgaWYgKCFjYW52YXNDYWNoZVtzcmNdKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IFdlYkdMVXRpbC5uaHBvdChpbWcud2lkdGgpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gV2ViR0xVdGlsLm5ocG90KGltZy5oZWlnaHQpO1xuXG4gICAgICBjb25zdCBjYW52YXMgPSBEb21VdGlsLmNyZWF0ZUNhbnZhcyhgcHJvdG9uX2NhbnZhc19jYWNoZV8keysrY2FudmFzSWR9YCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcblxuICAgICAgY2FudmFzQ2FjaGVbc3JjXSA9IGNhbnZhcztcbiAgICB9XG5cbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhjYW52YXNDYWNoZVtzcmNdLCBwYXJhbSk7XG5cbiAgICByZXR1cm4gY2FudmFzQ2FjaGVbc3JjXTtcbiAgfVxufTtcbiIsImltcG9ydCBJbWdVdGlsIGZyb20gXCIuL0ltZ1V0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBhIHNwZWNpZmljIHZhbHVlLCBjb3VsZCBiZSBldmVyeXRoaW5nIGJ1dCBudWxsIG9yIHVuZGVmaW5lZFxuICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICovXG4gIGluaXRWYWx1ZSh2YWx1ZSwgZGVmYXVsdHMpIHtcbiAgICB2YWx1ZSA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGRlZmF1bHRzO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGFycmF5XG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlV0aWxcbiAgICogQG1ldGhvZCBpc0FycmF5XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlIEFueSBhcnJheVxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICovXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXN0cm95ZXMgdGhlIGdpdmVuIGFycmF5XG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlV0aWxcbiAgICogQG1ldGhvZCBlbXB0eUFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IEFueSBhcnJheVxuICAgKi9cbiAgZW1wdHlBcnJheShhcnIpIHtcbiAgICBpZiAoYXJyKSBhcnIubGVuZ3RoID0gMDtcbiAgfSxcblxuICB0b0FycmF5KGFycikge1xuICAgIHJldHVybiB0aGlzLmlzQXJyYXkoYXJyKSA/IGFyciA6IFthcnJdO1xuICB9LFxuXG4gIHNsaWNlQXJyYXkoYXJyMSwgaW5kZXgsIGFycjIpIHtcbiAgICB0aGlzLmVtcHR5QXJyYXkoYXJyMik7XG4gICAgZm9yIChsZXQgaSA9IGluZGV4OyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMi5wdXNoKGFycjFbaV0pO1xuICAgIH1cbiAgfSxcblxuICBnZXRSYW5kRnJvbUFycmF5KGFycikge1xuICAgIGlmICghYXJyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYXJyW01hdGguZmxvb3IoYXJyLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcbiAgfSxcblxuICAvKipcbiAgICogRGVzdHJveWVzIHRoZSBnaXZlbiBvYmplY3RcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIGVtcHR5T2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogQW55IG9iamVjdFxuICAgKi9cbiAgZW1wdHlPYmplY3Qob2JqLCBpZ25vcmUgPSBudWxsKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgaWYgKGlnbm9yZSAmJiBpZ25vcmUuaW5kZXhPZihrZXkpID4gLTEpIGNvbnRpbnVlO1xuICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTWFrZXMgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcyBhbmQgYmluZHMgdGhlIGdpdmVuIGFycmF5XG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlV0aWxcbiAgICogQG1ldGhvZCBjbGFzc0FwcGx5XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yIEEgY2xhc3MgdG8gbWFrZSBhbiBpbnN0YW5jZSBmcm9tXG4gICAqIEBwYXJhbSB7QXJyYXl9IFthcmdzXSBBbnkgYXJyYXkgdG8gYmluZCBpdCB0byB0aGUgY29uc3RydWN0b3JcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgaW5zdGFuY2Ugb2YgY29uc3RydWN0b3IsIG9wdGlvbmFsbHkgYmluZCB3aXRoIGFyZ3NcbiAgICovXG4gIGNsYXNzQXBwbHkoY29uc3RydWN0b3IsIGFyZ3MgPSBudWxsKSB7XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZhY3RvcnlGdW5jID0gY29uc3RydWN0b3IuYmluZC5hcHBseShjb25zdHJ1Y3RvciwgW251bGxdLmNvbmNhdChhcmdzKSk7XG4gICAgICByZXR1cm4gbmV3IEZhY3RvcnlGdW5jKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgZ2V0IHRoZSBpbWFnZSBkYXRhLiBJdCBjb3VsZCBiZSBuZWNlc3NhcnkgdG8gY3JlYXRlIGEgUHJvdG9uLlpvbmUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlV0aWxcbiAgICogQG1ldGhvZCBnZXRJbWFnZURhdGFcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gICBjb250ZXh0IGFueSBjYW52YXMsIG11c3QgYmUgYSAyZENvbnRleHQgJ2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpJ1xuICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICAgIGltYWdlICAgY291bGQgYmUgYW55IGRvbSBpbWFnZSwgZS5nLiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpc0lzQW5JbWdUYWcnKTtcbiAgICogQHBhcmFtIHtQcm90b24uUmVjdGFuZ2xlfSAgICByZWN0XG4gICAqL1xuICBnZXRJbWFnZURhdGEoY29udGV4dCwgaW1hZ2UsIHJlY3QpIHtcbiAgICByZXR1cm4gSW1nVXRpbC5nZXRJbWFnZURhdGEoY29udGV4dCwgaW1hZ2UsIHJlY3QpO1xuICB9LFxuXG4gIGRlc3Ryb3lBbGwoYXJyLCBwYXJhbSA9IG51bGwpIHtcbiAgICBsZXQgaSA9IGFyci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhcnJbaV0uZGVzdHJveShwYXJhbSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICBkZWxldGUgYXJyW2ldO1xuICAgIH1cblxuICAgIGFyci5sZW5ndGggPSAwO1xuICB9LFxuXG4gIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSk7XG4gICAgfVxuICB9XG59O1xuIiwiY29uc3QgaWRzTWFwID0ge307XG5cbmNvbnN0IFB1aWQgPSB7XG4gIF9pbmRleDogMCxcbiAgX2NhY2hlOiB7fSxcblxuICBpZCh0eXBlKSB7XG4gICAgaWYgKGlkc01hcFt0eXBlXSA9PT0gdW5kZWZpbmVkIHx8IGlkc01hcFt0eXBlXSA9PT0gbnVsbCkgaWRzTWFwW3R5cGVdID0gMDtcbiAgICByZXR1cm4gYCR7dHlwZX1fJHtpZHNNYXBbdHlwZV0rK31gO1xuICB9LFxuXG4gIGdldElkKHRhcmdldCkge1xuICAgIGxldCB1aWQgPSB0aGlzLmdldElkRnJvbUNhY2hlKHRhcmdldCk7XG4gICAgaWYgKHVpZCkgcmV0dXJuIHVpZDtcblxuICAgIHVpZCA9IGBQVUlEXyR7dGhpcy5faW5kZXgrK31gO1xuICAgIHRoaXMuX2NhY2hlW3VpZF0gPSB0YXJnZXQ7XG4gICAgcmV0dXJuIHVpZDtcbiAgfSxcblxuICBnZXRJZEZyb21DYWNoZSh0YXJnZXQpIHtcbiAgICBsZXQgb2JqLCBpZDtcblxuICAgIGZvciAoaWQgaW4gdGhpcy5fY2FjaGUpIHtcbiAgICAgIG9iaiA9IHRoaXMuX2NhY2hlW2lkXTtcblxuICAgICAgaWYgKG9iaiA9PT0gdGFyZ2V0KSByZXR1cm4gaWQ7XG4gICAgICBpZiAodGhpcy5pc0JvZHkob2JqLCB0YXJnZXQpICYmIG9iai5zcmMgPT09IHRhcmdldC5zcmMpIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBpc0JvZHkob2JqLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiICYmIG9iai5pc0lubmVyICYmIHRhcmdldC5pc0lubmVyO1xuICB9LFxuXG4gIGdldFRhcmdldCh1aWQpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVbdWlkXTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVpZDtcbiIsIi8qKlxuICogUG9vbCBpcyB0aGUgY2FjaGUgcG9vbCBvZiB0aGUgcHJvdG9uIGVuZ2luZSwgaXQgaXMgdmVyeSBpbXBvcnRhbnQuXG4gKlxuICogZ2V0KHRhcmdldCwgcGFyYW1zLCB1aWQpXG4gKiAgQ2xhc3NcbiAqICAgIHVpZCA9IFB1aWQuZ2V0SWQgLT4gUHVpZCBzYXZlIHRhcmdldCBjYWNoZVxuICogICAgdGFyZ2V0Ll9fcHVpZCA9IHVpZFxuICpcbiAqICBib2R5XG4gKiAgICB1aWQgPSBQdWlkLmdldElkIC0+IFB1aWQgc2F2ZSB0YXJnZXQgY2FjaGVcbiAqXG4gKlxuICogZXhwaXJlKHRhcmdldClcbiAqICBjYWNoZVt0YXJnZXQuX19wdWlkXSBwdXNoIHRhcmdldFxuICpcbiAqL1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBQdWlkIGZyb20gXCIuLi91dGlscy9QdWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvb2wge1xuICAvKipcbiAgICogQG1lbWJlcm9mISBQcm90b24jXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUHJvdG9uLlBvb2xcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBvZiBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcHJvcGVydHkge09iamVjdH0gY2FjaGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG51bSkge1xuICAgIHRoaXMudG90YWwgPSAwO1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQG1ldGhvZCBnZXRcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uUG9vbFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBqdXN0IGFkZCBpZiBgdGFyZ2V0YCBpcyBhIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCh0YXJnZXQsIHBhcmFtcywgdWlkKSB7XG4gICAgbGV0IHA7XG4gICAgdWlkID0gdWlkIHx8IHRhcmdldC5fX3B1aWQgfHwgUHVpZC5nZXRJZCh0YXJnZXQpO1xuXG4gICAgaWYgKHRoaXMuY2FjaGVbdWlkXSAmJiB0aGlzLmNhY2hlW3VpZF0ubGVuZ3RoID4gMCkge1xuICAgICAgcCA9IHRoaXMuY2FjaGVbdWlkXS5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcCA9IHRoaXMuY3JlYXRlT3JDbG9uZSh0YXJnZXQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcC5fX3B1aWQgPSB0YXJnZXQuX19wdWlkIHx8IHVpZDtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQG1ldGhvZCBzZXRcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uUG9vbFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGV4cGlyZSh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYWNoZSh0YXJnZXQuX19wdWlkKS5wdXNoKHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgKlxuICAgKiBAdG9kbyBhZGQgbW9yZSBkb2N1bWVudGF0aW9uXG4gICAqXG4gICAqIEBtZXRob2QgY3JlYXRlXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlBvb2xcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IHRhcmdldCBhbnkgT2JqZWN0IG9yIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBqdXN0IGFkZCBpZiBgdGFyZ2V0YCBpcyBhIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGNyZWF0ZU9yQ2xvbmUodGFyZ2V0LCBwYXJhbXMpIHtcbiAgICB0aGlzLnRvdGFsKys7XG5cbiAgICBpZiAodGhpcy5jcmVhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0YXJnZXQsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBVdGlsLmNsYXNzQXBwbHkodGFyZ2V0LCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiAtIHdoYXQgaXMgaW4gdGhlIGNhY2hlP1xuICAgKlxuICAgKiBAbWV0aG9kIGdldENvdW50XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlBvb2xcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0Q291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmNhY2hlKSBjb3VudCArPSB0aGlzLmNhY2hlW2lkXS5sZW5ndGg7XG4gICAgcmV0dXJuIGNvdW50Kys7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveWVzIGFsbCBpdGVtcyBmcm9tIFBvb2wuY2FjaGVcbiAgICpcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlBvb2xcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgdGhpcy5jYWNoZVtpZF0ubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLmNhY2hlW2lkXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBQb29sLmNhY2hlXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0Q2FjaGVcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uUG9vbFxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gdWlkIHRoZSB1bmlxdWUgaWRcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0Q2FjaGUodWlkID0gXCJkZWZhdWx0XCIpIHtcbiAgICBpZiAoIXRoaXMuY2FjaGVbdWlkXSkgdGhpcy5jYWNoZVt1aWRdID0gW107XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVbdWlkXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHMge1xuICBjb25zdHJ1Y3Rvcihwcm90b24pIHtcbiAgICB0aGlzLnByb3RvbiA9IHByb3RvbjtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy50eXBlID0gMTtcblxuICAgIHRoaXMuZW1pdHRlckluZGV4ID0gMDtcbiAgICB0aGlzLnJlbmRlcmVySW5kZXggPSAwO1xuICB9XG5cbiAgdXBkYXRlKHN0eWxlLCBib2R5KSB7XG4gICAgdGhpcy5hZGQoc3R5bGUsIGJvZHkpO1xuXG4gICAgY29uc3QgZW1pdHRlciA9IHRoaXMuZ2V0RW1pdHRlcigpO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcigpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc3RyICs9IFwiZW1pdHRlcjpcIiArIHRoaXMucHJvdG9uLmVtaXR0ZXJzLmxlbmd0aCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoZW1pdHRlcikgc3RyICs9IFwiZW0gc3BlZWQ6XCIgKyBlbWl0dGVyLmVtaXRTcGVlZCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoZW1pdHRlcikgc3RyICs9IFwicG9zOlwiICsgdGhpcy5nZXRFbWl0dGVyUG9zKGVtaXR0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBpZiAoZW1pdHRlcikgc3RyICs9IFwiaW5pdGlhbGl6ZXM6XCIgKyBlbWl0dGVyLmluaXRpYWxpemVzLmxlbmd0aCArIFwiPGJyPlwiO1xuICAgICAgICBpZiAoZW1pdHRlcilcbiAgICAgICAgICBzdHIgKz0gJzxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+JyArIHRoaXMuY29uY2F0QXJyKGVtaXR0ZXIuaW5pdGlhbGl6ZXMpICsgXCI8L3NwYW4+PGJyPlwiO1xuICAgICAgICBpZiAoZW1pdHRlcikgc3RyICs9IFwiYmVoYXZpb3VyczpcIiArIGVtaXR0ZXIuYmVoYXZpb3Vycy5sZW5ndGggKyBcIjxicj5cIjtcbiAgICAgICAgaWYgKGVtaXR0ZXIpIHN0ciArPSAnPHNwYW4gc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jaztcIj4nICsgdGhpcy5jb25jYXRBcnIoZW1pdHRlci5iZWhhdmlvdXJzKSArIFwiPC9zcGFuPjxicj5cIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYgKHJlbmRlcmVyKSBzdHIgKz0gcmVuZGVyZXIubmFtZSArIFwiPGJyPlwiO1xuICAgICAgICBpZiAocmVuZGVyZXIpIHN0ciArPSBcImJvZHk6XCIgKyB0aGlzLmdldENyZWF0ZWROdW1iZXIocmVuZGVyZXIpICsgXCI8YnI+XCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHIgKz0gXCJwYXJ0aWNsZXM6XCIgKyB0aGlzLnByb3Rvbi5nZXRDb3VudCgpICsgXCI8YnI+XCI7XG4gICAgICAgIHN0ciArPSBcInBvb2w6XCIgKyB0aGlzLnByb3Rvbi5wb29sLmdldENvdW50KCkgKyBcIjxicj5cIjtcbiAgICAgICAgc3RyICs9IFwidG90YWw6XCIgKyB0aGlzLnByb3Rvbi5wb29sLnRvdGFsO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHN0cjtcbiAgfVxuXG4gIGFkZChzdHlsZSwgYm9keSkge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMudHlwZSA9IDE7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBbXG4gICAgICAgIFwicG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjBweDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7XCIsXG4gICAgICAgIFwib3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMDtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XCIsXG4gICAgICAgIFwid2lkdGg6MTIwcHg7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZC1jb2xvcjojMDAyO2NvbG9yOiMwZmY7XCJcbiAgICAgIF0uam9pbihcIlwiKTtcblxuICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBlID0+IHtcbiAgICAgICAgICB0aGlzLnR5cGUrKztcbiAgICAgICAgICBpZiAodGhpcy50eXBlID4gNCkgdGhpcy50eXBlID0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG5cbiAgICAgIGxldCBiZywgY29sb3I7XG4gICAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBiZyA9IFwiIzIwMVwiO1xuICAgICAgICAgIGNvbG9yID0gXCIjZjA4XCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGJnID0gXCIjMDIwXCI7XG4gICAgICAgICAgY29sb3IgPSBcIiMwZjBcIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJnID0gXCIjMDAyXCI7XG4gICAgICAgICAgY29sb3IgPSBcIiMwZmZcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gYmc7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVtcImNvbG9yXCJdID0gY29sb3I7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBib2R5ID0gYm9keSB8fCB0aGlzLmJvZHkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIGdldEVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdG9uLmVtaXR0ZXJzW3RoaXMuZW1pdHRlckluZGV4XTtcbiAgfVxuXG4gIGdldFJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Rvbi5yZW5kZXJlcnNbdGhpcy5yZW5kZXJlckluZGV4XTtcbiAgfVxuXG4gIGNvbmNhdEFycihhcnIpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCkgcmV0dXJuIHJlc3VsdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gKGFycltpXS5uYW1lIHx8IFwiXCIpLnN1YnN0cigwLCAxKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRDcmVhdGVkTnVtYmVyKHJlbmRlcmVyKSB7XG4gICAgcmV0dXJuIHJlbmRlcmVyLnBvb2wudG90YWwgfHwgKHJlbmRlcmVyLmNwb29sICYmIHJlbmRlcmVyLmNwb29sLnRvdGFsKSB8fCAwO1xuICB9XG5cbiAgZ2V0RW1pdHRlclBvcyhlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZS5wLngpICsgXCIsXCIgKyBNYXRoLnJvdW5kKGUucC55KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJvZHkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIHRoaXMucHJvdG9uID0gbnVsbDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gIH1cbn1cbiIsIi8qXG4gKiBFdmVudERpc3BhdGNoZXJcbiAqIFRoaXMgY29kZSByZWZlcmVuY2Ugc2luY2UgaHR0cDovL2NyZWF0ZWpzLmNvbS8uXG4gKlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGJpbmQodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50O1xuICAgIHRhcmdldC5wcm90b3R5cGUuaGFzRXZlbnRMaXN0ZW5lciA9IEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuaGFzRXZlbnRMaXN0ZW5lcjtcbiAgICB0YXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgdGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICAgIHRhcmdldC5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1t0eXBlXSkgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHJldHVybjtcblxuICAgIGNvbnN0IGFyciA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcbiAgICBjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycltpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbGxvd3MgZm9yIGZhc3RlciBjaGVja3MuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGxFdmVudExpc3RlbmVycyh0eXBlKSB7XG4gICAgaWYgKCF0eXBlKSB0aGlzLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIGVsc2UgaWYgKHRoaXMuX2xpc3RlbmVycykgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQodHlwZSwgYXJncykge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XG5cbiAgICBpZiAodHlwZSAmJiBsaXN0ZW5lcnMpIHtcbiAgICAgIGxldCBhcnIgPSBsaXN0ZW5lcnNbdHlwZV07XG4gICAgICBpZiAoIWFycikgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgLy8gYXJyID0gYXJyLnNsaWNlKCk7XG4gICAgICAvLyB0byBhdm9pZCBpc3N1ZXMgd2l0aCBpdGVtcyBiZWluZyByZW1vdmVkIG9yIGFkZGVkIGR1cmluZyB0aGUgZGlzcGF0Y2hcblxuICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICBsZXQgaSA9IGFyci5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGhhbmRsZXIgPSBhcnJbaV07XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBoYW5kbGVyKGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfVxuXG4gIGhhc0V2ZW50TGlzdGVuZXIodHlwZSkge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcbiAgICByZXR1cm4gISEobGlzdGVuZXJzICYmIGxpc3RlbmVyc1t0eXBlXSk7XG4gIH1cbn1cbiIsImNvbnN0IFBJID0gMy4xNDE1OTI2O1xuY29uc3QgSU5GSU5JVFkgPSBJbmZpbml0eTtcblxuY29uc3QgTWF0aFV0aWwgPSB7XG4gIFBJOiBQSSxcbiAgUEl4MjogUEkgKiAyLFxuICBQSV8yOiBQSSAvIDIsXG4gIFBJXzE4MDogUEkgLyAxODAsXG4gIE4xODBfUEk6IDE4MCAvIFBJLFxuICBJbmZpbml0eTogLTk5OSxcblxuICBpc0luZmluaXR5KG51bSkge1xuICAgIHJldHVybiBudW0gPT09IHRoaXMuSW5maW5pdHkgfHwgbnVtID09PSBJTkZJTklUWTtcbiAgfSxcblxuICByYW5kb21BVG9CKGEsIGIsIGlzSW50ID0gZmFsc2UpIHtcbiAgICBpZiAoIWlzSW50KSByZXR1cm4gYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpO1xuICAgIGVsc2UgcmV0dXJuICgoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpID4+IDApICsgYTtcbiAgfSxcblxuICByYW5kb21GbG9hdGluZyhjZW50ZXIsIGYsIGlzSW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZG9tQVRvQihjZW50ZXIgLSBmLCBjZW50ZXIgKyBmLCBpc0ludCk7XG4gIH0sXG5cbiAgcmFuZG9tQ29sb3IoKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgKFwiMDAwMDBcIiArICgoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMCkgPDwgMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNik7XG4gIH0sXG5cbiAgcmFuZG9tWm9uZShkaXNwbGF5KSB7fSxcblxuICBmbG9vcihudW0sIGsgPSA0KSB7XG4gICAgY29uc3QgZGlnaXRzID0gTWF0aC5wb3coMTAsIGspO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIGRpZ2l0cykgLyBkaWdpdHM7XG4gIH0sXG5cbiAgZGVncmVlVHJhbnNmb3JtKGEpIHtcbiAgICByZXR1cm4gKGEgKiBQSSkgLyAxODA7XG4gIH0sXG5cbiAgdG9Db2xvcjE2KG51bSkge1xuICAgIHJldHVybiBgIyR7bnVtLnRvU3RyaW5nKDE2KX1gO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRoVXRpbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVncmF0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjYWxjdWxhdGUocGFydGljbGVzLCB0aW1lLCBkYW1waW5nKSB7XG4gICAgdGhpcy5ldWxlckludGVncmF0ZShwYXJ0aWNsZXMsIHRpbWUsIGRhbXBpbmcpO1xuICB9XG5cbiAgLy8gRXVsZXIgSW50ZWdyYXRlXG4gIC8vIGh0dHBzOi8vcm9zZXR0YWNvZGUub3JnL3dpa2kvRXVsZXJfbWV0aG9kXG4gIGV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcbiAgICAgIHBhcnRpY2xlLm9sZC52LmNvcHkocGFydGljbGUudik7XG5cbiAgICAgIHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIoMSAvIHBhcnRpY2xlLm1hc3MpO1xuICAgICAgcGFydGljbGUudi5hZGQocGFydGljbGUuYS5tdWx0aXBseVNjYWxhcih0aW1lKSk7XG4gICAgICBwYXJ0aWNsZS5wLmFkZChwYXJ0aWNsZS5vbGQudi5tdWx0aXBseVNjYWxhcih0aW1lKSk7XG5cbiAgICAgIGlmIChkYW1waW5nKSBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xuXG4gICAgICBwYXJ0aWNsZS5hLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUG9vbCBmcm9tIFwiLi9Qb29sXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IFN0YXRzIGZyb20gXCIuLi9kZWJ1Zy9TdGF0c1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuLi9tYXRoL01hdGhVdGlsXCI7XG5pbXBvcnQgSW50ZWdyYXRpb24gZnJvbSBcIi4uL21hdGgvSW50ZWdyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdG9uIHtcbiAgc3RhdGljIFVTRV9DTE9DSyA9IGZhbHNlO1xuXG4gIC8vIG1lYXN1cmUgMToxMDBcbiAgc3RhdGljIE1FQVNVUkUgPSAxMDA7XG4gIHN0YXRpYyBFVUxFUiA9IFwiZXVsZXJcIjtcbiAgc3RhdGljIFJLMiA9IFwicnVuZ2Uta3V0dGEyXCI7XG5cbiAgLy8gZXZlbnQgbmFtZVxuICBzdGF0aWMgUEFSVElDTEVfQ1JFQVRFRCA9IFwiUEFSVElDTEVfQ1JFQVRFRFwiO1xuICBzdGF0aWMgUEFSVElDTEVfVVBEQVRFID0gXCJQQVJUSUNMRV9VUERBVEVcIjtcbiAgc3RhdGljIFBBUlRJQ0xFX1NMRUVQID0gXCJQQVJUSUNMRV9TTEVFUFwiO1xuICBzdGF0aWMgUEFSVElDTEVfREVBRCA9IFwiUEFSVElDTEVfREVBRFwiO1xuXG4gIHN0YXRpYyBFTUlUVEVSX0FEREVEID0gXCJFTUlUVEVSX0FEREVEXCI7XG4gIHN0YXRpYyBFTUlUVEVSX1JFTU9WRUQgPSBcIkVNSVRURVJfUkVNT1ZFRFwiO1xuXG4gIHN0YXRpYyBQUk9UT05fVVBEQVRFID0gXCJQUk9UT05fVVBEQVRFXCI7XG4gIHN0YXRpYyBQUk9UT05fVVBEQVRFX0FGVEVSID0gXCJQUk9UT05fVVBEQVRFX0FGVEVSXCI7XG4gIHN0YXRpYyBERUZBVUxUX0lOVEVSVkFMID0gMC4wMTY3O1xuXG4gIHN0YXRpYyBhbWVuZENoYW5nZVRhYnNCdWcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgdG8gYWRkIGVtaXR0ZXJzXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvciBQcm90b25cbiAgICpcbiAgICogQHRvZG8gcHJvUGFydGljbGVDb3VudCBpcyBub3QgaW4gdXNlXG4gICAqIEB0b2RvIGFkZCBtb3JlIGRvY3VtZW50YXRpb24gb2YgdGhlIHNpbmdsZSBwcm9wZXJ0aWVzIGFuZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJvUGFydGljbGVDb3VudF0gbm90IGluIHVzZT9cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbnRlZ3JhdGlvblR5cGU9UHJvdG9uLkVVTEVSXVxuICAgKlxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW2ludGVncmF0aW9uVHlwZT1Qcm90b24uRVVMRVJdXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVtaXR0ZXJzICAgQWxsIGFkZGVkIGVtaXR0ZXJcbiAgICogQHByb3BlcnR5IHtBcnJheX0gcmVuZGVyZXJzICBBbGwgYWRkZWQgcmVuZGVyZXJcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRpbWUgICAgICBUaGUgYWN0aXZlIHRpbWVcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IG9sZHRpbWUgICBUaGUgb2xkIHRpbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGludGVncmF0aW9uVHlwZSkge1xuICAgIHRoaXMuZW1pdHRlcnMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuXG4gICAgdGhpcy50aW1lID0gMDtcbiAgICB0aGlzLm5vdyA9IDA7XG4gICAgdGhpcy50aGVuID0gMDtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cyh0aGlzKTtcbiAgICB0aGlzLnBvb2wgPSBuZXcgUG9vbCg4MCk7XG5cbiAgICB0aGlzLmludGVncmF0aW9uVHlwZSA9IFV0aWwuaW5pdFZhbHVlKGludGVncmF0aW9uVHlwZSwgUHJvdG9uLkVVTEVSKTtcbiAgICB0aGlzLmludGVncmF0b3IgPSBuZXcgSW50ZWdyYXRpb24odGhpcy5pbnRlZ3JhdGlvblR5cGUpO1xuXG4gICAgdGhpcy5fZnBzID0gXCJhdXRvXCI7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBQcm90b24uREVGQVVMVF9JTlRFUlZBTDtcbiAgfVxuXG4gIHNldCBmcHMoZnBzKSB7XG4gICAgdGhpcy5fZnBzID0gZnBzO1xuICAgIHRoaXMuX2ludGVydmFsID0gZnBzID09PSBcImF1dG9cIiA/IFByb3Rvbi5ERUZBVUxUX0lOVEVSVkFMIDogTWF0aFV0aWwuZmxvb3IoMSAvIGZwcywgNyk7XG4gIH1cblxuICBnZXQgZnBzKCkge1xuICAgIHJldHVybiB0aGlzLl9mcHM7XG4gIH1cblxuICAvKipcbiAgICogYWRkIGEgdHlwZSBvZiBSZW5kZXJlclxuICAgKlxuICAgKiBAbWV0aG9kIGFkZFJlbmRlcmVyXG4gICAqIEBtZW1iZXJvZiBQcm90b25cbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IHJlbmRlclxuICAgKi9cbiAgYWRkUmVuZGVyZXIocmVuZGVyKSB7XG4gICAgcmVuZGVyLmluaXQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZCBhIHR5cGUgb2YgUmVuZGVyZXJcbiAgICpcbiAgICogQG1ldGhvZCBhZGRSZW5kZXJlclxuICAgKiBAcGFyYW0ge1JlbmRlcmVyfSByZW5kZXJcbiAgICovXG4gIHJlbW92ZVJlbmRlcmVyKHJlbmRlcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZW5kZXJlcnMuaW5kZXhPZihyZW5kZXIpO1xuICAgIHRoaXMucmVuZGVyZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVuZGVyLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgdGhlIEVtaXR0ZXJcbiAgICpcbiAgICogQG1ldGhvZCBhZGRFbWl0dGVyXG4gICAqIEBtZW1iZXJvZiBQcm90b25cbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7RW1pdHRlcn0gZW1pdHRlclxuICAgKi9cbiAgYWRkRW1pdHRlcihlbWl0dGVyKSB7XG4gICAgdGhpcy5lbWl0dGVycy5wdXNoKGVtaXR0ZXIpO1xuICAgIGVtaXR0ZXIucGFyZW50ID0gdGhpcztcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChQcm90b24uRU1JVFRFUl9BRERFRCwgZW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBFbWl0dGVyXG4gICAqXG4gICAqIEBtZXRob2QgcmVtb3ZlRW1pdHRlclxuICAgKiBAbWVtYmVyb2YgUHJvdG9uXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5FbWl0dGVyfSBlbWl0dGVyXG4gICAqL1xuICByZW1vdmVFbWl0dGVyKGVtaXR0ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZW1pdHRlcnMuaW5kZXhPZihlbWl0dGVyKTtcbiAgICB0aGlzLmVtaXR0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgZW1pdHRlci5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFByb3Rvbi5FTUlUVEVSX1JFTU9WRUQsIGVtaXR0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYWxsIGFkZGVkIGVtaXR0ZXJzXG4gICAqXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBtZW1iZXJvZiBQcm90b25cbiAgICogQGluc3RhbmNlXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgLy8gJ2F1dG8nIGlzIHRoZSBkZWZhdWx0IGJyb3dzZXIgcmVmcmVzaCByYXRlLCB0aGUgdmFzdCBtYWpvcml0eSBpcyA2MGZwc1xuICAgIGlmICh0aGlzLl9mcHMgPT09IFwiYXV0b1wiKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoUHJvdG9uLlBST1RPTl9VUERBVEUpO1xuXG4gICAgICBpZiAoUHJvdG9uLlVTRV9DTE9DSykge1xuICAgICAgICBpZiAoIXRoaXMudGhlbikgdGhpcy50aGVuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMubm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLm5vdyAtIHRoaXMudGhlbikgKiAwLjAwMTtcbiAgICAgICAgLy8gRml4IGJ1Z3Mgc3VjaCBhcyBjaHJvbWUgYnJvd3NlciBzd2l0Y2hpbmcgdGFicyBjYXVzaW5nIGV4Y2Vzc2l2ZSB0aW1lIGRpZmZlcmVuY2VcbiAgICAgICAgdGhpcy5hbWVuZENoYW5nZVRhYnNCdWcoKTtcblxuICAgICAgICBpZiAodGhpcy5lbGFwc2VkID4gMCkgdGhpcy5lbWl0dGVyc1VwZGF0ZSh0aGlzLmVsYXBzZWQpO1xuICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdHRlcnNVcGRhdGUoUHJvdG9uLkRFRkFVTFRfSU5URVJWQUwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoUHJvdG9uLlBST1RPTl9VUERBVEVfQUZURVIpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBmcHMgZnJhbWUgcmF0ZSBpcyBzZXRcbiAgICBlbHNlIHtcbiAgICAgIGlmICghdGhpcy50aGVuKSB0aGlzLnRoZW4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMubm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5ub3cgLSB0aGlzLnRoZW4pICogMC4wMDE7XG5cbiAgICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoUHJvdG9uLlBST1RPTl9VUERBVEUpO1xuICAgICAgICB0aGlzLmVtaXR0ZXJzVXBkYXRlKHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuX2ludGVydmFsKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChQcm90b24uUFJPVE9OX1VQREFURV9BRlRFUik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdHRlcnNVcGRhdGUoZWxhcHNlZCkge1xuICAgIGxldCBpID0gdGhpcy5lbWl0dGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgdGhpcy5lbWl0dGVyc1tpXS51cGRhdGUoZWxhcHNlZCk7XG4gIH1cblxuICAvKipcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBtZXRob2QgYW1lbmRDaGFuZ2VUYWJzQnVnXG4gICAqIEBtZW1iZXJvZiBQcm90b25cbiAgICogQGluc3RhbmNlXG4gICAqL1xuICBhbWVuZENoYW5nZVRhYnNCdWcoKSB7XG4gICAgaWYgKCFQcm90b24uYW1lbmRDaGFuZ2VUYWJzQnVnKSByZXR1cm47XG4gICAgaWYgKHRoaXMuZWxhcHNlZCA+IDAuNSkge1xuICAgICAgdGhpcy50aGVuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudHMgYWxsIHBhcnRpY2xlcyBmcm9tIGFsbCBlbWl0dGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIGdldENvdW50XG4gICAqIEBtZW1iZXJvZiBQcm90b25cbiAgICogQGluc3RhbmNlXG4gICAqL1xuICBnZXRDb3VudCgpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGxldCBpID0gdGhpcy5lbWl0dGVycy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB0b3RhbCArPSB0aGlzLmVtaXR0ZXJzW2ldLnBhcnRpY2xlcy5sZW5ndGg7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgZ2V0QWxsUGFydGljbGVzKCkge1xuICAgIGxldCBwYXJ0aWNsZXMgPSBbXTtcbiAgICBsZXQgaSA9IHRoaXMuZW1pdHRlcnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkgcGFydGljbGVzID0gcGFydGljbGVzLmNvbmNhdCh0aGlzLmVtaXR0ZXJzW2ldLnBhcnRpY2xlcyk7XG4gICAgcmV0dXJuIHBhcnRpY2xlcztcbiAgfVxuXG4gIGRlc3Ryb3lBbGxFbWl0dGVycygpIHtcbiAgICBVdGlsLmRlc3Ryb3lBbGwodGhpcy5lbWl0dGVycyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgZXZlcnl0aGluZyByZWxhdGVkIHRvIHRoaXMgUHJvdG9uIGluc3RhbmNlLiBUaGlzIGluY2x1ZGVzIGFsbCBlbWl0dGVycywgYW5kIGFsbCBwcm9wZXJ0aWVzXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAbWVtYmVyb2YgUHJvdG9uXG4gICAqIEBpbnN0YW5jZVxuICAgKi9cbiAgZGVzdHJveShyZW1vdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRlc3Ryb3lPdGhlciA9ICgpID0+IHtcbiAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICB0aGlzLnRoZW4gPSAwO1xuICAgICAgdGhpcy5wb29sLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc3RhdHMuZGVzdHJveSgpO1xuXG4gICAgICBVdGlsLmRlc3Ryb3lBbGwodGhpcy5lbWl0dGVycyk7XG4gICAgICBVdGlsLmRlc3Ryb3lBbGwodGhpcy5yZW5kZXJlcnMsIHRoaXMuZ2V0QWxsUGFydGljbGVzKCkpO1xuXG4gICAgICB0aGlzLmludGVncmF0b3IgPSBudWxsO1xuICAgICAgdGhpcy5yZW5kZXJlcnMgPSBudWxsO1xuICAgICAgdGhpcy5lbWl0dGVycyA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRzID0gbnVsbDtcbiAgICAgIHRoaXMucG9vbCA9IG51bGw7XG4gICAgfTtcblxuICAgIGlmIChyZW1vdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZGVzdHJveU90aGVyLCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0cm95T3RoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuRXZlbnREaXNwYXRjaGVyLmJpbmQoUHJvdG9uKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJnYiB7XG4gIGNvbnN0cnVjdG9yKHIgPSAyNTUsIGcgPSAyNTUsIGIgPSAyNTUpIHtcbiAgICB0aGlzLnIgPSByO1xuICAgIHRoaXMuZyA9IGc7XG4gICAgdGhpcy5iID0gYjtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuciA9IDI1NTtcbiAgICB0aGlzLmcgPSAyNTU7XG4gICAgdGhpcy5iID0gMjU1O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhhc1Byb3AodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSxcblxuICAvKipcbiAgICogc2V0IHRoZSBwcm90b3R5cGUgaW4gYSBnaXZlbiBwcm90b3R5cGVPYmplY3RcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIHNldFByb3BcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgdGFyZ2V0YFxuICAgKiBAdG9kbyB0cmFuc2xhdGUgZGVzcmlwdGlvbiBmcm9tIGNoaW5lc2UgdG8gZW5nbGlzaFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGVPYmplY3QgQW4gb2JqZWN0IG9mIHNpbmdsZSBwcm90b3R5cGVzXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gdGFyZ2V0XG4gICAqL1xuICBzZXRQcm9wKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IFNwYW4uZ2V0U3BhblZhbHVlKHByb3BzW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXG4gICAqIEBtZXRob2Qgc2V0VmVjdG9yVmFsXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHRhcmdldGBcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgY29uZmBcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gICAqL1xuICBzZXRWZWN0b3JWYWwocGFydGljbGUsIGNvbmYgPSBudWxsKSB7XG4gICAgaWYgKCFjb25mKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5oYXNQcm9wKGNvbmYsIFwieFwiKSkgcGFydGljbGUucC54ID0gY29uZltcInhcIl07XG4gICAgaWYgKHRoaXMuaGFzUHJvcChjb25mLCBcInlcIikpIHBhcnRpY2xlLnAueSA9IGNvbmZbXCJ5XCJdO1xuXG4gICAgaWYgKHRoaXMuaGFzUHJvcChjb25mLCBcInZ4XCIpKSBwYXJ0aWNsZS52LnggPSBjb25mW1widnhcIl07XG4gICAgaWYgKHRoaXMuaGFzUHJvcChjb25mLCBcInZ5XCIpKSBwYXJ0aWNsZS52LnkgPSBjb25mW1widnlcIl07XG5cbiAgICBpZiAodGhpcy5oYXNQcm9wKGNvbmYsIFwiYXhcIikpIHBhcnRpY2xlLmEueCA9IGNvbmZbXCJheFwiXTtcbiAgICBpZiAodGhpcy5oYXNQcm9wKGNvbmYsIFwiYXlcIikpIHBhcnRpY2xlLmEueSA9IGNvbmZbXCJheVwiXTtcblxuICAgIGlmICh0aGlzLmhhc1Byb3AoY29uZiwgXCJwXCIpKSBwYXJ0aWNsZS5wLmNvcHkoY29uZltcInBcIl0pO1xuICAgIGlmICh0aGlzLmhhc1Byb3AoY29uZiwgXCJ2XCIpKSBwYXJ0aWNsZS52LmNvcHkoY29uZltcInZcIl0pO1xuICAgIGlmICh0aGlzLmhhc1Byb3AoY29uZiwgXCJhXCIpKSBwYXJ0aWNsZS5hLmNvcHkoY29uZltcImFcIl0pO1xuXG4gICAgaWYgKHRoaXMuaGFzUHJvcChjb25mLCBcInBvc2l0aW9uXCIpKSBwYXJ0aWNsZS5wLmNvcHkoY29uZltcInBvc2l0aW9uXCJdKTtcbiAgICBpZiAodGhpcy5oYXNQcm9wKGNvbmYsIFwidmVsb2NpdHlcIikpIHBhcnRpY2xlLnYuY29weShjb25mW1widmVsb2NpdHlcIl0pO1xuICAgIGlmICh0aGlzLmhhc1Byb3AoY29uZiwgXCJhY2NlbGVyYXRlXCIpKSBwYXJ0aWNsZS5hLmNvcHkoY29uZltcImFjY2VsZXJhdGVcIl0pO1xuICB9XG59O1xuIiwiaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuL01hdGhVdGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzZUxpbmVhcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBlYXNlSW5RdWFkKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHZhbHVlLCAyKTtcbiAgfSxcblxuICBlYXNlT3V0UXVhZCh2YWx1ZSkge1xuICAgIHJldHVybiAtKE1hdGgucG93KHZhbHVlIC0gMSwgMikgLSAxKTtcbiAgfSxcblxuICBlYXNlSW5PdXRRdWFkKHZhbHVlKSB7XG4gICAgaWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAyKTtcblxuICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlIC0gMik7XG4gIH0sXG5cbiAgZWFzZUluQ3ViaWModmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codmFsdWUsIDMpO1xuICB9LFxuXG4gIGVhc2VPdXRDdWJpYyh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLnBvdyh2YWx1ZSAtIDEsIDMpICsgMTtcbiAgfSxcblxuICBlYXNlSW5PdXRDdWJpYyh2YWx1ZSkge1xuICAgIGlmICgodmFsdWUgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMyk7XG5cbiAgICByZXR1cm4gMC41ICogKE1hdGgucG93KHZhbHVlIC0gMiwgMykgKyAyKTtcbiAgfSxcblxuICBlYXNlSW5RdWFydCh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgNCk7XG4gIH0sXG5cbiAgZWFzZU91dFF1YXJ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIC0oTWF0aC5wb3codmFsdWUgLSAxLCA0KSAtIDEpO1xuICB9LFxuXG4gIGVhc2VJbk91dFF1YXJ0KHZhbHVlKSB7XG4gICAgaWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCA0KTtcblxuICAgIHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIE1hdGgucG93KHZhbHVlLCAzKSAtIDIpO1xuICB9LFxuXG4gIGVhc2VJblNpbmUodmFsdWUpIHtcbiAgICByZXR1cm4gLU1hdGguY29zKHZhbHVlICogTWF0aFV0aWwuUElfMikgKyAxO1xuICB9LFxuXG4gIGVhc2VPdXRTaW5lKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGguc2luKHZhbHVlICogTWF0aFV0aWwuUElfMik7XG4gIH0sXG5cbiAgZWFzZUluT3V0U2luZSh2YWx1ZSkge1xuICAgIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkgLSAxKTtcbiAgfSxcblxuICBlYXNlSW5FeHBvKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xuICB9LFxuXG4gIGVhc2VPdXRFeHBvKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAxID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKyAxO1xuICB9LFxuXG4gIGVhc2VJbk91dEV4cG8odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiAwO1xuXG4gICAgaWYgKHZhbHVlID09PSAxKSByZXR1cm4gMTtcblxuICAgIGlmICgodmFsdWUgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcblxuICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdmFsdWUpICsgMik7XG4gIH0sXG5cbiAgZWFzZUluQ2lyYyh2YWx1ZSkge1xuICAgIHJldHVybiAtKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcbiAgfSxcblxuICBlYXNlT3V0Q2lyYyh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHZhbHVlIC0gMSwgMikpO1xuICB9LFxuXG4gIGVhc2VJbk91dENpcmModmFsdWUpIHtcbiAgICBpZiAoKHZhbHVlIC89IDAuNSkgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XG4gICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xuICB9LFxuXG4gIGVhc2VJbkJhY2sodmFsdWUpIHtcbiAgICBsZXQgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIHZhbHVlICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XG4gIH0sXG5cbiAgZWFzZU91dEJhY2sodmFsdWUpIHtcbiAgICBsZXQgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlIC0gMSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XG4gIH0sXG5cbiAgZWFzZUluT3V0QmFjayh2YWx1ZSkge1xuICAgIGxldCBzID0gMS43MDE1ODtcbiAgICBpZiAoKHZhbHVlIC89IDAuNSkgPCAxKSByZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKChzICo9IDEuNTI1KSArIDEpICogdmFsdWUgLSBzKSk7XG4gICAgcmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XG4gIH0sXG5cbiAgZ2V0RWFzaW5nKGVhc2UpIHtcbiAgICBpZiAodHlwZW9mIGVhc2UgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGVhc2U7XG4gICAgZWxzZSByZXR1cm4gdGhpc1tlYXNlXSB8fCB0aGlzLmVhc2VMaW5lYXI7XG4gIH1cbn07XG4iLCJpbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geCB8fCAwO1xuICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgfVxuXG4gIHNldCh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFkoeSkge1xuICAgIHRoaXMueSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRHcmFkaWVudCgpIHtcbiAgICBpZiAodGhpcy54ICE9PSAwKSByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgZWxzZSBpZiAodGhpcy55ID4gMCkgcmV0dXJuIE1hdGhVdGlsLlBJXzI7XG4gICAgZWxzZSBpZiAodGhpcy55IDwgMCkgcmV0dXJuIC1NYXRoVXRpbC5QSV8yO1xuICB9XG5cbiAgY29weSh2KSB7XG4gICAgdGhpcy54ID0gdi54O1xuICAgIHRoaXMueSA9IHYueTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkKHYsIHcpIHtcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRWZWN0b3JzKHYsIHcpO1xuICAgIH1cblxuICAgIHRoaXMueCArPSB2Lng7XG4gICAgdGhpcy55ICs9IHYueTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkWFkoYSwgYikge1xuICAgIHRoaXMueCArPSBhO1xuICAgIHRoaXMueSArPSBiO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRWZWN0b3JzKGEsIGIpIHtcbiAgICB0aGlzLnggPSBhLnggKyBiLng7XG4gICAgdGhpcy55ID0gYS55ICsgYi55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWIodiwgdykge1xuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XG4gICAgfVxuXG4gICAgdGhpcy54IC09IHYueDtcbiAgICB0aGlzLnkgLT0gdi55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJWZWN0b3JzKGEsIGIpIHtcbiAgICB0aGlzLnggPSBhLnggLSBiLng7XG4gICAgdGhpcy55ID0gYS55IC0gYi55O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXZpZGVTY2FsYXIocykge1xuICAgIGlmIChzICE9PSAwKSB7XG4gICAgICB0aGlzLnggLz0gcztcbiAgICAgIHRoaXMueSAvPSBzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCgwLCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG11bHRpcGx5U2NhbGFyKHMpIHtcbiAgICB0aGlzLnggKj0gcztcbiAgICB0aGlzLnkgKj0gcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmVnYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcbiAgfVxuXG4gIGRvdCh2KSB7XG4gICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcbiAgfVxuXG4gIGxlbmd0aFNxKCkge1xuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gIH1cblxuICBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpKTtcbiAgfVxuXG4gIGRpc3RhbmNlVG8odikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XG4gIH1cblxuICByb3RhdGUodGhhKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBjb25zdCB5ID0gdGhpcy55O1xuXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcbiAgICB0aGlzLnkgPSAteCAqIE1hdGguc2luKHRoYSkgKyB5ICogTWF0aC5jb3ModGhhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzdGFuY2VUb1NxdWFyZWQodikge1xuICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gdi54O1xuICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gdi55O1xuXG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICB9XG5cbiAgbGVycCh2LCBhbHBoYSkge1xuICAgIHRoaXMueCArPSAodi54IC0gdGhpcy54KSAqIGFscGhhO1xuICAgIHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlcXVhbHModikge1xuICAgIHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMueCA9IDAuMDtcbiAgICB0aGlzLnkgPSAwLjA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KTtcbiAgfVxufVxuIiwiLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2JlaGF2aW91ci9CZWhhdmlvdXInKX0gQmVoYXZpb3VyICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi4vbWF0aC9WZWN0b3IyRCcpfSBWZWN0b3IyRCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL3V0aWxzL1JnYicpfSBSZ2IgKi9cbmltcG9ydCBSZ2IgZnJvbSBcIi4uL3V0aWxzL1JnYlwiO1xuaW1wb3J0IFB1aWQgZnJvbSBcIi4uL3V0aWxzL1B1aWRcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgUHJvcFV0aWwgZnJvbSBcIi4uL3V0aWxzL1Byb3BVdGlsXCI7XG5pbXBvcnQgZWFzZSBmcm9tIFwiLi4vbWF0aC9lYXNlXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL21hdGgvVmVjdG9yMkRcIjtcbmltcG9ydCBNYXRoVXRpbCBmcm9tIFwiLi4vbWF0aC9NYXRoVXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG4gIC8qKiBAdHlwZSBzdHJpbmcgKi9cbiAgaWQgPSBcIlwiO1xuXG4gIC8qKiBAdHlwZSB7e3A6VmVjdG9yMkQsdjpWZWN0b3IyRCxhOlZlY3RvcjJEfX0gKi9cbiAgb2xkID0gbnVsbDtcblxuICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgZGF0YSA9IG51bGw7XG5cbiAgLyoqIEB0eXBlIHtCZWhhdmlvdXJbXX0gKi9cbiAgYmVoYXZpb3VycyA9IG51bGw7XG5cbiAgLyoqIEB0eXBlIHtWZWN0b3IyRH0gKi9cbiAgcCA9IG51bGw7XG5cbiAgLyoqIEB0eXBlIHtWZWN0b3IyRH0gKi9cbiAgdiA9IG51bGw7XG5cbiAgLyoqIEB0eXBlIHtWZWN0b3IyRH0gKi9cbiAgYSA9IG51bGw7XG5cbiAgLyoqIEB0eXBlIHtSZ2J9ICovXG4gIHJnYiA9IG51bGw7XG5cbiAgLyoqXG4gICAqIHRoZSBQYXJ0aWNsZSBjbGFzc1xuICAgKlxuICAgKiBAY2xhc3MgUHJvdG9uLlBhcnRpY2xlXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gcE9iaiB0aGUgcGFyYW1ldGVycyBvYmplY3Q7XG4gICAqIGZvciBleGFtcGxlIHtsaWZlOjMsZGVhZDpmYWxzZX1cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmYpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGUncyBpZDtcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IFwiUGFydGljbGVcIjtcbiAgICB0aGlzLmlkID0gUHVpZC5pZCh0aGlzLm5hbWUpO1xuICAgIHRoaXMub2xkID0ge307XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5iZWhhdmlvdXJzID0gW107XG5cbiAgICB0aGlzLnAgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICB0aGlzLnYgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICB0aGlzLmEgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICB0aGlzLm9sZC5wID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgdGhpcy5vbGQudiA9IG5ldyBWZWN0b3IyRCgpO1xuICAgIHRoaXMub2xkLmEgPSBuZXcgVmVjdG9yMkQoKTtcblxuICAgIHRoaXMucmdiID0gbmV3IFJnYigpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBjb25mICYmIFByb3BVdGlsLnNldFByb3AodGhpcywgY29uZik7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy52LngsIC10aGlzLnYueSkgKiBNYXRoVXRpbC5OMTgwX1BJO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5saWZlID0gSW5maW5pdHk7XG4gICAgdGhpcy5hZ2UgPSAwO1xuXG4gICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgdGhpcy5zbGVlcCA9IGZhbHNlO1xuICAgIHRoaXMuYm9keSA9IG51bGw7XG4gICAgdGhpcy5zcHJpdGUgPSBudWxsO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuZW5lcmd5ID0gMTsgLy8gRW5lcmd5IExvc3NcbiAgICB0aGlzLm1hc3MgPSAxO1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5jb2xvciA9IG51bGw7XG5cbiAgICB0aGlzLnAuc2V0KDAsIDApO1xuICAgIHRoaXMudi5zZXQoMCwgMCk7XG4gICAgdGhpcy5hLnNldCgwLCAwKTtcbiAgICB0aGlzLm9sZC5wLnNldCgwLCAwKTtcbiAgICB0aGlzLm9sZC52LnNldCgwLCAwKTtcbiAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcbiAgICB0aGlzLmVhc2luZyA9IGVhc2UuZWFzZUxpbmVhcjtcblxuICAgIHRoaXMucmdiLnJlc2V0KCk7XG4gICAgVXRpbC5lbXB0eU9iamVjdCh0aGlzLmRhdGEpO1xuICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUodGltZSwgaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuc2xlZXApIHtcbiAgICAgIHRoaXMuYWdlICs9IHRpbWU7XG4gICAgICB0aGlzLmFwcGx5QmVoYXZpb3Vycyh0aW1lLCBpbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWdlIDwgdGhpcy5saWZlKSB7XG4gICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHRoaXMuYWdlIC8gdGhpcy5saWZlKTtcbiAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlCZWhhdmlvdXJzKHRpbWUsIGluZGV4KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5iZWhhdmlvdXJzLmxlbmd0aDtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzW2ldICYmIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QmVoYXZpb3VyfSBiZWhhdmlvdXJcbiAgICovXG4gIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICB0aGlzLmJlaGF2aW91cnMucHVzaChiZWhhdmlvdXIpO1xuXG4gICAgaWYgKGJlaGF2aW91ci5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpIGJlaGF2aW91ci5wYXJlbnRzLnB1c2godGhpcyk7XG4gICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCZWhhdmlvdXJbXX0gYmVoYXZpb3Vyc1xuICAgKi9cbiAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGg7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBiZWhhdmlvdXIucGFyZW50cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcbiAgICBVdGlsLmVtcHR5QXJyYXkodGhpcy5iZWhhdmlvdXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoaXMgcGFydGljbGVcbiAgICogQG1ldGhvZCBkZXN0cm95XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xuICAgIHRoaXMuZW5lcmd5ID0gMDtcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogQHR5cGVkZWYgIHtPYmplY3R9IHJnYk9iamVjdFxuICAgKiBAcHJvcGVydHkge051bWJlcn0gciByZWQgdmFsdWVcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGIgYmx1ZSB2YWx1ZVxuICAgKi9cbiAgLyoqXG4gICAqIGNvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgcmdiIG9iamVjdFxuICAgKlxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXG4gICAqIEBtZXRob2QgaGV4VG9SZ2JcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGggYW55IGhleCB2YWx1ZSwgZS5nLiAjMDAwMDAwIG9yIDAwMDAwMCBmb3IgYmxhY2tcbiAgICpcbiAgICogQHJldHVybiB7cmdiT2JqZWN0fVxuICAgKi9cbiAgaGV4VG9SZ2IoaCkge1xuICAgIGNvbnN0IGhleDE2ID0gaC5jaGFyQXQoMCkgPT09IFwiI1wiID8gaC5zdWJzdHJpbmcoMSwgNykgOiBoO1xuICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDIsIDQpLCAxNik7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xuXG4gICAgcmV0dXJuIHsgciwgZywgYiB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIHJnYiB2YWx1ZSB0byBhIHJnYiBzdHJpbmdcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIHJnYlRvSGV4XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgUHJvdG9uLmhleFRvUmdifSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFByb3RvbiNQcm90b24ufVxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJnYigpXG4gICAqL1xuICByZ2JUb0hleChyYmcpIHtcbiAgICByZXR1cm4gYHJnYigke3JiZy5yfSwgJHtyYmcuZ30sICR7cmJnLmJ9KWA7XG4gIH0sXG5cbiAgZ2V0SGV4MTZGcm9tUGFydGljbGUocCkge1xuICAgIHJldHVybiBOdW1iZXIocC5yZ2IucikgKiA2NTUzNiArIE51bWJlcihwLnJnYi5nKSAqIDI1NiArIE51bWJlcihwLnJnYi5iKTtcbiAgfVxufTtcbiIsImltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xhcjJEIHtcbiAgY29uc3RydWN0b3IociwgdGhhKSB7XG4gICAgdGhpcy5yID0gTWF0aC5hYnMocikgfHwgMDtcbiAgICB0aGlzLnRoYSA9IHRoYSB8fCAwO1xuICB9XG5cbiAgc2V0KHIsIHRoYSkge1xuICAgIHRoaXMuciA9IHI7XG4gICAgdGhpcy50aGEgPSB0aGE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRSKHIpIHtcbiAgICB0aGlzLnIgPSByO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VGhhKHRoYSkge1xuICAgIHRoaXMudGhhID0gdGhhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29weShwKSB7XG4gICAgdGhpcy5yID0gcC5yO1xuICAgIHRoaXMudGhhID0gcC50aGE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1ZlY3RvcigpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSk7XG4gIH1cblxuICBnZXRYKCkge1xuICAgIHJldHVybiB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnRoYSk7XG4gIH1cblxuICBnZXRZKCkge1xuICAgIHJldHVybiAtdGhpcy5yICogTWF0aC5jb3ModGhpcy50aGEpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIHRoaXMuciA9IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlcXVhbHModikge1xuICAgIHJldHVybiB2LnIgPT09IHRoaXMuciAmJiB2LnRoYSA9PT0gdGhpcy50aGE7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnIgPSAwLjA7XG4gICAgdGhpcy50aGEgPSAwLjA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvbGFyMkQodGhpcy5yLCB0aGlzLnRoYSk7XG4gIH1cbn1cbiIsImNvbnN0IE1hdDMgPSB7XG4gIGNyZWF0ZShtYXQzKSB7XG4gICAgY29uc3QgbWF0ID0gbmV3IEZsb2F0MzJBcnJheSg5KTtcbiAgICBpZiAobWF0MykgdGhpcy5zZXQobWF0MywgbWF0KTtcblxuICAgIHJldHVybiBtYXQ7XG4gIH0sXG5cbiAgc2V0KG1hdDEsIG1hdDIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykgbWF0MltpXSA9IG1hdDFbaV07XG5cbiAgICByZXR1cm4gbWF0MjtcbiAgfSxcblxuICBtdWx0aXBseShtYXQsIG1hdDIsIG1hdDMpIHtcbiAgICBsZXQgYTAwID0gbWF0WzBdLFxuICAgICAgYTAxID0gbWF0WzFdLFxuICAgICAgYTAyID0gbWF0WzJdLFxuICAgICAgYTEwID0gbWF0WzNdLFxuICAgICAgYTExID0gbWF0WzRdLFxuICAgICAgYTIwID0gbWF0WzZdLFxuICAgICAgYTIxID0gbWF0WzddLFxuICAgICAgYjAwID0gbWF0MlswXSxcbiAgICAgIGIwMSA9IG1hdDJbMV0sXG4gICAgICBiMDIgPSBtYXQyWzJdLFxuICAgICAgYjEwID0gbWF0MlszXSxcbiAgICAgIGIxMSA9IG1hdDJbNF0sXG4gICAgICBiMjAgPSBtYXQyWzZdLFxuICAgICAgYjIxID0gbWF0Mls3XTtcblxuICAgIG1hdDNbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTA7XG4gICAgbWF0M1sxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMTtcbiAgICBtYXQzWzJdID0gYTAyICogYjAyO1xuICAgIG1hdDNbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTA7XG4gICAgbWF0M1s0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMTtcbiAgICBtYXQzWzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYTIwO1xuICAgIG1hdDNbN10gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBhMjE7XG5cbiAgICByZXR1cm4gbWF0MztcbiAgfSxcblxuICBpbnZlcnNlKG1hdCwgbWF0Mykge1xuICAgIGxldCBhMDAgPSBtYXRbMF0sXG4gICAgICBhMDEgPSBtYXRbMV0sXG4gICAgICBhMTAgPSBtYXRbM10sXG4gICAgICBhMTEgPSBtYXRbNF0sXG4gICAgICBhMjAgPSBtYXRbNl0sXG4gICAgICBhMjEgPSBtYXRbN10sXG4gICAgICBiMDEgPSBhMTEsXG4gICAgICBiMTEgPSAtYTEwLFxuICAgICAgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwLFxuICAgICAgZCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSxcbiAgICAgIGlkO1xuXG4gICAgaWQgPSAxIC8gZDtcbiAgICBtYXQzWzBdID0gYjAxICogaWQ7XG4gICAgbWF0M1sxXSA9IC1hMDEgKiBpZDtcbiAgICBtYXQzWzNdID0gYjExICogaWQ7XG4gICAgbWF0M1s0XSA9IGEwMCAqIGlkO1xuICAgIG1hdDNbNl0gPSBiMjEgKiBpZDtcbiAgICBtYXQzWzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogaWQ7XG5cbiAgICByZXR1cm4gbWF0MztcbiAgfSxcblxuICBtdWx0aXBseVZlYzIobSwgdmVjLCBtYXQzKSB7XG4gICAgbGV0IHggPSB2ZWNbMF0sXG4gICAgICB5ID0gdmVjWzFdO1xuXG4gICAgbWF0M1swXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyBtWzZdO1xuICAgIG1hdDNbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgbVs3XTtcblxuICAgIHJldHVybiBtYXQzO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXQzO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBNYXRoVXRpbCBmcm9tIFwiLi4vbWF0aC9NYXRoVXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFuIHtcbiAgY29uc3RydWN0b3IoYSwgYiwgY2VudGVyKSB7XG4gICAgaWYgKFV0aWwuaXNBcnJheShhKSkge1xuICAgICAgdGhpcy5pc0FycmF5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYSA9IGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBcnJheSA9IGZhbHNlO1xuICAgICAgdGhpcy5hID0gVXRpbC5pbml0VmFsdWUoYSwgMSk7XG4gICAgICB0aGlzLmIgPSBVdGlsLmluaXRWYWx1ZShiLCB0aGlzLmEpO1xuICAgICAgdGhpcy5jZW50ZXIgPSBVdGlsLmluaXRWYWx1ZShjZW50ZXIsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShpc0ludCA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgICAgcmV0dXJuIFV0aWwuZ2V0UmFuZEZyb21BcnJheSh0aGlzLmEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuY2VudGVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoVXRpbC5yYW5kb21BVG9CKHRoaXMuYSwgdGhpcy5iLCBpc0ludCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aFV0aWwucmFuZG9tRmxvYXRpbmcodGhpcy5hLCB0aGlzLmIsIGlzSW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBTcGFuIG9iamVjdFxuICAgKlxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5VdGlsXG4gICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXG4gICAqXG4gICAqIEB0b2RvIGEsIGIgYW5kIGMgc2hvdWxkIGJlICdNaXhlZCcgb3IgJ051bWJlcic/XG4gICAqXG4gICAqIEBwYXJhbSB7TWl4ZWQgfCBTcGFufSBhXG4gICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgYlxuICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcbiAgICpcbiAgICogQHJldHVybiB7U3Bhbn1cbiAgICovXG4gIHN0YXRpYyBzZXRTcGFuVmFsdWUoYSwgYiwgYykge1xuICAgIGlmIChhIGluc3RhbmNlb2YgU3Bhbikge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG5ldyBTcGFuKGEsIGIpO1xuICAgICAgICBlbHNlIHJldHVybiBuZXcgU3BhbihhLCBiLCBjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgZnJvbSBhIFNwYW4sIGlmIHRoZSBwYXJhbSBpcyBub3QgYSBTcGFuIGl0IHdpbGwgcmV0dXJuIHRoZSBnaXZlbiBwYXJhbWV0ZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uVXRpbFxuICAgKiBAbWV0aG9kIGdldFZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7TWl4ZWQgfCBTcGFufSBwYW5cbiAgICpcbiAgICogQHJldHVybiB7TWl4ZWR9IHRoZSB2YWx1ZSBvZiBTcGFuIE9SIHRoZSBwYXJhbWV0ZXIgaWYgaXQgaXMgbm90IGEgU3BhblxuICAgKi9cbiAgc3RhdGljIGdldFNwYW5WYWx1ZShwYW4pIHtcbiAgICByZXR1cm4gcGFuIGluc3RhbmNlb2YgU3BhbiA/IHBhbi5nZXRWYWx1ZSgpIDogcGFuO1xuICB9XG59XG4iLCJpbXBvcnQgU3BhbiBmcm9tIFwiLi9TcGFuXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuL01hdGhVdGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5U3BhbiBleHRlbmRzIFNwYW4ge1xuICBjb25zdHJ1Y3Rvcihjb2xvcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYXJyID0gVXRpbC50b0FycmF5KGNvbG9yKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIGNvbnN0IHZhbCA9IFV0aWwuZ2V0UmFuZEZyb21BcnJheSh0aGlzLl9hcnIpO1xuICAgIHJldHVybiB2YWwgPT09IFwicmFuZG9tXCIgfHwgdmFsID09PSBcIlJhbmRvbVwiID8gTWF0aFV0aWwucmFuZG9tQ29sb3IoKSA6IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhhdCB0aGUgY29sb3IgaXMgYW4gaW5zdGFuY2Ugb2YgUHJvdG9uLkFycmF5U3BhbiwgaWYgbm90IGl0IG1ha2VzIGEgbmV3IGluc3RhbmNlXG4gICAqXG4gICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbG9yXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXG4gICAqIEBwYXJhbSB7SW50fSB0aGUgcGFydGljbGUgaW5kZXhcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBcnJheVNwYW4oYXJyKSB7XG4gICAgaWYgKCFhcnIpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGFyciBpbnN0YW5jZW9mIEFycmF5U3BhbikgcmV0dXJuIGFycjtcbiAgICBlbHNlIHJldHVybiBuZXcgQXJyYXlTcGFuKGFycik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICB0aGlzLndpZHRoID0gdztcbiAgICB0aGlzLmhlaWdodCA9IGg7XG5cbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnggKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgY29udGFpbnMoeCwgeSkge1xuICAgIGlmICh4IDw9IHRoaXMucmlnaHQgJiYgeCA+PSB0aGlzLnggJiYgeSA8PSB0aGlzLmJvdHRvbSAmJiB5ID49IHRoaXMueSkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBTcGFuIGZyb20gXCIuLi9tYXRoL1NwYW5cIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGUge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwYXJ0aWNsZXMgcGVyIHNlY29uZCBlbWlzc2lvbiAoYSBbcGFydGljbGVdL2IgW3NdKTtcbiAgICogQG5hbWVzcGFjZVxuICAgKiBAbWVtYmVyb2YhIFByb3RvbiNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhbGlhcyBSYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXkgfCBOdW1iZXIgfCBTcGFufSBudW1wYW4gdGhlIG51bWJlciBvZiBlYWNoIGVtaXNzaW9uO1xuICAgKiBAcGFyYW0ge0FycmF5IHwgTnVtYmVyIHwgU3Bhbn0gdGltZXBhbiB0aGUgdGltZSBvZiBlYWNoIGVtaXNzaW9uO1xuICAgKiBmb3IgZXhhbXBsZTogbmV3IFJhdGUobmV3IFNwYW4oMTAsIDIwKSwgbmV3IFNwYW4oLjEsIC4yNSkpO1xuICAgKi9cbiAgY29uc3RydWN0b3IobnVtcGFuLCB0aW1lcGFuKSB7XG4gICAgdGhpcy5udW1QYW4gPSBTcGFuLnNldFNwYW5WYWx1ZShVdGlsLmluaXRWYWx1ZShudW1wYW4sIDEpKTtcbiAgICB0aGlzLnRpbWVQYW4gPSBTcGFuLnNldFNwYW5WYWx1ZShVdGlsLmluaXRWYWx1ZSh0aW1lcGFuLCAxKSk7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5uZXh0VGltZSA9IDA7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XG4gIH1cblxuICBnZXRWYWx1ZSh0aW1lKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgKz0gdGltZTtcblxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSA+PSB0aGlzLm5leHRUaW1lKSB7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XG5cbiAgICAgIGlmICh0aGlzLm51bVBhbi5iID09PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLm51bVBhbi5nZXRWYWx1ZShmYWxzZSkgPiAwLjUpIHJldHVybiAxO1xuICAgICAgICBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtUGFuLmdldFZhbHVlKHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcbiAgcmVzZXQoKSB7fVxuXG4gIGluaXQoZW1pdHRlciwgcGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZShwYXJ0aWNsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcbiAgICB9XG4gIH1cblxuICAvLyBzdWIgY2xhc3MgaW5pdFxuICBpbml0aWFsaXplKHRhcmdldCkge31cbn1cbiIsImltcG9ydCBTcGFuIGZyb20gXCIuLi9tYXRoL1NwYW5cIjtcbmltcG9ydCBJbml0aWFsaXplIGZyb20gXCIuL0luaXRpYWxpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZSBleHRlbmRzIEluaXRpYWxpemUge1xuICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubGlmZVBhbiA9IFNwYW4uc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xuICAgIHRoaXMubmFtZSA9IFwiTGlmZVwiO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5saWZlUGFuLmEgPT09IEluZmluaXR5KSB0YXJnZXQubGlmZSA9IEluZmluaXR5O1xuICAgIGVsc2UgdGFyZ2V0LmxpZmUgPSB0aGlzLmxpZmVQYW4uZ2V0VmFsdWUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9tYXRoL1ZlY3RvcjJEXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlY3RvciA9IG5ldyBWZWN0b3IyRCgwLCAwKTtcbiAgICB0aGlzLnJhbmRvbSA9IDA7XG4gICAgdGhpcy5jcm9zc1R5cGUgPSBcImRlYWRcIjtcbiAgICB0aGlzLmFsZXJ0ID0gdHJ1ZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge31cblxuICBjcm9zc2luZyhwYXJ0aWNsZSkge31cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudmVjdG9yID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4vWm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnZlY3Rvci54ID0gdGhpcy54O1xuICAgIHRoaXMudmVjdG9yLnkgPSB0aGlzLnk7XG5cbiAgICByZXR1cm4gdGhpcy52ZWN0b3I7XG4gIH1cblxuICBjcm9zc2luZyhwYXJ0aWNsZSkge1xuICAgIGlmICh0aGlzLmFsZXJ0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU29ycnksIFBvaW50Wm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzaW5nIG1ldGhvZCFcIik7XG4gICAgICB0aGlzLmFsZXJ0ID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IFBvaW50Wm9uZSBmcm9tIFwiLi4vem9uZS9Qb2ludFpvbmVcIjtcbmltcG9ydCBJbml0aWFsaXplIGZyb20gXCIuL0luaXRpYWxpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBJbml0aWFsaXplIHtcbiAgY29uc3RydWN0b3Ioem9uZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy56b25lID0gVXRpbC5pbml0VmFsdWUoem9uZSwgbmV3IFBvaW50Wm9uZSgpKTtcbiAgICB0aGlzLm5hbWUgPSBcIlBvc2l0aW9uXCI7XG4gIH1cblxuICByZXNldCh6b25lKSB7XG4gICAgdGhpcy56b25lID0gVXRpbC5pbml0VmFsdWUoem9uZSwgbmV3IFBvaW50Wm9uZSgpKTtcbiAgfVxuXG4gIGluaXRpYWxpemUodGFyZ2V0KSB7XG4gICAgdGhpcy56b25lLmdldFBvc2l0aW9uKCk7XG5cbiAgICB0YXJnZXQucC54ID0gdGhpcy56b25lLnZlY3Rvci54O1xuICAgIHRhcmdldC5wLnkgPSB0aGlzLnpvbmUudmVjdG9yLnk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm90b24gZnJvbSBcIi4uL2NvcmUvUHJvdG9uXCI7XG5pbXBvcnQgU3BhbiBmcm9tIFwiLi4vbWF0aC9TcGFuXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vSW5pdGlhbGl6ZVwiO1xuaW1wb3J0IFBvbGFyMkQgZnJvbSBcIi4uL21hdGgvUG9sYXIyRFwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuLi9tYXRoL01hdGhVdGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5IGV4dGVuZHMgSW5pdGlhbGl6ZSB7XG4gIGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJQYW4gPSBTcGFuLnNldFNwYW5WYWx1ZShycGFuKTtcbiAgICB0aGlzLnRoYVBhbiA9IFNwYW4uc2V0U3BhblZhbHVlKHRoYXBhbik7XG4gICAgdGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgXCJ2ZWN0b3JcIik7XG5cbiAgICB0aGlzLm5hbWUgPSBcIlZlbG9jaXR5XCI7XG4gIH1cblxuICByZXNldChycGFuLCB0aGFwYW4sIHR5cGUpIHtcbiAgICB0aGlzLnJQYW4gPSBTcGFuLnNldFNwYW5WYWx1ZShycGFuKTtcbiAgICB0aGlzLnRoYVBhbiA9IFNwYW4uc2V0U3BhblZhbHVlKHRoYXBhbik7XG4gICAgdGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgXCJ2ZWN0b3JcIik7XG4gIH1cblxuICBub3JtYWxpemVWZWxvY2l0eSh2cikge1xuICAgIHJldHVybiB2ciAqIFByb3Rvbi5NRUFTVVJFO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcInBcIiB8fCB0aGlzLnR5cGUgPT09IFwiUFwiIHx8IHRoaXMudHlwZSA9PT0gXCJwb2xhclwiKSB7XG4gICAgICBjb25zdCBwb2xhcjJkID0gbmV3IFBvbGFyMkQoXG4gICAgICAgIHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuLmdldFZhbHVlKCkpLFxuICAgICAgICB0aGlzLnRoYVBhbi5nZXRWYWx1ZSgpICogTWF0aFV0aWwuUElfMTgwXG4gICAgICApO1xuXG4gICAgICB0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XG4gICAgICB0YXJnZXQudi55ID0gcG9sYXIyZC5nZXRZKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcbiAgICAgIHRhcmdldC52LnkgPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMudGhhUGFuLmdldFZhbHVlKCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNwYW4gZnJvbSBcIi4uL21hdGgvU3BhblwiO1xuaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vSW5pdGlhbGl6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNzIGV4dGVuZHMgSW5pdGlhbGl6ZSB7XG4gIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWFzc1BhbiA9IFNwYW4uc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xuICAgIHRoaXMubmFtZSA9IFwiTWFzc1wiO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcbiAgICB0YXJnZXQubWFzcyA9IHRoaXMubWFzc1Bhbi5nZXRWYWx1ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgU3BhbiBmcm9tIFwiLi4vbWF0aC9TcGFuXCI7XG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9Jbml0aWFsaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGl1cyBleHRlbmRzIEluaXRpYWxpemUge1xuICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJhZGl1cyA9IFNwYW4uc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xuXG4gICAgdGhpcy5uYW1lID0gXCJSYWRpdXNcIjtcbiAgfVxuXG4gIHJlc2V0KGEsIGIsIGMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IFNwYW4uc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xuICAgIHBhcnRpY2xlLnJhZGl1cyA9IHRoaXMucmFkaXVzLmdldFZhbHVlKCk7XG4gICAgcGFydGljbGUuZGF0YS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XG4gIH1cbn1cbiIsImltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgQXJyYXlTcGFuIGZyb20gXCIuLi9tYXRoL0FycmF5U3BhblwiO1xuaW1wb3J0IEluaXRpYWxpemUgZnJvbSBcIi4vSW5pdGlhbGl6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgSW5pdGlhbGl6ZSB7XG4gIGNvbnN0cnVjdG9yKGltYWdlLCB3LCBoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2UgPSB0aGlzLnNldFNwYW5WYWx1ZShpbWFnZSk7XG4gICAgdGhpcy53ID0gVXRpbC5pbml0VmFsdWUodywgMjApO1xuICAgIHRoaXMuaCA9IFV0aWwuaW5pdFZhbHVlKGgsIHRoaXMudyk7XG4gICAgdGhpcy5uYW1lID0gXCJCb2R5XCI7XG4gIH1cblxuICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XG4gICAgY29uc3QgaW1hZ2VUYXJnZXQgPSB0aGlzLmltYWdlLmdldFZhbHVlKCk7XG5cbiAgICBpZiAodHlwZW9mIGltYWdlVGFyZ2V0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBwYXJ0aWNsZS5ib2R5ID0ge1xuICAgICAgICB3aWR0aDogdGhpcy53LFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaCxcbiAgICAgICAgc3JjOiBpbWFnZVRhcmdldCxcbiAgICAgICAgaXNJbm5lcjogdHJ1ZSxcbiAgICAgICAgaW5uZXI6IHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpY2xlLmJvZHkgPSBpbWFnZVRhcmdldDtcbiAgICB9XG4gIH1cblxuICBzZXRTcGFuVmFsdWUoaW1hZ2UpIHtcbiAgICByZXR1cm4gaW1hZ2UgaW5zdGFuY2VvZiBBcnJheVNwYW4gPyBpbWFnZSA6IG5ldyBBcnJheVNwYW4oaW1hZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvdG9uIGZyb20gXCIuLi9jb3JlL1Byb3RvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBlYXNlIGZyb20gXCIuLi9tYXRoL2Vhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3VyIHtcbiAgc3RhdGljIGlkID0gMDtcblxuICAvKipcbiAgICogVGhlIEJlaGF2aW91ciBjbGFzcyBpcyB0aGUgYmFzZSBmb3IgdGhlIG90aGVyIEJlaGF2aW91clxuICAgKlxuICAgKiBAbWVtYmVyb2YhIC1cbiAgICogQGludGVyZmFjZVxuICAgKiBAYWxpYXMgUHJvdG9uLkJlaGF2aW91clxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbGlmZSBcdHRoZSBiZWhhdmlvdXJzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVhc2luZyBcdFRoZSBiZWhhdmlvdXIncyBkZWNheWluZyB0cmVuZCwgZm9yIGV4YW1wbGUgZWFzZS5lYXNlT3V0UXVhcnRcbiAgICpcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9ICBpZCBcdFx0VGhlIGJlaGF2aW91cnMgaWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9ICBhZ2U9MCBcdEhvdyBsb25nIHRoZSBwYXJ0aWNsZSBzaG91bGQgYmUgJ2FsaWZlJ1xuICAgKiBAcHJvcGVydHkge051bWJlcn0gIGVuZXJneT0xXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGVhZD1mYWxzZSBUaGUgcGFydGljbGUgaXMgZGVhZCBhdCBmaXJzdFxuICAgKiBAcHJvcGVydHkge0FycmF5fSAgIHBhcmVudHMgXHRUaGUgYmVoYXZpb3VyJ3MgcGFyZW50cyBhcnJheVxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gIG5hbWUgXHRUaGUgYmVoYXZpb3VyIG5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGxpZmUsIGVhc2luZykge1xuICAgIHRoaXMubGlmZSA9IFV0aWwuaW5pdFZhbHVlKGxpZmUsIEluZmluaXR5KTtcbiAgICB0aGlzLmVhc2luZyA9IGVhc2UuZ2V0RWFzaW5nKGVhc2luZyk7XG5cbiAgICB0aGlzLmFnZSA9IDA7XG4gICAgdGhpcy5lbmVyZ3kgPSAxO1xuICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgIHRoaXMucGFyZW50cyA9IFtdO1xuXG4gICAgdGhpcy5pZCA9IGBCZWhhdmlvdXJfJHtCZWhhdmlvdXIuaWQrK31gO1xuICAgIHRoaXMubmFtZSA9IFwiQmVoYXZpb3VyXCI7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBtZXRob2QgcmVzZXRcbiAgICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqL1xuICByZXNldChsaWZlLCBlYXNpbmcpIHtcbiAgICB0aGlzLmxpZmUgPSBVdGlsLmluaXRWYWx1ZShsaWZlLCBJbmZpbml0eSk7XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNlLmdldEVhc2luZyhlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xuICAgKlxuICAgKiBAbWV0aG9kIG5vcm1hbGl6ZUZvcmNlXG4gICAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2VcbiAgICovXG4gIG5vcm1hbGl6ZUZvcmNlKGZvcmNlKSB7XG4gICAgcmV0dXJuIGZvcmNlLm11bHRpcGx5U2NhbGFyKFByb3Rvbi5NRUFTVVJFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYSB2YWx1ZSBieSAxOjEwMDtcbiAgICpcbiAgICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxuICAgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqL1xuICBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAqIFByb3Rvbi5NRUFTVVJFO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcbiAgICpcbiAgICogQG1ldGhvZCBpbml0aWFsaXplXG4gICAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICovXG4gIGluaXRpYWxpemUocGFydGljbGUpIHt9XG5cbiAgLyoqXG4gICAqIGNvbXB1dGluZyBsaWZlIGN5Y2xlXG4gICAqXG4gICAqIEBtZXRob2QgY2FsY3VsYXRlXG4gICAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgY2FsY3VsYXRlKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xuICAgIHRoaXMuYWdlICs9IHRpbWU7XG5cbiAgICBpZiAodGhpcy5hZ2UgPj0gdGhpcy5saWZlIHx8IHRoaXMuZGVhZCkge1xuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xuICAgICAgdGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXG4gICAqXG4gICAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sb3JcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxuICAgKiBAcGFyYW0ge051bWJlcn0gdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoaXMgYmVoYXZpb3VyXG4gICAqXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAaW5zdGFuY2VcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgbGV0IGkgPSB0aGlzLnBhcmVudHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMucGFyZW50c1tpXS5yZW1vdmVCZWhhdmlvdXIodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRzLmxlbmd0aCA9IDA7XG4gIH1cbn1cbiIsImltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vbWF0aC9WZWN0b3IyRFwiO1xuaW1wb3J0IEJlaGF2aW91ciBmcm9tIFwiLi9CZWhhdmlvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yY2UgZXh0ZW5kcyBCZWhhdmlvdXIge1xuICAvKipcbiAgICogQG1lbWJlcm9mISBQcm90b24jXG4gICAqIEBhdWdtZW50cyBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUHJvdG9uLkZvcmNlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmeFxuICAgKiBAcGFyYW0ge051bWJlcn0gZnlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZS5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIFRoZSBCZWhhdmlvdXIgbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZngsIGZ5LCBsaWZlLCBlYXNpbmcpIHtcbiAgICBzdXBlcihsaWZlLCBlYXNpbmcpO1xuXG4gICAgdGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xuICAgIHRoaXMubmFtZSA9IFwiRm9yY2VcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Gb3JjZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZ4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmeVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICovXG4gIHJlc2V0KGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XG4gICAgdGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xuXG4gICAgbGlmZSAmJiBzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcbiAgICpcbiAgICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Gb3JjZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xuICAgKiBAcGFyYW0ge0ludH0gdGhlIHBhcnRpY2xlIGluZGV4XG4gICAqL1xuICBhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZShwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xuICAgIHBhcnRpY2xlLmEuYWRkKHRoaXMuZm9yY2UpO1xuICB9XG59XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9tYXRoL1ZlY3RvcjJEXCI7XG5pbXBvcnQgQmVoYXZpb3VyIGZyb20gXCIuL0JlaGF2aW91clwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0aW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcbiAgLyoqXG4gICAqIFRoaXMgYmVoYXZpb3VyIGxldCB0aGUgcGFydGljbGVzIGZvbGxvdyBvbmUgc3BlY2lmaWMgUHJvdG9uLlZlY3RvcjJEXG4gICAqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGFsaWFzIFByb3Rvbi5BdHRyYWN0aW9uXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IHRhcmdldFBvc2l0aW9uIHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3JhZGl1cz0xMDAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKlxuICAgKiBAcHJvcGVydHkge1Byb3Rvbi5WZWN0b3IyRH0gdGFyZ2V0UG9zaXRpb25cbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJhZGl1c1xuICAgKiBAcHJvcGVydHkge051bWJlcn0gZm9yY2VcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHJhZGl1c1NxXG4gICAqIEBwcm9wZXJ0eSB7UHJvdG9uLlZlY3RvcjJEfSBhdHRyYWN0aW9uRm9yY2VcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlbmd0aFNxXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIFRoZSBCZWhhdmlvdXIgbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKGxpZmUsIGVhc2luZyk7XG5cbiAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gVXRpbC5pbml0VmFsdWUodGFyZ2V0UG9zaXRpb24sIG5ldyBWZWN0b3IyRCgpKTtcbiAgICB0aGlzLnJhZGl1cyA9IFV0aWwuaW5pdFZhbHVlKHJhZGl1cywgMTAwMCk7XG4gICAgdGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xuXG4gICAgdGhpcy5yYWRpdXNTcSA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5hdHRyYWN0aW9uRm9yY2UgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICB0aGlzLmxlbmd0aFNxID0gMDtcblxuICAgIHRoaXMubmFtZSA9IFwiQXR0cmFjdGlvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IHRhcmdldFBvc2l0aW9uIHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3JhZGl1cz0xMDAwXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xuICAgIHRoaXMudGFyZ2V0UG9zaXRpb24gPSBVdGlsLmluaXRWYWx1ZSh0YXJnZXRQb3NpdGlvbiwgbmV3IFZlY3RvcjJEKCkpO1xuICAgIHRoaXMucmFkaXVzID0gVXRpbC5pbml0VmFsdWUocmFkaXVzLCAxMDAwKTtcbiAgICB0aGlzLmZvcmNlID0gVXRpbC5pbml0VmFsdWUodGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSksIDEwMCk7XG5cbiAgICB0aGlzLnJhZGl1c1NxID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cztcbiAgICB0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xuICAgIHRoaXMubGVuZ3RoU3EgPSAwO1xuXG4gICAgbGlmZSAmJiBzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcbiAgICpcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQXR0cmFjdGlvblxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcblxuICAgIHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XG4gICAgdGhpcy5hdHRyYWN0aW9uRm9yY2Uuc3ViKHBhcnRpY2xlLnApO1xuICAgIHRoaXMubGVuZ3RoU3EgPSB0aGlzLmF0dHJhY3Rpb25Gb3JjZS5sZW5ndGhTcSgpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU3EgPiAwLjAwMDA0ICYmIHRoaXMubGVuZ3RoU3EgPCB0aGlzLnJhZGl1c1NxKSB7XG4gICAgICB0aGlzLmF0dHJhY3Rpb25Gb3JjZS5ub3JtYWxpemUoKTtcbiAgICAgIHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XG4gICAgICB0aGlzLmF0dHJhY3Rpb25Gb3JjZS5tdWx0aXBseVNjYWxhcih0aGlzLmZvcmNlKTtcblxuICAgICAgcGFydGljbGUuYS5hZGQodGhpcy5hdHRyYWN0aW9uRm9yY2UpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9tYXRoL1ZlY3RvcjJEXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcbmltcG9ydCBCZWhhdmlvdXIgZnJvbSBcIi4vQmVoYXZpb3VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbURyaWZ0IGV4dGVuZHMgQmVoYXZpb3VyIHtcbiAgLyoqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgQmVoYXZpb3VyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUmFuZG9tRHJpZnRcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRyaWZ0WCBcdFx0XHRcdFggdmFsdWUgb2YgdGhlIG5ldyBWZWN0b3IyRFxuICAgKiBAcGFyYW0ge051bWJlcn0gZHJpZnRZICBcdFx0XHRcdFkgdmFsdWUgb2YgdGhlIG5ldyBWZWN0b3IyRFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgXHRcdFx0XHRIb3cgbXVjaCBkZWxheSB0aGUgZHJpZnQgc2hvdWxkIGhhdmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHRpbWUgVGhlIHRpbWUgb2YgdGhlIGRyaWZ0XG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIFRoZSBCZWhhdmlvdXIgbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZHJpZnRYLCBkcmlmdFksIGRlbGF5LCBsaWZlLCBlYXNpbmcpIHtcbiAgICBzdXBlcihsaWZlLCBlYXNpbmcpO1xuXG4gICAgdGhpcy5yZXNldChkcmlmdFgsIGRyaWZ0WSwgZGVsYXkpO1xuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5uYW1lID0gXCJSYW5kb21EcmlmdFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUmFuZG9tRHJpZnRcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkcmlmdFggXHRcdFx0XHRYIHZhbHVlIG9mIHRoZSBuZXcgVmVjdG9yMkRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRyaWZ0WSAgXHRcdFx0XHRZIHZhbHVlIG9mIHRoZSBuZXcgVmVjdG9yMkRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IFx0XHRcdFx0SG93IG11Y2ggZGVsYXkgdGhlIGRyaWZ0IHNob3VsZCBoYXZlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqL1xuICByZXNldChkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xuICAgIHRoaXMucGFuRm9jZSA9IG5ldyBWZWN0b3IyRChkcmlmdFgsIGRyaWZ0WSk7XG4gICAgdGhpcy5wYW5Gb2NlID0gdGhpcy5ub3JtYWxpemVGb3JjZSh0aGlzLnBhbkZvY2UpO1xuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcblxuICAgIGxpZmUgJiYgc3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcbiAgfVxuXG4gIGluaXRpYWxpemUocGFydGljbGUpIHtcbiAgICBwYXJ0aWNsZS5kYXRhLnRpbWUgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcbiAgICpcbiAgICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1JhbmRvbURyaWZ0XG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpY2xlfSBwYXJ0aWNsZVxuICAgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xuICAgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XG4gICAqL1xuICBhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZShwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xuICAgIHBhcnRpY2xlLmRhdGEudGltZSArPSB0aW1lO1xuXG4gICAgaWYgKHBhcnRpY2xlLmRhdGEudGltZSA+PSB0aGlzLmRlbGF5KSB7XG4gICAgICBwYXJ0aWNsZS5hLmFkZFhZKFxuICAgICAgICBNYXRoVXRpbC5yYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueCwgdGhpcy5wYW5Gb2NlLngpLFxuICAgICAgICBNYXRoVXRpbC5yYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueSwgdGhpcy5wYW5Gb2NlLnkpXG4gICAgICApO1xuXG4gICAgICBwYXJ0aWNsZS5kYXRhLnRpbWUgPSAwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEZvcmNlIGZyb20gXCIuL0ZvcmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHkgZXh0ZW5kcyBGb3JjZSB7XG4gIC8qKlxuICAgKiBAbWVtYmVyb2YhIFByb3RvbiNcbiAgICogQGF1Z21lbnRzIFByb3RvbiNQcm90b24uRm9yY2VcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhbGlhcyBQcm90b24uR3Jhdml0eVxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gZyBcdFx0XHRcdFx0XHRcdEdyYXZpdHlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgVGhlIEJlaGF2aW91ciBuYW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihnLCBsaWZlLCBlYXNpbmcpIHtcbiAgICBzdXBlcigwLCBnLCBsaWZlLCBlYXNpbmcpO1xuICAgIHRoaXMubmFtZSA9IFwiR3Jhdml0eVwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkdyYXZpdHlcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBnIFx0XHRcdFx0XHRcdFx0R3Jhdml0eVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQoZywgbGlmZSwgZWFzaW5nKSB7XG4gICAgc3VwZXIucmVzZXQoMCwgZywgbGlmZSwgZWFzaW5nKTtcbiAgfVxufVxuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vbWF0aC9WZWN0b3IyRFwiO1xuaW1wb3J0IEJlaGF2aW91ciBmcm9tIFwiLi9CZWhhdmlvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayBhZnRlciBjb2xsaXNpb25cbiAgICpcbiAgICogQGNhbGxiYWNrIENhbGxiYWNrXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJpdGNsZX0gb3RoZXJQYXJ0aWNsZVxuICAgKi9cbiAgLyoqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGFsaWFzIFByb3Rvbi5Db2xsaXNpb25cbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uRW1pdHRlcn0gXHRbZW1pdHRlcj1udWxsXSBcdFx0dGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cbiAgICogQHBhcmFtIHtDYWxsYmFja31cdCBcdFtjYWxsYmFjaz1udWxsXVx0XHR0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIGNvbGxpc2lvblxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKlxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBUaGUgQmVoYXZpb3VyIG5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrLCBsaWZlLCBlYXNpbmcpIHtcbiAgICBzdXBlcihsaWZlLCBlYXNpbmcpO1xuICAgIHRoaXMucmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2spO1xuICAgIHRoaXMubmV3UG9vbCA9IFtdO1xuICAgIHRoaXMucG9vbCA9IFtdO1xuICAgIHRoaXMubmFtZSA9IFwiQ29sbGlzaW9uXCI7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gdG8gbWFzc1xuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5FbWl0dGVyfSBcdFtlbWl0dGVyPW51bGxdIFx0XHR0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFx0XHRbbWFzcz10cnVlXVxuICAgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHRbbGlmZT1JbmZpbml0eV0gXHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZS5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqL1xuICByZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XG4gICAgdGhpcy5lbWl0dGVyID0gVXRpbC5pbml0VmFsdWUoZW1pdHRlciwgbnVsbCk7XG4gICAgdGhpcy5tYXNzID0gVXRpbC5pbml0VmFsdWUobWFzcywgdHJ1ZSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IFV0aWwuaW5pdFZhbHVlKGNhbGxiYWNrLCBudWxsKTtcblxuICAgIHRoaXMuY29sbGlzaW9uUG9vbCA9IFtdO1xuICAgIHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcblxuICAgIGxpZmUgJiYgc3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXG4gICAqXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZW1pdHRlcikge1xuICAgICAgVXRpbC5zbGljZUFycmF5KHRoaXMuZW1pdHRlci5wYXJ0aWNsZXMsIGluZGV4LCB0aGlzLm5ld1Bvb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICBVdGlsLnNsaWNlQXJyYXkodGhpcy5wb29sLCBpbmRleCwgdGhpcy5uZXdQb29sKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm5ld1Bvb2wubGVuZ3RoO1xuICAgIGxldCBvdGhlclBhcnRpY2xlO1xuICAgIGxldCBsZW5ndGhTcTtcbiAgICBsZXQgb3ZlcmxhcDtcbiAgICBsZXQgdG90YWxNYXNzO1xuICAgIGxldCBhdmVyYWdlTWFzczEsIGF2ZXJhZ2VNYXNzMjtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgb3RoZXJQYXJ0aWNsZSA9IHRoaXMubmV3UG9vbFtpXTtcblxuICAgICAgaWYgKG90aGVyUGFydGljbGUgIT09IHBhcnRpY2xlKSB7XG4gICAgICAgIHRoaXMuZGVsdGEuY29weShvdGhlclBhcnRpY2xlLnApO1xuICAgICAgICB0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcblxuICAgICAgICBsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBwYXJ0aWNsZS5yYWRpdXMgKyBvdGhlclBhcnRpY2xlLnJhZGl1cztcblxuICAgICAgICBpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xuICAgICAgICAgIG92ZXJsYXAgPSBkaXN0YW5jZSAtIE1hdGguc3FydChsZW5ndGhTcSk7XG4gICAgICAgICAgb3ZlcmxhcCArPSAwLjU7XG5cbiAgICAgICAgICB0b3RhbE1hc3MgPSBwYXJ0aWNsZS5tYXNzICsgb3RoZXJQYXJ0aWNsZS5tYXNzO1xuICAgICAgICAgIGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcbiAgICAgICAgICBhdmVyYWdlTWFzczIgPSB0aGlzLm1hc3MgPyBwYXJ0aWNsZS5tYXNzIC8gdG90YWxNYXNzIDogMC41O1xuXG4gICAgICAgICAgcGFydGljbGUucC5hZGQoXG4gICAgICAgICAgICB0aGlzLmRlbHRhXG4gICAgICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgICAgIC5ub3JtYWxpemUoKVxuICAgICAgICAgICAgICAubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvdGhlclBhcnRpY2xlLnAuYWRkKHRoaXMuZGVsdGEubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIGF2ZXJhZ2VNYXNzMikpO1xuXG4gICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHBhcnRpY2xlLCBvdGhlclBhcnRpY2xlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBCZWhhdmlvdXIgZnJvbSBcIi4vQmVoYXZpb3VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3NzWm9uZSBleHRlbmRzIEJlaGF2aW91ciB7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoYXQgaGFwcGVucyBpZiB0aGUgcGFydGljbGVzIGNvbWUgdG8gdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIHpvbmVcbiAgICpcbiAgICogQG1lbWJlcm9mISBQcm90b24jXG4gICAqIEBhdWdtZW50cyBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUHJvdG9uLkNyb3NzWm9uZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5ab25lfSB6b25lIFx0XHRcdFx0XHRcdGNhbiBiZSBhbnkgUHJvdG9uLlpvbmUgLSBlLmcuIFByb3Rvbi5SZWN0Wm9uZSgpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBcdFx0W2Nyb3NzVHlwZT1kZWFkXSBcdFx0XHR3aGF0IGhhcHBlbnMgaWYgdGhlIHBhcnRpY2xlcyBwYXNzIHRoZSB6b25lIC0gYWxsb3dlZCBzdHJpbmdzOiBkZWFkIHwgYm91bmQgfCBjcm9zc1xuICAgKiBAcGFyYW0ge051bWJlcn0gXHRcdFtsaWZlPUluZmluaXR5XSBcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFx0XHRbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKlxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBUaGUgQmVoYXZpb3VyIG5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKSB7XG4gICAgc3VwZXIobGlmZSwgZWFzaW5nKTtcblxuICAgIHRoaXMucmVzZXQoem9uZSwgY3Jvc3NUeXBlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkNyb3NzWm9uZVwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNyb3NzWm9uZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uWm9uZX0gem9uZSBcdFx0XHRcdGNhbiBiZSBhbnkgUHJvdG9uLlpvbmUgLSBlLmcuIFByb3Rvbi5SZWN0Wm9uZSgpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBcdFx0W2Nyb3NzVHlwZT1kZWFkXSBcdHdoYXQgaGFwcGVucyBpZiB0aGUgcGFydGljbGVzIHBhc3MgdGhlIHpvbmUgLSBhbGxvd2VkIHN0cmluZ3M6IGRlYWQgfCBib3VuZCB8IGNyb3NzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0W2xpZmU9SW5maW5pdHldIFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBcdFx0W2Vhc2luZz1lYXNlTGluZWFyXVx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICovXG4gIHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKSB7XG4gICAgdGhpcy56b25lID0gem9uZTtcbiAgICB0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBcImRlYWRcIik7XG5cbiAgICBsaWZlICYmIHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxuICAgKlxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNyb3NzWm9uZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xuICAgKiBAcGFyYW0ge0ludH0gdGhlIHBhcnRpY2xlIGluZGV4XG4gICAqL1xuICBhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZShwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xuICAgIHRoaXMuem9uZS5jcm9zc2luZyhwYXJ0aWNsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgU3BhbiBmcm9tIFwiLi4vbWF0aC9TcGFuXCI7XG5pbXBvcnQgQmVoYXZpb3VyIGZyb20gXCIuL0JlaGF2aW91clwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHBoYSBleHRlbmRzIEJlaGF2aW91ciB7XG4gIC8qKlxuICAgKiBAbWVtYmVyb2YhIFByb3RvbiNcbiAgICogQGF1Z21lbnRzIFByb3Rvbi5CZWhhdmlvdXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhbGlhcyBQcm90b24uQWxwaGFcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKlxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBUaGUgQmVoYXZpb3VyIG5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKGxpZmUsIGVhc2luZyk7XG5cbiAgICB0aGlzLnJlc2V0KGEsIGIpO1xuICAgIHRoaXMubmFtZSA9IFwiQWxwaGFcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BbHBoYVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XG4gICAgdGhpcy5zYW1lID0gYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5hID0gU3Bhbi5zZXRTcGFuVmFsdWUoVXRpbC5pbml0VmFsdWUoYSwgMSkpO1xuICAgIHRoaXMuYiA9IFNwYW4uc2V0U3BhblZhbHVlKGIpO1xuXG4gICAgbGlmZSAmJiBzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldyBhbHBoYSB2YWx1ZSBvZiB0aGUgcGFydGljbGVcbiAgICpcbiAgICogQG1ldGhvZCBpbml0aWFsaXplXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkFscGhhXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGUgQSBzaW5nbGUgUHJvdG9uIGdlbmVyYXRlZCBwYXJ0aWNsZVxuICAgKi9cbiAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xuICAgIHBhcnRpY2xlLmRhdGEuYWxwaGFBID0gdGhpcy5hLmdldFZhbHVlKCk7XG5cbiAgICBpZiAodGhpcy5zYW1lKSBwYXJ0aWNsZS5kYXRhLmFscGhhQiA9IHBhcnRpY2xlLmRhdGEuYWxwaGFBO1xuICAgIGVsc2UgcGFydGljbGUuZGF0YS5hbHBoYUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkFscGhhXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcblxuICAgIHBhcnRpY2xlLmFscGhhID0gcGFydGljbGUuZGF0YS5hbHBoYUIgKyAocGFydGljbGUuZGF0YS5hbHBoYUEgLSBwYXJ0aWNsZS5kYXRhLmFscGhhQikgKiB0aGlzLmVuZXJneTtcblxuICAgIGlmIChwYXJ0aWNsZS5hbHBoYSA8IDAuMDAxKSBwYXJ0aWNsZS5hbHBoYSA9IDA7XG4gIH1cbn1cbiIsImltcG9ydCBTcGFuIGZyb20gXCIuLi9tYXRoL1NwYW5cIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgQmVoYXZpb3VyIGZyb20gXCIuL0JlaGF2aW91clwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSBleHRlbmRzIEJlaGF2aW91ciB7XG4gIC8qKlxuICAgKiBAbWVtYmVyb2YhIFByb3RvbiNcbiAgICogQGF1Z21lbnRzIFByb3Rvbi5CZWhhdmlvdXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhbGlhcyBQcm90b24uU2NhbGVcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYVxuICAgKiBAcGFyYW0ge1N0cmluZ30gYlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKlxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gbmFtZSBUaGUgQmVoYXZpb3VyIG5hbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKGxpZmUsIGVhc2luZyk7XG5cbiAgICB0aGlzLnJlc2V0KGEsIGIpO1xuICAgIHRoaXMubmFtZSA9IFwiU2NhbGVcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5TY2FsZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICovXG4gIHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xuICAgIHRoaXMuc2FtZSA9IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuYSA9IFNwYW4uc2V0U3BhblZhbHVlKFV0aWwuaW5pdFZhbHVlKGEsIDEpKTtcbiAgICB0aGlzLmIgPSBTcGFuLnNldFNwYW5WYWx1ZShiKTtcblxuICAgIGxpZmUgJiYgc3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzIGZvciBhbGwgcGFydGljbGVzXG4gICAqXG4gICAqIEBtZXRob2QgaW5pdGlhbGl6ZVxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5TY2FsZVxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXG4gICAqL1xuICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XG4gICAgcGFydGljbGUuZGF0YS5zY2FsZUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcbiAgICBwYXJ0aWNsZS5kYXRhLm9sZFJhZGl1cyA9IHBhcnRpY2xlLnJhZGl1cztcbiAgICBwYXJ0aWNsZS5kYXRhLnNjYWxlQiA9IHRoaXMuc2FtZSA/IHBhcnRpY2xlLmRhdGEuc2NhbGVBIDogdGhpcy5iLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxuICAgKlxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlNjYWxlXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcbiAgICBwYXJ0aWNsZS5zY2FsZSA9IHBhcnRpY2xlLmRhdGEuc2NhbGVCICsgKHBhcnRpY2xlLmRhdGEuc2NhbGVBIC0gcGFydGljbGUuZGF0YS5zY2FsZUIpICogdGhpcy5lbmVyZ3k7XG5cbiAgICBpZiAocGFydGljbGUuc2NhbGUgPCAwLjAwMDEpIHBhcnRpY2xlLnNjYWxlID0gMDtcbiAgICBwYXJ0aWNsZS5yYWRpdXMgPSBwYXJ0aWNsZS5kYXRhLm9sZFJhZGl1cyAqIHBhcnRpY2xlLnNjYWxlO1xuICB9XG59XG4iLCJpbXBvcnQgU3BhbiBmcm9tIFwiLi4vbWF0aC9TcGFuXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IEJlaGF2aW91ciBmcm9tIFwiLi9CZWhhdmlvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlIGV4dGVuZHMgQmVoYXZpb3VyIHtcbiAgLyoqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGFsaWFzIFByb3Rvbi5Sb3RhdGVcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScsICdiJyBhbmQgJ3N0eWxlJ1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2luZmx1ZW5jZT1WZWxvY2l0eV0gVGhlIHJvdGF0aW9uJ3MgaW5mbHVlbmNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBiXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbc3R5bGU9dG9dXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZS5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIFRoZSBCZWhhdmlvdXIgbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5mbHVlbmNlLCBiLCBzdHlsZSwgbGlmZSwgZWFzaW5nKSB7XG4gICAgc3VwZXIobGlmZSwgZWFzaW5nKTtcblxuICAgIHRoaXMucmVzZXQoaW5mbHVlbmNlLCBiLCBzdHlsZSk7XG4gICAgdGhpcy5uYW1lID0gXCJSb3RhdGVcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Sb3RhdGVcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2EnLCAnYicgYW5kICdzdHlsZSdcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtzdHlsZT10b11cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICovXG4gIHJlc2V0KGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcbiAgICB0aGlzLnNhbWUgPSBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcblxuICAgIHRoaXMuYSA9IFNwYW4uc2V0U3BhblZhbHVlKFV0aWwuaW5pdFZhbHVlKGEsIFwiVmVsb2NpdHlcIikpO1xuICAgIHRoaXMuYiA9IFNwYW4uc2V0U3BhblZhbHVlKFV0aWwuaW5pdFZhbHVlKGIsIDApKTtcbiAgICB0aGlzLnN0eWxlID0gVXRpbC5pbml0VmFsdWUoc3R5bGUsIFwidG9cIik7XG5cbiAgICBsaWZlICYmIHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYmVoYXZpb3VyJ3MgcGFyYW1ldGVycyBmb3IgYWxsIHBhcnRpY2xlc1xuICAgKlxuICAgKiBAbWV0aG9kIGluaXRpYWxpemVcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uUm90YXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICovXG4gIGluaXRpYWxpemUocGFydGljbGUpIHtcbiAgICBwYXJ0aWNsZS5yb3RhdGlvbiA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xuICAgIHBhcnRpY2xlLmRhdGEucm90YXRpb25BID0gdGhpcy5hLmdldFZhbHVlKCk7XG5cbiAgICBpZiAoIXRoaXMuc2FtZSkgcGFydGljbGUuZGF0YS5yb3RhdGlvbkIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXG4gICAqXG4gICAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uUm90YXRlXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcbiAgICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxuICAgKi9cbiAgYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XG4gICAgdGhpcy5jYWxjdWxhdGUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcblxuICAgIGlmICghdGhpcy5zYW1lKSB7XG4gICAgICBpZiAodGhpcy5zdHlsZSA9PT0gXCJ0b1wiIHx8IHRoaXMuc3R5bGUgPT09IFwiVE9cIiB8fCB0aGlzLnN0eWxlID09PSBcIl9cIikge1xuICAgICAgICBwYXJ0aWNsZS5yb3RhdGlvbiArPVxuICAgICAgICAgIHBhcnRpY2xlLmRhdGEucm90YXRpb25CICsgKHBhcnRpY2xlLmRhdGEucm90YXRpb25BIC0gcGFydGljbGUuZGF0YS5yb3RhdGlvbkIpICogdGhpcy5lbmVyZ3k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS5kYXRhLnJvdGF0aW9uQjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYS5hID09PSBcIlZcIiB8fCB0aGlzLmEuYSA9PT0gXCJWZWxvY2l0eVwiIHx8IHRoaXMuYS5hID09PSBcInZcIikge1xuICAgICAgLy8gYmV0YS4uLlxuICAgICAgcGFydGljbGUucm90YXRpb24gPSBwYXJ0aWNsZS5nZXREaXJlY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDb2xvclV0aWwgZnJvbSBcIi4uL3V0aWxzL0NvbG9yVXRpbFwiO1xuaW1wb3J0IEFycmF5U3BhbiBmcm9tIFwiLi4vbWF0aC9BcnJheVNwYW5cIjtcbmltcG9ydCBCZWhhdmlvdXIgZnJvbSBcIi4vQmVoYXZpb3VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIGV4dGVuZHMgQmVoYXZpb3VyIHtcbiAgLyoqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgUHJvdG9uLkJlaGF2aW91clxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGFsaWFzIFByb3Rvbi5Db2xvclxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5BcnJheVNwYW4gfCBTdHJpbmd9IGEgdGhlIHN0cmluZyBzaG91bGQgYmUgYSBoZXggZS5nLiAjMDAwMDAwIGZvciBibGFja1xuICAgKiBAcGFyYW0ge1Byb3Rvbi5BcnJheVNwYW4gfCBTdHJpbmd9IGIgdGhlIHN0cmluZyBzaG91bGQgYmUgYSBoZXggZS5nLiAjMDAwMDAwIGZvciBibGFja1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgVGhlIEJlaGF2aW91ciBuYW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcbiAgICBzdXBlcihsaWZlLCBlYXNpbmcpO1xuXG4gICAgdGhpcy5yZXNldChhLCBiKTtcbiAgICB0aGlzLm5hbWUgPSBcIkNvbG9yXCI7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBtZXRob2QgcmVzZXRcbiAgICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sb3JcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvdG9uLkFycmF5U3BhbiB8IFN0cmluZ30gYSB0aGUgc3RyaW5nIHNob3VsZCBiZSBhIGhleCBlLmcuICMwMDAwMDAgZm9yIGJsYWNrXG4gICAqIEBwYXJhbSB7UHJvdG9uLkFycmF5U3BhbiB8IFN0cmluZ30gYiB0aGUgc3RyaW5nIHNob3VsZCBiZSBhIGhleCBlLmcuICMwMDAwMDAgZm9yIGJsYWNrXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XG4gICAgdGhpcy5hID0gQXJyYXlTcGFuLmNyZWF0ZUFycmF5U3BhbihhKTtcbiAgICB0aGlzLmIgPSBBcnJheVNwYW4uY3JlYXRlQXJyYXlTcGFuKGIpO1xuICAgIGxpZmUgJiYgc3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzIGZvciBhbGwgcGFydGljbGVzXG4gICAqXG4gICAqIEBtZXRob2QgaW5pdGlhbGl6ZVxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Db2xvclxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXG4gICAqL1xuICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XG4gICAgcGFydGljbGUuY29sb3IgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcbiAgICBwYXJ0aWNsZS5kYXRhLmNvbG9yQSA9IENvbG9yVXRpbC5oZXhUb1JnYihwYXJ0aWNsZS5jb2xvcik7XG5cbiAgICBpZiAodGhpcy5iKSBwYXJ0aWNsZS5kYXRhLmNvbG9yQiA9IENvbG9yVXRpbC5oZXhUb1JnYih0aGlzLmIuZ2V0VmFsdWUoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxuICAgKlxuICAgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbG9yXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXG4gICAqIEBwYXJhbSB7SW50fSB0aGUgcGFydGljbGUgaW5kZXhcbiAgICovXG4gIGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xuICAgIGlmICh0aGlzLmIpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XG5cbiAgICAgIHBhcnRpY2xlLnJnYi5yID0gcGFydGljbGUuZGF0YS5jb2xvckIuciArIChwYXJ0aWNsZS5kYXRhLmNvbG9yQS5yIC0gcGFydGljbGUuZGF0YS5jb2xvckIucikgKiB0aGlzLmVuZXJneTtcbiAgICAgIHBhcnRpY2xlLnJnYi5nID0gcGFydGljbGUuZGF0YS5jb2xvckIuZyArIChwYXJ0aWNsZS5kYXRhLmNvbG9yQS5nIC0gcGFydGljbGUuZGF0YS5jb2xvckIuZykgKiB0aGlzLmVuZXJneTtcbiAgICAgIHBhcnRpY2xlLnJnYi5iID0gcGFydGljbGUuZGF0YS5jb2xvckIuYiArIChwYXJ0aWNsZS5kYXRhLmNvbG9yQS5iIC0gcGFydGljbGUuZGF0YS5jb2xvckIuYikgKiB0aGlzLmVuZXJneTtcblxuICAgICAgcGFydGljbGUucmdiLnIgPSBwYXJ0aWNsZS5yZ2IuciA8PCAwO1xuICAgICAgcGFydGljbGUucmdiLmcgPSBwYXJ0aWNsZS5yZ2IuZyA8PCAwO1xuICAgICAgcGFydGljbGUucmdiLmIgPSBwYXJ0aWNsZS5yZ2IuYiA8PCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWNsZS5yZ2IuciA9IHBhcnRpY2xlLmRhdGEuY29sb3JBLnI7XG4gICAgICBwYXJ0aWNsZS5yZ2IuZyA9IHBhcnRpY2xlLmRhdGEuY29sb3JBLmc7XG4gICAgICBwYXJ0aWNsZS5yZ2IuYiA9IHBhcnRpY2xlLmRhdGEuY29sb3JBLmI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vbWF0aC9WZWN0b3IyRFwiO1xuaW1wb3J0IFNwYW4gZnJvbSBcIi4uL21hdGgvU3BhblwiO1xuaW1wb3J0IEJlaGF2aW91ciBmcm9tIFwiLi9CZWhhdmlvdXJcIjtcblxuY29uc3QgQ0hBTkdJTkcgPSBcImNoYW5naW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xvbmUgZXh0ZW5kcyBCZWhhdmlvdXIge1xuICAvKipcbiAgICogQG1lbWJlcm9mISBQcm90b24jXG4gICAqIEBhdWdtZW50cyBQcm90b24uQmVoYXZpb3VyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUHJvdG9uLkN5Y2xvbmVcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGFuZ2xlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmb3JjZVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgVGhlIEJlaGF2aW91ciBuYW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhbmdsZSwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKGxpZmUsIGVhc2luZyk7XG4gICAgdGhpcy5zZXRBbmdsZUFuZEZvcmNlKGFuZ2xlLCBmb3JjZSk7XG4gICAgdGhpcy5uYW1lID0gXCJDeWNsb25lXCI7XG4gIH1cblxuICBzZXRBbmdsZUFuZEZvcmNlKGFuZ2xlLCBmb3JjZSkge1xuICAgIHRoaXMuZm9yY2UgPSBDSEFOR0lORztcbiAgICB0aGlzLmFuZ2xlID0gTWF0aFV0aWwuUEkgLyAyO1xuXG4gICAgaWYgKGFuZ2xlID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHRoaXMuYW5nbGUgPSBNYXRoVXRpbC5QSSAvIDI7XG4gICAgfSBlbHNlIGlmIChhbmdsZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHRoaXMuYW5nbGUgPSAtTWF0aFV0aWwuUEkgLyAyO1xuICAgIH0gZWxzZSBpZiAoYW5nbGUgPT09IFwicmFuZG9tXCIpIHtcbiAgICAgIHRoaXMuYW5nbGUgPSBcInJhbmRvbVwiO1xuICAgIH0gZWxzZSBpZiAoYW5nbGUgaW5zdGFuY2VvZiBTcGFuKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gXCJzcGFuXCI7XG4gICAgICB0aGlzLnNwYW4gPSBhbmdsZTtcbiAgICB9IGVsc2UgaWYgKGFuZ2xlKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgU3RyaW5nKGZvcmNlKS50b0xvd2VyQ2FzZSgpID09PSBcImNoYW5naW5nXCIgfHxcbiAgICAgIFN0cmluZyhmb3JjZSkudG9Mb3dlckNhc2UoKSA9PT0gXCJjaGFuZ1wiIHx8XG4gICAgICBTdHJpbmcoZm9yY2UpLnRvTG93ZXJDYXNlKCkgPT09IFwiYXV0b1wiXG4gICAgKSB7XG4gICAgICB0aGlzLmZvcmNlID0gQ0hBTkdJTkc7XG4gICAgfSBlbHNlIGlmIChmb3JjZSkge1xuICAgICAgdGhpcy5mb3JjZSA9IGZvcmNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQG1ldGhvZCByZXNldFxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5DeWNsb25lXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYW5nbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZvcmNlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2UuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQoYW5nbGUsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aFV0aWwuUEkgLyAyO1xuICAgIHRoaXMuc2V0QW5nbGVBbmRGb3JjZShhbmdsZSwgZm9yY2UpO1xuICAgIGxpZmUgJiYgc3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcbiAgfVxuXG4gIGluaXRpYWxpemUocGFydGljbGUpIHtcbiAgICBpZiAodGhpcy5hbmdsZSA9PT0gXCJyYW5kb21cIikge1xuICAgICAgcGFydGljbGUuZGF0YS5jYW5nbGUgPSBNYXRoVXRpbC5yYW5kb21BVG9CKC1NYXRoVXRpbC5QSSwgTWF0aFV0aWwuUEkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbmdsZSA9PT0gXCJzcGFuXCIpIHtcbiAgICAgIHBhcnRpY2xlLmRhdGEuY2FuZ2xlID0gdGhpcy5zcGFuLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgcGFydGljbGUuZGF0YS5jeWNsb25lID0gbmV3IFZlY3RvcjJEKDAsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcbiAgICpcbiAgICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxuICAgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5DeWNsb25lXG4gICAqIEBpbnN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXG4gICAqIEBwYXJhbSB7SW50fSB0aGUgcGFydGljbGUgaW5kZXhcbiAgICovXG4gIGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xuICAgIHRoaXMuY2FsY3VsYXRlKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XG5cbiAgICBsZXQgbGVuZ3RoO1xuICAgIGxldCBncmFkaWVudCA9IHBhcnRpY2xlLnYuZ2V0R3JhZGllbnQoKTtcbiAgICBpZiAodGhpcy5hbmdsZSA9PT0gXCJyYW5kb21cIiB8fCB0aGlzLmFuZ2xlID09PSBcInNwYW5cIikge1xuICAgICAgZ3JhZGllbnQgKz0gcGFydGljbGUuZGF0YS5jYW5nbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYWRpZW50ICs9IHRoaXMuYW5nbGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9yY2UgPT09IENIQU5HSU5HKSB7XG4gICAgICBsZW5ndGggPSBwYXJ0aWNsZS52Lmxlbmd0aCgpIC8gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0aGlzLmZvcmNlO1xuICAgIH1cblxuICAgIHBhcnRpY2xlLmRhdGEuY3ljbG9uZS54ID0gbGVuZ3RoICogTWF0aC5jb3MoZ3JhZGllbnQpO1xuICAgIHBhcnRpY2xlLmRhdGEuY3ljbG9uZS55ID0gbGVuZ3RoICogTWF0aC5zaW4oZ3JhZGllbnQpO1xuICAgIHBhcnRpY2xlLmRhdGEuY3ljbG9uZSA9IHRoaXMubm9ybWFsaXplRm9yY2UocGFydGljbGUuZGF0YS5jeWNsb25lKTtcbiAgICBwYXJ0aWNsZS5hLmFkZChwYXJ0aWNsZS5kYXRhLmN5Y2xvbmUpO1xuICB9XG59XG4iLCJpbXBvcnQgQXR0cmFjdGlvbiBmcm9tIFwiLi9BdHRyYWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcHVsc2lvbiBleHRlbmRzIEF0dHJhY3Rpb24ge1xuICAvKipcbiAgICogVGhlIG9wcGlzaXRlIG9mIFByb3Rvbi5BdHRyYWN0aW9uIC0gdHVybnMgdGhlIGZvcmNlXG4gICAqXG4gICAqIEBtZW1iZXJvZiEgUHJvdG9uI1xuICAgKiBAYXVnbWVudHMgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAYWxpYXMgUHJvdG9uLlJlcHVsc2lvblxuICAgKlxuICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdmb3JjZScgYW5kICdyYWRpdXMnXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xuICAgKiBAcGFyYW0ge051bWJlcn0gW2ZvcmNlPTEwMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtyYWRpdXM9MTAwMF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGZvcmNlXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBuYW1lIFRoZSBCZWhhdmlvdXIgbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xuXG4gICAgdGhpcy5mb3JjZSAqPSAtMTtcbiAgICB0aGlzLm5hbWUgPSBcIlJlcHVsc2lvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLlJlcHVsc2lvblxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnZm9yY2UnIGFuZCAncmFkaXVzJ1xuICAgKlxuICAgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gdGFyZ2V0UG9zaXRpb24gdGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtmb3JjZT0xMDBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZS5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXG4gICAqL1xuICByZXNldCh0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XG4gICAgc3VwZXIucmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZyk7XG4gICAgdGhpcy5mb3JjZSAqPSAtMTtcbiAgfVxufVxuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWxzL1V0aWxcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vbWF0aC9WZWN0b3IyRFwiO1xuaW1wb3J0IEJlaGF2aW91ciBmcm9tIFwiLi9CZWhhdmlvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhdml0eVdlbGwgZXh0ZW5kcyBCZWhhdmlvdXIge1xuICAvKipcbiAgICogQG1lbWJlcm9mISBQcm90b24jXG4gICAqIEBhdWdtZW50cyBCZWhhdmlvdXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBhbGlhcyBHcmF2aXR5V2VsbFxuICAgKlxuICAgKiBAcGFyYW0ge1ZlY3RvcjJEfSBbY2VudGVyUG9pbnQ9bmV3IFZlY3RvcjJEXSBUaGUgcG9pbnQgaW4gdGhlIGNlbnRlclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2ZvcmNlPTEwMF1cdFx0XHRcdFx0VGhlIGZvcmNlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV1cdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlTGluZWFyXVx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcbiAgICpcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IG5hbWUgVGhlIEJlaGF2aW91ciBuYW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjZW50ZXJQb2ludCwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xuICAgIHN1cGVyKGxpZmUsIGVhc2luZyk7XG5cbiAgICB0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgdGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQoKSk7XG4gICAgdGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xuXG4gICAgdGhpcy5uYW1lID0gXCJHcmF2aXR5V2VsbFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAbWV0aG9kIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBQcm90b24jR3Jhdml0eVdlbGxcbiAgICogQGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjdG9yMkR9IFtjZW50ZXJQb2ludD1uZXcgVmVjdG9yMkRdIFRoZSBwb2ludCBpbiB0aGUgY2VudGVyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVx0XHRcdFx0XHRUaGUgZm9yY2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XVx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xuICAgKi9cbiAgcmVzZXQoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcbiAgICB0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgdGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQoKSk7XG4gICAgdGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xuXG4gICAgbGlmZSAmJiBzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0ZG9jXG4gICAqL1xuICBpbml0aWFsaXplKHBhcnRpY2xlKSB7fVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXG4gICAqXG4gICAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcbiAgICogQG1lbWJlcm9mIFByb3RvbiNHcmF2aXR5V2VsbFxuICAgKiBAaW5zdGFuY2VcbiAgICpcbiAgICogQHBhcmFtIHtQYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXG4gICAqIEBwYXJhbSB7SW50fSB0aGUgcGFydGljbGUgaW5kZXhcbiAgICovXG4gIGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xuICAgIHRoaXMuZGlzdGFuY2VWZWMuc2V0KHRoaXMuY2VudGVyUG9pbnQueCAtIHBhcnRpY2xlLnAueCwgdGhpcy5jZW50ZXJQb2ludC55IC0gcGFydGljbGUucC55KTtcbiAgICBjb25zdCBkaXN0YW5jZVNxID0gdGhpcy5kaXN0YW5jZVZlYy5sZW5ndGhTcSgpO1xuXG4gICAgaWYgKGRpc3RhbmNlU3EgIT09IDApIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVZlYy5sZW5ndGgoKTtcbiAgICAgIGNvbnN0IGZhY3RvciA9ICh0aGlzLmZvcmNlICogdGltZSkgLyAoZGlzdGFuY2VTcSAqIGRpc3RhbmNlKTtcblxuICAgICAgcGFydGljbGUudi54ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueDtcbiAgICAgIHBhcnRpY2xlLnYueSArPSBmYWN0b3IgKiB0aGlzLmRpc3RhbmNlVmVjLnk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUHJvcFV0aWwgZnJvbSBcIi4uL3V0aWxzL1Byb3BVdGlsXCI7XG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9Jbml0aWFsaXplXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0aWFsaXplKGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplcykge1xuICAgIGNvbnN0IGxlbmd0aCA9IGluaXRpYWxpemVzLmxlbmd0aDtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGluaXRpYWxpemVzW2ldIGluc3RhbmNlb2YgSW5pdGlhbGl6ZSkge1xuICAgICAgICBpbml0aWFsaXplc1tpXS5pbml0KGVtaXR0ZXIsIHBhcnRpY2xlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpO1xuICB9LFxuXG4gIC8vIGluaXRcbiAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSkge1xuICAgIFByb3BVdGlsLnNldFByb3AocGFydGljbGUsIGluaXRpYWxpemUpO1xuICAgIFByb3BVdGlsLnNldFZlY3RvclZhbChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XG4gIH0sXG5cbiAgYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpIHtcbiAgICBpZiAoZW1pdHRlci5iaW5kRW1pdHRlcikge1xuICAgICAgcGFydGljbGUucC5hZGQoZW1pdHRlci5wKTtcbiAgICAgIHBhcnRpY2xlLnYuYWRkKGVtaXR0ZXIudik7XG4gICAgICBwYXJ0aWNsZS5hLmFkZChlbWl0dGVyLmEpO1xuICAgICAgcGFydGljbGUudi5yb3RhdGUoTWF0aFV0aWwuZGVncmVlVHJhbnNmb3JtKGVtaXR0ZXIucm90YXRpb24pKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IFB1aWQgZnJvbSBcIi4uL3V0aWxzL1B1aWRcIjtcbmltcG9ydCBQYXJ0aWNsZSBmcm9tIFwiLi4vY29yZS9QYXJ0aWNsZVwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnRzL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgUmF0ZSBmcm9tIFwiLi4vaW5pdGlhbGl6ZS9SYXRlXCI7XG5pbXBvcnQgSW5pdGlhbGl6ZVV0aWwgZnJvbSBcIi4uL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciBleHRlbmRzIFBhcnRpY2xlIHtcbiAgLyoqXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgZW1pdCBwYXJ0aWNsZXMuXG4gICAqXG4gICAqIEl0IHdpbGwgZGlzcGF0Y2ggZm9sbG93IGV2ZW50czpcbiAgICogUEFSVElDTEVfQ1JFQVRFRFxuICAgKiBQQVJUSUNMRV9VUERBVEFcbiAgICogUEFSVElDTEVfREVBRFxuICAgKlxuICAgKiBAY2xhc3MgRW1pdHRlclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmYgdGhlIHBhcmFtZXRlcnMgb2JqZWN0O1xuICAgKiBmb3IgZXhhbXBsZSB7ZGFtcGluZzowLjAxLGJpbmRFbWl0dGVyOmZhbHNlfVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZiA9IHt9KSB7XG4gICAgc3VwZXIoY29uZik7XG5cbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcblxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICAgIHRoaXMuZW1pdFNwZWVkID0gMDtcbiAgICB0aGlzLnRvdGFsVGltZSA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZyaWN0aW9uIGNvZWZmaWNpZW50IGZvciBhbGwgcGFydGljbGUgZW1pdCBieSBUaGlzO1xuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAwLjAwNlxuICAgICAqL1xuICAgIHRoaXMuZGFtcGluZyA9IDAuMDA2O1xuXG4gICAgLyoqXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcbiAgICAgKiBAcHJvcGVydHkgYmluZEVtaXR0ZXJcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgdGhpcy5iaW5kRW1pdHRlciA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XG4gICAgICogQHByb3BlcnR5IHJhdGVcbiAgICAgKiBAdHlwZSB7UmF0ZX1cbiAgICAgKiBAZGVmYXVsdCBSYXRlKDEsIC4xKVxuICAgICAqL1xuICAgIHRoaXMucmF0ZSA9IG5ldyBSYXRlKDEsIDAuMSk7XG5cbiAgICB0aGlzLm5hbWUgPSBcIkVtaXR0ZXJcIjtcbiAgICB0aGlzLmlkID0gUHVpZC5pZCh0aGlzLm5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YXJ0IGVtaXQgcGFydGljbGVcbiAgICogQG1ldGhvZCBlbWl0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBlbWl0VGltZSBiZWdpbiBlbWl0IHRpbWU7XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaWZlIHRoZSBsaWZlIG9mIHRoaXMgZW1pdHRlclxuICAgKi9cbiAgZW1pdCh0b3RhbFRpbWUsIGxpZmUpIHtcbiAgICB0aGlzLnN0b3BlZCA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gVXRpbC5pbml0VmFsdWUodG90YWxUaW1lLCBJbmZpbml0eSk7XG5cbiAgICBpZiAobGlmZSA9PT0gdHJ1ZSB8fCBsaWZlID09PSBcImxpZmVcIiB8fCBsaWZlID09PSBcImRlc3Ryb3lcIikge1xuICAgICAgdGhpcy5saWZlID0gdG90YWxUaW1lID09PSBcIm9uY2VcIiA/IDEgOiB0aGlzLnRvdGFsVGltZTtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihsaWZlKSkge1xuICAgICAgdGhpcy5saWZlID0gbGlmZTtcbiAgICB9XG5cbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0b3AgZW1pdGluZ1xuICAgKiBAbWV0aG9kIHN0b3BcbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhpcy50b3RhbFRpbWUgPSAtMTtcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcbiAgICB0aGlzLnN0b3BlZCA9IHRydWU7XG4gIH1cblxuICBwcmVFbWl0KHRpbWUpIHtcbiAgICBsZXQgb2xkU3RvcGVkID0gdGhpcy5zdG9wZWQ7XG4gICAgbGV0IG9sZEVtaXRUaW1lID0gdGhpcy5lbWl0VGltZTtcbiAgICBsZXQgb2xkVG90YWxUaW1lID0gdGhpcy50b3RhbFRpbWU7XG5cbiAgICB0aGlzLnN0b3BlZCA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xuICAgIHRoaXMudG90YWxUaW1lID0gdGltZTtcbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xuXG4gICAgY29uc3Qgc3RlcCA9IDAuMDE2NztcbiAgICB3aGlsZSAodGltZSA+IHN0ZXApIHtcbiAgICAgIHRpbWUgLT0gc3RlcDtcbiAgICAgIHRoaXMudXBkYXRlKHN0ZXApO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcGVkID0gb2xkU3RvcGVkO1xuICAgIHRoaXMuZW1pdFRpbWUgPSBvbGRFbWl0VGltZSArIE1hdGgubWF4KHRpbWUsIDApO1xuICAgIHRoaXMudG90YWxUaW1lID0gb2xkVG90YWxUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBjdXJyZW50IGFsbCBwYXJ0aWNsZXNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcbiAgICovXG4gIHJlbW92ZUFsbFBhcnRpY2xlcygpIHtcbiAgICBsZXQgaSA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB0aGlzLnBhcnRpY2xlc1tpXS5kZWFkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgaW5pdGlhbGl6ZSB0byB0aGlzIGVtaXR0ZXJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxuICAgKi9cbiAgYWRkU2VsZkluaXRpYWxpemUoaW5pdGlhbGl6ZSkge1xuICAgIGlmIChpbml0aWFsaXplW1wiaW5pdFwiXSkge1xuICAgICAgaW5pdGlhbGl6ZS5pbml0KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLmluaXRBbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHRoZSBJbml0aWFsaXplIHRvIHBhcnRpY2xlcztcbiAgICpcbiAgICogeW91IGNhbiB1c2UgaW5pdGlhbGl6ZXMgYXJyYXk6Zm9yIGV4YW1wbGUgZW1pdHRlci5hZGRJbml0aWFsaXplKGluaXRpYWxpemUxLGluaXRpYWxpemUyLGluaXRpYWxpemUzKTtcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXG4gICAqIEBwYXJhbSB7SW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBsaWtlIHRoaXMgbmV3IFJhZGl1cygxLCAxMilcbiAgICovXG4gIGFkZEluaXRpYWxpemUoLi4ucmVzdCkge1xuICAgIGxldCBpID0gcmVzdC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgdGhpcy5pbml0aWFsaXplcy5wdXNoKHJlc3RbaV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVcbiAgICogQHBhcmFtIHtJbml0aWFsaXplfSBpbml0aWFsaXplIGEgaW5pdGlhbGl6ZVxuICAgKi9cbiAgcmVtb3ZlSW5pdGlhbGl6ZShpbml0aWFsaXplcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbml0aWFsaXplcy5pbmRleE9mKGluaXRpYWxpemVyKTtcbiAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5pbml0aWFsaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBhbGwgSW5pdGlhbGl6ZXNcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcbiAgICovXG4gIHJlbW92ZUFsbEluaXRpYWxpemVycygpIHtcbiAgICBVdGlsLmVtcHR5QXJyYXkodGhpcy5pbml0aWFsaXplcyk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIHRoZSBCZWhhdmlvdXIgdG8gcGFydGljbGVzO1xuICAgKlxuICAgKiB5b3UgY2FuIHVzZSBCZWhhdmlvdXJzIGFycmF5OmVtaXR0ZXIuYWRkQmVoYXZpb3VyKEJlaGF2aW91cjEsQmVoYXZpb3VyMixCZWhhdmlvdXIzKTtcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcbiAgICogQHBhcmFtIHtCZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IENvbG9yKCdyYW5kb20nKVxuICAgKi9cbiAgYWRkQmVoYXZpb3VyKC4uLnJlc3QpIHtcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgbGV0IGJlaGF2aW91ciA9IHJlc3RbaV07XG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChiZWhhdmlvdXIpO1xuICAgICAgaWYgKGJlaGF2aW91ci5wYXJlbnRzKSBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgdGhlIEJlaGF2aW91clxuICAgKiBAbWV0aG9kIHJlbW92ZUJlaGF2aW91clxuICAgKiBAcGFyYW0ge0JlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXG4gICAqL1xuICByZW1vdmVCZWhhdmlvdXIoYmVoYXZpb3VyKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcbiAgICB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGlmIChiZWhhdmlvdXIucGFyZW50cykge1xuICAgICAgaW5kZXggPSBiZWhhdmlvdXIucGFyZW50cy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgICBiZWhhdmlvdXIucGFyZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYWxsIGJlaGF2aW91cnNcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXG4gICAqL1xuICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgIFV0aWwuZW1wdHlBcnJheSh0aGlzLmJlaGF2aW91cnMpO1xuICB9XG5cbiAgLy8gZW1pdHRlciB1cGRhdGVcbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmFnZSArPSB0aW1lO1xuICAgIGlmICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUgfHwgdGhpcy5kZWFkKSB0aGlzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XG4gICAgdGhpcy5pbnRlZ3JhdGUodGltZSk7XG4gIH1cblxuICBpbnRlZ3JhdGUodGltZSkge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IGRhbXBpbmcgPSAxIC0gdGhpcy5kYW1waW5nO1xuICAgIHRoaXMucGFyZW50LmludGVncmF0b3IuY2FsY3VsYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIGxldCBpLCBwYXJ0aWNsZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuXG4gICAgICAvLyBwYXJ0aWNsZSB1cGRhdGVcbiAgICAgIHBhcnRpY2xlLnVwZGF0ZSh0aW1lLCBpKTtcbiAgICAgIHRoaXMucGFyZW50LmludGVncmF0b3IuY2FsY3VsYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2goXCJQQVJUSUNMRV9VUERBVEVcIiwgcGFydGljbGUpO1xuXG4gICAgICAvLyBjaGVjayBkZWFkXG4gICAgICBpZiAocGFydGljbGUuZGVhZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKFwiUEFSVElDTEVfREVBRFwiLCBwYXJ0aWNsZSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQucG9vbC5leHBpcmUocGFydGljbGUpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGF0Y2goZXZlbnQsIHRhcmdldCkge1xuICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQsIHRhcmdldCk7XG4gICAgdGhpcy5iaW5kRXZlbnQgJiYgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50LCB0YXJnZXQpO1xuICB9XG5cbiAgZW1pdHRpbmcodGltZSkge1xuICAgIGlmICh0aGlzLnRvdGFsVGltZSA9PT0gXCJvbmNlXCIpIHtcbiAgICAgIGxldCBpO1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKDk5OTk5KTtcblxuICAgICAgaWYgKGxlbmd0aCA+IDApIHRoaXMuZW1pdFNwZWVkID0gbGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB0aGlzLmNyZWF0ZVBhcnRpY2xlKCk7XG4gICAgICB0aGlzLnRvdGFsVGltZSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXRUaW1lICs9IHRpbWU7XG5cbiAgICAgIGlmICh0aGlzLmVtaXRUaW1lIDwgdGhpcy50b3RhbFRpbWUpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKHRpbWUpO1xuICAgICAgICBsZXQgaTtcblxuICAgICAgICBpZiAobGVuZ3RoID4gMCkgdGhpcy5lbWl0U3BlZWQgPSBsZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgdGhpcy5jcmVhdGVQYXJ0aWNsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgc2luZ2xlIHBhcnRpY2xlO1xuICAgKlxuICAgKiBjYW4gdXNlIGVtaXQoe3g6MTB9LG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KSBvciBlbWl0KFt7eDoxMH0sbmV3IEluaXRpYWxpemVdLG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KVxuICAgKiBAbWV0aG9kIHJlbW92ZUFsbFBhcnRpY2xlc1xuICAgKi9cbiAgY3JlYXRlUGFydGljbGUoaW5pdGlhbGl6ZSwgYmVoYXZpb3VyKSB7XG4gICAgY29uc3QgcGFydGljbGUgPSB0aGlzLnBhcmVudC5wb29sLmdldChQYXJ0aWNsZSk7XG4gICAgdGhpcy5zZXR1cFBhcnRpY2xlKHBhcnRpY2xlLCBpbml0aWFsaXplLCBiZWhhdmlvdXIpO1xuICAgIHRoaXMuZGlzcGF0Y2goXCJQQVJUSUNMRV9DUkVBVEVEXCIsIHBhcnRpY2xlKTtcblxuICAgIHJldHVybiBwYXJ0aWNsZTtcbiAgfVxuXG4gIHNldHVwUGFydGljbGUocGFydGljbGUsIGluaXRpYWxpemUsIGJlaGF2aW91cikge1xuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XG4gICAgbGV0IGJlaGF2aW91cnMgPSB0aGlzLmJlaGF2aW91cnM7XG5cbiAgICBpZiAoaW5pdGlhbGl6ZSkgaW5pdGlhbGl6ZXMgPSBVdGlsLnRvQXJyYXkoaW5pdGlhbGl6ZSk7XG4gICAgaWYgKGJlaGF2aW91cikgYmVoYXZpb3VycyA9IFV0aWwudG9BcnJheShiZWhhdmlvdXIpO1xuXG4gICAgcGFydGljbGUucmVzZXQoKTtcbiAgICBJbml0aWFsaXplVXRpbC5pbml0aWFsaXplKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XG4gICAgcGFydGljbGUuYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKTtcbiAgICBwYXJ0aWNsZS5wYXJlbnQgPSB0aGlzO1xuXG4gICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgVXRpbC5kZXN0cm95QWxsKHRoaXMucGFydGljbGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIHRoaXMucmVtb3ZlQWxsSW5pdGlhbGl6ZXJzKCk7XG4gICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG4gICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQucmVtb3ZlRW1pdHRlcih0aGlzKTtcblxuICAgIHRoaXMucmF0ZSA9IG51bGw7XG4gICAgdGhpcy5vbGQgPSBudWxsO1xuICAgIHRoaXMucmdiID0gbnVsbDtcbiAgICB0aGlzLnYgPSBudWxsO1xuICAgIHRoaXMuYSA9IG51bGw7XG4gICAgdGhpcy5wID0gbnVsbDtcbiAgfVxufVxuXG5FdmVudERpc3BhdGNoZXIuYmluZChFbWl0dGVyKTtcbiIsImltcG9ydCBFbWl0dGVyIGZyb20gXCIuL0VtaXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3VyRW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVGhlIEJlaGF2aW91ckVtaXR0ZXIgY2xhc3MgaW5oZXJpdHMgZnJvbSBQcm90b24uRW1pdHRlclxuICAgKlxuICAgKiB1c2UgdGhlIEJlaGF2aW91ckVtaXR0ZXIgeW91IGNhbiBhZGQgYmVoYXZpb3VycyB0byBzZWxmO1xuICAgKiBAY2xhc3MgUHJvdG9uLkJlaGF2aW91ckVtaXR0ZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25mIHRoZSBwYXJhbWV0ZXJzIG9iamVjdDtcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmYpIHtcbiAgICBzdXBlcihjb25mKTtcblxuICAgIHRoaXMuc2VsZkJlaGF2aW91cnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBlbWl0dGVyO1xuICAgKlxuICAgKiB5b3UgY2FuIHVzZSBCZWhhdmlvdXJzIGFycmF5OmVtaXR0ZXIuYWRkU2VsZkJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XG4gICAqIEBtZXRob2QgYWRkU2VsZkJlaGF2aW91clxuICAgKiBAcGFyYW0ge1Byb3Rvbi5CZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IFByb3Rvbi5Db2xvcigncmFuZG9tJylcbiAgICovXG4gIGFkZFNlbGZCZWhhdmlvdXIoLi4ucmVzdCkge1xuICAgIGxldCBpLFxuICAgICAgbGVuZ3RoID0gcmVzdC5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBiZWhhdmlvdXIgPSByZXN0W2ldO1xuICAgICAgdGhpcy5zZWxmQmVoYXZpb3Vycy5wdXNoKGJlaGF2aW91cik7XG4gICAgICBiZWhhdmlvdXIuaW5pdGlhbGl6ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlIHRoZSBCZWhhdmlvdXIgZm9yIHNlbGZcbiAgICogQG1ldGhvZCByZW1vdmVTZWxmQmVoYXZpb3VyXG4gICAqIEBwYXJhbSB7UHJvdG9uLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXG4gICAqL1xuICByZW1vdmVTZWxmQmVoYXZpb3VyKGJlaGF2aW91cikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxmQmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgaWYgKGluZGV4ID4gLTEpIHRoaXMuc2VsZkJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuXG4gICAgaWYgKCF0aGlzLnNsZWVwKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnNlbGZCZWhhdmlvdXJzLmxlbmd0aDtcbiAgICAgIGxldCBpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxmQmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgRW1pdHRlciBmcm9tIFwiLi9FbWl0dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd0VtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRoZSBGb2xsb3dFbWl0dGVyIGNsYXNzIGluaGVyaXRzIGZyb20gUHJvdG9uLkVtaXR0ZXJcbiAgICpcbiAgICogdXNlIHRoZSBGb2xsb3dFbWl0dGVyIHdpbGwgZW1pdCBwYXJ0aWNsZSB3aGVuIG1vdXNlbW92aW5nXG4gICAqXG4gICAqIEBjbGFzcyBQcm90b24uRm9sbG93RW1pdHRlclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtFbGVtZW50fSBtb3VzZVRhcmdldCBtb3VzZWV2ZW50J3MgdGFyZ2V0O1xuICAgKiBAcGFyYW0ge051bWJlcn0gZWFzZSB0aGUgZWFzaW5nIG9mIGZvbGxvd2luZyBzcGVlZDtcbiAgICogQGRlZmF1bHQgMC43XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25mIHRoZSBwYXJhbWV0ZXJzIG9iamVjdDtcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1vdXNlVGFyZ2V0LCBlYXNlLCBjb25mKSB7XG4gICAgc3VwZXIoY29uZik7XG5cbiAgICB0aGlzLm1vdXNlVGFyZ2V0ID0gVXRpbC5pbml0VmFsdWUobW91c2VUYXJnZXQsIHdpbmRvdyk7XG4gICAgdGhpcy5lYXNlID0gVXRpbC5pbml0VmFsdWUoZWFzZSwgMC43KTtcblxuICAgIHRoaXMuX2FsbG93RW1pdHRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmluaXRFdmVudEhhbmRsZXIoKTtcbiAgfVxuXG4gIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZW1vdmVIYW5kbGVyID0gZSA9PiB0aGlzLm1vdXNlbW92ZS5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMubW91c2Vkb3duSGFuZGxlciA9IGUgPT4gdGhpcy5tb3VzZWRvd24uY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLm1vdXNldXBIYW5kbGVyID0gZSA9PiB0aGlzLm1vdXNldXAuY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLm1vdXNlVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmVIYW5kbGVyLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogc3RhcnQgZW1pdCBwYXJ0aWNsZVxuICAgKiBAbWV0aG9kIGVtaXRcbiAgICovXG4gIGVtaXQoKSB7XG4gICAgdGhpcy5fYWxsb3dFbWl0dGluZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogc3RvcCBlbWl0aW5nXG4gICAqIEBtZXRob2Qgc3RvcFxuICAgKi9cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9hbGxvd0VtaXR0aW5nID0gZmFsc2U7XG4gIH1cblxuICBtb3VzZW1vdmUoZSkge1xuICAgIGlmIChlLmxheWVyWCB8fCBlLmxheWVyWCA9PT0gMCkge1xuICAgICAgdGhpcy5wLnggKz0gKGUubGF5ZXJYIC0gdGhpcy5wLngpICogdGhpcy5lYXNlO1xuICAgICAgdGhpcy5wLnkgKz0gKGUubGF5ZXJZIC0gdGhpcy5wLnkpICogdGhpcy5lYXNlO1xuICAgIH0gZWxzZSBpZiAoZS5vZmZzZXRYIHx8IGUub2Zmc2V0WCA9PT0gMCkge1xuICAgICAgdGhpcy5wLnggKz0gKGUub2Zmc2V0WCAtIHRoaXMucC54KSAqIHRoaXMuZWFzZTtcbiAgICAgIHRoaXMucC55ICs9IChlLm9mZnNldFkgLSB0aGlzLnAueSkgKiB0aGlzLmVhc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FsbG93RW1pdHRpbmcpIHN1cGVyLmVtaXQoXCJvbmNlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhpcyBFbWl0dGVyXG4gICAqIEBtZXRob2QgZGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5tb3VzZVRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBpdCBpcyBhIHBpY3R1cmUgb2JqZWN0XG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGlzIG9yIG5vXG4gICAqL1xuICBpc0ltYWdlKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iai5fX2lzSW1hZ2UpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29iai50YWdOYW1lfWAudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBub2RlTmFtZSA9IGAke29iai5ub2RlTmFtZX1gLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKG5vZGVOYW1lID09PSBcIklNR1wiIHx8IHRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICAgIG9iai5fX2lzSW1hZ2UgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBpdCBpcyBhIHN0cmluZyBvYmplY3RcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gaXMgb3Igbm9cbiAgICovXG4gIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xuICB9XG59O1xuIiwiaW1wb3J0IFBvb2wgZnJvbSBcIi4uL2NvcmUvUG9vbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzdHJva2UpIHtcbiAgICB0aGlzLnBvb2wgPSBuZXcgUG9vbCgpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5jaXJjbGVDb25mID0geyBpc0NpcmNsZTogdHJ1ZSB9O1xuXG4gICAgdGhpcy5pbml0RXZlbnRIYW5kbGVyKCk7XG4gICAgdGhpcy5uYW1lID0gXCJCYXNlUmVuZGVyZXJcIjtcbiAgfVxuXG4gIHNldFN0cm9rZShjb2xvciA9IFwiIzAwMDAwMFwiLCB0aGlua25lc3MgPSAxKSB7XG4gICAgdGhpcy5zdHJva2UgPSB7IGNvbG9yLCB0aGlua25lc3MgfTtcbiAgfVxuXG4gIGluaXRFdmVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5fcHJvdG9uVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMub25Qcm90b25VcGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fcHJvdG9uVXBkYXRlQWZ0ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5vblByb3RvblVwZGF0ZUFmdGVyLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VtaXR0ZXJBZGRlZEhhbmRsZXIgPSBlbWl0dGVyID0+IHtcbiAgICAgIHRoaXMub25FbWl0dGVyQWRkZWQuY2FsbCh0aGlzLCBlbWl0dGVyKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZW1pdHRlclJlbW92ZWRIYW5kbGVyID0gZW1pdHRlciA9PiB7XG4gICAgICB0aGlzLm9uRW1pdHRlclJlbW92ZWQuY2FsbCh0aGlzLCBlbWl0dGVyKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fcGFydGljbGVDcmVhdGVkSGFuZGxlciA9IHBhcnRpY2xlID0+IHtcbiAgICAgIHRoaXMub25QYXJ0aWNsZUNyZWF0ZWQuY2FsbCh0aGlzLCBwYXJ0aWNsZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX3BhcnRpY2xlVXBkYXRlSGFuZGxlciA9IHBhcnRpY2xlID0+IHtcbiAgICAgIHRoaXMub25QYXJ0aWNsZVVwZGF0ZS5jYWxsKHRoaXMsIHBhcnRpY2xlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fcGFydGljbGVEZWFkSGFuZGxlciA9IHBhcnRpY2xlID0+IHtcbiAgICAgIHRoaXMub25QYXJ0aWNsZURlYWQuY2FsbCh0aGlzLCBwYXJ0aWNsZSk7XG4gICAgfTtcbiAgfVxuXG4gIGluaXQocHJvdG9uKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwcm90b247XG5cbiAgICBwcm90b24uYWRkRXZlbnRMaXN0ZW5lcihcIlBST1RPTl9VUERBVEVcIiwgdGhpcy5fcHJvdG9uVXBkYXRlSGFuZGxlcik7XG4gICAgcHJvdG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJQUk9UT05fVVBEQVRFX0FGVEVSXCIsIHRoaXMuX3Byb3RvblVwZGF0ZUFmdGVySGFuZGxlcik7XG5cbiAgICBwcm90b24uYWRkRXZlbnRMaXN0ZW5lcihcIkVNSVRURVJfQURERURcIiwgdGhpcy5fZW1pdHRlckFkZGVkSGFuZGxlcik7XG4gICAgcHJvdG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJFTUlUVEVSX1JFTU9WRURcIiwgdGhpcy5fZW1pdHRlclJlbW92ZWRIYW5kbGVyKTtcblxuICAgIHByb3Rvbi5hZGRFdmVudExpc3RlbmVyKFwiUEFSVElDTEVfQ1JFQVRFRFwiLCB0aGlzLl9wYXJ0aWNsZUNyZWF0ZWRIYW5kbGVyKTtcbiAgICBwcm90b24uYWRkRXZlbnRMaXN0ZW5lcihcIlBBUlRJQ0xFX1VQREFURVwiLCB0aGlzLl9wYXJ0aWNsZVVwZGF0ZUhhbmRsZXIpO1xuICAgIHByb3Rvbi5hZGRFdmVudExpc3RlbmVyKFwiUEFSVElDTEVfREVBRFwiLCB0aGlzLl9wYXJ0aWNsZURlYWRIYW5kbGVyKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7fVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgICB0aGlzLnBvb2wuZGVzdHJveSgpO1xuICAgIHRoaXMucG9vbCA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG4gIH1cblxuICByZW1vdmUocHJvdG9uKSB7XG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIlBST1RPTl9VUERBVEVcIiwgdGhpcy5fcHJvdG9uVXBkYXRlSGFuZGxlcik7XG4gICAgdGhpcy5wYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIlBST1RPTl9VUERBVEVfQUZURVJcIiwgdGhpcy5fcHJvdG9uVXBkYXRlQWZ0ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMucGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJFTUlUVEVSX0FEREVEXCIsIHRoaXMuX2VtaXR0ZXJBZGRlZEhhbmRsZXIpO1xuICAgIHRoaXMucGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJFTUlUVEVSX1JFTU9WRURcIiwgdGhpcy5fZW1pdHRlclJlbW92ZWRIYW5kbGVyKTtcblxuICAgIHRoaXMucGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJQQVJUSUNMRV9DUkVBVEVEXCIsIHRoaXMuX3BhcnRpY2xlQ3JlYXRlZEhhbmRsZXIpO1xuICAgIHRoaXMucGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJQQVJUSUNMRV9VUERBVEVcIiwgdGhpcy5fcGFydGljbGVVcGRhdGVIYW5kbGVyKTtcbiAgICB0aGlzLnBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiUEFSVElDTEVfREVBRFwiLCB0aGlzLl9wYXJ0aWNsZURlYWRIYW5kbGVyKTtcblxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgfVxuXG4gIG9uUHJvdG9uVXBkYXRlKCkge31cbiAgb25Qcm90b25VcGRhdGVBZnRlcigpIHt9XG5cbiAgb25FbWl0dGVyQWRkZWQoZW1pdHRlcikge31cbiAgb25FbWl0dGVyUmVtb3ZlZChlbWl0dGVyKSB7fVxuXG4gIG9uUGFydGljbGVDcmVhdGVkKHBhcnRpY2xlKSB7fVxuICBvblBhcnRpY2xlVXBkYXRlKHBhcnRpY2xlKSB7fVxuICBvblBhcnRpY2xlRGVhZChwYXJ0aWNsZSkge31cbn1cbiIsImltcG9ydCBUeXBlcyBmcm9tIFwiLi4vdXRpbHMvVHlwZXNcIjtcbmltcG9ydCBJbWdVdGlsIGZyb20gXCIuLi91dGlscy9JbWdVdGlsXCI7XG5pbXBvcnQgQ29sb3JVdGlsIGZyb20gXCIuLi91dGlscy9Db2xvclV0aWxcIjtcbmltcG9ydCBNYXRoVXRpbCBmcm9tIFwiLi4vbWF0aC9NYXRoVXRpbFwiO1xuaW1wb3J0IEJhc2VSZW5kZXJlciBmcm9tIFwiLi9CYXNlUmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzUmVuZGVyZXIgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmJ1ZmZlckNhY2hlID0ge307XG4gICAgdGhpcy5uYW1lID0gXCJDYW52YXNSZW5kZXJlclwiO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgb25Qcm90b25VcGRhdGUoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmVsZW1lbnQud2lkdGgsIHRoaXMuZWxlbWVudC5oZWlnaHQpO1xuICB9XG5cbiAgb25QYXJ0aWNsZUNyZWF0ZWQocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUuYm9keSkge1xuICAgICAgSW1nVXRpbC5nZXRJbWdGcm9tQ2FjaGUocGFydGljbGUuYm9keSwgdGhpcy5hZGRJbWcyQm9keSwgcGFydGljbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWNsZS5jb2xvciA9IHBhcnRpY2xlLmNvbG9yIHx8IFwiI2ZmMDAwMFwiO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFydGljbGVVcGRhdGUocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUuYm9keSkge1xuICAgICAgaWYgKFR5cGVzLmlzSW1hZ2UocGFydGljbGUuYm9keSkpIHtcbiAgICAgICAgdGhpcy5kcmF3SW1hZ2UocGFydGljbGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdDaXJjbGUocGFydGljbGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFydGljbGVEZWFkKHBhcnRpY2xlKSB7XG4gICAgcGFydGljbGUuYm9keSA9IG51bGw7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZFxuICBhZGRJbWcyQm9keShpbWcsIHBhcnRpY2xlKSB7XG4gICAgcGFydGljbGUuYm9keSA9IGltZztcbiAgfVxuXG4gIC8vIHByaXZhdGUgZHJhd0ltYWdlIG1ldGhvZFxuICBkcmF3SW1hZ2UocGFydGljbGUpIHtcbiAgICBjb25zdCB3ID0gKHBhcnRpY2xlLmJvZHkud2lkdGggKiBwYXJ0aWNsZS5zY2FsZSkgfCAwO1xuICAgIGNvbnN0IGggPSAocGFydGljbGUuYm9keS5oZWlnaHQgKiBwYXJ0aWNsZS5zY2FsZSkgfCAwO1xuICAgIGNvbnN0IHggPSBwYXJ0aWNsZS5wLnggLSB3IC8gMjtcbiAgICBjb25zdCB5ID0gcGFydGljbGUucC55IC0gaCAvIDI7XG5cbiAgICBpZiAoISFwYXJ0aWNsZS5jb2xvcikge1xuICAgICAgaWYgKCFwYXJ0aWNsZS5kYXRhW1wiYnVmZmVyXCJdKSBwYXJ0aWNsZS5kYXRhLmJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKHBhcnRpY2xlLmJvZHkpO1xuXG4gICAgICBjb25zdCBidWZDb250ZXh0ID0gcGFydGljbGUuZGF0YS5idWZmZXIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgYnVmQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgcGFydGljbGUuZGF0YS5idWZmZXIud2lkdGgsIHBhcnRpY2xlLmRhdGEuYnVmZmVyLmhlaWdodCk7XG4gICAgICBidWZDb250ZXh0Lmdsb2JhbEFscGhhID0gcGFydGljbGUuYWxwaGE7XG4gICAgICBidWZDb250ZXh0LmRyYXdJbWFnZShwYXJ0aWNsZS5ib2R5LCAwLCAwKTtcblxuICAgICAgYnVmQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1hdG9wXCI7XG4gICAgICBidWZDb250ZXh0LmZpbGxTdHlsZSA9IENvbG9yVXRpbC5yZ2JUb0hleChwYXJ0aWNsZS5yZ2IpO1xuICAgICAgYnVmQ29udGV4dC5maWxsUmVjdCgwLCAwLCBwYXJ0aWNsZS5kYXRhLmJ1ZmZlci53aWR0aCwgcGFydGljbGUuZGF0YS5idWZmZXIuaGVpZ2h0KTtcbiAgICAgIGJ1ZkNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuICAgICAgYnVmQ29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG5cbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHBhcnRpY2xlLmRhdGEuYnVmZmVyLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwYXJ0aWNsZS5kYXRhLmJ1ZmZlci53aWR0aCxcbiAgICAgICAgcGFydGljbGUuZGF0YS5idWZmZXIuaGVpZ2h0LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB3LFxuICAgICAgICBoXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBwYXJ0aWNsZS5hbHBoYTtcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpO1xuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShNYXRoVXRpbC5kZWdyZWVUcmFuc2Zvcm0ocGFydGljbGUucm90YXRpb24pKTtcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLXBhcnRpY2xlLnAueCwgLXBhcnRpY2xlLnAueSk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHBhcnRpY2xlLmJvZHksIDAsIDAsIHBhcnRpY2xlLmJvZHkud2lkdGgsIHBhcnRpY2xlLmJvZHkuaGVpZ2h0LCB4LCB5LCB3LCBoKTtcblxuICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpdmF0ZSBkcmF3Q2lyY2xlIC0tXG4gIGRyYXdDaXJjbGUocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUucmdiKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtwYXJ0aWNsZS5yZ2Iucn0sJHtwYXJ0aWNsZS5yZ2IuZ30sJHtwYXJ0aWNsZS5yZ2IuYn0sJHtwYXJ0aWNsZS5hbHBoYX0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHBhcnRpY2xlLmNvbG9yO1xuICAgIH1cblxuICAgIC8vIGRyYXcgY2lyY2xlXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dC5hcmMocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnksIHBhcnRpY2xlLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZS5jb2xvcjtcbiAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnN0cm9rZS50aGlua25lc3M7XG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gIH1cblxuICAvLyBwcml2YXRlIGNyZWF0ZUJ1ZmZlclxuICBjcmVhdGVCdWZmZXIoaW1hZ2UpIHtcbiAgICBpZiAoVHlwZXMuaXNJbWFnZShpbWFnZSkpIHtcbiAgICAgIGNvbnN0IHNpemUgPSBpbWFnZS53aWR0aCArIFwiX1wiICsgaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuYnVmZmVyQ2FjaGVbc2l6ZV07XG5cbiAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJ1ZmZlckNhY2hlW3NpemVdID0gY2FudmFzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc3Ryb2tlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVyQ2FjaGUgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgRG9tVXRpbCBmcm9tIFwiLi4vdXRpbHMvRG9tVXRpbFwiO1xuaW1wb3J0IEltZ1V0aWwgZnJvbSBcIi4uL3V0aWxzL0ltZ1V0aWxcIjtcbmltcG9ydCBCYXNlUmVuZGVyZXIgZnJvbSBcIi4vQmFzZVJlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbVJlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5zdHJva2UgPSBudWxsO1xuICAgIHRoaXMudHJhbnNmb3JtM2QgPSBmYWxzZTtcbiAgICB0aGlzLnBvb2wuY3JlYXRlID0gKGJvZHksIHBhcnRpY2xlKSA9PiB0aGlzLmNyZWF0ZUJvZHkoYm9keSwgcGFydGljbGUpO1xuICAgIHRoaXMuYWRkSW1nMkJvZHkgPSB0aGlzLmFkZEltZzJCb2R5LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm5hbWUgPSBcIkRvbVJlbmRlcmVyXCI7XG4gIH1cblxuICBvblBhcnRpY2xlQ3JlYXRlZChwYXJ0aWNsZSkge1xuICAgIGlmIChwYXJ0aWNsZS5ib2R5KSB7XG4gICAgICBJbWdVdGlsLmdldEltZ0Zyb21DYWNoZShwYXJ0aWNsZS5ib2R5LCB0aGlzLmFkZEltZzJCb2R5LCBwYXJ0aWNsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpY2xlLmJvZHkgPSB0aGlzLnBvb2wuZ2V0KHRoaXMuY2lyY2xlQ29uZiwgcGFydGljbGUpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFydGljbGVVcGRhdGUocGFydGljbGUpIHtcbiAgICBpZiAodGhpcy5ib2R5UmVhZHkocGFydGljbGUpKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0zZCkge1xuICAgICAgICBEb21VdGlsLnRyYW5zZm9ybTNkKHBhcnRpY2xlLmJvZHksIHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55LCBwYXJ0aWNsZS5zY2FsZSwgcGFydGljbGUucm90YXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRG9tVXRpbC50cmFuc2Zvcm0ocGFydGljbGUuYm9keSwgcGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnksIHBhcnRpY2xlLnNjYWxlLCBwYXJ0aWNsZS5yb3RhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHBhcnRpY2xlLmJvZHkuc3R5bGUub3BhY2l0eSA9IHBhcnRpY2xlLmFscGhhO1xuXG4gICAgICBpZiAocGFydGljbGUuYm9keS5pc0NpcmNsZSkge1xuICAgICAgICBwYXJ0aWNsZS5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcnRpY2xlLmNvbG9yIHx8IFwiI2ZmMDAwMFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUGFydGljbGVEZWFkKHBhcnRpY2xlKSB7XG4gICAgaWYgKHRoaXMuYm9keVJlYWR5KHBhcnRpY2xlKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICAgICAgdGhpcy5wb29sLmV4cGlyZShwYXJ0aWNsZS5ib2R5KTtcbiAgICAgIHBhcnRpY2xlLmJvZHkgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGJvZHlSZWFkeShwYXJ0aWNsZSkge1xuICAgIHJldHVybiB0eXBlb2YgcGFydGljbGUuYm9keSA9PT0gXCJvYmplY3RcIiAmJiBwYXJ0aWNsZS5ib2R5ICYmICFwYXJ0aWNsZS5ib2R5LmlzSW5uZXI7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZFxuICBhZGRJbWcyQm9keShpbWcsIHBhcnRpY2xlKSB7XG4gICAgaWYgKHBhcnRpY2xlLmRlYWQpIHJldHVybjtcbiAgICBwYXJ0aWNsZS5ib2R5ID0gdGhpcy5wb29sLmdldChpbWcsIHBhcnRpY2xlKTtcbiAgICBEb21VdGlsLnJlc2l6ZShwYXJ0aWNsZS5ib2R5LCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICB9XG5cbiAgY3JlYXRlQm9keShib2R5LCBwYXJ0aWNsZSkge1xuICAgIGlmIChib2R5LmlzQ2lyY2xlKSByZXR1cm4gdGhpcy5jcmVhdGVDaXJjbGUocGFydGljbGUpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVNwcml0ZShib2R5LCBwYXJ0aWNsZSk7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgY3JlYXRlQ2lyY2xlKHBhcnRpY2xlKSB7XG4gICAgY29uc3QgZG9tID0gRG9tVXRpbC5jcmVhdGVEaXYoYCR7cGFydGljbGUuaWR9X2RvbWAsIDIgKiBwYXJ0aWNsZS5yYWRpdXMsIDIgKiBwYXJ0aWNsZS5yYWRpdXMpO1xuICAgIGRvbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtwYXJ0aWNsZS5yYWRpdXN9cHhgO1xuXG4gICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICBkb20uc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLnN0cm9rZS5jb2xvcjtcbiAgICAgIGRvbS5zdHlsZS5ib3JkZXJXaWR0aCA9IGAke3RoaXMuc3Ryb2tlLnRoaW5rbmVzc31weGA7XG4gICAgfVxuICAgIGRvbS5pc0NpcmNsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZG9tO1xuICB9XG5cbiAgY3JlYXRlU3ByaXRlKGJvZHksIHBhcnRpY2xlKSB7XG4gICAgY29uc3QgdXJsID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBib2R5IDogYm9keS5zcmM7XG4gICAgY29uc3QgZG9tID0gRG9tVXRpbC5jcmVhdGVEaXYoYCR7cGFydGljbGUuaWR9X2RvbWAsIGJvZHkud2lkdGgsIGJvZHkuaGVpZ2h0KTtcbiAgICBkb20uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYDtcblxuICAgIHJldHVybiBkb207XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBUeXBlcyBmcm9tIFwiLi4vdXRpbHMvVHlwZXNcIjtcbmltcG9ydCBCYXNlUmVuZGVyZXIgZnJvbSBcIi4vQmFzZVJlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVhc2VsUmVuZGVyZXIgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzdHJva2UpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcblxuICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIHRoaXMubmFtZSA9IFwiRWFzZWxSZW5kZXJlclwiO1xuICB9XG5cbiAgb25QYXJ0aWNsZUNyZWF0ZWQocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUuYm9keSkge1xuICAgICAgdGhpcy5jcmVhdGVTcHJpdGUocGFydGljbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZUNpcmNsZShwYXJ0aWNsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZENoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICB9XG5cbiAgb25QYXJ0aWNsZVVwZGF0ZShwYXJ0aWNsZSkge1xuICAgIGlmIChwYXJ0aWNsZS5ib2R5KSB7XG4gICAgICBwYXJ0aWNsZS5ib2R5LnggPSBwYXJ0aWNsZS5wLng7XG4gICAgICBwYXJ0aWNsZS5ib2R5LnkgPSBwYXJ0aWNsZS5wLnk7XG5cbiAgICAgIHBhcnRpY2xlLmJvZHkuYWxwaGEgPSBwYXJ0aWNsZS5hbHBoYTtcbiAgICAgIHBhcnRpY2xlLmJvZHkuc2NhbGVYID0gcGFydGljbGUuYm9keS5zY2FsZVkgPSBwYXJ0aWNsZS5zY2FsZTtcbiAgICAgIHBhcnRpY2xlLmJvZHkucm90YXRpb24gPSBwYXJ0aWNsZS5yb3RhdGlvbjtcbiAgICB9XG4gIH1cblxuICBvblBhcnRpY2xlRGVhZChwYXJ0aWNsZSkge1xuICAgIGlmIChwYXJ0aWNsZS5ib2R5KSB7XG4gICAgICBwYXJ0aWNsZS5ib2R5LnBhcmVudCAmJiBwYXJ0aWNsZS5ib2R5LnBhcmVudC5yZW1vdmVDaGlsZChwYXJ0aWNsZS5ib2R5KTtcbiAgICAgIHRoaXMucG9vbC5leHBpcmUocGFydGljbGUuYm9keSk7XG4gICAgICBwYXJ0aWNsZS5ib2R5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGFydGljbGUuZ3JhcGhpY3MpIHRoaXMucG9vbC5leHBpcmUocGFydGljbGUuZ3JhcGhpY3MpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZVxuICBjcmVhdGVTcHJpdGUocGFydGljbGUpIHtcbiAgICBwYXJ0aWNsZS5ib2R5ID0gdGhpcy5wb29sLmdldChwYXJ0aWNsZS5ib2R5KTtcblxuICAgIGlmIChwYXJ0aWNsZS5ib2R5LnBhcmVudCkgcmV0dXJuO1xuICAgIGlmIChwYXJ0aWNsZS5ib2R5W1wiaW1hZ2VcIl0pIHtcbiAgICAgIHBhcnRpY2xlLmJvZHkucmVnWCA9IHBhcnRpY2xlLmJvZHkuaW1hZ2Uud2lkdGggLyAyO1xuICAgICAgcGFydGljbGUuYm9keS5yZWdZID0gcGFydGljbGUuYm9keS5pbWFnZS5oZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNpcmNsZShwYXJ0aWNsZSkge1xuICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5wb29sLmdldChjcmVhdGVqcy5HcmFwaGljcyk7XG5cbiAgICBpZiAodGhpcy5zdHJva2UpIHtcbiAgICAgIGlmIChUeXBlcy5pc1N0cmluZyh0aGlzLnN0cm9rZSkpIHtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5TdHJva2UodGhpcy5zdHJva2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5TdHJva2UoXCIjMDAwMDAwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFwaGljcy5iZWdpbkZpbGwocGFydGljbGUuY29sb3IgfHwgXCIjZmYwMDAwXCIpLmRyYXdDaXJjbGUoMCwgMCwgcGFydGljbGUucmFkaXVzKTtcbiAgICBjb25zdCBzaGFwZSA9IHRoaXMucG9vbC5nZXQoY3JlYXRlanMuU2hhcGUsIFtncmFwaGljc10pO1xuXG4gICAgcGFydGljbGUuYm9keSA9IHNoYXBlO1xuICAgIHBhcnRpY2xlLmdyYXBoaWNzID0gZ3JhcGhpY3M7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL21hdGgvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgQmFzZVJlbmRlcmVyIGZyb20gXCIuL0Jhc2VSZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXhlbFJlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuaW1hZ2VEYXRhID0gbnVsbDtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZTtcbiAgICB0aGlzLmNyZWF0ZUltYWdlRGF0YShyZWN0YW5nbGUpO1xuXG4gICAgdGhpcy5uYW1lID0gXCJQaXhlbFJlbmRlcmVyXCI7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBjcmVhdGVJbWFnZURhdGEocmVjdGFuZ2xlKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGUgPyByZWN0YW5nbGUgOiBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuZWxlbWVudC53aWR0aCwgdGhpcy5lbGVtZW50LmhlaWdodCk7XG4gICAgdGhpcy5pbWFnZURhdGEgPSB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKHRoaXMucmVjdGFuZ2xlLndpZHRoLCB0aGlzLnJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5pbWFnZURhdGEsIHRoaXMucmVjdGFuZ2xlLngsIHRoaXMucmVjdGFuZ2xlLnkpO1xuICB9XG5cbiAgb25Qcm90b25VcGRhdGUoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh0aGlzLnJlY3RhbmdsZS54LCB0aGlzLnJlY3RhbmdsZS55LCB0aGlzLnJlY3RhbmdsZS53aWR0aCwgdGhpcy5yZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB0aGlzLmltYWdlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoXG4gICAgICB0aGlzLnJlY3RhbmdsZS54LFxuICAgICAgdGhpcy5yZWN0YW5nbGUueSxcbiAgICAgIHRoaXMucmVjdGFuZ2xlLndpZHRoLFxuICAgICAgdGhpcy5yZWN0YW5nbGUuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIG9uUHJvdG9uVXBkYXRlQWZ0ZXIoKSB7XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgdGhpcy5yZWN0YW5nbGUueCwgdGhpcy5yZWN0YW5nbGUueSk7XG4gIH1cblxuICBvblBhcnRpY2xlQ3JlYXRlZChwYXJ0aWNsZSkge31cblxuICBvblBhcnRpY2xlVXBkYXRlKHBhcnRpY2xlKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VEYXRhKSB7XG4gICAgICB0aGlzLnNldFBpeGVsKFxuICAgICAgICB0aGlzLmltYWdlRGF0YSxcbiAgICAgICAgKHBhcnRpY2xlLnAueCAtIHRoaXMucmVjdGFuZ2xlLngpID4+IDAsXG4gICAgICAgIChwYXJ0aWNsZS5wLnkgLSB0aGlzLnJlY3RhbmdsZS55KSA+PiAwLFxuICAgICAgICBwYXJ0aWNsZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXRQaXhlbChpbWFnZWRhdGEsIHgsIHksIHBhcnRpY2xlKSB7XG4gICAgY29uc3QgcmdiID0gcGFydGljbGUucmdiO1xuICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy5lbGVtZW50LndpZHRoIHx8IHkgPCAwIHx8IHkgPiB0aGlzLmVsZW1lbnQuaGVpZ2h0KSByZXR1cm47XG5cbiAgICBjb25zdCBpID0gKCh5ID4+IDApICogaW1hZ2VkYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcbiAgICBpbWFnZWRhdGEuZGF0YVtpXSA9IHJnYi5yO1xuICAgIGltYWdlZGF0YS5kYXRhW2kgKyAxXSA9IHJnYi5nO1xuICAgIGltYWdlZGF0YS5kYXRhW2kgKyAyXSA9IHJnYi5iO1xuICAgIGltYWdlZGF0YS5kYXRhW2kgKyAzXSA9IHBhcnRpY2xlLmFscGhhICogMjU1O1xuICB9XG5cbiAgb25QYXJ0aWNsZURlYWQocGFydGljbGUpIHt9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5zdHJva2UgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5pbWFnZURhdGEgPSBudWxsO1xuICAgIHRoaXMucmVjdGFuZ2xlID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IFR5cGVzIGZyb20gXCIuLi91dGlscy9UeXBlc1wiO1xuaW1wb3J0IENvbG9yVXRpbCBmcm9tIFwiLi4vdXRpbHMvQ29sb3JVdGlsXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcbmltcG9ydCBCYXNlUmVuZGVyZXIgZnJvbSBcIi4vQmFzZVJlbmRlcmVyXCI7XG5cbmxldCBQSVhJQ2xhc3M7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXhpUmVuZGVyZXIgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzdHJva2UpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcblxuICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIHRoaXMuY29sb3IgPSBmYWxzZTtcbiAgICB0aGlzLnNldENvbG9yID0gZmFsc2U7XG4gICAgdGhpcy5ibGVuZE1vZGUgPSBudWxsO1xuICAgIHRoaXMucG9vbC5jcmVhdGUgPSAoYm9keSwgcGFydGljbGUpID0+IHRoaXMuY3JlYXRlQm9keShib2R5LCBwYXJ0aWNsZSk7XG4gICAgdGhpcy5zZXRQSVhJKHdpbmRvdy5QSVhJKTtcblxuICAgIHRoaXMubmFtZSA9IFwiUGl4aVJlbmRlcmVyXCI7XG4gIH1cblxuICBzZXRQSVhJKFBJWEkpIHtcbiAgICB0cnkge1xuICAgICAgUElYSUNsYXNzID0gUElYSSB8fCB7IFNwcml0ZToge30gfTtcbiAgICAgIHRoaXMuY3JlYXRlRnJvbUltYWdlID0gUElYSUNsYXNzLlNwcml0ZS5mcm9tIHx8IFBJWElDbGFzcy5TcHJpdGUuZnJvbUltYWdlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBvblByb3RvblVwZGF0ZSgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXJ0aWNsZVxuICAgKi9cbiAgb25QYXJ0aWNsZUNyZWF0ZWQocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUuYm9keSkge1xuICAgICAgcGFydGljbGUuYm9keSA9IHRoaXMucG9vbC5nZXQocGFydGljbGUuYm9keSwgcGFydGljbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWNsZS5ib2R5ID0gdGhpcy5wb29sLmdldCh0aGlzLmNpcmNsZUNvbmYsIHBhcnRpY2xlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ibGVuZE1vZGUpIHtcbiAgICAgIHBhcnRpY2xlLmJvZHkuYmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZENoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXJ0aWNsZVxuICAgKi9cbiAgb25QYXJ0aWNsZVVwZGF0ZShwYXJ0aWNsZSkge1xuICAgIHRoaXMudHJhbnNmb3JtKHBhcnRpY2xlLCBwYXJ0aWNsZS5ib2R5KTtcblxuICAgIGlmICh0aGlzLnNldENvbG9yID09PSB0cnVlIHx8IHRoaXMuY29sb3IgPT09IHRydWUpIHtcbiAgICAgIHBhcnRpY2xlLmJvZHkudGludCA9IENvbG9yVXRpbC5nZXRIZXgxNkZyb21QYXJ0aWNsZShwYXJ0aWNsZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwYXJ0aWNsZVxuICAgKi9cbiAgb25QYXJ0aWNsZURlYWQocGFydGljbGUpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQocGFydGljbGUuYm9keSk7XG4gICAgdGhpcy5wb29sLmV4cGlyZShwYXJ0aWNsZS5ib2R5KTtcbiAgICBwYXJ0aWNsZS5ib2R5ID0gbnVsbDtcbiAgfVxuXG4gIHRyYW5zZm9ybShwYXJ0aWNsZSwgdGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnggPSBwYXJ0aWNsZS5wLng7XG4gICAgdGFyZ2V0LnkgPSBwYXJ0aWNsZS5wLnk7XG5cbiAgICB0YXJnZXQuYWxwaGEgPSBwYXJ0aWNsZS5hbHBoYTtcblxuICAgIHRhcmdldC5zY2FsZS54ID0gcGFydGljbGUuc2NhbGU7XG4gICAgdGFyZ2V0LnNjYWxlLnkgPSBwYXJ0aWNsZS5zY2FsZTtcblxuICAgIC8vIHVzaW5nIGNhY2hlZCB2ZXJzaW9uIG9mIE1hdGhVdGlsLlBJXzE4MCBmb3Igc2xpZ2h0IHBlcmZvcm1hbmNlIGluY3JlYXNlLlxuICAgIHRhcmdldC5yb3RhdGlvbiA9IHBhcnRpY2xlLnJvdGF0aW9uICogTWF0aFV0aWwuUElfMTgwOyAvLyBNYXRoVXRpbC5QSV8xODA7XG4gIH1cblxuICBjcmVhdGVCb2R5KGJvZHksIHBhcnRpY2xlKSB7XG4gICAgaWYgKGJvZHkuaXNDaXJjbGUpIHJldHVybiB0aGlzLmNyZWF0ZUNpcmNsZShwYXJ0aWNsZSk7XG4gICAgZWxzZSByZXR1cm4gdGhpcy5jcmVhdGVTcHJpdGUoYm9keSk7XG4gIH1cblxuICBjcmVhdGVTcHJpdGUoYm9keSkge1xuICAgIGNvbnN0IHNwcml0ZSA9IGJvZHkuaXNJbm5lciA/IHRoaXMuY3JlYXRlRnJvbUltYWdlKGJvZHkuc3JjKSA6IG5ldyBQSVhJQ2xhc3MuU3ByaXRlKGJvZHkpO1xuXG4gICAgc3ByaXRlLmFuY2hvci54ID0gMC41O1xuICAgIHNwcml0ZS5hbmNob3IueSA9IDAuNTtcblxuICAgIHJldHVybiBzcHJpdGU7XG4gIH1cblxuICBjcmVhdGVDaXJjbGUocGFydGljbGUpIHtcbiAgICBjb25zdCBncmFwaGljcyA9IG5ldyBQSVhJQ2xhc3MuR3JhcGhpY3MoKTtcblxuICAgIGlmICh0aGlzLnN0cm9rZSkge1xuICAgICAgY29uc3Qgc3Ryb2tlID0gVHlwZXMuaXNTdHJpbmcodGhpcy5zdHJva2UpID8gdGhpcy5zdHJva2UgOiAweDAwMDAwMDtcbiAgICAgIGdyYXBoaWNzLmJlZ2luU3Ryb2tlKHN0cm9rZSk7XG4gICAgfVxuXG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKHBhcnRpY2xlLmNvbG9yIHx8IDB4MDA4Y2VkKTtcbiAgICBncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHBhcnRpY2xlLnJhZGl1cyk7XG4gICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xuXG4gICAgcmV0dXJuIGdyYXBoaWNzO1xuICB9XG5cbiAgZGVzdHJveShwYXJ0aWNsZXMpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICBsZXQgaSA9IHBhcnRpY2xlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgbGV0IHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICAgICAgaWYgKHBhcnRpY2xlLmJvZHkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHBhcnRpY2xlLmJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE1hdDMgZnJvbSBcIi4uL21hdGgvTWF0M1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNU3RhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hdHMgPSBbXTtcbiAgICB0aGlzLnNpemUgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB0aGlzLm1hdHMucHVzaChNYXQzLmNyZWF0ZShbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pKTtcbiAgfVxuXG4gIHNldChtLCBpKSB7XG4gICAgaWYgKGkgPT09IDApIE1hdDMuc2V0KG0sIHRoaXMubWF0c1swXSk7XG4gICAgZWxzZSBNYXQzLm11bHRpcGx5KHRoaXMubWF0c1tpIC0gMV0sIG0sIHRoaXMubWF0c1tpXSk7XG5cbiAgICB0aGlzLnNpemUgPSBNYXRoLm1heCh0aGlzLnNpemUsIGkgKyAxKTtcbiAgfVxuXG4gIHB1c2gobSkge1xuICAgIGlmICh0aGlzLnNpemUgPT09IDApIE1hdDMuc2V0KG0sIHRoaXMubWF0c1swXSk7XG4gICAgZWxzZSBNYXQzLm11bHRpcGx5KHRoaXMubWF0c1t0aGlzLnNpemUgLSAxXSwgbSwgdGhpcy5tYXRzW3RoaXMuc2l6ZV0pO1xuXG4gICAgdGhpcy5zaXplKys7XG4gIH1cblxuICBwb3AoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA+IDApIHRoaXMuc2l6ZS0tO1xuICB9XG5cbiAgdG9wKCkge1xuICAgIHJldHVybiB0aGlzLm1hdHNbdGhpcy5zaXplIC0gMV07XG4gIH1cbn1cbiIsImltcG9ydCBNYXQzIGZyb20gXCIuLi9tYXRoL01hdDNcIjtcbmltcG9ydCBCYXNlUmVuZGVyZXIgZnJvbSBcIi4vQmFzZVJlbmRlcmVyXCI7XG5cbmltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgSW1nVXRpbCBmcm9tIFwiLi4vdXRpbHMvSW1nVXRpbFwiO1xuaW1wb3J0IE1TdGFjayBmcm9tIFwiLi4vdXRpbHMvTVN0YWNrXCI7XG5pbXBvcnQgRG9tVXRpbCBmcm9tIFwiLi4vdXRpbHMvRG9tVXRpbFwiO1xuaW1wb3J0IFdlYkdMVXRpbCBmcm9tIFwiLi4vdXRpbHMvV2ViR0xVdGlsXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViR0xSZW5kZXJlciBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiLCB7IGFudGlhbGlhczogdHJ1ZSwgc3RlbmNpbDogZmFsc2UsIGRlcHRoOiBmYWxzZSB9KTtcbiAgICBpZiAoIXRoaXMuZ2wpIGFsZXJ0KFwiU29ycnkgeW91ciBicm93c2VyIGRvIG5vdCBzdXBwZXN0IFdlYkdMIVwiKTtcblxuICAgIHRoaXMuaW5pdFZhcigpO1xuICAgIHRoaXMuc2V0TWF4UmFkaXVzKCk7XG4gICAgdGhpcy5pbml0U2hhZGVycygpO1xuICAgIHRoaXMuaW5pdEJ1ZmZlcnMoKTtcblxuICAgIHRoaXMuZ2wuYmxlbmRFcXVhdGlvbih0aGlzLmdsLkZVTkNfQUREKTtcbiAgICB0aGlzLmdsLmJsZW5kRnVuYyh0aGlzLmdsLlNSQ19BTFBIQSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICB0aGlzLmFkZEltZzJCb2R5ID0gdGhpcy5hZGRJbWcyQm9keS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5uYW1lID0gXCJXZWJHTFJlbmRlcmVyXCI7XG4gIH1cblxuICBpbml0KHByb3Rvbikge1xuICAgIHN1cGVyLmluaXQocHJvdG9uKTtcbiAgICB0aGlzLnJlc2l6ZSh0aGlzLmVsZW1lbnQud2lkdGgsIHRoaXMuZWxlbWVudC5oZWlnaHQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnVtYXRbNF0gPSAtMjtcbiAgICB0aGlzLnVtYXRbN10gPSAxO1xuXG4gICAgdGhpcy5zbWF0WzBdID0gMSAvIHdpZHRoO1xuICAgIHRoaXMuc21hdFs0XSA9IDEgLyBoZWlnaHQ7XG5cbiAgICB0aGlzLm1zdGFjay5zZXQodGhpcy51bWF0LCAwKTtcbiAgICB0aGlzLm1zdGFjay5zZXQodGhpcy5zbWF0LCAxKTtcblxuICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5lbGVtZW50LndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHNldE1heFJhZGl1cyhyYWRpdXMpIHtcbiAgICB0aGlzLmNpcmNsZUNhbnZhc1VSTCA9IHRoaXMuY3JlYXRlQ2lyY2xlKHJhZGl1cyk7XG4gIH1cblxuICBnZXRWZXJ0ZXhTaGFkZXIoKSB7XG4gICAgY29uc3QgdnNTb3VyY2UgPSBbXG4gICAgICBcInVuaWZvcm0gdmVjMiB2aWV3cG9ydDtcIixcbiAgICAgIFwiYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1wiLFxuICAgICAgXCJhdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1wiLFxuICAgICAgXCJ1bmlmb3JtIG1hdDMgdE1hdDtcIixcbiAgICAgIFwidmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XCIsXG4gICAgICBcInZhcnlpbmcgZmxvYXQgYWxwaGE7XCIsXG4gICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgIFwidmVjMyB2ID0gdE1hdCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLCAxLjApO1wiLFxuICAgICAgXCJnbF9Qb3NpdGlvbiA9IHZlYzQodi54LCB2LnksIDAsIDEpO1wiLFxuICAgICAgXCJ2VGV4dHVyZUNvb3JkID0gYVRleHR1cmVDb29yZDtcIixcbiAgICAgIFwiYWxwaGEgPSB0TWF0WzBdWzJdO1wiLFxuICAgICAgXCJ9XCJcbiAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHZzU291cmNlO1xuICB9XG5cbiAgZ2V0RnJhZ21lbnRTaGFkZXIoKSB7XG4gICAgY29uc3QgZnNTb3VyY2UgPSBbXG4gICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgXCJ2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcIixcbiAgICAgIFwidmFyeWluZyBmbG9hdCBhbHBoYTtcIixcbiAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XCIsXG4gICAgICBcInVuaWZvcm0gdmVjNCBjb2xvcjtcIixcbiAgICAgIFwidW5pZm9ybSBib29sIHVzZVRleHR1cmU7XCIsXG4gICAgICBcInVuaWZvcm0gdmVjMyB1Q29sb3I7XCIsXG4gICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgIFwidmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpO1wiLFxuICAgICAgXCJnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlQ29sb3IgKiB2ZWM0KHVDb2xvciwgMS4wKTtcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yLncgKj0gYWxwaGE7XCIsXG4gICAgICBcIn1cIlxuICAgIF0uam9pbihcIlxcblwiKTtcbiAgICByZXR1cm4gZnNTb3VyY2U7XG4gIH1cblxuICBpbml0VmFyKCkge1xuICAgIHRoaXMubXN0YWNrID0gbmV3IE1TdGFjaygpO1xuICAgIHRoaXMudW1hdCA9IE1hdDMuY3JlYXRlKFsyLCAwLCAxLCAwLCAtMiwgMCwgLTEsIDEsIDFdKTtcbiAgICB0aGlzLnNtYXQgPSBNYXQzLmNyZWF0ZShbMSAvIDEwMCwgMCwgMSwgMCwgMSAvIDEwMCwgMCwgMCwgMCwgMV0pO1xuICAgIHRoaXMudGV4dHVyZWJ1ZmZlcnMgPSB7fTtcbiAgfVxuXG4gIGJsZW5kRXF1YXRpb24oQSkge1xuICAgIHRoaXMuZ2wuYmxlbmRFcXVhdGlvbih0aGlzLmdsW0FdKTtcbiAgfVxuXG4gIGJsZW5kRnVuYyhBLCBCKSB7XG4gICAgdGhpcy5nbC5ibGVuZEZ1bmModGhpcy5nbFtBXSwgdGhpcy5nbFtCXSk7XG4gIH1cblxuICBnZXRTaGFkZXIoZ2wsIHN0ciwgZnMpIHtcbiAgICBjb25zdCBzaGFkZXIgPSBmcyA/IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpIDogZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3RyKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgYWxlcnQoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cblxuICBpbml0U2hhZGVycygpIHtcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuZ2V0U2hhZGVyKHRoaXMuZ2wsIHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXIoKSwgdHJ1ZSk7XG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gdGhpcy5nZXRTaGFkZXIodGhpcy5nbCwgdGhpcy5nZXRWZXJ0ZXhTaGFkZXIoKSwgZmFsc2UpO1xuXG4gICAgdGhpcy5zcHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMuc3Byb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIodGhpcy5zcHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIHRoaXMuZ2wubGlua1Byb2dyYW0odGhpcy5zcHJvZ3JhbSk7XG5cbiAgICBpZiAoIXRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnNwcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKSkgYWxlcnQoXCJDb3VsZCBub3QgaW5pdGlhbGlzZSBzaGFkZXJzXCIpO1xuXG4gICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuc3Byb2dyYW0pO1xuICAgIHRoaXMuc3Byb2dyYW0udnBhID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnNwcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKTtcbiAgICB0aGlzLnNwcm9ncmFtLnRjYSA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5zcHJvZ3JhbSwgXCJhVGV4dHVyZUNvb3JkXCIpO1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zcHJvZ3JhbS50Y2EpO1xuICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5zcHJvZ3JhbS52cGEpO1xuXG4gICAgdGhpcy5zcHJvZ3JhbS50TWF0VW5pZm9ybSA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc3Byb2dyYW0sIFwidE1hdFwiKTtcbiAgICB0aGlzLnNwcm9ncmFtLnNhbXBsZXJVbmlmb3JtID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zcHJvZ3JhbSwgXCJ1U2FtcGxlclwiKTtcbiAgICB0aGlzLnNwcm9ncmFtLnVzZVRleCA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc3Byb2dyYW0sIFwidXNlVGV4dHVyZVwiKTtcbiAgICB0aGlzLnNwcm9ncmFtLmNvbG9yID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zcHJvZ3JhbSwgXCJ1Q29sb3JcIik7XG4gICAgdGhpcy5nbC51bmlmb3JtMWkodGhpcy5zcHJvZ3JhbS51c2VUZXgsIDEpO1xuICB9XG5cbiAgaW5pdEJ1ZmZlcnMoKSB7XG4gICAgY29uc3QgdnMgPSBbMCwgMywgMSwgMCwgMiwgM107XG4gICAgbGV0IGlkeDtcblxuICAgIHRoaXMudW5pdElCdWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLnVuaXRJQnVmZmVyKTtcbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KHZzKSwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBsZXQgaTtcbiAgICBsZXQgaWRzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEwMDsgaSsrKSBpZHMucHVzaChpKTtcbiAgICBpZHggPSBuZXcgVWludDE2QXJyYXkoaWRzKTtcblxuICAgIHRoaXMudW5pdEkzMyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMudW5pdEkzMyk7XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGlkeCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG5cbiAgICBpZHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTAwOyBpKyspIGlkcy5wdXNoKGksIGkgKyAxLCBpICsgMik7XG4gICAgaWR4ID0gbmV3IFVpbnQxNkFycmF5KGlkcyk7XG5cbiAgICB0aGlzLnN0cmlwQnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5zdHJpcEJ1ZmZlcik7XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGlkeCwgdGhpcy5nbC5TVEFUSUNfRFJBVyk7XG4gIH1cblxuICBjcmVhdGVDaXJjbGUocmFpZHVzKSB7XG4gICAgdGhpcy5jaXJjbGVDYW52YXNSYWRpdXMgPSBXZWJHTFV0aWwubmhwb3QoVXRpbC5pbml0VmFsdWUocmFpZHVzLCAzMikpO1xuICAgIGNvbnN0IGNhbnZhcyA9IERvbVV0aWwuY3JlYXRlQ2FudmFzKFwiY2lyY2xlX2NhbnZhc1wiLCB0aGlzLmNpcmNsZUNhbnZhc1JhZGl1cyAqIDIsIHRoaXMuY2lyY2xlQ2FudmFzUmFkaXVzICogMik7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHRoaXMuY2lyY2xlQ2FudmFzUmFkaXVzLCB0aGlzLmNpcmNsZUNhbnZhc1JhZGl1cywgdGhpcy5jaXJjbGVDYW52YXNSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGXCI7XG4gICAgY29udGV4dC5maWxsKCk7XG5cbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xuICB9XG5cbiAgZHJhd0ltZzJDYW52YXMocGFydGljbGUpIHtcbiAgICBjb25zdCBfdyA9IHBhcnRpY2xlLmJvZHkud2lkdGg7XG4gICAgY29uc3QgX2ggPSBwYXJ0aWNsZS5ib2R5LmhlaWdodDtcblxuICAgIGNvbnN0IF93aWR0aCA9IFdlYkdMVXRpbC5uaHBvdChwYXJ0aWNsZS5ib2R5LndpZHRoKTtcbiAgICBjb25zdCBfaGVpZ2h0ID0gV2ViR0xVdGlsLm5ocG90KHBhcnRpY2xlLmJvZHkuaGVpZ2h0KTtcblxuICAgIGNvbnN0IF9zY2FsZVggPSBwYXJ0aWNsZS5ib2R5LndpZHRoIC8gX3dpZHRoO1xuICAgIGNvbnN0IF9zY2FsZVkgPSBwYXJ0aWNsZS5ib2R5LmhlaWdodCAvIF9oZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMudGV4dHVyZWJ1ZmZlcnNbcGFydGljbGUuZGF0YS5zcmNdKVxuICAgICAgdGhpcy50ZXh0dXJlYnVmZmVyc1twYXJ0aWNsZS5kYXRhLnNyY10gPSBbXG4gICAgICAgIHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpLFxuICAgICAgICB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpXG4gICAgICBdO1xuXG4gICAgcGFydGljbGUuZGF0YS50ZXh0dXJlID0gdGhpcy50ZXh0dXJlYnVmZmVyc1twYXJ0aWNsZS5kYXRhLnNyY11bMF07XG4gICAgcGFydGljbGUuZGF0YS52Y0J1ZmZlciA9IHRoaXMudGV4dHVyZWJ1ZmZlcnNbcGFydGljbGUuZGF0YS5zcmNdWzFdO1xuICAgIHBhcnRpY2xlLmRhdGEudGNCdWZmZXIgPSB0aGlzLnRleHR1cmVidWZmZXJzW3BhcnRpY2xlLmRhdGEuc3JjXVsyXTtcblxuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcGFydGljbGUuZGF0YS50Y0J1ZmZlcik7XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKFxuICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMCwgX3NjYWxlWCwgMC4wLCAwLjAsIF9zY2FsZVksIF9zY2FsZVksIF9zY2FsZVldKSxcbiAgICAgIHRoaXMuZ2wuU1RBVElDX0RSQVdcbiAgICApO1xuICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcGFydGljbGUuZGF0YS52Y0J1ZmZlcik7XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKFxuICAgICAgdGhpcy5nbC5BUlJBWV9CVUZGRVIsXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMCwgX3csIDAuMCwgMC4wLCBfaCwgX3csIF9oXSksXG4gICAgICB0aGlzLmdsLlNUQVRJQ19EUkFXXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBwYXJ0aWNsZS5kYXRhLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgcGFydGljbGUuZGF0YS50ZXh0dXJlKTtcbiAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBkYXRhKTtcbiAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5nbC5MSU5FQVIpO1xuICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCk7XG4gICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmdsLlRFWFRVUkVfMkQpO1xuXG4gICAgcGFydGljbGUuZGF0YS50ZXh0dXJlTG9hZGVkID0gdHJ1ZTtcbiAgICBwYXJ0aWNsZS5kYXRhLnRleHR1cmVXaWR0aCA9IF93O1xuICAgIHBhcnRpY2xlLmRhdGEudGV4dHVyZUhlaWdodCA9IF9oO1xuICB9XG5cbiAgb25Qcm90b25VcGRhdGUoKSB7XG4gICAgLy8gdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgIC8vIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgfVxuXG4gIG9uUGFydGljbGVDcmVhdGVkKHBhcnRpY2xlKSB7XG4gICAgcGFydGljbGUuZGF0YS50ZXh0dXJlTG9hZGVkID0gZmFsc2U7XG4gICAgcGFydGljbGUuZGF0YS50bWF0ID0gTWF0My5jcmVhdGUoKTtcbiAgICBwYXJ0aWNsZS5kYXRhLnRtYXRbOF0gPSAxO1xuICAgIHBhcnRpY2xlLmRhdGEuaW1hdCA9IE1hdDMuY3JlYXRlKCk7XG4gICAgcGFydGljbGUuZGF0YS5pbWF0WzhdID0gMTtcblxuICAgIGlmIChwYXJ0aWNsZS5ib2R5KSB7XG4gICAgICBJbWdVdGlsLmdldEltZ0Zyb21DYWNoZShwYXJ0aWNsZS5ib2R5LCB0aGlzLmFkZEltZzJCb2R5LCBwYXJ0aWNsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEltZ1V0aWwuZ2V0SW1nRnJvbUNhY2hlKHRoaXMuY2lyY2xlQ2FudmFzVVJMLCB0aGlzLmFkZEltZzJCb2R5LCBwYXJ0aWNsZSk7XG4gICAgICBwYXJ0aWNsZS5kYXRhLm9sZFNjYWxlID0gcGFydGljbGUucmFkaXVzIC8gdGhpcy5jaXJjbGVDYW52YXNSYWRpdXM7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpdmF0ZVxuICBhZGRJbWcyQm9keShpbWcsIHBhcnRpY2xlKSB7XG4gICAgaWYgKHBhcnRpY2xlLmRlYWQpIHJldHVybjtcbiAgICBwYXJ0aWNsZS5ib2R5ID0gaW1nO1xuICAgIHBhcnRpY2xlLmRhdGEuc3JjID0gaW1nLnNyYztcbiAgICBwYXJ0aWNsZS5kYXRhLmNhbnZhcyA9IEltZ1V0aWwuZ2V0Q2FudmFzRnJvbUNhY2hlKGltZyk7XG4gICAgcGFydGljbGUuZGF0YS5vbGRTY2FsZSA9IDE7XG5cbiAgICB0aGlzLmRyYXdJbWcyQ2FudmFzKHBhcnRpY2xlKTtcbiAgfVxuXG4gIG9uUGFydGljbGVVcGRhdGUocGFydGljbGUpIHtcbiAgICBpZiAocGFydGljbGUuZGF0YS50ZXh0dXJlTG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1hdHJpeChwYXJ0aWNsZSk7XG5cbiAgICAgIHRoaXMuZ2wudW5pZm9ybTNmKHRoaXMuc3Byb2dyYW0uY29sb3IsIHBhcnRpY2xlLnJnYi5yIC8gMjU1LCBwYXJ0aWNsZS5yZ2IuZyAvIDI1NSwgcGFydGljbGUucmdiLmIgLyAyNTUpO1xuICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KHRoaXMuc3Byb2dyYW0udE1hdFVuaWZvcm0sIGZhbHNlLCB0aGlzLm1zdGFjay50b3AoKSk7XG5cbiAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcGFydGljbGUuZGF0YS52Y0J1ZmZlcik7XG4gICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zcHJvZ3JhbS52cGEsIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgcGFydGljbGUuZGF0YS50Y0J1ZmZlcik7XG4gICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5zcHJvZ3JhbS50Y2EsIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBwYXJ0aWNsZS5kYXRhLnRleHR1cmUpO1xuICAgICAgdGhpcy5nbC51bmlmb3JtMWkodGhpcy5zcHJvZ3JhbS5zYW1wbGVyVW5pZm9ybSwgMCk7XG4gICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy51bml0SUJ1ZmZlcik7XG5cbiAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLCA2LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICAgIHRoaXMubXN0YWNrLnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFydGljbGVEZWFkKHBhcnRpY2xlKSB7fVxuXG4gIHVwZGF0ZU1hdHJpeChwYXJ0aWNsZSkge1xuICAgIGNvbnN0IG1vdmVPcmlnaW5NYXRyaXggPSBXZWJHTFV0aWwubWFrZVRyYW5zbGF0aW9uKFxuICAgICAgLXBhcnRpY2xlLmRhdGEudGV4dHVyZVdpZHRoIC8gMixcbiAgICAgIC1wYXJ0aWNsZS5kYXRhLnRleHR1cmVIZWlnaHQgLyAyXG4gICAgKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbk1hdHJpeCA9IFdlYkdMVXRpbC5tYWtlVHJhbnNsYXRpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpO1xuXG4gICAgY29uc3QgYW5nZWwgPSBwYXJ0aWNsZS5yb3RhdGlvbiAqIE1hdGhVdGlsLlBJXzE4MDtcbiAgICBjb25zdCByb3RhdGlvbk1hdHJpeCA9IFdlYkdMVXRpbC5tYWtlUm90YXRpb24oYW5nZWwpO1xuXG4gICAgY29uc3Qgc2NhbGUgPSBwYXJ0aWNsZS5zY2FsZSAqIHBhcnRpY2xlLmRhdGEub2xkU2NhbGU7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBXZWJHTFV0aWwubWFrZVNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgbGV0IG1hdHJpeCA9IFdlYkdMVXRpbC5tYXRyaXhNdWx0aXBseShtb3ZlT3JpZ2luTWF0cml4LCBzY2FsZU1hdHJpeCk7XG5cbiAgICBtYXRyaXggPSBXZWJHTFV0aWwubWF0cml4TXVsdGlwbHkobWF0cml4LCByb3RhdGlvbk1hdHJpeCk7XG4gICAgbWF0cml4ID0gV2ViR0xVdGlsLm1hdHJpeE11bHRpcGx5KG1hdHJpeCwgdHJhbnNsYXRpb25NYXRyaXgpO1xuXG4gICAgTWF0My5pbnZlcnNlKG1hdHJpeCwgcGFydGljbGUuZGF0YS5pbWF0KTtcbiAgICBtYXRyaXhbMl0gPSBwYXJ0aWNsZS5hbHBoYTtcblxuICAgIHRoaXMubXN0YWNrLnB1c2gobWF0cml4KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgIHRoaXMubXN0YWNrID0gbnVsbDtcbiAgICB0aGlzLnVtYXQgPSBudWxsO1xuICAgIHRoaXMuc21hdCA9IG51bGw7XG4gICAgdGhpcy50ZXh0dXJlYnVmZmVycyA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlUmVuZGVyZXIgZnJvbSBcIi4vQmFzZVJlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVJlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gXCJDdXN0b21SZW5kZXJlclwiO1xuICB9XG59XG4iLCJpbXBvcnQgWm9uZSBmcm9tIFwiLi9ab25lXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuLi9tYXRoL01hdGhVdGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyLCBkaXJlY3Rpb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHgyIC0geDEgPj0gMCkge1xuICAgICAgdGhpcy54MSA9IHgxO1xuICAgICAgdGhpcy55MSA9IHkxO1xuICAgICAgdGhpcy54MiA9IHgyO1xuICAgICAgdGhpcy55MiA9IHkyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLngxID0geDI7XG4gICAgICB0aGlzLnkxID0geTI7XG4gICAgICB0aGlzLngyID0geDE7XG4gICAgICB0aGlzLnkyID0geTE7XG4gICAgfVxuXG4gICAgdGhpcy5keCA9IHRoaXMueDIgLSB0aGlzLngxO1xuICAgIHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcblxuICAgIHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xuICAgIHRoaXMubWlueSA9IE1hdGgubWluKHRoaXMueTEsIHRoaXMueTIpO1xuICAgIHRoaXMubWF4eCA9IE1hdGgubWF4KHRoaXMueDEsIHRoaXMueDIpO1xuICAgIHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xuXG4gICAgdGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xuICAgIHRoaXMueHh5eSA9IHRoaXMuZHggKiB0aGlzLmR4ICsgdGhpcy5keSAqIHRoaXMuZHk7XG5cbiAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5nZXRHcmFkaWVudCgpO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFV0aWwuaW5pdFZhbHVlKGRpcmVjdGlvbiwgXCI+XCIpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMudmVjdG9yLnggPSB0aGlzLngxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguY29zKHRoaXMuZ3JhZGllbnQpO1xuICAgIHRoaXMudmVjdG9yLnkgPSB0aGlzLnkxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZ3JhZGllbnQpO1xuXG4gICAgcmV0dXJuIHRoaXMudmVjdG9yO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKHgsIHkpIHtcbiAgICBjb25zdCBBID0gdGhpcy5keTtcbiAgICBjb25zdCBCID0gLXRoaXMuZHg7XG4gICAgY29uc3QgQyA9IHRoaXMuZG90O1xuICAgIGNvbnN0IEQgPSBCID09PSAwID8gMSA6IEI7XG5cbiAgICBpZiAoKEEgKiB4ICsgQiAqIHkgKyBDKSAqIEQgPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKHgsIHkpIHtcbiAgICBjb25zdCBBID0gdGhpcy5keTtcbiAgICBjb25zdCBCID0gLXRoaXMuZHg7XG4gICAgY29uc3QgQyA9IHRoaXMuZG90O1xuICAgIGNvbnN0IEQgPSBBICogeCArIEIgKiB5ICsgQztcblxuICAgIHJldHVybiBEIC8gTWF0aC5zcXJ0KHRoaXMueHh5eSk7XG4gIH1cblxuICBnZXRTeW1tZXRyaWModikge1xuICAgIGNvbnN0IHRoYTIgPSB2LmdldEdyYWRpZW50KCk7XG4gICAgY29uc3QgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcbiAgICBjb25zdCB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcblxuICAgIGNvbnN0IG9sZHggPSB2Lng7XG4gICAgY29uc3Qgb2xkeSA9IHYueTtcblxuICAgIHYueCA9IG9sZHggKiBNYXRoLmNvcyh0aGEpIC0gb2xkeSAqIE1hdGguc2luKHRoYSk7XG4gICAgdi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcblxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgZ2V0R3JhZGllbnQoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XG4gIH1cblxuICByYW5nZU91dChwYXJ0aWNsZSkge1xuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hYnModGhpcy5nZXRHcmFkaWVudCgpKTtcblxuICAgIGlmIChhbmdsZSA8PSBNYXRoVXRpbC5QSSAvIDQpIHtcbiAgICAgIGlmIChwYXJ0aWNsZS5wLnggPD0gdGhpcy5tYXh4ICYmIHBhcnRpY2xlLnAueCA+PSB0aGlzLm1pbngpIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFydGljbGUucC55IDw9IHRoaXMubWF4eSAmJiBwYXJ0aWNsZS5wLnkgPj0gdGhpcy5taW55KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5KTtcbiAgfVxuXG4gIGNyb3NzaW5nKHBhcnRpY2xlKSB7XG4gICAgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImRlYWRcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcIj5cIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJSXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJhbmdlT3V0KHBhcnRpY2xlKSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKSBwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5yYW5nZU91dChwYXJ0aWNsZSkpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpIHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT09IFwiYm91bmRcIikge1xuICAgICAgaWYgKCF0aGlzLnJhbmdlT3V0KHBhcnRpY2xlKSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5nZXREaXN0YW5jZShwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkgPD0gcGFydGljbGUucmFkaXVzKSB7XG4gICAgICAgIGlmICh0aGlzLmR4ID09PSAwKSB7XG4gICAgICAgICAgcGFydGljbGUudi54ICo9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHkgPT09IDApIHtcbiAgICAgICAgICBwYXJ0aWNsZS52LnkgKj0gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImNyb3NzXCIpIHtcbiAgICAgIGlmICh0aGlzLmFsZXJ0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb3JyeSwgTGluZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QhXCIpO1xuICAgICAgICB0aGlzLmFsZXJ0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgWm9uZSBmcm9tIFwiLi9ab25lXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uL21hdGgvTWF0aFV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlWm9uZSBleHRlbmRzIFpvbmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuY2VudGVyID0geyB4LCB5IH07XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLmFuZ2xlID0gTWF0aFV0aWwuUEl4MiAqIE1hdGgucmFuZG9tKCk7XG4gICAgdGhpcy5yYW5kb21SYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5yYWRpdXM7XG4gICAgdGhpcy52ZWN0b3IueCA9IHRoaXMueCArIHRoaXMucmFuZG9tUmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XG4gICAgdGhpcy52ZWN0b3IueSA9IHRoaXMueSArIHRoaXMucmFuZG9tUmFkaXVzICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG5cbiAgICByZXR1cm4gdGhpcy52ZWN0b3I7XG4gIH1cblxuICBzZXRDZW50ZXIoeCwgeSkge1xuICAgIHRoaXMuY2VudGVyLnggPSB4O1xuICAgIHRoaXMuY2VudGVyLnkgPSB5O1xuICB9XG5cbiAgY3Jvc3NpbmcocGFydGljbGUpIHtcbiAgICBjb25zdCBkID0gcGFydGljbGUucC5kaXN0YW5jZVRvKHRoaXMuY2VudGVyKTtcblxuICAgIGlmICh0aGlzLmNyb3NzVHlwZSA9PT0gXCJkZWFkXCIpIHtcbiAgICAgIGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpIHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT09IFwiYm91bmRcIikge1xuICAgICAgaWYgKGQgKyBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5yYWRpdXMpIHRoaXMuZ2V0U3ltbWV0cmljKHBhcnRpY2xlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImNyb3NzXCIpIHtcbiAgICAgIGlmICh0aGlzLmFsZXJ0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb3JyeSwgQ2lyY2xlWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCFcIik7XG4gICAgICAgIHRoaXMuYWxlcnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcbiAgICBjb25zdCB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xuICAgIGNvbnN0IHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcblxuICAgIGNvbnN0IHRoYSA9IDIgKiAodGhhMSAtIHRoYTIpO1xuICAgIGNvbnN0IG9sZHggPSBwYXJ0aWNsZS52Lng7XG4gICAgY29uc3Qgb2xkeSA9IHBhcnRpY2xlLnYueTtcblxuICAgIHBhcnRpY2xlLnYueCA9IG9sZHggKiBNYXRoLmNvcyh0aGEpIC0gb2xkeSAqIE1hdGguc2luKHRoYSk7XG4gICAgcGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcbiAgfVxuXG4gIGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XG4gICAgcmV0dXJuIC1NYXRoVXRpbC5QSV8yICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4vWm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy52ZWN0b3IueSA9IHRoaXMueSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodDtcblxuICAgIHJldHVybiB0aGlzLnZlY3RvcjtcbiAgfVxuXG4gIGNyb3NzaW5nKHBhcnRpY2xlKSB7XG4gICAgLy8gcGFydGljbGUgZGVhZCB6b25lXG4gICAgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImRlYWRcIikge1xuICAgICAgaWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCkgcGFydGljbGUuZGVhZCA9IHRydWU7XG4gICAgICBlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKSBwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcblxuICAgICAgaWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSkgcGFydGljbGUuZGVhZCA9IHRydWU7XG4gICAgICBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkgcGFydGljbGUuZGVhZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gcGFydGljbGUgYm91bmQgem9uZVxuICAgIGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImJvdW5kXCIpIHtcbiAgICAgIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLngpIHtcbiAgICAgICAgcGFydGljbGUucC54ID0gdGhpcy54ICsgcGFydGljbGUucmFkaXVzO1xuICAgICAgICBwYXJ0aWNsZS52LnggKj0gLTE7XG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgcGFydGljbGUucC54ID0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHBhcnRpY2xlLnJhZGl1cztcbiAgICAgICAgcGFydGljbGUudi54ICo9IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy55KSB7XG4gICAgICAgIHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHBhcnRpY2xlLnJhZGl1cztcbiAgICAgICAgcGFydGljbGUudi55ICo9IC0xO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xuICAgICAgICBwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHBhcnRpY2xlLnJhZGl1cztcbiAgICAgICAgcGFydGljbGUudi55ICo9IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcnRpY2xlIGNyb3NzIHpvbmVcbiAgICBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PT0gXCJjcm9zc1wiKSB7XG4gICAgICBpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKSB7XG4gICAgICAgIHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XG4gICAgICB9IGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApIHtcbiAgICAgICAgcGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFydGljbGUucC55ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy55ICYmIHBhcnRpY2xlLnYueSA8PSAwKSB7XG4gICAgICAgIHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgcGFydGljbGUucmFkaXVzO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBwYXJ0aWNsZS52LnkgPj0gMCkge1xuICAgICAgICBwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgLSBwYXJ0aWNsZS5yYWRpdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgWm9uZSBmcm9tIFwiLi9ab25lXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbHMvVXRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhLCB4LCB5LCBkKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCk7XG4gIH1cblxuICByZXNldChpbWFnZURhdGEsIHgsIHksIGQpIHtcbiAgICB0aGlzLmltYWdlRGF0YSA9IGltYWdlRGF0YTtcbiAgICB0aGlzLnggPSBVdGlsLmluaXRWYWx1ZSh4LCAwKTtcbiAgICB0aGlzLnkgPSBVdGlsLmluaXRWYWx1ZSh5LCAwKTtcbiAgICB0aGlzLmQgPSBVdGlsLmluaXRWYWx1ZShkLCAyKTtcblxuICAgIHRoaXMudmVjdG9ycyA9IFtdO1xuICAgIHRoaXMuc2V0VmVjdG9ycygpO1xuICB9XG5cbiAgc2V0VmVjdG9ycygpIHtcbiAgICBsZXQgaSwgajtcbiAgICBjb25zdCBsZW5ndGgxID0gdGhpcy5pbWFnZURhdGEud2lkdGg7XG4gICAgY29uc3QgbGVuZ3RoMiA9IHRoaXMuaW1hZ2VEYXRhLmhlaWdodDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGgxOyBpICs9IHRoaXMuZCkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGxlbmd0aDI7IGogKz0gdGhpcy5kKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICgoaiA+PiAwKSAqIGxlbmd0aDEgKyAoaSA+PiAwKSkgKiA0O1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKSB7XG4gICAgICAgICAgdGhpcy52ZWN0b3JzLnB1c2goeyB4OiBpICsgdGhpcy54LCB5OiBqICsgdGhpcy55IH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmVjdG9yO1xuICB9XG5cbiAgZ2V0Qm91bmQoeCwgeSkge1xuICAgIGNvbnN0IGluZGV4ID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xuICAgIGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHZlY3RvciA9IFV0aWwuZ2V0UmFuZEZyb21BcnJheSh0aGlzLnZlY3RvcnMpO1xuICAgIHJldHVybiB0aGlzLnZlY3Rvci5jb3B5KHZlY3Rvcik7XG4gIH1cblxuICBnZXRDb2xvcih4LCB5KSB7XG4gICAgeCAtPSB0aGlzLng7XG4gICAgeSAtPSB0aGlzLnk7XG4gICAgY29uc3QgaSA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcblxuICAgIHJldHVybiB7XG4gICAgICByOiB0aGlzLmltYWdlRGF0YS5kYXRhW2ldLFxuICAgICAgZzogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMV0sXG4gICAgICBiOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAyXSxcbiAgICAgIGE6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDNdXG4gICAgfTtcbiAgfVxuXG4gIGNyb3NzaW5nKHBhcnRpY2xlKSB7XG4gICAgaWYgKHRoaXMuY3Jvc3NUeXBlID09PSBcImRlYWRcIikge1xuICAgICAgaWYgKHRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKSBwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcbiAgICAgIGVsc2UgcGFydGljbGUuZGVhZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT09IFwiYm91bmRcIikge1xuICAgICAgaWYgKCF0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSkgcGFydGljbGUudi5uZWdhdGUoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmltYWdlRGF0YSA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBDb2xvclV0aWwgZnJvbSBcIi4uL3V0aWxzL0NvbG9yVXRpbFwiO1xuaW1wb3J0IENpcmNsZVpvbmUgZnJvbSBcIi4uL3pvbmUvQ2lyY2xlWm9uZVwiO1xuaW1wb3J0IFBvaW50Wm9uZSBmcm9tIFwiLi4vem9uZS9Qb2ludFpvbmVcIjtcbmltcG9ydCBMaW5lWm9uZSBmcm9tIFwiLi4vem9uZS9MaW5lWm9uZVwiO1xuaW1wb3J0IFJlY3Rab25lIGZyb20gXCIuLi96b25lL1JlY3Rab25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkRXZlbnRMaXN0ZW5lcihwcm90b24sIGZ1bmMpIHtcbiAgICBwcm90b24uYWRkRXZlbnRMaXN0ZW5lcihcIlBST1RPTl9VUERBVEVfQUZURVJcIiwgKCkgPT4gZnVuYygpKTtcbiAgfSxcblxuICBnZXRTdHlsZShjb2xvciA9IFwiI2ZmMDAwMFwiKSB7XG4gICAgY29uc3QgcmdiID0gQ29sb3JVdGlsLmhleFRvUmdiKGNvbG9yKTtcbiAgICByZXR1cm4gYHJnYmEoJHtyZ2Iucn0sICR7cmdiLmd9LCAke3JnYi5ifSwgMC41KWA7XG4gIH0sXG5cbiAgZHJhd1pvbmUocHJvdG9uLCBjYW52YXMsIHpvbmUsIGNsZWFyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIocHJvdG9uLCAoKSA9PiB7XG4gICAgICBpZiAoY2xlYXIpIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIGlmICh6b25lIGluc3RhbmNlb2YgUG9pbnRab25lKSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gc3R5bGU7XG4gICAgICAgIGNvbnRleHQuYXJjKHpvbmUueCwgem9uZS55LCAxMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgIH0gZWxzZSBpZiAoem9uZSBpbnN0YW5jZW9mIExpbmVab25lKSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oem9uZS54MSwgem9uZS55MSk7XG4gICAgICAgIGNvbnRleHQubGluZVRvKHpvbmUueDIsIHpvbmUueTIpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmICh6b25lIGluc3RhbmNlb2YgUmVjdFpvbmUpIHtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlO1xuICAgICAgICBjb250ZXh0LmRyYXdSZWN0KHpvbmUueCwgem9uZS55LCB6b25lLndpZHRoLCB6b25lLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICB9IGVsc2UgaWYgKHpvbmUgaW5zdGFuY2VvZiBDaXJjbGVab25lKSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgY29udGV4dC5hcmMoem9uZS54LCB6b25lLnksIHpvbmUucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZHJhd0VtaXR0ZXIocHJvdG9uLCBjYW52YXMsIGVtaXR0ZXIsIGNsZWFyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIocHJvdG9uLCAoKSA9PiB7XG4gICAgICBpZiAoY2xlYXIpIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlO1xuICAgICAgY29udGV4dC5hcmMoZW1pdHRlci5wLngsIGVtaXR0ZXIucC55LCAxMCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IFByb3RvbiBmcm9tIFwiLi9jb3JlL1Byb3RvblwiO1xuaW1wb3J0IFBhcnRpY2xlIGZyb20gXCIuL2NvcmUvUGFydGljbGVcIjtcbmltcG9ydCBQb29sIGZyb20gXCIuL2NvcmUvUG9vbFwiO1xuXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlscy9VdGlsXCI7XG5pbXBvcnQgQ29sb3JVdGlsIGZyb20gXCIuL3V0aWxzL0NvbG9yVXRpbFwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuL21hdGgvTWF0aFV0aWxcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9tYXRoL1ZlY3RvcjJEXCI7XG5pbXBvcnQgUG9sYXIyRCBmcm9tIFwiLi9tYXRoL1BvbGFyMkRcIjtcbmltcG9ydCBNYXQzIGZyb20gXCIuL21hdGgvTWF0M1wiO1xuaW1wb3J0IFNwYW4gZnJvbSBcIi4vbWF0aC9TcGFuXCI7XG5pbXBvcnQgQXJyYXlTcGFuIGZyb20gXCIuL21hdGgvQXJyYXlTcGFuXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL21hdGgvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgZWFzZSBmcm9tIFwiLi9tYXRoL2Vhc2VcIjtcblxuaW1wb3J0IFJhdGUgZnJvbSBcIi4vaW5pdGlhbGl6ZS9SYXRlXCI7XG5pbXBvcnQgSW5pdGlhbGl6ZSBmcm9tIFwiLi9pbml0aWFsaXplL0luaXRpYWxpemVcIjtcbmltcG9ydCBMaWZlIGZyb20gXCIuL2luaXRpYWxpemUvTGlmZVwiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuL2luaXRpYWxpemUvUG9zaXRpb25cIjtcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9pbml0aWFsaXplL1ZlbG9jaXR5XCI7XG5pbXBvcnQgTWFzcyBmcm9tIFwiLi9pbml0aWFsaXplL01hc3NcIjtcbmltcG9ydCBSYWRpdXMgZnJvbSBcIi4vaW5pdGlhbGl6ZS9SYWRpdXNcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuL2luaXRpYWxpemUvQm9keVwiO1xuXG5pbXBvcnQgQmVoYXZpb3VyIGZyb20gXCIuL2JlaGF2aW91ci9CZWhhdmlvdXJcIjtcbmltcG9ydCBGb3JjZSBmcm9tIFwiLi9iZWhhdmlvdXIvRm9yY2VcIjtcbmltcG9ydCBBdHRyYWN0aW9uIGZyb20gXCIuL2JlaGF2aW91ci9BdHRyYWN0aW9uXCI7XG5pbXBvcnQgUmFuZG9tRHJpZnQgZnJvbSBcIi4vYmVoYXZpb3VyL1JhbmRvbURyaWZ0XCI7XG5pbXBvcnQgR3Jhdml0eSBmcm9tIFwiLi9iZWhhdmlvdXIvR3Jhdml0eVwiO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tIFwiLi9iZWhhdmlvdXIvQ29sbGlzaW9uXCI7XG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gXCIuL2JlaGF2aW91ci9Dcm9zc1pvbmVcIjtcbmltcG9ydCBBbHBoYSBmcm9tIFwiLi9iZWhhdmlvdXIvQWxwaGFcIjtcbmltcG9ydCBTY2FsZSBmcm9tIFwiLi9iZWhhdmlvdXIvU2NhbGVcIjtcbmltcG9ydCBSb3RhdGUgZnJvbSBcIi4vYmVoYXZpb3VyL1JvdGF0ZVwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuL2JlaGF2aW91ci9Db2xvclwiO1xuaW1wb3J0IEN5Y2xvbmUgZnJvbSBcIi4vYmVoYXZpb3VyL0N5Y2xvbmVcIjtcbmltcG9ydCBSZXB1bHNpb24gZnJvbSBcIi4vYmVoYXZpb3VyL1JlcHVsc2lvblwiO1xuaW1wb3J0IEdyYXZpdHlXZWxsIGZyb20gXCIuL2JlaGF2aW91ci9HcmF2aXR5V2VsbFwiO1xuXG5pbXBvcnQgRW1pdHRlciBmcm9tIFwiLi9lbWl0dGVyL0VtaXR0ZXJcIjtcbmltcG9ydCBCZWhhdmlvdXJFbWl0dGVyIGZyb20gXCIuL2VtaXR0ZXIvQmVoYXZpb3VyRW1pdHRlclwiO1xuaW1wb3J0IEZvbGxvd0VtaXR0ZXIgZnJvbSBcIi4vZW1pdHRlci9Gb2xsb3dFbWl0dGVyXCI7XG5cbmltcG9ydCBDYW52YXNSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXIvQ2FudmFzUmVuZGVyZXJcIjtcbmltcG9ydCBEb21SZW5kZXJlciBmcm9tIFwiLi9yZW5kZXIvRG9tUmVuZGVyZXJcIjtcbmltcG9ydCBFYXNlbFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlci9FYXNlbFJlbmRlcmVyXCI7XG5pbXBvcnQgUGl4ZWxSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXIvUGl4ZWxSZW5kZXJlclwiO1xuaW1wb3J0IFBpeGlSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXIvUGl4aVJlbmRlcmVyXCI7XG5pbXBvcnQgV2ViR0xSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXIvV2ViR0xSZW5kZXJlclwiO1xuaW1wb3J0IEN1c3RvbVJlbmRlcmVyIGZyb20gXCIuL3JlbmRlci9DdXN0b21SZW5kZXJlclwiO1xuXG5pbXBvcnQgWm9uZSBmcm9tIFwiLi96b25lL1pvbmVcIjtcbmltcG9ydCBMaW5lWm9uZSBmcm9tIFwiLi96b25lL0xpbmVab25lXCI7XG5pbXBvcnQgQ2lyY2xlWm9uZSBmcm9tIFwiLi96b25lL0NpcmNsZVpvbmVcIjtcbmltcG9ydCBQb2ludFpvbmUgZnJvbSBcIi4vem9uZS9Qb2ludFpvbmVcIjtcbmltcG9ydCBSZWN0Wm9uZSBmcm9tIFwiLi96b25lL1JlY3Rab25lXCI7XG5pbXBvcnQgSW1hZ2Vab25lIGZyb20gXCIuL3pvbmUvSW1hZ2Vab25lXCI7XG5cbmltcG9ydCBEZWJ1ZyBmcm9tIFwiLi9kZWJ1Zy9EZWJ1Z1wiO1xuXG4vLyBuYW1lc3BhY2VcblByb3Rvbi5QYXJ0aWNsZSA9IFBhcnRpY2xlO1xuUHJvdG9uLlBvb2wgPSBQb29sO1xuXG5Qcm90b24uVXRpbCA9IFV0aWw7XG5Qcm90b24uQ29sb3JVdGlsID0gQ29sb3JVdGlsO1xuUHJvdG9uLk1hdGhVdGlsID0gTWF0aFV0aWw7XG5Qcm90b24uVmVjdG9yMkQgPSBQcm90b24uVmVjdG9yID0gVmVjdG9yMkQ7XG5Qcm90b24uUG9sYXIyRCA9IFByb3Rvbi5Qb2xhciA9IFBvbGFyMkQ7XG5Qcm90b24uQXJyYXlTcGFuID0gQXJyYXlTcGFuO1xuUHJvdG9uLlJlY3RhbmdsZSA9IFJlY3RhbmdsZTtcblByb3Rvbi5SYXRlID0gUmF0ZTtcblByb3Rvbi5lYXNlID0gZWFzZTtcblByb3Rvbi5TcGFuID0gU3BhbjtcblByb3Rvbi5NYXQzID0gTWF0MztcblByb3Rvbi5nZXRTcGFuID0gKGEsIGIsIGNlbnRlcikgPT4gbmV3IFNwYW4oYSwgYiwgY2VudGVyKTtcblByb3Rvbi5jcmVhdGVBcnJheVNwYW4gPSBBcnJheVNwYW4uY3JlYXRlQXJyYXlTcGFuO1xuXG5Qcm90b24uSW5pdGlhbGl6ZSA9IFByb3Rvbi5Jbml0ID0gSW5pdGlhbGl6ZTtcblByb3Rvbi5MaWZlID0gUHJvdG9uLkwgPSBMaWZlO1xuUHJvdG9uLlBvc2l0aW9uID0gUHJvdG9uLlAgPSBQb3NpdGlvbjtcblByb3Rvbi5WZWxvY2l0eSA9IFByb3Rvbi5WID0gVmVsb2NpdHk7XG5Qcm90b24uTWFzcyA9IFByb3Rvbi5NID0gTWFzcztcblByb3Rvbi5SYWRpdXMgPSBQcm90b24uUiA9IFJhZGl1cztcblByb3Rvbi5Cb2R5ID0gUHJvdG9uLkIgPSBCb2R5O1xuXG5Qcm90b24uQmVoYXZpb3VyID0gQmVoYXZpb3VyO1xuUHJvdG9uLkZvcmNlID0gUHJvdG9uLkYgPSBGb3JjZTtcblByb3Rvbi5BdHRyYWN0aW9uID0gUHJvdG9uLkEgPSBBdHRyYWN0aW9uO1xuUHJvdG9uLlJhbmRvbURyaWZ0ID0gUHJvdG9uLlJEID0gUmFuZG9tRHJpZnQ7XG5Qcm90b24uR3Jhdml0eSA9IFByb3Rvbi5HID0gR3Jhdml0eTtcblByb3Rvbi5Db2xsaXNpb24gPSBDb2xsaXNpb247XG5Qcm90b24uQ3Jvc3Nab25lID0gQ3Jvc3Nab25lO1xuUHJvdG9uLkFscGhhID0gQWxwaGE7XG5Qcm90b24uU2NhbGUgPSBQcm90b24uUyA9IFNjYWxlO1xuUHJvdG9uLlJvdGF0ZSA9IFJvdGF0ZTtcblByb3Rvbi5Db2xvciA9IENvbG9yO1xuUHJvdG9uLlJlcHVsc2lvbiA9IFJlcHVsc2lvbjtcblByb3Rvbi5DeWNsb25lID0gQ3ljbG9uZTtcblByb3Rvbi5HcmF2aXR5V2VsbCA9IEdyYXZpdHlXZWxsO1xuXG5Qcm90b24uRW1pdHRlciA9IEVtaXR0ZXI7XG5Qcm90b24uQmVoYXZpb3VyRW1pdHRlciA9IEJlaGF2aW91ckVtaXR0ZXI7XG5Qcm90b24uRm9sbG93RW1pdHRlciA9IEZvbGxvd0VtaXR0ZXI7XG5cblByb3Rvbi5ab25lID0gWm9uZTtcblByb3Rvbi5MaW5lWm9uZSA9IExpbmVab25lO1xuUHJvdG9uLkNpcmNsZVpvbmUgPSBDaXJjbGVab25lO1xuUHJvdG9uLlBvaW50Wm9uZSA9IFBvaW50Wm9uZTtcblByb3Rvbi5SZWN0Wm9uZSA9IFJlY3Rab25lO1xuUHJvdG9uLkltYWdlWm9uZSA9IEltYWdlWm9uZTtcblxuUHJvdG9uLkNhbnZhc1JlbmRlcmVyID0gQ2FudmFzUmVuZGVyZXI7XG5Qcm90b24uRG9tUmVuZGVyZXIgPSBEb21SZW5kZXJlcjtcblByb3Rvbi5FYXNlbFJlbmRlcmVyID0gRWFzZWxSZW5kZXJlcjtcblByb3Rvbi5QaXhpUmVuZGVyZXIgPSBQaXhpUmVuZGVyZXI7XG5Qcm90b24uUGl4ZWxSZW5kZXJlciA9IFBpeGVsUmVuZGVyZXI7XG5Qcm90b24uV2ViR0xSZW5kZXJlciA9IFByb3Rvbi5XZWJHbFJlbmRlcmVyID0gV2ViR0xSZW5kZXJlcjtcblByb3Rvbi5DdXN0b21SZW5kZXJlciA9IEN1c3RvbVJlbmRlcmVyO1xuXG5Qcm90b24uRGVidWcgPSBEZWJ1ZztcblV0aWwuYXNzaWduKFByb3RvbiwgZWFzZSk7XG5cbi8vIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgUHJvdG9uO1xuIl0sIm5hbWVzIjpbImlwb3QiLCJsZW5ndGgiLCJuaHBvdCIsImkiLCJtYWtlVHJhbnNsYXRpb24iLCJ0eCIsInR5IiwibWFrZVJvdGF0aW9uIiwiYW5nbGVJblJhZGlhbnMiLCJjIiwiTWF0aCIsImNvcyIsInMiLCJzaW4iLCJtYWtlU2NhbGUiLCJzeCIsInN5IiwibWF0cml4TXVsdGlwbHkiLCJhIiwiYiIsImEwMCIsImEwMSIsImEwMiIsImExMCIsImExMSIsImExMiIsImEyMCIsImEyMSIsImEyMiIsImIwMCIsImIwMSIsImIwMiIsImIxMCIsImIxMSIsImIxMiIsImIyMCIsImIyMSIsImIyMiIsImNyZWF0ZUNhbnZhcyIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImRvbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImNyZWF0ZURpdiIsInJlc2l6ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJkaXYiLCJ4IiwieSIsInNjYWxlIiwicm90YXRlIiwid2lsbENoYW5nZSIsImNzczMiLCJ0cmFuc2Zvcm0zZCIsImtleSIsInZhbCIsImJrZXkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsImltZ3NDYWNoZSIsImNhbnZhc0NhY2hlIiwiY2FudmFzSWQiLCJnZXRJbWFnZURhdGEiLCJjb250ZXh0IiwiaW1hZ2UiLCJyZWN0IiwiZHJhd0ltYWdlIiwiaW1hZ2VkYXRhIiwiY2xlYXJSZWN0IiwiZ2V0SW1nRnJvbUNhY2hlIiwiaW1nIiwiY2FsbGJhY2siLCJwYXJhbSIsInNyYyIsIkltYWdlIiwib25sb2FkIiwiZSIsInRhcmdldCIsImdldENhbnZhc0Zyb21DYWNoZSIsIldlYkdMVXRpbCIsImNhbnZhcyIsIkRvbVV0aWwiLCJnZXRDb250ZXh0IiwiaW5pdFZhbHVlIiwidmFsdWUiLCJkZWZhdWx0cyIsInVuZGVmaW5lZCIsImlzQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJlbXB0eUFycmF5IiwiYXJyIiwidG9BcnJheSIsInNsaWNlQXJyYXkiLCJhcnIxIiwiaW5kZXgiLCJhcnIyIiwicHVzaCIsImdldFJhbmRGcm9tQXJyYXkiLCJmbG9vciIsInJhbmRvbSIsImVtcHR5T2JqZWN0Iiwib2JqIiwiaWdub3JlIiwiaW5kZXhPZiIsImNsYXNzQXBwbHkiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJGYWN0b3J5RnVuYyIsImJpbmQiLCJhcHBseSIsImNvbmNhdCIsIkltZ1V0aWwiLCJkZXN0cm95QWxsIiwiZGVzdHJveSIsImFzc2lnbiIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiaWRzTWFwIiwiUHVpZCIsIl9pbmRleCIsIl9jYWNoZSIsInR5cGUiLCJnZXRJZCIsInVpZCIsImdldElkRnJvbUNhY2hlIiwiaXNCb2R5IiwiaXNJbm5lciIsImdldFRhcmdldCIsIlBvb2wiLCJudW0iLCJ0b3RhbCIsImNhY2hlIiwiX3Byb3RvIiwiZ2V0IiwicGFyYW1zIiwicCIsIl9fcHVpZCIsInBvcCIsImNyZWF0ZU9yQ2xvbmUiLCJleHBpcmUiLCJnZXRDYWNoZSIsImNyZWF0ZSIsIlV0aWwiLCJjbG9uZSIsImdldENvdW50IiwiY291bnQiLCJTdGF0cyIsInByb3RvbiIsImNvbnRhaW5lciIsImVtaXR0ZXJJbmRleCIsInJlbmRlcmVySW5kZXgiLCJ1cGRhdGUiLCJib2R5IiwiYWRkIiwiZW1pdHRlciIsImdldEVtaXR0ZXIiLCJyZW5kZXJlciIsImdldFJlbmRlcmVyIiwic3RyIiwiZW1pdHRlcnMiLCJlbWl0U3BlZWQiLCJnZXRFbWl0dGVyUG9zIiwiaW5pdGlhbGl6ZXMiLCJjb25jYXRBcnIiLCJiZWhhdmlvdXJzIiwibmFtZSIsImdldENyZWF0ZWROdW1iZXIiLCJwb29sIiwiaW5uZXJIVE1MIiwiX3RoaXMiLCJjc3NUZXh0Iiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZyIsImNvbG9yIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwicmVuZGVyZXJzIiwicmVzdWx0IiwiY3Bvb2wiLCJyb3VuZCIsInJlbW92ZUNoaWxkIiwiRXZlbnREaXNwYXRjaGVyIiwiX2xpc3RlbmVycyIsImRpc3BhdGNoRXZlbnQiLCJoYXNFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJsaXN0ZW5lcnMiLCJoYW5kbGVyIiwiUEkiLCJJTkZJTklUWSIsIkluZmluaXR5IiwiTWF0aFV0aWwiLCJQSXgyIiwiUElfMiIsIlBJXzE4MCIsIk4xODBfUEkiLCJpc0luZmluaXR5IiwicmFuZG9tQVRvQiIsImlzSW50IiwicmFuZG9tRmxvYXRpbmciLCJjZW50ZXIiLCJmIiwicmFuZG9tQ29sb3IiLCJzbGljZSIsInJhbmRvbVpvbmUiLCJkaXNwbGF5IiwiayIsImRpZ2l0cyIsInBvdyIsImRlZ3JlZVRyYW5zZm9ybSIsInRvQ29sb3IxNiIsIkludGVncmF0aW9uIiwiY2FsY3VsYXRlIiwicGFydGljbGVzIiwidGltZSIsImRhbXBpbmciLCJldWxlckludGVncmF0ZSIsInBhcnRpY2xlIiwic2xlZXAiLCJvbGQiLCJjb3B5IiwidiIsIm11bHRpcGx5U2NhbGFyIiwibWFzcyIsImNsZWFyIiwiUHJvdG9uIiwiaW50ZWdyYXRpb25UeXBlIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzdGF0cyIsIkVVTEVSIiwiaW50ZWdyYXRvciIsIl9mcHMiLCJfaW50ZXJ2YWwiLCJERUZBVUxUX0lOVEVSVkFMIiwiYWRkUmVuZGVyZXIiLCJyZW5kZXIiLCJpbml0IiwicmVtb3ZlUmVuZGVyZXIiLCJyZW1vdmUiLCJhZGRFbWl0dGVyIiwicGFyZW50IiwiRU1JVFRFUl9BRERFRCIsInJlbW92ZUVtaXR0ZXIiLCJFTUlUVEVSX1JFTU9WRUQiLCJQUk9UT05fVVBEQVRFIiwiVVNFX0NMT0NLIiwiRGF0ZSIsImdldFRpbWUiLCJhbWVuZENoYW5nZVRhYnNCdWciLCJlbWl0dGVyc1VwZGF0ZSIsIlBST1RPTl9VUERBVEVfQUZURVIiLCJnZXRBbGxQYXJ0aWNsZXMiLCJkZXN0cm95QWxsRW1pdHRlcnMiLCJkZXN0cm95T3RoZXIiLCJzZXRUaW1lb3V0IiwiX2NyZWF0ZUNsYXNzIiwic2V0IiwiZnBzIiwiTUVBU1VSRSIsIlJLMiIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJSZ2IiLCJyIiwiZyIsInJlc2V0IiwiaGFzUHJvcCIsInNldFByb3AiLCJwcm9wcyIsInByb3AiLCJTcGFuIiwiZ2V0U3BhblZhbHVlIiwic2V0VmVjdG9yVmFsIiwiY29uZiIsImVhc2VMaW5lYXIiLCJlYXNlSW5RdWFkIiwiZWFzZU91dFF1YWQiLCJlYXNlSW5PdXRRdWFkIiwiZWFzZUluQ3ViaWMiLCJlYXNlT3V0Q3ViaWMiLCJlYXNlSW5PdXRDdWJpYyIsImVhc2VJblF1YXJ0IiwiZWFzZU91dFF1YXJ0IiwiZWFzZUluT3V0UXVhcnQiLCJlYXNlSW5TaW5lIiwiZWFzZU91dFNpbmUiLCJlYXNlSW5PdXRTaW5lIiwiZWFzZUluRXhwbyIsImVhc2VPdXRFeHBvIiwiZWFzZUluT3V0RXhwbyIsImVhc2VJbkNpcmMiLCJzcXJ0IiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsImdldEVhc2luZyIsImVhc2UiLCJWZWN0b3IyRCIsInNldFgiLCJzZXRZIiwiZ2V0R3JhZGllbnQiLCJhdGFuMiIsInciLCJhZGRWZWN0b3JzIiwiYWRkWFkiLCJzdWIiLCJzdWJWZWN0b3JzIiwiZGl2aWRlU2NhbGFyIiwibmVnYXRlIiwiZG90IiwibGVuZ3RoU3EiLCJub3JtYWxpemUiLCJkaXN0YW5jZVRvIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJkeCIsImR5IiwibGVycCIsImFscGhhIiwiZXF1YWxzIiwiUGFydGljbGUiLCJkYXRhIiwicmdiIiwiUHJvcFV0aWwiLCJnZXREaXJlY3Rpb24iLCJsaWZlIiwiYWdlIiwiZGVhZCIsInNwcml0ZSIsImVuZXJneSIsInJhZGl1cyIsInJvdGF0aW9uIiwiZWFzaW5nIiwicmVtb3ZlQWxsQmVoYXZpb3VycyIsImFwcGx5QmVoYXZpb3VycyIsIm1heCIsImFwcGx5QmVoYXZpb3VyIiwiYWRkQmVoYXZpb3VyIiwiYmVoYXZpb3VyIiwicGFyZW50cyIsImluaXRpYWxpemUiLCJhZGRCZWhhdmlvdXJzIiwicmVtb3ZlQmVoYXZpb3VyIiwiaGV4VG9SZ2IiLCJoIiwiaGV4MTYiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiZ2V0SGV4MTZGcm9tUGFydGljbGUiLCJOdW1iZXIiLCJQb2xhcjJEIiwiYWJzIiwic2V0UiIsInNldFRoYSIsInRvVmVjdG9yIiwiZ2V0WCIsImdldFkiLCJNYXQzIiwibWF0MyIsIm1hdCIsIkZsb2F0MzJBcnJheSIsIm1hdDEiLCJtYXQyIiwibXVsdGlwbHkiLCJpbnZlcnNlIiwiZCIsIm11bHRpcGx5VmVjMiIsIm0iLCJ2ZWMiLCJnZXRWYWx1ZSIsInNldFNwYW5WYWx1ZSIsInBhbiIsIkFycmF5U3BhbiIsIl9TcGFuIiwiX2luaGVyaXRzTG9vc2UiLCJfYXJyIiwiY3JlYXRlQXJyYXlTcGFuIiwiUmVjdGFuZ2xlIiwiYm90dG9tIiwicmlnaHQiLCJjb250YWlucyIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiSW5pdGlhbGl6ZSIsIkxpZmUiLCJfSW5pdGlhbGl6ZSIsImxpZmVQYW4iLCJab25lIiwidmVjdG9yIiwiY3Jvc3NUeXBlIiwiYWxlcnQiLCJnZXRQb3NpdGlvbiIsImNyb3NzaW5nIiwiUG9pbnRab25lIiwiX1pvbmUiLCJjb25zb2xlIiwiZXJyb3IiLCJQb3NpdGlvbiIsInpvbmUiLCJWZWxvY2l0eSIsInJwYW4iLCJ0aGFwYW4iLCJyUGFuIiwidGhhUGFuIiwibm9ybWFsaXplVmVsb2NpdHkiLCJ2ciIsInBvbGFyMmQiLCJNYXNzIiwibWFzc1BhbiIsIlJhZGl1cyIsIm9sZFJhZGl1cyIsIkJvZHkiLCJpbWFnZVRhcmdldCIsImlubmVyIiwiQmVoYXZpb3VyIiwibm9ybWFsaXplRm9yY2UiLCJmb3JjZSIsIm5vcm1hbGl6ZVZhbHVlIiwiRm9yY2UiLCJfQmVoYXZpb3VyIiwiZngiLCJmeSIsIkF0dHJhY3Rpb24iLCJ0YXJnZXRQb3NpdGlvbiIsInJhZGl1c1NxIiwiYXR0cmFjdGlvbkZvcmNlIiwiUmFuZG9tRHJpZnQiLCJkcmlmdFgiLCJkcmlmdFkiLCJkZWxheSIsInBhbkZvY2UiLCJHcmF2aXR5IiwiX0ZvcmNlIiwiQ29sbGlzaW9uIiwibmV3UG9vbCIsImNvbGxpc2lvblBvb2wiLCJkZWx0YSIsIm90aGVyUGFydGljbGUiLCJvdmVybGFwIiwidG90YWxNYXNzIiwiYXZlcmFnZU1hc3MxIiwiYXZlcmFnZU1hc3MyIiwiZGlzdGFuY2UiLCJDcm9zc1pvbmUiLCJBbHBoYSIsInNhbWUiLCJhbHBoYUEiLCJhbHBoYUIiLCJTY2FsZSIsInNjYWxlQSIsInNjYWxlQiIsIlJvdGF0ZSIsImluZmx1ZW5jZSIsInJvdGF0aW9uQSIsInJvdGF0aW9uQiIsIkNvbG9yIiwiY29sb3JBIiwiQ29sb3JVdGlsIiwiY29sb3JCIiwiQ0hBTkdJTkciLCJDeWNsb25lIiwiYW5nbGUiLCJzZXRBbmdsZUFuZEZvcmNlIiwic3BhbiIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FuZ2xlIiwiY3ljbG9uZSIsImdyYWRpZW50IiwiUmVwdWxzaW9uIiwiX0F0dHJhY3Rpb24iLCJHcmF2aXR5V2VsbCIsImNlbnRlclBvaW50IiwiZGlzdGFuY2VWZWMiLCJkaXN0YW5jZVNxIiwiZmFjdG9yIiwiYmluZEVtaXR0ZXIiLCJFbWl0dGVyIiwiX1BhcnRpY2xlIiwiZW1pdFRpbWUiLCJ0b3RhbFRpbWUiLCJyYXRlIiwiZW1pdCIsInN0b3BlZCIsImlzTmFOIiwic3RvcCIsInByZUVtaXQiLCJvbGRTdG9wZWQiLCJvbGRFbWl0VGltZSIsIm9sZFRvdGFsVGltZSIsInN0ZXAiLCJyZW1vdmVBbGxQYXJ0aWNsZXMiLCJhZGRTZWxmSW5pdGlhbGl6ZSIsImFkZEluaXRpYWxpemUiLCJfbGVuIiwiYXJndW1lbnRzIiwicmVzdCIsIkFycmF5IiwiX2tleSIsInJlbW92ZUluaXRpYWxpemUiLCJpbml0aWFsaXplciIsInJlbW92ZUFsbEluaXRpYWxpemVycyIsIl9sZW4yIiwiX2tleTIiLCJlbWl0dGluZyIsImludGVncmF0ZSIsImRpc3BhdGNoIiwiZXZlbnQiLCJiaW5kRXZlbnQiLCJjcmVhdGVQYXJ0aWNsZSIsInNldHVwUGFydGljbGUiLCJJbml0aWFsaXplVXRpbCIsIkJlaGF2aW91ckVtaXR0ZXIiLCJfRW1pdHRlciIsInNlbGZCZWhhdmlvdXJzIiwiYWRkU2VsZkJlaGF2aW91ciIsInJlbW92ZVNlbGZCZWhhdmlvdXIiLCJGb2xsb3dFbWl0dGVyIiwibW91c2VUYXJnZXQiLCJ3aW5kb3ciLCJfYWxsb3dFbWl0dGluZyIsImluaXRFdmVudEhhbmRsZXIiLCJfdGhpczIiLCJtb3VzZW1vdmVIYW5kbGVyIiwibW91c2Vtb3ZlIiwibW91c2Vkb3duSGFuZGxlciIsIm1vdXNlZG93biIsIm1vdXNldXBIYW5kbGVyIiwibW91c2V1cCIsImxheWVyWCIsImxheWVyWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaXNJbWFnZSIsIl9faXNJbWFnZSIsInRhZ05hbWUiLCJub2RlTmFtZSIsImlzU3RyaW5nIiwiQmFzZVJlbmRlcmVyIiwiZWxlbWVudCIsInN0cm9rZSIsImNpcmNsZUNvbmYiLCJpc0NpcmNsZSIsInNldFN0cm9rZSIsInRoaW5rbmVzcyIsIl9wcm90b25VcGRhdGVIYW5kbGVyIiwib25Qcm90b25VcGRhdGUiLCJfcHJvdG9uVXBkYXRlQWZ0ZXJIYW5kbGVyIiwib25Qcm90b25VcGRhdGVBZnRlciIsIl9lbWl0dGVyQWRkZWRIYW5kbGVyIiwib25FbWl0dGVyQWRkZWQiLCJfZW1pdHRlclJlbW92ZWRIYW5kbGVyIiwib25FbWl0dGVyUmVtb3ZlZCIsIl9wYXJ0aWNsZUNyZWF0ZWRIYW5kbGVyIiwib25QYXJ0aWNsZUNyZWF0ZWQiLCJfcGFydGljbGVVcGRhdGVIYW5kbGVyIiwib25QYXJ0aWNsZVVwZGF0ZSIsIl9wYXJ0aWNsZURlYWRIYW5kbGVyIiwib25QYXJ0aWNsZURlYWQiLCJDYW52YXNSZW5kZXJlciIsIl9CYXNlUmVuZGVyZXIiLCJidWZmZXJDYWNoZSIsImFkZEltZzJCb2R5IiwiVHlwZXMiLCJkcmF3Q2lyY2xlIiwiYnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYnVmQ29udGV4dCIsImdsb2JhbEFscGhhIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwicmVzdG9yZSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNpemUiLCJEb21SZW5kZXJlciIsImNyZWF0ZUJvZHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiYm9keVJlYWR5IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlQ2lyY2xlIiwiY3JlYXRlU3ByaXRlIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInVybCIsImJhY2tncm91bmRJbWFnZSIsIkVhc2VsUmVuZGVyZXIiLCJhZGRDaGlsZCIsInNjYWxlWCIsInNjYWxlWSIsImdyYXBoaWNzIiwicmVnWCIsInJlZ1kiLCJjcmVhdGVqcyIsIkdyYXBoaWNzIiwiYmVnaW5TdHJva2UiLCJiZWdpbkZpbGwiLCJzaGFwZSIsIlNoYXBlIiwiUGl4ZWxSZW5kZXJlciIsInJlY3RhbmdsZSIsImltYWdlRGF0YSIsImNyZWF0ZUltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInNldFBpeGVsIiwiUElYSUNsYXNzIiwiUGl4aVJlbmRlcmVyIiwic2V0Q29sb3IiLCJibGVuZE1vZGUiLCJzZXRQSVhJIiwiUElYSSIsIlNwcml0ZSIsImNyZWF0ZUZyb21JbWFnZSIsImZyb20iLCJmcm9tSW1hZ2UiLCJ0aW50IiwiYW5jaG9yIiwiZW5kRmlsbCIsIk1TdGFjayIsIm1hdHMiLCJ0b3AiLCJXZWJHTFJlbmRlcmVyIiwiZ2wiLCJhbnRpYWxpYXMiLCJzdGVuY2lsIiwiZGVwdGgiLCJpbml0VmFyIiwic2V0TWF4UmFkaXVzIiwiaW5pdFNoYWRlcnMiLCJpbml0QnVmZmVycyIsImJsZW5kRXF1YXRpb24iLCJGVU5DX0FERCIsImJsZW5kRnVuYyIsIlNSQ19BTFBIQSIsIk9ORV9NSU5VU19TUkNfQUxQSEEiLCJlbmFibGUiLCJCTEVORCIsInVtYXQiLCJzbWF0IiwibXN0YWNrIiwidmlld3BvcnQiLCJjaXJjbGVDYW52YXNVUkwiLCJnZXRWZXJ0ZXhTaGFkZXIiLCJ2c1NvdXJjZSIsImdldEZyYWdtZW50U2hhZGVyIiwiZnNTb3VyY2UiLCJ0ZXh0dXJlYnVmZmVycyIsIkEiLCJCIiwiZ2V0U2hhZGVyIiwiZnMiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJWRVJURVhfU0hBREVSIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiZ2V0U2hhZGVySW5mb0xvZyIsImZyYWdtZW50U2hhZGVyIiwidmVydGV4U2hhZGVyIiwic3Byb2dyYW0iLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJ1c2VQcm9ncmFtIiwidnBhIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJ0Y2EiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInRNYXRVbmlmb3JtIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwic2FtcGxlclVuaWZvcm0iLCJ1c2VUZXgiLCJ1bmlmb3JtMWkiLCJ2cyIsImlkeCIsInVuaXRJQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIlVpbnQxNkFycmF5IiwiU1RBVElDX0RSQVciLCJpZHMiLCJ1bml0STMzIiwic3RyaXBCdWZmZXIiLCJyYWlkdXMiLCJjaXJjbGVDYW52YXNSYWRpdXMiLCJ0b0RhdGFVUkwiLCJkcmF3SW1nMkNhbnZhcyIsIl93IiwiX2giLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX3NjYWxlWCIsIl9zY2FsZVkiLCJjcmVhdGVUZXh0dXJlIiwidGV4dHVyZSIsInZjQnVmZmVyIiwidGNCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJiaW5kVGV4dHVyZSIsIlRFWFRVUkVfMkQiLCJ0ZXhJbWFnZTJEIiwiUkdCQSIsIlVOU0lHTkVEX0JZVEUiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9NQUdfRklMVEVSIiwiTElORUFSIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiTElORUFSX01JUE1BUF9ORUFSRVNUIiwiZ2VuZXJhdGVNaXBtYXAiLCJ0ZXh0dXJlTG9hZGVkIiwidGV4dHVyZVdpZHRoIiwidGV4dHVyZUhlaWdodCIsInRtYXQiLCJpbWF0Iiwib2xkU2NhbGUiLCJ1cGRhdGVNYXRyaXgiLCJ1bmlmb3JtM2YiLCJ1bmlmb3JtTWF0cml4M2Z2IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJtb3ZlT3JpZ2luTWF0cml4IiwidHJhbnNsYXRpb25NYXRyaXgiLCJhbmdlbCIsInJvdGF0aW9uTWF0cml4Iiwic2NhbGVNYXRyaXgiLCJtYXRyaXgiLCJDdXN0b21SZW5kZXJlciIsIkxpbmVab25lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkaXJlY3Rpb24iLCJtaW54IiwibWluIiwibWlueSIsIm1heHgiLCJtYXh5IiwieHh5eSIsImdldExlbmd0aCIsIkMiLCJEIiwiZ2V0RGlzdGFuY2UiLCJnZXRTeW1tZXRyaWMiLCJ0aGEyIiwidGhhMSIsIm9sZHgiLCJvbGR5IiwicmFuZ2VPdXQiLCJDaXJjbGVab25lIiwicmFuZG9tUmFkaXVzIiwic2V0Q2VudGVyIiwiUmVjdFpvbmUiLCJJbWFnZVpvbmUiLCJ2ZWN0b3JzIiwic2V0VmVjdG9ycyIsImoiLCJsZW5ndGgxIiwibGVuZ3RoMiIsImdldEJvdW5kIiwiZ2V0Q29sb3IiLCJmdW5jIiwiZ2V0U3R5bGUiLCJkcmF3Wm9uZSIsIm1vdmVUbyIsImxpbmVUbyIsImRyYXdSZWN0IiwiZHJhd0VtaXR0ZXIiLCJWZWN0b3IiLCJQb2xhciIsImdldFNwYW4iLCJJbml0IiwiTCIsIlAiLCJWIiwiTSIsIlIiLCJGIiwiUkQiLCJHIiwiUyIsIldlYkdsUmVuZGVyZXIiLCJEZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQkFBZTtFQUNiO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7SUFDRUEsSUFBSSxFQUFBLFNBQUFBLElBQUNDLENBQUFBLE1BQU0sRUFBRTtFQUNYLElBQUEsT0FBTyxDQUFDQSxNQUFNLEdBQUlBLE1BQU0sR0FBRyxDQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3JDO0VBRUQ7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