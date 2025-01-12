# kubernetes-helm-prometheus-grafana
This repository contains a demonstration of deploying a simple To-Do App with a frontend and backend using Kubernetes, packaged with Helm. The app is instrumented to expose metrics for monitoring, and the setup includes Prometheus for metric collection and Grafana for visualization.

# Technologies Used
Kubernetes: Container orchestration platform.
Helm: Kubernetes package manager for defining, installing, and managing Kubernetes applications.
Docker: Containerization platform to package the app.
Prometheus: Open-source monitoring and alerting toolkit for Kubernetes.
Grafana: Data visualization tool for monitoring with Prometheus.

# Prerequisites
To get started, ensure the following tools are installed:

# Kubernetes Cluster: Minikube or a cloud-based Kubernetes service (e.g., AWS EKS, Google GKE, Azure AKS).
Helm: To deploy Kubernetes applications.
Kubectl: Command-line tool for Kubernetes.
Docker: For building container images.
Optional for Monitoring:
Prometheus Operator: For managing Prometheus instances.
Grafana: For dashboards and visualizations.
