# There are four steps to building and using the custom image:
# 1. Create a Docker file.
# 2. Build the image.
# 3. Push the image into your registry.
# 4. Change the agent configuration on the master.

FROM jenkins/agent
USER root
RUN apt-get update -y && \
    apt-get install -y python3-pip python3 curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
USER jenkins
CMD ["bash"]
