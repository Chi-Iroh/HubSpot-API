# [HubSpot API](https://developers.hubspot.com/docs/api/overview) Client

A TypeScript client to communicate with HubSpot API.

<br>

## Setup
Install <ins>nodejs</ins> and <ins>ts-node</ins> with your package manager (pacman, apt, dnf etc..).

## Run
```bash
ts-node Example.ts
```

## Architecture
```mermaid
graph TD;
    A[Client] --> B[HTTP request manager];
    A --> C[Contacts manager];
    A --> D[Companies manager];
    A --> E[Tickets manager];
    A --> F[Transactions manager];
    A --> G[Error display];
```

Note: <ins>NI</ins> = **Not Implemented**

```mermaid
graph TD;
    A[Contacts manager] --> B[Create];
    A --> C[Get all];
    A --> D[Get by ID];
    A --> E["Remove (NI)"];
```

```mermaid
graph TD;
    A[Companies manager] --> B["Get all (NI)"];
    A --> C["Get by ID (NI)"];
    A --> D["Create (NI)"];
    A --> E["Update (NI)"];
    A --> F["Remove (NI)"];
```
```mermaid
graph TD;
    A[Tickets manager] --> B["Get all (NI)"];
    A --> C["Get by ID (NI)"];
    A --> D["Create (NI)"];
    A --> E["Update (NI)"];
    A --> F["Remove (NI)"];
```
```mermaid
graph TD;
    A[Transactions manager] --> B["Get all (NI)"];
    A --> C["Get by ID (NI)"];
    A --> D["Create (NI)"];
    A --> E["Update (NI)"];
    A --> F["Remove (NI)"];
```

## Hooks
<ul>
<li><code>prepare-commit-msg</code> checks if the commit message is like <code>[TYPE] : Message</code>, to have clear commit names and instantly understand what's going on.</li>
<li><code>pre-commit</code> checks if there's nothing inside any file which matches with HubSpot API key pattern. It also check filenames themselves (including directories).