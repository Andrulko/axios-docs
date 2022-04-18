---
title: 'Anfragenkonfigurationsschema'
prev_title: 'Die Axios-Instanz'
prev_link: '/de/docs/instance'
next_title: 'Antwortenschema'
next_link: '/de/docs/res_schema'
---


Dies sind die verfügbaren Konfigurationsoptionen für HTTP-Anfragen. Nur das feld `url` wird benötigt. Für Anfragen wird standardmäßig die `GET`-Methode verwendet sofern die HTTP-Methode nicht explizit mit der Option `method` spezifiziert wird.

```js
{
  // `url` ist die Server-URL, die für die Anfrage verwendet wird. url: '/user',

  // `method` ist die zu verwendende HTTP-Methode
  method: 'get', // Standardwert

  // `baseURL` wird `url` vorangestellt außer bei `url` handelt es sich um eine absolute URL.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` erlaubt Änderungen an den Anfragendaten bevor sie zum
  // Server geschickt werden. Dies funktioniert nur bei den Methoden 'PUT',
  // 'POST', 'PATCH' und 'DELETE'. Die letzte Funktion in der liste muss einen
  // String,  Buffer, ArrayBuffer, FormData oder Stream zurückgeben. // Das objekt `headers` darf bearbeitet werden.
  transformRequest: [function (data, headers) {
    // Tun sie was auch immer sie wollen um die daten zu transformieren

    return data;
  }],

  // `transformResponse` erlaubt Änderungen an denzZurückgegebenen Daten bevor
  // diese an `then` bzw. `catch` weitergeben werden. transformResponse: [function (data) {
    // Tun sie was auch immer sie wollen um die daten zu transformieren

    return data;
  }],

  // Eigene Headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` sind die URL-Parameter, die in der Anfrage geschickt werden.
  params: {
    ID: 12345
  },

  // Mit `paramsSerializer` kann optional die Funktion zur Serialisierung des
  // Feldes `params` manuell überschrieben werden. // (z.Bsp. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` beinhaltet die Daten, die im Körper der Anfrage übertragen werden sollen. // `data` wird nur bei den HTTP-Methoden 'PUT', 'POST', 'DELETE' und 'PATCH' berücksichtigt. // Wenn `transformRequest` nicht gesetzt ist, muss das Feld einer der folgenden Datentypen sein:
  //  - String, einfaches Objekt, ArrayBuffer, ArrayBufferView, URLSearchParams
  //  - Im Browser auch: FormData, File, Blob
  //  - In Node.js auch: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // Daten können auch so gesendet werden:
  data: 'Country=Brasil&City=Belo Horizonte',

  // Maximale Anzahl an Millisekunden bevor die Anfrage abgebrochen wird
  timeout: 1000, // Standardwert: `0` (kein timeout)

  // `withCredentials` gibt an, ob Cross-Site-Access-Control-Anfragen mit Credentials
  // ausgeführt werden sollen
  withCredentials: false, // Standardwert

  // `adapter` erlaubt ein einfacheres Testen, siehe https://github.com/axios/axios/blob/master/lib/adapters/README.md
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` Gibt den Datentypen der Serverantwort an.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  // Mögliche Werte sind: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // (Nur im Browser auch 'blob')
  responseType: 'json', // Standardwert

  // `responseEncoding` (Nur in nodejs) gibt das Encoding das zur Dekodierung der Antwort verwendet werden soll an
  responseEncoding: 'utf8', // Standartwert

  // `xsrfCookieName` Name des Cookies zur nutzung für XSRF-tokens
  xsrfCookieName: 'XSRF-TOKEN', // Standardwert

  // `xsrfHeaderName` Name des Headers der das XSRF-token trägt
  xsrfHeaderName: 'X-XSRF-TOKEN', // Standardwert

  // `onUploadProgress` erlaubt die Behandlung von Progress-Events im Browser
  // Nur im Browser
  onUploadProgress: function (progressEvent) {
    // Progress-Event Verarbeiten
  },

  // `onDownloadProgress` erlaubt die Behandlung von Progress-Events im Browser
  // Nur im Browser
  onDownloadProgress: function (progressEvent) {
    /// Progress-Event Verarbeiten
  },

  // `maxContentLength` definiert die maximale Größe der Antwort (nur in Nodejs)
  maxContentLength: 2000,

  // `maxBodyLength` definiert die maximale Größe des Anfragenkörpers (nur in Nodejs)
  maxBodyLength: 2000,

  // `validateStatus` Gibt, basierend auf dem Status-Code an, ob die Anfrage erfolgreich war. validateStatus: function (status) {
    return status >= 200 && status < 300; // Standardwert
  },

  // Maximale Menge an Redirects denen gefolgt wird
  maxRedirects: 5, // default

  // Pfad zu einem UNIX-Socket, der in Nodejs verwendet werden soll
  socketPath: null, // default

  // Eigene Agenten zur Verarbeitung von http und https. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  Nur in nodejs
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` definiert Hostname, Port, und Protokoll des Proxy-Servers.
  // Ein Proxy kann auch durch das Setzen der Umgebungsvariablen
  // http_proxy und https_proxy konfiguriert werden. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` gibt die HTTP basic auth credentials des Proxy-Servers an.
  // Dies wird den `Proxy-Authorization` Header geschrieben.
  // If the proxy server uses HTTPS, then you must set the protocol to `https`. 
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // Siehe https://axios-http.com/de/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // Nur in nodejs (kann in XHR nicht deaktiviert werden) gibt dieser wert an ob
  // die daten automatisch dekomprimiert werden sollen
  decompress: true // default
} If set to `true` will also remove the 'content-encoding' header 
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default

}
```
