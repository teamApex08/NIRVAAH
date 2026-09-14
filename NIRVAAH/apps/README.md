# Apps

Runtime entrypoints live here. Keep them thin: they should load configuration,
compose modules, start transports, and delegate behavior to `src/`.

- `web`: React/Vite product landing page.
- `api`: HTTP/API app composition.
- `worker`: Background job or async processing entrypoint.
