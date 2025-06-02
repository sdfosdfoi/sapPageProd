from fastapi import APIRouter

router = APIRouter(prefix="/disputes", tags=["disputes"])

@router.post("/analyze")
async def analyze_dispute(details: dict):
    """Заглушка анализа спора"""
    return {"decision": "in_review", "ai_prediction": "refund_possible"}

