from celery import Celery
import time

celery = Celery(__name__, broker="redis://redis:6379/0")

@celery.task
def login_scrape_task(username: str, password: str):
    print(f"Scraping for user: {username}")
    time.sleep(5)
    return {"status": "done", "user": username}