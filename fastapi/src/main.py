from fastapi import FastAPI
from bot import query

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.get("/chat/")
async def read_chat(q: str | None = None, id: str | None = None):
    if q is None:
        return {"chat": "No chat"}

    response = query(q, id)

    return {"chat": str(response)}
