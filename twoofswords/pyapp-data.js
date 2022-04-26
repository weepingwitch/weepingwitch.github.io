
  var Module = typeof Module !== 'undefined' ? Module : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = 'pyapp.data';
      var REMOTE_PACKAGE_BASE = 'pyapp.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "_dummy_thread", true, true);
Module['FS_createPath']("/", "http", true, true);
Module['FS_createPath']("/", "xmlrpc", true, true);
Module['FS_createPath']("/", "_thread", true, true);
Module['FS_createPath']("/", "libpasteurize", true, true);
Module['FS_createPath']("/libpasteurize", "fixes", true, true);
Module['FS_createPath']("/", "six-1.12.0.dist-info", true, true);
Module['FS_createPath']("/", "socketserver", true, true);
Module['FS_createPath']("/", "past", true, true);
Module['FS_createPath']("/past", "builtins", true, true);
Module['FS_createPath']("/past", "types", true, true);
Module['FS_createPath']("/past", "utils", true, true);
Module['FS_createPath']("/past", "translation", true, true);
Module['FS_createPath']("/", "builtins", true, true);
Module['FS_createPath']("/", "libfuturize", true, true);
Module['FS_createPath']("/libfuturize", "fixes", true, true);
Module['FS_createPath']("/", "bin", true, true);
Module['FS_createPath']("/", "html", true, true);
Module['FS_createPath']("/", "lib", true, true);
Module['FS_createPath']("/lib", "python2.7", true, true);
Module['FS_createPath']("/lib/python2.7", "site-packages", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages", "pygame_sdl2", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages/pygame_sdl2", "threads", true, true);
Module['FS_createPath']("/", "_markupbase", true, true);
Module['FS_createPath']("/", "future-0.18.2.dist-info", true, true);
Module['FS_createPath']("/", "future", true, true);
Module['FS_createPath']("/future", "builtins", true, true);
Module['FS_createPath']("/future", "backports", true, true);
Module['FS_createPath']("/future/backports", "http", true, true);
Module['FS_createPath']("/future/backports", "xmlrpc", true, true);
Module['FS_createPath']("/future/backports", "html", true, true);
Module['FS_createPath']("/future/backports", "email", true, true);
Module['FS_createPath']("/future/backports/email", "mime", true, true);
Module['FS_createPath']("/future/backports", "test", true, true);
Module['FS_createPath']("/future/backports", "urllib", true, true);
Module['FS_createPath']("/future", "standard_library", true, true);
Module['FS_createPath']("/future", "tests", true, true);
Module['FS_createPath']("/future", "moves", true, true);
Module['FS_createPath']("/future/moves", "dbm", true, true);
Module['FS_createPath']("/future/moves", "http", true, true);
Module['FS_createPath']("/future/moves", "xmlrpc", true, true);
Module['FS_createPath']("/future/moves", "html", true, true);
Module['FS_createPath']("/future/moves", "test", true, true);
Module['FS_createPath']("/future/moves", "urllib", true, true);
Module['FS_createPath']("/future/moves", "tkinter", true, true);
Module['FS_createPath']("/future", "types", true, true);
Module['FS_createPath']("/future", "utils", true, true);
Module['FS_createPath']("/", "copyreg", true, true);
Module['FS_createPath']("/", "winreg", true, true);
Module['FS_createPath']("/", "queue", true, true);
Module['FS_createPath']("/", "tkinter", true, true);
Module['FS_createPath']("/", "reprlib", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
      
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
              this.requests[this.name] = null;
            }
          };
      
              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
              }
      
        
        var indexedDB;
        if (typeof window === 'object') {
          indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        } else if (typeof location !== 'undefined') {
          // worker
          indexedDB = self.indexedDB;
        } else {
          throw 'using IndexedDB to cache data can only be done on a web page or in a web worker';
        }
        var IDB_RO = "readonly";
        var IDB_RW = "readwrite";
        var DB_NAME = "EM_PRELOAD_CACHE";
        var DB_VERSION = 1;
        var METADATA_STORE_NAME = 'METADATA';
        var PACKAGE_STORE_NAME = 'PACKAGES';
        function openDatabase(callback, errback) {
          try {
            var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
          } catch (e) {
            return errback(e);
          }
          openRequest.onupgradeneeded = function(event) {
            var db = event.target.result;

            if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
              db.deleteObjectStore(PACKAGE_STORE_NAME);
            }
            var packages = db.createObjectStore(PACKAGE_STORE_NAME);

            if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
              db.deleteObjectStore(METADATA_STORE_NAME);
            }
            var metadata = db.createObjectStore(METADATA_STORE_NAME);
          };
          openRequest.onsuccess = function(event) {
            var db = event.target.result;
            callback(db);
          };
          openRequest.onerror = function(error) {
            errback(error);
          };
        };

        // This is needed as chromium has a limit on per-entry files in IndexedDB
        // https://cs.chromium.org/chromium/src/content/renderer/indexed_db/webidbdatabase_impl.cc?type=cs&sq=package:chromium&g=0&l=177
        // https://cs.chromium.org/chromium/src/out/Debug/gen/third_party/blink/public/mojom/indexeddb/indexeddb.mojom.h?type=cs&sq=package:chromium&g=0&l=60
        // We set the chunk size to 64MB to stay well-below the limit
        var CHUNK_SIZE = 64 * 1024 * 1024;

        function cacheRemotePackage(
          db,
          packageName,
          packageData,
          packageMeta,
          callback,
          errback
        ) {
          var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
          var packages = transactionPackages.objectStore(PACKAGE_STORE_NAME);
          var chunkSliceStart = 0;
          var nextChunkSliceStart = 0;
          var chunkCount = Math.ceil(packageData.byteLength / CHUNK_SIZE);
          var finishedChunks = 0;
          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            nextChunkSliceStart += CHUNK_SIZE;
            var putPackageRequest = packages.put(
              packageData.slice(chunkSliceStart, nextChunkSliceStart),
              'package/' + packageName + '/' + chunkId
            );
            chunkSliceStart = nextChunkSliceStart;
            putPackageRequest.onsuccess = function(event) {
              finishedChunks++;
              if (finishedChunks == chunkCount) {
                var transaction_metadata = db.transaction(
                  [METADATA_STORE_NAME],
                  IDB_RW
                );
                var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
                var putMetadataRequest = metadata.put(
                  {
                    'uuid': packageMeta.uuid,
                    'chunkCount': chunkCount
                  },
                  'metadata/' + packageName
                );
                putMetadataRequest.onsuccess = function(event) {
                  callback(packageData);
                };
                putMetadataRequest.onerror = function(error) {
                  errback(error);
                };
              }
            };
            putPackageRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

        /* Check if there's a cached package, and if so whether it's the latest available */
        function checkCachedPackage(db, packageName, callback, errback) {
          var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
          var metadata = transaction.objectStore(METADATA_STORE_NAME);
          var getRequest = metadata.get('metadata/' + packageName);
          getRequest.onsuccess = function(event) {
            var result = event.target.result;
            if (!result) {
              return callback(false, null);
            } else {
              return callback(PACKAGE_UUID === result['uuid'], result);
            }
          };
          getRequest.onerror = function(error) {
            errback(error);
          };
        }

        function fetchCachedPackage(db, packageName, metadata, callback, errback) {
          var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
          var packages = transaction.objectStore(PACKAGE_STORE_NAME);

          var chunksDone = 0;
          var totalSize = 0;
          var chunkCount = metadata['chunkCount'];
          var chunks = new Array(chunkCount);

          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            var getRequest = packages.get('package/' + packageName + '/' + chunkId);
            getRequest.onsuccess = function(event) {
              // If there's only 1 chunk, there's nothing to concatenate it with so we can just return it now
              if (chunkCount == 1) {
                callback(event.target.result);
              } else {
                chunksDone++;
                totalSize += event.target.result.byteLength;
                chunks.push(event.target.result);
                if (chunksDone == chunkCount) {
                  if (chunksDone == 1) {
                    callback(event.target.result);
                  } else {
                    var tempTyped = new Uint8Array(totalSize);
                    var byteOffset = 0;
                    for (var chunkId in chunks) {
                      var buffer = chunks[chunkId];
                      tempTyped.set(new Uint8Array(buffer), byteOffset);
                      byteOffset += buffer.byteLength;
                      buffer = undefined;
                    }
                    chunks = undefined;
                    callback(tempTyped.buffer);
                    tempTyped = undefined;
                  }
                }
              }
            };
            getRequest.onerror = function(error) {
              errback(error);
            };
          }
        }
      
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_pyapp.data');

      };
      Module['addRunDependency']('datafile_pyapp.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        function preloadFallback(error) {
          console.error(error);
          console.error('falling back to default preload behavior');
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
        };

        openDatabase(
          function(db) {
            checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
              function(useCached, metadata) {
                Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
                if (useCached) {
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, metadata, processPackageData, preloadFallback);
                } else {
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                    function(packageData) {
                      cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                        function(error) {
                          console.error(error);
                          processPackageData(packageData);
                        });
                    }
                  , preloadFallback);
                }
              }
            , preloadFallback);
          }
        , preloadFallback);

        if (Module['setStatus']) Module['setStatus']('Downloading...');
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/web-presplash-default.jpg", "start": 0, "end": 224232, "audio": 0}, {"filename": "/six.pyo", "start": 224232, "end": 251851, "audio": 0}, {"filename": "/_dummy_thread/__init__.pyo", "start": 251851, "end": 252378, "audio": 0}, {"filename": "/http/cookies.pyo", "start": 252378, "end": 252643, "audio": 0}, {"filename": "/http/client.pyo", "start": 252643, "end": 254931, "audio": 0}, {"filename": "/http/__init__.pyo", "start": 254931, "end": 255372, "audio": 0}, {"filename": "/http/cookiejar.pyo", "start": 255372, "end": 255603, "audio": 0}, {"filename": "/http/server.pyo", "start": 255603, "end": 256081, "audio": 0}, {"filename": "/xmlrpc/client.pyo", "start": 256081, "end": 256311, "audio": 0}, {"filename": "/xmlrpc/__init__.pyo", "start": 256311, "end": 256754, "audio": 0}, {"filename": "/xmlrpc/server.pyo", "start": 256754, "end": 256984, "audio": 0}, {"filename": "/_thread/__init__.pyo", "start": 256984, "end": 257499, "audio": 0}, {"filename": "/libpasteurize/__init__.pyo", "start": 257499, "end": 257613, "audio": 0}, {"filename": "/libpasteurize/main.pyo", "start": 257613, "end": 262808, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_future_builtins.pyo", "start": 262808, "end": 264296, "audio": 0}, {"filename": "/libpasteurize/fixes/__init__.pyo", "start": 264296, "end": 265226, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports2.pyo", "start": 265226, "end": 274967, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_features.pyo", "start": 274967, "end": 278006, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise_.pyo", "start": 278006, "end": 279506, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_getcwd.pyo", "start": 279506, "end": 280592, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_newstyle.pyo", "start": 280592, "end": 281917, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_unpacking.pyo", "start": 281917, "end": 287097, "audio": 0}, {"filename": "/libpasteurize/fixes/feature_base.pyo", "start": 287097, "end": 288778, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_division.pyo", "start": 288778, "end": 289901, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_memoryview.pyo", "start": 289901, "end": 290777, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_throw.pyo", "start": 290777, "end": 292052, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all_future_builtins.pyo", "start": 292052, "end": 292932, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_future_standard_library_import.pyo", "start": 292932, "end": 293804, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_next.pyo", "start": 293804, "end": 295442, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports.pyo", "start": 295442, "end": 299412, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_annotations.pyo", "start": 299412, "end": 301202, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise.pyo", "start": 301202, "end": 302683, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_printfunction.pyo", "start": 302683, "end": 303460, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_kwargs.pyo", "start": 303460, "end": 307164, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_fullargspec.pyo", "start": 307164, "end": 308030, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all__future__imports.pyo", "start": 308030, "end": 308941, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_metaclass.pyo", "start": 308941, "end": 311298, "audio": 0}, {"filename": "/six-1.12.0.dist-info/top_level.txt", "start": 311298, "end": 311302, "audio": 0}, {"filename": "/six-1.12.0.dist-info/METADATA", "start": 311302, "end": 313242, "audio": 0}, {"filename": "/six-1.12.0.dist-info/RECORD", "start": 313242, "end": 313779, "audio": 0}, {"filename": "/six-1.12.0.dist-info/INSTALLER", "start": 313779, "end": 313783, "audio": 0}, {"filename": "/six-1.12.0.dist-info/LICENSE", "start": 313783, "end": 314849, "audio": 0}, {"filename": "/six-1.12.0.dist-info/WHEEL", "start": 314849, "end": 314959, "audio": 0}, {"filename": "/socketserver/__init__.pyo", "start": 314959, "end": 315446, "audio": 0}, {"filename": "/past/__init__.pyo", "start": 315446, "end": 315736, "audio": 0}, {"filename": "/past/builtins/noniterators.pyo", "start": 315736, "end": 317859, "audio": 0}, {"filename": "/past/builtins/__init__.pyo", "start": 317859, "end": 318955, "audio": 0}, {"filename": "/past/builtins/misc.pyo", "start": 318955, "end": 321292, "audio": 0}, {"filename": "/past/types/__init__.pyo", "start": 321292, "end": 321817, "audio": 0}, {"filename": "/past/types/oldstr.pyo", "start": 321817, "end": 324383, "audio": 0}, {"filename": "/past/types/basestring.pyo", "start": 324383, "end": 325425, "audio": 0}, {"filename": "/past/types/olddict.pyo", "start": 325425, "end": 327187, "audio": 0}, {"filename": "/past/utils/__init__.pyo", "start": 327187, "end": 328666, "audio": 0}, {"filename": "/past/translation/__init__.pyo", "start": 328666, "end": 338540, "audio": 0}, {"filename": "/builtins/__init__.pyo", "start": 338540, "end": 339093, "audio": 0}, {"filename": "/libfuturize/__init__.pyo", "start": 339093, "end": 339205, "audio": 0}, {"filename": "/libfuturize/fixer_util.pyo", "start": 339205, "end": 349854, "audio": 0}, {"filename": "/libfuturize/main.pyo", "start": 349854, "end": 357946, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_builtins.pyo", "start": 357946, "end": 359528, "audio": 0}, {"filename": "/libfuturize/fixes/fix_object.pyo", "start": 359528, "end": 360266, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print_with_import.pyo", "start": 360266, "end": 361042, "audio": 0}, {"filename": "/libfuturize/fixes/__init__.pyo", "start": 361042, "end": 363408, "audio": 0}, {"filename": "/libfuturize/fixes/fix_absolute_import.pyo", "start": 363408, "end": 365472, "audio": 0}, {"filename": "/libfuturize/fixes/fix_cmp.pyo", "start": 365472, "end": 366479, "audio": 0}, {"filename": "/libfuturize/fixes/fix_add__future__imports_except_unicode_literals.pyo", "start": 366479, "end": 367426, "audio": 0}, {"filename": "/libfuturize/fixes/fix_basestring.pyo", "start": 367426, "end": 368176, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division.pyo", "start": 368176, "end": 368382, "audio": 0}, {"filename": "/libfuturize/fixes/fix_input.pyo", "start": 368382, "end": 369094, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division_safe.pyo", "start": 369094, "end": 371942, "audio": 0}, {"filename": "/libfuturize/fixes/fix_execfile.pyo", "start": 371942, "end": 372974, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_literals_import.pyo", "start": 372974, "end": 373781, "audio": 0}, {"filename": "/libfuturize/fixes/fix_order___future__imports.pyo", "start": 373781, "end": 374546, "audio": 0}, {"filename": "/libfuturize/fixes/fix_bytes.pyo", "start": 374546, "end": 375500, "audio": 0}, {"filename": "/libfuturize/fixes/fix_raise.pyo", "start": 375500, "end": 377538, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print.pyo", "start": 377538, "end": 379819, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library_urllib.pyo", "start": 379819, "end": 380716, "audio": 0}, {"filename": "/libfuturize/fixes/fix_UserDict.pyo", "start": 380716, "end": 383175, "audio": 0}, {"filename": "/libfuturize/fixes/fix_xrange_with_import.pyo", "start": 383175, "end": 383936, "audio": 0}, {"filename": "/libfuturize/fixes/fix_remove_old__future__imports.pyo", "start": 383936, "end": 384824, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_keep_u.pyo", "start": 384824, "end": 385708, "audio": 0}, {"filename": "/libfuturize/fixes/fix_oldstr_wrap.pyo", "start": 385708, "end": 387006, "audio": 0}, {"filename": "/libfuturize/fixes/fix_next_call.pyo", "start": 387006, "end": 390070, "audio": 0}, {"filename": "/libfuturize/fixes/fix_metaclass.pyo", "start": 390070, "end": 395632, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library.pyo", "start": 395632, "end": 396451, "audio": 0}, {"filename": "/bin/pasteurize", "start": 396451, "end": 396752, "audio": 0}, {"filename": "/bin/futurize", "start": 396752, "end": 397051, "audio": 0}, {"filename": "/html/__init__.pyo", "start": 397051, "end": 397535, "audio": 0}, {"filename": "/html/entities.pyo", "start": 397535, "end": 397854, "audio": 0}, {"filename": "/html/parser.pyo", "start": 397854, "end": 398270, "audio": 0}, {"filename": "/lib/python2.7/threading.pyo", "start": 398270, "end": 402576, "audio": 0}, {"filename": "/lib/python2.7/subprocess.pyo", "start": 402576, "end": 402692, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/__init__.pyo", "start": 402692, "end": 407598, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/compat.pyo", "start": 407598, "end": 410976, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/time.pyo", "start": 410976, "end": 411165, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/version.pyo", "start": 411165, "end": 411661, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sysfont.pyo", "start": 411661, "end": 431767, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sprite.pyo", "start": 431767, "end": 459988, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/__init__.pyo", "start": 459988, "end": 466305, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/Py25Queue.pyo", "start": 466305, "end": 471856, "audio": 0}, {"filename": "/_markupbase/__init__.pyo", "start": 471856, "end": 472379, "audio": 0}, {"filename": "/future-0.18.2.dist-info/top_level.txt", "start": 472379, "end": 472527, "audio": 0}, {"filename": "/future-0.18.2.dist-info/entry_points.txt", "start": 472527, "end": 472616, "audio": 0}, {"filename": "/future-0.18.2.dist-info/DESCRIPTION.rst", "start": 472616, "end": 475279, "audio": 0}, {"filename": "/future-0.18.2.dist-info/METADATA", "start": 475279, "end": 478981, "audio": 0}, {"filename": "/future-0.18.2.dist-info/metadata.json", "start": 478981, "end": 480401, "audio": 0}, {"filename": "/future-0.18.2.dist-info/RECORD", "start": 480401, "end": 510547, "audio": 0}, {"filename": "/future-0.18.2.dist-info/LICENSE.txt", "start": 510547, "end": 511630, "audio": 0}, {"filename": "/future-0.18.2.dist-info/INSTALLER", "start": 511630, "end": 511634, "audio": 0}, {"filename": "/future-0.18.2.dist-info/WHEEL", "start": 511634, "end": 511727, "audio": 0}, {"filename": "/future/__init__.pyo", "start": 511727, "end": 512190, "audio": 0}, {"filename": "/future/builtins/__init__.pyo", "start": 512190, "end": 513433, "audio": 0}, {"filename": "/future/builtins/newsuper.pyo", "start": 513433, "end": 515236, "audio": 0}, {"filename": "/future/builtins/newnext.pyo", "start": 515236, "end": 515924, "audio": 0}, {"filename": "/future/builtins/newround.pyo", "start": 515924, "end": 517829, "audio": 0}, {"filename": "/future/builtins/iterators.pyo", "start": 517829, "end": 518454, "audio": 0}, {"filename": "/future/builtins/new_min_max.pyo", "start": 518454, "end": 520096, "audio": 0}, {"filename": "/future/builtins/misc.pyo", "start": 520096, "end": 521858, "audio": 0}, {"filename": "/future/builtins/disabled.pyo", "start": 521858, "end": 522883, "audio": 0}, {"filename": "/future/backports/_markupbase.pyo", "start": 522883, "end": 531495, "audio": 0}, {"filename": "/future/backports/__init__.pyo", "start": 531495, "end": 532140, "audio": 0}, {"filename": "/future/backports/socketserver.pyo", "start": 532140, "end": 545778, "audio": 0}, {"filename": "/future/backports/socket.pyo", "start": 545778, "end": 556397, "audio": 0}, {"filename": "/future/backports/misc.pyo", "start": 556397, "end": 578235, "audio": 0}, {"filename": "/future/backports/datetime.pyo", "start": 578235, "end": 628715, "audio": 0}, {"filename": "/future/backports/total_ordering.pyo", "start": 628715, "end": 631341, "audio": 0}, {"filename": "/future/backports/http/cookies.pyo", "start": 631341, "end": 646566, "audio": 0}, {"filename": "/future/backports/http/client.pyo", "start": 646566, "end": 676072, "audio": 0}, {"filename": "/future/backports/http/__init__.pyo", "start": 676072, "end": 676194, "audio": 0}, {"filename": "/future/backports/http/cookiejar.pyo", "start": 676194, "end": 724400, "audio": 0}, {"filename": "/future/backports/http/server.pyo", "start": 724400, "end": 754591, "audio": 0}, {"filename": "/future/backports/xmlrpc/client.pyo", "start": 754591, "end": 789273, "audio": 0}, {"filename": "/future/backports/xmlrpc/__init__.pyo", "start": 789273, "end": 789397, "audio": 0}, {"filename": "/future/backports/xmlrpc/server.pyo", "start": 789397, "end": 811247, "audio": 0}, {"filename": "/future/backports/html/__init__.pyo", "start": 811247, "end": 811897, "audio": 0}, {"filename": "/future/backports/html/entities.pyo", "start": 811897, "end": 877181, "audio": 0}, {"filename": "/future/backports/html/parser.pyo", "start": 877181, "end": 890948, "audio": 0}, {"filename": "/future/backports/email/base64mime.pyo", "start": 890948, "end": 893145, "audio": 0}, {"filename": "/future/backports/email/_encoded_words.pyo", "start": 893145, "end": 898699, "audio": 0}, {"filename": "/future/backports/email/feedparser.pyo", "start": 898699, "end": 909898, "audio": 0}, {"filename": "/future/backports/email/__init__.pyo", "start": 909898, "end": 911681, "audio": 0}, {"filename": "/future/backports/email/utils.pyo", "start": 911681, "end": 921268, "audio": 0}, {"filename": "/future/backports/email/_header_value_parser.pyo", "start": 921268, "end": 1002358, "audio": 0}, {"filename": "/future/backports/email/encoders.pyo", "start": 1002358, "end": 1004768, "audio": 0}, {"filename": "/future/backports/email/headerregistry.pyo", "start": 1004768, "end": 1023949, "audio": 0}, {"filename": "/future/backports/email/errors.pyo", "start": 1023949, "end": 1029441, "audio": 0}, {"filename": "/future/backports/email/iterators.pyo", "start": 1029441, "end": 1031440, "audio": 0}, {"filename": "/future/backports/email/parser.pyo", "start": 1031440, "end": 1035136, "audio": 0}, {"filename": "/future/backports/email/_policybase.pyo", "start": 1035136, "end": 1042670, "audio": 0}, {"filename": "/future/backports/email/_parseaddr.pyo", "start": 1042670, "end": 1054902, "audio": 0}, {"filename": "/future/backports/email/message.pyo", "start": 1054902, "end": 1072244, "audio": 0}, {"filename": "/future/backports/email/policy.pyo", "start": 1072244, "end": 1076301, "audio": 0}, {"filename": "/future/backports/email/charset.pyo", "start": 1076301, "end": 1083304, "audio": 0}, {"filename": "/future/backports/email/quoprimime.pyo", "start": 1083304, "end": 1090432, "audio": 0}, {"filename": "/future/backports/email/generator.pyo", "start": 1090432, "end": 1101814, "audio": 0}, {"filename": "/future/backports/email/header.pyo", "start": 1101814, "end": 1115635, "audio": 0}, {"filename": "/future/backports/email/mime/base.pyo", "start": 1115635, "end": 1116521, "audio": 0}, {"filename": "/future/backports/email/mime/__init__.pyo", "start": 1116521, "end": 1116649, "audio": 0}, {"filename": "/future/backports/email/mime/image.pyo", "start": 1116649, "end": 1117803, "audio": 0}, {"filename": "/future/backports/email/mime/text.pyo", "start": 1117803, "end": 1118916, "audio": 0}, {"filename": "/future/backports/email/mime/audio.pyo", "start": 1118916, "end": 1120557, "audio": 0}, {"filename": "/future/backports/email/mime/application.pyo", "start": 1120557, "end": 1121675, "audio": 0}, {"filename": "/future/backports/email/mime/multipart.pyo", "start": 1121675, "end": 1122674, "audio": 0}, {"filename": "/future/backports/email/mime/nonmultipart.pyo", "start": 1122674, "end": 1123616, "audio": 0}, {"filename": "/future/backports/email/mime/message.pyo", "start": 1123616, "end": 1124722, "audio": 0}, {"filename": "/future/backports/test/keycert.passwd.pem", "start": 1124722, "end": 1126552, "audio": 0}, {"filename": "/future/backports/test/nullbytecert.pem", "start": 1126552, "end": 1131987, "audio": 0}, {"filename": "/future/backports/test/__init__.pyo", "start": 1131987, "end": 1132111, "audio": 0}, {"filename": "/future/backports/test/ssl_key.pem", "start": 1132111, "end": 1133027, "audio": 0}, {"filename": "/future/backports/test/nokia.pem", "start": 1133027, "end": 1134950, "audio": 0}, {"filename": "/future/backports/test/keycert2.pem", "start": 1134950, "end": 1136745, "audio": 0}, {"filename": "/future/backports/test/badcert.pem", "start": 1136745, "end": 1138673, "audio": 0}, {"filename": "/future/backports/test/ssl_cert.pem", "start": 1138673, "end": 1139540, "audio": 0}, {"filename": "/future/backports/test/badkey.pem", "start": 1139540, "end": 1141702, "audio": 0}, {"filename": "/future/backports/test/dh512.pem", "start": 1141702, "end": 1142104, "audio": 0}, {"filename": "/future/backports/test/support.pyo", "start": 1142104, "end": 1191341, "audio": 0}, {"filename": "/future/backports/test/ssl_servers.pyo", "start": 1191341, "end": 1199455, "audio": 0}, {"filename": "/future/backports/test/sha256.pem", "start": 1199455, "end": 1207799, "audio": 0}, {"filename": "/future/backports/test/ssl_key.passwd.pem", "start": 1207799, "end": 1208762, "audio": 0}, {"filename": "/future/backports/test/nullcert.pem", "start": 1208762, "end": 1208762, "audio": 0}, {"filename": "/future/backports/test/pystone.pyo", "start": 1208762, "end": 1215499, "audio": 0}, {"filename": "/future/backports/test/keycert.pem", "start": 1215499, "end": 1217282, "audio": 0}, {"filename": "/future/backports/test/https_svn_python_org_root.pem", "start": 1217282, "end": 1219851, "audio": 0}, {"filename": "/future/backports/urllib/__init__.pyo", "start": 1219851, "end": 1219975, "audio": 0}, {"filename": "/future/backports/urllib/response.pyo", "start": 1219975, "end": 1224020, "audio": 0}, {"filename": "/future/backports/urllib/robotparser.pyo", "start": 1224020, "end": 1230150, "audio": 0}, {"filename": "/future/backports/urllib/parse.pyo", "start": 1230150, "end": 1255515, "audio": 0}, {"filename": "/future/backports/urllib/request.pyo", "start": 1255515, "end": 1327448, "audio": 0}, {"filename": "/future/backports/urllib/error.pyo", "start": 1327448, "end": 1329901, "audio": 0}, {"filename": "/future/standard_library/__init__.pyo", "start": 1329901, "end": 1343721, "audio": 0}, {"filename": "/future/tests/base.pyo", "start": 1343721, "end": 1356630, "audio": 0}, {"filename": "/future/tests/__init__.pyo", "start": 1356630, "end": 1356743, "audio": 0}, {"filename": "/future/moves/itertools.pyo", "start": 1356743, "end": 1357086, "audio": 0}, {"filename": "/future/moves/_markupbase.pyo", "start": 1357086, "end": 1357437, "audio": 0}, {"filename": "/future/moves/__init__.pyo", "start": 1357437, "end": 1357817, "audio": 0}, {"filename": "/future/moves/copyreg.pyo", "start": 1357817, "end": 1358232, "audio": 0}, {"filename": "/future/moves/socketserver.pyo", "start": 1358232, "end": 1358587, "audio": 0}, {"filename": "/future/moves/configparser.pyo", "start": 1358587, "end": 1358903, "audio": 0}, {"filename": "/future/moves/subprocess.pyo", "start": 1358903, "end": 1359413, "audio": 0}, {"filename": "/future/moves/reprlib.pyo", "start": 1359413, "end": 1359750, "audio": 0}, {"filename": "/future/moves/collections.pyo", "start": 1359750, "end": 1360474, "audio": 0}, {"filename": "/future/moves/builtins.pyo", "start": 1360474, "end": 1360852, "audio": 0}, {"filename": "/future/moves/winreg.pyo", "start": 1360852, "end": 1361190, "audio": 0}, {"filename": "/future/moves/_thread.pyo", "start": 1361190, "end": 1361529, "audio": 0}, {"filename": "/future/moves/queue.pyo", "start": 1361529, "end": 1361863, "audio": 0}, {"filename": "/future/moves/sys.pyo", "start": 1361863, "end": 1362187, "audio": 0}, {"filename": "/future/moves/pickle.pyo", "start": 1362187, "end": 1362581, "audio": 0}, {"filename": "/future/moves/_dummy_thread.pyo", "start": 1362581, "end": 1362938, "audio": 0}, {"filename": "/future/moves/dbm/__init__.pyo", "start": 1362938, "end": 1363450, "audio": 0}, {"filename": "/future/moves/dbm/ndbm.pyo", "start": 1363450, "end": 1363788, "audio": 0}, {"filename": "/future/moves/dbm/gnu.pyo", "start": 1363788, "end": 1364125, "audio": 0}, {"filename": "/future/moves/dbm/dumb.pyo", "start": 1364125, "end": 1364467, "audio": 0}, {"filename": "/future/moves/http/cookies.pyo", "start": 1364467, "end": 1364855, "audio": 0}, {"filename": "/future/moves/http/client.pyo", "start": 1364855, "end": 1365184, "audio": 0}, {"filename": "/future/moves/http/__init__.pyo", "start": 1365184, "end": 1365408, "audio": 0}, {"filename": "/future/moves/http/cookiejar.pyo", "start": 1365408, "end": 1365764, "audio": 0}, {"filename": "/future/moves/http/server.pyo", "start": 1365764, "end": 1366364, "audio": 0}, {"filename": "/future/moves/xmlrpc/client.pyo", "start": 1366364, "end": 1366679, "audio": 0}, {"filename": "/future/moves/xmlrpc/__init__.pyo", "start": 1366679, "end": 1366799, "audio": 0}, {"filename": "/future/moves/xmlrpc/server.pyo", "start": 1366799, "end": 1367114, "audio": 0}, {"filename": "/future/moves/html/__init__.pyo", "start": 1367114, "end": 1367809, "audio": 0}, {"filename": "/future/moves/html/entities.pyo", "start": 1367809, "end": 1368168, "audio": 0}, {"filename": "/future/moves/html/parser.pyo", "start": 1368168, "end": 1368519, "audio": 0}, {"filename": "/future/moves/test/__init__.pyo", "start": 1368519, "end": 1368806, "audio": 0}, {"filename": "/future/moves/test/support.pyo", "start": 1368806, "end": 1369258, "audio": 0}, {"filename": "/future/moves/urllib/__init__.pyo", "start": 1369258, "end": 1369547, "audio": 0}, {"filename": "/future/moves/urllib/response.pyo", "start": 1369547, "end": 1370043, "audio": 0}, {"filename": "/future/moves/urllib/robotparser.pyo", "start": 1370043, "end": 1370409, "audio": 0}, {"filename": "/future/moves/urllib/parse.pyo", "start": 1370409, "end": 1371272, "audio": 0}, {"filename": "/future/moves/urllib/request.pyo", "start": 1371272, "end": 1372505, "audio": 0}, {"filename": "/future/moves/urllib/error.pyo", "start": 1372505, "end": 1373065, "audio": 0}, {"filename": "/future/moves/tkinter/commondialog.pyo", "start": 1373065, "end": 1373543, "audio": 0}, {"filename": "/future/moves/tkinter/colorchooser.pyo", "start": 1373543, "end": 1374021, "audio": 0}, {"filename": "/future/moves/tkinter/messagebox.pyo", "start": 1374021, "end": 1374491, "audio": 0}, {"filename": "/future/moves/tkinter/__init__.pyo", "start": 1374491, "end": 1375269, "audio": 0}, {"filename": "/future/moves/tkinter/scrolledtext.pyo", "start": 1375269, "end": 1375743, "audio": 0}, {"filename": "/future/moves/tkinter/constants.pyo", "start": 1375743, "end": 1376209, "audio": 0}, {"filename": "/future/moves/tkinter/dialog.pyo", "start": 1376209, "end": 1376659, "audio": 0}, {"filename": "/future/moves/tkinter/ttk.pyo", "start": 1376659, "end": 1377097, "audio": 0}, {"filename": "/future/moves/tkinter/filedialog.pyo", "start": 1377097, "end": 1377563, "audio": 0}, {"filename": "/future/moves/tkinter/tix.pyo", "start": 1377563, "end": 1378001, "audio": 0}, {"filename": "/future/moves/tkinter/font.pyo", "start": 1378001, "end": 1378447, "audio": 0}, {"filename": "/future/moves/tkinter/simpledialog.pyo", "start": 1378447, "end": 1378921, "audio": 0}, {"filename": "/future/moves/tkinter/dnd.pyo", "start": 1378921, "end": 1379363, "audio": 0}, {"filename": "/future/types/__init__.pyo", "start": 1379363, "end": 1381960, "audio": 0}, {"filename": "/future/types/newobject.pyo", "start": 1381960, "end": 1383482, "audio": 0}, {"filename": "/future/types/newrange.pyo", "start": 1383482, "end": 1388734, "audio": 0}, {"filename": "/future/types/newopen.pyo", "start": 1388734, "end": 1390116, "audio": 0}, {"filename": "/future/types/newmemoryview.pyo", "start": 1390116, "end": 1390984, "audio": 0}, {"filename": "/future/types/newlist.pyo", "start": 1390984, "end": 1393504, "audio": 0}, {"filename": "/future/types/newdict.pyo", "start": 1393504, "end": 1395846, "audio": 0}, {"filename": "/future/types/newint.pyo", "start": 1395846, "end": 1407161, "audio": 0}, {"filename": "/future/types/newbytes.pyo", "start": 1407161, "end": 1419958, "audio": 0}, {"filename": "/future/types/newstr.pyo", "start": 1419958, "end": 1431630, "audio": 0}, {"filename": "/future/utils/surrogateescape.pyo", "start": 1431630, "end": 1435495, "audio": 0}, {"filename": "/future/utils/__init__.pyo", "start": 1435495, "end": 1450802, "audio": 0}, {"filename": "/copyreg/__init__.pyo", "start": 1450802, "end": 1451280, "audio": 0}, {"filename": "/winreg/__init__.pyo", "start": 1451280, "end": 1451795, "audio": 0}, {"filename": "/queue/__init__.pyo", "start": 1451795, "end": 1452307, "audio": 0}, {"filename": "/tkinter/commondialog.pyo", "start": 1452307, "end": 1452772, "audio": 0}, {"filename": "/tkinter/colorchooser.pyo", "start": 1452772, "end": 1453237, "audio": 0}, {"filename": "/tkinter/messagebox.pyo", "start": 1453237, "end": 1453694, "audio": 0}, {"filename": "/tkinter/__init__.pyo", "start": 1453694, "end": 1454584, "audio": 0}, {"filename": "/tkinter/scrolledtext.pyo", "start": 1454584, "end": 1455045, "audio": 0}, {"filename": "/tkinter/constants.pyo", "start": 1455045, "end": 1455498, "audio": 0}, {"filename": "/tkinter/dialog.pyo", "start": 1455498, "end": 1455935, "audio": 0}, {"filename": "/tkinter/ttk.pyo", "start": 1455935, "end": 1456360, "audio": 0}, {"filename": "/tkinter/filedialog.pyo", "start": 1456360, "end": 1456968, "audio": 0}, {"filename": "/tkinter/tix.pyo", "start": 1456968, "end": 1457393, "audio": 0}, {"filename": "/tkinter/font.pyo", "start": 1457393, "end": 1457826, "audio": 0}, {"filename": "/tkinter/simpledialog.pyo", "start": 1457826, "end": 1458287, "audio": 0}, {"filename": "/tkinter/dnd.pyo", "start": 1458287, "end": 1458716, "audio": 0}, {"filename": "/reprlib/__init__.pyo", "start": 1458716, "end": 1459190, "audio": 0}], "remote_package_size": 1459190, "package_uuid": "75887a40-2d42-4ab7-8eb6-7d35c8954e64"});
  
  })();
  