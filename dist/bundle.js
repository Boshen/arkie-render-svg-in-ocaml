'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;
/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}
/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity === 0 ? 1 : arity;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array_sub(args, arity$1, -d | 0);
      _f = f.apply(null, caml_array_sub(args, 0, arity$1));
      continue ;
      
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}
/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}
/* No side effect */

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
/* No side effect */

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}
/* No side effect */

/* node_std_output Not a pure module */

/* No side effect */

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);
/* imul Not a pure module */

var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);
/* repeat Not a pure module */

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */2147483647,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  }}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div$1(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div$1(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div$1(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div$1(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div$1(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            }            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          }          return res;
        }
      }
      
    }
    
  }}

function div_mod(self, other) {
  var quotient = div$1(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0 || match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}
/* two_ptr_32_dbl Not a pure module */

function caml_failwith(s) {
  throw [
        failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    }  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                }                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            }            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  }}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = discard_sign(x$1);
          var match$1 = div_mod(y, wbase);
          var quotient = add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          }        } else {
          var match$3 = div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          }        }
        break;
    case 1 : 
        s = to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = discard_sign(x$1);
          var match$5 = div_mod(y$1, wbase$1);
          var match$6 = div_mod(add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = add(add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          }        } else {
          var match$8 = div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          }        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              }            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return _2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;
/* float_of_string Not a pure module */

function caml_create_string(len) {
  if (len < 0) {
    throw [
          invalid_argument,
          "String.create"
        ];
  } else {
    var result = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      result[i] = /* "\000" */0;
    }
    return result;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }    return s;
  }
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}
/* No side effect */

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}
/* No side effect */

/* not_implemented Not a pure module */

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}
/* No side effect */

var Exit = create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}
/* No side effect */

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1 === 0) {
          return l$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        }
      } else {
        throw [
              failure,
              "nth"
            ];
      }
    }  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }}

function flatten(param) {
  if (param) {
    return $at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (_1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw not_found;
    }
  }}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (_1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      }    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (_1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
        
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
        
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  }}

var concat = flatten;

var filter = find_all;
/* No side effect */

var $$Error = create("Js_exn.Error");
/* No side effect */

function map$1(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_make_vect(l, _1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, a[i]);
    }
    return r;
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  }}

function of_list(l) {
  if (l) {
    var a = caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    }  } else {
    return /* array */[];
  }
}

var Bottom = create("Array.Bottom");
/* No side effect */

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$1 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos$1, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$2 + ']',
    rsCombo$2 = '[' + rsComboRange$3 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

function createFontFace(fontFamily) {
  return function (blob) {
    var _document = document,
        head = _document.head;

    var fontUrl = URL.createObjectURL(blob),
        fontFace = '@font-face { font-family:\'' + fontFamily + '\'; src:url(\'' + fontUrl + '\') format(\'woff\'); }',
        cssId = snakeCase(fontFamily),
        styleList = document.getElementsByName(cssId),
        style = document.createElement('style');

    if (styleList.length > 0) {
      for (var i = 0; i < styleList.length; i++) {
        head.removeChild(styleList[i]);
      }
    }

    style.type = 'text/css';
    style.setAttribute("name", cssId);

    if (style.styleSheet) {
      style.styleSheet.cssText = fontFace;
    } else if (document.getBoxObjectFor) {
      style.innerHTML = fontFace;
    } else {
      style.appendChild(document.createTextNode(fontFace));
    }

    head.appendChild(style);
  };
}
function getUrl(uri, fontFamily) {
  return uri + camelCase(fontFamily).toLowerCase() + '-regular.woff';
}
function createGoogleFontLink(font) {
  var url = getUrl('//youziku.arkie.cn/webfonts/en/', font);
  fetch(url, { headers: { responseType: 'blob' } }).then(function (res) {
    return res.blob();
  }).then(createFontFace(font));
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = caml_create_string(4);
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return bytes_to_string(s);
    case 2 : 
        var s$1 = caml_create_string(1);
        s$1[0] = c;
        return bytes_to_string(s$1);
    
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}
/* No side effect */

function make(n, c) {
  var s = caml_create_string(n);
  caml_fill_string(s, 0, n, c);
  return s;
}

function copy$1(s) {
  var len = s.length;
  var r = caml_create_string(len);
  caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function sub$2(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = caml_create_string(len);
    caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return bytes_to_string(sub$2(b, ofs, len));
}

function blit$1(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function escaped$1(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy$1(s);
  } else {
    var s$prime = caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map$2(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, s[i]);
    }
    return r;
  }
}

function uppercase$1(s) {
  return map$2(uppercase, s);
}
/* No side effect */

function concat$3(sep, l) {
  if (l) {
    var hd$$1 = l[0];
    var num = [0];
    var len = [0];
    iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = caml_create_string(len[0] + imul(sep.length, num[0] - 1 | 0) | 0);
    caml_blit_string(hd$$1, 0, r, 0, hd$$1.length);
    var pos = [hd$$1.length];
    iter((function (s) {
            caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return bytes_to_string(r);
  } else {
    return "";
  }
}

function escaped$2(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return /* false */0;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return /* true */1;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (switcher > 57 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        } else {
          return /* true */1;
        }
      }
    }  };
  if (needs_escape(0)) {
    return bytes_to_string(escaped$1(bytes_of_string(s)));
  } else {
    return s;
  }
}

function uppercase$2(s) {
  return bytes_to_string(uppercase$1(bytes_of_string(s)));
}

var blit$2 = blit_string;
/* No side effect */

function create$1(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = caml_create_string(n$1);
  return /* record */[
          /* buffer */s,
          /* position */0,
          /* length */n$1,
          /* initial_buffer */s
        ];
}

function contents(b) {
  return sub_string(b[/* buffer */0], 0, b[/* position */1]);
}

function resize(b, more) {
  var len = b[/* length */2];
  var new_len = len;
  while((b[/* position */1] + more | 0) > new_len) {
    new_len = (new_len << 1);
  }  var new_buffer = caml_create_string(new_len);
  blit$1(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
  b[/* buffer */0] = new_buffer;
  b[/* length */2] = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b[/* position */1];
  if (pos >= b[/* length */2]) {
    resize(b, 1);
  }
  b[/* buffer */0][pos] = c;
  b[/* position */1] = pos + 1 | 0;
  return /* () */0;
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}
/* No side effect */

/* No side effect */

function caml_classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}
/* No side effect */

function buffer_check_size(buf, overhead) {
  var len = buf[/* bytes */1].length;
  var min_len = buf[/* ind */0] + overhead | 0;
  if (min_len > len) {
    var new_len = caml_int_max((len << 1), min_len);
    var new_str = caml_create_string(new_len);
    blit$1(buf[/* bytes */1], 0, new_str, 0, len);
    buf[/* bytes */1] = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf[/* bytes */1][buf[/* ind */0]] = c;
  buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  blit$2(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
  buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "f" */102;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "e" */101;
    case 6 : 
    case 7 : 
    case 8 : 
        return /* "E" */69;
    case 9 : 
    case 10 : 
    case 11 : 
        return /* "g" */103;
    case 12 : 
    case 13 : 
    case 14 : 
        return /* "G" */71;
    case 15 : 
        return /* "F" */70;
    
  }
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case 1 : 
    case 4 : 
    case 7 : 
    case 10 : 
    case 13 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
    case 8 : 
    case 11 : 
    case 14 : 
        return buffer_add_char(buf, /* " " */32);
    case 0 : 
    case 3 : 
    case 6 : 
    case 9 : 
    case 12 : 
    case 15 : 
        return /* () */0;
    
  }
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case 0 : 
          return "@]";
      case 1 : 
          return "@}";
      case 2 : 
          return "@?";
      case 3 : 
          return "@\n";
      case 4 : 
          return "@.";
      case 5 : 
          return "@@";
      case 6 : 
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case 0 : 
      case 1 : 
          return formatting_lit[0];
      case 2 : 
          return "@" + bytes_to_string(make(1, formatting_lit[0]));
      
    }
  }
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case 0 : 
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
            case 1 : 
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
            case 2 : 
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
            case 3 : 
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
            case 4 : 
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
            case 5 : 
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
            case 6 : 
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
            case 7 : 
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
            case 8 : 
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
            case 9 : 
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
            case 11 : 
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
            case 12 : 
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
            case 14 : 
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
            
      }
    }
  }}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [symm(param[0])]);
      case 1 : 
          return /* String_ty */__(1, [symm(param[0])]);
      case 2 : 
          return /* Int_ty */__(2, [symm(param[0])]);
      case 3 : 
          return /* Int32_ty */__(3, [symm(param[0])]);
      case 4 : 
          return /* Nativeint_ty */__(4, [symm(param[0])]);
      case 5 : 
          return /* Int64_ty */__(5, [symm(param[0])]);
      case 6 : 
          return /* Float_ty */__(6, [symm(param[0])]);
      case 7 : 
          return /* Bool_ty */__(7, [symm(param[0])]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case 9 : 
          return /* Format_subst_ty */__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [symm(param[0])]);
      case 11 : 
          return /* Theta_ty */__(11, [symm(param[0])]);
      case 12 : 
          return /* Any_ty */__(12, [symm(param[0])]);
      case 13 : 
          return /* Reader_ty */__(13, [symm(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function () {
                      _1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case 1 : 
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function () {
                      _1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case 2 : 
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function () {
                      _1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case 3 : 
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function () {
                      _1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case 4 : 
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function () {
                      _1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case 5 : 
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function () {
                      _1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case 6 : 
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function () {
                      _1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case 7 : 
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function () {
                      _1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case 8 : 
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function () {
                      _1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case 9 : 
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function () {
                      _1(fa$9, /* Refl */0);
                      _1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ga, /* Refl */0);
                      _1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed, /* Refl */0);
                      _1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(jd, /* Refl */0);
                      _1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 10 : 
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function () {
                      _1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case 11 : 
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function () {
                      _1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case 12 : 
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function () {
                      _1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case 13 : 
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function () {
                      _1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 14 : 
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function () {
                      _1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit$$1 = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case 8 : 
            exit$$1 = 6;
            break;
        case 9 : 
            exit$$1 = 7;
            break;
        case 10 : 
            exit$$1 = 1;
            break;
        case 11 : 
            exit$$1 = 2;
            break;
        case 12 : 
            exit$$1 = 3;
            break;
        case 13 : 
            exit$$1 = 4;
            break;
        case 14 : 
            exit$$1 = 5;
            break;
        default:
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  816,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case 0 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 0 : 
                  return /* Char_ty */__(0, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 1 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 1 : 
                  return /* String_ty */__(1, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 2 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 2 : 
                  return /* Int_ty */__(2, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 3 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 3 : 
                  return /* Int32_ty */__(3, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 4 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 4 : 
                  return /* Nativeint_ty */__(4, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 5 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 5 : 
                  return /* Int64_ty */__(5, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 6 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 6 : 
                  return /* Float_ty */__(6, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 7 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 7 : 
                  return /* Bool_ty */__(7, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 8 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    802,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  return /* Format_arg_ty */__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
            }
          }
          break;
      case 9 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    812,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  _1(match[1], /* Refl */0);
                  _1(match[3], /* Refl */0);
                  return /* Format_subst_ty */__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
            }
          }
          break;
      case 10 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          } else if (ty2.tag === 10) {
            return /* Alpha_ty */__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          }
      case 11 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    784,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  return /* Theta_ty */__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
            }
          }
          break;
      case 12 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    788,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  return /* Any_ty */__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
            }
          }
          break;
      case 13 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    792,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  return /* Reader_ty */__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
            }
          }
          break;
      case 14 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    797,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  return /* Ignored_reader_ty */__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit$$1) {
    case 1 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                781,
                21
              ]
            ];
    case 2 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                785,
                21
              ]
            ];
    case 3 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                789,
                19
              ]
            ];
    case 4 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                793,
                22
              ]
            ];
    case 5 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                798,
                30
              ]
            ];
    case 6 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                803,
                26
              ]
            ];
    case 7 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                813,
                28
              ]
            ];
    case 8 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                817,
                23
              ]
            ];
    
  }
}

