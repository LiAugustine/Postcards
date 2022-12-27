from fastapi import FastAPI

app = FastAPI()


@app.get("/api/HelloWorld")
async def root():
    return {"Hello World"}
