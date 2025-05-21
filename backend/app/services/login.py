from app.worker.tasks import login_scrape_task

def trigger_login_scrape(username: str, password: str):
    task = login_scrape_task.delay(username, password)
    return task.id