
export function Fetch(url, httpMethod, body, callback) {
  let _callback = callback;

  if (typeof body === 'function')
    _callback = body;

  setTimeout(() => {
    _fetch(url, httpMethod, typeof body === 'object' ? body : null)
      .then((response) => {
        //response.statusText
        //response.status

        if (!response.ok) {
          console.log('Error al recuperar el HTML');
        }

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        _callback({
          error: null,
          data: data
        });
      })
      .catch((err) => {
        console.log('fetch: ', err);
        _callback({
          error: 'Hubo un problema con la petición Fetch: ' + err.message,
          data: null
        });
      });
  }, 500);
}

function _fetch(url, httpMethod = 'GET', body = null) {
  return fetch(url, {
    method: httpMethod,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: body,
  });
}