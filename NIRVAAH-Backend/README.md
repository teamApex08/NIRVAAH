# NIRVAAH Backend

Modular monolith backend starter structure for the NIRVAAH project.

The application is organized around business modules. Each module owns its
domain model, application use cases, infrastructure adapters, API interfaces,
and tests. Shared code stays small and generic. Platform code wires the system
together.

## Directory Layout

```text
NIRVAAH-Backend/
  apps/                 Runtime entrypoints
    api/                HTTP/API app composition
    worker/             Background job or async processing entrypoint
  docs/                 Architecture and module guidelines
  scripts/              Local automation scripts
  tooling/              Developer tooling configuration
  src/
    bootstrap/          App startup, dependency composition, module loading
    modules/            Business bounded contexts
      _template/        Copy this when adding a new module
      identity/         Authentication, users, roles, access boundaries
      workflow/         Process flows, tasks, approvals, state transitions
      notifications/    Email, SMS, push, in-app notification workflows
    platform/           Technical capabilities shared by the whole app
    shared/             Shared kernel with generic primitives only
  tests/
    integration/        Cross-module integration tests
    e2e/                End-to-end tests through public interfaces
```

## Dependency Rules

- `domain` contains business rules and should not depend on infrastructure.
- `application` contains use cases and depends on `domain`.
- `infrastructure` implements persistence, external APIs, queues, and adapters.
- `interfaces` exposes module behavior through HTTP, CLI, events, or similar.
- Modules should not reach into another module's internals.
- Cross-module communication should go through public contracts, events, or
  application services.
- `shared` must stay generic. If code contains module-specific business meaning,
  keep it in that module.

## Next Steps

1. Pick the implementation stack.
2. Add the framework/runtime files at the root.
3. Replace starter modules with the actual NIRVAAH bounded contexts.
4. Add one vertical slice before expanding shared abstractions.
