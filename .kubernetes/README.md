# Kubernetes Kustomize Configuration

## Structure

```
.kubernetes/
├── base/                    # Base resources (namespace-agnostic)
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── kustomization.yaml
├── dev/                     # Development environment
│   └── kustomization.yaml
└── prod/                    # Production environment
    └── kustomization.yaml
```

## Usage

### Preview rendered manifests

```bash
# Production
kubectl kustomize .kubernetes/prod

# Development
kubectl kustomize .kubernetes/dev
```

### Deploy

```bash
# Production
kubectl apply -k .kubernetes/prod

# Development
kubectl apply -k .kubernetes/dev
```

### Create new environment

1. Create new overlay directory:

   ```bash
   mkdir -p .kubernetes/my-env
   ```

2. Create `kustomization.yaml`:

   ```yaml
   apiVersion: kustomize.config.k8s.io/v1beta1
   kind: Kustomization

   namespace: my-namespace

   resources:
     - ../base

   patches:
     - target:
         kind: Ingress
         name: community
       patch: |-
         - op: replace
           path: /spec/rules/0/host
           value: my-domain.com
         - op: replace
           path: /spec/tls/0/hosts/0
           value: my-domain.com
         - op: replace
           path: /spec/tls/0/secretName
           value: my-tls-secret

   images:
     - name: harbor.arsolitt.tech/community42/portfolio
       newTag: v0.19
   ```

3. Deploy:

   ```bash
   kubectl apply -k .kubernetes/my-env
   ```

## Customization options

Each overlay can customize:

- **namespace** - target Kubernetes namespace
- **host** - domain name in Ingress
- **tls secret** - TLS certificate secret name
- **image tag** - container image version
- **replicas** - number of pod replicas
- **resources** - CPU/memory limits and requests
