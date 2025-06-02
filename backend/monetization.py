from fastapi import APIRouter

router = APIRouter(prefix="/monetization", tags=["monetization"])

@router.get("/commission")
async def commission(amount: float, rate: float):
    """Заглушка расчёта комиссии"""
    return {"commission": round(amount * rate, 2)}