var Type_mismatch = create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === 2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === 2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */__(0, [match[0]]),
                    match[1]
                  ];
          }
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
      case 2 : 
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === 1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 3 : 
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === 1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 4 : 
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === 2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 5 : 
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === 3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 6 : 
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === 4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 7 : 
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === 5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 8 : 
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === 6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$23 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */__(9, [match$23[0]]),
                    match$23[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 10 : 
          var match$24 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */__(10, [match$24[0]]),
                  match$24[1]
                ];
      case 11 : 
          var match$25 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */__(11, [
                      fmt[0],
                      match$25[0]
                    ]),
                  match$25[1]
                ];
      case 12 : 
          var match$26 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */__(12, [
                      fmt[0],
                      match$26[0]
                    ]),
                  match$26[1]
                ];
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$27 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$27[0]
                      ]),
                    match$27[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub_fmtty1 = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(fmt[1])], /* Fmtty_EBB */[erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$28 = type_format_gen(fmt[2], erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$28[0]
                      ]),
                    match$28[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 15 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$29 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */__(15, [match$29[0]]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 16 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$30 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */__(16, [match$30[0]]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 17 : 
          var match$31 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */__(17, [
                      fmt[0],
                      match$31[0]
                    ]),
                  match$31[1]
                ];
      case 18 : 
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$32 = formatting_gen[0];
            var match$33 = type_format_gen(match$32[0], fmtty0);
            var match$34 = type_format_gen(fmt0, match$33[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_box */__(1, [/* Format */[
                              match$33[0],
                              match$32[1]
                            ]]),
                        match$34[0]
                      ]),
                    match$34[1]
                  ];
          } else {
            var match$35 = formatting_gen[0];
            var match$36 = type_format_gen(match$35[0], fmtty0);
            var match$37 = type_format_gen(fmt0, match$36[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_tag */__(0, [/* Format */[
                              match$36[0],
                              match$35[1]
                            ]]),
                        match$37[0]
                      ]),
                    match$37[1]
                  ];
          }
      case 19 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$38 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */__(19, [match$38[0]]),
                    match$38[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 20 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$39 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */__(20, [
                        fmt[0],
                        fmt[1],
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 21 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$40 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */__(21, [
                        fmt[0],
                        match$40[0]
                      ]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 23 : 
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === 3) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === 14) {
                var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */__(23, [
                            /* Ignored_reader */3,
                            match$41[0]
                          ]),
                        match$41[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case 7 : 
                  return type_ignored_param_one(/* Ignored_format_arg */__(7, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case 8 : 
                  var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$43 = match$42[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */__(23, [
                              /* Ignored_format_subst */__(8, [
                                  ign[0],
                                  match$42[0]
                                ]),
                              match$43[0]
                            ]),
                          match$43[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case 22 : 
      case 24 : 
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */__(0, [match[0]]),
                    match[1]
                  ];
          }
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 2 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 3 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 4 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 5 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 6 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 7 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 8 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub2_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            _1(match$9[1], /* Refl */0);
            _1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 10 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 11 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 12 : 
          throw Type_mismatch;
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
      
    }
  }
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var width$1 = abs(width);
  var padty$1 = width < 0 ? /* Left */0 : padty;
  if (width$1 <= len) {
    return str;
  } else {
    var res = make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case 0 : 
          blit$2(str, 0, res, 0, len);
          break;
      case 1 : 
          blit$2(str, 0, res, width$1 - len | 0, len);
          break;
      case 2 : 
          if (len > 0 && (get(str, 0) === /* "+" */43 || get(str, 0) === /* "-" */45 || get(str, 0) === /* " " */32)) {
            res[0] = get(str, 0);
            blit$2(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && get(str, 0) === /* "0" */48 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
            res[1] = get(str, 1);
            blit$2(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            blit$2(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = abs(prec);
  var len = str.length;
  var c = get(str, 0);
  var exit$$1 = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit$$1 = 2;
      }
    } else if (c >= 65) {
      exit$$1 = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 : 
        case 2 : 
            exit$$1 = 1;
            break;
        case 1 : 
        case 3 : 
        case 4 : 
            return str;
        case 5 : 
            if ((prec$1 + 2 | 0) > len && len > 1 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
              var res = make(prec$1 + 2 | 0, /* "0" */48);
              res[1] = get(str, 1);
              blit$2(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return bytes_to_string(res);
            } else {
              exit$$1 = 2;
            }
            break;
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
            exit$$1 = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit$$1 = 1;
  }
  switch (exit$$1) {
    case 1 : 
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = make(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          blit$2(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return bytes_to_string(res$1);
        } else {
          return str;
        }
    case 2 : 
        if (prec$1 > len) {
          var res$2 = make(prec$1, /* "0" */48);
          blit$2(str, 0, res$2, prec$1 - len | 0, len);
          return bytes_to_string(res$2);
        } else {
          return str;
        }
    
  }
}

function string_to_caml_string(str) {
  return concat$3(escaped$2(str), /* :: */[
              "\"",
              /* :: */[
                "\"",
                /* [] */0
              ]
            ]);
}

function format_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
        return "%d";
    case 1 : 
        return "%+d";
    case 2 : 
        return "% d";
    case 3 : 
        return "%i";
    case 4 : 
        return "%+i";
    case 5 : 
        return "% i";
    case 6 : 
        return "%x";
    case 7 : 
        return "%#x";
    case 8 : 
        return "%X";
    case 9 : 
        return "%#X";
    case 10 : 
        return "%o";
    case 11 : 
        return "%#o";
    case 12 : 
        return "%u";
    
  }
}

function format_of_aconv(iconv, c) {
  var seps;
  switch (iconv) {
    case 0 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 1 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 2 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 3 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 4 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 5 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 6 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 7 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 8 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 9 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 10 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 11 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 12 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "u",
            /* [] */0
          ]
        ];
        break;
    
  }
  return concat$3(bytes_to_string(make(1, c)), seps);
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = /* record */[
      /* ind */0,
      /* bytes */caml_create_string(16)
    ];
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, String(prec$1));
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
}

function convert_nativeint(iconv, n) {
  return caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
}

function convert_int64(iconv, n) {
  return caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
}

function convert_float(fconv, prec, x) {
  var prec$1 = abs(prec);
  var str = caml_format_float(format_of_fconv(fconv, prec$1), x);
  if (fconv !== /* Float_F */15) {
    return str;
  } else {
    var len = str.length;
    var is_valid = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return /* false */0;
        } else {
          var match = get(str, i);
          var switcher = match - 46 | 0;
          if (switcher > 23 || switcher < 0) {
            if (switcher !== 55) {
              _i = i + 1 | 0;
              continue ;
              
            } else {
              return /* true */1;
            }
          } else if (switcher > 22 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      }    };
    var match = caml_classify_float(x);
    if (match !== 3) {
      if (match >= 4) {
        return "nan";
      } else if (is_valid(0)) {
        return str;
      } else {
        return str + ".";
      }
    } else if (x < 0.0) {
      return "neg_infinity";
    } else {
      return "infinity";
    }
  }
}

function format_caml_char(c) {
  return concat$3(escaped(c), /* :: */[
              "'",
              /* :: */[
                "'",
                /* [] */0
              ]
            ]);
}

function string_of_fmtty(fmtty) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */caml_create_string(16)
  ];
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return _2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case 0 : 
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case 1 : 
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case 2 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case 3 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case 4 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case 5 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case 6 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case 7 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case 8 : 
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case 9 : 
            var rest$2 = fmt[0];
            return (function(k,acc,rest$2){
            return function (b) {
              return make_printf(k, o, /* Acc_data_string */__(4, [
                            acc,
                            b ? "true" : "false"
                          ]), rest$2);
            }
            }(k,acc,rest$2));
        case 10 : 
            _fmt = fmt[0];
            _acc = /* Acc_flush */__(7, [acc]);
            continue ;
            case 11 : 
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 12 : 
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 13 : 
            var rest$3 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$3,ty){
            return function () {
              return make_printf(k, o, /* Acc_data_string */__(4, [
                            acc,
                            ty
                          ]), rest$3);
            }
            }(k,acc,rest$3,ty));
        case 14 : 
            var rest$4 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$4){
            return function (param) {
              return make_printf(k, o, acc, concat_fmt(recast(param[0], fmtty), rest$4));
            }
            }(k,acc,fmtty,rest$4));
        case 15 : 
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            (function (o) {
                                return _2(f, o, x);
                              })
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case 16 : 
            var rest$6 = fmt[0];
            return (function(k,acc,rest$6){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            f
                          ]), rest$6);
            }
            }(k,acc,rest$6));
        case 17 : 
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 18 : 
            var match = fmt[0];
            if (match.tag) {
              var rest$7 = fmt[1];
              var k$prime = (function(k,acc,rest$7){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_box */__(1, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
              
            } else {
              var rest$8 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$8){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_tag */__(0, [kacc])
                            ]), rest$8);
              }
              }(k,acc,rest$8));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
              
            }
        case 19 : 
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    1449,
                    4
                  ]
                ];
        case 20 : 
            var rest$9 = fmt[2];
            var new_acc = /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$9,new_acc){
            return function () {
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,rest$9,new_acc));
        case 21 : 
            var rest$10 = fmt[1];
            return (function(k,acc,rest$10){
            return function (n) {
              var new_acc_001 = caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case 22 : 
            var rest$11 = fmt[0];
            return (function(k,acc,rest$11){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$11);
            }
            }(k,acc,rest$11));
        case 23 : 
            var k$2 = k;
            var o$2 = o;
            var acc$2 = acc;
            var ign = fmt[0];
            var fmt$2 = fmt[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        1517,
                        39
                      ]
                    ];
              } else {
                return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
              }
            } else if (ign.tag === 8) {
              return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
            } else {
              return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
            }
        case 24 : 
            return make_custom(k, o, acc, fmt[2], fmt[0], _1(fmt[1], /* () */0));
        
      }
    }
  }}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case 0 : 
          var rest = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case 1 : 
          var rest$1 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case 2 : 
          var rest$2 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case 3 : 
          var rest$3 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case 4 : 
          var rest$4 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case 5 : 
          var rest$5 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case 6 : 
          var rest$6 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case 7 : 
          var rest$7 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case 8 : 
          var rest$8 = fmtty[1];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case 9 : 
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function () {
              return make_from_fmtty(k, o, acc, concat_fmtty(ty, rest$9), fmt);
            });
      case 10 : 
          var rest$10 = fmtty[0];
          return (function (_, _$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case 11 : 
          var rest$11 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case 12 : 
          var rest$12 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case 13 : 
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  1540,
                  31
                ]
              ];
      case 14 : 
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  1541,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_string_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = _1(trans, x);
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = _2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, _2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, _1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit$$1 = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
        case 2 : 
        case 4 : 
            exit$$1 = 1;
            break;
        case 3 : 
        case 5 : 
            exit$$1 = 2;
            break;
        case 6 : 
            strput_acc(b, acc[0]);
            return add_string(b, _1(acc[1], /* () */0));
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            strput_acc(b, acc[0]);
            throw [
                  invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit$$1) {
      case 1 : 
          strput_acc(b, acc[0]);
          return add_string(b, acc[1]);
      case 2 : 
          strput_acc(b, acc[0]);
          return add_char(b, acc[1]);
      
    }
  }}
/* No side effect */

function ksprintf(k, param) {
  var k$prime = function (_, acc) {
    var buf = create$1(64);
    strput_acc(buf, acc);
    return _1(k, contents(buf));
  };
  return make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}
/* No side effect */

function fromList(entries) {
  var dict = { };
  var _param = entries;
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      dict[match[0]] = match[1];
      _param = param[1];
      continue ;
      
    } else {
      return dict;
    }
  }}
/* unsafeDeleteKey Not a pure module */

var out_of_memory$1 = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error$1 = /* tuple */[
  "Sys_error",
  -1
];

var failure$1 = /* tuple */[
  "Failure",
  -2
];

var invalid_argument$1 = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file$1 = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero$1 = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found$1 = /* tuple */[
  "Not_found",
  -6
];

var match_failure$1 = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow$1 = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io$1 = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure$1 = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module$1 = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory$1.tag = 248;

sys_error$1.tag = 248;

failure$1.tag = 248;

invalid_argument$1.tag = 248;

end_of_file$1.tag = 248;

division_by_zero$1.tag = 248;

not_found$1.tag = 248;

match_failure$1.tag = 248;

stack_overflow$1.tag = 248;

sys_blocked_io$1.tag = 248;

assert_failure$1.tag = 248;

undefined_recursive_module$1.tag = 248;

var out_of_memory_1 = out_of_memory$1;
var sys_error_1 = sys_error$1;
var failure_1 = failure$1;
var invalid_argument_1 = invalid_argument$1;
var end_of_file_1 = end_of_file$1;
var division_by_zero_1 = division_by_zero$1;
var not_found_1 = not_found$1;
var match_failure_1 = match_failure$1;
var stack_overflow_1 = stack_overflow$1;
var sys_blocked_io_1 = sys_blocked_io$1;
var assert_failure_1 = assert_failure$1;
var undefined_recursive_module_1 = undefined_recursive_module$1;
/*  Not a pure module */

var caml_builtin_exceptions = {
	out_of_memory: out_of_memory_1,
	sys_error: sys_error_1,
	failure: failure_1,
	invalid_argument: invalid_argument_1,
	end_of_file: end_of_file_1,
	division_by_zero: division_by_zero_1,
	not_found: not_found_1,
	match_failure: match_failure_1,
	stack_overflow: stack_overflow_1,
	sys_blocked_io: sys_blocked_io_1,
	assert_failure: assert_failure_1,
	undefined_recursive_module: undefined_recursive_module_1
};

function caml_array_sub$1(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function len$1(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
      
    } else {
      return acc;
    }
  }}

function fill$4(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      }      _l = l[1];
      _i = k;
      continue ;
      
    } else {
      return /* () */0;
    }
  }}

function caml_array_concat$1(l) {
  var v = len$1(0, l);
  var result = new Array(v);
  fill$4(result, 0, l);
  return result;
}

function caml_array_set$1(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get$1(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect$1(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect$1(len) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = 0;
  }
  return b;
}

function caml_array_blit$1(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

var caml_array_sub_1 = caml_array_sub$1;
var caml_array_concat_1 = caml_array_concat$1;
var caml_make_vect_1 = caml_make_vect$1;
var caml_make_float_vect_1 = caml_make_float_vect$1;
var caml_array_blit_1 = caml_array_blit$1;
var caml_array_get_1 = caml_array_get$1;
var caml_array_set_1 = caml_array_set$1;
/* No side effect */

var caml_array = {
	caml_array_sub: caml_array_sub_1,
	caml_array_concat: caml_array_concat_1,
	caml_make_vect: caml_make_vect_1,
	caml_make_float_vect: caml_make_float_vect_1,
	caml_array_blit: caml_array_blit_1,
	caml_array_get: caml_array_get_1,
	caml_array_set: caml_array_set_1
};

function app$1(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity === 0 ? 1 : arity;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array.caml_array_sub(args, arity$1, -d | 0);
      _f = f.apply(null, caml_array.caml_array_sub(args, 0, arity$1));
      continue ;
      
    } else {
      return (function(f,args){
      return function (x) {
        return app$1(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }}

function curry_1$1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1$1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1$1(o, a0, arity);
  }
}

function __1$1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1$1(o, a0);
      });
  }
}

function curry_2$1(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app$1(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2$1(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2$1(o, a0, a1, arity);
  }
}

function __2$1(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2$1(o, a0, a1);
      });
  }
}

function curry_3$1(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3$1(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3$1(o, a0, a1, a2, arity);
  }
}

function __3$1(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3$1(o, a0, a1, a2);
      });
  }
}

function curry_4$1(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app$1(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4$1(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4$1(o, a0, a1, a2, a3, arity);
  }
}

function __4$1(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4$1(o, a0, a1, a2, a3);
      });
  }
}

