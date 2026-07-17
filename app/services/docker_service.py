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
def start_container(name):
    container = client.containers.get(name)
    container.start()
    return {
        "success": True,
        "message": f"{name} started"
    }


def stop_container(name):
    container = client.containers.get(name)
    container.stop()
    return {
        "success": True,
        "message": f"{name} stopped"
    }


def restart_container(name):
    container = client.containers.get(name)
    container.restart()
    return {
        "success": True,
        "message": f"{name} restarted"
    }


def get_logs(name, tail=100):
    container = client.containers.get(name)
    return {
        "logs": container.logs(tail=tail).decode("utf-8")
    }
