
/**
Load all import statement and return a merged object of all exported
values. The loader may be passed an optional monitoring function that
will be called whenever each module is loaded. The function receives two
arguments : a count and the total number of modules.
@param imports {Array}
@param monitorHandler {function}
*/
export default async function asyncLoader(loaders, monitorHandler) {
  const result = {};
  const modulesCount = loaders && loaders.length || 0;
  let loaded, count = 0;

  monitorHandler && monitorHandler(count, modulesCount);

  for (let loader of loaders) {
    loaded = await loader;
    count = count + 1;

    Object.assign(result, loaded);

    monitorHandler && monitorHandler(count, modulesCount);
  }

  return result;
};


/**
Import only the default property of the module. This works exactly the
same as import(modulePath) but only returns the default exported value.
@param modulePath {String}
@resolve {Object}
*/
export async function importDefault(loader, moduleName) {
  const loaded = await loader;

  if (loaded && loaded.default) {
    return { [moduleName]: loaded.default };
  } else {
    return void 0;
  }
}
