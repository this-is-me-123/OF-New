from fastapi import APIRouter
from app.services.login import trigger_login_scrape

router = APIRouter()

@router.post("/login-scrape")
async def login_scrape(username: str, password: str):
    task_id = trigger_login_scrape(username, password)
    return {"message": "Scrape started", "task_id": task_id}