# Module Template

To add a module:

1. Copy `src/modules/_template` to `src/modules/<module-name>`.
2. Rename the README title and describe the module responsibility.
3. Add domain objects first.
4. Add application use cases around those domain rules.
5. Add infrastructure adapters only after the use case needs them.
6. Expose the smallest useful interface from `interfaces/`.

Keep module names business-oriented, such as `identity`, `workflow`, `payments`,
or `reports`.
