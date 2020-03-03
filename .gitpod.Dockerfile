FROM gitpod/workspace-full

USER gitpod

RUN bash -c ". .nvm/nvm.sh \
  && nvm install v12 && npm install -g yarn" \