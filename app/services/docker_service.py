import docker

client = docker.from_env()

def get_docker_info():
    containers = client.containers.list(all=True)

    return {
        "running": True,
        "version": client.version()["Version"],
        "running_containers": len(client.containers.list()),
        "total_containers": len(containers),
    }
def list_containers():
    containers = client.containers.list(all=True)

    data = []

    for c in containers:
        data.append({
            "id": c.short_id,
            "name": c.name,
            "image": c.image.tags[0] if c.image.tags else "<none>",
            "status": c.status,
        })

    return data
