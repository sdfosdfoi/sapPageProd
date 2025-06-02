from fastapi import APIRouter

router = APIRouter(prefix="/payouts", tags=["payouts"])

@router.post("/")
async def create_payout(request: dict):
    return {"payout_id": 123, "status": "initiated"}