function curry_5$1(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app$1(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app$1(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5$1(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5$1(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5$1(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5$1(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6$1(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app$1(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app$1(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app$1(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6$1(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6$1(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6$1(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6$1(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7$1(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app$1(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app$1(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app$1(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app$1(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7$1(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7$1(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7$1(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7$1(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8$1(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app$1(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app$1(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app$1(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app$1(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app$1(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app$1(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app$1(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app$1(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8$1(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8$1(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8$1(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8$1(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

var app_1 = app$1;
var curry_1_1 = curry_1$1;
var _1_1 = _1$1;
var __1_1 = __1$1;
var curry_2_1 = curry_2$1;
var _2_1 = _2$1;
var __2_1 = __2$1;
var curry_3_1 = curry_3$1;
var _3_1 = _3$1;
var __3_1 = __3$1;
var curry_4_1 = curry_4$1;
var _4_1 = _4$1;
var __4_1 = __4$1;
var curry_5_1 = curry_5$1;
var _5_1 = _5$1;
var __5_1 = __5$1;
var curry_6_1 = curry_6$1;
var _6_1 = _6$1;
var __6_1 = __6$1;
var curry_7_1 = curry_7$1;
var _7_1 = _7$1;
var __7_1 = __7$1;
var curry_8_1 = curry_8$1;
var _8_1 = _8$1;
var __8_1 = __8$1;
/* No side effect */

var curry = {
	app: app_1,
	curry_1: curry_1_1,
	_1: _1_1,
	__1: __1_1,
	curry_2: curry_2_1,
	_2: _2_1,
	__2: __2_1,
	curry_3: curry_3_1,
	_3: _3_1,
	__3: __3_1,
	curry_4: curry_4_1,
	_4: _4_1,
	__4: __4_1,
	curry_5: curry_5_1,
	_5: _5_1,
	__5: __5_1,
	curry_6: curry_6_1,
	_6: _6_1,
	__6: __6_1,
	curry_7: curry_7_1,
	_7: _7_1,
	__7: __7_1,
	curry_8: curry_8_1,
	_8: _8_1,
	__8: __8_1
};

function __$1(tag, block) {
  block.tag = tag;
  return block;
}

var ___1 = __$1;
/* No side effect */

var block = {
	__: ___1
};

function caml_int_compare$1(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_float_compare$1(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare$1(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_int_min$1(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min$1(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min$1(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min$1(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min$1(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max$1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max$1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max$1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max$1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max$1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare$1 = caml_int_compare$1;

var caml_int32_compare$1 = caml_int_compare$1;

var caml_int_compare_1 = caml_int_compare$1;
var caml_float_compare_1 = caml_float_compare$1;
var caml_nativeint_compare_1 = caml_nativeint_compare$1;
var caml_string_compare_1 = caml_string_compare$1;
var caml_int32_compare_1 = caml_int32_compare$1;
var caml_int_min_1 = caml_int_min$1;
var caml_float_min_1 = caml_float_min$1;
var caml_string_min_1 = caml_string_min$1;
var caml_nativeint_min_1 = caml_nativeint_min$1;
var caml_int32_min_1 = caml_int32_min$1;
var caml_int_max_1 = caml_int_max$1;
var caml_float_max_1 = caml_float_max$1;
var caml_string_max_1 = caml_string_max$1;
var caml_nativeint_max_1 = caml_nativeint_max$1;
var caml_int32_max_1 = caml_int32_max$1;
/* No side effect */

var caml_primitive = {
	caml_int_compare: caml_int_compare_1,
	caml_float_compare: caml_float_compare_1,
	caml_nativeint_compare: caml_nativeint_compare_1,
	caml_string_compare: caml_string_compare_1,
	caml_int32_compare: caml_int32_compare_1,
	caml_int_min: caml_int_min_1,
	caml_float_min: caml_float_min_1,
	caml_string_min: caml_string_min_1,
	caml_nativeint_min: caml_nativeint_min_1,
	caml_int32_min: caml_int32_min_1,
	caml_int_max: caml_int_max_1,
	caml_float_max: caml_float_max_1,
	caml_string_max: caml_string_max_1,
	caml_nativeint_max: caml_nativeint_max_1,
	caml_int32_max: caml_int32_max_1
};

function caml_obj_block$1(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup$1(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate$1(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward$1(x) {
  return block.__(250, [x]);
}

function caml_update_dummy$1(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_compare$1(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        return caml_primitive.caml_string_compare(a, b);
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_primitive.caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x = a;
          var y = b;
          if (x === y) {
            return 0;
          } else if (x < y) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_primitive.caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare$1(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              }            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare$1(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              }            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare$1(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              }            }
          }
        }
      }
    }
  }}

function caml_equal$1(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal$1(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }}

function caml_equal_null$1(x, y) {
  if (y !== null) {
    return caml_equal$1(x, y);
  } else {
    return +(x === y);
  }
}

function caml_equal_undefined$1(x, y) {
  if (y !== undefined) {
    return caml_equal$1(x, y);
  } else {
    return +(x === y);
  }
}

function caml_equal_nullable$1(x, y) {
  if (y == null) {
    return +(x === y);
  } else {
    return caml_equal$1(x, y);
  }
}

function caml_notequal$1(a, b) {
  return 1 - caml_equal$1(a, b);
}

function caml_greaterequal$1(a, b) {
  return +(caml_compare$1(a, b) >= 0);
}

function caml_greaterthan$1(a, b) {
  return +(caml_compare$1(a, b) > 0);
}

function caml_lessequal$1(a, b) {
  return +(caml_compare$1(a, b) <= 0);
}

function caml_lessthan$1(a, b) {
  return +(caml_compare$1(a, b) < 0);
}

function caml_min$1(x, y) {
  if (caml_compare$1(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max$1(x, y) {
  if (caml_compare$1(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

var caml_obj_block_1 = caml_obj_block$1;
var caml_obj_dup_1 = caml_obj_dup$1;
var caml_obj_truncate_1 = caml_obj_truncate$1;
var caml_lazy_make_forward_1 = caml_lazy_make_forward$1;
var caml_update_dummy_1 = caml_update_dummy$1;
var caml_compare_1 = caml_compare$1;
var caml_equal_1 = caml_equal$1;
var caml_equal_null_1 = caml_equal_null$1;
var caml_equal_undefined_1 = caml_equal_undefined$1;
var caml_equal_nullable_1 = caml_equal_nullable$1;
var caml_notequal_1 = caml_notequal$1;
var caml_greaterequal_1 = caml_greaterequal$1;
var caml_greaterthan_1 = caml_greaterthan$1;
var caml_lessthan_1 = caml_lessthan$1;
var caml_lessequal_1 = caml_lessequal$1;
var caml_min_1 = caml_min$1;
var caml_max_1 = caml_max$1;
/* No side effect */

var caml_obj = {
	caml_obj_block: caml_obj_block_1,
	caml_obj_dup: caml_obj_dup_1,
	caml_obj_truncate: caml_obj_truncate_1,
	caml_lazy_make_forward: caml_lazy_make_forward_1,
	caml_update_dummy: caml_update_dummy_1,
	caml_compare: caml_compare_1,
	caml_equal: caml_equal_1,
	caml_equal_null: caml_equal_null_1,
	caml_equal_undefined: caml_equal_undefined_1,
	caml_equal_nullable: caml_equal_nullable_1,
	caml_notequal: caml_notequal_1,
	caml_greaterequal: caml_greaterequal_1,
	caml_greaterthan: caml_greaterthan_1,
	caml_lessthan: caml_lessthan_1,
	caml_lessequal: caml_lessequal_1,
	caml_min: caml_min_1,
	caml_max: caml_max_1
};

function $caret$1(prim, prim$1) {
  return prim + prim$1;
}

var stdout$2 = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr$2 = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_open_descriptor_in$1() {
  throw [
        caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_in not implemented"
      ];
}

function caml_ml_open_descriptor_out$1() {
  throw [
        caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_out not implemented"
      ];
}

function caml_ml_flush$1(oc) {
  if (oc[/* buffer */0] !== "") {
    curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

var node_std_output$1 = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);

function caml_ml_output$1(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout$2) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush$1(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char$1(oc, $$char) {
  return caml_ml_output$1(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input$1(_, _$1, _$2, _$3) {
  throw [
        caml_builtin_exceptions.failure,
        "caml_ml_input ic not implemented"
      ];
}

function caml_ml_input_char$1() {
  throw [
        caml_builtin_exceptions.failure,
        "caml_ml_input_char not implemnted"
      ];
}

function caml_ml_out_channels_list$1() {
  return /* :: */[
          stdout$2,
          /* :: */[
            stderr$2,
            /* [] */0
          ]
        ];
}

var stdin$2 = undefined;

var $caret_1 = $caret$1;
var stdin_1 = stdin$2;
var stdout_1 = stdout$2;
var stderr_1 = stderr$2;
var caml_ml_open_descriptor_in_1 = caml_ml_open_descriptor_in$1;
var caml_ml_open_descriptor_out_1 = caml_ml_open_descriptor_out$1;
var caml_ml_flush_1 = caml_ml_flush$1;
var node_std_output_1 = node_std_output$1;
var caml_ml_output_1 = caml_ml_output$1;
var caml_ml_output_char_1 = caml_ml_output_char$1;
var caml_ml_input_1 = caml_ml_input$1;
var caml_ml_input_char_1 = caml_ml_input_char$1;
var caml_ml_out_channels_list_1 = caml_ml_out_channels_list$1;
/* node_std_output Not a pure module */

var caml_io = {
	$caret: $caret_1,
	stdin: stdin_1,
	stdout: stdout_1,
	stderr: stderr_1,
	caml_ml_open_descriptor_in: caml_ml_open_descriptor_in_1,
	caml_ml_open_descriptor_out: caml_ml_open_descriptor_out_1,
	caml_ml_flush: caml_ml_flush_1,
	node_std_output: node_std_output_1,
	caml_ml_output: caml_ml_output_1,
	caml_ml_output_char: caml_ml_output_char_1,
	caml_ml_input: caml_ml_input_1,
	caml_ml_input_char: caml_ml_input_char_1,
	caml_ml_out_channels_list: caml_ml_out_channels_list_1
};

function caml_sys_getenv$1(s) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  } else {
    throw caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time$1() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed$1() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command$1() {
  return 127;
}

function caml_sys_getcwd$1() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv$1() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}

function caml_sys_exit$1(exit_code) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return /* () */0;
  }
}

function caml_sys_is_directory$1() {
  throw [
        caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists$1() {
  throw [
        caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

var caml_sys_getenv_1 = caml_sys_getenv$1;
var caml_sys_time_1 = caml_sys_time$1;
var caml_sys_random_seed_1 = caml_sys_random_seed$1;
var caml_sys_system_command_1 = caml_sys_system_command$1;
var caml_sys_getcwd_1 = caml_sys_getcwd$1;
var caml_sys_get_argv_1 = caml_sys_get_argv$1;
var caml_sys_exit_1 = caml_sys_exit$1;
var caml_sys_is_directory_1 = caml_sys_is_directory$1;
var caml_sys_file_exists_1 = caml_sys_file_exists$1;
/* No side effect */

var caml_sys = {
	caml_sys_getenv: caml_sys_getenv_1,
	caml_sys_time: caml_sys_time_1,
	caml_sys_random_seed: caml_sys_random_seed_1,
	caml_sys_system_command: caml_sys_system_command_1,
	caml_sys_getcwd: caml_sys_getcwd_1,
	caml_sys_get_argv: caml_sys_get_argv_1,
	caml_sys_exit: caml_sys_exit_1,
	caml_sys_is_directory: caml_sys_is_directory_1,
	caml_sys_file_exists: caml_sys_file_exists_1
};

function div$2(x, y) {
  if (y === 0) {
    throw caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_$2(x, y) {
  if (y === 0) {
    throw caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16$1(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap$1(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul$1 = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap$1 = caml_int32_bswap$1;

var div_1 = div$2;
var mod__1 = mod_$2;
var caml_bswap16_1 = caml_bswap16$1;
var caml_int32_bswap_1 = caml_int32_bswap$1;
var caml_nativeint_bswap_1 = caml_nativeint_bswap$1;
var imul_1 = imul$1;
/* imul Not a pure module */

var caml_int32 = {
	div: div_1,
	mod_: mod__1,
	caml_bswap16: caml_bswap16_1,
	caml_int32_bswap: caml_int32_bswap_1,
	caml_nativeint_bswap: caml_nativeint_bswap_1,
	imul: imul_1
};

var repeat$1 = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

var repeat_1 = repeat$1;
/* repeat Not a pure module */

var caml_utils = {
	repeat: repeat_1
};

var min_int$2 = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int$2 = /* record */[
  /* hi */2147483647,
  /* lo */1
];

var one$1 = /* record */[
  /* hi */0,
  /* lo */1
];

var zero$1 = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one$1 = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed$1(x) {
  return +((x & 2147483648) !== 0);
}

function add$1(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed$1(this_low_) && (neg_signed$1(other_low_) || !neg_signed$1(lo)) || neg_signed$1(other_low_) && !neg_signed$1(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not$1(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq$1(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function equal_null$1(x, y) {
  if (y !== null) {
    return eq$1(x, y);
  } else {
    return /* false */0;
  }
}

function equal_undefined$1(x, y) {
  if (y !== undefined) {
    return eq$1(x, y);
  } else {
    return /* false */0;
  }
}

function equal_nullable$1(x, y) {
  if (y == null) {
    return /* false */0;
  } else {
    return eq$1(x, y);
  }
}

function neg$1(x) {
  if (eq$1(x, min_int$2)) {
    return min_int$2;
  } else {
    return add$1(not$1(x), one$1);
  }
}

function sub$5(x, y) {
  return add$1(x, neg$1(y));
}

function lsl_$1(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  }
}

function lsr_$1(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset === 0) {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    } else if (offset > 0) {
      var lo = (hi >>> offset);
      return /* record */[
              /* hi */0,
              /* lo */(lo >>> 0)
            ];
    } else {
      var hi$1 = (hi >>> numBits);
      var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function asr_$1(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function is_zero$1(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul$1(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero$1;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero$1;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg$1(other);
            _this = neg$1($$this);
            continue ;
            
          } else {
            return neg$1(mul$1(neg$1($$this), other));
          }
        } else if (other_hi < 0) {
          return neg$1(mul$1($$this, neg$1(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero$1;
      } else {
        return min_int$2;
      }
    }
    
  }}

function swap$1(param) {
  var hi = caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor$1(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_$1(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_$1(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge$1(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq$1(x, y) {
  return 1 - eq$1(x, y);
}

function lt$1(x, y) {
  return 1 - ge$1(x, y);
}

function gt$1(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le$1(x, y) {
  return 1 - gt$1(x, y);
}

function min$1(x, y) {
  if (ge$1(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max$1(x, y) {
  if (gt$1(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float$1(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl$1 = Math.pow(2, 32);

var two_ptr_63_dbl$1 = Math.pow(2, 63);

var neg_two_ptr_63$1 = -Math.pow(2, 63);

function of_float$1(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero$1;
  } else if (x <= neg_two_ptr_63$1) {
    return min_int$2;
  } else if (x + 1 >= two_ptr_63_dbl$1) {
    return max_int$2;
  } else if (x < 0) {
    return neg$1(of_float$1(-x));
  } else {
    var hi = x / two_ptr_32_dbl$1 | 0;
    var lo = x % two_ptr_32_dbl$1 | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div$3(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero$1;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq$1(other, one$1) || eq$1(other, neg_one$1)) {
        return self;
      } else if (eq$1(other, min_int$2)) {
        return one$1;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_$1(self, 1);
        var approx = lsl_$1(div$3(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one$1;
        } else {
          return neg$1(one$1);
        }
        if (exit$2 === 3) {
          var y = mul$1(other, approx);
          var rem = add$1(self, neg$1(y));
          return add$1(approx, div$3(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero$1;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg$1(other);
            _self = neg$1(self);
            continue ;
            
          } else {
            return neg$1(div$3(neg$1(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg$1(div$3(self, neg$1(other)));
        } else {
          var res = zero$1;
          var rem$1 = self;
          while(ge$1(rem$1, other)) {
            var approx$1 = caml_primitive.caml_float_max(1, Math.floor(to_float$1(rem$1) / to_float$1(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float$1(approx$1);
            var approxRem = mul$1(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt$1(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float$1(approx$1);
              approxRem = mul$1(approxRes, other);
            }            if (is_zero$1(approxRes)) {
              approxRes = one$1;
            }
            res = add$1(res, approxRes);
            rem$1 = add$1(rem$1, neg$1(approxRem));
          }          return res;
        }
      }
      
    }
    
  }}

function mod_$3(self, other) {
  var y = mul$1(div$3(self, other), other);
  return add$1(self, neg$1(y));
}

function div_mod$1(self, other) {
  var quotient = div$3(self, other);
  var y = mul$1(quotient, other);
  return /* tuple */[
          quotient,
          add$1(self, neg$1(y))
        ];
}

function compare$4(self, other) {
  var v = caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v === 0) {
    return caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  } else {
    return v;
  }
}

function of_int32$1(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32$1(x) {
  return x[/* lo */1] | 0;
}

function to_hex$1(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0 || match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign$1(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits$1(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float$1(x) {
  var u = new Float64Array(/* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64$1(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

var min_int_1 = min_int$2;
var max_int_1 = max_int$2;
var one_1 = one$1;
var zero_1 = zero$1;
var not_1 = not$1;
var of_int32_1 = of_int32$1;
var to_int32_1 = to_int32$1;
var add_1 = add$1;
var neg_1 = neg$1;
var sub_1 = sub$5;
var lsl__1 = lsl_$1;
var lsr__1 = lsr_$1;
var asr__1 = asr_$1;
var is_zero_1 = is_zero$1;
var mul_1 = mul$1;
var xor_1 = xor$1;
var or__1 = or_$1;
var and__1 = and_$1;
var swap_1 = swap$1;
var ge_1 = ge$1;
var eq_1 = eq$1;
var neq_1 = neq$1;
var lt_1 = lt$1;
var gt_1 = gt$1;
var le_1 = le$1;
var equal_null_1 = equal_null$1;
var equal_undefined_1 = equal_undefined$1;
var equal_nullable_1 = equal_nullable$1;
var min_1 = min$1;
var max_1 = max$1;
var to_float_1 = to_float$1;
var of_float_1 = of_float$1;
var div_1$1 = div$3;
var mod__1$1 = mod_$3;
var div_mod_1 = div_mod$1;
var compare_1 = compare$4;
var to_hex_1 = to_hex$1;
var discard_sign_1 = discard_sign$1;
var float_of_bits_1 = float_of_bits$1;
var bits_of_float_1 = bits_of_float$1;
var get64_1 = get64$1;
/* two_ptr_32_dbl Not a pure module */

var caml_int64 = {
	min_int: min_int_1,
	max_int: max_int_1,
	one: one_1,
	zero: zero_1,
	not: not_1,
	of_int32: of_int32_1,
	to_int32: to_int32_1,
	add: add_1,
	neg: neg_1,
	sub: sub_1,
	lsl_: lsl__1,
	lsr_: lsr__1,
	asr_: asr__1,
	is_zero: is_zero_1,
	mul: mul_1,
	xor: xor_1,
	or_: or__1,
	and_: and__1,
	swap: swap_1,
	ge: ge_1,
	eq: eq_1,
	neq: neq_1,
	lt: lt_1,
	gt: gt_1,
	le: le_1,
	equal_null: equal_null_1,
	equal_undefined: equal_undefined_1,
	equal_nullable: equal_nullable_1,
	min: min_1,
	max: max_1,
	to_float: to_float_1,
	of_float: of_float_1,
	div: div_1$1,
	mod_: mod__1$1,
	div_mod: div_mod_1,
	compare: compare_1,
	to_hex: to_hex_1,
	discard_sign: discard_sign_1,
	float_of_bits: float_of_bits_1,
	bits_of_float: bits_of_float_1,
	get64: get64_1
};

function caml_failwith$1(s) {
  throw [
        caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit$1(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base$1(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base$1(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string$1(s) {
  var match = parse_sign_and_base$1(s);
  var i = match[0];
  var base = int_of_string_base$1(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit$1(c);
  if (d < 0 || d >= base) {
    throw [
          caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit$1(a);
          if (v < 0 || v >= base) {
            throw [
                  caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    }  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string$1(s) {
  var match = parse_sign_and_base$1(s);
  var hbase = match[2];
  var i = match[0];
  var base = caml_int64.of_int32(int_of_string_base$1(hbase));
  var sign = caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = caml_int64.of_int32(parse_digit$1(c));
  if (caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || caml_int64.ge(d, base)) {
    throw [
          caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = caml_int64.of_int32(parse_digit$1(a));
          if (caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || caml_int64.ge(v, base) || caml_int64.gt(acc, threshold)) {
            throw [
                  caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = caml_int64.add(caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
            
          }
        }
      }
    }  };
  var res = caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && caml_int64.neq(res, or_res)) {
    throw [
          caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base$1(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase$4(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format$1(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase$4(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                }                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            }            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  }}

function finish_formatting$1(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int$1(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format$1(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base$1(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting$1(f$1, s);
  }
}

function caml_int64_format$1(fmt, x) {
  var f = parse_format$1(fmt);
  var x$1 = f[/* signedconv */5] && caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = caml_int64.discard_sign(x$1);
          var match$1 = caml_int64.div_mod(y, wbase);
          var quotient = caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          }        } else {
          var match$3 = caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          }        }
        break;
    case 1 : 
        s = caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = caml_int64.discard_sign(x$1);
          var match$5 = caml_int64.div_mod(y$1, wbase$1);
          var match$6 = caml_int64.div_mod(caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = caml_int64.add(caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          }        } else {
          var match$8 = caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          }        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting$1(f, s);
}

function caml_format_float$1(fmt, x) {
  var f = parse_format$1(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              }            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting$1(f, s);
}

var float_of_string$1 = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string$1(s) {
  return curry._2(float_of_string$1, s, caml_failwith$1);
}

var caml_nativeint_format$1 = caml_format_int$1;

var caml_int32_format$1 = caml_format_int$1;

var caml_int32_of_string$1 = caml_int_of_string$1;

var caml_nativeint_of_string$1 = caml_int_of_string$1;

var caml_format_float_1 = caml_format_float$1;
var caml_format_int_1 = caml_format_int$1;
var caml_nativeint_format_1 = caml_nativeint_format$1;
var caml_int32_format_1 = caml_int32_format$1;
var caml_float_of_string_1 = caml_float_of_string$1;
var caml_int64_format_1 = caml_int64_format$1;
var caml_int_of_string_1 = caml_int_of_string$1;
var caml_int32_of_string_1 = caml_int32_of_string$1;
var caml_int64_of_string_1 = caml_int64_of_string$1;
var caml_nativeint_of_string_1 = caml_nativeint_of_string$1;
/* float_of_string Not a pure module */

var caml_format = {
	caml_format_float: caml_format_float_1,
	caml_format_int: caml_format_int_1,
	caml_nativeint_format: caml_nativeint_format_1,
	caml_int32_format: caml_int32_format_1,
	caml_float_of_string: caml_float_of_string_1,
	caml_int64_format: caml_int64_format_1,
	caml_int_of_string: caml_int_of_string_1,
	caml_int32_of_string: caml_int32_of_string_1,
	caml_int64_of_string: caml_int64_of_string_1,
	caml_nativeint_of_string: caml_nativeint_of_string_1
};

function string_of_char$1(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get$1(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string$1(len) {
  if (len < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    var result = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      result[i] = /* "\000" */0;
    }
    return result;
  }
}

function caml_fill_string$1(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string$1(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes$1(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string$1(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string$1(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes$1(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }    return s;
  }
}

function caml_string_of_char_array$1(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    bytes[i] = chars[i];
  }
  return bytes_to_string$1(bytes);
}

function caml_is_printable$1(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return /* false */0;
  }
}

function caml_string_get16$1(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32$1(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get$2(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

var bytes_of_string_1 = bytes_of_string$1;
var bytes_to_string_1 = bytes_to_string$1;
var caml_is_printable_1 = caml_is_printable$1;
var caml_string_of_char_array_1 = caml_string_of_char_array$1;
var caml_string_get_1 = caml_string_get$1;
var caml_create_string_1 = caml_create_string$1;
var caml_fill_string_1 = caml_fill_string$1;
var caml_blit_string_1 = caml_blit_string$1;
var caml_blit_bytes_1 = caml_blit_bytes$1;
var caml_string_get16_1 = caml_string_get16$1;
var caml_string_get32_1 = caml_string_get32$1;
var string_of_char_1 = string_of_char$1;
var get_1 = get$2;
/* No side effect */

var caml_string = {
	bytes_of_string: bytes_of_string_1,
	bytes_to_string: bytes_to_string_1,
	caml_is_printable: caml_is_printable_1,
	caml_string_of_char_array: caml_string_of_char_array_1,
	caml_string_get: caml_string_get_1,
	caml_create_string: caml_create_string_1,
	caml_fill_string: caml_fill_string_1,
	caml_blit_string: caml_blit_string_1,
	caml_blit_bytes: caml_blit_bytes_1,
	caml_string_get16: caml_string_get16_1,
	caml_string_get32: caml_string_get32_1,
	string_of_char: string_of_char_1,
	get: get_1
};

var id$1 = [0];

function caml_set_oo_id$1(b) {
  b[1] = id$1[0];
  id$1[0] += 1;
  return b;
}

function get_id$1() {
  id$1[0] += 1;
  return id$1[0];
}

function create$2(str) {
  var v_001 = get_id$1(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant$1(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}

var caml_set_oo_id_1 = caml_set_oo_id$1;
var get_id_1 = get_id$1;
var create_1 = create$2;
var isCamlExceptionOrOpenVariant_1 = isCamlExceptionOrOpenVariant$1;
/* No side effect */

var caml_exceptions = {
	caml_set_oo_id: caml_set_oo_id_1,
	get_id: get_id_1,
	create: create_1,
	isCamlExceptionOrOpenVariant: isCamlExceptionOrOpenVariant_1
};

var not_implemented$1 = (function (s){ throw new Error(s)});

var not_implemented_1 = not_implemented$1;
/* not_implemented Not a pure module */

var caml_missing_polyfill = {
	not_implemented: not_implemented_1
};

function erase_rel$1(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */block.__(0, [erase_rel$1(param[0])]);
      case 1 : 
          return /* String_ty */block.__(1, [erase_rel$1(param[0])]);
      case 2 : 
          return /* Int_ty */block.__(2, [erase_rel$1(param[0])]);
      case 3 : 
          return /* Int32_ty */block.__(3, [erase_rel$1(param[0])]);
      case 4 : 
          return /* Nativeint_ty */block.__(4, [erase_rel$1(param[0])]);
      case 5 : 
          return /* Int64_ty */block.__(5, [erase_rel$1(param[0])]);
      case 6 : 
          return /* Float_ty */block.__(6, [erase_rel$1(param[0])]);
      case 7 : 
          return /* Bool_ty */block.__(7, [erase_rel$1(param[0])]);
      case 8 : 
          return /* Format_arg_ty */block.__(8, [
                    param[0],
                    erase_rel$1(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */block.__(9, [
                    ty1,
                    ty1,
                    erase_rel$1(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */block.__(10, [erase_rel$1(param[0])]);
      case 11 : 
          return /* Theta_ty */block.__(11, [erase_rel$1(param[0])]);
      case 12 : 
          return /* Any_ty */block.__(12, [erase_rel$1(param[0])]);
      case 13 : 
          return /* Reader_ty */block.__(13, [erase_rel$1(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */block.__(14, [erase_rel$1(param[0])]);
      
    }
  }
}

function concat_fmtty$1(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */block.__(0, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */block.__(1, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */block.__(2, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */block.__(3, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */block.__(4, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */block.__(5, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */block.__(6, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */block.__(7, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */block.__(8, [
                    fmtty1[0],
                    concat_fmtty$1(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty$1(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */block.__(10, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */block.__(11, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */block.__(12, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */block.__(13, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */block.__(14, [concat_fmtty$1(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt$1(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */block.__(0, [concat_fmt$1(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */block.__(1, [concat_fmt$1(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */block.__(2, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */block.__(3, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt$1(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt$1(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt$1(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt$1(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt$1(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */block.__(9, [concat_fmt$1(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */block.__(10, [concat_fmt$1(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */block.__(11, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */block.__(12, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt$1(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt$1(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */block.__(15, [concat_fmt$1(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */block.__(16, [concat_fmt$1(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */block.__(17, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */block.__(18, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */block.__(19, [concat_fmt$1(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt$1(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */block.__(21, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */block.__(22, [concat_fmt$1(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */block.__(23, [
                    fmt1[0],
                    concat_fmt$1(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt$1(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

var concat_fmtty_1 = concat_fmtty$1;
var erase_rel_1 = erase_rel$1;
var concat_fmt_1 = concat_fmt$1;
/* No side effect */

var camlinternalFormatBasics = {
	concat_fmtty: concat_fmtty_1,
	erase_rel: erase_rel_1,
	concat_fmt: concat_fmt_1
};

function failwith$1(s) {
  throw [
        caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg$1(s) {
  throw [
        caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit$1 = caml_exceptions.create("Pervasives.Exit");

function abs$1(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot$1(x) {
  return x ^ -1;
}

var min_int$3 = -2147483648;

function char_of_int$1(n) {
  if (n < 0 || n > 255) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool$1(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string$1(param) {
  switch (param) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      throw [
            caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function valid_float_lexem$1(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return s + ".";
    } else {
      var match = caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  }}

function string_of_float$1(f) {
  return valid_float_lexem$1(caml_format.caml_format_float("%.12g", f));
}

function $at$1(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at$1(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin$3 = caml_io.stdin;

var stdout$3 = caml_io.stdout;

var stderr$3 = caml_io.stderr;

function open_out_gen$1(_, _$1, _$2) {
  return caml_io.caml_ml_open_descriptor_out(caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out$1(name) {
  return open_out_gen$1(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin$1(name) {
  return open_out_gen$1(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all$1() {
  var _param = caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param = _param;
    if (param) {
      try {
        caml_io.caml_ml_flush(param[0]);
      }
      catch (exn){
        
      }
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }}

function output_bytes$1(oc, s) {
  return caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string$1(oc, s) {
  return caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output$1(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring$1(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out$1(oc) {
  caml_io.caml_ml_flush(oc);
  return caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr$1(oc) {
  try {
    caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen$1(_, _$1, _$2) {
  return caml_io.caml_ml_open_descriptor_in(caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in$1(name) {
  return open_in_gen$1(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin$1(name) {
  return open_in_gen$1(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input$1(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input$1(_, _$1, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r === 0) {
        throw caml_builtin_exceptions.end_of_file;
      } else {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
        
      }
    }
  }}

function really_input$1(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input$1(ic, s, ofs, len);
  }
}

function really_input_string$1(ic, len) {
  var s = caml_string.caml_create_string(len);
  really_input$1(ic, s, 0, len);
  return caml_string.bytes_to_string(s);
}

function input_line$1(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
        
      } else {
        return buf;
      }
    }  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n === 0) {
        if (accu) {
          return build_result(caml_string.caml_create_string(len), len, accu);
        } else {
          throw caml_builtin_exceptions.end_of_file;
        }
      } else if (n > 0) {
        var res = caml_string.caml_create_string(n - 1 | 0);
        caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
        caml_io.caml_ml_input_char(chan);
        if (accu) {
          var len$1 = (len + n | 0) - 1 | 0;
          return build_result(caml_string.caml_create_string(len$1), len$1, /* :: */[
                      res,
                      accu
                    ]);
        } else {
          return res;
        }
      } else {
        var beg = caml_string.caml_create_string(-n | 0);
        caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
        _len = len - n | 0;
        _accu = /* :: */[
          beg,
          accu
        ];
        continue ;
        
      }
    }  };
  return caml_string.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr$1() {
  try {
    return caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char$1(c) {
  return caml_io.caml_ml_output_char(stdout$3, c);
}

function print_string$1(s) {
  return output_string$1(stdout$3, s);
}

function print_bytes$1(s) {
  return output_bytes$1(stdout$3, s);
}

function print_int$1(i) {
  return output_string$1(stdout$3, String(i));
}

function print_float$1(f) {
  return output_string$1(stdout$3, valid_float_lexem$1(caml_format.caml_format_float("%.12g", f)));
}

function print_newline$1() {
  caml_io.caml_ml_output_char(stdout$3, /* "\n" */10);
  return caml_io.caml_ml_flush(stdout$3);
}

function prerr_char$1(c) {
  return caml_io.caml_ml_output_char(stderr$3, c);
}

function prerr_string$1(s) {
  return output_string$1(stderr$3, s);
}

function prerr_bytes$1(s) {
  return output_bytes$1(stderr$3, s);
}

function prerr_int$1(i) {
  return output_string$1(stderr$3, String(i));
}

function prerr_float$1(f) {
  return output_string$1(stderr$3, valid_float_lexem$1(caml_format.caml_format_float("%.12g", f)));
}

function prerr_newline$1() {
  caml_io.caml_ml_output_char(stderr$3, /* "\n" */10);
  return caml_io.caml_ml_flush(stderr$3);
}

function read_line$1() {
  caml_io.caml_ml_flush(stdout$3);
  return input_line$1(stdin$3);
}

function read_int$1() {
  return caml_format.caml_int_of_string((caml_io.caml_ml_flush(stdout$3), input_line$1(stdin$3)));
}

function read_float$1() {
  return caml_format.caml_float_of_string((caml_io.caml_ml_flush(stdout$3), input_line$1(stdin$3)));
}

function string_of_format$1(param) {
  return param[1];
}

function $caret$caret$1(param, param$1) {
  return /* Format */[
          camlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          param[1] + ("%," + param$1[1])
        ];
}

var exit_function$1 = [flush_all$1];

function at_exit$1(f) {
  var g = exit_function$1[0];
  exit_function$1[0] = (function () {
      curry._1(f, /* () */0);
      return curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit$1() {
  return curry._1(exit_function$1[0], /* () */0);
}

function exit$1(retcode) {
  do_at_exit$1(/* () */0);
  return caml_sys.caml_sys_exit(retcode);
}

var max_int$3 = 2147483647;

var epsilon_float$1 = 2.220446049250313e-16;

var flush$1 = caml_io.caml_ml_flush;

var output_char$1 = caml_io.caml_ml_output_char;

var output_byte$1 = caml_io.caml_ml_output_char;

function output_binary_int$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char$1 = caml_io.caml_ml_input_char;

var input_byte$1 = caml_io.caml_ml_input_char;

function input_binary_int$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value$1() {
  return caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003$1(_, _$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005$1() {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile$1 = [
  LargeFile_000$1,
  LargeFile_001$1,
  LargeFile_002$1,
  LargeFile_003$1,
  LargeFile_004$1,
  LargeFile_005$1
];

var invalid_arg_1 = invalid_arg$1;
var failwith_1 = failwith$1;
var Exit_1 = Exit$1;
var abs_1 = abs$1;
var max_int_1$1 = max_int$3;
var min_int_1$1 = min_int$3;
var lnot_1 = lnot$1;
var epsilon_float_1 = epsilon_float$1;
var char_of_int_1 = char_of_int$1;
var string_of_bool_1 = string_of_bool$1;
var bool_of_string_1 = bool_of_string$1;
var string_of_float_1 = string_of_float$1;
var $at_1 = $at$1;
var stdin_1$1 = stdin$3;
var stdout_1$1 = stdout$3;
var stderr_1$1 = stderr$3;
var print_char_1 = print_char$1;
var print_string_1 = print_string$1;
var print_bytes_1 = print_bytes$1;
var print_int_1 = print_int$1;
var print_float_1 = print_float$1;
var print_newline_1 = print_newline$1;
var prerr_char_1 = prerr_char$1;
var prerr_string_1 = prerr_string$1;
var prerr_bytes_1 = prerr_bytes$1;
var prerr_int_1 = prerr_int$1;
var prerr_float_1 = prerr_float$1;
var prerr_newline_1 = prerr_newline$1;
var read_line_1 = read_line$1;
var read_int_1 = read_int$1;
var read_float_1 = read_float$1;
var open_out_1 = open_out$1;
var open_out_bin_1 = open_out_bin$1;
var open_out_gen_1 = open_out_gen$1;
var flush_1 = flush$1;
var flush_all_1 = flush_all$1;
var output_char_1 = output_char$1;
var output_string_1 = output_string$1;
var output_bytes_1 = output_bytes$1;
var output_1 = output$1;
var output_substring_1 = output_substring$1;
var output_byte_1 = output_byte$1;
var output_binary_int_1 = output_binary_int$1;
var output_value_1 = output_value$1;
var seek_out_1 = seek_out$1;
var pos_out_1 = pos_out$1;
var out_channel_length_1 = out_channel_length$1;
var close_out_1 = close_out$1;
var close_out_noerr_1 = close_out_noerr$1;
var set_binary_mode_out_1 = set_binary_mode_out$1;
var open_in_1 = open_in$1;
var open_in_bin_1 = open_in_bin$1;
var open_in_gen_1 = open_in_gen$1;
var input_char_1 = input_char$1;
var input_line_1 = input_line$1;
var input_1 = input$1;
var really_input_1 = really_input$1;
var really_input_string_1 = really_input_string$1;
var input_byte_1 = input_byte$1;
var input_binary_int_1 = input_binary_int$1;
var input_value_1 = input_value$1;
var seek_in_1 = seek_in$1;
var pos_in_1 = pos_in$1;
var in_channel_length_1 = in_channel_length$1;
var close_in_1 = close_in$1;
var close_in_noerr_1 = close_in_noerr$1;
var set_binary_mode_in_1 = set_binary_mode_in$1;
var LargeFile_1 = LargeFile$1;
var string_of_format_1 = string_of_format$1;
var $caret$caret_1 = $caret$caret$1;
var exit_1 = exit$1;
var at_exit_1 = at_exit$1;
var valid_float_lexem_1 = valid_float_lexem$1;
var unsafe_really_input_1 = unsafe_really_input$1;
var do_at_exit_1 = do_at_exit$1;
/* No side effect */

var pervasives = {
	invalid_arg: invalid_arg_1,
	failwith: failwith_1,
	Exit: Exit_1,
	abs: abs_1,
	max_int: max_int_1$1,
	min_int: min_int_1$1,
	lnot: lnot_1,
	epsilon_float: epsilon_float_1,
	char_of_int: char_of_int_1,
	string_of_bool: string_of_bool_1,
	bool_of_string: bool_of_string_1,
	string_of_float: string_of_float_1,
	$at: $at_1,
	stdin: stdin_1$1,
	stdout: stdout_1$1,
	stderr: stderr_1$1,
	print_char: print_char_1,
	print_string: print_string_1,
	print_bytes: print_bytes_1,
	print_int: print_int_1,
	print_float: print_float_1,
	print_newline: print_newline_1,
	prerr_char: prerr_char_1,
	prerr_string: prerr_string_1,
	prerr_bytes: prerr_bytes_1,
	prerr_int: prerr_int_1,
	prerr_float: prerr_float_1,
	prerr_newline: prerr_newline_1,
	read_line: read_line_1,
	read_int: read_int_1,
	read_float: read_float_1,
	open_out: open_out_1,
	open_out_bin: open_out_bin_1,
	open_out_gen: open_out_gen_1,
	flush: flush_1,
	flush_all: flush_all_1,
	output_char: output_char_1,
	output_string: output_string_1,
	output_bytes: output_bytes_1,
	output: output_1,
	output_substring: output_substring_1,
	output_byte: output_byte_1,
	output_binary_int: output_binary_int_1,
	output_value: output_value_1,
	seek_out: seek_out_1,
	pos_out: pos_out_1,
	out_channel_length: out_channel_length_1,
	close_out: close_out_1,
	close_out_noerr: close_out_noerr_1,
	set_binary_mode_out: set_binary_mode_out_1,
	open_in: open_in_1,
	open_in_bin: open_in_bin_1,
	open_in_gen: open_in_gen_1,
	input_char: input_char_1,
	input_line: input_line_1,
	input: input_1,
	really_input: really_input_1,
	really_input_string: really_input_string_1,
	input_byte: input_byte_1,
	input_binary_int: input_binary_int_1,
	input_value: input_value_1,
	seek_in: seek_in_1,
	pos_in: pos_in_1,
	in_channel_length: in_channel_length_1,
	close_in: close_in_1,
	close_in_noerr: close_in_noerr_1,
	set_binary_mode_in: set_binary_mode_in_1,
	LargeFile: LargeFile_1,
	string_of_format: string_of_format_1,
	$caret$caret: $caret$caret_1,
	exit: exit_1,
	at_exit: at_exit_1,
	valid_float_lexem: valid_float_lexem_1,
	unsafe_really_input: unsafe_really_input_1,
	do_at_exit: do_at_exit_1
};

function length$2(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  }}

function hd$1(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl$1(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth$2(l, n) {
  if (n < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1 === 0) {
          return l$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        }
      } else {
        throw [
              caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    }  }
}

function rev_append$1(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }}

function rev$1(l) {
  return rev_append$1(l, /* [] */0);
}

function flatten$1(param) {
  if (param) {
    return pervasives.$at(param[0], flatten$1(param[1]));
  } else {
    return /* [] */0;
  }
}

function map$5(f, param) {
  if (param) {
    var r = curry._1(f, param[0]);
    return /* :: */[
            r,
            map$5(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$5(i, f, param) {
  if (param) {
    var r = curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi$5(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1$1(f, l) {
  return mapi$5(0, f, l);
}

function rev_map$1(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        curry._1(f, param[0]),
        accu
      ];
      continue ;
      
    } else {
      return accu;
    }
  }}

function iter$4(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      curry._1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }}

function iteri$4(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  }}

function fold_left$2(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = curry._2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }}

function fold_right$2(f, l, accu) {
  if (l) {
    return curry._2(f, l[0], fold_right$2(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2$1(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2$1(f, l1[1], l2[1])
            ];
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2$1(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
        
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  }}

function iter2$1(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
        
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  }}

function fold_left2$1(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = curry._3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }}

function fold_right2$1(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return curry._3(f, l1[0], l2[0], fold_right2$1(f, l1[1], l2[1], accu));
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (curry._1(p, param[0])) {
        _param = param[1];
        continue ;
        
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  }}

function exists$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (curry._1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }}

function for_all2$1(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return /* true */1;
    }
  }}

function exists2$1(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (curry._2(p, l1[0], l2[0])) {
          return /* true */1;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        }
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return /* false */0;
    }
  }}

function mem$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (caml_obj.caml_equal(param[0], x)) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }}

function memq$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }}

function assoc$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (caml_obj.caml_equal(match[0], x)) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function assq$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function mem_assoc$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (caml_obj.caml_equal(param[0][0], x)) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }}

function mem_assq$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }}

function remove_assoc$1(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (caml_obj.caml_equal(pair[0], x)) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assoc$1(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq$1(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq$1(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function find_all$1(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append$1(accu, /* [] */0);
        }
      }    });
}

function partition$1(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
        
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
        
      }
    } else {
      return /* tuple */[
              rev_append$1(yes, /* [] */0),
              rev_append$1(no, /* [] */0)
            ];
    }
  }}

function split$1(param) {
  if (param) {
    var match = param[0];
    var match$1 = split$1(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine$1(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine$1(l1[1], l2[1])
            ];
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge$1(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge$1(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge$1(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop$1(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k === 0) {
      return l;
    } else if (l) {
      _l = l[1];
      _k = k - 1 | 0;
      continue ;
      
    } else {
      throw [
            caml_builtin_exceptions.assert_failure,
            [
              "list.ml",
              223,
              11
            ]
          ];
    }
  }}

function stable_sort$2(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (curry._2(cmp, x1, x2) <= 0) {
              if (curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop$1(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append$1(l1, accu);
          }
        } else {
          return rev_append$1(l2$1, accu);
        }
      }    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (curry._2(cmp, x1, x2) > 0) {
              if (curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop$1(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append$1(l1, accu);
          }
        } else {
          return rev_append$1(l2$1, accu);
        }
      }    }
    
  };
  var len = length$2(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq$1(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c < 0) {
              var c$2 = curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 < 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 < 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 < 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop$1(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            } else if (c$7 > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
              
            }
          } else {
            return rev_append$1(l1, accu);
          }
        } else {
          return rev_append$1(l2$1, accu);
        }
      }    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c > 0) {
              var c$2 = curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 > 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop$1(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            } else if (c$7 < 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
              
            }
          } else {
            return rev_append$1(l1, accu);
          }
        } else {
          return rev_append$1(l2$1, accu);
        }
      }    }
    
  };
  var len = length$2(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append$2 = pervasives.$at;

var concat$4 = flatten$1;

var filter$1 = find_all$1;

var sort$2 = stable_sort$2;

var fast_sort$2 = stable_sort$2;

var length_1 = length$2;
var hd_1 = hd$1;
var tl_1 = tl$1;
var nth_1 = nth$2;
var rev_1 = rev$1;
var append_1 = append$2;
var rev_append_1 = rev_append$1;
var concat_1 = concat$4;
var flatten_1 = flatten$1;
var iter_1 = iter$4;
var iteri_1 = iteri$4;
var map_1 = map$5;
var mapi_1 = mapi$1$1;
var rev_map_1 = rev_map$1;
var fold_left_1 = fold_left$2;
var fold_right_1 = fold_right$2;
var iter2_1 = iter2$1;
var map2_1 = map2$1;
var rev_map2_1 = rev_map2$1;
var fold_left2_1 = fold_left2$1;
var fold_right2_1 = fold_right2$1;
var for_all_1 = for_all$1;
var exists_1 = exists$1;
var for_all2_1 = for_all2$1;
var exists2_1 = exists2$1;
var mem_1 = mem$1;
var memq_1 = memq$1;
var find_1 = find$1;
var filter_1 = filter$1;
var find_all_1 = find_all$1;
var partition_1 = partition$1;
var assoc_1 = assoc$1;
var assq_1 = assq$1;
var mem_assoc_1 = mem_assoc$1;
var mem_assq_1 = mem_assq$1;
var remove_assoc_1 = remove_assoc$1;
var remove_assq_1 = remove_assq$1;
var split_1 = split$1;
var combine_1 = combine$1;
var sort_1 = sort$2;
var stable_sort_1 = stable_sort$2;
var fast_sort_1 = fast_sort$2;
var sort_uniq_1 = sort_uniq$1;
var merge_1 = merge$1;
/* No side effect */

var list = {
	length: length_1,
	hd: hd_1,
	tl: tl_1,
	nth: nth_1,
	rev: rev_1,
	append: append_1,
	rev_append: rev_append_1,
	concat: concat_1,
	flatten: flatten_1,
	iter: iter_1,
	iteri: iteri_1,
	map: map_1,
	mapi: mapi_1,
	rev_map: rev_map_1,
	fold_left: fold_left_1,
	fold_right: fold_right_1,
	iter2: iter2_1,
	map2: map2_1,
	rev_map2: rev_map2_1,
	fold_left2: fold_left2_1,
	fold_right2: fold_right2_1,
	for_all: for_all_1,
	exists: exists_1,
	for_all2: for_all2_1,
	exists2: exists2_1,
	mem: mem_1,
	memq: memq_1,
	find: find_1,
	filter: filter_1,
	find_all: find_all_1,
	partition: partition_1,
	assoc: assoc_1,
	assq: assq_1,
	mem_assoc: mem_assoc_1,
	mem_assq: mem_assq_1,
	remove_assoc: remove_assoc_1,
	remove_assq: remove_assq_1,
	split: split_1,
	combine: combine_1,
	sort: sort_1,
	stable_sort: stable_sort_1,
	fast_sort: fast_sort_1,
	sort_uniq: sort_uniq_1,
	merge: merge_1
};

var $$Error$1 = caml_exceptions.create("Js_exn.Error");

function internalToOCamlException$1(e) {
  if (caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error$1,
            e
          ];
  }
}

function raiseError$1(str) {
  throw new Error(str);
}

function raiseEvalError$1(str) {
  throw new EvalError(str);
}

function raiseRangeError$1(str) {
  throw new RangeError(str);
}

function raiseReferenceError$1(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError$1(str) {
  throw new SyntaxError(str);
}

function raiseTypeError$1(str) {
  throw new TypeError(str);
}

function raiseUriError$1(str) {
  throw new URIError(str);
}

var $$Error_1 = $$Error$1;
var internalToOCamlException_1 = internalToOCamlException$1;
var raiseError_1 = raiseError$1;
var raiseEvalError_1 = raiseEvalError$1;
var raiseRangeError_1 = raiseRangeError$1;
var raiseReferenceError_1 = raiseReferenceError$1;
var raiseSyntaxError_1 = raiseSyntaxError$1;
var raiseTypeError_1 = raiseTypeError$1;
var raiseUriError_1 = raiseUriError$1;
/* No side effect */

var js_exn = {
	$$Error: $$Error_1,
	internalToOCamlException: internalToOCamlException_1,
	raiseError: raiseError_1,
	raiseEvalError: raiseEvalError_1,
	raiseRangeError: raiseRangeError_1,
	raiseReferenceError: raiseReferenceError_1,
	raiseSyntaxError: raiseSyntaxError_1,
	raiseTypeError: raiseTypeError_1,
	raiseUriError: raiseUriError_1
};

function init$3(l, f) {
  if (l === 0) {
    return /* array */[];
  } else if (l < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.init"
        ];
  } else {
    var res = caml_array.caml_make_vect(l, curry._1(f, 0));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = curry._1(f, i);
    }
    return res;
  }
}

function make_matrix$1(sx, sy, init) {
  var res = caml_array.caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = caml_array.caml_make_vect(sy, init);
  }
  return res;
}

function copy$3(a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    return caml_array.caml_array_sub(a, 0, l);
  }
}

function append$3(a1, a2) {
  var l1 = a1.length;
  if (l1 === 0) {
    return copy$3(a2);
  } else if (a2.length === 0) {
    return caml_array.caml_array_sub(a1, 0, l1);
  } else {
    return a1.concat(a2);
  }
}

function sub$6(a, ofs, len) {
  if (len < 0 || ofs > (a.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.sub"
        ];
  } else {
    return caml_array.caml_array_sub(a, ofs, len);
  }
}

function fill$5(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.fill"
        ];
  } else {
    for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
      a[i] = v;
    }
    return /* () */0;
  }
}

function blit$4(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.blit"
        ];
  } else {
    return caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function iter$5(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._1(f, a[i]);
  }
  return /* () */0;
}

function map$6(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_array.caml_make_vect(l, curry._1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._1(f, a[i]);
    }
    return r;
  }
}

function iteri$5(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function mapi$6(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_array.caml_make_vect(l, curry._2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._2(f, i, a[i]);
    }
    return r;
  }
}

function to_list$1(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }}

function list_length$1(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  }}

function of_list$1(l) {
  if (l) {
    var a = caml_array.caml_make_vect(list_length$1(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    }  } else {
    return /* array */[];
  }
}

function fold_left$3(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = curry._2(f, r, a[i]);
  }
  return r;
}

function fold_right$3(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = curry._2(f, a[i], r);
  }
  return r;
}

var Bottom$1 = caml_exceptions.create("Array.Bottom");

function sort$3(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;
    if ((i31 + 2 | 0) < l) {
      if (curry._2(cmp, caml_array.caml_array_get(a, i31), caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }
      if (curry._2(cmp, caml_array.caml_array_get(a, x), caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }
      return x;
    } else if ((i31 + 1 | 0) < l && curry._2(cmp, caml_array.caml_array_get(a, i31), caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    } else if (i31 < l) {
      return i31;
    } else {
      throw [
            Bottom$1,
            i
          ];
    }
  };
  var trickle = function (l, i, e) {
    try {
      var l$1 = l;
      var _i = i;
      var e$1 = e;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        if (curry._2(cmp, caml_array.caml_array_get(a, j), e$1) > 0) {
          caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, j));
          _i = j;
          continue ;
          
        } else {
          return caml_array.caml_array_set(a, i$1, e$1);
        }
      }    }
    catch (raw_exn){
      var exn = js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom$1) {
        return caml_array.caml_array_set(a, exn[1], e);
      } else {
        throw exn;
      }
    }
  };
  var bubble = function (l, i) {
    try {
      var l$1 = l;
      var _i = i;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, j));
        _i = j;
        continue ;
        
      }    }
    catch (raw_exn){
      var exn = js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom$1) {
        return exn[1];
      } else {
        throw exn;
      }
    }
  };
  var trickleup = function (_i, e) {
    while(true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;
      if (i === father) {
        throw [
              caml_builtin_exceptions.assert_failure,
              [
                "array.ml",
                168,
                4
              ]
            ];
      }
      if (curry._2(cmp, caml_array.caml_array_get(a, father), e) < 0) {
        caml_array.caml_array_set(a, i, caml_array.caml_array_get(a, father));
        if (father > 0) {
          _i = father;
          continue ;
          
        } else {
          return caml_array.caml_array_set(a, 0, e);
        }
      } else {
        return caml_array.caml_array_set(a, i, e);
      }
    }  };
  var l = a.length;
  for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
    trickle(l, i, caml_array.caml_array_get(a, i));
  }
  for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
    var e = caml_array.caml_array_get(a, i$1);
    caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, 0));
    trickleup(bubble(i$1, 0), e);
  }
  if (l > 1) {
    var e$1 = caml_array.caml_array_get(a, 1);
    caml_array.caml_array_set(a, 1, caml_array.caml_array_get(a, 0));
    return caml_array.caml_array_set(a, 0, e$1);
  } else {
    return 0;
  }
}

function stable_sort$3(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = caml_array.caml_array_get(a, src1ofs);
    var _i2 = src2ofs;
    var _s2 = caml_array.caml_array_get(src2, src2ofs);
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (curry._2(cmp, s1, s2) <= 0) {
        caml_array.caml_array_set(dst, d, s1);
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = caml_array.caml_array_get(a, i1$1);
          _i1 = i1$1;
          continue ;
          
        } else {
          return blit$4(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        caml_array.caml_array_set(dst, d, s2);
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = caml_array.caml_array_get(src2, i2$1);
          _i2 = i2$1;
          continue ;
          
        } else {
          return blit$4(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    }  };
  var isortto = function (srcofs, dst, dstofs, len) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = caml_array.caml_array_get(a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && curry._2(cmp, caml_array.caml_array_get(dst, j), e) > 0) {
        caml_array.caml_array_set(dst, j + 1 | 0, caml_array.caml_array_get(dst, j));
        j = j - 1 | 0;
      }      caml_array.caml_array_set(dst, j + 1 | 0, e);
    }
    return /* () */0;
  };
  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
      sortto(srcofs, a, srcofs + l2 | 0, l1);
      return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
    }
  };
  var l = a.length;
  if (l <= 5) {
    return isortto(0, a, 0, l);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = caml_array.caml_make_vect(l2, caml_array.caml_array_get(a, 0));
    sortto(l1, t, 0, l2);
    sortto(0, a, l2, l1);
    return merge(l2, l1, t, 0, l2, a, 0);
  }
}

var create_matrix$1 = make_matrix$1;

var concat$5 = caml_array.caml_array_concat;

var fast_sort$3 = stable_sort$3;

var init_1 = init$3;
var make_matrix_1 = make_matrix$1;
var create_matrix_1 = create_matrix$1;
var append_1$1 = append$3;
var concat_1$1 = concat$5;
var sub_1$1 = sub$6;
var copy_1 = copy$3;
var fill_1 = fill$5;
var blit_1 = blit$4;
var to_list_1 = to_list$1;
var of_list_1 = of_list$1;
var iter_1$1 = iter$5;
var map_1$1 = map$6;
var iteri_1$1 = iteri$5;
var mapi_1$1 = mapi$6;
var fold_left_1$1 = fold_left$3;
var fold_right_1$1 = fold_right$3;
var sort_1$1 = sort$3;
var stable_sort_1$1 = stable_sort$3;
var fast_sort_1$1 = fast_sort$3;
/* No side effect */

var array = {
	init: init_1,
	make_matrix: make_matrix_1,
	create_matrix: create_matrix_1,
	append: append_1$1,
	concat: concat_1$1,
	sub: sub_1$1,
	copy: copy_1,
	fill: fill_1,
	blit: blit_1,
	to_list: to_list_1,
	of_list: of_list_1,
	iter: iter_1$1,
	map: map_1$1,
	iteri: iteri_1$1,
	mapi: mapi_1$1,
	fold_left: fold_left_1$1,
	fold_right: fold_right_1$1,
	sort: sort_1$1,
	stable_sort: stable_sort_1$1,
	fast_sort: fast_sort_1$1
};

function _isInteger(value) {
  if (isFinite(value)) {
    return +(Math.floor(value) === value);
  } else {
    return /* false */0;
  }
}

var DecodeError = caml_exceptions.create("Json_decode.DecodeError");

function $$boolean(json) {
  if (typeof json === "boolean") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected boolean, got " + JSON.stringify(json)
        ];
  }
}

function bool(json) {
  return +$$boolean(json);
}

function $$float(json) {
  if (typeof json === "number") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected number, got " + JSON.stringify(json)
        ];
  }
}

function $$int(json) {
  var f = $$float(json);
  if (_isInteger(f)) {
    return f;
  } else {
    throw [
          DecodeError,
          "Expected integer, got " + JSON.stringify(json)
        ];
  }
}

function string(json) {
  if (typeof json === "string") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected string, got " + JSON.stringify(json)
        ];
  }
}

function array$1(decode, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    var target = new Array(length);
    for(var i = 0 ,i_finish = length - 1 | 0; i <= i_finish; ++i){
      var value;
      try {
        value = curry._1(decode, json[i]);
      }
      catch (raw_exn){
        var exn = js_exn.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + ("\n\tin array at index " + pervasives.string_of_int(i))
              ];
        } else {
          throw exn;
        }
      }
      target[i] = value;
    }
    return target;
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function list$1(decode, json) {
  return array.to_list(array$1(decode, json));
}

function field(key, decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var match = json[key];
    if (match !== undefined) {
      try {
        return curry._1(decode, match);
      }
      catch (raw_exn){
        var exn = js_exn.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + ("\n\tat field '" + (key + "'"))
              ];
        } else {
          throw exn;
        }
      }
    } else {
      throw [
            DecodeError,
            "Expected field \'" + (String(key) + "\'")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected object, got " + JSON.stringify(json)
        ];
  }
}

function optional(decode, json) {
  try {
    return /* Some */[curry._1(decode, json)];
  }
  catch (raw_exn){
    var exn = js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === DecodeError) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
}

function oneOf(_decoders, json) {
  while(true) {
    var decoders = _decoders;
    if (decoders) {
      try {
        return curry._1(decoders[0], json);
      }
      catch (raw_exn){
        var exn = js_exn.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          _decoders = decoders[1];
          continue ;
          
        } else {
          throw exn;
        }
      }
    } else {
      var length = list.length(decoders);
      throw [
            DecodeError,
            "Expected oneOf " + (String(length) + ", got ") + JSON.stringify(json)
          ];
    }
  }}

function either(a, b) {
  var partial_arg_001 = /* :: */[
    b,
    /* [] */0
  ];
  var partial_arg = /* :: */[
    a,
    partial_arg_001
  ];
  return (function (param) {
      return oneOf(partial_arg, param);
    });
}

function map$7(f, decode, json) {
  return curry._1(f, curry._1(decode, json));
}
var bool_1        = bool;
var $$float_1     = $$float;
var $$int_1       = $$int;
var string_1      = string;
var list_1        = list$1;
var field_1       = field;
var optional_1    = optional;
var either_1      = either;
var map_1$2         = map$7;

function convertUri(uri) {
  if (get(uri, 0) === /* "/" */47) {
    return "https:" + uri;
  } else {
    return uri;
  }
}

function getWithDefault($$default, param) {
  if (param) {
    return param[0];
  } else {
    return $$default;
  }
}

function sizeDecoder(json) {
  return /* record */[
          /* width */field_1("width", either_1($$int_1, (function (param) {
                      return map_1$2(caml_int_of_string, string_1, param);
                    })), json),
          /* height */field_1("height", either_1($$int_1, (function (param) {
                      return map_1$2(caml_int_of_string, string_1, param);
                    })), json),
          /* unit */field_1("unit", string_1, json)
        ];
}

function regionDecoder(json) {
  return /* float array */[
          getWithDefault(0.0, optional_1((function (param) {
                      return field_1("x", $$float_1, param);
                    }), json)),
          getWithDefault(0.0, optional_1((function (param) {
                      return field_1("y", $$float_1, param);
                    }), json)),
          getWithDefault(0.0, optional_1((function (param) {
                      return field_1("width", $$float_1, param);
                    }), json)),
          getWithDefault(0.0, optional_1((function (param) {
                      return field_1("height", $$float_1, param);
                    }), json))
        ];
}

function imageContentDecoder(json) {
  return /* record */[
          /* uri */convertUri(field_1("uri", string_1, json)),
          /* fit */getWithDefault(/* true */1, optional_1((function (param) {
                      return field_1("fit", bool_1, param);
                    }), json))
        ];
}

function imgBoxDecoder(json) {
  return /* float array */[
          field_1("x", $$float_1, json),
          field_1("y", $$float_1, json),
          field_1("width", $$float_1, json),
          field_1("height", $$float_1, json),
          field_1("scaleX", $$float_1, json),
          field_1("scaleY", $$float_1, json)
        ];
}

function decoratorElementColorDecoder(json) {
  return /* record */[
          /* origin */field_1("origin", string_1, json),
          /* custom */field_1("custom", string_1, json)
        ];
}

function decoratorElementDecoder(json) {
  return /* record */[
          /* alpha */field_1("alpha", $$float_1, json),
          /* x */field_1("x", $$float_1, json),
          /* y */field_1("y", $$float_1, json),
          /* width */field_1("width", $$float_1, json),
          /* height */field_1("height", $$float_1, json),
          /* uri */convertUri(field_1("uri", string_1, json)),
          /* rotation */field_1("rotation", $$float_1, json),
          /* colors */optional_1((function (param) {
                  return field_1("colors", (function (param) {
                                return list_1(decoratorElementColorDecoder, param);
                              }), param);
                }), json)
        ];
}

function decoratorDecoder(json) {
  return /* record */[
          /* id */field_1("id", string_1, json),
          /* element */field_1("element", decoratorElementDecoder, json),
          /* offsetX */field_1("offsetX", $$float_1, json),
          /* offsetY */field_1("offsetY", $$float_1, json),
          /* offsetScale */field_1("offsetScale", $$float_1, json),
          /* uniScaling */field_1("uniScaling", bool_1, json),
          /* target */field_1("target", string_1, json),
          /* level */field_1("level", string_1, json)
        ];
}

function decoratorsDecoder(json) {
  return getWithDefault(/* [] */0, optional_1((function (param) {
                    return field_1("decorators", (function (param) {
                                  return list_1(decoratorDecoder, param);
                                }), param);
                  }), json));
}

function layerDecodoer(json) {
  return /* Layer */__(3, [/* record */[
              /* id */field_1("id", string_1, json),
              /* region */field_1("region", regionDecoder, json),
              /* decorators */decoratorsDecoder(json)
            ]]);
}

function imageMaskDecoder(json) {
  return /* record */[/* type_ */field_1("type", string_1, json)];
}

function imageDecodoer(json) {
  return /* Image */__(1, [/* record */[
              /* id */field_1("id", string_1, json),
              /* region */field_1("region", regionDecoder, json),
              /* category */optional_1((function (param) {
                      return field_1("category", string_1, param);
                    }), json),
              /* content */field_1("content", imageContentDecoder, json),
              /* imgBox */optional_1((function (param) {
                      return field_1("imgBox", imgBoxDecoder, param);
                    }), json),
              /* rotate */getWithDefault(0.0, optional_1((function (param) {
                          return field_1("rotate", $$float_1, param);
                        }), json)),
              /* alpha */getWithDefault(1.0, optional_1((function (param) {
                          return field_1("alpha", $$float_1, param);
                        }), json)),
              /* mask */optional_1((function (param) {
                      return field_1("mask", imageMaskDecoder, param);
                    }), json),
              /* decorators */decoratorsDecoder(json)
            ]]);
}

function renderDataCellDecoder(json) {
  return /* record */[
          /* fill */field_1("fill", string_1, json),
          /* fontFamily */field_1("fontFamily", string_1, json),
          /* fontSize */field_1("fontSize", $$float_1, json),
          /* height */field_1("height", $$float_1, json),
          /* rotate */field_1("rotate", $$float_1, json),
          /* rotateCenterX */field_1("rotateCenterX", $$float_1, json),
          /* rotateCenterY */field_1("rotateCenterY", $$float_1, json),
          /* text */field_1("text", string_1, json),
          /* width */field_1("width", $$float_1, json),
          /* x */field_1("x", $$float_1, json),
          /* y */field_1("y", $$float_1, json)
        ];
}

function renderDataLineDecoder(json) {
  return /* record */[
          /* cells */field_1("cells", (function (param) {
                  return list_1(renderDataCellDecoder, param);
                }), json),
          /* height */field_1("height", $$float_1, json),
          /* rotate */field_1("rotate", $$float_1, json),
          /* rotateCenterX */field_1("rotateCenterX", $$float_1, json),
          /* rotateCenterY */field_1("rotateCenterY", $$float_1, json),
          /* width */field_1("width", $$float_1, json),
          /* x */field_1("x", $$float_1, json),
          /* y */field_1("y", $$float_1, json)
        ];
}

function renderDataElementDecoder(json) {
  return /* record */[
          /* lines */field_1("lines", (function (param) {
                  return list_1(renderDataLineDecoder, param);
                }), json),
          /* baseFontSizeEn */field_1("baseFontSizeEn", $$float_1, json),
          /* baseFontSizeZh */field_1("baseFontSizeZh", $$float_1, json),
          /* boundingHeight */field_1("boundingHeight", $$float_1, json),
          /* boundingWidth */field_1("boundingWidth", $$float_1, json),
          /* boundingX */field_1("boundingX", $$float_1, json),
          /* boundingY */field_1("boundingY", $$float_1, json),
          /* height */field_1("height", $$float_1, json),
          /* width */field_1("width", $$float_1, json),
          /* x */field_1("x", $$float_1, json),
          /* y */field_1("y", $$float_1, json)
        ];
}

function renderDataDecoder(json) {
  return /* record */[
          /* region */field_1("region", regionDecoder, json),
          /* elements */field_1("elements", renderDataElementDecoder, json)
        ];
}

function colorSchemeDecoder(json) {
  return /* record */[/* textColor */field_1("textColor", string_1, json)];
}

function textDecodoer(json) {
  return /* Text */__(2, [/* record */[
              /* id */field_1("id", string_1, json),
              /* region */field_1("region", regionDecoder, json),
              /* renderData */field_1("renderData", renderDataDecoder, json),
              /* rotate */getWithDefault(0.0, optional_1((function (param) {
                          return field_1("rotate", $$float_1, param);
                        }), json)),
              /* alpha */getWithDefault(1.0, optional_1((function (param) {
                          return field_1("alpha", $$float_1, param);
                        }), json)),
              /* colorScheme */field_1("colorScheme", colorSchemeDecoder, json),
              /* decorators */decoratorsDecoder(json)
            ]]);
}

function backgroundContentDecoder(json) {
  return /* record */[/* color */field_1("color", string_1, json)];
}

function backgroundDecoder(json) {
  return /* Background */__(0, [/* record */[
              /* id */field_1("id", string_1, json),
              /* region */field_1("region", regionDecoder, json),
              /* content */field_1("content", backgroundContentDecoder, json)
            ]]);
}

function maskDecodoer(json) {
  return /* Mask */__(4, [/* record */[
              /* id */field_1("id", string_1, json),
              /* color */field_1("color", string_1, json),
              /* alpha */field_1("alpha", $$float_1, json),
              /* region */field_1("region", regionDecoder, json)
            ]]);
}

function svgContentDecoder(json) {
  return /* record */[/* uri */convertUri(field_1("uri", string_1, json))];
}

function svgDecoder(json) {
  return /* Svg */__(5, [/* record */[
              /* id */field_1("id", string_1, json),
              /* content */field_1("content", svgContentDecoder, json),
              /* region */field_1("region", regionDecoder, json),
              /* width */field_1("width", $$float_1, json),
              /* height */field_1("height", $$float_1, json),
              /* alpha */field_1("alpha", $$float_1, json),
              /* scaleX */field_1("scaleX", $$float_1, json),
              /* scaleY */field_1("scaleY", $$float_1, json)
            ]]);
}

function elementDecoder(json) {
  var type_ = field_1("type", string_1, json);
  switch (type_) {
    case "background" : 
        return backgroundDecoder(json);
    case "image" : 
        return imageDecodoer(json);
    case "layer" : 
        return layerDecodoer(json);
    case "mask" : 
        return maskDecodoer(json);
    case "svg" : 
        return svgDecoder(json);
    case "text" : 
        return textDecodoer(json);
    default:
      throw [
            failure,
            "unspecified element type: " + type_
          ];
  }
}

function tree(json) {
  return /* record */[
          /* id */field_1("id", string_1, json),
          /* size */field_1("size", sizeDecoder, json),
          /* children */field_1("children", (function (param) {
                  return list_1(elementDecoder, param);
                }), json)
        ];
}

function fontDecoder(json) {
  return /* record */[
          /* access_key */optional_1((function (param) {
                  return field_1("access_key", string_1, param);
                }), json),
          /* font_family */field_1("font_family", string_1, json)
        ];
}

function fonts(json) {
  return /* record */[/* data */field_1("data", (function (param) {
                  return list_1(fontDecoder, param);
                }), json)];
}

function decodeOptions(json) {
  return /* record */[
          /* fonts */optional_1((function (param) {
                  return field_1("fonts", bool_1, param);
                }), json),
          /* width */optional_1((function (param) {
                  return field_1("width", $$float_1, param);
                }), json),
          /* height */optional_1((function (param) {
                  return field_1("height", $$float_1, param);
                }), json)
        ];
}
/* No side effect */

function createTag(key, content) {
  return {
          AccessKey: key,
          Content: content
        };
}

function getBatchFontFace(tags) {
  return $youzikuClient.getBatchFontFace({
              Tags: tags
            }, (function () {
                return /* () */0;
              }));
}
/* No side effect */

((require('isomorphic-fetch')));

function renderDecorator(dMap, innerRegion, outerRegion, decorator) {
  var match = dMap[decorator[/* id */0]];
  var svg;
  if (match !== undefined) {
    svg = match;
  } else {
    throw [
          failure,
          "decorator does not exist for " + decorator[/* id */0]
        ];
  }
  var element = decorator[/* element */1];
  var floatRe = "[0-9]*\\.?[0-9]*";
  var re = new RegExp(_4(sprintf(/* Format */[
                /* String_literal */__(11, [
                    "viewbox=\"(",
                    /* String */__(2, [
                        /* No_padding */0,
                        /* String_literal */__(11, [
                            ") (",
                            /* String */__(2, [
                                /* No_padding */0,
                                /* String_literal */__(11, [
                                    ") (",
                                    /* String */__(2, [
                                        /* No_padding */0,
                                        /* String_literal */__(11, [
                                            ") (",
                                            /* String */__(2, [
                                                /* No_padding */0,
                                                /* String_literal */__(11, [
                                                    ")\"",
                                                    /* End_of_format */0
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ])
                  ]),
                "viewbox=\"(%s) (%s) (%s) (%s)\""
              ]), floatRe, floatRe, floatRe, floatRe), "i");
  var match$1 = re.exec(svg);
  var match$2;
  if (match$1 !== null) {
    var coords = map((function (d) {
            if (d == null) {
              return 0.0;
            } else {
              return caml_float_of_string(d);
            }
          }), tl(to_list(match$1)));
    match$2 = /* tuple */[
      nth(coords, 2) - nth(coords, 0),
      nth(coords, 3) - nth(coords, 1)
    ];
  } else {
    throw [
          failure,
          "decorator does have viewBox for " + decorator[/* id */0]
        ];
  }
  var dHeight = match$2[1];
  var dWidth = match$2[0];
  var s = svg.replace(new RegExp("<svg[\\s\\S]*svg>"), "$&").replace(new RegExp("<svg"), "<svg width=\"" + (String(dWidth) + ("\" height=\"" + (String(dHeight) + "\""))));
  var match$3 = element[/* colors */7];
  var svgOut;
  if (match$3) {
    var colors = match$3[0];
    svgOut = s.replace(new RegExp(_1(sprintf(/* Format */[
                      /* Char_literal */__(12, [
                          /* "(" */40,
                          /* String */__(2, [
                              /* No_padding */0,
                              /* Char_literal */__(12, [
                                  /* ")" */41,
                                  /* End_of_format */0
                                ])
                            ])
                        ]),
                      "(%s)"
                    ]), concat$3("|", map((function (c) {
                            return c[/* origin */0];
                          }), colors))), "ig"), (function (m, _, _$1, _$2) {
            return find((function (c) {
                            return +(uppercase$2(c[/* origin */0]) === uppercase$2(m));
                          }), colors)[/* custom */1];
          }));
  } else {
    svgOut = s;
  }
  var match$4;
  if (decorator[/* target */6] === "area") {
    match$4 = /* tuple */[
      outerRegion[/* width */2],
      outerRegion[/* height */3],
      0.0,
      0.0
    ];
  } else if (innerRegion) {
    var r = innerRegion[0];
    match$4 = /* tuple */[
      r[/* width */2],
      r[/* height */3],
      outerRegion[/* x */0] - r[/* x */0],
      outerRegion[/* y */1] - r[/* y */1]
    ];
  } else {
    throw [
          failure,
          "no innner region for text with target = 'content'"
        ];
  }
  var regionHeight = match$4[1];
  var regionWidth = match$4[0];
  var imageX = 0.5 * regionWidth - 0.5 * dWidth;
  var imageY = 0.5 * regionHeight - 0.5 * dHeight;
  var match$5;
  if (decorator[/* uniScaling */5]) {
    var ratio = caml_float_max(regionWidth / dWidth, regionHeight / dHeight);
    var scaleX = ratio * decorator[/* offsetScale */4];
    var scaleY = ratio * decorator[/* offsetScale */4];
    match$5 = /* tuple */[
      scaleX,
      scaleY
    ];
  } else {
    var scaleX$1 = regionWidth / dWidth * decorator[/* offsetScale */4];
    var scaleY$1 = regionHeight / dHeight * decorator[/* offsetScale */4];
    match$5 = /* tuple */[
      scaleX$1,
      scaleY$1
    ];
  }
  var sy = match$5[1];
  var sx = match$5[0];
  var tx = regionWidth * decorator[/* offsetX */2] - 0.5 * regionWidth * (sx - 1) - match$4[2];
  var ty = regionHeight * decorator[/* offsetY */3] - 0.5 * regionHeight * (sy - 1) - match$4[3];
  return "\n  <g opacity=\"" + (String(element[/* alpha */0]) + ("\" transform=\"matrix(" + (String(sx) + (" 0 0 " + (String(sy) + (" " + (String(tx) + (" " + (String(ty) + (")\">\n    <g transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + (")\">\n    " + (String(svgOut) + "\n    </g>\n  </g>\n  ")))))))))))))));
}

function renderDecorators(innerRegion, outerRegion, dMap, parent, decorators) {
  var front = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderDecorator(dMap, innerRegion, outerRegion, param);
            }), filter((function (d) {
                    return +(d[/* level */7] === "front");
                  }))(decorators)));
  var back = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderDecorator(dMap, innerRegion, outerRegion, param);
            }), filter((function (d) {
                    return +(d[/* level */7] === "back");
                  }))(decorators)));
  return back + (parent + front);
}

function renderLayer(dMap, layerElement) {
  var match = layerElement[/* decorators */2];
  var decorator = match && !match[1] ? renderDecorator(dMap, /* None */0, layerElement[/* region */1], match[0]) : "";
  return "\n  " + (String(decorator) + "\n  ");
}

function renderTextCell(textElement, cell) {
  var fill = textElement[/* colorScheme */5][/* textColor */0];
  var y = cell[/* y */10] + cell[/* height */3] * 0.86;
  return "\n  <tspan\n    x=\"" + (String(cell[/* x */9]) + ("\"\n    y=\"" + (String(y) + ("\"\n    fill=\"" + (String(fill) + ("\"\n    style=\"font-size:" + (String(cell[/* fontSize */2]) + ("px;font-family:" + (String(cell[/* fontFamily */1]) + ("\"\n  >" + (String(cell[/* text */7]) + "</tspan>\n  ")))))))))));
}

function renderTextLine(textElement, line) {
  var renderData = textElement[/* renderData */2];
  var outerRegion = textElement[/* region */1];
  var innerRegion = renderData[/* region */0];
  var translateX = innerRegion[/* x */0] - outerRegion[/* x */0];
  var translateY = innerRegion[/* y */1] - outerRegion[/* y */1];
  var chars = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderTextCell(textElement, param);
            }), line[/* cells */0]));
  return "\n  <text\n    transform=\"translate(" + (String(translateX) + (" " + (String(translateY) + (") rotate(" + (String(line[/* rotate */2]) + (" " + (String(line[/* rotateCenterX */3]) + (" " + (String(line[/* rotateCenterY */4]) + (")\"\n  >\n    " + (String(chars) + "\n  </text>\n  ")))))))))));
}

function renderText(dMap, textElement) {
  var renderData = textElement[/* renderData */2];
  var renderDataElement = renderData[/* elements */1];
  var outerRegion = textElement[/* region */1];
  var innerRegion = renderData[/* region */0];
  var regionX = outerRegion[/* x */0];
  var regionY = outerRegion[/* y */1];
  var rotateX = outerRegion[/* width */2] / 2.0;
  var rotateY = outerRegion[/* height */3] / 2.0;
  var lines = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderTextLine(textElement, param);
            }), renderDataElement[/* lines */0]));
  var children = renderDecorators(/* Some */[innerRegion], outerRegion, dMap, lines, textElement[/* decorators */6]);
  return "\n  <g\n    transform=\"translate(" + (String(regionX) + (", " + (String(regionY) + (") rotate(" + (String(textElement[/* rotate */3]) + (" " + (String(rotateX) + (" " + (String(rotateY) + (")\"\n    opacity=\"" + (String(textElement[/* alpha */4]) + ("\"\n  >\n  " + (String(children) + "\n  </g>\n  ")))))))))))));
}

function renderImage(dMap, imageElement) {
  var match = imageElement[/* imgBox */4];
  var imgBox = match ? match[0] : /* float array */[
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0
    ];
  var content = imageElement[/* content */3];
  var region = imageElement[/* region */1];
  var uri = content[/* uri */0];
  var height = imgBox[/* height */3];
  var width = imgBox[/* width */2];
  var regionX = region[/* x */0];
  var regionY = region[/* y */1];
  var regionWidth = region[/* width */2];
  var regionHeight = region[/* height */3];
  var regionCenterX = 0.5 * regionWidth;
  var regionCenterY = 0.5 * regionHeight;
  var imageX = -0.5 * width;
  var imageY = -0.5 * height;
  var x = imgBox[/* x */0] + regionCenterX;
  var y = imgBox[/* y */1] + regionCenterY;
  var createClipPath = function (shape) {
    var clipPathId = "image-clip-path-" + imageElement[/* id */0];
    var clipPath = "\n    <defs>\n      <clipPath id=\"" + (String(clipPathId) + ("\">\n      " + (String(shape) + "\n      </clipPath>\n    </defs>\n    ")));
    return /* tuple */[
            clipPath,
            "clip-path=\"url(#" + (String(clipPathId) + ")\"")
          ];
  };
  var match$1 = imageElement[/* mask */7];
  var match$2;
  var exit = 0;
  if (match$1 && match$1[0][/* type_ */0] === "circle") {
    var r = (
      regionWidth < regionHeight ? regionWidth : regionHeight
    ) / 2.0;
    match$2 = createClipPath("<circle cx=\"" + (String(x) + ("\" cy=\"" + (String(y) + ("\" r=\"" + (String(r) + "\" />"))))));
  } else {
    exit = 1;
  }
  if (exit === 1) {
    match$2 = content[/* fit */1] ? /* tuple */[
        "",
        ""
      ] : createClipPath("<rect x=\"0\" y=\"0\" width=\"" + (String(regionWidth) + ("\" height=\"" + (String(regionHeight) + "\" />"))));
  }
  var image = "\n  " + (String(match$2[0]) + ("\n  <g " + (String(match$2[1]) + (">\n    <g transform=\"matrix(" + (String(imgBox[/* scaleX */4]) + (" 0 0 " + (String(imgBox[/* scaleY */5]) + (" " + (String(x) + (" " + (String(y) + (")\">\n      <image\n        xlink:href=\"" + (String(uri) + ("\"\n        width=\"" + (String(width) + ("\"\n        height=\"" + (String(height) + ("\"\n        transform=\"translate(" + (String(imageX) + (" " + (String(imageY) + ")\"\n      />\n    </g>\n  </g>\n  ")))))))))))))))))))));
  var children = renderDecorators(/* None */0, region, dMap, image, imageElement[/* decorators */8]);
  return "\n  <g\n    transform=\"translate(" + (String(regionX) + (" " + (String(regionY) + (") rotate(" + (String(imageElement[/* rotate */5]) + (" " + (String(regionCenterX) + (" " + (String(regionCenterY) + (")\"\n    opacity=\"" + (String(imageElement[/* alpha */6]) + ("\"\n  >\n  " + (String(children) + "\n  </g>\n  ")))))))))))));
}

function renderBackground(backgroundElement) {
  var match = backgroundElement[/* region */1];
  var color = backgroundElement[/* content */2][/* color */0];
  var fill = color === "" ? "#fff" : color;
  return "\n  <rect x=\"" + (String(match[/* x */0]) + ("\" y=\"" + (String(match[/* y */1]) + ("\" width=\"" + (String(match[/* width */2]) + ("\" height=\"" + (String(match[/* height */3]) + ("\" fill=\"" + (String(fill) + "\" />\n  ")))))))));
}

function renderMask(maskElement) {
  var match = maskElement[/* region */3];
  return "\n  <rect x=\"" + (String(match[/* x */0]) + ("\" y=\"" + (String(match[/* y */1]) + ("\" width=\"" + (String(match[/* width */2]) + ("\" height=\"" + (String(match[/* height */3]) + ("\" fill=\"" + (String(maskElement[/* color */1]) + ("\" opacity=\"" + (String(maskElement[/* alpha */2]) + "\" />\n  ")))))))))));
}

function renderSvgElement(svgElement) {
  var region = svgElement[/* region */2];
  var uri = svgElement[/* content */1][/* uri */0];
  return "\n  <g transform=\"matrix(" + (String(svgElement[/* scaleX */6]) + (" 0 0 " + (String(svgElement[/* scaleY */7]) + (" " + (String(region[/* x */0]) + (" " + (String(region[/* y */1]) + (")\" opacity=\"" + (String(svgElement[/* alpha */5]) + ("\">\n    <image href=\"" + (String(uri) + ("\" width=\"" + (String(svgElement[/* width */3]) + ("\" height=\"" + (String(svgElement[/* height */4]) + "\" />\n  </g>\n  ")))))))))))))));
}

function renderElement(dMap, param) {
  if (typeof param === "number") {
    return "";
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return renderBackground(param[0]);
      case 1 : 
          return renderImage(dMap, param[0]);
      case 2 : 
          return renderText(dMap, param[0]);
      case 3 : 
          return renderLayer(dMap, param[0]);
      case 4 : 
          return renderMask(param[0]);
      case 5 : 
          return renderSvgElement(param[0]);
      
    }
  }
}

function createDecoratorMap(tree$$1) {
  return Promise.all(of_list(map((function (d) {
                          return fetch(d[/* element */1][/* uri */5]).then((function (prim) {
                                          return prim.text();
                                        })).then((function (text) {
                                        return Promise.resolve(/* tuple */[
                                                    d[/* id */0],
                                                    text
                                                  ]);
                                      }));
                        }), concat(map((function (param) {
                                  if (typeof param === "number") {
                                    return /* [] */0;
                                  } else {
                                    switch (param.tag | 0) {
                                      case 1 : 
                                          return param[0][/* decorators */8];
                                      case 2 : 
                                          return param[0][/* decorators */6];
                                      case 3 : 
                                          return param[0][/* decorators */2];
                                      default:
                                        return /* [] */0;
                                    }
                                  }
                                }), tree$$1[/* children */2]))))).then((function (entries$$1) {
                return Promise.resolve(fromList(to_list(entries$$1)));
              }));
}

function renderTree(dMap, svgWidth, svgHeight, tree$$1) {
  var outerWidth = svgWidth ? "width=\"" + (String(svgWidth[0]) + "\"") : "";
  var outerHeight = svgHeight ? "height=\"" + (String(svgHeight[0]) + "\"") : "";
  var match = tree$$1[/* size */1];
  var match$1 = partition((function (param) {
          if (typeof param === "number" || param.tag) {
            return /* false */0;
          } else {
            return /* true */1;
          }
        }), tree$$1[/* children */2]);
  var bg = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderElement(dMap, param);
            }), match$1[0]));
  var children = fold_left((function (prim, prim$1) {
          return prim + prim$1;
        }), "", map((function (param) {
              return renderElement(dMap, param);
            }), match$1[1]));
  return "\n  <svg\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    viewBox=\"0 0 " + (String(match[/* width */0]) + (" " + (String(match[/* height */1]) + ("\" " + (String(outerWidth) + (" " + (String(outerHeight) + ("\n  >\n  " + (String(bg) + ("\n  " + (String(children) + "\n  </svg>\n  ")))))))))));
}

var fonts$1 = [/* None */0];

function loadFonts() {
  var match = fonts$1[0];
  if (match) {
    return match[0];
  } else {
    var fontsPromise = fetch("/api/v0/font").then((function (prim) {
              return prim.json();
            })).then((function (s) {
            return Promise.resolve(fromList(map((function (font) {
                                  return /* tuple */[
                                          font[/* font_family */1],
                                          font
                                        ];
                                }), fonts(s)[/* data */0])));
          }));
    fonts$1[0] = /* Some */[fontsPromise];
    return fontsPromise;
  }
}

function processFonts(tree$$1, fonts$$1) {
  var fontMap = fold_left((function (dict, cell) {
          var match = dict[cell[/* fontFamily */1]];
          var text = match !== undefined ? match : "";
          dict[cell[/* fontFamily */1]] = text + cell[/* text */7];
          return dict;
        }), { }, concat(concat(map((function (textElement) {
                      return map((function (line) {
                                    return line[/* cells */0];
                                  }), textElement[/* renderData */2][/* elements */1][/* lines */0]);
                    }), fold_left((function (l, param) {
                          if (typeof param === "number" || param.tag !== 2) {
                            return l;
                          } else {
                            return /* :: */[
                                    param[0],
                                    l
                                  ];
                          }
                        }), /* [] */0, tree$$1[/* children */2])))));
  return getBatchFontFace(of_list(fold_left((function (l, param) {
                        if (param) {
                          return /* :: */[
                                  param[0],
                                  l
                                ];
                        } else {
                          return l;
                        }
                      }), /* [] */0, to_list(map$1((function (fontFamily) {
                                var text = fontMap[fontFamily];
                                var accessKey = fonts$$1[fontFamily][/* access_key */0];
                                if (accessKey) {
                                  return /* Some */[createTag(accessKey[0], text)];
                                } else {
                                  createGoogleFontLink(fontFamily);
                                  return /* None */0;
                                }
                              }), Object.keys(fontMap))))));
}

function renderSvg(treeJson, optionsJson) {
  var options = decodeOptions(optionsJson);
  var tree$$1 = tree(treeJson);
  var match = options[/* fonts */0];
  if (match && match[0] !== 0) {
    loadFonts(/* () */0).then((function (fonts$$1) {
            processFonts(tree$$1, fonts$$1);
            return Promise.resolve(/* () */0);
          }));
  } else {
  }
  return createDecoratorMap(tree$$1).then((function (dMap) {
                return Promise.resolve(renderTree(dMap, options[/* width */1], options[/* height */2], tree$$1));
              }));
}
/*  Not a pure module */

exports.renderDecorator = renderDecorator;
exports.renderDecorators = renderDecorators;
exports.renderLayer = renderLayer;
exports.renderTextCell = renderTextCell;
exports.renderTextLine = renderTextLine;
exports.renderText = renderText;
exports.renderImage = renderImage;
exports.renderBackground = renderBackground;
exports.renderMask = renderMask;
exports.renderSvgElement = renderSvgElement;
exports.renderElement = renderElement;
exports.createDecoratorMap = createDecoratorMap;
exports.renderTree = renderTree;
exports.fonts = fonts$1;
exports.loadFonts = loadFonts;
exports.processFonts = processFonts;
exports.renderSvg = renderSvg;
