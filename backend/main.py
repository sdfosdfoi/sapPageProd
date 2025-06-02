from fastapi import FastAPI

from core import router as core_router
from routing import router as routing_router
from security import router as security_router
from integration import router as integration_router
from payouts import router as payouts_router
from monetization import router as monetization_router
from merchant import router as merchant_router
from disputes import router as disputes_router
from notifications import router as notifications_router
from logging import router as logging_router

app = FastAPI(
    title="SaaS Processing Center",
    description="API ядра платёжного SaaS-процессинга"
)

# Основные роутеры:
app.include_router(core_router)
app.include_router(routing_router)
app.include_router(security_router)
app.include_router(integration_router)
app.include_router(payouts_router)
app.include_router(monetization_router)
app.include_router(merchant_router)
app.include_router(disputes_router)
app.include_router(notifications_router)
app.include_router(logging_router)

@app.get("/ping")
async def ping():
    return {"pong": True}
