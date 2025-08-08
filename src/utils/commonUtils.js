import Swal from "sweetalert2";

export function alertInfo() {
  let _opts = { title: "", confirmButtonText: "확인" };
  _opts = setConfig(arguments, _opts);
  executeAlert(_opts);
}

export function alertConfirm() {
  let _opts = {
    title: "",
    showCancelButton: true,
    cancelButtonText: "취소",
    confirmButtonText: "확인",
    confirmButtonColor: "#dd6b55"
  };
  _opts = setConfig(arguments, _opts);
  executeAlert(_opts);
}

export function alertClose() {
  Swal.close();
}

function setConfig(args, _opts) {
  if (args.length >= 1) _opts.text = args[0];

  if (args.length >= 2) {
    if (typeof args[1] === "function") _opts.cb = args[1];
    else if (args[1] instanceof Object) _opts = { ..._opts, ...args[1] };
  }

  if (args.length === 3) {
    if (typeof args[2] === "function") _opts.cb = args[2];
    else if (args[2] instanceof Object) _opts = { ..._opts, ...args[2] };
  }

  return _opts;
}

function executeAlert(opts) {
  opts.html = opts.text.replace(/\n/g, "<br />");

  if (opts.cb !== undefined) {
    const { cb, ...restOpts } = opts;
    Swal.fire(restOpts).then((result) => {
      const isConfirmed = result.isConfirmed;
      if (!restOpts.showCancelButton || cb.length || isConfirmed) cb(isConfirmed);
    });
  } else Swal.fire(opts);
}
