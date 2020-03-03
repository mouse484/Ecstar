FROM gitpod/workspace-full

USER gitpod

SHELL ["/bin/bash", "-c"]
RUN \
  nvm install 12 && \
  npm install -g npm yarn