import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_ping():
    resp = client.get("/ping")
    assert resp.status_code == 200
    assert resp.json() == {"pong": True}

def test_bin_analyze():
    resp = client.get("/core/bin-analyze", params={"bin_number": "411111"})
    assert resp.status_code == 200
    assert resp.json()["bin"] == "411111"

def test_create_payout():
    resp = client.post("/payouts/", json={"amount": 1000, "currency": "RUB", "dst": "card"})
    assert resp.status_code == 200
    assert "payout_id" in resp.json()

