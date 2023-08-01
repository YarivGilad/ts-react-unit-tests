

import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/users/1234", (req, res, ctx) => {
    return res(ctx.json({ name: "Yossi" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should get the data", async () => {

    const { result } = renderHook(() => useAPI());

    await waitFor(() => {
        expect(result.current).toEqual({ name: "Yossi" });
    });
    
});