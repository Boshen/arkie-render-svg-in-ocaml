type tag = {
  .
  "AccessKey": Js.String.t,
  "Content": Js.String.t
};

type data = {. "Tags": array(tag)};

type cb = unit => unit;

type youziku = {. [@bs.meth] "getBatchFontFace": (data, cb) => unit};

[@bs.val] external youziku : youziku = "$youzikuClient";

let createTag = (key, content) => {"AccessKey": key, "Content": content};

let getBatchFontFace = (tags: array(tag)) =>
  youziku##getBatchFontFace({"Tags": tags}, () => ());
