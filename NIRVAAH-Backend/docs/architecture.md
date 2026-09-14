# Modular Monolith Architecture

NIRVAAH starts as a monolith for simple deployment and fast development, while
using module boundaries to keep the codebase ready for scale.

## Core Idea

Each module represents a bounded context. A module should be understandable,
testable, and changeable without scanning the entire application.

## Module Layers

- `domain`: entities, value objects, aggregates, domain services, domain events.
- `application`: use cases, commands, queries, ports, transaction boundaries.
- `infrastructure`: database repositories, external clients, queue adapters.
- `interfaces`: HTTP controllers, request/response DTOs, event subscribers.
- `tests`: focused tests for the module.

## Boundary Rules

- Domain code should be framework-independent.
- Infrastructure can depend on platform services, but domain should not.
- Module internals are private unless explicitly exported through a public API.
- Shared kernel code should be stable, tiny, and business-agnostic.
- Prefer duplication across modules over premature shared abstractions.

## Suggested Flow

```text
interfaces -> application -> domain
                 |
                 v
          infrastructure via ports
```

The bootstrap layer composes concrete infrastructure implementations with
application use cases at startup.
